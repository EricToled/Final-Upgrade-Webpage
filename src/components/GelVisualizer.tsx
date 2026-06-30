'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

const VERT_SRC = `
attribute vec2 a_pos;
void main() { gl_Position = vec4(a_pos, 0.0, 1.0); }
`;

const FRAG_SRC = `
precision highp float;
uniform vec2  u_res;
uniform float u_time;
uniform float u_pulse;   // 0..~1, decays from beat
uniform float u_bass;    // 0..1 smoothed
uniform float u_mid;     // 0..1 smoothed
uniform float u_treble;  // 0..1 smoothed
uniform float u_radius;  // base radius in world units

// ---- SDF ----
// Smooth low-frequency lumps only. NO high-freq position noise -> silhouette stays smooth.
float sdBlob(vec3 p) {
  float r = u_radius * (1.0 + 0.12 * u_pulse + 0.04 * u_bass);
  vec3 d = normalize(p + 1e-5);

  float amp = 0.05 + 0.18 * u_pulse + 0.04 * u_mid;
  float t   = u_time;

  float def = 0.0;
  def += sin(d.x * 2.0 + t * 0.7)               * amp;
  def += sin(d.y * 2.0 + t * 0.9 + 1.3)         * amp * 0.9;
  def += sin(d.z * 2.0 + t * 1.1 + 2.1)         * amp * 0.85;
  def += sin(d.x * 3.0 + d.y * 2.0 + t * 1.3)   * amp * 0.55;
  def += sin(d.y * 3.0 + d.z * 2.0 + t * 0.6)   * amp * 0.55;
  def += sin(d.z * 3.0 + d.x * 2.0 + t * 0.8)   * amp * 0.55;

  return length(p) - r - def * r;
}

vec3 sdNormal(vec3 p) {
  const float e = 0.0015;
  vec2 h = vec2(e, 0.0);
  return normalize(vec3(
    sdBlob(p + h.xyy) - sdBlob(p - h.xyy),
    sdBlob(p + h.yxy) - sdBlob(p - h.yxy),
    sdBlob(p + h.yyx) - sdBlob(p - h.yyx)
  ));
}

// Procedural studio environment: white softboxes on dark.
// Sampled by reflection vector; never visible directly (no background drawn).
vec3 envSample(vec3 r) {
  float top  = smoothstep(0.55, 0.95, r.y);
  float left = smoothstep(0.55, 0.95, -r.x) * smoothstep(-0.35, 0.45, r.y);
  float rite = smoothstep(0.55, 0.95,  r.x) * smoothstep(-0.35, 0.45, r.y);
  float back = smoothstep(0.65, 1.00, -r.z) * smoothstep(-0.25, 0.55, r.y);
  float floor = smoothstep(0.55, 1.00, -r.y);

  vec3 col = vec3(0.0);
  col += vec3(1.00, 1.00, 1.00) * top  * 1.4;
  col += vec3(0.95, 0.98, 1.00) * left * 1.1;
  col += vec3(0.95, 0.98, 1.00) * rite * 1.1;
  col += vec3(0.85, 0.92, 1.00) * back * 0.6;
  col += vec3(0.10, 0.20, 0.40) * floor * 0.25;
  return col;
}

// ACES (Narkowicz) tonemap
vec3 aces(vec3 x) {
  const float a = 2.51, b = 0.03, c = 2.43, d = 0.59, e = 0.14;
  return clamp((x * (a * x + b)) / (x * (c * x + d) + e), 0.0, 1.0);
}

void main() {
  vec2 uv = (gl_FragCoord.xy - 0.5 * u_res) / min(u_res.x, u_res.y);

  // Camera
  vec3 ro = vec3(0.0, 0.0, 3.0);
  vec3 rd = normalize(vec3(uv, -1.6));

  // Raymarch
  float t = 0.0;
  float hit = -1.0;
  for (int i = 0; i < 80; i++) {
    vec3 p = ro + rd * t;
    float d = sdBlob(p);
    if (d < 0.001) { hit = t; break; }
    if (t > 6.0) break;
    t += d * 0.9;
  }

  if (hit < 0.0) {
    gl_FragColor = vec4(0.0); // transparent
    return;
  }

  vec3 p = ro + rd * hit;
  vec3 n = sdNormal(p);
  vec3 v = -rd;

  // Fresnel
  float NdotV = clamp(dot(n, v), 0.0, 1.0);
  float fres  = pow(1.0 - NdotV, 4.0);

  // Reflection (env)
  vec3 refl = reflect(rd, n);
  vec3 env  = envSample(refl);

  // Thickness via inward stepping (approximate subsurface depth)
  float thick = 0.0;
  {
    float tt = 0.02;
    for (int j = 0; j < 24; j++) {
      vec3 q = p + (-n) * tt;
      float d2 = sdBlob(q);
      if (d2 > 0.0) break;
      tt += 0.08;
      if (tt > 2.0) break;
    }
    thick = tt;
  }
  float th = clamp(thick * 0.55, 0.0, 1.0);

  // Body color: light cyan rim -> mid blue -> deep blue core (by thickness)
  vec3 lightCy = vec3(0.55, 0.92, 1.00);
  vec3 midBl   = vec3(0.10, 0.50, 0.92);
  vec3 deepBl  = vec3(0.02, 0.12, 0.40);
  vec3 body = mix(lightCy, midBl, th);
  body = mix(body, deepBl, th * th * 0.85);

  // Subsurface scatter glow (dispersed-light feel)
  float sssK = exp(-thick * 1.4);
  vec3 sssCol = vec3(0.45, 0.88, 1.00) * sssK * 0.55;

  // Key light specular
  vec3 keyDir = normalize(vec3(0.45, 0.8, 0.55));
  vec3 hlf    = normalize(keyDir + v);
  float spec  = pow(max(dot(n, hlf), 0.0), 96.0);

  // Fill light (cooler, opposite side)
  vec3 fillDir = normalize(vec3(-0.6, 0.2, 0.4));
  float fillD  = max(dot(n, fillDir), 0.0);

  // Compose
  vec3 col = body * (0.55 + 0.45 * fillD) + sssCol;
  col = mix(col, env, fres * 0.85);
  col += vec3(1.0) * spec * (1.1 + 0.6 * u_pulse);
  col += vec3(0.8, 0.95, 1.0) * fres * (0.10 + 0.10 * u_pulse);

  // Slight brightness pulse on beat (perception boost)
  col *= 1.0 + 0.12 * u_pulse;

  col = aces(col);
  col = pow(col, vec3(1.0 / 2.2));

  gl_FragColor = vec4(col, 1.0);
}
`;

