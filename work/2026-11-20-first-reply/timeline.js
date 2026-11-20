// timeline.js — "First Reply" (Horizon Scales video #24, made Nov 20, 2026). TEXT (voice on hold since Nov 18).
// Topic T4 (slow reply to a website form), format P1 (homeowner's story), trade: electricians.
// Her kitchen outlet sparks; she fills out your form and the next electrician's; he texts back in 7 minutes and gets the job;
// your reply comes at 4:40 PM.
export const BPM = 104;
export const BEAT = 60 / BPM;
export const L = n => n * BEAT;          // lengths only (never add offsets here)
export const T = {
  form2: 2.9,                            // the next electrician's form
  reply: 5.7,                            // he texts back
  book: 8.5,                             // she books him
  late: 11.3,                            // the clock rolls to 4:40 PM, your reply arrives
  fixed: 14.1,                           // "Already fixed, thanks!"
  list: 16.9,                            // her messages list
  end: 19.8, shut: 20.3, logo: 20.15, tag1: 20.35, tag2: 20.8, serv: 21.25, url: 21.65,
};
export const DUR = 22.8;
export const CAPS = [
  { t0: 0.0, t1: 2.9, text: 'She fills out your form.', hi: 'your form.' },
  { t0: 2.9, t1: 5.7, text: 'And the next\nelectrician’s form.', hi: 'next' },
  { t0: 5.7, t1: 8.5, text: 'He texts back\nin 7 minutes.', hi: 'in 7 minutes.' },
  { t0: 8.5, t1: 11.3, text: 'She books him for 2 PM.', hi: 'books him' },
  { t0: 11.3, t1: 14.1, text: 'Your reply comes\nat 4:40 PM.', hi: 'at 4:40 PM.' },
  { t0: 14.1, t1: 16.9, text: 'Too late.\nHe fixed it at 2.', hi: 'Too late.' },
  { t0: 16.9, t1: 19.9, text: 'Who replies first?', hi: 'first?' },
];
export const TAPS = [2.05, 4.35, 9.05];           // thumb taps on glass: Send, Send, "Yes please!"
export const DINGS = [6.0, 12.55];                // message arrives
export const HITS = [T.form2, T.reply, T.book, T.late, T.fixed, T.list, T.end];
