export const pointVertexShader = /* glsl */ `
attribute float aSize;
attribute float aAccent;

uniform float uPixelRatio;

varying float vAccent;
varying float vAlpha;

void main() {
  vAccent = aAccent;
  vAlpha = mix(0.5, 0.96, aSize / 1.7);

  vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
  gl_PointSize = aSize * uPixelRatio;
  gl_Position = projectionMatrix * mvPosition;
}
`;

export const pointFragmentShader = /* glsl */ `
varying float vAccent;
varying float vAlpha;

void main() {
  vec2 uv = gl_PointCoord - vec2(0.5);
  float dist = length(uv);
  if (dist > 0.5) discard;

  float core = smoothstep(0.5, 0.16, dist);
  vec3 color = mix(vec3(0.86, 0.86, 0.87), vec3(1.0, 0.902, 0.0), vAccent * 0.6);
  gl_FragColor = vec4(color, vAlpha * core);
}
`;
