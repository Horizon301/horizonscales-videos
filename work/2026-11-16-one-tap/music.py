"""Writes music.json for "One Tap": steel drums, slap bass, clean electric guitar and a standard kit with congas
(calypso-pop, 108 BPM, E-flat major). The congas and a high agogo count down 3-2-1, the band stops for "time", a crash
lands on her tap, the band thins to bass and rim on A and B, opens up on C, goes light under the typing, asks the
question on F minor to B-flat, and resolves on the end card.
Render: python3 ../../kit/sound/sf_render.py music.json audio/band.wav"""
import json
B = 60 / 108
DUR = 23.0
CH = {'Eb': [63, 67, 70], 'Ab': [63, 68, 72], 'Bb': [62, 65, 70], 'Cm': [63, 67, 72], 'Fm': [65, 68, 72], 'Gm': [62, 67, 70]}
ROOT = {'Eb': 39, 'Ab': 44, 'Bb': 46, 'Cm': 36, 'Fm': 41, 'Gm': 43}
drum, bass, gtr, kit = [], [], [], []
R = lambda x: round(x, 4)

def groove(t0, t1, chords, full=True, vel=84):
    """calypso groove: bass root-fifth on 1 and the and of 2, guitar off-beat skank, kick/hat, congas."""
    t, i = t0, 0
    while t < t1 - 0.05:
        ch = chords[i % len(chords)]; r = ROOT[ch]
        bass.append([R(t), r, B * 0.8, vel + 8]); bass.append([R(t + 1.5 * B), r + 7, B * 0.45, vel])
        if t + 3 * B < t1: bass.append([R(t + 3 * B), r + 12, B * 0.4, vel - 6])
        for b in range(4):
            tb = t + b * B
            if tb >= t1 - 0.02: break
            for k in CH[ch]: gtr.append([R(tb + B / 2), k - 12, B * 0.3, 56 if full else 48])
            kit.append([R(tb + B / 2), 42, 0.1, 44])
            kit.append([R(tb), 63 if b % 2 else 62, 0.15, 58]); kit.append([R(tb + B * 0.75), 64, 0.12, 46])
            if full: kit.append([R(tb), 36 if b % 2 == 0 else 38, 0.15, 74 if b % 2 == 0 else 60])
        t += 4 * B; i += 1

def hit(t, ch, v=96, crash=True):
    for k in CH[ch]: gtr.append([R(t), k, 0.5, v - 20]); drum.append([R(t), k + 12, 0.5, v - 10])
    bass.append([R(t), ROOT[ch], 0.5, 104]); kit.append([R(t), 36, 0.2, 100])
    if crash: kit.append([R(t), 49, 1.0, 80])

def mel(t0, notes, v=86):
    t = t0
    for key, ln in notes:
        if key: drum.append([R(t), key, ln * 0.9, v])
        t += ln * B

# 0-3.6: countdown. Congas + high agogo on each number, a little steel-drum figure, bass on 1
for t in (0.0, 1.2, 2.4):
    kit.append([t, 67, 0.2, 96]); kit.append([t, 62, 0.15, 80]); kit.append([R(t + 0.6), 68, 0.15, 70])
    bass.append([t, 39 if t < 2 else 46, 0.5, 92])
    for k in CH['Eb' if t < 2 else 'Bb']: gtr.append([R(t + 0.3), k - 12, 0.2, 50]); gtr.append([R(t + 0.9), k - 12, 0.2, 46])
mel(0.0, [(75, .5), (79, .5), (82, 1)]); mel(1.2, [(77, .5), (80, .5), (84, 1)]); mel(2.4, [(79, .5), (82, .5), (86, .5), (84, .5)])
# 3.6: "time": stop, the bass creeps up while the thumb drifts A -> B -> C
hit(3.6, 'Cm', 90, crash=False)
for i, k in enumerate([36, 37, 38, 39, 40, 41, 42, 43]): bass.append([R(3.8 + i * 0.15), k, 0.13, 70 + i * 3])
for i in range(6): kit.append([R(4.0 + i * 0.16), 70, 0.08, 40 + i * 6])
# 5.0: the tap. Big hit, then the groove
hit(5.0, 'Eb', 106)
groove(5.4, 7.2, ['Eb', 'Ab']); hit(5.4, 'Eb', 92, crash=False)
mel(5.4, [(82, .5), (84, .5), (87, 1), (84, .5), (82, .5)])
# 7.2 A (no photo) and 9.0 B (just a logo): thin, minor, bass + rim + congas only
hit(7.2, 'Cm', 90, crash=False); groove(7.2, 9.0, ['Cm'], full=False, vel=72)
for t in (7.2 + B, 7.2 + 3 * B, 9.0 + B, 9.0 + 3 * B): kit.append([R(t), 37, 0.1, 64])
mel(7.5, [(72, 1), (70, 1)], 70)
hit(9.0, 'Ab', 88, crash=False); groove(9.0, 10.8, ['Ab'], full=False, vel=72)
mel(9.3, [(72, 1), (75, 1)], 72)
# 10.8 C (a patio he built): the whole band, bright steel drum line
hit(10.8, 'Eb', 104); groove(10.8, 12.8, ['Eb', 'Bb'])
mel(10.8, [(87, .5), (89, .5), (91, 1), (87, .5), (89, .5), (87, 1)], 94)
# 12.8 "She could see the work."
hit(12.8, 'Ab', 98); groove(12.8, 14.8, ['Ab', 'Bb'])
mel(12.8, [(84, .5), (87, .5), (89, 1), (91, .5), (89, .5), (87, 1)], 90)
# 14.8 tip: light, guitar + congas only (no kick) so the typing is heard
hit(14.8, 'Gm', 84, crash=False); groove(14.8, 16.8, ['Gm', 'Cm'], full=False, vel=70)
# 16.8 the question: F minor to B-flat, left open
hit(16.8, 'Fm', 96); groove(16.8, 19.2, ['Fm', 'Bb'])
mel(16.8, [(80, .5), (82, .5), (84, 1), (82, .5), (84, .5), (86, 1.5)], 90)
# 19.2 end card: home to E-flat and ring out
hit(19.2, 'Eb', 104); groove(19.2, 21.4, ['Eb', 'Ab'], vel=80)
mel(19.2, [(87, .5), (86, .5), (84, .5), (82, .5), (79, 1), (82, 1)], 86)
hit(21.4, 'Eb', 100); drum.append([21.4, 87, 1.4, 90]); bass.append([21.4, 27, 1.4, 100])

spec = {'bpm': 108, 'dur': DUR, 'tracks': [
    {'name': 'steel drums', 'program': 114, 'sec': True, 'gain': 0.85, 'notes': drum},
    {'name': 'slap bass', 'program': 36, 'sec': True, 'gain': 1.1, 'notes': bass},
    {'name': 'clean guitar', 'program': 27, 'sec': True, 'gain': 0.7, 'notes': gtr},
    {'name': 'kit + congas', 'drums': True, 'program': 0, 'sec': True, 'gain': 0.85, 'notes': kit},
]}
json.dump(spec, open('music.json', 'w'))
print('music.json written:', {t['name']: len(t['notes']) for t in spec['tracks']})
