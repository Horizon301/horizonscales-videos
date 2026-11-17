"""Writes music.json for "Spot It": a 1950s diner rock'n'roll band: honky-tonk piano, tenor sax, picked electric bass
and a standard kit with hand claps (swung shuffle, 132 BPM, B-flat major).
Intro boogie under the hook; a tiptoe walking bass while the magnifier hunts; stop-time on "Give up?"; crash and the
full band with a sax riff on the reveal; a sax honk on "2019"; thin and minor under the thought bubble; back in on the
call; light piano + bass while the site scrolls; F7 left open on the question; home on the end card.
Render: python3 ../../kit/sound/sf_render.py music.json audio/band.wav"""
import json
B = 60 / 132
SW = B * 2 / 3                       # swung off-beat
DUR = 23.5
CH = {'Bb': [58, 62, 65], 'Eb': [58, 63, 67], 'F': [57, 60, 65], 'F7': [57, 63, 65], 'Gm': [58, 62, 67], 'Cm': [58, 63, 67], 'Bb7': [56, 62, 65]}
ROOT = {'Bb': 34, 'Eb': 39, 'F': 41, 'F7': 41, 'Gm': 43, 'Cm': 36, 'Bb7': 34}
pno, sax, bass, kit = [], [], [], []
R = lambda x: round(x, 4)

def shuffle(t0, t1, chords, full=True, vel=82, piano=True, snare=True):
    """swung shuffle: walking bass (root, 3rd, 5th, 6th), piano off-beat chords, hats swung, kick 1/3, snare/clap 2/4."""
    t, i = t0, 0
    while t < t1 - 0.05:
        ch = chords[i % len(chords)]; r = ROOT[ch]
        for b, iv in enumerate([0, 4 if ch not in ('Gm', 'Cm') else 3, 7, 9]):
            tb = t + b * B
            if tb >= t1 - 0.03: break
            bass.append([R(tb), r + iv, B * 0.8, vel + 6])
            kit.append([R(tb), 42, 0.08, 46]); kit.append([R(tb + SW), 42, 0.06, 34])
            if full: kit.append([R(tb), 36 if b % 2 == 0 else 38, 0.15, 76 if b % 2 == 0 else 62 if snare else 0])
            if full and b % 2 and snare: kit.append([R(tb), 39, 0.1, 54])
            if piano:
                for k in CH[ch]: pno.append([R(tb + SW), k + 12, B * 0.28, 58 if full else 48])
        t += 4 * B; i += 1

def hit(t, ch, v=96, crash=True, saxhit=True):
    for k in CH[ch]: pno.append([R(t), k, 0.5, v - 16]); pno.append([R(t), k + 12, 0.5, v - 20])
    if saxhit: sax.append([R(t), CH[ch][-1] + 5 if ch != 'F7' else 63, 0.4, v - 6])
    bass.append([R(t), ROOT[ch], 0.45, 104]); kit.append([R(t), 36, 0.2, 100])
    if crash: kit.append([R(t), 49, 1.0, 82])

def mel(track, t0, notes, v=88):
    t = t0
    for key, ln in notes:
        if key: track.append([R(t), key, ln * B * 0.92, v])
        t += ln * B

# 0-2.0 hook: boogie-woogie left hand + light kit, a sax pickup
for j in range(4):
    t = j * B
    for iv in (0, 7):
        pno.append([R(t), 46 + [0, 4, 7, 9][j] + (iv and 0), B * 0.5, 70]); pno.append([R(t + SW), 46 + [0, 4, 7, 9][j], B * 0.3, 56])
    kit.append([R(t), 42, 0.08, 50]); kit.append([R(t + SW), 42, 0.06, 36]); kit.append([R(t), 36 if j % 2 == 0 else 38, 0.15, 70])
