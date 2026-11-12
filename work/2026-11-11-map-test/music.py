"""Writes music.json for "Not You": electric piano, upright bass, brush kit, one trombone, vibraphone at the end. 88 BPM, D minor.
All times in seconds so the hits land on the picture: route starts 2.2, pin 5.1, "Not you." 5.7, last caption 8.4, end card 11.6."""
import json
BPM = 88; B = 60 / BPM
ep, bass, kit, bone, vib = [], [], [], [], []
CH = {'Dm7': [50, 57, 60, 65], 'Gm7': [55, 58, 62, 65], 'A7': [57, 61, 64, 67], 'Bb': [58, 62, 65, 69], 'F': [53, 57, 60, 65]}
ROOT = {'Dm7': 38, 'Gm7': 43, 'A7': 45, 'Bb': 34, 'F': 41}
def chord(t, name, ln, vel=62):
    for i, n in enumerate(CH[name]): ep.append([t + i * 0.015, n, ln, vel - i * 2])
def bar(t0, name, stop, soft=1.0, drums=True):
    for o in (0, 1.5, 2.5):
        if t0 + o * B < stop: chord(t0 + o * B, name, 0.55 if o else 0.9, int((66 if o == 0 else 54) * soft))
    r = ROOT[name]
    for o, k, v in ((0, r, 96), (1.5, r, 78), (2, r + 7, 86), (3, r + 10, 78)):
        if t0 + o * B < stop: bass.append([t0 + o * B, k, 0.5, int(v * soft)])
    if not drums: return
    for i in range(8):
        t = t0 + i * B / 2
        if t >= stop: break
        kit.append([t, 42, 0.1, int((44 if i % 2 else 58) * soft)])
        if i in (0, 5): kit.append([t, 36, 0.2, int(84 * soft)])
        if i in (2, 6): kit.append([t, 38, 0.2, int(60 * soft)])
# 0 – 5.1: she is on her way. Dm7 then Gm7: the tension builds toward the pin.
kit.append([0, 49, 1.2, 60]); 
for i, name in enumerate(['Dm7', 'Gm7']): bar(i * 4 * B, name, 5.05)
for t in (2.4,): kit.append([t, 37, 0.1, 80])                     # card changes: a side-stick
# 5.1: the pin lands. The band stops on one low note.
kit += [[5.1, 36, 0.3, 100], [5.1, 37, 0.1, 90]]; bass.append([5.1, 33, 0.55, 100])
# 5.7: "Not you." A trombone slides down three notes.
bone += [[5.7, 62, 0.42, 96], [6.15, 61, 0.42, 88], [6.6, 60, 1.1, 82]]
bass.append([5.7, 38, 1.8, 80]); kit.append([5.7, 51, 0.6, 50])
# 7.7 – 11.6: the groove comes back, quieter, and settles.
t = 7.7
for name in ['Bb', 'F']: bar(t, name, 11.5, soft=0.8); t += 4 * B
kit.append([8.4, 37, 0.1, 80])
# 11.6: end card. One warm F chord, vibraphone on top.
kit.append([11.6, 49, 1.5, 52]); chord(12.1, 'F', 3.0, 64); bass.append([12.1, 29, 2.8, 92]); kit.append([12.1, 36, 0.3, 80])
for i, n in enumerate([65, 69, 72, 77]): vib.append([12.1 + i * 0.16, n, 2.4, 74 - i * 5])
json.dump({'bpm': BPM, 'dur': 15.6, 'tracks': [
    {'name': 'electric piano', 'program': 4, 'sec': True, 'gain': 1.1, 'notes': ep},
    {'name': 'upright bass', 'program': 32, 'sec': True, 'gain': 0.62, 'notes': bass},
    {'name': 'brush kit', 'drums': True, 'program': 40, 'sec': True, 'gain': 1.2, 'notes': kit},
    {'name': 'trombone', 'program': 57, 'sec': True, 'gain': 1.0, 'notes': bone},
    {'name': 'vibraphone', 'program': 11, 'sec': True, 'gain': 0.8, 'notes': vib}]}, open('music.json', 'w'))
