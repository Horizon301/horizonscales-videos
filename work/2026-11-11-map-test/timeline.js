// timeline.js — "Not You" (test video, Nov 11, 2026 evening). Made with Kai's /map-route animation skill + the new real-instrument sound.
// Type 5 (the homeowner's point of view), topic: being found. A homeowner searches "painter near me"; her route draws across
// the city; the pin lands on another painter. No voice, no pitch; services only on the end card.
export const FPS_CLIP = 30, CLIP_FRAMES = 150;   // the 5 s map clip rendered by the map-route skill (frames/f_001.jpg ...)
export const T = {
  go: 2.2,            // the route starts drawing; the clip then plays at its own speed (5 s)
  pin: 5.1,           // the pin lands
  card: 5.7,          // the destination card is up: "Another painter"
  hold: 7.2,          // last frame, slow push-in from here
  end: 11.6, shut: 12.1, logo: 11.65, tag1: 12.6, tag2: 13.1, serv: 13.6, url: 14.1,
};
export const DUR = 15.6;
export const clipTime = t => (t < T.go ? 0 : Math.min(4.966, t - T.go));

export const CAPS = [
  { t0: 0.4, t1: 2.4, lines: ['She just searched', '“painter near me.”'] },
  { t0: 2.4, t1: 5.7, lines: ['Four minutes away.', 'Ready to hire.'] },
  { t0: 5.7, t1: 8.4, lines: ['Not you.'], big: true },
  { t0: 8.4, t1: 11.6, lines: ['She called the first', 'painter she found.'] },
];
export const PUNCH = [2.4, 5.1, 5.7, 8.4];
export const HOLDS = [[14.6, DUR]];
export const DROPS = [];