hit(0.0, 'Bb', 92, crash=False, saxhit=False)
mel(sax, 4 * B, [(65, .5), (67, .5), (70, 1)], 84)
# 2.0-5.6 the hunt: tiptoe walking bass, hats, side stick, soft piano
hit(2.0, 'Bb', 88, crash=False, saxhit=False); shuffle(2.0, 3.8, ['Bb', 'Eb'], full=False, vel=72)
for k in range(4): kit.append([R(2.0 + (2 * k + 1) * B), 37, 0.08, 60])
hit(3.8, 'Eb', 88, crash=False, saxhit=False); shuffle(3.8, 5.6, ['Eb', 'Bb'], full=False, vel=74)
for k in range(4): kit.append([R(3.8 + (2 * k + 1) * B), 37, 0.08, 64])
# 5.6 "Give up?": stop-time; a sax question falls, then the bass walks up into the reveal
hit(5.6, 'Gm', 92, crash=False, saxhit=False)
mel(sax, 5.6, [(74, .5), (72, .5), (70, 1), (67, 1.5)], 86)
for i, k in enumerate([34, 36, 38, 39, 40, 41]): bass.append([R(6.35 + i * 0.13), k, 0.12, 74 + i * 4])
for i in range(5): kit.append([R(6.5 + i * 0.13), 38, 0.08, 50 + i * 9])
# 7.2 reveal: crash, full band, sax riff
hit(7.2, 'Bb', 106); shuffle(7.2, 9.2, ['Bb', 'Eb'])
mel(sax, 7.2, [(70, .5), (72, .5), (74, .5), (77, 1), (74, .5), (77, 1)], 96)
# 9.2 "2019": a sax honk, groove on
hit(9.2, 'F', 100); shuffle(9.2, 11.2, ['F', 'Bb'])
mel(sax, 9.2, [(53, .5), (53, .5), (0, .5), (53, 1)], 100)
# 11.2 thought bubble: thin and minor, piano tremolo, bass only on 1 and 3
hit(11.2, 'Gm', 84, crash=False, saxhit=False)
for k in range(8): pno.append([R(11.2 + k * B / 2), 79 if k % 2 else 74, B * 0.4, 50])
for k in range(8): pno.append([R(12.1 + k * B / 2), 79 if k % 2 else 75, B * 0.4, 50])
for t in (11.2, 11.2 + 2 * B, 12.1, 12.1 + 2 * B): bass.append([R(t), 43 if t < 12 else 36, B * 1.5, 72])
for t in (11.2 + B, 11.2 + 3 * B, 12.1 + B, 12.1 + 3 * B): kit.append([R(t), 37, 0.08, 52])
# 13.2 she calls the other one: band back in, a bit lower (the ringback sits on top)
hit(13.2, 'Eb', 98); shuffle(13.2, 15.2, ['Eb', 'Bb'], vel=74)
# 15.2 the tip: piano + bass + hats, a piano glissando down while the page scrolls
hit(15.2, 'Bb', 88, crash=False, saxhit=False); shuffle(15.2, 17.4, ['Bb', 'Gm'], full=False, vel=70)
for i in range(14): pno.append([R(15.5 + i * 0.07), 96 - [0, 2, 4, 5, 7, 9, 11][i % 7] - 12 * (i // 7), 0.1, 60])
# 17.4 the question: Eb to F7, left open; sax asks
hit(17.4, 'Eb', 96); shuffle(17.4, 18.7, ['Eb'], vel=78)
hit(18.7, 'F7', 94, crash=False); shuffle(18.7, 19.8, ['F7'], vel=78)
mel(sax, 17.4, [(70, .5), (72, .5), (74, 1), (75, .5), (74, .5), (72, 1), (69, 1.5)], 90)
# 19.8 end card: home to B-flat, sax tag, final hit and ring out
hit(19.8, 'Bb', 104); shuffle(19.8, 21.8, ['Bb', 'Eb'], vel=80)
mel(sax, 19.8, [(77, .5), (74, .5), (70, .5), (72, .5), (74, 1), (70, 1.5)], 90)
hit(21.8, 'Bb', 100); bass.append([21.8, 22, 1.5, 100]); sax.append([21.8, 70, 1.4, 86])

spec = {'bpm': 132, 'dur': DUR, 'tracks': [
    {'name': 'honky-tonk piano', 'program': 3, 'sec': True, 'gain': 0.8, 'notes': pno},
    {'name': 'tenor sax', 'program': 66, 'sec': True, 'gain': 0.85, 'notes': sax},
    {'name': 'picked bass', 'program': 34, 'sec': True, 'gain': 1.05, 'notes': bass},
    {'name': 'kit + claps', 'drums': True, 'program': 0, 'sec': True, 'gain': 0.85, 'notes': kit},
]}
json.dump(spec, open('music.json', 'w'))
print('music.json written:', {t['name']: len(t['notes']) for t in spec['tracks']})
