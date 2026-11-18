// timeline.js — "The Next Plumber" (Horizon Scales video #22, made Nov 18, 2026, replaces #21). No voice (voice on hold).
// Kai, Nov 18: the videos "are starting to make no sense" (gimmick hides the point, story hard to follow, topics too small).
// So: one phone, one plain story, no wrapper. She calls you, gets voicemail, hangs up, calls the next plumber, he picks up,
// he gets the job. All you see is one missed call. Type 5 (homeowner's point of view), topic: answering calls.
export const BPM = 96;
export const BEAT = 60 / BPM;
export const L = n => n * BEAT;          // lengths only (never add offsets here)
export const T = {
  vm: 2.6,                               // no answer: voicemail
  hang: 5.2,                             // she hangs up, no message
  next: 7.6,                             // she calls the next plumber
  pick: 10.4,                            // he picks up
  job: 13.0,                             // he gets the job
  you: 15.4,                             // your phone: one missed call
  ask: 18.4,                             // "Who picks up when you can't?"
  end: 21.0, shut: 21.5, logo: 21.35, tag1: 21.55, tag2: 22.0, serv: 22.45, url: 22.85,
};
export const DUR = 24.0;
export const CAPS = [
  { t0: 0.0, t1: 2.6, text: 'A leaking sink. She calls you.', hi: 'She calls you.' },
  { t0: 2.6, t1: 5.2, text: 'You’re on a job. Voicemail.', hi: 'Voicemail.' },
  { t0: 5.2, t1: 7.6, text: 'She doesn’t leave a message.', hi: 'doesn’t' },
  { t0: 7.6, t1: 10.4, text: 'She calls the next plumber.', hi: 'the next plumber.' },
  { t0: 10.4, t1: 13.0, text: 'He picks up.', hi: 'picks up.' },
  { t0: 13.0, t1: 15.4, text: 'He gets the job.', hi: 'the job.' },
  { t0: 15.4, t1: 18.4, text: 'All you see: one missed call.', hi: 'one missed call.' },
  { t0: 18.4, t1: 21.1, text: 'Who picks up when you can’t?', hi: 'Who picks up' },
];
export const RING = [[0.2, 2.5], [7.8, 10.3]];   // ringback under each call
export const ENDTONE = 5.25;                      // call-ended tone when she hangs up
export const HITS = [T.vm, T.hang, T.next, T.pick, T.job, T.you, T.ask, T.end];
