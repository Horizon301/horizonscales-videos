// timeline.js — "Full Hands" (Horizon Scales video #28, made Nov 24, 2026). TEXT (voice on hold since Nov 18).
// Topic T1 (missed call while on a job), format P1 (homeowner's story), trade: flooring / tile.
// HER PHONE calls "Your business" while an inset shows YOU, RIGHT NOW: laying tile, phone buzzing face-down on the floor.
// No answer; she calls the next flooring company; he picks up and books her. You call back: she already booked someone.
export const BPM = 100;
export const BEAT = 60 / BPM;
export const L = n => n * BEAT;          // lengths only (never add offsets here)
export const T = {
  noAns: 5.8,                            // "No answer"
  list: 6.6,                             // her list: your business (no answer) / next flooring co.
  tap: 8.1,                              // she taps Call on the next one
  call2: 8.4,
  conn: 10.0,                            // "Hello, flooring!"
  booked: 11.2,                          // Booked · Thursday, 9 AM
  you: 13.8,                             // the phone becomes YOUR PHONE; you call back
  text: 15.2,                            // her text arrives
  ask: 17.0,                             // push in, "Who picks up when your hands are full?"
  end: 20.4, shut: 20.9, logo: 20.75, tag1: 20.95, tag2: 21.4, serv: 21.85, url: 22.25,
};
export const DUR = 23.4;
export const CAPS = [
  { t0: 0.0, t1: 3.0, text: 'She calls you\nabout her floor.', hi: 'about her floor.' },
  { t0: 3.0, t1: 5.8, text: 'Your hands are\nfull of mortar.', hi: 'full of mortar.' },
  { t0: 5.8, t1: 8.4, text: 'No answer.\nShe hangs up.', hi: 'She hangs up.' },
  { t0: 8.4, t1: 11.2, text: 'She calls\nthe next one.', hi: 'the next one.' },
  { t0: 11.2, t1: 13.8, text: 'He picked up.\nHe got the job.', hi: 'He got the job.' },
  { t0: 13.8, t1: 17.0, text: 'You call back.\nToo late.', hi: 'Too late.' },
  { t0: 17.0, t1: 20.5, text: 'Who picks up when\nyour hands are full?', hi: 'your hands are full?' },
];
export const TAPS = [8.1];                         // thumb tap on Call (next flooring co.)
export const RING = [0.5, 2.5, 4.5, 8.8, 14.2];    // ringback: her call to you (3), her call to the next one, your call back
export const BUZZ = [0.5, 2.5, 4.5];               // your phone buzzing face-down on the floor (inset), with her rings
export const HITS = [T.noAns, T.list, T.call2, T.conn, T.booked, T.you, T.text, T.ask, T.end];
