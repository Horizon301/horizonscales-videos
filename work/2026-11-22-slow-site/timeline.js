// timeline.js — "Slow Site" (Horizon Scales video #26, made Nov 22, 2026). TEXT (voice on hold since Nov 18).
// Topic T9 (website broken or slow on a phone), format P1 (homeowner's story), trade: garage door repair.
// HER PHONE: her garage door is stuck; she taps your website; it crawls, then loads tiny with a pop-up; she goes back,
// taps the next company, his site loads at once with a big Call button, and she calls him.
export const BPM = 100;
export const BEAT = 60 / BPM;
export const L = n => n * BEAT;          // lengths only (never add offsets here)
export const T = {
  load: 3.0,                             // your site, loading
  tiny: 6.2,                             // it finally loads: tiny desktop page, then a pop-up
  popup: 7.0,
  back: 9.0,                             // she taps Back, the results again
  next: 11.6,                            // the next company's site, loaded at once
  call: 14.6,                            // she taps Call now
  yours: 17.4,                           // your site, still loading
  end: 20.4, shut: 20.9, logo: 20.75, tag1: 20.95, tag2: 21.4, serv: 21.85, url: 22.25,
};
export const DUR = 23.4;
export const CAPS = [
  { t0: 0.0, t1: 3.0, text: 'Her garage door\nis stuck.', hi: 'is stuck.' },
  { t0: 3.0, t1: 6.2, text: 'Your site is\nstill loading.', hi: 'still loading.' },
  { t0: 6.2, t1: 9.0, text: 'Tiny text.\nA pop-up.', hi: 'A pop-up.' },
  { t0: 9.0, t1: 11.6, text: 'She goes back.', hi: 'goes back.' },
  { t0: 11.6, t1: 14.6, text: 'His site loads\nright away.', hi: 'right away.' },
  { t0: 14.6, t1: 17.4, text: 'She calls him.', hi: 'calls him.' },
  { t0: 17.4, t1: 20.5, text: 'Have you opened your\nsite on a phone?', hi: 'on a phone?' },
];
export const TAPS = [1.9, 7.75, 8.35, 9.35, 10.7, 15.2];  // thumb taps: your site, the pop-up ×, the ×, Back, next site, Call now
export const RING = [15.6, 16.3];                          // ringback while she calls
export const HITS = [T.load, T.tiny, T.back, T.next, T.call, T.yours, T.end];
