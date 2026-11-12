"""Writes music.json for "Worst Time": an oom-pah band (tuba, accordion, clarinet, brush kit) at 100 BPM in C,
with a sampled telephone ring. The band stops dead on the rings in scenes 2, 3 and 5 (stop-time), and only wood blocks
tick through the silent lunch break. Render: python3 ../../kit/sound/sf_render.py music.json audio/band.wav"""
import json
B = 0.6
DUR = 22.2
RINGS = [[0, 0.9], [1.5, 2.4], [4.5, 5.4], [7.6, 8.5], [16.0, 16.9], [17.2, 17.8]]
ACTIVE = [(0, 4.5), (5.4, 7.6), (14.4, 16.0)]
CH = {'C': (36, 43, [60, 64, 67], [72, 76, 79, 84]), 'F': (41, 36, [60, 65, 69], [72, 77, 81, 84]), 'G': (43, 38, [59, 62, 67], [71, 74, 79, 83])}
BARS = ['C', 'F', 'G', 'C', 'C', 'C', 'G', 'C']
PAT = [0, 1, 2, 1, 3, 2, 1, 2]
tuba, acc, clar, kit, tel = [], [], [], [], []
on = lambda t: any(a - 1e-6 <= t < b - 1e-6 for a, b in ACTIVE)
n = 0
while n * B < 17.8:
    t = round(n * B, 4); bar = (n // 4) % len(BARS); k = n % 4; root, fifth, tri, mel = CH[BARS[bar]]
    if on(t):
        if k in (0, 2):
            tuba.append([t, root if k == 0 else fifth, 0.42, 98]); kit.append([t, 36, 0.2, 96])
        else:
            for i, key in enumerate(tri): acc.append([t + 0.008 * i, key, 0.2, 66])
            kit.append([t, 38, 0.2, 56])
        for e in (0, 1):
            te = round(t + e * B / 2, 4)
            if on(te):
                kit.append([te, 42, 0.1, 38 if e else 46])
                clar.append([te, mel[PAT[(k * 2 + e) % 8]], 0.24, 80])
    n += 1
for t in (3.6, 6.0, 14.4): kit.append([t, 49, 0.8, 62])            # scene changes: a soft crash
kit += [[7.6, 49, 1.0, 96], [7.6, 38, 0.2, 100], [7.8, 76, 0.15, 84]]   # the jolt, then "It was clean."
tuba += [[8.6, 43, 0.3, 104], [8.95, 36, 0.6, 104]]                # the sad two-note answer
# lunch: one chord, then wood blocks ticking like a clock and a clarinet that waits
for i, key in enumerate([60, 64, 67]): acc.append([9.6 + 0.01 * i, key, 0.9, 58])
kit.append([9.6, 36, 0.2, 70]); tuba.append([9.6, 36, 0.5, 86])
t = 10.2; i = 0
while t < 14.3:
    kit.append([round(t, 3), 76 if i % 2 == 0 else 77, 0.12, 66]); t += B; i += 1
kit.append([11.8, 81, 0.5, 60])                                    # "Nothing."
clar += [[10.8, 67, 0.9, 52], [12.6, 64, 1.0, 50]]
kit += [[16.0, 49, 0.8, 84], [16.1, 37, 0.15, 96]]                 # the last ring, "There it is."
tuba.append([16.15, 31, 0.5, 100])
# end card: a short tag and a final chord
kit.append([17.8, 49, 1.0, 84])
for j, (t, c) in enumerate([(17.8, 'C'), (18.4, 'C'), (19.0, 'G'), (19.6, 'G')]):
    root, fifth, tri, mel = CH[c]
    tuba.append([t, root if j % 2 == 0 else fifth, 0.42, 96]); kit.append([t, 36, 0.2, 70]); kit.append([t + 0.3, 38, 0.2, 54])
    for i, key in enumerate(tri): acc.append([t + 0.3 + 0.008 * i, key, 0.2, 64])
    clar.append([t, mel[j % 2], 0.24, 80]); clar.append([t + 0.3, mel[2 + j % 2], 0.24, 80])
for i, key in enumerate([60, 64, 67, 72]): acc.append([20.2 + 0.012 * i, key, 1.3, 74])
tuba.append([20.2, 36, 1.3, 100]); clar.append([20.2, 84, 1.2, 82]); kit += [[20.2, 49, 1.2, 80], [20.2, 36, 0.2, 80]]
for t in (18.15, 18.8, 19.3, 19.8): kit.append([t, 81, 0.4, 50])    # one triangle per end-card line
for a, b in RINGS: tel.append([a, 72, b - a, 112])
spec = {'bpm': 100, 'dur': DUR, 'tracks': [
    {'name': 'tuba', 'program': 58, 'sec': True, 'gain': 1.7, 'notes': tuba},
    {'name': 'accordion', 'program': 21, 'sec': True, 'gain': 0.8, 'notes': acc},
    {'name': 'clarinet', 'program': 71, 'sec': True, 'gain': 0.9, 'notes': clar},
    {'name': 'brush kit', 'drums': True, 'program': 40, 'sec': True, 'gain': 0.9, 'notes': kit},
    {'name': 'telephone', 'program': 124, 'sec': True, 'gain': 3.6, 'notes': tel},
]}
json.dump(spec, open('music.json', 'w'))
print({k['name']: len(k['notes']) for k in spec['tracks']})
