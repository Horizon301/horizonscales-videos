// timeline.js — "3 reasons" with Kai's voice. Order: question, the 3 problems, "here's how to fix all three", the 3 fixes, payoff.
export const T = {"q": 0, "list": 2.61, "one": 6.3, "two": 8.54, "three": 10.96, "bridge": 13.39, "fix1": 15.8, "fix2": 18.01, "fix3": 19.62, "pay": 22.5, "end": 26.4, "shut": 26.95, "logo": 26.6, "tag1": 26.95, "tag2": 27.3, "serv": 27.7, "url": 28.05};
export const CUE = [T.bridge];
export const DUR = 29.3;
export const VO = [[0.2, "v0"], [2.61, "v1"], [6.3, "p1"], [8.54, "p2"], [10.96, "p3"], [13.39, "b"], [15.8, "f1"], [18.01, "f2"], [19.62, "f3"], [22.5, "v5"]];
export const CAPS = [
  [0.00, 2.61, "Why did she call/[the other guy?]"],
  [2.61, 3.96, "Here are/[3 reasons.]"],
  [3.96, 6.30, "#3 happens/[before she calls.]"],
  [6.30, 8.54, "[1.] You didn't/pick up."],
  [8.54, 10.96, "[2.] Your voicemail/is full."],
  [10.96, 13.39, "[3.] Your reviews/are old."],
  [13.39, 15.80, "How to fix/[all three:]"],
  [15.80, 18.01, "1. [Text them back]/within minutes."],
  [18.01, 19.62, "2. [Clear it out]/tonight."],
  [19.62, 22.50, "3. Ask 3 customers/[for a review.]"],
  [22.50, 23.70, "Fix [all three.]"],
  [23.70, 26.50, "Next time,/[she calls you.]"],
];
export const BUZZ = [[6.4, 8.0], [23.5, 25.1]];
export const RINGS = [[8.69, 9.94]];
export const CUTS = [T.one, T.two, T.three, T.bridge, T.fix1, T.fix2, T.fix3];
export const HITS = CAPS.map(c => c[0]).filter(t => t > 0);
