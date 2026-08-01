'use client';

import { type FocusEvent, type ReactNode, useEffect, useState } from 'react';

import { BorderBeam } from 'border-beam';

import { BEAM_CONFIG, BEAM_PRESETS, type BeamPreset } from '@/config/beam';
import { cn } from '@/lib/utils';

type HoverBeamProps = {
  children: ReactNode;
  className?: string;
  preset?: BeamPreset;
  borderRadius?: number;
};

export function HoverBeam({
  children,
  className,
  preset = 'surface',
  borderRadius,
}: HoverBeamProps) {
  const [isActive, setIsActive] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const updatePreference = () => setReduceMotion(mediaQuery.matches);

    updatePreference();
    mediaQuery.addEventListener('change', updatePreference);

    return () => mediaQuery.removeEventListener('change', updatePreference);
  }, []);

  const handleBlur = (event: FocusEvent<HTMLDivElement>) => {
    if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
      setIsActive(false);
    }
  };

  return (
    <BorderBeam
      {...BEAM_CONFIG}
      {...BEAM_PRESETS[preset]}
      active={isActive && !reduceMotion}
      borderRadius={borderRadius}
      className={cn('beam-hover-surface', className)}
      onPointerEnter={() => setIsActive(true)}
      onPointerLeave={() => setIsActive(false)}
      onFocusCapture={() => setIsActive(true)}
      onBlurCapture={handleBlur}
    >
      {children}
    </BorderBeam>
  );
}
