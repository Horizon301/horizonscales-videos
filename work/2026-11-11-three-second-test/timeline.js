// timeline.js — "The 3-Second Test" (Horizon Scales video #14, made Nov 11, 2026 evening). No voice.
// Type 1 (a test the viewer plays), about something we do: websites. You see two painter websites for three seconds each.
// Could you tell what they do and how to call? Nothing is pitched; the services are only on the end card.
export const BPM = 120;
export const BEAT = 60 / BPM;
export const b = n => n * BEAT;
export const L = n => n * BEAT;

export const T = {
  a0: 2.6, a1: 5.6,                    // site A is on screen
  b0: 8.4, b1: 11.4,                   // site B is on screen
  cmp: 11.4,                           // both phones side by side
  tip: 14.4,                           // the answer
  end: 17.4, shut: 17.9, logo: 17.45, tag1: 18.4, tag2: 18.9, serv: 19.4, url: 19.9,
};
export const DUR = 22;

export const CAPS = [
  { t0: 0.5, t1: 2.6, lines: ['Quick test.', 'You get three seconds.'] },
  { t0: 2.6, t1: 5.6, lines: ['Site A'], big: true },
  { t0: 5.6, t1: 8.4, lines: ['What do they do?', 'What’s the number?'] },
  { t0: 8.4, t1: 11.4, lines: ['Site B'], big: true },
  { t0: 11.4, t1: 14.4, lines: ['Same three seconds.', 'Which one would you call?'] },
  { t0: 14.4, t1: 17.4, lines: ['Say what you do.', 'Put the number on top.'] },
];
export const PUNCH = [2.6, 5.6, 8.4, 11.4, 14.4];
export const HOLDS = [[20.4, DUR]];
export const DROPS = [];
