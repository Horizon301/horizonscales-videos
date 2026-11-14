"""Writes music.json for "The Dead Number": banjo, fiddle, steel-string guitar, finger bass and a room drum kit
(bluegrass-pop, 120 BPM, A major). The band stops dead on "Nothing happens", comes back with a fill when she goes back
to the list, ducks under the ringback, and lands a crash on "He picks up". Hits on every caption change.
Render: python3 ../../kit/sound/sf_render.py music.json audio/band.wav"""
import json
B = 0.5
DUR = 23.5
CH = {'A': [57, 61, 64], 'D': [62, 66, 69], 'E': [59, 64, 68], 'F#m': [54, 57, 61]}
ROOT = {'A': 45, 'D': 38, 'E': 40, 'F#m': 42}
banjo, fiddle, gtr, bass, kit = [], [], [], [], []

def bar(t0, ch, full=True, roll=True, beats=4):
    c = CH[ch]
    roll_keys = [c[0] + 12, c[1] + 12, c[2] + 12, c[1] + 12, c[0] + 12, c[2] + 12, c[1] + 12, c[2] + 12]
    for i in range(beats * 2):
        t = round(t0 + i * B / 2, 4)
        if roll: banjo.append([t, roll_keys[i % 8], 0.3, 78 if i % 2 == 0 else 62])
        if full:
            kit.append([t, 42, 0.1, 52 if i % 2 == 0 else 36])
    for b in range(beats):
        t = round(t0 + b * B, 4)
        if full:
            if b % 2 == 0: kit.append([t, 36, 0.2, 92])
            else: kit.append([t, 38, 0.2, 70])
            gtr.extend([[round(t + 0.01 * j, 4), k, 0.4, 64] for j, k in enumerate(c)] if b % 2 else [])
        bass.append([t, ROOT[ch] + (7 if b % 2 else 0), 0.42, 96])
    if full: gtr.append([round(t0, 4), c[0] - 12, 0.9, 70])

def mel(t0, notes):
    t = t0
    for key, ln in notes:
        if key: fiddle.append([round(t, 4), key, ln * 0.95, 84])
        t += ln

def stick(t, v=110): kit.append([t, 37, 0.15, v])
def crash(t, v=90): kit.append([t, 49, 1.0, v])
def stab(t, ch, v=96):
    for j, k in enumerate(CH[ch]): gtr.append([round(t + 0.008 * j, 4), k, 0.35, v]); banjo.append([round(t + 0.01 * j, 4), k + 12, 0.3, v - 8])

# 0-4: hook and "she taps your number" (taps land on side stick)
bar(0, 'A'); bar(2, 'D')
mel(0, [(76, .5), (78, .25), (81, .25), (83, .5), (81, .5)])
mel(2.0, [(81, .5), (0, .75), (78, .25), (76, .5), (74, .5), (0, .5)])
crash(0, 70)
for t in (2.0, 3.25, 3.75): stick(t)
# 4.0-5.5: "Nothing happens": the band stops; a low fiddle note hangs, one banjo plink
crash(4.0, 60); kit.append([4.0, 36, 0.2, 96])
fiddle.append([4.0, 64, 1.45, 46]); banjo.append([4.75, 76, 0.4, 54]); banjo.append([5.0, 75, 0.4, 50])
# 5.5-7.5: long press, half-time: bass and banjo, a tick on the Copy bubble
bar(5.5, 'F#m', full=False); kit.append([5.5, 36, 0.2, 80]); kit.append([5.95, 76, 0.12, 70]); kit.append([6.5, 38, 0.2, 54])
mel(5.5, [(73, 1.0), (71, .5), (69, .5)])
for i, t in enumerate([7.0, 7.125, 7.25, 7.375]): kit.append([t, 38, 0.1, 60 + i * 10])                 # fill into "go back"
# 7.5-13.5: back to the list, the Call button, ringback, he picks up
bar(7.5, 'A'); bar(9.5, 'E')
crash(7.5, 80); stab(7.5, 'A')
mel(7.5, [(81, .25), (83, .25), (85, .5), (83, .5), (81, .5), (78, .5), (81, .5)])
crash(9.5, 86); stick(9.5, 100); stab(9.5, 'E')
mel(9.5, [(80, .5), (0, 1.5)])
# ringback 10.0-11.5 (score.mjs adds the tone): the band thins to bass and soft hats
for i in range(6): bass.append([round(10.0 + i * 0.25 * 1, 4), 40, 0.2, 70]) if i % 2 == 0 else None
for i in range(6): kit.append([round(10.0 + i * 0.25, 4), 42, 0.1, 30])
kit.append([11.25, 38, 0.1, 50]); kit.append([11.375, 38, 0.1, 62]); kit.append([11.5, 38, 0.1, 74])
bar(11.6, 'D'); crash(11.6, 96); stab(11.6, 'D', 100)
mel(11.6, [(86, .5), (85, .25), (83, .25), (81, .5), (78, .5), (81, .25), (83, .25), (81, .25), (78, .25)])
bar(13.5, 'A', full=False)
# 13.5: tip, a stop-time hit; then the groove builds back
crash(13.5, 80); stab(13.5, 'A', 100); kit.append([13.5, 36, 0.2, 100])
kit.append([14.5, 36, 0.2, 70]); kit.append([15.0, 38, 0.2, 60])
bar(15.5, 'D'); bar(17.5, 'E'); stick(15.25, 104); stab(15.25, 'D', 90); stab(17.25, 'E', 98); crash(17.25, 84)
mel(15.5, [(78, .5), (81, .5), (83, .5), (85, .5)])
mel(17.5, [(83, .5), (80, .5), (76, .5), (0, .5)])
# 19.5: end card, the band resolves and rings out
bar(19.5, 'A'); crash(19.5, 90); stab(19.5, 'A', 100)
mel(19.5, [(81, .5), (85, .5), (88, 1.0)])
kit.extend([[21.5, 49, 1.6, 84], [21.5, 36, 0.2, 96]])
for j, k in enumerate([45, 57, 61, 64, 69]): gtr.append([round(21.5 + j * 0.015, 4), k, 1.6, 90])
banjo.extend([[21.5, 81, 1.2, 80], [21.52, 85, 1.2, 76], [21.54, 88, 1.2, 74]])
fiddle.append([21.5, 81, 1.6, 84]); bass.append([21.5, 33, 1.6, 104])

spec = {'bpm': 120, 'dur': DUR, 'tracks': [
    {'name': 'banjo', 'program': 105, 'sec': True, 'gain': 0.9, 'notes': banjo},
    {'name': 'fiddle', 'program': 110, 'sec': True, 'gain': 0.85, 'notes': fiddle},
    {'name': 'steel guitar', 'program': 25, 'sec': True, 'gain': 0.8, 'notes': gtr},
    {'name': 'finger bass', 'program': 33, 'sec': True, 'gain': 1.1, 'notes': bass},
    {'name': 'room kit', 'drums': True, 'program': 8, 'sec': True, 'gain': 0.75, 'notes': kit},
]}
json.dump(spec, open('music.json', 'w'))
print('music.json written:', {t['name']: len(t['notes']) for t in spec['tracks']})
