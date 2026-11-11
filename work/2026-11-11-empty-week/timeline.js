// timeline.js — "The Empty Week" (Horizon Scales video #11, nightly run Nov 11, 2026). Test 1 arm: VOICE (AI voice: Kokoro am_michael).
// A painter's whiteboard schedule with nothing on it. Three job notes try to reach the board and slip away; each service makes one stick.
// Timing sits on a 100 BPM grid (one beat = 0.6 s); every voice line starts on a beat, its length comes from audio/vo_lines.json.
export const BPM = 100;
export const BEAT = 60 / BPM;          // 0.6 s
export const b = n => n * BEAT;        // a TIME in beats → seconds
export const L = n => n * BEAT;        // a LENGTH in beats → seconds

export const VO = [   // [start, duration, text]
  [0.15, 2.301, 'Painters. Why is next week still empty?'],
  [b(5), 1.961, 'Jobs slip out in three places.'],
  [b(9), 1.807, "One. Homeowners can't find you."],
  [b(13), 1.616, 'Ads put you in front of them.'],
  [b(16), 2.221, "Two. Your website doesn't get the call."],
  [b(20), 1.609, "We build one that's made to."],
  [b(23), 2.077, 'Three. You miss the call on a job.'],
  [b(27), 2.289, 'An AI receptionist picks up.'],
  [b(31), 2.002, "Found. Called. Booked. That's the aim."],
  [b(35) + 0.4, 3.443, 'Horizon Scales. You run the business. We help it scale.'],
];

export const INTRO = b(5);                         // "three places": the numbered dots pop in on beats 5, 6, 7
export const DOT = [b(5), b(6), b(7)];
export const LS = [b(9), b(16), b(23)];            // each leak starts
export const FAIL = LS.map(t => t + L(2));         // the note slips away (on a beat)
export const FS = [b(13), b(20), b(27)];           // each fix starts: the magnet slaps on
export const LAND = FS.map(t => t + L(1));         // the note sticks (next beat)
export const PAY = b(31);                          // checks on beats 31, 32, 33
export const CHECK = [b(31), b(32), b(33)];
export const AIM = b(33.5);
export const END = b(35);                          // the eraser wipes the board into the plum end card
export const T = { logo: END + 0.2, tag1: b(36), tag2: b(37), serv: b(38), url: b(39) };
export const DUR = b(43);                          // 25.8 s

export const ROWS = [0, 2, 3];                     // MON, WED, THU get the three jobs; TUE and FRI stay open
export const JOBS = [['Exterior', 'repaint'], ['Deck stain'], ['Cabinets']];
export const PILLS = ['ADS', 'WEBSITE', 'AI RECEPTIONIST'];

export const CAPS = [  // running captions on a strip of tape, just below the middle
  { t0: INTRO, t1: LS[0], kind: 'intro', lines: ['Jobs slip out', 'in three places.'] },
  { t0: LS[0], t1: FS[0], kind: 'leak', n: 1, lines: ['Homeowners', 'can’t find you.'] },
  { t0: FS[0], t1: LS[1], kind: 'fix', lines: ['Ads put you', 'in front of them.'] },
  { t0: LS[1], t1: FS[1], kind: 'leak', n: 2, lines: ['Your website', 'doesn’t get the call.'] },
  { t0: FS[1], t1: LS[2], kind: 'fix', lines: ['We build one', 'that’s made to.'] },
  { t0: LS[2], t1: FS[2], kind: 'leak', n: 3, lines: ['You miss the call', 'on a job.'] },
  { t0: FS[2], t1: PAY, kind: 'fix', lines: ['An AI receptionist', 'picks up.'] },
  { t0: PAY, t1: END, kind: 'pay', lines: ['Found. Called. Booked.', 'That’s the aim.'] },
];

export const PUNCH = [...DOT, ...FAIL, ...FS, ...LAND, ...CHECK];   // small zoom kicks
export const HOLDS = [[b(40), DUR]];
export const DROPS = [];
