// timeline.js — "The Elevator" (Horizon Scales video #12, made Nov 11, 2026 after Kai pulled #11). Test 1 arm: VOICE (AI voice: Kokoro am_michael).
// One idea, one story: search results are a building. The phones ring on the top floor; your business is 46 floors down. Ads are the ride up.
// Kai, Nov 11: no more "three leaks, three fixes" lists; one idea per video, less explaining, more story.
export const BPM = 120;
export const BEAT = 60 / BPM;          // 0.5 s
export const b = n => n * BEAT;        // a TIME in beats → seconds
export const L = n => n * BEAT;        // a LENGTH in beats → seconds

export const VO = [   // [start, duration, text]
  [0.15, 2.889, 'Painters. Where do you show up when someone searches?'],
  [3.5, 2.549, 'Top floor. This is where the phones ring.'],
  [6.5, 1.388, "You're a bit further down."],
  [8.8, 0.859, 'Keep going.'],
  [10.25, 0.95, 'Still going.'],
  [12.0, 0.885, 'There you are.'],
  [13.5, 2.051, 'Ads can put you on the top floor.'],
  [17.9, 3.443, 'Horizon Scales. You run the business. We help it scale.'],
];

export const FLOORS = 47;              // page 1 at the top, page 47 at the bottom
export const T = {
  top: 3.5, ding: 6.5, down0: 7.0, down1: 11.5,        // the ride down
  found: 12.0,
  ads: 13.5, in0: 13.7, in1: 14.3, up0: 14.5, up1: 16.0, out1: 16.5, ring: 16.5,   // the ride back up
  doors: 17.5, shut: 18.0, logo: 17.8, tag1: 18.5, tag2: 19.0, serv: 19.5, url: 20.0,
};
export const DUR = 22.5;

export const CAPS = [  // running captions on a dark panel, just below the middle
  { t0: 3.5, t1: 6.5, lines: ['Top floor. This is where', 'the phones ring.'] },
  { t0: 6.5, t1: 8.8, lines: ['You’re a bit', 'further down.'] },
  { t0: 8.8, t1: 10.25, lines: ['Keep going.'] },
  { t0: 10.25, t1: 12.0, lines: ['Still going.'] },
  { t0: 12.0, t1: 13.5, lines: ['There you are.'] },
  { t0: 13.5, t1: 17.5, lines: ['Ads can put you', 'on the top floor.'] },
];
export const PUNCH = [3.5, 6.5, 11.5, 13.5, 16.0, 16.5];
export const HOLDS = [[20.5, DUR]];
export const DROPS = [];
