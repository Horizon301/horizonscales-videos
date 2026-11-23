"""Writes music.json for "Three Reviews": kalimba, fretless bass, choir aahs, hand percussion (congas, shaker, wood blocks)
(light afro-pop morning groove, 104 BPM, F major). Easy groove while she searches; the band drops for the countdown, with
wood-block ticks on 3, 2, 1 and the bass climbing; a thin questioning kalimba while her thumb hovers; the full band and
choir when she taps C; quiet under the ringback, a lift on Connected; it stops on "The first one was you" (a low D minor
note and held choir), stays soft through "Good work. No reviews.", then builds into the end card.
Render: python3 ../../kit/sound/sf_render.py music.json audio/band.wav"""
import json
B = 60 / 104; DUR = 23.4
CH = {'F': [53, 57, 60], 'C': [52, 55, 60], 'Dm': [50, 53, 57], 'Bb': [50, 53, 58], 'Gm': [50, 55, 58], 'Am': [52, 57, 60]}
ROOT = {'F': 41, 'C': 36, 'Dm': 38, 'Bb': 34, 'Gm': 43, 'Am': 45}
kal, bass, choir, kit = [], [], [], []
R = lambda x: round(x, 4)
def sect(t0, t1, ch, lvl=3, v=78):
    # lvl 3 full + choir, 2 groove, 1 kalimba + shaker only, 0 held choir + one bass note
    if lvl in (0, 3): 
        for k in CH[ch]: choir.append([R(t0), k + 12, t1 - t0, v - 18])
    if lvl == 0: bass.append([R(t0), ROOT[ch], t1 - t0, v]); return
    t, b = t0, 0
    while t < t1 - 0.05:
        if b % 2 == 0 or lvl >= 2: kal.append([R(t), CH[ch][(b * 2) % 3] + 24 + (12 if b % 4 == 3 else 0), B * 0.4, v - (0 if b % 2 == 0 else 16)])
        kit.append([R(t), 70, 0.05, 44 if b % 2 == 0 else 30])
        if lvl >= 2:
            if b % 4 in (0, 3): bass.append([R(t), ROOT[ch] + (0 if b % 4 == 0 else 7), B * 0.45, v + 4])
            if b % 4 == 2: kit.append([R(t), 63, 0.1, v - 6])
            if b % 8 == 5: kit.append([R(t), 64, 0.1, v - 12])
            if b % 4 == 0: kit.append([R(t), 62, 0.1, v - 14])
        t += B / 2; b += 1
sect(0.0, 1.5, 'F', 2, 74); sect(1.5, 3.0, 'C', 2, 74)
# countdown: band out, bass climbs, wood-block ticks on 3, 2, 1 (from timeline TICKS)
for t0, k in [(3.0, 41), (3.6, 43), (4.6, 45), (5.6, 46)]: bass.append([t0, k, 0.9, 80])
for t0 in [3.6, 4.6, 5.6]: kit.append([t0, 76, 0.1, 100]); kit.append([t0 + 0.5, 77, 0.1, 60])
for k in CH['C']: choir.append([3.0, k + 12, 3.6, 40])
sect(6.6, 8.0, 'Dm', 1, 66); sect(8.0, 9.4, 'Gm', 1, 66)         # thumb hovers A, then B
sect(9.4, 9.7, 'C', 1, 70)
kit.append([9.7, 62, 0.1, 96]); kit.append([9.7, 63, 0.1, 96])     # tap on C
sect(9.7, 10.1, 'F', 3, 84)
for k in CH['F']: choir.append([10.1, k + 12, 1.4, 44])            # calling: soft under the ringback
sect(11.5, 12.2, 'F', 3, 84)                                         # Connected
sect(12.2, 15.0, 'Dm', 0, 70)                                        # "The first one was you."
sect(15.0, 16.3, 'Bb', 1, 62); sect(16.3, 17.6, 'C', 1, 64)          # "Good work. No reviews."
sect(17.6, 19.0, 'Dm', 2, 72); sect(19.0, 20.4, 'C', 2, 78)          # "Search your business."
kit.append([20.1, 63, 0.1, 86]); kit.append([20.25, 63, 0.1, 90])
sect(20.4, 21.8, 'F', 3, 86); sect(21.8, 22.6, 'Bb', 3, 84)
for k in CH['F']: kal.append([22.6, k + 24, 0.8, 84]); choir.append([22.6, k + 12, 0.8, 66])
bass.append([22.6, 41, 0.8, 92]); kit.append([22.6, 62, 0.2, 86])
spec = {'bpm': 104, 'dur': DUR, 'tracks': [
    {'name': 'kalimba', 'program': 108, 'sec': True, 'gain': 0.7, 'notes': kal},
    {'name': 'fretless bass', 'program': 35, 'sec': True, 'gain': 0.8, 'notes': bass},
    {'name': 'choir aahs', 'program': 52, 'sec': True, 'gain': 0.35, 'notes': choir},
    {'name': 'hand percussion', 'drums': True, 'program': 0, 'sec': True, 'gain': 0.7, 'notes': kit}]}
json.dump(spec, open('music.json', 'w')); print({t['name']: len(t['notes']) for t in spec['tracks']})
