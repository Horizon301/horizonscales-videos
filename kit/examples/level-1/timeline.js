// timeline.js — "Level 1" (Horizon Scales video #10). A retro 8-bit game: customers try to reach "your business" and fall into
// three pits (the three leaks). A bridge drops in to fix each one. The fourth customer makes it: JOB BOOKED!
// New look (pixel sunset world, like the logo) and new sound (chiptune). No voice.
export const BPM = 120;
export const BEAT = 60 / BPM;          // 0.5 s
export const PRE = 6;                  // a 3 s hook plays before beat 0: GAME OVER → TRY AGAIN?
export const b = n => (n + PRE) * BEAT; // a TIME in beats → seconds, counted from the end of the hook
export const L = n => n * BEAT;        // a LENGTH in beats → seconds

// the world, in "game pixels" (1 game pixel = 8 screen pixels; the screen is 135 × 240 game pixels)
export const GY = 150;                 // top of the ground
export const PITS = [{ x: 92, w: 22 }, { x: 196, w: 22 }, { x: 300, w: 22 }];
export const HOUSE = { x: 372, door: 400 };
export const STAGES = [
  { leak: ['Leak 1:', 'they can’t find you.'], fix: ['Fix: Google &', 'Meta ads.'], sign: 'ADS' },
  { leak: ['Leak 2: your website', 'doesn’t get the call.'], fix: ['Fix: a website built', 'to get the call.'], sign: 'WEBSITE' },
  { leak: ['Leak 3: you miss', 'the call on a job.'], fix: ['Fix: an AI receptionist', 'that picks up.'], sign: 'AI RECEPTIONIST' },
];

// each stage: a customer runs in and falls (FALL), the leak is named, a bridge drops in (BRIDGE), the next customer runs
export const FALL = [b(4), b(14), b(24)];
export const BRIDGE = FALL.map(t => t + L(4.5));                      // the leak caption gets ~2 s before the fix lands
export const RUN = [[b(0), b(4)], [b(10), b(14)], [b(20), b(24)], [b(30), b(35)]];   // [start, end] of each customer's run
export const T = { booked: b(35), iris: b(38.5), logo: b(40), tag1: b(41), tag2: b(42), serv: b(43), url: b(44) };
export const DUR = b(48);              // 27 s
export const HOOK = { again: b(-2.5), start: b(-0.6) };   // "TRY AGAIN?" appears, then the level restarts

// where the camera sits for each stage, and where each customer's run starts and ends (game pixels)
export const CAMS = [...PITS.map(p => p.x + p.w / 2 - 62), HOUSE.door - 54];   // the shop stops left of the button strip
export const runX = k => [k === 0 ? 58 : CAMS[k - 1] - 10, k < 3 ? PITS[k].x + 9 : HOUSE.door - 6];
// the moment customer k crosses bridge j (runs 1–3 ease in and out, so this inverts that curve)
export const crossTime = (k, j) => { const [xs, xe] = runX(k), f = (PITS[j].x + PITS[j].w / 2 - xs) / (xe - xs); return RUN[k][0] + Math.acos(1 - 2 * f) / Math.PI * (RUN[k][1] - RUN[k][0]); };

export const HOLDS = [[b(45.5), DUR]];
export const DROPS = [];
