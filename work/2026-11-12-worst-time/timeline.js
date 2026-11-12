// timeline.js — "Worst Time" (Horizon Scales video #15, made Nov 12, 2026). No voice (voice on hold).
// Type 3 (a trade-life moment, no lesson), about something we work on: answering calls.
// A painter's phone rings every time his hands are full, and stays silent the moment they are free.
export const BPM = 100;
export const BEAT = 60 / BPM;
export const L = n => n * BEAT;

export const T = {
  s2: 3.6,                              // carrying two buckets
  s3: 6.0, jolt: 7.6,                   // cutting in a line; the ring ruins it
  s4: 9.6, look: 12.4,                  // lunch: hands free, phone silent
  s5: 14.4, up: 15.4, ring5: 16.0,      // back up the ladder
  end: 17.8, shut: 18.3, logo: 17.85, tag1: 18.15, tag2: 18.8, serv: 19.3, url: 19.8,
};
export const DUR = 22.2;

export const RINGS = [[0, 0.9], [1.5, 2.4], [4.5, 5.4], [7.6, 8.5], [16.0, 16.9], [17.2, 17.8]];
export const CUTS = [T.s2, T.s3, T.s4, T.s5];

export const CAPS = [
  { t0: 0.5, t1: 3.6, text: 'Top of the ladder.', hi: 'ladder.' },
  { t0: 3.6, t1: 6.0, text: 'Both hands full.', hi: 'full.' },
  { t0: 6.0, t1: 7.6, text: 'Cutting in a clean line.', hi: 'clean line.' },
  { t0: 7.8, t1: 9.6, text: 'It was clean.', hi: 'was' },
  { t0: 9.6, t1: 11.6, text: 'Lunch. Hands free.', hi: 'Hands free.' },
  { t0: 11.8, t1: 14.4, text: 'Nothing.', hi: 'Nothing.' },
  { t0: 14.4, t1: 16.0, text: 'Back up the ladder.', hi: 'ladder.' },
  { t0: 16.1, t1: 17.9, text: 'There it is.', hi: 'There' },
];
export const HOLDS = [[20.8, DUR]];
export const DROPS = [];