// ----------------- helpers -----------------

function compileShader(gl: WebGLRenderingContext, type: number, src: string) {
  const sh = gl.createShader(type)!;
  gl.shaderSource(sh, src);
  gl.compileShader(sh);
  if (!gl.getShaderParameter(sh, gl.COMPILE_STATUS)) {
    const log = gl.getShaderInfoLog(sh);
    gl.deleteShader(sh);
    throw new Error('Shader compile failed: ' + log);
  }
  return sh;
}

function linkProgram(gl: WebGLRenderingContext, vs: WebGLShader, fs: WebGLShader) {
  const p = gl.createProgram()!;
  gl.attachShader(p, vs);
  gl.attachShader(p, fs);
  gl.linkProgram(p);
  if (!gl.getProgramParameter(p, gl.LINK_STATUS)) {
    const log = gl.getProgramInfoLog(p);
    throw new Error('Program link failed: ' + log);
  }
  return p;
}

// Tiny silent WAV (data URI). Used to nudge iOS audio session so the
// silent switch / ringer mode does NOT mute Web Audio output.
const SILENT_WAV_DATA_URI =
  'data:audio/wav;base64,UklGRiQAAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQAAAAA=';

// ----------------- component -----------------

export default function GelVisualizer() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  // Audio refs (kept out of React state so rAF reads are sync)
  const audioCtxRef = useRef<AudioContext | null>(null);
  const analyserRef = useRef<AnalyserNode | null>(null);
  const sourceRef   = useRef<AudioBufferSourceNode | null>(null);
  const bufferRef   = useRef<AudioBuffer | null>(null);
  const startedAtRef = useRef<number>(0);
  const silentAudioRef = useRef<HTMLAudioElement | null>(null);

  // Analysis state (refs, updated each frame)
  const freqDataRef = useRef<Uint8Array<ArrayBuffer> | null>(null);
  const bassAvgRef = useRef(0);
  const pulseRef   = useRef(0);
  const bassSmoothRef   = useRef(0);
  const midSmoothRef    = useRef(0);
  const trebleSmoothRef = useRef(0);

  const [trackName, setTrackName] = useState<string>('');
  const [isPlaying, setIsPlaying] = useState(false);
  const [showHud, setShowHud] = useState(true);
  const [errorMsg, setErrorMsg] = useState<string>('');
  const [hud, setHud] = useState({ bass: 0, mid: 0, treble: 0, pulse: 0, rawBass: 0 });

  // -- File handling --

  const onFile = useCallback(async (file: File) => {
    setErrorMsg('');
    try {
      if (!audioCtxRef.current) {
        const Ctx =
          (window.AudioContext ||
            (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext);
        audioCtxRef.current = new Ctx();
      }
      const ctx = audioCtxRef.current!;
      const arrBuf = await file.arrayBuffer();
      // Safari requires the callback form, but modern Safari supports promise too.
      const decoded: AudioBuffer = await new Promise((resolve, reject) => {
        ctx.decodeAudioData(arrBuf.slice(0), resolve, reject);
      });
      bufferRef.current = decoded;
      setTrackName(file.name);
      // Stop any previous playback
      if (sourceRef.current) {
        try { sourceRef.current.stop(); } catch {}
        sourceRef.current.disconnect();
        sourceRef.current = null;
      }
      setIsPlaying(false);
    } catch (e) {
      console.error(e);
      setErrorMsg('No pude decodificar este archivo. Probá otro formato (mp3, wav, m4a).');
    }
  }, []);

  // -- Play / pause --

  const play = useCallback(async () => {
    if (!bufferRef.current || !audioCtxRef.current) return;
    const ctx = audioCtxRef.current;

    // iOS: nudge audio session so silent switch does NOT mute Web Audio.
    // Plays a silent WAV via HTMLMediaElement in the same user gesture.
    try {
      if (!silentAudioRef.current) {
        const a = new Audio(SILENT_WAV_DATA_URI);
        a.loop = true;
        (a as HTMLAudioElement & { playsInline?: boolean }).playsInline = true;
        a.setAttribute('playsinline', 'true');
        a.setAttribute('webkit-playsinline', 'true');
        silentAudioRef.current = a;
      }
      await silentAudioRef.current.play().catch(() => {});
    } catch {}

    if (ctx.state === 'suspended') await ctx.resume();

    // Create source + analyser (recreate analyser to keep it clean per session)
    if (!analyserRef.current) {
      const an = ctx.createAnalyser();
      an.fftSize = 1024;
      an.smoothingTimeConstant = 0.6;
      analyserRef.current = an;
      freqDataRef.current = new Uint8Array(new ArrayBuffer(an.frequencyBinCount));
    }

    if (sourceRef.current) {
      try { sourceRef.current.stop(); } catch {}
      sourceRef.current.disconnect();
    }

    const src = ctx.createBufferSource();
    src.buffer = bufferRef.current;
    src.connect(analyserRef.current!);
    analyserRef.current!.connect(ctx.destination);
    src.onended = () => { setIsPlaying(false); };
    src.start(0);
    startedAtRef.current = ctx.currentTime;
    sourceRef.current = src;
    setIsPlaying(true);
  }, []);

  const stop = useCallback(() => {
    if (sourceRef.current) {
      try { sourceRef.current.stop(); } catch {}
      sourceRef.current.disconnect();
      sourceRef.current = null;
    }
    if (silentAudioRef.current) {
      try { silentAudioRef.current.pause(); } catch {}
    }
    setIsPlaying(false);
  }, []);

  // -- WebGL setup + render loop --

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl = canvas.getContext('webgl', {
      alpha: true,
      premultipliedAlpha: false,
      antialias: false,
      preserveDrawingBuffer: false,
    });
    if (!gl) { setErrorMsg('WebGL no disponible en este dispositivo.'); return; }

    let program: WebGLProgram;
    try {
      const vs = compileShader(gl, gl.VERTEX_SHADER, VERT_SRC);
      const fs = compileShader(gl, gl.FRAGMENT_SHADER, FRAG_SRC);
      program = linkProgram(gl, vs, fs);
    } catch (e) {
      setErrorMsg((e as Error).message);
      return;
    }

    const posBuf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, posBuf);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]),
      gl.STATIC_DRAW
    );

    const aPos = gl.getAttribLocation(program, 'a_pos');
    const uRes    = gl.getUniformLocation(program, 'u_res');
    const uTime   = gl.getUniformLocation(program, 'u_time');
    const uPulse  = gl.getUniformLocation(program, 'u_pulse');
    const uBass   = gl.getUniformLocation(program, 'u_bass');
    const uMid    = gl.getUniformLocation(program, 'u_mid');
    const uTreble = gl.getUniformLocation(program, 'u_treble');
    const uRadius = gl.getUniformLocation(program, 'u_radius');

    let dpr = Math.min(window.devicePixelRatio || 1, 2);
    // Lower DPR on small / lower-power devices
    if (Math.min(window.innerWidth, window.innerHeight) < 700) dpr = Math.min(dpr, 1.5);

    function resize() {
      if (!canvas) return;
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;
      const pxW = Math.max(1, Math.floor(w * dpr));
      const pxH = Math.max(1, Math.floor(h * dpr));
      if (canvas.width !== pxW || canvas.height !== pxH) {
        canvas.width = pxW;
        canvas.height = pxH;
      }
      gl!.viewport(0, 0, pxW, pxH);
    }
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    gl.useProgram(program);
    gl.enableVertexAttribArray(aPos);
    gl.bindBuffer(gl.ARRAY_BUFFER, posBuf);
    gl.vertexAttribPointer(aPos, 2, gl.FLOAT, false, 0, 0);

    // Pre-multiplied alpha disabled, clear to transparent.
    gl.clearColor(0, 0, 0, 0);
    gl.disable(gl.DEPTH_TEST);

    const startTime = performance.now();
    let raf = 0;
    let lastHudUpdate = 0;

    const tick = () => {
      raf = requestAnimationFrame(tick);
      const now = performance.now();
      const tSec = (now - startTime) / 1000;

      // --- Audio analysis ---
      const an = analyserRef.current;
      const data = freqDataRef.current;
      let bassNorm = 0, midNorm = 0, trebleNorm = 0;
      let rawBass = 0;

      if (an && data) {
        an.getByteFrequencyData(data);

        // Bin layout for fftSize=1024 @ 44.1kHz ≈ 43Hz/bin.
        // Bass: bins 1..6 (~43-260Hz). Mid: 8..40 (~340-1700). Treble: 60..160.
        const N = data.length; // 512

        let bSum = 0, bCount = 0;
        for (let i = 1; i <= 6 && i < N; i++) { bSum += data[i]; bCount++; }
        const bass = bSum / Math.max(1, bCount) / 255;

        let mSum = 0, mCount = 0;
        for (let i = 8; i <= 40 && i < N; i++) { mSum += data[i]; mCount++; }
        const mid = mSum / Math.max(1, mCount) / 255;

        let tSum = 0, tCount = 0;
        for (let i = 60; i < 160 && i < N; i++) { tSum += data[i]; tCount++; }
        const treble = tSum / Math.max(1, tCount) / 255;

        rawBass = bass;

        // Onset detection on bass band: slow average vs current
        const prevAvg = bassAvgRef.current;
        bassAvgRef.current = prevAvg * 0.985 + bass * 0.015;
        const excess = bass - bassAvgRef.current * 1.45;

        // Trigger pulse if current bass clearly exceeds running average
        if (excess > 0.06 && bass > 0.18) {
          const strength = Math.min(1.0, (excess + bass * 0.3) * 1.6);
          if (strength > pulseRef.current) pulseRef.current = strength;
        }
        // Exponential decay of pulse
        pulseRef.current *= 0.90;
        if (pulseRef.current < 0.001) pulseRef.current = 0;

        // Smoothed bands for subtle shader use
        bassSmoothRef.current   = bassSmoothRef.current   * 0.8 + bass   * 0.2;
        midSmoothRef.current    = midSmoothRef.current    * 0.8 + mid    * 0.2;
        trebleSmoothRef.current = trebleSmoothRef.current * 0.8 + treble * 0.2;

        bassNorm   = bassSmoothRef.current;
        midNorm    = midSmoothRef.current;
        trebleNorm = trebleSmoothRef.current;
      } else {
        // No audio yet: gentle ambient pulse decay only
        pulseRef.current *= 0.92;
      }

      // HUD update ~10Hz to avoid React thrash
      if (now - lastHudUpdate > 100) {
        lastHudUpdate = now;
        setHud({
          bass: bassNorm,
          mid: midNorm,
          treble: trebleNorm,
          pulse: pulseRef.current,
          rawBass,
        });
      }

      // --- Render ---
      resize();
      gl!.uniform2f(uRes, canvas.width, canvas.height);
      gl!.uniform1f(uTime, tSec);
      gl!.uniform1f(uPulse, pulseRef.current);
      gl!.uniform1f(uBass, bassNorm);
      gl!.uniform1f(uMid, midNorm);
      gl!.uniform1f(uTreble, trebleNorm);
      // Base radius: keep blob inside frame even at max deformation.
      // Camera sees ~ ±2.0 world units across smaller screen dim (z=3, fov from rd).
      // Max effective scale ≈ 1 + 0.12 + 0.04 + ~0.18 disp -> set base ~ 0.72.
      gl!.uniform1f(uRadius, 0.72);

      gl!.clear(gl!.COLOR_BUFFER_BIT);
      gl!.drawArrays(gl!.TRIANGLES, 0, 6);
    };
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      gl.deleteBuffer(posBuf);
      gl.deleteProgram(program);
    };
  }, []);

  // -- Cleanup on unmount --
  useEffect(() => {
    return () => {
      try { sourceRef.current?.stop(); } catch {}
      sourceRef.current?.disconnect();
      analyserRef.current?.disconnect();
      audioCtxRef.current?.close().catch(() => {});
      silentAudioRef.current?.pause();
    };
  }, []);

  return (
    <div className="relative w-full h-[100svh] overflow-hidden">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full block"
        style={{ background: 'transparent' }}
      />

      {/* Controls */}
      <div className="absolute left-1/2 -translate-x-1/2 bottom-6 z-10 flex flex-col items-center gap-3 px-4 w-full max-w-md">
        <input
          ref={fileInputRef}
          type="file"
          accept="audio/*"
          className="hidden"
          onChange={(e) => {
            const f = e.target.files?.[0];
            if (f) onFile(f);
          }}
        />

        <div className="flex items-center gap-2 w-full justify-center">
          <button
            onClick={() => fileInputRef.current?.click()}
            className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-white text-sm hover:bg-white/15 transition"
          >
            Subir canción
          </button>
          {bufferRef.current && (
            isPlaying ? (
              <button
                onClick={stop}
                className="px-4 py-2 rounded-full bg-white/20 backdrop-blur-md border border-white/20 text-white text-sm hover:bg-white/25 transition"
              >
                Detener
              </button>
            ) : (
              <button
                onClick={play}
                className="px-4 py-2 rounded-full bg-cyan-400/30 backdrop-blur-md border border-cyan-300/30 text-white text-sm hover:bg-cyan-400/40 transition"
              >
                Reproducir
              </button>
            )
          )}
          <button
            onClick={() => setShowHud((s) => !s)}
            className="px-3 py-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-white/70 text-xs hover:bg-white/10 transition"
            title="Toggle HUD"
          >
            HUD
          </button>
        </div>

        {trackName && (
          <div className="text-xs text-white/60 truncate max-w-full">{trackName}</div>
        )}
        {errorMsg && (
          <div className="text-xs text-red-300 text-center">{errorMsg}</div>
        )}
      </div>

      {/* Instrumentation HUD: confirms audio values reach runtime */}
      {showHud && (
        <div className="absolute top-4 left-4 z-10 text-[11px] font-mono text-white/85 bg-black/35 backdrop-blur px-3 py-2 rounded-md border border-white/10 select-none pointer-events-none">
          <div className="flex items-center gap-2">
            <span className="w-12 text-white/55">pulse</span>
            <Bar value={hud.pulse} color="rgb(120,220,255)" />
            <span className="w-10 text-right tabular-nums">{hud.pulse.toFixed(2)}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-12 text-white/55">bass</span>
            <Bar value={hud.bass} color="rgb(80,170,255)" />
            <span className="w-10 text-right tabular-nums">{hud.bass.toFixed(2)}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-12 text-white/55">mid</span>
            <Bar value={hud.mid} color="rgb(160,200,255)" />
            <span className="w-10 text-right tabular-nums">{hud.mid.toFixed(2)}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-12 text-white/55">treble</span>
            <Bar value={hud.treble} color="rgb(220,230,255)" />
            <span className="w-10 text-right tabular-nums">{hud.treble.toFixed(2)}</span>
          </div>
          <div className="flex items-center gap-2 opacity-70">
            <span className="w-12 text-white/55">raw b</span>
            <Bar value={hud.rawBass} color="rgb(120,140,180)" />
            <span className="w-10 text-right tabular-nums">{hud.rawBass.toFixed(2)}</span>
          </div>
        </div>
      )}
    </div>
  );
}

function Bar({ value, color }: { value: number; color: string }) {
  const w = Math.max(0, Math.min(1, value));
  return (
    <div className="w-24 h-1.5 rounded-sm bg-white/10 overflow-hidden">
      <div
        style={{ width: `${w * 100}%`, background: color }}
        className="h-full transition-[width] duration-75 ease-linear"
      />
    </div>
  );
}
