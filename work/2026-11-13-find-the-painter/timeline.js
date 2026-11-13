// timeline.js — "Find the Painter" (Horizon Scales video #16, made Nov 13, 2026). No voice (voice on hold).
// Type 1 (a game the viewer plays), about something we work on: being found.
// A seek-and-find town: sixteen shops, one of them a painter with a tiny sign behind a tree. Five seconds to find him.
export const BPM = 96;
export const BEAT = 60 / BPM;            // 0.625 s
export const L = n => n * BEAT;          // lengths only (never add offsets here)

export const T = {
  count: 2.5,                            // the countdown starts: 5 at 2.5, 4 at 3.5 ... 1 at 6.5
  up: 7.5,                               // time's up: the band stops
  reveal: 9.0, zoomed: 9.8,              // the ring draws, the camera pushes in on the painter's shop
  tiny: 10.875,                          // "Tiny sign. Behind a tree."
  walk: 12.75,                           // a homeowner walks past, eyes on her phone
  out: 15.25, wide: 15.95,               // camera pulls back; the search bar drops in
  type0: 15.8, type1: 17.0,              // "painter near me" is typed
  ask: 17.125,                           // "Can you find yourself?"
  end: 19.625, shut: 20.1, logo: 19.95, tag1: 20.12, tag2: 20.55, serv: 21.05, url: 21.5,
};
export const DUR = 23.5;

export const TICKS = [2.5, 3.5, 4.5, 5.5, 6.5];      // 5, 4, 3, 2, 1

export const CAPS = [
  { t0: 0.12, t1: 2.5, text: 'You get 5 seconds.', hi: '5 seconds.' },
  { t0: 2.5, t1: 7.5, text: 'Find the painter.', hi: 'painter.' },
  { t0: 7.5, t1: 9.0, text: "Time's up.", hi: 'up.' },
  { t0: 9.1, t1: 10.875, text: 'There he is.', hi: 'There' },
  { t0: 10.875, t1: 12.75, text: 'Tiny sign. Behind a tree.', hi: 'Behind a tree.' },
  { t0: 12.75, t1: 15.25, text: 'A homeowner walks past.', hi: 'walks past.' },
  { t0: 15.25, t1: 17.125, text: 'Try this tonight:', hi: 'tonight:', y: 1296 },
  { t0: 17.125, t1: 19.7, text: 'Can you find yourself?', hi: 'yourself?', y: 1296 },
];
export const SEARCH = 'painter near me';
export const HOLDS = [[22.3, DUR]];
export const DROPS = [];
