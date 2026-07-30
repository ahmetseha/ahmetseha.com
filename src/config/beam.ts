import type { BorderBeamProps } from 'border-beam';

type BeamPreset = 'surface' | 'control';

export const BEAM_CONFIG = {
  colorVariant: 'sunset',
  theme: 'dark',
  strength: 0.78,
  duration: 2.8,
  brightness: 1.2,
  saturation: 1.2,
  hueRange: 24,
  staticColors: false,
} as const satisfies Partial<BorderBeamProps>;

export const BEAM_PRESETS = {
  surface: {
    size: 'md',
  },
  control: {
    size: 'sm',
  },
} as const satisfies Record<BeamPreset, Partial<BorderBeamProps>>;

export type { BeamPreset };
