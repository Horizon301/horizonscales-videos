// timeline.js — "After Five" (Horizon Scales video #23, made Nov 19, 2026). TEXT (voice on hold since Nov 18).
// Topic T2 (calls after hours), format P3 (trade-life moment), trade: HVAC. Your phone rings at 8:47 PM while you're home,
// she texts that her furnace quit, you see it in the morning, call back, and someone already came last night.
export const BPM = 90;
export const BEAT = 60 / BPM;
export const L = n => n * BEAT;          // lengths only (never add offsets here)
export const T = {
  miss: 2.8,                             // missed call + her text
  night: 5.6,                            // the night passes, clock rolls to morning
  call: 8.2,                             // you call her back
  late: 10.8,                            // "someone came last night"
  times: 13.6,                           // two times side by side
  ask: 16.4,                             // "Who answers after 5 PM?"
  end: 19.2, shut: 19.7, logo: 19.55, tag1: 19.75, tag2: 20.2, serv: 20.65, url: 21.05,
};
export const DUR = 22.2;
export const CAPS = [
  { t0: 0.0, t1: 2.8, text: '8:47 PM.\nYou’re home for the night.', hi: '8:47 PM.' },
  { t0: 2.8, t1: 5.6, text: 'Her furnace just quit.', hi: 'furnace just quit.' },
  { t0: 5.6, t1: 8.2, text: 'You see it in the morning.', hi: 'in the morning.' },
  { t0: 8.2, t1: 10.8, text: 'You call her back.', hi: 'call her back.' },
  { t0: 10.8, t1: 13.6, text: 'Too late.\nSomeone came last night.', hi: 'Too late.' },
  { t0: 13.6, t1: 16.4, text: 'Her furnace didn’t wait\nuntil morning.', hi: 'didn’t wait' },
  { t0: 16.4, t1: 19.3, text: 'Who answers after 5 PM?', hi: 'after 5 PM?' },
];
export const RING = [[8.4, 10.7]];                // ringback when you call her back
export const ENDTONE = 12.7;                      // call-ended tone after she says it
export const HITS = [T.miss, T.night, T.call, T.late, T.times, T.ask, T.end];
