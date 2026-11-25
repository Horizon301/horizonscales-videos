"""music.json for "8:47 PM" v3. A plain 4-bar loop that ignores the picture: 96 BPM, one chord per bar (2.5 s), the same
drum, bass and electric-piano pattern in every bar. NO accent, crash, fill or extra note on scene changes. The only changes
in the whole piece: the loop moves from A minor to C major at the bar line nearest the story's turn, and one last chord
on the end card. Render: python3 ../../kit/sound/sf_render.py music.json audio/band.wav"""
import json
BPM = 96; B = 60 / BPM; BAR = 4 * B; DUR = 20.6
CH = {'Am': [57, 60, 64], 'F': [53, 57, 60], 'C': [55, 60, 64], 'G': [55, 59, 62]}
ROOT = {'Am': 33, 'F': 29, 'C': 36, 'G': 31}
BARS = ['Am', 'F', 'Am', 'C', 'F', 'G', 'Am', 'F']          # bar 3 starts at 7.5 s, right at the turn (7.7 s)
ep, vib, bass, kit = [], [], [], []
R = lambda x: round(x, 4)
for n, ch in enumerate(BARS):
    t0 = n * BAR
    if t0 >= 19.3: break
    for j, k in enumerate(CH[ch]): ep.append([R(t0 + 0.012 * j), k + 12, BAR * 0.98, 58])          # one held chord per bar
    for b in range(4):
        t = t0 + b * B
        if t >= 19.3: break
        bass.append([R(t), ROOT[ch] + (7 if b == 2 else 0), B * 0.9, 80 if b == 0 else 70])
        kit.append([R(t), 36 if b % 2 == 0 else 37, 0.2, 78 if b % 2 == 0 else 62])
        kit.append([R(t), 42, 0.1, 46]); kit.append([R(t + B / 2), 42, 0.1, 36])
        if b in (1, 3): ep.append([R(t + B / 2), CH[ch][1] + 12, B * 0.4, 44])                      # the same soft off-beat note every bar
# one quiet vibraphone line that repeats every two bars (same notes, on the beat)
for n in range(0, 8, 2):
    t0 = n * BAR
    if t0 + 2 * B >= 19.3: break
    for b, k in ([(0, 79), (1.5, 76), (3, 72)] if n >= 4 else [(0, 76), (1.5, 72), (3, 69)]): vib.append([R(t0 + b * B), k, B * 1.2, 50])
END = 31 * B
for j, k in enumerate([48, 55, 60, 64]): ep.append([R(END + 0.015 * j), k + 12, 1.2, 74])
bass.append([R(END), 24, 1.2, 88]); kit.append([R(END), 36, 0.2, 84]); vib.append([R(END), 84, 1.2, 60])
spec = {'bpm': BPM, 'dur': DUR, 'tracks': [
    {'name': 'electric piano', 'program': 4, 'sec': True, 'gain': 1.0, 'notes': ep},
    {'name': 'vibraphone', 'program': 11, 'sec': True, 'gain': 0.7, 'notes': vib},
    {'name': 'finger bass', 'program': 33, 'sec': True, 'gain': 1.5, 'notes': bass},
    {'name': 'room kit', 'drums': True, 'program': 8, 'sec': True, 'gain': 0.8, 'notes': kit}]}
json.dump(spec, open('music.json', 'w')); print({t['name']: len(t['notes']) for t in spec['tracks']})
