import type { BorderBeamProps } from 'border-beam';

type BeamPreset = 'surface' | 'control' | 'line';

export const BEAM_CONFIG = {
  colorVariant: 'mono',
  theme: 'dark',
  strength: 0.6,
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
  line: {
    size: 'line',
  },
} as const satisfies Record<BeamPreset, Partial<BorderBeamProps>>;

export type { BeamPreset };
