// timeline.js — "The Dead Number" (Horizon Scales video #17, made Nov 14, 2026). No voice (voice on hold).
// Type 2 (one free tip they can do tonight), topic: websites. A homeowner taps a landscaper's phone number on his
// website and nothing happens; she goes back to the list and taps the next guy's Call button. Then: try it on your own site.
export const BPM = 120;
export const BEAT = 60 / BPM;            // 0.5 s
export const L = n => n * BEAT;          // lengths only (never add offsets here)

export const T = {
  tap1: 2.0, tap2: 3.25, tap3: 3.75,     // she taps the number, then twice more
  nothing: 4.0,                          // "Nothing happens." (the band drops out)
  press: 5.5, bubble: 5.95,              // long press: half the number gets selected, a Copy bubble
  back: 7.5, backDone: 7.9,              // she swipes back to the search list
  call: 9.5,                             // taps the next landscaper's Call button
  dial: 9.75, dialDone: 10.1,            // the calling screen slides up; ringback 10.0 to 11.5
  pick: 11.6,                            // "He picks up." (Connected 0:01)
  tip: 13.5,                             // whip back to your site: "Try this tonight:"
  tap4: 15.25, sheet: 15.45,             // tap your own number: the Call sheet you want to see
  ask: 17.25,                            // "Does it ring?"
  end: 19.5, shut: 20.0, logo: 19.85, tag1: 20.05, tag2: 20.5, serv: 21.0, url: 21.45,
};
export const DUR = 23.5;

export const TAPS = [T.tap1, T.tap2, T.tap3, T.press, T.call, T.tap4];

export const CAPS = [
  { t0: 0.0, t1: 2.0, text: 'A homeowner finds your site.', hi: 'your site.' },
  { t0: 2.0, t1: 4.0, text: 'She taps your number.', hi: 'taps' },
  { t0: 4.0, t1: 5.5, text: 'Nothing happens.', hi: 'Nothing' },
  { t0: 5.5, t1: 7.5, text: 'Now she has to copy it.', hi: 'copy it.' },
  { t0: 7.5, t1: 9.5, text: 'Or go back to the list.', hi: 'go back' },
  { t0: 9.5, t1: 11.6, text: 'Next guy has a Call button.', hi: 'Call button.' },
  { t0: 11.6, t1: 13.5, text: 'He picks up.', hi: 'picks up.' },
  { t0: 13.5, t1: 15.25, text: 'Try this tonight:', hi: 'tonight:' },
  { t0: 15.25, t1: 17.25, text: 'Tap your own number.', hi: 'own number.' },
  { t0: 17.25, t1: 19.6, text: 'Does it ring?', hi: 'ring?' },
];
export const NUMBER = '(208) 555-0142';   // 555-01xx is the range set aside for fiction
export const HOLDS = [[22.3, DUR]];
export const DROPS = [];
