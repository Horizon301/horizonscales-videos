// score.mjs — "The 3-Second Test" (video #14). No voice. Original quiz-show "thinking music" at 120 BPM in C:
// a bouncy marimba line over plucked bass and woodblock, a tick for every second of each countdown, a low buzzer when time is up,
// a rising three-note bell on the answer.
import { DUR, b, L, T, CAPS } from './timeline.js';
export { DUR };

export default function score(S) {
  S.tempo(120); S.space({ room: 0.3, damp: 0.5 });
  const drums = S.bus('drums', { gain: 0.3, highpass: 50, lowpass: 7500, reverb: 0.05 });
  const bass = S.bus('bass', { gain: 0.22, highpass: 38 });
  const mar = S.bus('mar', { gain: 0.3, reverb: 0.16, highpass: 180, lowpass: 4200 });
  const bells = S.bus('bells', { gain: 0.17, reverb: 0.28, highpass: 400, lowpass: 6500 });
  const fx = S.bus('fx', { gain: 0.22, reverb: 0.06, highpass: 80, lowpass: 5500 });
  const SR = S.SR, N = s => Math.max(1, Math.round(s * SR));
  const env = (len, f) => { const e = new Float32Array(len); for (let i = 0; i < len; i++) e[i] = f(i / SR, len / SR); return e; };

  const RIFF = [['C4', 'E4', 'G4', 'E4', 'A4', 'G4', 'E4', 'D4'], ['F4', 'A4', 'C5', 'A4', 'D5', 'C5', 'A4', 'G4'], ['C4', 'E4', 'G4', 'E4', 'A4', 'G4', 'E4', 'D4'], ['G4', 'B4', 'D5', 'B4', 'F5', 'D5', 'B4', 'G4']];
  const ROOT = ['C2', 'F2', 'C2', 'G2'], FIFTH = ['G2', 'C3', 'G2', 'D3'];
  const bar = (t, k, g = 1, full = true) => {
    RIFF[k % 4].forEach((n, i) => mar.add(S.mallet(n, 0.4, { material: 'marimba', decay: 0.35 }), t + L(i / 2), { gain: (i % 2 ? 0.55 : 0.75) * g, pan: i % 2 ? 0.2 : -0.2 }));
    bass.add(S.bass(ROOT[k % 4], L(0.8), { wave: 'sine', cutoff: 750, sub: 0.2, drive: 0.2, release: 0.06 }), t, { gain: 0.9 * g });
    bass.add(S.bass(FIFTH[k % 4], L(0.8), { wave: 'sine', cutoff: 750, sub: 0.2, drive: 0.2, release: 0.06 }), t + L(2), { gain: 0.8 * g });
    if (!full) return;
    for (let i = 0; i < 4; i++) { if (i % 2 === 0) drums.add(S.kick({ tone: 54, decay: 0.16, drive: 0.2, click: 0.6 }), t + L(i), { gain: 0.7 * g }); else drums.add(S.clap({ decay: 0.1 }), t + L(i), { gain: 0.3 * g }); drums.add(S.shaker({ decay: 0.04 }), t + L(i + 0.5), { gain: 0.26 * g, pan: 0.3 }); }
  };
  const buzzer = t => { const len = N(0.38), z = S.mul(S.lowpass(S.osc(len, 98, 'square'), 800), env(len, tt => Math.min(1, tt / 0.01) * Math.min(1, (0.38 - tt) / 0.05) * 0.6)); fx.add(z, t, { gain: 0.7 }); };
  const countdown = t0 => { ['E5', 'E5', 'E5'].forEach((n, i) => { fx.add(S.blip(n, 0.07), t0 + i, { gain: 0.6 }); fx.add(S.tick({ tone: 0.5 }), t0 + i, { gain: 0.9 }); fx.add(S.tick({ tone: 0.35 }), t0 + i + 0.5, { gain: 0.5 }); }); };

  // 0–2.6: the hook. A hit on frame 0 and the riff.
  fx.add(S.pop('C6'), 0, { gain: 0.5 }); drums.add(S.kick({ tone: 54, decay: 0.2 }), 0, { gain: 0.8 });
  bar(0, 0); bar(2, 1, 0.9, false); [2.1, 2.35].forEach((t, i) => drums.add(S.snare({ tone: 210, decay: 0.05 }), t, { gain: 0.24 + i * 0.08 }));
  // 2.6–5.6: site A, three seconds on the clock (music thins to bass and ticks)
  fx.add(S.swipe(0.25, { seed: 3 }), T.a0, { gain: 0.6 }); countdown(T.a0);
  [0, 1, 2].forEach(i => bass.add(S.bass(['C2', 'D2', 'E2'][i], 0.45, { wave: 'sine', cutoff: 650, sub: 0.3, release: 0.08 }), T.a0 + i, { gain: 0.8 }));
  buzzer(T.a1);
  // 5.6–8.4: what do they do? Near silence, a slow clock, a held low note.
  bass.add(S.bass('A1', 2.5, { wave: 'sine', cutoff: 450, sub: 0.3, release: 0.2 }), T.a1 + 0.1, { gain: 0.5 });
  for (let i = 0; i < 5; i++) fx.add(S.tick({ tone: i % 2 ? 0.35 : 0.5 }), T.a1 + 0.5 + i * 0.45, { gain: 0.6, pan: i % 2 ? 0.3 : -0.3 });
  [7.9, 8.15].forEach((t, i) => drums.add(S.snare({ tone: 210, decay: 0.05 }), t, { gain: 0.24 + i * 0.08 }));
  // 8.4–11.4: site B, three seconds again, brighter
  fx.add(S.swipe(0.25, { seed: 5 }), T.b0, { gain: 0.6 }); countdown(T.b0);
  [0, 1, 2].forEach(i => { bass.add(S.bass(['C2', 'E2', 'G2'][i], 0.45, { wave: 'sine', cutoff: 650, sub: 0.3, release: 0.08 }), T.b0 + i, { gain: 0.8 }); mar.add(S.mallet(['E4', 'G4', 'C5'][i], 0.5, { material: 'marimba', decay: 0.4 }), T.b0 + i + 0.5, { gain: 0.6 }); });
  bells.add(S.bell('G5', 0.7, { decay: 0.4 }), T.b1, { gain: 0.7 });
  // every card change gets a hit
  CAPS.forEach((c, i) => { drums.add(S.rim(), c.t0, { gain: 0.5 }); fx.add(S.pop(['G5', 'A5', 'E5', 'B5', 'D5', 'G5'][i]), c.t0, { gain: 0.4 }); });
  // 11.4–14.4: side by side, the riff is back
  bar(T.cmp, 0, 0.85); bar(T.cmp + 2, 3, 0.8, false); [13.9, 14.15].forEach((t, i) => drums.add(S.snare({ tone: 210, decay: 0.05 }), t, { gain: 0.24 + i * 0.08 }));
  // 14.4–17.4: the answer
  ['C5', 'E5', 'G5', 'C6'].forEach((n, i) => bells.add(S.bell(n, 0.9, { decay: 0.5 }), T.tip + i * 0.08, { gain: 0.75 }));
  fx.add(S.swipe(0.45, { seed: 6 }), T.tip + 0.1, { gain: 0.45 });
  bar(T.tip, 0); bar(T.tip + 2, 1, 0.9, false);
  // 17.4–22: end card
  fx.add(S.whoosh(0.6, { from: 400, to: 2400, peak: 0.6, seed: 12 }), T.end - 0.05, { gain: 0.8 });
  drums.add(S.kick({ tone: 48, decay: 0.3, drive: 0.25 }), T.shut, { gain: 0.9 });
  bar(T.shut, 0, 0.7); bar(T.shut + 2, 3, 0.6, false);
  ['C4', 'E4', 'G4', 'C5'].forEach((n, j) => mar.add(S.mallet(n, 1.2, { material: 'marimba', decay: 1.0 }), T.shut + 3.6 + j * 0.06, { gain: 0.8 }));
  bass.add(S.bass('C2', 0.5, { wave: 'sine', cutoff: 700, sub: 0.2, release: 0.2 }), T.shut + 3.6, { gain: 0.9 });
}
