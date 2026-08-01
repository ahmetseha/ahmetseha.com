import type { ReactNode } from 'react';

import { cn } from '@/lib/utils';

import type { BeamPreset } from '@/config/beam';

type HoverBeamProps = {
  children: ReactNode;
  className?: string;
  preset?: BeamPreset;
  borderRadius?: number;
};

/**
 * Keeps the beam treatment without per-card state, effects or event listeners.
 * Hover/focus activation and reduced-motion handling live entirely in CSS.
 */
export function HoverBeam({
  children,
  className,
  preset = 'surface',
  borderRadius,
}: HoverBeamProps) {
  return (
    <div
      className={cn('hover-beam', className)}
      data-beam-preset={preset}
      style={borderRadius === undefined ? undefined : { borderRadius }}
    >
      {children}
    </div>
  );
}
