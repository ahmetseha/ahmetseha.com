export type HeadCloud = {
  positions: Float32Array;
  normals: Float32Array;
  sizes: Float32Array;
  accents: Float32Array;
  surfaceCount: number;
};

export type SignatureScene = {
  setPointer: (x: number, y: number) => void;
  setHover: (hovered: boolean) => void;
  setReducedMotion: (reduced: boolean) => void;
  setVisible: (visible: boolean) => void;
  resize: () => void;
  dispose: () => void;
};
