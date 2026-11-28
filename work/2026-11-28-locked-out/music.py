"""music.json for "Locked out". A plain 4-bar loop that ignores the picture: one chord per bar (C-Am-F-G), the same brush kit,
acoustic bass, grand piano and celesta pattern in every bar, then one last chord on the end card. Nothing is timed to a
cut or a caption. Tempo and bar count come from audio/len.json. Render: python3 ../../kit/sound/sf_render.py music.json audio/band.wav"""
import json
L = json.load(open('audio/len.json')); BPM = L['BPM']; DUR = L['DUR']; NB = L['NB']; B = 60 / BPM; BAR = 4 * B
CH = {'C': [48, 55, 60, 64], 'Am': [45, 52, 57, 60], 'F': [41, 48, 57, 60], 'G': [43, 50, 59, 62]}
ROOT = {'C': 36, 'Am': 33, 'F': 29, 'G': 31}
LOOP = ['C', 'Am', 'F', 'G']
MEL = {'C': [(0, 84), (2, 79)], 'Am': [(0, 81), (2, 76)], 'F': [(0, 77), (2, 81)], 'G': [(0, 79), (2, 83)]}
gtr, mar, bass, kit = [], [], [], []
R = lambda x: round(x, 4)
for n in range(NB):
    ch = LOOP[n % 4]; t0 = n * BAR
    for b in range(4):
        t = t0 + b * B
        for j, k in enumerate(CH[ch] if b % 2 == 0 else CH[ch][1:]): gtr.append([R(t + 0.012 * j), k, B * 0.95, 56 if b == 0 else 44])
        bass.append([R(t), ROOT[ch] + (7 if b == 2 else 0), B * 0.85, 76 if b == 0 else 62])
        kit.append([R(t), 36 if b % 2 == 0 else 37, 0.2, 68 if b % 2 == 0 else 50])
        kit.append([R(t), 42, 0.1, 38]); kit.append([R(t + B / 2), 42, 0.1, 28])
    for b, k in MEL[ch]: mar.append([R(t0 + b * B), k, B * 1.5, 46])
END = NB * BAR
for j, k in enumerate(CH['C']): gtr.append([R(END + 0.02 * j), k, 2.8, 124]); gtr.append([R(END + 0.02 * j), k + 12, 2.8, 110])
bass.append([R(END), 36, 2.6, 124]); bass.append([R(END), 48, 2.6, 120]); [gtr.append([R(END + 0.01 * j), k - 12, 2.8, 124]) for j, k in enumerate(CH['C'])]; [mar.append([R(END), k, 2.4, 110]) for k in (72, 88)]; kit.append([R(END), 36, 0.2, 110]); mar.append([R(END), 84, 2.4, 112]); mar.append([R(END), 79, 2.4, 104]); mar.append([R(END), 76, 2.4, 104])
spec = {'bpm': BPM, 'dur': DUR, 'tracks': [
    {'name': 'grand piano', 'program': 0, 'sec': True, 'gain': 0.85, 'notes': gtr},
    {'name': 'celesta', 'program': 8, 'sec': True, 'gain': 0.6, 'notes': mar},
    {'name': 'acoustic bass', 'program': 32, 'sec': True, 'gain': 0.7, 'notes': bass},
    {'name': 'brush kit', 'drums': True, 'program': 40, 'sec': True, 'gain': 0.7, 'notes': kit}]}
json.dump(spec, open('music.json', 'w')); print(BPM, NB, {t['name']: len(t['notes']) for t in spec['tracks']})
