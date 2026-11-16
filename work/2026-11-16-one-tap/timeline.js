// timeline.js — "One Tap" (Horizon Scales video #19, made Nov 16, 2026). No voice (voice on hold).
// Type 1 (a game the viewer plays), topic: being found (the photo on a search listing). Trade: hardscapers.
// Three patio builders come up in one search. Three seconds to guess which one she taps. She taps the one with a photo
// of a patio he built. Then one thing to try tonight: search your business, what photo shows up first?
export const BPM = 108;
export const BEAT = 60 / BPM;
export const L = n => n * BEAT;          // lengths only (never add offsets here)

export const T = {
  c3: 0.0, c2: 1.2, c1: 2.4, time: 3.6,  // countdown 3-2-1, then her thumb moves
  tap: 5.0,                              // she taps listing C
  tapped: 5.4,                           // "She tapped C."
  a: 7.2, b: 9.0, c: 10.8,               // zoom on each listing
  see: 12.8,                             // zoom out: "She could see the work."
  tip: 14.8,                             // search bar retypes "your business"
  ask: 16.8,                             // "What photo shows up first?"
  end: 19.2, shut: 19.7, logo: 19.55, tag1: 19.75, tag2: 20.2, serv: 20.7, url: 21.15,
};
export const DUR = 23.0;

export const CAPS = [
  { t0: 0.0, t1: 1.8, text: 'She needs a new patio.', hi: 'new patio.' },
  { t0: 1.8, t1: 3.6, text: 'You get 3 seconds.', hi: '3 seconds.' },
  { t0: 3.6, t1: 5.4, text: 'Her thumb goes to…', hi: 'thumb' },
  { t0: 5.4, t1: 7.2, text: 'She tapped C.', hi: 'C.' },
  { t0: 7.2, t1: 9.0, text: 'A: no photo.', hi: 'no photo.' },
  { t0: 9.0, t1: 10.8, text: 'B: just a logo.', hi: 'just a logo.' },
  { t0: 10.8, t1: 12.8, text: 'C: a patio he built.', hi: 'he built.' },
  { t0: 12.8, t1: 14.8, text: 'She could see the work.', hi: 'the work.' },
  { t0: 14.8, t1: 16.8, text: 'Search your business tonight.', hi: 'tonight.' },
  { t0: 16.8, t1: 19.3, text: 'What photo shows up first?', hi: 'shows up first?' },
];
export const TYPE = [14.85, 15.75];      // the search bar retypes, one key every ~0.07 s
export const HITS = [T.c2, T.c1, T.time, T.tap, T.tapped, T.a, T.b, T.c, T.see, T.tip, T.ask, T.end];
