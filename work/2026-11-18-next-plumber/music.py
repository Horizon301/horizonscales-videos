"""Writes music.json for "The Next Plumber": a plain, warm trio: grand piano, upright bass, brush kit (96 BPM, C major).
One chord per caption, a clear hit on every change, the band drops out when she hangs up and comes back when the next
plumber picks up. Times in seconds. Render: python3 ../../kit/sound/sf_render.py music.json audio/band.wav"""
import json
B = 60 / 96; DUR = 24.0
CH = {'C': [60, 64, 67], 'Am': [57, 60, 64], 'F': [57, 60, 65], 'G': [59, 62, 67], 'Dm': [57, 62, 65], 'Gsus': [60, 62, 67]}
ROOT = {'C': 36, 'Am': 33, 'F': 29, 'G': 31, 'Dm': 38, 'Gsus': 31}
pno, bass, kit = [], [], []
R = lambda x: round(x, 4)
def sect(t0, t1, ch, full=True, v=78, hit=True):
    if hit:
        for k in CH[ch]: pno.append([R(t0), k, 0.9, v + 8])
        pno.append([R(t0), CH[ch][0] + 12, 0.9, v]); kit.append([R(t0), 36, 0.2, v + 10]); kit.append([R(t0), 49 if full else 51, 0.9, v - 14])
    t, b = t0, 0
    while t < t1 - 0.05:
        if b % 2 == 0: bass.append([R(t), ROOT[ch] + (7 if b % 4 == 2 else 0), B * 0.9, v + 4])
        if b % 2 == 1: pno.append([R(t), CH[ch][(b // 2) % 3] + 12, B * 0.4, v - 22])
        if full:
            kit.append([R(t), 42, 0.06, 44 if b % 2 == 0 else 32])
            if b % 4 == 2: kit.append([R(t), 38, 0.15, v - 22])
        t += B / 2; b += 1
sect(0.0, 2.6, 'C', v=74)
sect(2.6, 5.2, 'Am', full=False, v=70)
# 5.2 she hangs up: one low note, then quiet
pno.append([5.2, 41, 1.6, 78]); pno.append([5.2, 53, 1.6, 64]); bass.append([5.2, 29, 1.4, 84]); kit.append([5.2, 41, 0.3, 80])
for i in range(3): kit.append([R(6.2 + i * B), 37, 0.06, 44])
sect(7.6, 10.4, 'Dm', full=False, v=72)
sect(10.4, 13.0, 'F', v=84)
for i, k in enumerate([72, 76, 79, 84]): pno.append([R(13.0 + i * 0.12), k, 0.5, 84])
sect(13.0, 15.4, 'C', v=86)
sect(15.4, 18.4, 'Am', full=False, v=68)
sect(18.4, 19.7, 'F', v=78); sect(19.7, 21.0, 'Gsus', v=78)
sect(21.0, 23.0, 'C', v=90)
for k in CH['C']: pno.append([23.0, k, 0.9, 84])
bass.append([23.0, 36, 0.9, 90]); kit.append([23.0, 36, 0.2, 86])
spec = {'bpm': 96, 'dur': DUR, 'tracks': [
    {'name': 'grand piano', 'program': 0, 'sec': True, 'gain': 0.95, 'notes': pno},
    {'name': 'upright bass', 'program': 32, 'sec': True, 'gain': 1.0, 'notes': bass},
    {'name': 'brush kit', 'drums': True, 'program': 40, 'sec': True, 'gain': 0.8, 'notes': kit}]}
json.dump(spec, open('music.json', 'w')); print({t['name']: len(t['notes']) for t in spec['tracks']})
