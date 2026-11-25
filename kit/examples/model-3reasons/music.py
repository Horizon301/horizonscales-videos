"""music.json for "On the roof". A plain 4-bar loop that ignores the picture: 100 BPM, one chord per bar (2.4 s), the same
drum, bass, guitar and marimba pattern in every bar from 0 s to 36 s, then one last chord on the end card. Nothing is timed
to a cut or a caption. Render: python3 ../../kit/sound/sf_render.py music.json audio/band.wav"""
import json
BPM = 100; B = 60 / BPM; BAR = 4 * B; DUR = 29.3; NB = 11
CH = {'C': [48, 55, 60, 64], 'Am': [45, 52, 57, 60], 'F': [41, 53, 57, 60], 'G': [43, 55, 59, 62]}
ROOT = {'C': 36, 'Am': 33, 'F': 29, 'G': 31}
LOOP = ['C', 'Am', 'F', 'G']
MEL = {'C': [(0, 76), (1.5, 72), (3, 67)], 'Am': [(0, 72), (1.5, 69), (3, 64)], 'F': [(0, 72), (1.5, 69), (3, 65)], 'G': [(0, 74), (1.5, 71), (3, 67)]}
gtr, mar, bass, kit = [], [], [], []
R = lambda x: round(x, 4)
for n in range(NB):
    ch = LOOP[n % 4]; t0 = n * BAR
    for j, k in enumerate(CH[ch]): gtr.append([R(t0 + 0.02 * j), k + 12, BAR * 0.96, 56])         # one soft strum per bar
    for b in range(4):
        t = t0 + b * B
        bass.append([R(t), ROOT[ch] + (7 if b == 2 else 0), B * 0.9, 78 if b == 0 else 68])
        kit.append([R(t), 36 if b % 2 == 0 else 37, 0.2, 74 if b % 2 == 0 else 58])
        kit.append([R(t), 42, 0.1, 44]); kit.append([R(t + B / 2), 42, 0.1, 34])
    for b, k in MEL[ch]: mar.append([R(t0 + b * B), k, B * 1.1, 52])
END = NB * BAR
for j, k in enumerate(CH['C']): gtr.append([R(END + 0.02 * j), k + 12, 2.4, 70])
bass.append([R(END), 36, 1.8, 84]); kit.append([R(END), 36, 0.2, 80]); mar.append([R(END), 84, 1.5, 58])
spec = {'bpm': BPM, 'dur': DUR, 'tracks': [
    {'name': 'steel guitar', 'program': 25, 'sec': True, 'gain': 1.0, 'notes': gtr},
    {'name': 'marimba', 'program': 12, 'sec': True, 'gain': 0.7, 'notes': mar},
    {'name': 'acoustic bass', 'program': 32, 'sec': True, 'gain': 0.6, 'notes': bass},
    {'name': 'room kit', 'drums': True, 'program': 8, 'sec': True, 'gain': 0.8, 'notes': kit}]}
json.dump(spec, open('music.json', 'w')); print({t['name']: len(t['notes']) for t in spec['tracks']})
