"""Lays the voice out like the model: gaps 0.35-0.45 s, 0.7 s before the turn, 0.8 s before the ending. Caption and scene
times inside a line come from speech-to-text word times (audio/vo/words.json, made by word_times.py). The music tempo
(92-108 BPM) is picked so the end card starts on a whole bar as soon as possible after the last word. Writes timeline.js."""
import json, math, os
R = json.load(open('audio/vo/report.json')); d = lambda k: R[k]['dur']
WT = json.load(open('audio/vo/words.json')) if os.path.exists('audio/vo/words.json') else {}
t = 0.2; at = {}
order = [('v0', 0.0), ('p1', 0.4), ('p2', 0.4), ('c1', 0.45), ('b', 0.7), ('f1', 0.35), ('f2', 0.4), ('v5', 0.8)]
for k, gap in order:
    if k != 'v0': t += gap
    at[k] = round(t, 2); t += d(k)
v5end = t
best = None
for bpm in range(92, 109):
    bar = 240 / bpm; end = math.ceil((v5end + 0.25) / bar) * bar
    if best is None or end < best[1] - 1e-6: best = (bpm, end, bar)
BPM, end, BAR = best; end = round(end, 3)
def word(k, w, f):
    """start of word w in line k (minus a small lead), else the fraction f of the line"""
    for ww, s in WT.get(k, []):
        if ww == w: return round(at[k] + max(0, s - 0.06), 2)
    return round(at[k] + d(k) * f, 2)
T = {'q': 0, 'q2': word('v0', 'watch', 0.75), 'p1': at['p1'], 'p1b': word('p1', 'so', 0.35), 'p1c': at['p2'], 'p2': at['p2'], 'p2b': word('p2', 'yours', 0.62),
     'c1': at['c1'], 'c1b': word('c1', 'first', 0.5), 'bridge': at['b'], 'fix1': at['f1'], 'fix1a': word('f1', 'free', 0.25), 'fix1b': word('f1', 'listing', 0.55),
     'fix2': at['f2'], 'f2a': word('f2', 'hours', 0.25), 'f2b': word('f2', 'area', 0.5), 'f2c': word('f2', 'photos', 0.82),
     'pay': at['v5'], 'pay2': word('v5', 'and', 0.42), 'pay3': word('v5', 'find', 0.8),
     'end': end, 'shut': round(end + 0.55, 2), 'logo': round(end + 0.2, 2), 'tag1': round(end + 0.55, 2), 'tag2': round(end + 0.9, 2), 'serv': round(end + 1.3, 2), 'url': round(end + 1.65, 2)}
DUR = round(end + 2.9, 2); NB = int(round(end / BAR))
caps = [(0, T['q2'], "Locksmith?/[Not on the map?]"), (T['q2'], T['p1'], "[Watch this.]"),
        (T['p1'], T['p1b'], "She's/[locked out.]"), (T['p1b'], T['p2'], "She searches:/[locksmith near me]"),
        (T['p2'], T['p2b'], "[Three names]/come up."), (T['p2b'], T['c1'], "Yours/[isn't one.]"),
        (T['c1'], T['bridge'], "She calls/[the first one.]"),
        (T['bridge'], T['fix1'], "Here's/[the fix:]"),
        (T['fix1'], T['fix2'], "Claim your/[free listing.]"),
        (T['fix2'], T['pay'], "Add [hours,]/area, photos."),
        (T['pay'], T['pay2'], "Get/[on the map.]"), (T['pay2'], round(end + 0.1, 2), "Next time,/[she can find you.]")]
js = ["// timeline.js — \"Locked out\" (locksmiths, F4 if-you-are-a) with Kai's voice. Made by make_timeline.py from the voice lengths.",
      "export const T = " + json.dumps(T) + ";", "export const CUE = [T.bridge];", f"export const DUR = {DUR};", f"export const BPM = {BPM};",
      "export const VO = " + json.dumps([[at[k], k] for k, _ in order]) + ";", "export const CAPS = ["]
js += [f"  [{a:.2f}, {b:.2f}, {json.dumps(c)}]," for a, b, c in caps] + ["];",
      f"export const RINGS = [[{T['c1b'] + 0.3:.2f}, {T['bridge'] - 0.15:.2f}]];", "export const BUZZ = [];",
      "export const CUTS = [T.p1, T.p2, T.c1, T.bridge, T.fix1, T.fix2];", "export const HITS = CAPS.map(c => c[0]).filter(t => t > 0);"]
open('timeline.js', 'w').write("\n".join(js) + "\n"); print(T, 'DUR', DUR, 'BPM', BPM, 'NB', NB, 'v5end', round(v5end, 2))
json.dump({'DUR': DUR, 'NB': NB, 'BPM': BPM}, open('audio/len.json', 'w'))
