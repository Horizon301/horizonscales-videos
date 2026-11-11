// score.mjs — "The Quiet Phone." Voiceover first: AI narration (Kokoro, voice am_michael) loaded from audio/vo_*.wav.
// Under it: a quiet night bed in A minor (crickets, soft pad, sub) that turns to C major with light drums when the fixes start.
import { DUR, VO, EV, SHOT, CUES } from './timeline.js';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
export { DUR };
const HERE = dirname(fileURLToPath(import.meta.url));

export default function score(S) {
  S.tempo(84);
  S.space({ room: 0.45, damp: 0.55 });
  const vo = S.bus('vo', { gain: 1.0, highpass: 90 });
  const amb = S.bus('amb', { gain: 0.06, highpass: 2500 });
  const keys = S.bus('keys', { gain: 0.07, reverb: 0.35, highpass: 140 });
  const bass = S.bus('bass', { gain: 0.11 });
  const mel = S.bus('mel', { gain: 0.11, reverb: 0.35, delay: 0.1 });
  const perc = S.bus('perc', { gain: 0.085, reverb: 0.06 });
  const fx = S.bus('fx', { gain: 0.3, reverb: 0.1 });
  const SR = S.SR, N = s => Math.max(1, Math.round(s * SR)), TAU = Math.PI * 2;
  const env = (len, f) => { const e = new Float32Array(len); for (let i = 0; i < len; i++) e[i] = f(i / SR, len / SR); return e; };

  // ── narration ──
  VO.forEach(([t0], i) => vo.add(S.load(join(HERE, 'audio', `vo_${i}.wav`)), t0, { gain: 1 }));

  // ── night: crickets until the fixes ──
  for (let t = 0.2; t < SHOT.E1[0]; t += 0.55) {
    const len = N(0.12), c = S.mul(S.osc(len, 4300 + 300 * Math.sin(t), 'sine'), env(len, tt => (Math.floor(tt * 60) % 2 ? 0 : 1) * Math.sin(Math.PI * tt / 0.12)));
    amb.add(c, t + (Math.sin(t * 7) * 0.08), { gain: 0.7, pan: Math.sin(t * 3) * 0.7 });
  }
  // ── bed ──
  const beat = 60 / 84;
  const chords = [['A2', 'min7', 'A3'], ['F2', 'maj7', 'F3'], ['C2', 'add9', 'C3'], ['G2', 'sus2', 'G3']];
  const fixC = [['C2', 'add9', 'C3'], ['G2', 'add9', 'G3'], ['A2', 'min7', 'A3'], ['F2', 'maj7', 'F3']];
  for (let i = 0, t = 0; t < SHOT.E1[0] - 0.2; i++, t += beat * 4) {
    const [r, q, m] = chords[i % 4], d = Math.min(beat * 4, SHOT.E1[0] - 0.3 - t);
    keys.add(S.pad(S.chord(m, q), d, { cutoff: 900, attack: 0.4, release: 0.6 }), t, { gain: 0.8 });
    bass.add(S.sub(r, d * 0.9, { harm: 0.2 }), t, { gain: 0.6 });
    ['E5', 'C5', 'A4', 'B4'].slice(0, 2).forEach((n, j) => mel.add(S.mallet(n, 1.4, { material: 'kalimba', decay: 1.2 }), t + beat * (1 + j * 2), { gain: 0.45 }));
  }
  for (let i = 0, t = SHOT.E1[0]; t < EV.end; i++, t += beat * 4) {
    const [r, q, m] = fixC[i % 4], d = Math.min(beat * 4, EV.end - t);
    keys.add(S.pad(S.chord(m, q), d, { cutoff: 1500, attack: 0.15, release: 0.6 }), t, { gain: 0.85 });
    bass.add(S.sub(r, d * 0.9, { harm: 0.3 }), t, { gain: 0.7 });
    for (let k = 0; k < 4; k++) { if (k % 2 === 0) perc.add(S.kick({ tone: 52, decay: 0.25, drive: 0.05 }), t + k * beat, { gain: 0.5 }); else perc.add(S.clap(), t + k * beat, { gain: 0.22 }); }
    for (let k = 0; k < 8; k++) perc.add(S.shaker({ decay: 0.045 }), t + k * beat / 2, { gain: k % 2 ? 0.24 : 0.1, pan: 0.3 });
    ['G5', 'E5', 'C6', 'D5'].forEach((n, j) => mel.add(S.mallet(n, 1.0, { material: 'kalimba', decay: 0.9 }), t + j * beat, { gain: 0.4 }));
  }
  keys.add(S.pad(S.chord('C3', 'add9'), DUR - EV.end, { cutoff: 1600, attack: 0.3, release: 2.5 }), EV.end, { gain: 1.0 });
  bass.add(S.sub('C2', 3.5, { harm: 0.2 }), EV.end, { gain: 0.7 });
  ['G4', 'C5', 'E5', 'D5', 'C5'].forEach((m, i) => mel.add(S.mallet(m, 1.8, { material: 'kalimba', decay: 1.5 }), EV.end + 0.4 + i * 0.45, { gain: 0.55 - i * 0.06 }));

  // ── sound effects ──
  const buzz = d => { const len = N(d), s = S.osc(len, 155, 'square'); return S.mul(S.lowpass(s, 700), env(len, t => ((t % 1.0) < 0.42 ? 1 : 0) * Math.min(1, t / 0.01) * 0.35)); };
  const tone = (f1, f2, d) => { const len = N(d), out = new Float32Array(len); for (let i = 0; i < len; i++) { const t = i / SR, e = Math.min(1, t / 0.01) * Math.min(1, (d - t) / 0.03); out[i] = (Math.sin(TAU * f1 * t) + Math.sin(TAU * f2 * t)) * 0.25 * e; } return out; };
  const engine = () => { const d = 2.4, len = N(d), s = S.osc(len, i => 70 + 18 * Math.sin(i / SR * 3), 'saw'), n = S.noise(d, 5), out = new Float32Array(len); for (let i = 0; i < len; i++) out[i] = s[i] * 0.4 + n[i] * 0.3; return S.mul(S.lowpass(out, 600), env(len, (t, dd) => Math.exp(-(((t - dd * 0.45) / 0.45) ** 2)) * 0.8)); };
  for (const c of CUES) {
    switch (c.sfx) {
      case 'car': fx.add(engine(), c.t - 0.9, { gain: 0.8, pan: -0.3 }); fx.add(S.whoosh(1.2, { from: 400, to: 1400, peak: 0.5 }), c.t - 0.4, { gain: 0.35, pan: 0.3 }); break;
      case 'pop': fx.add(S.blip('C6'), c.t, { gain: 0.25 }); fx.add(S.pop(), c.t, { gain: 0.3 }); break;
      case 'swipe': fx.add(S.swipe(0.3, { up: false, seed: 4 }), c.t, { gain: 0.5 }); break;
      case 'ring': fx.add(buzz(c.n), c.t, { gain: 0.7 }); break;
      case 'missed': ['E5', 'B4'].forEach((m, i) => fx.add(S.blip(m), c.t + i * 0.12, { gain: 0.3 })); break;
      case 'dial': fx.add(tone(440, 480, 0.8), c.t + 0.1, { gain: 0.3 }); break;
      case 'msg': fx.add(S.blip('A6'), c.t, { gain: 0.3 }); fx.add(S.blip('E6'), c.t + 0.07, { gain: 0.25 }); break;
      case 'pin': fx.add(S.reverseCymbal(0.5), c.t - 0.5, { gain: 0.25 }); perc.add(S.impact({ size: 0.6 }), c.t, { gain: 0.5 }); bass.add(S.sub('C2', 0.8, { harm: 0.4 }), c.t, { gain: 0.7 }); fx.add(S.shimmer(1.2, { root: 'C6', count: 6 }), c.t + 0.1, { gain: 0.3 }); break;
      case 'tap': fx.add(S.click({ tone: 0.7 }), c.t, { gain: 0.5 }); fx.add(tone(440, 480, 0.6), c.t + 0.3, { gain: 0.22 }); break;
      case 'answer': ['C6', 'E6', 'G6'].forEach((m, i) => mel.add(S.bell(m, 0.8, { decay: 0.5 }), c.t + i * 0.08, { gain: 0.6 })); break;
      case 'booked': for (let i = 0; i < 6; i++) mel.add(S.bell(['C6', 'E6', 'G6', 'C7'][i % 4], 0.6, { decay: 0.35 }), c.t + i * 0.06, { gain: 0.45, pan: Math.sin(i) * 0.6 }); break;
      case 'rise': fx.add(S.whoosh(1.8, { from: 250, to: 2400, peak: 0.7 }), c.t, { gain: 0.35 }); break;
      case 'end': fx.add(S.whoosh(0.7, { from: 2000, to: 400 }), c.t - 0.1, { gain: 0.25 }); break;
    }
  }
}
