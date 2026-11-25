// timeline.js — "Cold wait" (HVAC, F1) with Kai's voice. Made by make_timeline.py from the voice lengths.
export const T = {"q": 0, "list": 3.4, "one": 6.81, "two": 9.05, "three": 11.23, "bridge": 13.99, "fix1": 16.68, "fix2": 18.86, "fix3": 21.64, "pay": 24.21, "end": 27.5, "shut": 28.05, "logo": 27.7, "tag1": 28.05, "tag2": 28.4, "serv": 28.8, "url": 29.15};
export const CUE = [T.bridge];
export const DUR = 30.4;
export const VO = [[0.2, "v0"], [3.4, "v1"], [6.81, "p1"], [9.05, "p2"], [11.23, "p3"], [13.99, "b"], [16.68, "f1"], [18.86, "f2"], [21.64, "f3"], [24.21, "v5"]];
export const CAPS = [
  [0.00, 3.40, "Why didn't she/[wait for you?]"],
  [3.40, 4.64, "Here are/[3 reasons.]"],
  [4.64, 6.81, "#3 happens/[the next morning.]"],
  [6.81, 9.05, "[1.] Your voicemail/was full."],
  [9.05, 11.23, "[2.] You never/texted her back."],
  [11.23, 13.99, "[3.] You called back/the next morning."],
  [13.99, 16.68, "How to fix/[all three:]"],
  [16.68, 18.86, "1. [Clear voicemail]/every Friday."],
  [18.86, 21.64, "2. [Text back]/after a missed call."],
  [21.64, 24.21, "3. [Call back]/within the hour."],
  [24.21, 25.08, "Fix [all three.]"],
  [25.08, 27.60, "Next time,/[she waits for you.]"],
];
export const RINGS = [[6.91, 8.21]];
export const BUZZ = [[21.79, 23.39]];
export const CUTS = [T.one, T.two, T.three, T.bridge, T.fix1, T.fix2, T.fix3];
export const HITS = CAPS.map(c => c[0]).filter(t => t > 0);
