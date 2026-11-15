"""Writes music.json for "Three Roofers": muted trumpet, celesta, fretless bass and a jazz kit (cool-jazz noir, 100 BPM,
D minor, opening up to F major when the third roofer picks up). The band thins under every ringback so the ring is heard,
stops on "The mailbox is full.", hits on every caption change, and resolves on the end card.
Render: python3 ../../kit/sound/sf_render.py music.json audio/band.wav"""
import json
B = 0.6
DUR = 24.0
CH = {'Dm': [62, 65, 69, 72], 'Gm': [55, 58, 62, 65], 'A7': [57, 61, 64, 67], 'Bb': [58, 62, 65, 69],
      'F': [60, 65, 69, 72], 'C': [60, 64, 67, 70], 'Fmaj': [57, 60, 64, 65]}
ROOT = {'Dm': 38, 'Gm': 43, 'A7': 45, 'Bb': 46, 'F': 41, 'C': 48, 'Fmaj': 41}
tpt, cel, bass, kit = [], [], [], []

def walk(t0, ch, beats=4, vel=92):                  # walking bass: root, fifth, octave-ish, approach
    r = ROOT[ch]; steps = [0, 7, 12, 10]
    for b in range(beats): bass.append([round(t0 + b * B, 4), r + steps[b % 4], B * 0.9, vel])
def ride(t0, beats=4, vel=58, full=True):           # swung ride, hat on 2 and 4, soft kick
    for b in range(beats):
        t = round(t0 + b * B, 4)
        kit.append([t, 51, 0.2, vel])
        if b % 2: kit.append([round(t + B * 0.66, 4), 51, 0.15, vel - 16]); kit.append([t, 42, 0.1, vel - 10])
        if full and b % 2 == 0: kit.append([t, 36, 0.2, 60])
def comp(t, ch, v=58, ln=0.35):                     # celesta chord stab
    for j, k in enumerate(CH[ch]): cel.append([round(t + 0.01 * j, 4), k + 12, ln, v])
def mel(t0, notes, v=84):
    t = t0
    for key, ln in notes:
        if key: tpt.append([round(t, 4), key, ln * 0.92, v])
        t += ln
def hit(t, ch, v=96, crash=True):
    comp(t, ch, v, 0.5); bass.append([t, ROOT[ch] - 12 if ROOT[ch] > 40 else ROOT[ch], 0.5, 104])
    kit.append([t, 36, 0.2, 100]); kit.append([t, 38, 0.2, 80])
    if crash: kit.append([t, 49, 1.2, 82])

