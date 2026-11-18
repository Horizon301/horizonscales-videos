// timeline.js — "No Beep" (Horizon Scales video #21, made Nov 18, 2026). No voice (voice on hold).
// Type 4 (a hot take), topic: answering calls. Trade: plumbers.
// Her sink is leaking; she calls a plumber; no answer, and the voicemail greeting plays like a karaoke song, line by line,
// with a bouncing ball. She hangs up before the beep and is already calling the next plumber. Karaoke score: 0.
// Hot take: nobody waits for the beep. Then: call your own number tonight. Would YOU wait for the beep?
export const BPM = 80;
export const BEAT = 60 / BPM;
export const L = n => n * BEAT;          // lengths only (never add offsets here)

export const T = {
  call: 2.2,                             // she calls a plumber (ringing)
  song: 4.0,                             // no answer: the karaoke title card "Now playing: your voicemail greeting"
  lyr: 5.6,                              // lyrics start (5 lines, 1.6 s each, the last one cut off)
  hang: 13.2,                            // she hangs up before the beep
  next: 15.0,                            // already calling the next plumber
  score: 16.8,                           // karaoke score: 0. "Nobody waits for the beep."
  tip: 18.8,                             // "Call your own number tonight." (calling: your business)
  ask: 20.8,                             // "Would YOU wait for the beep?"
  end: 22.4, shut: 22.9, logo: 22.75, tag1: 22.95, tag2: 23.4, serv: 23.85, url: 24.25,
};
export const DUR = 25.0;

export const LYRICS = [
  { t0: 5.6, t1: 7.2, text: 'Hi! You’ve reached|the office of…' },
  { t0: 7.2, t1: 8.8, text: 'We’re either on|another line' },
  { t0: 8.8, t1: 10.4, text: 'or away from the|phone right now.' },
  { t0: 10.4, t1: 12.0, text: 'Please leave your name|and your number,' },
  { t0: 12.0, t1: 13.2, text: 'a brief message,|and after the…', cut: 0.8 },
];

export const CAPS = [
  { t0: 0.0, t1: 2.2, text: 'Her sink is leaking.', hi: 'leaking.' },
  { t0: 2.2, t1: 4.0, text: 'She calls a plumber.', hi: 'a plumber.' },
  { t0: 4.0, t1: 5.6, text: 'No answer. Then this:', hi: 'Then this:' },
  { t0: 5.6, t1: 7.6, text: 'It’s a long one.', hi: 'long one.' },
  { t0: 7.6, t1: 9.6, text: 'Her sink is still leaking.', hi: 'still leaking.' },
  { t0: 9.6, t1: 11.4, text: 'Still going.', hi: 'going.' },
  { t0: 11.4, t1: 13.2, text: 'Almost to the beep…', hi: 'the beep…' },
  { t0: 13.2, t1: 15.0, text: 'She hung up before the beep.', hi: 'hung up' },
  { t0: 15.0, t1: 16.8, text: 'Already calling the next one.', hi: 'the next one.' },
  { t0: 16.8, t1: 18.8, text: 'Nobody waits for the beep.', hi: 'Nobody' },
  { t0: 18.8, t1: 20.8, text: 'Call your own number tonight.', hi: 'tonight.' },
  { t0: 20.8, t1: 22.5, text: 'Would YOU wait for the beep?', hi: 'Would YOU' },
];
export const RING = [[2.4, 3.95], [15.2, 16.6], [19.0, 20.6]]; // ringback under each call
export const DRIPS = [0.3, 1.25, 2.2, 3.1, 4.4, 5.9, 7.4, 8.9, 10.4, 11.9, 13.5, 15.6];
export const ENDTONE = 13.25;            // the call-ended tone when she hangs up
export const HITS = [T.call, T.song, T.lyr, 7.2, 8.8, 10.4, 12.0, T.hang, T.next, T.score, T.tip, T.ask, T.end];
