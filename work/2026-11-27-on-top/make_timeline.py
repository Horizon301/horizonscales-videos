"""Lays the voice out like the model: gaps 0.35-0.45 s, 0.7 s before the turn, 0.8 s before the ending. Caption and scene
times inside a line come from speech-to-text word times (audio/vo/words.json, made by word_times.py). The music tempo
(92-108 BPM) is picked so the end card starts on a whole bar as soon as possible after the last word. Writes timeline.js."""
import json, math, os
R = json.load(open('audio/vo/report.json')); d = lambda k: R[k]['dur']
WT = json.load(open('audio/vo/words.json')) if os.path.exists('audio/vo/words.json') else {}
t = 0.2; at = {}
order = [('v0', 0.0), ('w1', 0.4), ('w2', 0.4), ('c1', 0.55), ('b', 0.7), ('f1', 0.35), ('f2', 0.4), ('v5', 0.8)]
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
T = {'q': 0, 'w1': at['w1'], 'w1b': word('w1', 'scrolling', 0.72), 'w2': at['w2'], 'w2a': word('w2', 'your', 0.27), 'w2b': word('w2', 'still', 0.55),
     'c1': at['c1'], 'c1b': word('c1', 'and', 0.42), 'bridge': at['b'], 'fix1': at['f1'], 'fix1b': word('f1', 'every', 0.72), 'fix2': at['f2'],
     'pay': at['v5'], 'pay2': word('v5', 'and', 0.45),
     'end': end, 'shut': round(end + 0.55, 2), 'logo': round(end + 0.2, 2), 'tag1': round(end + 0.55, 2), 'tag2': round(end + 0.9, 2), 'serv': round(end + 1.3, 2), 'url': round(end + 1.65, 2)}
DUR = round(end + 2.9, 2); NB = int(round(end / BAR))
caps = [(0, T['w1'], "Can she find/[your number?]"), (T['w1'], T['w1b'], "She's on/[your website.]"), (T['w1b'], T['w2'], "[Scrolling.]"),
        (T['w2'], T['w2b'], "Photos./Your [story.]"), (T['w2b'], T['c1'], "Still/[no phone number.]"),
        (T['c1'], T['c1b'], "She goes [back.]"), (T['c1b'], T['bridge'], "She calls/[the next company.]"),
        (T['bridge'], T['fix1'], "Here's/[the fix:]"),
        (T['fix1'], T['fix1b'], "[Call button]/on top."), (T['fix1b'], T['fix2'], "On [every page.]"),
        (T['fix2'], T['pay'], "It [stays]/while she scrolls."),
        (T['pay'], T['pay2'], "Your number/[on top.]"), (T['pay2'], round(end + 0.1, 2), "Next time,/[she calls you.]")]
js = ["// timeline.js — \"On top\" (pest control, F3 mid-action) with Kai's voice. Made by make_timeline.py from the voice lengths.",
      "export const T = " + json.dumps(T) + ";", "export const CUE = [T.bridge];", f"export const DUR = {DUR};", f"export const BPM = {BPM};",
      "export const VO = " + json.dumps([[at[k], k] for k, _ in order]) + ";", "export const CAPS = ["]
js += [f"  [{a:.2f}, {b:.2f}, {json.dumps(c)}]," for a, b, c in caps] + ["];",
      f"export const RINGS = [[{T['c1b'] + 0.3:.2f}, {T['bridge'] - 0.15:.2f}]];", "export const BUZZ = [];",
      "export const CUTS = [T.w1, T.w2, T.c1, T.bridge, T.fix1, T.fix2];", "export const HITS = CAPS.map(c => c[0]).filter(t => t > 0);"]
open('timeline.js', 'w').write("\n".join(js) + "\n"); print(T, 'DUR', DUR, 'BPM', BPM, 'NB', NB, 'v5end', round(v5end, 2))
json.dump({'DUR': DUR, 'NB': NB, 'BPM': BPM}, open('audio/len.json', 'w'))
