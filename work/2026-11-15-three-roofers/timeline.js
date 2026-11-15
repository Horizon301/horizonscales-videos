// timeline.js — "Three Roofers" (Horizon Scales video #18, made Nov 15, 2026). No voice (voice on hold).
// Type 5 (homeowner's point of view), topic: answering calls. Trade: roofers.
// A homeowner's ceiling drips at night. She calls three roofers: the first one's mailbox is full, the second just
// rings, the third picks up and gets the job. Then: three roofers, one job. Which one are you?
export const BPM = 100;
export const BEAT = 60 / BPM;            // 0.6 s
export const L = n => n * BEAT;          // lengths only (never add offsets here)

export const T = {
  call1: 2.0, full: 4.6,                 // roofer 1: rings, then "The mailbox is full."
  call2: 6.4, rings: 8.2,                // roofer 2: rings and rings
  call3: 10.6,                           // roofer 3
  pick: 12.0,                            // "Hello, roofing!"
  day: 14.0,                             // next morning: sun, a ladder at the window
  three: 15.8,                           // three cards side by side
  ask: 17.8,                             // "Which one are you?"
  end: 20.0, shut: 20.5, logo: 20.35, tag1: 20.55, tag2: 21.0, serv: 21.5, url: 21.95,
};
export const DUR = 24.0;

// ringback windows [start, end] (what she hears in the phone), shown as "ring…" and played by ring.py
export const RINGS = [[2.4, 3.3], [3.6, 4.5], [6.8, 7.7], [8.0, 8.9], [9.2, 10.1], [11.0, 11.8]];
// a drip lands in the bucket every two beats while it's night
export const DRIPS = []; for (let t = 0.6; t < T.day - 0.3; t += 1.2) DRIPS.push(Math.round(t * 100) / 100);

export const CAPS = [
  { t0: 0.0, t1: 2.0, text: 'Her ceiling is leaking.', hi: 'leaking.' },
  { t0: 2.0, t1: 4.6, text: 'She calls the first roofer.', hi: 'first roofer.' },
  { t0: 4.6, t1: 6.4, text: 'His mailbox is full.', hi: 'full.' },
  { t0: 6.4, t1: 8.2, text: 'She tries the next one.', hi: 'next one.' },
  { t0: 8.2, t1: 10.6, text: 'It just rings.', hi: 'rings.' },
  { t0: 10.6, t1: 12.0, text: 'Roofer number three.', hi: 'three.' },
  { t0: 12.0, t1: 14.0, text: 'He picks up.', hi: 'picks up.' },
  { t0: 14.0, t1: 15.8, text: 'He gets the job.', hi: 'the job.' },
  { t0: 15.8, t1: 17.8, text: 'Three roofers. One job.', hi: 'One job.' },
  { t0: 17.8, t1: 20.1, text: 'Which one are you?', hi: 'are you?' },
];
export const HITS = [T.call1, T.full, T.call2, T.rings, T.call3, T.pick, T.day, T.three, T.ask, T.end];
export const HOLDS = [[22.6, DUR]];
export const DROPS = [];
