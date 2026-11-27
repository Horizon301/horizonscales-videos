// timeline.js — "On top" (pest control, F3 mid-action) with Kai's voice. Made by make_timeline.py from the voice lengths.
export const T = {"q": 0, "w1": 3.42, "w1b": 5.32, "w2": 6.17, "w2a": 6.91, "w2b": 7.59, "c1": 8.91, "c1b": 10.17, "bridge": 12.22, "fix1": 14.07, "fix1b": 15.85, "fix2": 17.02, "pay": 20.02, "pay2": 21.04, "end": 23.478, "shut": 24.03, "logo": 23.68, "tag1": 24.03, "tag2": 24.38, "serv": 24.78, "url": 25.13};
export const CUE = [T.bridge];
export const DUR = 26.38;
export const BPM = 92;
export const VO = [[0.2, "v0"], [3.42, "w1"], [6.17, "w2"], [8.91, "c1"], [12.22, "b"], [14.07, "f1"], [17.02, "f2"], [20.02, "v5"]];
export const CAPS = [
  [0.00, 3.42, "Can she find/[your number?]"],
  [3.42, 5.32, "She's on/[your website.]"],
  [5.32, 6.17, "[Scrolling.]"],
  [6.17, 7.59, "Photos./Your [story.]"],
  [7.59, 8.91, "Still/[no phone number.]"],
  [8.91, 10.17, "She goes [back.]"],
  [10.17, 12.22, "She calls/[the next company.]"],
  [12.22, 14.07, "Here's/[the fix:]"],
  [14.07, 15.85, "[Call button]/on top."],
  [15.85, 17.02, "On [every page.]"],
  [17.02, 20.02, "It [stays]/while she scrolls."],
  [20.02, 21.04, "Your number/[on top.]"],
  [21.04, 23.58, "Next time,/[she calls you.]"],
];
export const RINGS = [[10.47, 12.07]];
export const BUZZ = [];
export const CUTS = [T.w1, T.w2, T.c1, T.bridge, T.fix1, T.fix2];
export const HITS = CAPS.map(c => c[0]).filter(t => t > 0);
