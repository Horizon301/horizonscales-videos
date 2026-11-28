// timeline.js — "Locked out" (locksmiths, F4 if-you-are-a) with Kai's voice. Made by make_timeline.py from the voice lengths.
export const T = {"q": 0, "q2": 2.6, "p1": 3.69, "p1b": 4.69, "p1c": 6.99, "p2": 6.99, "p2b": 9.15, "c1": 10.62, "c1b": 11.86, "bridge": 13.61, "fix1": 15.46, "fix1a": 16.02, "fix1b": 16.62, "fix2": 18.2, "f2a": 18.62, "f2b": 19.36, "f2c": 20.32, "pay": 21.63, "pay2": 22.41, "pay3": 23.89, "end": 24.906, "shut": 25.46, "logo": 25.11, "tag1": 25.46, "tag2": 25.81, "serv": 26.21, "url": 26.56};
export const CUE = [T.bridge];
export const DUR = 27.81;
export const BPM = 106;
export const VO = [[0.2, "v0"], [3.69, "p1"], [6.99, "p2"], [10.62, "c1"], [13.61, "b"], [15.46, "f1"], [18.2, "f2"], [21.63, "v5"]];
export const CAPS = [
  [0.00, 2.60, "Locksmith?/[Not on the map?]"],
  [2.60, 3.69, "[Watch this.]"],
  [3.69, 4.69, "She's/[locked out.]"],
  [4.69, 6.99, "She searches:/[locksmith near me]"],
  [6.99, 9.15, "[Three names]/come up."],
  [9.15, 10.62, "Yours/[isn't one.]"],
  [10.62, 13.61, "She calls/[the first one.]"],
  [13.61, 15.46, "Here's/[the fix:]"],
  [15.46, 18.20, "Claim your/[free listing.]"],
  [18.20, 21.63, "Add [hours,]/area, photos."],
  [21.63, 22.41, "Get/[on the map.]"],
  [22.41, 25.01, "Next time,/[she can find you.]"],
];
export const RINGS = [[12.16, 13.46]];
export const BUZZ = [];
export const CUTS = [T.p1, T.p2, T.c1, T.bridge, T.fix1, T.fix2];
export const HITS = CAPS.map(c => c[0]).filter(t => t > 0);
