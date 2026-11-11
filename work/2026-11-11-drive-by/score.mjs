// score.mjs — "The Drive-By Test" (video #13). No voice. An original road-trip shuffle at 120 BPM in G major:
// brushed snare on 2 and 4 with a swung shaker, a walking bass, twangy plucked chords, a low engine hum under it all.
// Each sign whooshes past the window; a clock ticks while you try to remember the number; a bell rings on the answer.
import { DUR, b, L, T, CAPS } from './timeline.js';
export { DUR };

export default function score(S) {
  S.tempo(120); S.space({ room: 0.3, damp: 0.5 });
  const drums = S.bus('drums', { gain: 0.42, highpass: 50, lowpass: 7500, reverb: 0.05 });
  const bass = S.bus('bass', { gain: 0.24, highpass: 38 });
  const gtr = S.bus('gtr', { gain: 0.3, reverb: 0.16, highpass: 160, lowpass: 5200 });
  const bells = S.bus('bells', { gain: 0.22, reverb: 0.28, highpass: 400, lowpass: 6500 });
  const fx = S.bus('fx', { gain: 0.3, reverb: 0.08, highpass: 70, lowpass: 5500 });
  const SR = S.SR, N = s => Math.max(1, Math.round(s * SR));
  const env = (len, f) => { const e = new Float32Array(len); for (let i = 0; i < len; i++) e[i] = f(i / SR, len / SR); return e; };

  const BARS = [['G2', 'maj', ['G1', 'B1', 'D2', 'E2']], ['C3', 'maj', ['C2', 'E2', 'G2', 'A2']], ['G2', 'maj', ['G1', 'B1', 'D2', 'B1']], ['D3', '7', ['D2', 'F#2', 'A2', 'C2']]];
  const bar = (t, k, g = 1, drumsOn = true) => {
    const [root, q, walk] = BARS[k % 4];
    walk.forEach((n, i) => bass.add(S.bass(n, L(0.85), { wave: 'sine', cutoff: 750, sub: 0.2, drive: 0.25, release: 0.06 }), t + L(i), { gain: 0.9 * g }));
    [0.66, 1.66, 2.66, 3.66].forEach((o, i) => S.chord(root, q).forEach((n, j) => gtr.add(S.pluck(S.transpose ? n : n, 0.35, { bright: 0.7 }), t + L(o) + j * 0.012, { gain: (i % 2 ? 0.6 : 0.45) * g, pan: 0.25 })));
    gtr.add(S.pluck(root, 0.5, { bright: 0.75 }), t, { gain: 0.6 * g, pan: -0.25 });
    if (!drumsOn) return;
    for (let i = 0; i < 4; i++) {
      if (i % 2 === 0) drums.add(S.kick({ tone: 52, decay: 0.2, drive: 0.2, click: 0.5 }), t + L(i), { gain: 0.75 * g });
      else { drums.add(S.snare({ tone: 200, decay: 0.09, snappy: 0.9 }), t + L(i), { gain: 0.34 * g }); drums.add(S.rim(), t + L(i), { gain: 0.3 * g }); }
      drums.add(S.shaker({ decay: 0.05 }), t + L(i), { gain: 0.28 * g, pan: 0.3 }); drums.add(S.shaker({ decay: 0.04 }), t + L(i + 0.66), { gain: 0.2 * g, pan: 0.3 });
    }
  };

  // engine hum under the whole drive
  { const d = T.end + 0.5, len = N(d), o = S.osc(len, i => 62 + 3 * Math.sin(i / SR * 5) - (i / SR > T.slow0 ? Math.min(14, (i / SR - T.slow0) * 16) : 0), 'saw'); fx.add(S.mul(S.lowpass(o, 240), env(len, (t, dd) => Math.min(1, t / 0.3) * Math.min(1, (dd - t) / 0.5) * 0.5)), 0, { gain: 0.6 }); }

  // 0–4.5: the hook and sign A. Frame 0 lands on a kick and a chord.
  fx.add(S.pop('D6'), 0, { gain: 0.5 });
  for (let k = 0; k < 2; k++) bar(k * 2, k);
  bar(4, 2, 1, false); drums.add(S.kick({ tone: 52, decay: 0.2, drive: 0.2 }), 4, { gain: 0.7 });
  const pass = (t, seed) => { fx.add(S.whoosh(1.1, { from: 500, to: 2600, peak: 0.5, pan: 1, seed }), t - 0.55, { gain: 0.9 }); };
  pass(T.passA, 5);
  // 4.7–7.5: did you catch it? The band drops out; a clock ticks.
  for (let i = 0; i < 6; i++) fx.add(S.tick({ tone: i % 2 ? 0.35 : 0.5 }), 4.7 + i * 0.45, { gain: 0.7, pan: i % 2 ? 0.3 : -0.3 });
  bass.add(S.bass('D2', L(4.5), { wave: 'sine', cutoff: 500, sub: 0.3, release: 0.2 }), 4.75, { gain: 0.5 });
  [6.5, 6.75, 7.0, 7.25].forEach((t, i) => drums.add(S.snare({ tone: 210, decay: 0.05 }), t, { gain: 0.16 + i * 0.05 }));
  // 7.5–10: sign B. The band is back.
  bar(7.5, 0); pass(T.passB, 9); bar(9.5, 1, 0.8, false);
  // hits on every card
  CAPS.forEach((c, i) => { drums.add(S.rim(), c.t0, { gain: 0.5 }); fx.add(S.pop(['G5', 'A5', 'E5', 'B5', 'D5', 'G5'][i]), c.t0, { gain: 0.45 }); });
  // 10–13: both signs up
  fx.add(S.swipe(0.3, { seed: 3 }), T.cmp, { gain: 0.5 }); fx.add(S.swipe(0.3, { seed: 4 }), T.cmp + 0.25, { gain: 0.5 });
  bar(10, 2, 0.75); bar(12, 3, 0.75, false); [12.5, 12.75].forEach((t, i) => drums.add(S.snare({ tone: 210, decay: 0.05 }), t, { gain: 0.24 + i * 0.08 }));
  // 13–16: the answer
  ['G5', 'B5', 'D6'].forEach((n, i) => bells.add(S.bell(n, 0.9, { decay: 0.5 }), T.tip + i * 0.09, { gain: 0.8 }));
  fx.add(S.swipe(0.45, { seed: 6 }), T.tip + 0.1, { gain: 0.45 });
  bar(13, 0); bar(15, 3, 0.9, false);
  // 16–20.5: end card
  fx.add(S.whoosh(0.6, { from: 2200, to: 400, peak: 0.6, seed: 12 }), T.end - 0.05, { gain: 0.8 });
  drums.add(S.kick({ tone: 48, decay: 0.3, drive: 0.25 }), T.shut, { gain: 0.9 });
  bar(T.shut, 0, 0.7); bar(T.shut + 2, 1, 0.6, false);
  S.chord('G2', 'maj').forEach((n, j) => gtr.add(S.pluck(n, 1.6, { bright: 0.6 }), T.shut + 3.5 + j * 0.05, { gain: 0.8 }));
  bass.add(S.bass('G1', 0.5, { wave: 'sine', cutoff: 700, sub: 0.2, release: 0.2 }), T.shut + 3.5, { gain: 0.9 });
  bells.add(S.bell('G5', 0.4, { decay: 0.3 }), T.shut + 3.5, { gain: 0.6 });
}
