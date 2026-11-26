"""Lays the voice out like the model: gaps 0.3-0.45 s, 0.7 s before the turn, 0.8 s before the ending. The music tempo
(92-108 BPM) is picked so the end card starts on a whole bar as soon as possible after the last word. Writes timeline.js."""
import json, math
R = json.load(open('audio/vo/report.json')); d = lambda k: R[k]['dur']
t = 0.2; at = {}
order = [('v0', 0.0), ('m', 0.35), ('s1', 0.45), ('s3', 0.35), ('b', 0.7), ('t', 0.3), ('f1', 0.45), ('f2', 0.3), ('v5', 0.8)]
for k, gap in order:
    if k != 'v0': t += gap
    at[k] = round(t, 2); t += d(k)
v5end = t
best = None
for bpm in range(92, 109):
    bar = 240 / bpm; end = math.ceil((v5end + 0.25) / bar) * bar
    if best is None or end < best[1] - 1e-6: best = (bpm, end, bar)
BPM, end, BAR = best; end = round(end, 3)
fr = lambda k, f: round(at[k] + d(k) * f, 2)
T = {'q': 0, 'm': at['m'], 'm2': fr('m', 0.6), 's1': at['s1'], 's1a': fr('s1', 0.4), 's1b': fr('s1', 0.84), 's3': at['s3'], 's3b': fr('s3', 0.58), 'bridge': at['b'], 'truth': at['t'], 'fix1': at['f1'], 'fix2': at['f2'], 'pay': at['v5'],
     'end': end, 'shut': round(end + 0.55, 2), 'logo': round(end + 0.2, 2), 'tag1': round(end + 0.55, 2), 'tag2': round(end + 0.9, 2), 'serv': round(end + 1.3, 2), 'url': round(end + 1.65, 2)}
DUR = round(end + 2.9, 2); NB = int(round(end / BAR)); mid5 = fr('v5', 0.42)
caps = [(0, T['m'], "Why did she think/[you closed?]"), (T['m'], T['m2'], "You built it/[once.]"), (T['m2'], T['s1'], "[Never] touched/it again."),
        (T['s1'], T['s1a'], "She [opens it.]"), (T['s1a'], T['s1b'], "It still says/[spring sale.]"), (T['s1b'], T['s3'], "It's [November.]"),
        (T['s3'], T['s3b'], "She figures/[you closed.]"), (T['s3b'], T['bridge'], "She calls/[the next builder.]"),
        (T['bridge'], T['truth'], "Here's/[the truth:]"), (T['truth'], T['fix1'], "A website is/[never done.]"),
        (T['fix1'], T['fix2'], "[Twice a year:]/old banner down."), (T['fix2'], T['pay'], "Add a photo:/[your latest job.]"),
        (T['pay'], mid5, "Keep it [current.]"), (mid5, round(end + 0.1, 2), "Next time, she/[knows you're open.]")]
js = ["// timeline.js — \"Never done\" (fence builders, F2 myth → truth) with Kai's voice. Made by make_timeline.py from the voice lengths.",
      "export const T = " + json.dumps(T) + ";", "export const CUE = [T.bridge];", f"export const DUR = {DUR};", f"export const BPM = {BPM};",
      "export const VO = " + json.dumps([[at[k], k] for k, _ in order]) + ";", "export const CAPS = ["]
js += [f"  [{a:.2f}, {b:.2f}, {json.dumps(c)}]," for a, b, c in caps] + ["];",
      f"export const RINGS = [[{T['s3b'] + 0.25:.2f}, {T['bridge'] - 0.15:.2f}]];", "export const BUZZ = [];",
      "export const CUTS = [T.m, T.s1, T.s3, T.bridge, T.fix1, T.fix2];", "export const HITS = CAPS.map(c => c[0]).filter(t => t > 0);"]
open('timeline.js', 'w').write("\n".join(js) + "\n"); print(T, 'DUR', DUR, 'BPM', BPM, 'NB', NB, 'v5end', round(v5end, 2))
json.dump({'DUR': DUR, 'NB': NB, 'BPM': BPM}, open('audio/len.json', 'w'))
