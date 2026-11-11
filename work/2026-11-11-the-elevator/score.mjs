// score.mjs — "The Elevator" (video #12). Voiceover first: AI narration (Kokoro, voice am_michael) from audio/vo_*.wav.
// Under it: original elevator music, a soft bossa at 120 BPM in D major (electric piano, rim clicks, shaker, round bass, vibraphone).
// The tune sinks chromatically and thins out as the car goes down, stops dead at the bottom (crickets, a buzzing bulb),
// climbs back up with the car, and every stop gets an elevator ding.
import { DUR, b, L, VO, T } from './timeline.js';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
export { DUR };
const HERE = dirname(fileURLToPath(import.meta.url));

export default function score(S) {
  S.tempo(120); S.space({ room: 0.35, damp: 0.5 });
  const vo = S.bus('vo', { gain: 1.0, highpass: 90 });
  const perc = S.bus('perc', { gain: 0.1, highpass: 60, lowpass: 8000, reverb: 0.06 });
  const bass = S.bus('bass', { gain: 0.085, highpass: 38 });
  const keys = S.bus('keys', { gain: 0.085, reverb: 0.2, highpass: 160, lowpass: 5000 });
  const vib = S.bus('vib', { gain: 0.07, reverb: 0.3, highpass: 300, lowpass: 6500 });
  const fx = S.bus('fx', { gain: 0.1, reverb: 0.1, highpass: 100, lowpass: 6000 });
  const SR = S.SR, N = s => Math.max(1, Math.round(s * SR));
  const env = (len, f) => { const e = new Float32Array(len); for (let i = 0; i < len; i++) e[i] = f(i / SR, len / SR); return e; };

  if (process.env.VOICE === '1') VO.forEach(([t0], i) => vo.add(S.load(join(HERE, 'audio', `vo_${i}.wav`)), t0, { gain: 1 }));   // posted WITHOUT the voice (Kai, Nov 11: didn't like it); VOICE=1 puts it back

  const ding = (t, g = 1, hi = false) => { vib.add(S.bell(hi ? 'A6' : 'E6', 1.4, { decay: 0.9 }), t, { gain: 0.9 * g }); vib.add(S.bell(hi ? 'F#6' : 'C#6', 1.4, { decay: 0.9 }), t + 0.16, { gain: 0.7 * g }); };
  const CH = [['D3', 'maj7', 'D1', 'A1'], ['E3', 'min7', 'E1', 'B1'], ['A2', '7', 'A1', 'E1'], ['D3', 'maj9', 'D1', 'A1']];
  const tr = (n, semis) => S.transpose ? S.transpose(n, semis) : n;
  // one bar (4 beats) of bossa starting at t
  const bar = (t, k, g = 1) => {
    const [root, q, b1, b2] = CH[k % 4];
    [0, 1.5, 3].forEach((o, j) => keys.add(S.keys(S.chord(root, q), L(j === 1 ? 1.2 : 0.8), { decay: 0.9, index: 1.6 }), t + L(o), { gain: 0.7 * g }));
    [0, 1.5, 3, 3.5].forEach((o, j) => perc.add(S.rim(), t + L(o), { gain: (j === 0 ? 0.7 : 0.5) * g, pan: -0.2 }));
    for (let s = 0; s < 8; s++) perc.add(S.shaker({ decay: 0.05 }), t + L(s / 2), { gain: (s % 2 ? 0.34 : 0.2) * g, pan: 0.3 });
    perc.add(S.kick({ tone: 50, decay: 0.2, drive: 0.1, click: 0.3 }), t, { gain: 0.5 * g }); perc.add(S.kick({ tone: 50, decay: 0.2, drive: 0.1, click: 0.3 }), t + L(2), { gain: 0.4 * g });
    bass.add(S.bass(b1, L(1.3), { wave: 'sine', cutoff: 700, sub: 0.2, drive: 0.2, release: 0.08 }), t, { gain: 0.9 * g });
    bass.add(S.bass(b2, L(0.5), { wave: 'sine', cutoff: 700, sub: 0.2, drive: 0.2, release: 0.08 }), t + L(1.5), { gain: 0.7 * g });
    bass.add(S.bass(b2, L(1.3), { wave: 'sine', cutoff: 700, sub: 0.2, drive: 0.2, release: 0.08 }), t + L(2), { gain: 0.85 * g });
  };
  const MEL = [['F#5', 0], ['A5', 1], ['E5', 2.5], ['D5', 4], ['B4', 5.5], ['C#5', 7], ['E5', 8], ['F#5', 9.5], ['A5', 11], ['G5', 12], ['E5', 13.5]];

  // ── 0–7: the lobby. Frame 0 opens on a ding and the groove.
  ding(0, 0.9); fx.add(S.pop('A5'), 0, { gain: 0.5 });
  for (let k = 0; k < 4; k++) bar(k * 2 - (k === 3 ? 0 : 0), k, k === 3 ? 0.9 : 1);
  MEL.forEach(([n, o]) => { if (L(o) < 6.4) vib.add(S.mallet(n, 0.9, { material: 'vibes', decay: 0.8 }), L(o), { gain: 0.6 }); });
  [3.6, 4.5, 5.4].forEach((t, i) => [0, 0.08, 0.16].forEach(o => fx.add(S.blip(i % 2 ? 'A5' : 'C6', 0.04), t + o, { gain: 0.3, pan: 0.4 })));   // the phones upstairs
  ding(T.ding, 1);

  // ── 7–11.5: going down. The chords sink a semitone at a time and thin out; rungs tick past faster and faster.
  const DOWN = ['D3', 'C#3', 'C3', 'B2', 'A#2', 'A2', 'G#2', 'G2', 'F#2'];
  for (let i = 0; i < 9; i++) {
    const t = T.down0 + L(i), g = 1 - i * 0.085;
    keys.add(S.keys(S.chord(DOWN[i], 'maj7'), L(0.9), { decay: 0.7, index: 1.4 + i * 0.25 }), t, { gain: 0.75 * g });
    bass.add(S.bass(DOWN[i].replace('3', '1').replace('2', '1'), L(0.8), { wave: 'sine', cutoff: 600, sub: 0.3, drive: 0.2, release: 0.06 }), t, { gain: 0.8 * g });
    perc.add(S.rim(), t, { gain: 0.5 * g }); perc.add(S.shaker({ decay: 0.05 }), t + L(0.5), { gain: 0.3 * g });
  }
  for (let t = T.down0 + 0.3, gap = 0.34; t < T.down1 - 0.25; t += gap) { perc.add(S.tick({ tone: 0.4 }), t, { gain: 0.5, pan: -0.3 }); gap = Math.max(0.055, gap * (t < 9.6 ? 0.82 : 1.12)); }
  fx.add(S.downlifter(4.2, { from: 2200, to: 90, seed: 7 }), T.down0 + 0.2, { gain: 0.7 });
  { const d = 4.3, len = N(d), o = S.osc(len, i => 78 - 30 * (i / len), 'saw'); fx.add(S.mul(S.lowpass(o, 300), env(len, (t, dd) => Math.sin(Math.PI * t / dd) * 0.8)), T.down0 + 0.2, { gain: 0.8 }); }

  // ── 11.5–13.5: the bottom. A thud, then almost nothing: crickets and a buzzing bulb.
  perc.add(S.impact({ size: 0.8 }), T.down1, { gain: 1.0 }); perc.add(S.kick({ tone: 42, decay: 0.4, drive: 0.3 }), T.down1, { gain: 1.0 }); bass.add(S.sub('D1', 0.9, { harm: 0.3 }), T.down1, { gain: 0.9 });
  for (let t = T.down1 + 0.5; t < T.ads - 0.1; t += 0.5) { const len = N(0.12), c = S.mul(S.osc(len, 4300, 'sine'), env(len, tt => (Math.floor(tt * 60) % 2 ? 0 : 1) * Math.sin(Math.PI * tt / 0.12))); fx.add(c, t, { gain: 0.5, pan: 0.5 }); }
  [11.9, 12.35, 12.5, 13.1].forEach((t, i) => { const len = N(0.09), z = S.mul(S.lowpass(S.osc(len, 120, 'square'), 900), env(len, tt => Math.min(1, tt / 0.005) * Math.min(1, (0.09 - tt) / 0.01) * 0.5)); fx.add(z, t, { gain: 0.5, pan: 0.2 }); });
  keys.add(S.keys(S.chord('F#2', 'min7'), 1.6, { decay: 1.4, index: 2.6 }), T.found, { gain: 0.5 });

  // ── 13.5–16: the ADS light comes on, the desk rolls in, the car climbs. A rising run and a riser.
  ding(T.ads, 1, true); keys.add(S.keys(S.chord('A2', '7'), L(1.8), { decay: 1.2, index: 1.6 }), T.ads, { gain: 0.8 }); bass.add(S.bass('A1', L(1.8), { wave: 'sine', cutoff: 700, sub: 0.2, release: 0.1 }), T.ads, { gain: 0.9 });
  fx.add(S.swipe(0.5, { seed: 9 }), T.in0, { gain: 0.5 }); perc.add(S.rim(), T.in1, { gain: 0.6 });
  fx.add(S.riser(L(3), { from: 250, to: 3600, noise: 0.35 }), T.up0, { gain: 0.5 });
  ['A3', 'C#4', 'E4', 'G4', 'A4', 'C#5', 'E5', 'G5', 'A5', 'C#6', 'E6', 'A6'].forEach((n, i) => vib.add(S.mallet(n, 0.4, { material: 'vibes', decay: 0.35 }), T.up0 + i * 0.12, { gain: 0.45 + i * 0.03 }));
  for (let i = 0; i < 6; i++) perc.add(S.shaker({ decay: 0.04 }), T.up0 + i * 0.25, { gain: 0.3 + i * 0.05 });

  // ── 16–17.5: top floor. Ding, the groove is back, your phone rings.
  ding(T.up1, 1.1, true); perc.add(S.kick({ tone: 50, decay: 0.25, drive: 0.2 }), T.up1, { gain: 0.8 });
  bar(T.up1, 0, 1); 
  ['F#5', 'A5', 'D6'].forEach((n, i) => vib.add(S.mallet(n, 0.8, { material: 'vibes', decay: 0.7 }), T.up1 + L(i), { gain: 0.6 }));
  [T.ring, T.ring + 0.45].forEach(t => [0, 0.07, 0.14, 0.21].forEach(o => fx.add(S.blip('C6', 0.04), t + o, { gain: 0.5 })));

  // ── 17.5–22.5: the doors close; the tune resolves under the last line.
  fx.add(S.whoosh(0.5, { from: 1800, to: 300, peak: 0.6, seed: 11 }), T.doors, { gain: 0.7 });
  perc.add(S.kick({ tone: 46, decay: 0.3, drive: 0.25 }), T.shut, { gain: 0.9 }); perc.add(S.rim(), T.shut, { gain: 0.7 }); ding(T.shut + 0.02, 0.8);
  bar(T.shut, 1, 0.7); bar(T.shut + 2, 2, 0.6);
  keys.add(S.pad(S.chord('D3', 'maj9'), DUR - (T.shut + 4), { cutoff: 1600, attack: 0.15, release: 0.4 }), T.shut + 4, { gain: 0.7 });
  keys.add(S.keys(S.chord('D3', 'maj9'), 0.5, { decay: 0.45, index: 1.6 }), T.shut + 4, { gain: 0.9 });
  bass.add(S.bass('D1', 0.5, { wave: 'sine', cutoff: 700, sub: 0.2, release: 0.15 }), T.shut + 4, { gain: 0.9 });
  ['A5', 'F#5', 'D6'].forEach((n, i) => vib.add(S.mallet(n, 0.3, { material: 'vibes', decay: 0.25 }), T.shut + 4 + i * 0.1, { gain: 0.6 - i * 0.1 }));
}