# 0-2.0: hook. Sneaky walk, trumpet asks a question
walk(0.0, 'Dm'); walk(1.2, 'Gm', 2); ride(0.0, 4, 54)
mel(0.0, [(69, .3), (72, .3), (74, .6), (72, .3), (69, .5)])
comp(0.0, 'Dm', 52); comp(1.2, 'Gm', 50)
# 2.0-4.6: first call. Hit, then thin under the rings (bass on 1, soft ride)
hit(2.0, 'Dm', 90, crash=False); kit.append([2.0, 49, 0.8, 60])
for t in (2.6, 3.2, 3.8, 4.4): bass.append([t, 38, 0.4, 70]); kit.append([t, 51, 0.15, 36])
cel.append([3.3, 81, 0.25, 46]); cel.append([4.5, 80, 0.25, 46])
# 4.6: "The mailbox is full." the band stops; one low muted trumpet fall, a low bass hold
hit(4.6, 'A7', 92, crash=False); tpt.append([4.7, 64, 0.5, 70]); tpt.append([5.2, 61, 0.9, 58]); bass.append([4.6, 33, 1.7, 70])
kit.append([6.0, 38, 0.1, 50]); kit.append([6.15, 38, 0.1, 62]); kit.append([6.3, 38, 0.1, 74])      # pickup fill
# 6.4-8.2: second roofer, groove back but quiet under the rings
hit(6.4, 'Gm', 92); walk(6.4, 'Gm', 3, 78); ride(6.4, 3, 40, full=False)
mel(6.4, [(74, .3), (77, .3), (76, .6)], 74)
# 8.2-10.6: "It just rings." the celesta ticks the same note, bass pedals, tension
hit(8.2, 'Bb', 82, crash=False)
for i in range(8): cel.append([round(8.2 + i * 0.3, 4), 81 if i % 2 == 0 else 79, 0.2, 40 + i * 3]);
for t in (8.8, 9.4, 10.0): bass.append([t, 45, 0.5, 74]); kit.append([t, 51, 0.15, 34])
for i, t in enumerate([10.2, 10.3, 10.4, 10.5]): kit.append([t, 38, 0.1, 54 + i * 10])
# 10.6-12.0: third roofer, one ring; held breath
hit(10.6, 'A7', 94); bass.append([11.2, 45, 0.6, 76]); kit.append([11.2, 51, 0.15, 40]); kit.append([11.8, 51, 0.15, 44])
tpt.append([10.7, 73, 0.4, 76]); tpt.append([11.1, 76, 0.5, 74])
# 12.0-14.0: "Hello, roofing!" F major, the whole band, bright trumpet
hit(12.0, 'F', 104); walk(12.0, 'F', 2, 96); walk(13.2, 'C', 2, 96); ride(12.0, 4, 70)
comp(12.6, 'F', 64); comp(13.2, 'C', 66); comp(13.8, 'C', 60)
mel(12.0, [(77, .3), (81, .3), (84, .6), (81, .3), (84, .3), (86, .2)], 96)
# 14.0-15.8: next morning: same groove, sunny
hit(14.0, 'Bb', 94); walk(14.0, 'Bb', 1, 92); walk(14.6, 'F', 2, 92); ride(14.0, 3, 64)
mel(14.0, [(86, .6), (84, .3), (81, .3), (77, .6)], 90); comp(14.6, 'F', 60); comp(15.2, 'Bb', 58)
# 15.8-17.8: three cards: stop-time hits on each card
hit(15.8, 'Dm', 92); bass.append([15.98, 38, 0.3, 90]); comp(15.98, 'Dm', 72); bass.append([16.16, 41, 0.3, 90]); comp(16.16, 'F', 76)
walk(16.4, 'Gm', 2, 84); ride(16.4, 2, 56); comp(17.0, 'A7', 62)
mel(16.4, [(74, .3), (72, .3), (69, .6)], 80)
# 17.8-20.0: "Which one are you?" the question phrase again, ending on an open chord
hit(17.8, 'Gm', 96); walk(17.8, 'Gm', 2, 88); walk(19.0, 'A7', 2, 88); ride(17.8, 4, 60)
mel(17.8, [(69, .3), (72, .3), (74, .6), (76, .6), (73, .4)], 90); comp(19.0, 'A7', 64)
# 20.0: end card resolves to F major and rings out
hit(20.0, 'F', 100); walk(20.0, 'F', 2, 90); walk(21.2, 'Bb', 2, 88); ride(20.0, 4, 56)
mel(20.0, [(81, .6), (77, .6), (79, .6), (81, .6)], 84)
hit(22.4, 'Fmaj', 96); tpt.append([22.4, 84, 1.4, 86]); bass.append([22.4, 29, 1.5, 100])
for j, k in enumerate([65, 69, 72, 76, 81]): cel.append([round(22.4 + j * 0.03, 4), k, 1.4, 70])

spec = {'bpm': 100, 'dur': DUR, 'tracks': [
    {'name': 'muted trumpet', 'program': 59, 'sec': True, 'gain': 0.9, 'notes': tpt},
    {'name': 'celesta', 'program': 8, 'sec': True, 'gain': 0.85, 'notes': cel},
    {'name': 'fretless bass', 'program': 35, 'sec': True, 'gain': 1.15, 'notes': bass},
    {'name': 'jazz kit', 'drums': True, 'program': 32, 'sec': True, 'gain': 0.8, 'notes': kit},
]}
json.dump(spec, open('music.json', 'w'))
print('music.json written:', {t['name']: len(t['notes']) for t in spec['tracks']})
