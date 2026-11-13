"""Writes music.json for "Find the Painter": nylon guitar, upright bass, recorder and hand percussion (bongos, shaker,
claves, tambourine, triangle) at 96 BPM in G major. The middle is a one-a-second countdown: claves tick, the bass climbs,
bongos roll into "Time's up", where the band stops. Render: python3 ../../kit/sound/sf_render.py music.json audio/band.wav"""
import json
B = 0.625
DUR = 23.5
ARP = {'G': [55, 62, 67, 62, 59, 62, 67, 62], 'C': [48, 60, 64, 60, 55, 60, 64, 60], 'D': [50, 62, 66, 62, 57, 62, 66, 62], 'Em': [52, 59, 64, 59, 55, 59, 64, 59]}
BASS = {'G': (43, 38), 'C': (36, 43), 'D': (38, 45), 'Em': (40, 47)}
gtr, bass, rec, perc = [], [], [], []

def bar(t0, ch, beats=4, mel=()):
    for i in range(beats * 2):
        t = t0 + i * B / 2
        gtr.append([round(t, 4), ARP[ch][i % 8], 0.5, 84 if i % 2 == 0 else 68])
        perc.append([round(t, 4), 70, 0.1, 44 if i % 2 else 58])                       # shaker
        perc.append([round(t, 4), 60 if i % 4 in (0, 3) else 61, 0.15, 74 if i % 4 == 0 else 54])   # bongos
        if i % 4 == 2: perc.append([round(t, 4), 54, 0.2, 60])                         # tambourine on 2 and 4
    for b in range(0, beats, 2):
        bass.append([round(t0 + b * B, 4), BASS[ch][0 if b % 4 == 0 else 1], 1.0, 100])
    for off, key, ln in mel: rec.append([round(t0 + off * B, 4), key, ln * B * 0.92, 86])

def hit(t, v=88):                                                                       # caption change: the band lands on it
    perc.extend([[t, 54, 0.3, v], [t, 62, 0.2, v]])

# intro: one bar, the hook
bar(0, 'G', 4, [(0, 74, .5), (.5, 79, .5), (1, 83, .5), (1.5, 79, .5), (2, 81, 1), (3, 86, 1)])
perc.append([0, 49, 1.0, 70])
# countdown 2.5 to 7.5: a tick a second, the bass climbs, a pluck and a shaker between
for i, t in enumerate([2.5, 3.5, 4.5, 5.5, 6.5]):
    perc.append([t, 75, 0.15, 74 + i * 6]); perc.append([t + 0.5, 70, 0.1, 50 + i * 6]); perc.append([t + 0.25, 70, 0.1, 36]); perc.append([t + 0.75, 70, 0.1, 36])
    bass.append([t, [43, 45, 47, 48, 50][i], 0.8, 92 + i * 5])
    gtr.append([t + 0.5, [62, 64, 66, 67, 69][i], 0.4, 70 + i * 6]); gtr.append([t, [55, 57, 59, 60, 62][i], 0.4, 62 + i * 5])
    rec.append([t, [74, 76, 78, 79, 81][i], 0.35, 64 + i * 5])
for j in range(8): perc.append([6.5 + j * 0.125, 60 if j % 2 == 0 else 61, 0.1, 58 + j * 7])   # bongo roll into the stop
# time's up: one hit, then almost nothing
perc.extend([[7.5, 49, 0.5, 84], [7.5, 36, 0.2, 86], [7.5, 39, 0.2, 70]])
for i, k in enumerate([50, 57, 60, 66]): gtr.append([7.5 + 0.012 * i, k, 0.3, 84])
bass.append([7.5, 38, 0.35, 92])
for t in (8.0, 8.5): perc.append([t, 76, 0.12, 56])
bass.append([8.75, 42, 0.25, 80])
# reveal and after: G | C | G | D, then the end card on G
perc.append([9.0, 49, 1.2, 80]); perc.append([9.0, 81, 0.6, 80])
bar(9.0, 'G', 4, [(0, 79, .25), (.25, 81, .25), (.5, 83, .25), (.75, 86, 1.25), (2, 83, 1), (3, 79, 1)])
bar(11.5, 'C', 4, [(0, 76, 1), (1, 79, 1), (2, 76, .5), (2.5, 74, .5), (3, 72, 1)])
bar(14.0, 'G', 4, [(0, 74, 1), (1, 79, 1), (2, 83, 1), (3, 81, 1)])
bar(16.5, 'D', 4, [(0, 81, 1), (1, 78, 1), (2, 81, .5), (2.5, 83, .5), (3, 86, 1)])
bar(19.0, 'G', 4, [(0, 79, 1), (1, 83, 1), (2, 86, 1), (3, 91, 1)])
for t in (10.875, 12.75, 15.25, 17.125): hit(t)
perc.append([19.625, 49, 1.0, 84])
for t in (20.12, 20.55, 21.05): perc.append([t, 81, 0.4, 56])                           # a triangle per end-card line
# final chord
for i, k in enumerate([43, 55, 59, 62, 67, 71]): gtr.append([21.5 + 0.018 * i, k, 1.6, 92])
bass.append([21.5, 31, 1.6, 104]); rec.append([21.5, 91, 1.4, 84]); perc.extend([[21.5, 49, 1.4, 84], [21.5, 54, 0.4, 80], [21.5, 81, 0.6, 60]])
spec = {'bpm': 96, 'dur': DUR, 'tracks': [
    {'name': 'nylon guitar', 'program': 24, 'sec': True, 'gain': 1.3, 'notes': gtr},
    {'name': 'upright bass', 'program': 32, 'sec': True, 'gain': 1.05, 'notes': bass},
    {'name': 'recorder', 'program': 74, 'sec': True, 'gain': 0.9, 'notes': rec},
    {'name': 'hand percussion', 'drums': True, 'program': 0, 'sec': True, 'gain': 0.6, 'notes': perc},
]}
json.dump(spec, open('music.json', 'w'))
print({k['name']: len(k['notes']) for k in spec['tracks']})
