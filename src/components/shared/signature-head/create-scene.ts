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
    },
  });

  const points = new THREE.Points(geometry, material);
  points.frustumCulled = false;
  const group = new THREE.Group();
  group.add(points);
  scene.add(group);

  let reducedMotion = options.reducedMotion;
  let visible = true;
  let frame = 0;

  const renderFrame = (now: number) => {
    group.position.y = reducedMotion ? 0 : Math.sin(now * 0.00085) * 0.01;
    renderer.render(scene, camera);
  };

  let last = performance.now();
  const tick = (now: number) => {
    frame = requestAnimationFrame(tick);
    if (!visible) return;
    renderFrame(now);
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
    if (reducedMotion) renderFrame(performance.now());
  };

  resize();
  start();

  return {
    setReducedMotion: (value) => {
      reducedMotion = value;
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
