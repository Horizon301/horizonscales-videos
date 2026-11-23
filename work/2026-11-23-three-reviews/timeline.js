// timeline.js — "Three Reviews" (Horizon Scales video #27, made Nov 23, 2026). TEXT (voice on hold since Nov 18).
// Topic T6 (showing up, but someone else gets picked), format P2 (plain game), trade: tree service.
// HER PHONE: a branch fell on her fence; she searches; 3 tree services come up; the viewer gets 3 seconds to pick;
// she skips "No reviews yet" and "Last review: 2021" and calls the one with reviews; the first one was you.
export const BPM = 104;
export const BEAT = 60 / BPM;
export const L = n => n * BEAT;          // lengths only (never add offsets here)
export const T = {
  list: 0.9,                             // the 3 results slide in
  pick: 3.0,                             // "Which one would you call?" + countdown
  count: [3.6, 4.6, 5.6],                // 3, 2, 1
  hover: 6.6,                            // her thumb hovers A, then B
  hoverB: 7.9,
  tapC: 9.7,                             // she taps C and calls
  call: 10.1,
  conn: 11.5,
  you: 12.2,                             // back to the list: A becomes "Your business"
  same: 15.0,                            // push in on your listing
  ask: 17.6,                             // "Search your business. What would she see?"
  end: 20.4, shut: 20.9, logo: 20.75, tag1: 20.95, tag2: 21.4, serv: 21.85, url: 22.25,
};
export const DUR = 23.4;
export const CAPS = [
  { t0: 0.0, t1: 3.0, text: 'A branch fell\non her fence.', hi: 'on her fence.' },
  { t0: 3.0, t1: 6.6, text: 'Which one\nwould you call?', hi: 'would you call?' },
  { t0: 6.6, t1: 9.4, text: 'No reviews.\nOld reviews.', hi: 'Old reviews.' },
  { t0: 9.4, t1: 12.2, text: 'She calls the one\nwith reviews.', hi: 'with reviews.' },
  { t0: 12.2, t1: 15.0, text: 'The first one\nwas you.', hi: 'was you.' },
  { t0: 15.0, t1: 17.6, text: 'Good work.\nNo reviews.', hi: 'No reviews.' },
  { t0: 17.6, t1: 20.5, text: 'Search your business.\nWhat would she see?', hi: 'What would she see?' },
];
export const TAPS = [9.7];                         // thumb tap on Tree Service C
export const RING = [10.5, 11.0];                  // ringback while she calls (2 short rings before Connected)
export const TICKS = [3.6, 4.6, 5.6];              // countdown wood-block ticks (from the band)
export const HITS = [T.list, T.pick, T.tapC, T.you, T.same, T.ask, T.end];
