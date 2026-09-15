export type HeadCloud = {
  positions: Float32Array;
  normals: Float32Array;
  sizes: Float32Array;
  accents: Float32Array;
  surfaceCount: number;
};

export type SignatureScene = {
  setReducedMotion: (reduced: boolean) => void;
  setVisible: (visible: boolean) => void;
  resize: () => void;
  dispose: () => void;
};
