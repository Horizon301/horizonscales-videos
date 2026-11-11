// score.mjs — "The Empty Week" (video #11). Voiceover first: AI narration (Kokoro, voice am_michael) from audio/vo_*.wav.
// Under it: an original light funk groove at 100 BPM in E minor (tight kick, claps, sixteenth hats, a plucky bass line, organ stabs,
// a cowbell on every fix). The groove drops out for a beat each time a job slips away; every card change gets a hit.
import { DUR, BPM, b, L, VO, DOT, LS, FAIL, FS, LAND, CHECK, AIM, END, T } from './timeline.js';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
export { DUR };
const HERE = dirname(fileURLToPath(import.meta.url));
const MUTE_VO = process.env.MUTE_VO === '1', MUTE_MUSIC = process.env.MUTE_MUSIC === '1';

export default function score(S) {
  S.tempo(BPM); S.space({ room: 0.3, damp: 0.5 });
  const mg = MUTE_MUSIC ? 0 : 1;
  const vo = S.bus('vo', { gain: MUTE_VO ? 0 : 1.0, highpass: 90 });
  const drums = S.bus('drums', { gain: 0.12 * mg, highpass: 45, lowpass: 7000, reverb: 0.04 });
  const bass = S.bus('bass', { gain: 0.07 * mg, highpass: 38, duck: 0.25, duckRelease: 0.12 });
  const keys = S.bus('keys', { gain: 0.085 * mg, reverb: 0.15, highpass: 220, lowpass: 4200 });
  const bells = S.bus('bells', { gain: 0.055 * mg, reverb: 0.25, highpass: 400, lowpass: 6000 });
  const fx = S.bus('fx', { gain: 0.09 * mg, reverb: 0.08, highpass: 120, lowpass: 5000 });

  VO.forEach(([t0], i) => vo.add(S.load(join(HERE, 'audio', `vo_${i}.wav`)), t0, { gain: 1 }));

  const kick = (t, g = 0.9) => { drums.add(S.kick({ tone: 56, decay: 0.16, drive: 0.3, click: 0.7 }), t, { gain: g }); S.duck(t, g); };
  const clap = (t, g = 0.5) => drums.add(S.clap({ decay: 0.14 }), t, { gain: g });
  const hat = (t, g = 0.12, open = false) => drums.add(S.hat({ open, decay: open ? 0.14 : 0.03 }), t, { gain: g, pan: 0.25 });
  const stab = (root, q, t, g = 0.7, len = 0.5) => keys.add(S.organ(S.chord(root, q), L(len), { drawbars: '688400000', click: 0.5, leslie: 0.3 }), t, { gain: g });
  const bn = (n, t, len = 0.45, g = 0.9) => bass.add(S.bass(n, L(len), { wave: 'saw', cutoff: 520, envAmt: 2.5, envDecay: 0.1, drive: 0.3, sub: 0.5, release: 0.03 }), t, { gain: g });

  // one beat of groove: i = beat number inside its section, so every section starts on a kick
  const RIFF = [['E1', 'E2'], ['G1', 'A1'], ['E1', 'D2'], ['B1', 'D2']];
  const beat = (n, i, bright) => {
    const t = b(n);
    if (i % 2 === 0) kick(t, 0.9); else { clap(t, 0.5); kick(t + L(0.5), 0.55); }
    for (let s = 0; s < 4; s++) hat(t + L(s / 4), s === 0 ? 0.13 : s === 2 ? 0.16 : 0.07, s === 2 && i % 2 === 1);
    const [x, y] = RIFF[i % 4]; bn(x, t, 0.4, 0.9); bn(y, t + L(0.5), 0.3, 0.7); if (i % 2) bn(x, t + L(0.75), 0.2, 0.55);
    if (i % 2 === 1 || i === 0) stab(bright ? 'G3' : 'E3', bright ? 'maj7' : 'min7', t + (i === 0 ? 0 : L(0.5)), i === 0 ? 0.8 : 0.55, 0.4);
  };

  // ── 0–5: the hook. A hit on frame 0 under the question, then just a light pulse so the voice is clear.
  kick(0, 0.9); stab('E3', 'min7', 0, 0.8, 1.2); bn('E1', 0, 1.5, 0.9); fx.add(S.swipe(0.35, { seed: 3 }), 0.06, { gain: 0.5 });   // the underline being drawn
  for (let n = 1; n < 5; n++) { hat(b(n), 0.12); hat(b(n + 0.5), 0.08); if (n === 2) clap(b(n), 0.3); }
  bn('E1', b(2.5), 0.4, 0.7); bn('G1', b(3), 0.4, 0.7); bn('A1', b(4), 0.4, 0.8); bn('B1', b(4.5), 0.4, 0.8);
  [4, 4.25, 4.5, 4.75].forEach((n, i) => drums.add(S.snare({ tone: 200, decay: 0.06 }), b(n), { gain: 0.2 + i * 0.06 }));

  // ── 5–9: "three places". Groove in; a low pop as each numbered dot lands.
  for (let n = 5; n < 9; n++) beat(n, n - 5, false);
  DOT.forEach((t, i) => { fx.add(S.pop(['E5', 'G5', 'B5'][i]), t, { gain: 0.7 }); bells.add(S.pluck(['E4', 'G4', 'B4'][i], 0.4, { bright: 0.5 }), t, { gain: 0.7 }); });

  // ── three leak/fix pairs
  for (let k = 0; k < 3; k++) {
    const n0 = Math.round(LS[k] / L(1)), nf = Math.round(FS[k] / L(1)), n1 = k < 2 ? Math.round(LS[k + 1] / L(1)) : 31;
    // leak: two beats of groove, then the job slips away: the band stops, a tom falls, the X is scribbled
    beat(n0, 0, false); beat(n0 + 1, 1, false);
    fx.add(S.whoosh(0.5, { from: 600, to: 1800, peak: 0.5, seed: 30 + k }), LS[k], { gain: 0.5 });
    if (k === 2) for (let r = 0; r < 2; r++) [0, 0.07, 0.14, 0.21].forEach(o => fx.add(S.blip(r % 2 ? 'A5' : 'C6', 0.04), LS[k] + 0.5 + r * 0.32 + o, { gain: 0.35 }));   // it rings
    const f = FAIL[k];
    kick(f, 0.8); drums.add(S.tom('E2', { decay: 0.22 }), f, { gain: 0.7 }); drums.add(S.tom('B1', { decay: 0.25 }), f + L(0.5), { gain: 0.6 });
    bass.add(S.bass('E1', L(1.6), { wave: 'saw', cutoff: 400, glideFrom: 'B1', glide: 0.3, drive: 0.3, sub: 0.6, release: 0.1 }), f, { gain: 0.9 });
    fx.add(S.downlifter(0.7, { from: 1600, to: 200, seed: 40 + k }), f, { gain: 0.5 });
    fx.add(S.swipe(0.14, { up: false, seed: 50 + k }), f + 0.03, { gain: 0.6 }); fx.add(S.swipe(0.14, { up: false, seed: 55 + k }), f + 0.18, { gain: 0.6 });
    hat(f + L(1), 0.1); hat(f + L(1.5), 0.1); drums.add(S.snare({ tone: 200, decay: 0.06 }), f + L(1.5), { gain: 0.3 }); drums.add(S.snare({ tone: 200, decay: 0.06 }), f + L(1.75), { gain: 0.38 });
    // fix: the magnet slaps on (cowbell + bright chord), the note sticks on the next beat (bell)
    for (let n = nf; n < n1; n++) beat(n, n - nf, true);
    drums.add(S.cowbell({ decay: 0.16 }), FS[k], { gain: 0.5 }); fx.add(S.click({ tone: 0.6, seed: 60 + k }), FS[k], { gain: 0.8 });
    stab(['G3', 'C3', 'D3'][k], ['maj7', 'maj7', '7sus4'][k], FS[k], 0.9, 0.8);
    fx.add(S.swipe(0.25, { seed: 70 + k }), LAND[k] - 0.25, { gain: 0.45 });
    fx.add(S.pop('G5'), LAND[k], { gain: 0.7 }); bells.add(S.bell(['B5', 'D6', 'E6'][k], 0.8, { decay: 0.45 }), LAND[k], { gain: 0.8 });
  }

  // ── 31–35: found, called, booked. Three rising bells with the checks.
  for (let n = 31; n < 35; n++) beat(n, n - 31, true);
  CHECK.forEach((t, i) => { bells.add(S.bell(['G5', 'B5', 'D6'][i], 0.9, { decay: 0.5 }), t, { gain: 0.9 }); drums.add(S.cowbell({ decay: 0.12 }), t, { gain: 0.35 }); });
  bells.add(S.pluck('G5', 0.5, { bright: 0.6 }), AIM, { gain: 0.6 });
  [34.5, 34.75].forEach(n => drums.add(S.snare({ tone: 200, decay: 0.06 }), b(n), { gain: 0.35 }));

  // ── 35–43: the eraser wipes the board; the end card lands on G, a light pulse under the last line
  fx.add(S.whoosh(0.7, { from: 300, to: 2400, peak: 0.6, seed: 80 }), END - 0.05, { gain: 0.8 });
  kick(END, 1); stab('G3', 'add9', END, 0.9, 3.5); bn('G1', END, 3, 0.9);
  for (let n = 36; n < 40; n++) { const t = b(n); kick(t, 0.6); if (n % 2) clap(t, 0.3); hat(t + L(0.5), 0.1); bn(n % 2 ? 'D2' : 'G1', t, 0.5, 0.7); bells.add(S.pluck(['B4', 'D5', 'G5', 'B5'][n - 36], 0.5, { bright: 0.55 }), t, { gain: 0.6 }); }
  keys.add(S.pad(S.chord('G3', 'add9'), DUR - b(40), { cutoff: 1500, attack: 0.2, release: 1.6 }), b(40), { gain: 0.9 });
  bn('G1', b(40), 3, 0.8); bells.add(S.bell('G5', 1.6, { decay: 1.0 }), b(40), { gain: 0.7 }); bells.add(S.bell('D6', 1.6, { decay: 1.0 }), b(40.5), { gain: 0.5 });
  for (let n = 40; n < 43; n++) hat(b(n), 0.06);
}
