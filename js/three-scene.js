// IDOSTEM LABS - React Bits "MagicRings" Component (Vanilla Three.js Integration)
(function() {
  const canvas = document.getElementById('hero-canvas');
  if (!canvas) return;

  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true, powerPreference: "high-performance" });
  renderer.setClearColor(0x000000, 0);

  const scene = new THREE.Scene();
  const camera = new THREE.OrthographicCamera(-0.5, 0.5, 0.5, -0.5, 0.1, 10);
  camera.position.z = 1;

  // SHADERS
  const vertexShader = `
  void main() {
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
  `;

  const fragmentShader = `
  precision highp float;

  uniform float uTime, uAttenuation, uLineThickness;
  uniform float uBaseRadius, uRadiusStep, uScaleRate;
  uniform float uOpacity, uNoiseAmount, uRotation, uRingGap;
  uniform float uFadeIn, uFadeOut;
  uniform float uMouseInfluence, uHoverAmount, uHoverScale, uParallax, uBurst;
  uniform vec2 uResolution, uMouse;
  uniform vec3 uColor, uColorTwo;
  uniform int uRingCount;

  const float HP = 1.5707963;
  const float CYCLE = 3.45;

  float fade(float t) {
    return t < uFadeIn ? smoothstep(0.0, uFadeIn, t) : 1.0 - smoothstep(uFadeOut, CYCLE - 0.2, t);
  }

  float ring(vec2 p, float ri, float cut, float t0, float px) {
    float t = mod(uTime + t0, CYCLE);
    float r = ri + t / CYCLE * uScaleRate;
    float d = abs(length(p) - r);
    float a = atan(abs(p.y), abs(p.x)) / HP;
    float th = max(1.0 - a, 0.5) * px * uLineThickness;
    float h = (1.0 - smoothstep(th, th * 1.5, d)) + 1.0;
    d += pow(cut * a, 3.0) * r;
    return h * exp(-uAttenuation * d) * fade(t);
  }

  void main() {
    float px = 1.0 / min(uResolution.x, uResolution.y);
    vec2 p = (gl_FragCoord.xy - 0.5 * uResolution.xy) * px;
    float cr = cos(uRotation), sr = sin(uRotation);
    p = mat2(cr, -sr, sr, cr) * p;
    p -= uMouse * uMouseInfluence;
    float sc = mix(1.0, uHoverScale, uHoverAmount) + uBurst * 0.3;
    p /= sc;
    vec3 c = vec3(0.0);
    float rcf = max(float(uRingCount) - 1.0, 1.0);
    for (int i = 0; i < 10; i++) {
      if (i >= uRingCount) break;
      float fi = float(i);
      vec2 pr = p - fi * uParallax * uMouse;
      vec3 rc = mix(uColor, uColorTwo, fi / rcf);
      c = mix(c, rc, vec3(ring(pr, uBaseRadius + fi * uRadiusStep, pow(uRingGap, fi), i == 0 ? 0.0 : 2.95 * fi, px)));
    }
    c *= 1.0 + uBurst * 2.0;
    float n = fract(sin(dot(gl_FragCoord.xy + uTime * 100.0, vec2(12.9898, 78.233))) * 43758.5453);
    c += (n - 0.5) * uNoiseAmount;
    gl_FragColor = vec4(c, max(c.r, max(c.g, c.b)) * uOpacity);
  }
  `;

  // UNIFORMS
  const uniforms = {
    uTime: { value: 0 },
    uAttenuation: { value: 10.0 },
    uResolution: { value: new THREE.Vector2() },
    uColor: { value: new THREE.Color('#00F0FF') },
    uColorTwo: { value: new THREE.Color('#9333EA') },
    uLineThickness: { value: 2.5 },
    uBaseRadius: { value: 0.28 },
    uRadiusStep: { value: 0.09 },
    uScaleRate: { value: 0.12 },
    uRingCount: { value: 6 },
    uOpacity: { value: 1.0 },
    uNoiseAmount: { value: 0.06 },
    uRotation: { value: 0.0 },
    uRingGap: { value: 1.5 },
    uFadeIn: { value: 0.7 },
    uFadeOut: { value: 0.5 },
    uMouse: { value: new THREE.Vector2() },
    uMouseInfluence: { value: 0.35 },
    uHoverAmount: { value: 0 },
    uHoverScale: { value: 1.18 },
    uParallax: { value: 0.05 },
    uBurst: { value: 0 }
  };

  const material = new THREE.ShaderMaterial({
    vertexShader,
    fragmentShader,
    uniforms,
    transparent: true
  });

  const quad = new THREE.Mesh(new THREE.PlaneGeometry(1, 1), material);
  scene.add(quad);

  // RESIZE
  function resize() {
    const w = window.innerWidth;
    const h = window.innerHeight;
    const dpr = Math.min(window.devicePixelRatio, 2);
    renderer.setSize(w, h);
    renderer.setPixelRatio(dpr);
    uniforms.uResolution.value.set(w * dpr, h * dpr);
  }
  resize();
  window.addEventListener('resize', resize);

  // MOUSE & CLICK STATE
  const mouse = [0, 0];
  const smoothMouse = [0, 0];
  let isHovered = false;
  let hoverAmount = 0;
  let burst = 0;

  document.addEventListener('mousemove', (e) => {
    mouse[0] = e.clientX / window.innerWidth - 0.5;
    mouse[1] = -(e.clientY / window.innerHeight - 0.5);
    isHovered = true;
  });

  document.addEventListener('mouseleave', () => {
    isHovered = false;
    mouse[0] = 0;
    mouse[1] = 0;
  });

  document.addEventListener('click', () => {
    burst = 1.0;
  });

  // RENDER LOOP
  const startTime = Date.now();

  function animate() {
    requestAnimationFrame(animate);

    const now = Date.now();
    const t = (now - startTime) * 0.001;

    smoothMouse[0] += (mouse[0] - smoothMouse[0]) * 0.08;
    smoothMouse[1] += (mouse[1] - smoothMouse[1]) * 0.08;

    hoverAmount += ((isHovered ? 1 : 0) - hoverAmount) * 0.08;

    burst *= 0.94;
    if (burst < 0.001) burst = 0;

    uniforms.uTime.value = t;
    uniforms.uMouse.value.set(smoothMouse[0], smoothMouse[1]);
    uniforms.uHoverAmount.value = hoverAmount;
    uniforms.uBurst.value = burst;

    renderer.render(scene, camera);
  }

  animate();
})();
