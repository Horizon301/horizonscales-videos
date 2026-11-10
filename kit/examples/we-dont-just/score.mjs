// score.mjs — "We don't just…" Horizon Scales' own phonk-style track (Nov 3).
// Kai wanted the closest thing to "Bliss" (Klsr) without using it. This is an ORIGINAL track in the same style, measured from his reference
// file: ~112 BPM, F minor, a distorted sliding 808, a pitched 808-cowbell lead, punchy kick + clap, busy hats, and a filtered build that
// opens into a bright, dense drop. The melody and bass line are our own; nothing is sampled or copied.
// Shape: hook = the groove heard through a wall (muffled) · 0–7.5 the lead comes in at half speed · 7.5–11.5 build · breath · 12 the drop on "booked."
import { DUR, BPM, CUES, WORDS, END, b, GROOVE, HOOK, ET } from './timeline.js';
export { DUR };
const MIDI = n => { const m = /^([A-G])([b#]?)(-?\d)$/.exec(n); return 12 * (+m[3] + 1) + { C: 0, D: 2, E: 4, F: 5, G: 7, A: 9, B: 11 }[m[1]] + (m[2] === '#' ? 1 : m[2] === 'b' ? -1 : 0); };
const L = n => n * 60 / BPM;   // a LENGTH in beats → seconds (b() is a TIME and includes the hook offset)
const HZ = n => 440 * Math.pow(2, (MIDI(n) - 69) / 12);

// our own 2-bar lead (16th steps; '.' = rest), F minor with a raised 7th (E) for the phonk bite
const LEAD = ['F5', '.', 'F5', 'Ab5', '.', 'F5', 'C6', '.', 'Bb5', '.', 'Ab5', 'F5', '.', 'Eb5', '.', 'F5',
              'Db6', '.', 'C6', 'Ab5', '.', 'F5', 'E5', '.', 'F5', '.', 'G5', 'Ab5', '.', 'C6', '.', '.'];
// 808 line per 2 bars: [beat, note, length, slide-from]
const BASS = [[0, 'F1', 1.5], [1.5, 'F1', 0.5], [2, 'Ab1', 1, 'F1'], [3, 'F1', 0.75, 'Ab1'], [3.75, 'E1', 0.25],
              [4, 'Db1', 1.5, 'E1'], [5.5, 'Db1', 0.5], [6, 'Eb1', 1, 'Db1'], [7, 'C1', 1, 'Eb1']];

export default function score(S) {
  S.tempo(BPM); S.space({ room: 0.3, damp: 0.5 });
  const drums = S.bus('drums', { gain: 0.5, highpass: 50, lowpass: 6500 });
  const b808 = S.bus('808', { gain: 0.1, drive: 0.45, duck: 0.55, duckRelease: 0.12, highpass: 38 });
  const bell = S.bus('cowbell', { gain: 0.62, duck: 0.25, duckRelease: 0.1, reverb: 0.12, delay: 0.1, highpass: 300 });
  const wall = S.bus('wall', { gain: 0.5, lowpass: 520, highpass: 90 });          // the hook: groove heard through a wall
  const mid = S.bus('mid', { gain: 0.34, lowpass: 1800, reverb: 0.1, highpass: 300 });   // the lead before the drop (darker)
  const fx = S.bus('fx', { gain: 0.32, reverb: 0.08, lowpass: 5000, highpass: 70 });
  const clicks = S.bus('clicks', { gain: 0.32, lowpass: 4200, highpass: 600, reverb: 0.06 });

  const cow = (bus, note, t, g = 0.6) => bus.add(S.cowbell({ tone: HZ(note) / 540, decay: 0.16 }), t, { gain: g });
  const lead = (bus, from, to, every = 1, g = 0.6) => { for (let s = 0; b(from) + s * L(0.25) < b(to) - 1e-6; s++) { const n = LEAD[s % 32]; if (n !== '.' && s % every === 0) cow(bus, n, b(from) + s * L(0.25), g); } };
  const bass = (bus, from, to, g = 0.9, drv = 0.7) => { for (let o = from; o < to; o += 8) BASS.forEach(([n, note, l, sl]) => { if (o + n < to) bus.add(S.bass(note, L(Math.min(l, to - o - n)), { wave: 'sine', sub: 0, cutoff: 1400, drive: drv, glideFrom: sl, glide: 0.08, release: 0.04 }), b(o + n), { gain: g }); }); };
  const kick = (bus, n, g = 0.9) => { bus.add(S.kick({ tone: 55, decay: 0.14, drive: 0.55, click: 1 }), b(n), { gain: g * 0.7 }); S.duck(b(n), g); };
  const clap = (bus, n, g = 0.6) => { bus.add(S.clap({ decay: 0.16 }), b(n), { gain: g }); bus.add(S.snare({ tone: 200, decay: 0.1 }), b(n), { gain: g * 0.5 }); };
  const hats = (bus, from, to, step, g) => { for (let n = from; n < to - 1e-6; n += step) bus.add(S.hat({ decay: 0.018 }), b(n), { gain: 0.8 * g * ((Math.round(n / step) % 2) ? 1 : 0.6), pan: 0.2 }); };

  // ── hook (beats −4 to 0): the whole groove, muffled, like it's playing in the next room. Calm clicks on top.
  lead(wall, -4, 0, 1, 0.55); bass(wall, -4, 0, 0.7, 0.4);
  [-4, -3, -2.5, -2, -1, -0.5].forEach(n => kick(wall, n, 0.8)); [-3, -1].forEach(n => clap(wall, n, 0.5));
  clicks.add(S.click({ tone: 0.55, seed: 62 }), 0, { gain: 0.9 });
  for (let n = -3.5; n < -0.25; n += 0.5) clicks.add(S.tick({ tone: 0.45 }), b(n), { gain: 0.35, pan: (n * 2) % 2 ? 0.15 : -0.15 });
  [HOOK.strike, HOOK.line2].forEach((t, i) => { clicks.add(S.click({ tone: 0.6, seed: 64 + i }), t, { gain: 0.8 }); drums.add(S.rim(), t, { gain: 0.35 }); });
  fx.add(S.riser(L(1.5), { from: 300, to: 3000, noise: 0.5 }), b(-1.5), { gain: 0.18 });

  // ── 0–7.5: the wall comes down. Lead at half speed (8ths), 808 clean, kick on each card, light clap on 2 and 4.
  fx.add(S.impact({ size: 0.8 }), b(0), { gain: 0.45 });
  lead(mid, 0, 7.5, 2, 0.6); bass(b808, 0, 7.5, 0.8, 0.45);
  [0, 2, 3, 4.5, 6].forEach(n => kick(drums, n, 0.9)); [1, 5, 7].forEach(n => clap(drums, n, 0.45));
  hats(drums, 0, 7.5, 0.5, 0.16);

  // ── 7.5–11.5: build. Lead goes to full 16ths (still filtered), kicks on every card and beat, snare roll speeds up.
  lead(mid, 7.5, 11.25, 1, 0.42); bass(b808, 7.5, 11.25, 0.8, 0.55);
  [7.5, 8, 9, 10].forEach(n => kick(drums, n, 0.9)); drums.add(S.kick({ tone: 52, decay: 0.07, drive: 0.5, click: 1 }), b(11), { gain: 0.9 }); S.duck(b(11), 0.9);   // short kick keeps the breath clean [8.5, 9.5].forEach(n => clap(drums, n, 0.45));
  hats(drums, 7.5, 11.25, 0.25, 0.14);
  [[10, 11, 0.5], [11, 11.125, 0.25], [11.125, 11.375, 0.125]].forEach(([a, z, st]) => { for (let n = a; n < z - 1e-6; n += st) drums.add(S.snare({ tone: 210, decay: 0.05 }), b(n), { gain: 0.2 + 0.25 * (n - 10) / 1.5 }); });
  fx.add(S.riser(L(3.25), { from: 200, to: 4000, noise: 0.4 }), b(8), { gain: 0.12 });
  // 11.5–12: breath. Nothing plays, so the drop lands.

  // ── 12: the drop on "booked." — bright lead, dirty 808, busy hats, the kick/clap groove the end card pulses on
  fx.add(S.impact({ size: 1.2 }), b(12), { gain: 1 }); clap(drums, 12, 1); drums.add(S.kick({ tone: 48, decay: 0.3, drive: 0.6, click: 1 }), b(12), { gain: 0.9 }); S.duck(b(12), 1); drums.add(S.crash({ dur: 2.2 }), b(12), { gain: 0.28 });
  const { K, SN, ROLL } = GROOVE;
  lead(bell, 12, 20, 1, 0.65); bass(b808, 14, 20, 1, 0.9);   // 12–14 is the 808 dive (drama pass)
  K.forEach(n => kick(drums, n, n === 12 || n === 20 ? 1 : 0.85)); SN.forEach(n => clap(drums, n, 0.65));
  ROLL.forEach(n => drums.add(S.snare({ tone: 220, decay: 0.05 }), b(n), { gain: 0.3 }));
  hats(drums, 12, 20, 0.25, 0.2);
  [13.75, 15.75, 17.75].forEach(n => { for (let k = 0; k < 4; k++) drums.add(S.hat({ decay: 0.015 }), b(n) + k * L(0.0625), { gain: 0.14 }); });   // little hat rolls
  // last hit (beat 20): one slam, then the 808 rings out
  fx.add(S.impact({ size: 0.9 }), b(20), { gain: 0.55 }); cow(bell, 'F5', b(20), 0.7); b808.add(S.bass('F1', L(1), { wave: 'sine', sub: 0, cutoff: 1400, drive: 0.85, glideFrom: 'C2', glide: 0.1 }), b(20), { gain: 1 });

  // chords in the mids (Bliss's sound sits in the middle): dark saw chords under the lead, quieter before the drop
  const keys = S.bus('chords', { gain: 0.2, reverb: 0.2, highpass: 200, lowpass: 3000, duck: 0.4, duckRelease: 0.12 });
  const PROG = [['F3', 'min'], ['Db3', 'maj'], ['Eb3', 'maj'], ['C3', 'min']];
  for (let n = 0; n < 20; n += 2) { if (n >= 11 && n < 12) continue; const [r, q] = PROG[(n / 2) % 4], len = n === 10 ? 1.25 : 2;
    keys.add(S.pad(S.chord(r, q), L(len), { voices: 5, cents: 16, cutoff: n >= 12 ? 2400 : 1200, attack: 0.01, release: n === 10 ? 0.03 : 0.2 }), b(n), { gain: n >= 12 ? 0.9 : 0.55 }); }

  // ── drama pass (Nov 3): bigger contrast inside the phonk style, no cinematic layer
  // the wall comes down at beat 0: a reverse swell into it and a hard hit on it
  fx.add(S.reverseCymbal(L(1.5)), b(0) - L(1.5), { gain: 0.16 }); clap(drums, 0, 0.8); S.duck(b(0), 1);
  // "called." (beat 11): the 808 drops in pitch like a tape stop, then true silence until "booked."
  b808.add(S.bass('F2', L(0.45), { wave: 'sine', sub: 0, cutoff: 1400, drive: 0.8, glideFrom: 'F2', glide: 0.001, release: 0.02 }).map((v, i, a) => v * (1 - i / a.length)), b(11), { gain: 0.6 });
  fx.add(S.downlifter(L(0.45), { from: 1800, to: 90 }), b(11), { gain: 0.22 });
  // the drop: an 808 dive (C3 → F1), the lead doubled an octave up, heavier pumping, a second crash on the next bar
  b808.add(S.bass('F1', L(2), { wave: 'sine', sub: 0, cutoff: 1600, drive: 0.95, glideFrom: 'C3', glide: 0.18, release: 0.05 }), b(12), { gain: 1.2 });
  const hi = S.bus('lead-hi', { gain: 0.22, duck: 0.3, duckRelease: 0.1, reverb: 0.15, highpass: 900, lowpass: 4800 });
  for (let st = 0; b(12) + st * L(0.25) < b(20) - 1e-6; st++) { const n = LEAD[st % 32]; if (n !== '.') hi.add(S.cowbell({ tone: HZ(n) * 2 / 540, decay: 0.12 }), b(12) + st * L(0.25), { gain: 0.6 }); }
  drums.add(S.crash({ dur: 1.8 }), b(16), { gain: 0.2 });
  [12, 14, 16, 18].forEach(n => S.duck(b(n), 1));

  // ── word sounds: a soft swipe on each word, a click + tiny bell on the flash words, a whoosh into the end card
  for (const c of CUES) {
    if (c.sfx === 'word') fx.add(S.swipe(0.12, { seed: c.n + 3 }), c.t - 0.05, { gain: 0.35 });
    if (c.sfx === 'flash') { fx.add(S.click({ tone: 0.8 }), c.t, { gain: 0.45 }); fx.add(S.whoosh(0.3, { from: 2500, to: 700 }), c.t - 0.14, { gain: 0.18 }); }
    if (c.sfx === 'end') fx.add(S.whoosh(0.5, { from: 2000, to: 300 }), c.t - 0.12, { gain: 0.25 });
  }
}
