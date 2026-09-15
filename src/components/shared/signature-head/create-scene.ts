import * as THREE from 'three';

import { buildPortraitCloud } from './build-cloud';
import { pointFragmentShader, pointVertexShader } from './shaders';
import type { SignatureScene } from './types';

export async function createSignatureScene(
  canvas: HTMLCanvasElement,
  options: { isMobile: boolean; reducedMotion: boolean; src: string }
): Promise<SignatureScene> {
  const cloud = await buildPortraitCloud(options.src, !options.isMobile);
  const dprCap = options.isMobile ? 1 : 1.5;
  const renderer = new THREE.WebGLRenderer({
    canvas,
    alpha: true,
    antialias: false,
    powerPreference: 'low-power',
    stencil: false,
  });
  renderer.setClearColor(0x000000, 0);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, dprCap));
  renderer.setSize(canvas.clientWidth, canvas.clientHeight, false);

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(28, 1, 0.1, 8);
  camera.position.set(0, 0.02, 2.35);

  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute('position', new THREE.BufferAttribute(cloud.positions, 3));
  geometry.setAttribute('aNormal', new THREE.BufferAttribute(cloud.normals, 3));
  geometry.setAttribute('aSize', new THREE.BufferAttribute(cloud.sizes, 1));
  geometry.setAttribute('aAccent', new THREE.BufferAttribute(cloud.accents, 1));

  const material = new THREE.ShaderMaterial({
    vertexShader: pointVertexShader,
    fragmentShader: pointFragmentShader,
    transparent: true,
    depthWrite: false,
    toneMapped: false,
    uniforms: {
      uPixelRatio: { value: renderer.getPixelRatio() },
      uHover: { value: 0 },
    },
  });

  const points = new THREE.Points(geometry, material);
  points.frustumCulled = false;
  const group = new THREE.Group();
  group.add(points);
  scene.add(group);

  const target = { x: 0, y: 0, hover: 0 };
  const current = { x: 0, y: 0, hover: 0 };
  let reducedMotion = options.reducedMotion;
  let visible = true;
  let frame = 0;

  const renderFrame = (now: number, dt: number) => {
    current.x += (target.x - current.x) * (1 - Math.exp(-dt * 5.2));
    current.y += (target.y - current.y) * (1 - Math.exp(-dt * 5.2));
    current.hover += (target.hover - current.hover) * (1 - Math.exp(-dt * 6));

    const idle = reducedMotion
      ? { x: 0, y: 0, lift: 0 }
      : {
          x: Math.sin(now * 0.00017) * 0.04,
          y: Math.sin(now * 0.00023) * 0.14,
          lift: Math.sin(now * 0.00085) * 0.01,
        };

    group.rotation.x = current.x + idle.x;
    group.rotation.y = current.y + idle.y;
    group.position.y = idle.lift;
    material.uniforms.uHover.value = current.hover;
    renderer.render(scene, camera);
  };

  let last = performance.now();
  const tick = (now: number) => {
    frame = requestAnimationFrame(tick);
    if (!visible) return;
    renderFrame(now, Math.min(0.05, (now - last) / 1000));
    last = now;
    if (reducedMotion) {
      cancelAnimationFrame(frame);
      frame = 0;
    }
  };

  const start = () => {
    if (frame || !visible) return;
    last = performance.now();
    frame = requestAnimationFrame(tick);
  };

  const resize = () => {
    const { clientWidth, clientHeight } = canvas;
    if (!clientWidth || !clientHeight) return;
    camera.aspect = clientWidth / clientHeight;
    camera.updateProjectionMatrix();
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, dprCap));
    renderer.setSize(clientWidth, clientHeight, false);
    material.uniforms.uPixelRatio.value = renderer.getPixelRatio();
    if (reducedMotion) renderFrame(performance.now(), 0.016);
  };

  resize();
  start();

  return {
    setPointer: (x, y) => {
      if (reducedMotion) return;
      target.y = x * 0.2;
      target.x = y * 0.12;
    },
    setHover: (hovered) => {
      if (reducedMotion) return;
      target.hover = hovered ? 1 : 0;
      if (!hovered) {
        target.x = 0;
        target.y = 0;
      }
    },
    setReducedMotion: (value) => {
      reducedMotion = value;
      if (value) {
        target.x = 0;
        target.y = 0;
        target.hover = 0;
      }
      start();
    },
    setVisible: (value) => {
      visible = value;
      if (value) start();
    },
    resize,
    dispose: () => {
      cancelAnimationFrame(frame);
      geometry.dispose();
      material.dispose();
      renderer.dispose();
    },
  };
}
