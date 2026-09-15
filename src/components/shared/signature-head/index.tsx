'use client';

import { useEffect, useRef, useState } from 'react';

import Image from 'next/image';

import type { SignatureScene } from './types';

function supportsWebGL(): boolean {
  try {
    const canvas = document.createElement('canvas');
    return Boolean(canvas.getContext('webgl2') || canvas.getContext('webgl'));
  } catch {
    return false;
  }
}

export function SignatureHead({ src }: { src: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const sceneRef = useRef<SignatureScene | null>(null);
  const [useFallback, setUseFallback] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || !supportsWebGL()) {
      setUseFallback(true);
      return;
    }

    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const mobileQuery = window.matchMedia('(max-width: 640px)');
    let cancelled = false;

    const mount = async () => {
      const { createSignatureScene } = await import('./create-scene');
      if (cancelled || !canvasRef.current) return;

      const scene = await createSignatureScene(canvasRef.current, {
        isMobile: mobileQuery.matches,
        reducedMotion: motionQuery.matches,
        src,
      });

      if (cancelled) {
        scene.dispose();
        return;
      }

      sceneRef.current = scene;
    };

    mount().catch(() => {
      if (!cancelled) setUseFallback(true);
    });

    const onMotion = () => sceneRef.current?.setReducedMotion(motionQuery.matches);
    const onResize = () => sceneRef.current?.resize();
    const onVisibility = () => {
      sceneRef.current?.setVisible(document.visibilityState === 'visible');
    };
    const io = new IntersectionObserver(
      ([entry]) => sceneRef.current?.setVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );

    io.observe(canvas);
    motionQuery.addEventListener('change', onMotion);
    window.addEventListener('resize', onResize);
    document.addEventListener('visibilitychange', onVisibility);

    return () => {
      cancelled = true;
      io.disconnect();
      motionQuery.removeEventListener('change', onMotion);
      window.removeEventListener('resize', onResize);
      document.removeEventListener('visibilitychange', onVisibility);
      sceneRef.current?.dispose();
      sceneRef.current = null;
    };
  }, [src]);

  if (useFallback) {
    return (
      <Image src={src} alt="" fill sizes="128px" className="object-contain invert" aria-hidden="true" />
    );
  }

  return (
    <canvas
      ref={canvasRef}
      className="block h-full w-full bg-transparent"
      aria-hidden="true"
    />
  );
}
