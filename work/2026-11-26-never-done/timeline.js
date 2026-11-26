// timeline.js — "Never done" (fence builders, F2 myth → truth) with Kai's voice. Made by make_timeline.py from the voice lengths.
export const T = {"q": 0, "m": 3.44, "m2": 5.18, "s1": 6.79, "s1a": 8.06, "s1b": 9.45, "s3": 10.31, "s3b": 11.83, "bridge": 13.63, "truth": 15.44, "fix1": 17.39, "fix2": 20.03, "pay": 22.94, "end": 26.4, "shut": 26.95, "logo": 26.6, "tag1": 26.95, "tag2": 27.3, "serv": 27.7, "url": 28.05};
export const CUE = [T.bridge];
export const DUR = 29.3;
export const BPM = 100;
export const VO = [[0.2, "v0"], [3.44, "m"], [6.79, "s1"], [10.31, "s3"], [13.63, "b"], [15.44, "t"], [17.39, "f1"], [20.03, "f2"], [22.94, "v5"]];
export const CAPS = [
  [0.00, 3.44, "Why did she think/[you closed?]"],
  [3.44, 5.18, "You built it/[once.]"],
  [5.18, 6.79, "[Never] touched/it again."],
  [6.79, 8.06, "She [opens it.]"],
  [8.06, 9.45, "It still says/[spring sale.]"],
  [9.45, 10.31, "It's [November.]"],
  [10.31, 11.83, "She figures/[you closed.]"],
  [11.83, 13.63, "She calls/[the next builder.]"],
  [13.63, 15.44, "Here's/[the truth:]"],
  [15.44, 17.39, "A website is/[never done.]"],
  [17.39, 20.03, "[Twice a year:]/old banner down."],
  [20.03, 22.94, "Add a photo:/[your latest job.]"],
  [22.94, 24.28, "Keep it [current.]"],
  [24.28, 26.50, "Next time, she/[knows you're open.]"],
];
export const RINGS = [[12.08, 13.48]];
export const BUZZ = [];
export const CUTS = [T.m, T.s1, T.s3, T.bridge, T.fix1, T.fix2];
export const HITS = CAPS.map(c => c[0]).filter(t => t > 0);
