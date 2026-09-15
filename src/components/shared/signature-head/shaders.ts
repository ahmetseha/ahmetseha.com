export const pointVertexShader = /* glsl */ `
attribute vec3 aNormal;
attribute float aSize;
attribute float aAccent;

uniform float uPixelRatio;
uniform float uHover;

varying float vAccent;
varying float vRim;
varying float vAlpha;

void main() {
  vec3 viewNormal = normalize(normalMatrix * aNormal);
  vAccent = aAccent;
  vRim = pow(1.0 - abs(viewNormal.z), 1.2);
  vAlpha = mix(0.42, 0.96, aSize / 2.2) * mix(0.88, 1.0, uHover);

  vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
  gl_PointSize = aSize * mix(1.0, 1.16, uHover) * uPixelRatio * (1.15 + vRim * 0.45);
  gl_Position = projectionMatrix * mvPosition;
}
`;

export const pointFragmentShader = /* glsl */ `
varying float vAccent;
varying float vRim;
varying float vAlpha;

void main() {
  vec2 uv = gl_PointCoord - vec2(0.5);
  float dist = length(uv);
  if (dist > 0.5) discard;

  float core = smoothstep(0.5, 0.16, dist);
  vec3 color = mix(vec3(0.82, 0.83, 0.85), vec3(0.97, 0.97, 0.96), vRim);
  color = mix(color, vec3(1.0, 0.902, 0.0), vAccent * 0.6);
  gl_FragColor = vec4(color, vAlpha * core);
}
`;
