// timeline.js — "Spot It" (Horizon Scales video #20, made Nov 17, 2026). No voice (voice on hold).
// Type 1 (a game the viewer plays: spot the difference), topic: websites. Trade: painters.
// Two copies of the same painter's website, side by side. One tiny difference. A crayon magnifier hunts; the answer is
// the year at the very bottom: one footer says 2019. She wondered if they were still open and called the other one.
// Then one thing to try tonight: scroll to the bottom of your site. What year does it say?
export const BPM = 132;
export const BEAT = 60 / BPM;
export const L = n => n * BEAT;          // lengths only (never add offsets here)

export const T = {
  hunt: 2.0,                             // the magnifier comes in and starts hunting
  same: 3.8,                             // "Same photo. Same number."
  give: 5.6,                             // "Give up?"
  reveal: 7.2,                           // lens goes to the footer, splits into two lenses, crayon circles
  year: 9.2,                             // "This one still says 2019."
  saw: 11.2,                             // thought bubble: "Are they still open?"
  call: 13.2,                            // she calls the other one: green check, call button rings
  tip: 15.2,                             // one phone: "Your site", scrolls to the bottom
  ask: 17.4,                             // "What year does it say?"
  end: 19.8, shut: 20.3, logo: 20.15, tag1: 20.35, tag2: 20.8, serv: 21.3, url: 21.75,
};
export const DUR = 23.5;

export const CAPS = [
  { t0: 0.0, t1: 2.0, text: 'Same painter. Same site?', hi: 'Same site?' },
  { t0: 2.0, t1: 3.8, text: 'Look closely.', hi: 'closely.' },
  { t0: 3.8, t1: 5.6, text: 'Same photo. Same number.', hi: 'Same number.' },
  { t0: 5.6, t1: 7.2, text: 'Give up?', hi: 'up?' },
  { t0: 7.2, t1: 9.2, text: 'Way down at the bottom.', hi: 'the bottom.' },
  { t0: 9.2, t1: 11.2, text: 'This one still says 2019.', hi: '2019.' },
  { t0: 11.2, t1: 13.2, text: 'She saw 2019.', hi: '2019.' },
  { t0: 13.2, t1: 15.2, text: 'She called the other one.', hi: 'the other one.' },
  { t0: 15.2, t1: 17.4, text: 'Scroll down your site tonight.', hi: 'tonight.' },
  { t0: 17.4, t1: 19.9, text: 'What year does it say?', hi: 'What year' },
];
export const SCROLL = [15.5, 16.9];      // the "your site" phone scrolls to its footer
export const RING = [13.45, 14.95];      // ringback under "She called the other one."
export const SCRIBBLE = [[7.5, 0.5], [7.75, 0.5], [13.25, 0.45], [17.5, 0.4]]; // crayon on paper: [start, length]
export const HITS = [T.hunt, T.same, T.give, T.reveal, T.year, T.saw, T.call, T.tip, T.ask, T.end];
