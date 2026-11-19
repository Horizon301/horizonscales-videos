"""Writes music.json for "After Five": marimba, pizzicato cello, flute, light standard kit (quiet night to bright morning,
90 BPM, F major). Night: marimba + cello only, soft. Morning: kit and flute come in. The band drops to one low note on
"Too late", then builds to the question. Render: python3 ../../kit/sound/sf_render.py music.json audio/band.wav"""
import json
B = 60 / 90; DUR = 22.2
CH = {'F': [65, 69, 72], 'Dm': [62, 65, 69], 'Bb': [62, 65, 70], 'C': [64, 67, 72], 'Gm': [62, 67, 70], 'Csus': [65, 67, 72]}
ROOT = {'F': 41, 'Dm': 38, 'Bb': 34, 'C': 36, 'Gm': 43, 'Csus': 36}
mar, cel, fl, kit = [], [], [], []
R = lambda x: round(x, 4)
def sect(t0, t1, ch, kitOn=True, flute=False, v=74):
    for k in CH[ch]: mar.append([R(t0), k, 0.8, v + 6])
    kit.append([R(t0), 36, 0.2, v + 8])
    if kitOn: kit.append([R(t0), 49, 0.9, v - 18])
    t, b = t0, 0
    while t < t1 - 0.05:
        if b % 2 == 0: cel.append([R(t), ROOT[ch] + (7 if b % 4 == 2 else 0), B * 0.6, v + 8])
        mar.append([R(t), CH[ch][b % 3] + (12 if b % 4 == 3 else 0), B * 0.35, v - 18 - (6 if b % 2 else 0)])
        if kitOn:
            kit.append([R(t), 70 if b % 2 else 42, 0.06, 40 if b % 2 == 0 else 30])
            if b % 4 == 2: kit.append([R(t), 37, 0.12, v - 18])
        t += B / 2; b += 1
    if flute:
        for i, k in enumerate([CH[ch][2] + 12, CH[ch][1] + 12]): fl.append([R(t0 + i * B * 2), k, B * 1.8, v - 6])
sect(0.0, 2.8, 'Dm', kitOn=False, v=66)
sect(2.8, 5.6, 'Bb', kitOn=False, v=68)
# 5.6 the night passes: a rising marimba run into morning
for i, k in enumerate([62, 65, 69, 72, 74, 77, 81, 84]): mar.append([R(5.6 + i * 0.16), k, 0.3, 64 + i * 3])
sect(7.0, 8.2, 'F', flute=True, v=78)
sect(8.2, 10.8, 'C', v=78)
# 10.8 "Too late": band stops, one low note
cel.append([10.8, 34, 2.2, 88]); mar.append([10.8, 58, 1.8, 70]); mar.append([10.8, 65, 1.8, 62]); kit.append([10.8, 41, 0.3, 74])
for i in range(3): kit.append([R(11.9 + i * B), 37, 0.06, 40])
sect(13.6, 16.4, 'Gm', kitOn=False, v=72)
sect(16.4, 17.8, 'Bb', flute=True, v=80); sect(17.8, 19.2, 'Csus', v=80)
sect(19.2, 21.4, 'F', flute=True, v=88)
for k in CH['F']: mar.append([21.4, k, 0.7, 84])
cel.append([21.4, 41, 0.7, 92]); kit.append([21.4, 36, 0.2, 86])
spec = {'bpm': 90, 'dur': DUR, 'tracks': [
    {'name': 'marimba', 'program': 12, 'sec': True, 'gain': 0.9, 'notes': mar},
    {'name': 'pizzicato cello', 'program': 45, 'sec': True, 'gain': 1.0, 'notes': cel},
    {'name': 'flute', 'program': 73, 'sec': True, 'gain': 0.55, 'notes': fl},
    {'name': 'light kit', 'drums': True, 'program': 0, 'sec': True, 'gain': 0.7, 'notes': kit}]}
json.dump(spec, open('music.json', 'w')); print({t['name']: len(t['notes']) for t in spec['tracks']})
