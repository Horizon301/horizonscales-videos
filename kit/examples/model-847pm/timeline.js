// timeline.js — "8:47 PM" v2 (model video for the Nov 24 rules: big picture, short hook, text only, one steady groove).
// Format P1 (homeowner's story), topic T2 (calls after hours). Trade: plumbers.
export const T = {
  s1: 0.0,
  s2: 2.6, closed: 3.6,
  s3: 4.8,
  s4: 6.6, pick: 7.7,
  s5: 9.0,
  s6: 11.0, open: 11.6,
  s7: 13.2,
  s8: 15.2,
  end: 17.4, shut: 17.95, logo: 17.6, tag1: 17.95, tag2: 18.35, serv: 18.8, url: 19.2,
};
export const DUR = 20.6;
export const VO = [];
export const CAPS = [
  { t0: T.s1, t1: T.s2, text: 'Her water heater quits.', hi: 'quits.' },
  { t0: T.s2, t1: T.s3, text: 'She calls a plumber. Closed.', hi: 'Closed.' },
  { t0: T.s3, t1: T.s4, text: "She won't wait till morning.", hi: "won't wait" },
  { t0: T.s4, t1: T.s5, text: 'The next plumber answers.', hi: 'answers.' },
  { t0: T.s5, t1: T.s6, text: "By 9, she's booked.", hi: 'booked.' },
  { t0: T.s6, t1: T.s7, text: 'He opens at 8 AM.', hi: '8 AM.' },
  { t0: T.s7, t1: T.s8, text: "The job's already gone.", hi: 'already gone.' },
  { t0: T.s8, t1: T.end + 0.1, text: 'Who answers at night?', hi: 'at night?' },
];
export const RINGS = [[2.75, 3.5], [6.7, 7.15], [7.25, 7.65]];
export const BUZZ = [[15.3, 16.0], [16.3, 17.0]];
export const DRIPS = [0.7, 1.7, 5.2, 6.2];
export const HITS = [T.s2, T.closed, T.s3, T.s4, T.pick, T.s5, T.s6, T.s7, T.s8, T.end];
export const HOLDS = [[19.6, DUR]];
export const DROPS = [];
