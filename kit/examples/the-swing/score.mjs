// score.mjs — "The Swing" (video #9). An original, warm, swung boom-bap track at 120 BPM in F major, built around the pendulum.
// Sound idea: a clock. A soft tick on every beat, a whoosh as the logo passes, a wooden "tock" when it turns, a bell on every fix.
// Each pass is one bar; the string crosses the words on the bar's downbeat (kick + chord change).
// Chords: leaks sit on minor chords, fixes resolve to major ones, the end card lands on F.
import { DUR, BPM, b, L, CARDS, N, pass, arrive, T } from './timeline.js';
export { DUR };

const BARS = [['D3', 'min7', 'D1'], ['F3', 'maj7', 'F1'], ['G3', 'min7', 'G1'], ['Bb2', 'maj7', 'Bb0'], ['A2', 'min7', 'A0'], ['Bb2', 'maj9', 'Bb0'], ['C3', '7sus4', 'C1']];
const BELLS = ['C6', 'F6', 'A6'];   // one per fix, climbing

export default function score(S) {
  S.tempo(BPM); S.space({ room: 0.4, damp: 0.5 });
  const drums = S.bus('drums', { gain: 0.5, highpass: 45, lowpass: 6000, reverb: 0.05 });
  const bass = S.bus('bass', { gain: 0.2, highpass: 36, duck: 0.3, duckRelease: 0.14 });
  const keys = S.bus('keys', { gain: 0.36, reverb: 0.22, highpass: 180, lowpass: 5200, duck: 0.2, duckRelease: 0.14 });
  const bells = S.bus('bells', { gain: 0.26, reverb: 0.3, delay: 0.14, highpass: 400, lowpass: 5500 });
  const clock = S.bus('clock', { gain: 0.24, highpass: 400, lowpass: 3200, reverb: 0.08 });
  const fx = S.bus('fx', { gain: 0.3, reverb: 0.1, highpass: 90, lowpass: 3800 });

  const kick = (t, g = 0.85) => { drums.add(S.kick({ tone: 54, decay: 0.15, drive: 0.4, click: 0.8 }), t, { gain: g * 0.75 }); S.duck(t, g); };
  const snare = (t, g = 0.5) => { drums.add(S.snare({ tone: 190, decay: 0.11 }), t, { gain: g }); drums.add(S.rim(), t, { gain: g * 0.7 }); };
  const chord = (root, q, t, len, g = 0.7) => {
    S.chord(root, q).forEach((n, i) => keys.add(S.pluck(n, L(len), { bright: 0.45 }), t + i * 0.012, { gain: g * 0.8, pan: (i % 2 ? 0.2 : -0.2) }));
    keys.add(S.pad(S.chord(root, q), L(len), { voices: 3, cents: 10, cutoff: 1500, attack: 0.03, release: 0.25 }), t, { gain: g * 0.45 });
  };

  // ── the clock: tick-tock on every beat, start to bloom
  for (let n = 0; n < 33; n++) clock.add(S.tick({ tone: n % 2 ? 0.34 : 0.5 }), b(n), { gain: n % 2 ? 0.55 : 0.8, pan: n % 2 ? 0.25 : -0.25 });

  // ── 0–5: the hook. A soft thump on frame 0, a held D minor, a little pickup into the first pass.
  fx.add(S.impact({ size: 0.5 }), 0, { gain: 0.5 }); kick(0, 0.8);
  chord('D3', 'min7', 0, 4.5, 0.6);
  bass.add(S.bass('D1', L(3), { wave: 'sine', cutoff: 700, sub: 0, drive: 0.3, release: 0.1 }), 0, { gain: 0.8 });
  ['A4', 'C5', 'D5'].forEach((n, i) => bells.add(S.pluck(n, 0.4, { bright: 0.6 }), b(3.5 + i * 0.5), { gain: 0.6 }));
  fx.add(S.whoosh(0.6, { from: 500, to: 1600, peak: 0.4 }), 0.05, { gain: 0.35 });   // the logo swings in

  // ── the seven passes: one bar each
  for (let k = 0; k < N; k++) {
    const p = pass(k), [root, q, low] = BARS[k], kind = CARDS[k + 1].kind, m = p.m;
    // the pass itself: a whoosh that peaks as the string crosses the words
    fx.add(S.whoosh(0.9, { from: k % 2 ? 2200 : 500, to: k % 2 ? 500 : 2200, peak: 0.55, seed: 20 + k }), m - 0.5, { gain: 0.42 });
    // downbeat: kick + chord + bass
    kick(m, 0.95); chord(root, q, m, 3.6, kind === 'fix' || kind === 'pay' ? 0.8 : 0.65);
    bass.add(S.bass(low, L(1.4), { wave: 'sine', cutoff: 800, sub: 0, drive: 0.35, release: 0.08 }), m, { gain: 0.9 });
    bass.add(S.bass(low, L(0.8), { wave: 'sine', cutoff: 800, sub: 0, drive: 0.35, release: 0.08 }), m + L(2.5), { gain: 0.75 });
    // boom-bap: snare on 2 and 4, a second kick before 3, swung hats
    snare(m + L(1), 0.5); snare(m + L(3), 0.5); kick(m + L(2.5), 0.7);
    for (let n = 0; n < 4; n++) { drums.add(S.hat({ decay: 0.02 }), m + L(n), { gain: 0.1, pan: 0.2 }); drums.add(S.hat({ decay: 0.016 }), m + L(n + 0.64), { gain: 0.07, pan: 0.2 }); }
    // the turn: a wooden tock when the logo reaches the far side
    drums.add(S.tom(k % 2 ? 'G2' : 'C3', { decay: 0.1 }), p.e, { gain: 0.3 }); clock.add(S.click({ tone: 0.4, seed: 40 + k }), p.e, { gain: 0.7 });
    // the card lands (beat 2 of the bar): a bell on each fix, a low note on each leak, a three-note rise on the payoff
    const a = arrive(k + 1);
    if (kind === 'fix') { const i = (k - 1) / 2; bells.add(S.bell(BELLS[i], 0.9, { decay: 0.5 }), a, { gain: 0.75 }); fx.add(S.swipe(0.3, { seed: 60 + k }), a - 0.02, { gain: 0.4 }); }   // bell + the underline being drawn
    if (kind === 'leak') bells.add(S.pluck(['D4', 'G4', 'A4'][k / 2], 0.5, { bright: 0.35 }), a, { gain: 0.6 });
    if (kind === 'pay') ['C5', 'F5', 'A5'].forEach((n, i) => bells.add(S.bell(n, 0.7, { decay: 0.4 }), a + i * L(0.5), { gain: 0.6 }));
  }

  // ── 31–33: the logo swings back to the middle. Drums thin out, a soft rise.
  snare(b(32), 0.4); [32.5, 32.75].forEach(n => drums.add(S.snare({ tone: 210, decay: 0.05 }), b(n), { gain: 0.28 }));
  fx.add(S.riser(L(1.6), { from: 300, to: 3200, noise: 0.4 }), b(31.3), { gain: 0.16 });
  fx.add(S.reverseCymbal(L(1.5)), b(33) - L(1.5), { gain: 0.1 });

  // ── 33: the bloom. The logo lands and the track resolves to F.
  fx.add(S.impact({ size: 0.9 }), T.bloom, { gain: 0.6 }); kick(T.bloom, 1); drums.add(S.crash({ dur: 2 }), T.bloom, { gain: 0.16 });
  chord('F3', 'maj9', T.bloom, 8, 0.9);
  bass.add(S.bass('F1', L(4), { wave: 'sine', cutoff: 800, sub: 0, drive: 0.35, release: 0.3 }), T.bloom, { gain: 0.9 });
  // each end-card line rises on a bell, climbing the F chord
  [[T.word, 'F5'], [T.tag1, 'A5'], [T.tag2, 'C6'], [T.serv, 'E6'], [T.url, 'F6']].forEach(([t, n]) => bells.add(S.bell(n, 0.9, { decay: 0.5 }), t, { gain: 0.6 }));
  [T.word, T.tag1, T.tag2, T.serv, T.url].forEach(t => clock.add(S.tick({ tone: 0.45 }), t, { gain: 0.6 }));
  kick(b(35), 0.6); kick(b(37), 0.6); snare(b(36), 0.3); snare(b(38), 0.3);
  // last note: F again, left to ring
  chord('F3', 'maj7', b(39), 3, 0.6); bells.add(S.bell('F6', 1.4, { decay: 0.8 }), b(39), { gain: 0.5 });
}
