"""Lays the voice out like the model: gaps 0.3-0.45 s, 0.7 s before the turn, 0.8 s before the ending; the end card
starts on the next whole bar of the 96 BPM music (2.5 s bars). Writes timeline.js from audio/vo/report.json."""
import json, math
R = json.load(open('audio/vo/report.json')); d = lambda k: R[k]['dur']
BAR = 2.5; t = 0.2; at = {}
order = [('v0', 0.0), ('v1', 0.3), ('p1', 0.45), ('p2', 0.4), ('p3', 0.4), ('b', 0.7), ('f1', 0.45), ('f2', 0.4), ('f3', 0.4), ('v5', 0.8)]
for k, gap in order:
    if k != 'v0': t += gap
    at[k] = round(t, 2); t += d(k)
v5end = t
end = math.ceil((v5end + 0.3) / BAR) * BAR
T = {'q': 0, 'list': at['v1'], 'one': at['p1'], 'two': at['p2'], 'three': at['p3'], 'bridge': at['b'], 'fix1': at['f1'], 'fix2': at['f2'], 'fix3': at['f3'], 'pay': at['v5'],
     'end': end, 'shut': round(end + 0.55, 2), 'logo': round(end + 0.2, 2), 'tag1': round(end + 0.55, 2), 'tag2': round(end + 0.9, 2), 'serv': round(end + 1.3, 2), 'url': round(end + 1.65, 2)}
DUR = round(end + 2.9, 2); NB = int(round(end / BAR))
mid1 = round(at['v1'] + d('v1') * 0.42, 2); mid5 = round(at['v5'] + d('v5') * 0.3, 2)
caps = [(0, at['v1'], "Why didn't she/[wait for you?]"), (at['v1'], mid1, "Here are/[3 reasons.]"), (mid1, at['p1'], "#3 happens/[the next morning.]"),
        (at['p1'], at['p2'], "[1.] Your voicemail/was full."), (at['p2'], at['p3'], "[2.] You never/texted her back."), (at['p3'], at['b'], "[3.] You called back/the next morning."),
        (at['b'], at['f1'], "How to fix/[all three:]"), (at['f1'], at['f2'], "1. [Clear voicemail]/every Friday."), (at['f2'], at['f3'], "2. [Text back]/after a missed call."),
        (at['f3'], at['v5'], "3. [Call back]/within the hour."), (at['v5'], mid5, "Fix [all three.]"), (mid5, end + 0.1, "Next time,/[she waits for you.]")]
js = ["// timeline.js — \"Cold wait\" (HVAC, F1) with Kai's voice. Made by make_timeline.py from the voice lengths.",
      "export const T = " + json.dumps(T) + ";", "export const CUE = [T.bridge];", f"export const DUR = {DUR};",
      "export const VO = " + json.dumps([[at[k], k] for k, _ in order]) + ";", "export const CAPS = ["]
js += [f"  [{a:.2f}, {b:.2f}, {json.dumps(c)}]," for a, b, c in caps] + ["];",
      f"export const RINGS = [[{at['p1'] + 0.1:.2f}, {at['p1'] + 1.4:.2f}]];", f"export const BUZZ = [[{at['f3'] + 0.15:.2f}, {at['f3'] + 1.75:.2f}]];",
      "export const CUTS = [T.one, T.two, T.three, T.bridge, T.fix1, T.fix2, T.fix3];", "export const HITS = CAPS.map(c => c[0]).filter(t => t > 0);"]
open('timeline.js', 'w').write("\n".join(js) + "\n"); print(T, 'DUR', DUR, 'NB', NB, 'v5end', round(v5end, 2))
json.dump({'DUR': DUR, 'NB': NB}, open('audio/len.json', 'w'))
