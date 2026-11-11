// timeline.js — "The Drive-By Test" (Horizon Scales video #13, made Nov 11, 2026 evening). No voice.
// Type 1 (a test the viewer plays): you drive past two yard signs at the same speed. Which phone number did you catch?
// Nothing about Horizon Scales' services until the end card (Kai, Nov 11: stop explaining the same thing with a new layout).
export const BPM = 120;
export const BEAT = 60 / BPM;          // 0.5 s
export const b = n => n * BEAT;
export const L = n => n * BEAT;

export const V = 900;                  // px per second the roadside moves past the window
export const T = {
  passA: 3.7, passB: 8.5,              // the moment each sign is in the middle of the window
  slow0: 9.4, slow1: 10.2,             // the car slows down
  cmp: 10.0,                           // both signs side by side
  tip: 13.0,                           // the answer
  end: 16.0, shut: 16.5, logo: 16.3, tag1: 17.0, tag2: 17.5, serv: 18.0, url: 18.5,
};
export const DUR = 20.5;

export const CAPS = [
  { t0: 0.5, t1: 2.7, lines: ['Quick test.', 'You’re driving past.'] },
  { t0: 2.7, t1: 4.7, lines: ['Sign A'], big: true },
  { t0: 4.7, t1: 7.5, lines: ['Did you catch', 'the phone number?'] },
  { t0: 7.5, t1: 10.0, lines: ['Sign B'], big: true },
  { t0: 10.0, t1: 13.0, lines: ['Same street. Same speed.', 'Which one did you read?'] },
  { t0: 13.0, t1: 16.0, lines: ['One job. One number.', 'Big enough for the road.'] },
];
export const PUNCH = [2.7, 4.7, 7.5, 10.0, 13.0];
export const HOLDS = [[19, DUR]];
export const DROPS = [];
