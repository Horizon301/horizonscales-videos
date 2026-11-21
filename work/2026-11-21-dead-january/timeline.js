// timeline.js — "Dead January" (Horizon Scales video #25, made Nov 21, 2026). TEXT (voice on hold since Nov 18).
// Topic T10 (busy season vs. empty season), format P3 (trade-life moment, no lesson), trade: landscapers.
// YOUR PHONE: June's calendar fills up and the phone won't stop; you decline a call; the months flip; January is empty
// and the only call is spam.
export const BPM = 112;
export const BEAT = 60 / BPM;
export const L = n => n * BEAT;          // lengths only (never add offsets here)
export const T = {
  stack: 3.0,                            // the notifications pile up
  call: 5.8,                             // an incoming call while you're on the mower
  flip: 8.6,                             // the months flip, July to December
  jan: 11.6,                             // January, nothing booked
  recents: 14.4,                         // recents empty, then the one call: spam
  spam: 15.4,
  both: 17.2,                            // June and January side by side
  end: 20.4, shut: 20.9, logo: 20.75, tag1: 20.95, tag2: 21.4, serv: 21.85, url: 22.25,
};
export const DUR = 23.4;
export const CAPS = [
  { t0: 0.0, t1: 3.0, text: 'June. Every day\nis booked.', hi: 'Every day' },
  { t0: 3.0, t1: 5.8, text: 'Your phone won’t stop.', hi: 'won’t stop.' },
  { t0: 5.8, t1: 8.6, text: 'You can’t get\nto them all.', hi: 'them all.' },
  { t0: 8.6, t1: 11.6, text: 'Then the season ends.', hi: 'season ends.' },
  { t0: 11.6, t1: 14.4, text: 'January.\nNothing booked.', hi: 'Nothing booked.' },
  { t0: 14.4, t1: 17.2, text: 'The only call\nis spam.', hi: 'spam.' },
  { t0: 17.2, t1: 20.5, text: 'Who calls you\nin January?', hi: 'in January?' },
];
export const PINGS = [0.9, 1.9, 3.2, 3.75, 4.3, 4.85];   // notification banners
export const BUZZ = [[5.9, 7.0], [15.45, 16.9]];         // incoming calls (phone vibrating)
export const TAPS = [7.05, 16.95];                        // thumb taps: Decline, Decline
export const HITS = [T.stack, T.call, T.flip, T.jan, T.recents, T.both, T.end];
