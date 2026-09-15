import type { HeadCloud } from './types';

const SAMPLE = 280;
const INK_MAX = 150;
const BG_MIN = 248;

function brightness(data: Uint8ClampedArray, index: number): number {
  const offset = index * 4;
  return (data[offset] + data[offset + 1] + data[offset + 2]) / 3;
}

function floodBackground(data: Uint8ClampedArray, width: number, height: number): Uint8Array {
  const background = new Uint8Array(width * height);
  const stack: number[] = [];

  const push = (x: number, y: number) => {
    if (x < 0 || y < 0 || x >= width || y >= height) return;
    const index = y * width + x;
    if (background[index] || brightness(data, index) < BG_MIN) return;
    background[index] = 1;
    stack.push(index);
  };

  for (let x = 0; x < width; x += 1) {
    push(x, 0);
    push(x, height - 1);
  }
  for (let y = 0; y < height; y += 1) {
    push(0, y);
    push(width - 1, y);
  }

  while (stack.length > 0) {
    const index = stack.pop() as number;
    const x = index % width;
    const y = Math.floor(index / width);
    push(x + 1, y);
    push(x - 1, y);
    push(x, y + 1);
    push(x, y - 1);
  }

  return background;
}

export async function buildPortraitCloud(src: string, dense: boolean): Promise<HeadCloud> {
  const image = new Image();
  image.src = src;
  await image.decode();

  const canvas = document.createElement('canvas');
  canvas.width = SAMPLE;
  canvas.height = SAMPLE;
  const ctx = canvas.getContext('2d', { willReadFrequently: true });
  if (!ctx) throw new Error('Canvas 2D is unavailable');
  ctx.drawImage(image, 0, 0, SAMPLE, SAMPLE);

  const { data } = ctx.getImageData(0, 0, SAMPLE, SAMPLE);
  const background = floodBackground(data, SAMPLE, SAMPLE);
  const inkStep = dense ? 1 : 2;
  const fillStep = dense ? 3 : 4;
  const positions: number[] = [];
  const normals: number[] = [];
  const sizes: number[] = [];
  const accents: number[] = [];
  const ink = new Uint8Array(SAMPLE * SAMPLE);

  let minX = SAMPLE;
  let minY = SAMPLE;
  let maxX = 0;
  let maxY = 0;

  for (let y = 0; y < SAMPLE; y += 1) {
    for (let x = 0; x < SAMPLE; x += 1) {
      const index = y * SAMPLE + x;
      if (background[index]) continue;
      minX = Math.min(minX, x);
      minY = Math.min(minY, y);
      maxX = Math.max(maxX, x);
      maxY = Math.max(maxY, y);
      if (brightness(data, index) <= INK_MAX) ink[index] = 1;
    }
  }

  const midX = (minX + maxX) / 2;
  const midY = (minY + maxY) / 2;
  const radiusX = Math.max(1, (maxX - minX) / 2);
  const radiusY = Math.max(1, (maxY - minY) / 2);

  const pushPoint = (
    x: number,
    y: number,
    inked: boolean,
    scatter: number,
    accent: number
  ) => {
    const u = (x - midX) / radiusX;
    const v = -((y - midY) / radiusY);
    const dome = Math.sqrt(Math.max(0, 1 - u * u * 0.82 - v * v * 1.05));
    const body = v > -0.18 ? 1 : 0.28 + Math.max(0, (v + 0.45) / 0.27);
    let z = dome * 0.2 * body + (inked ? 0.01 : 0);
    const px = u * 0.46 + (Math.random() - 0.5) * scatter;
    const py = v * 0.46 + (Math.random() - 0.5) * scatter;
    z += (Math.random() - 0.5) * scatter;
    const nx = -u * 0.55;
    const ny = v * 0.35;
    const nz = 0.75 + dome * 0.25;
    const length = Math.hypot(nx, ny, nz) || 1;

    positions.push(px, py, z);
    normals.push(nx / length, ny / length, nz / length);
    sizes.push(inked ? 1.55 + dome * 0.4 : 0.72 + dome * 0.35);
    accents.push(accent);
  };

  for (let y = 0; y < SAMPLE; y += 1) {
    for (let x = 0; x < SAMPLE; x += 1) {
      const index = y * SAMPLE + x;
      if (background[index]) continue;
      const inked = ink[index] === 1;
      const step = inked ? inkStep : fillStep;
      if (x % step !== 0 || y % step !== 0) continue;

      const nearTop = y < minY + (maxY - minY) * 0.28;
      const accent = inked && nearTop && Math.random() < 0.035 ? 1 : 0;
      pushPoint(x, y, inked, inked ? 0.004 : 0.01, accent);

      if (!inked && Math.random() < (dense ? 0.05 : 0.03)) {
        pushPoint(x, y, false, 0.026, 0);
      }
    }
  }

  return {
    positions: new Float32Array(positions),
    normals: new Float32Array(normals),
    sizes: new Float32Array(sizes),
    accents: new Float32Array(accents),
    surfaceCount: positions.length / 3,
  };
}
