"""Writes music.json for "First Reply": clavinet, electric piano (Rhodes), muted electric guitar, finger bass, standard kit
with tambourine (light morning funk, 104 BPM, G major). Bright through the morning; the band thins out for the afternoon
wait, stops on "Too late" (one low note), then builds to the question and the end card.
Render: python3 ../../kit/sound/sf_render.py music.json audio/band.wav"""
import json
B = 60 / 104; DUR = 22.8
CH = {'G': [55, 59, 62], 'C': [55, 60, 64], 'D': [57, 62, 66], 'Em': [55, 59, 64], 'Am': [57, 60, 64]}
ROOT = {'G': 31, 'C': 36, 'D': 38, 'Em': 40, 'Am': 33}
clav, ep, gtr, bass, kit = [], [], [], [], []
R = lambda x: round(x, 4)
def sect(t0, t1, ch, full=True, v=76):
    for k in CH[ch]: ep.append([R(t0), k + 12, min(t1 - t0, B * 4), v - 12])
    kit.append([R(t0), 36, 0.2, v + 6])
    t, b = t0, 0
    while t < t1 - 0.05:
        if b % 4 in (0, 3): bass.append([R(t), ROOT[ch] + (12 if b % 8 == 3 else 0), B * 0.45, v + 10])
        if full:
            if b % 2 == 1: clav.append([R(t), CH[ch][b % 3] + 12, B * 0.2, v - 8])
            if b % 4 == 2: gtr.append([R(t), CH[ch][1], B * 0.15, v - 16])
            kit.append([R(t), 42, 0.05, 44 if b % 2 == 0 else 32])
            if b % 4 == 2: kit.append([R(t), 38, 0.1, v - 6])
            if b % 4 == 0 and b > 0: kit.append([R(t), 36, 0.1, v - 4])
            if b % 8 == 6: kit.append([R(t), 54, 0.1, v - 24])
        t += B / 2; b += 1
sect(0.0, 2.9, 'G'); sect(2.9, 5.7, 'C')
kit.append([5.7, 49, 0.9, 74]); sect(5.7, 8.5, 'D', v=80)
sect(8.5, 11.3, 'G', v=82); kit.append([8.5, 49, 0.9, 70])
# 11.3 afternoon: clock rolls, band thins to electric piano + bass
sect(11.3, 14.1, 'Em', full=False, v=66)
# 14.1 "Too late": stop, one low note
bass.append([14.1, 28, 2.0, 92]); ep.append([14.1, 55, 2.2, 58]); ep.append([14.1, 62, 2.2, 52]); kit.append([14.1, 41, 0.3, 70])
sect(16.9, 18.4, 'C', v=78); sect(18.4, 19.8, 'D', v=82); kit.append([19.6, 38, 0.1, 80]); kit.append([19.7, 38, 0.1, 86])
kit.append([19.8, 49, 1.2, 84]); sect(19.8, 22.0, 'G', v=86)
for k in CH['G']: ep.append([22.0, k + 12, 0.7, 80])
bass.append([22.0, 31, 0.7, 96]); kit.append([22.0, 36, 0.2, 84])
spec = {'bpm': 104, 'dur': DUR, 'tracks': [
    {'name': 'clavinet', 'program': 7, 'sec': True, 'gain': 0.55, 'notes': clav},
    {'name': 'electric piano', 'program': 4, 'sec': True, 'gain': 0.8, 'notes': ep},
    {'name': 'muted guitar', 'program': 28, 'sec': True, 'gain': 0.6, 'notes': gtr},
    {'name': 'finger bass', 'program': 33, 'sec': True, 'gain': 0.6, 'notes': bass},
    {'name': 'kit', 'drums': True, 'program': 0, 'sec': True, 'gain': 0.75, 'notes': kit}]}
json.dump(spec, open('music.json', 'w')); print({t['name']: len(t['notes']) for t in spec['tracks']})
