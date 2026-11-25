"""music.json for "Cold wait". A plain 4-bar loop that ignores the picture: 96 BPM, one chord per bar (2.5 s), the same
brush kit, bass, Rhodes and vibraphone pattern in every bar, then one last chord on the end card. Nothing is timed to a cut
or a caption. Render: python3 ../../kit/sound/sf_render.py music.json audio/band.wav"""
import json, sys
BPM = 96; B = 60 / BPM; BAR = 4 * B
DUR = float(sys.argv[1]) if len(sys.argv) > 1 else 30.0; NB = int(sys.argv[2]) if len(sys.argv) > 2 else 11
CH = {'D': [50, 57, 62, 66], 'Bm': [47, 54, 59, 62], 'G': [43, 55, 59, 62], 'A': [45, 52, 57, 61]}
ROOT = {'D': 38, 'Bm': 35, 'G': 31, 'A': 33}
LOOP = ['D', 'Bm', 'G', 'A']
MEL = {'D': [(0, 78), (2, 74)], 'Bm': [(0, 74), (2, 71)], 'G': [(0, 74), (2, 71)], 'A': [(0, 76), (2, 73)]}
keys, vib, bass, kit = [], [], [], []
R = lambda x: round(x, 4)
for n in range(NB):
    ch = LOOP[n % 4]; t0 = n * BAR
    for b in (0, 2):
        for j, k in enumerate(CH[ch]): keys.append([R(t0 + b * B + 0.015 * j), k + 12, B * 1.9, 54 if b == 0 else 46])
    for b in range(4):
        t = t0 + b * B
        bass.append([R(t), ROOT[ch] + (12 if b == 3 else 0), B * 0.85, 76 if b == 0 else 64])
        kit.append([R(t), 36 if b % 2 == 0 else 38, 0.2, 70 if b % 2 == 0 else 52])
        kit.append([R(t), 42, 0.1, 40]); kit.append([R(t + B / 2), 42, 0.1, 30])
    for b, k in MEL[ch]: vib.append([R(t0 + b * B), k, B * 1.6, 48])
END = NB * BAR
for j, k in enumerate(CH['D']): keys.append([R(END + 0.02 * j), k + 12, 2.4, 66])
bass.append([R(END), 38, 1.8, 80]); kit.append([R(END), 36, 0.2, 74]); vib.append([R(END), 86, 1.6, 54])
spec = {'bpm': BPM, 'dur': DUR, 'tracks': [
    {'name': 'rhodes', 'program': 4, 'sec': True, 'gain': 0.9, 'notes': keys},
    {'name': 'vibraphone', 'program': 11, 'sec': True, 'gain': 0.6, 'notes': vib},
    {'name': 'fingered bass', 'program': 33, 'sec': True, 'gain': 0.65, 'notes': bass},
    {'name': 'brush kit', 'drums': True, 'program': 40, 'sec': True, 'gain': 0.75, 'notes': kit}]}
json.dump(spec, open('music.json', 'w')); print({t['name']: len(t['notes']) for t in spec['tracks']})
