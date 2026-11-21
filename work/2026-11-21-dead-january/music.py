"""Writes music.json for "Dead January": Hammond organ, brass section, glockenspiel, acoustic bass, standard kit
(sunny soul-pop, 112 BPM, A major). Full and busy through June, a brass stab on the declined call, the band thins as the
months flip, and January is just glockenspiel and a held organ chord in A minor; it comes back for the question and end card.
Render: python3 ../../kit/sound/sf_render.py music.json audio/band.wav"""
import json
B = 60 / 112; DUR = 23.4
CH = {'A': [57, 61, 64], 'D': [57, 62, 66], 'E': [56, 59, 64], 'F#m': [57, 61, 66], 'Am': [57, 60, 64], 'F': [57, 60, 65], 'G': [55, 59, 62], 'C': [55, 60, 64], 'Dm': [57, 62, 65]}
ROOT = {'A': 33, 'D': 38, 'E': 40, 'F#m': 42, 'Am': 33, 'F': 41, 'G': 43, 'C': 36, 'Dm': 38}
org, brass, glock, bass, kit = [], [], [], [], []
R = lambda x: round(x, 4)
def sect(t0, t1, ch, lvl=3, v=78):
    # lvl 3 full band, 2 no brass, 1 organ + bass + hats, 0 organ pad + glock only
    for k in CH[ch]: org.append([R(t0), k, t1 - t0, v - 20])
    if lvl >= 1: kit.append([R(t0), 36, 0.2, v + 4])
    t, b = t0, 0
    while t < t1 - 0.05:
        if lvl >= 1 and b % 4 in (0, 3): bass.append([R(t), ROOT[ch] + (7 if b % 8 == 3 else 0), B * 0.45, v + 8])
        if lvl >= 1: kit.append([R(t), 42, 0.05, 38 if b % 2 == 0 else 26])
        if lvl >= 2:
            if b % 4 == 2: kit.append([R(t), 38, 0.1, v - 6])
            if b % 4 == 0 and b > 0: kit.append([R(t), 36, 0.1, v - 6])
            if b % 8 == 7: kit.append([R(t), 54, 0.1, v - 22])
        if lvl >= 3 and b % 8 in (3, 6): brass.append([R(t), CH[ch][(b // 2) % 3] + 12, B * 0.3, v - 10])
        if lvl in (0, 3) and b % 2 == 0: glock.append([R(t), CH[ch][(b // 2) % 3] + 24, B * 0.5, (v - 18) if lvl == 3 else v - 8])
        t += B / 2; b += 1
sect(0.0, 1.5, 'A'); sect(1.5, 3.0, 'D')
kit.append([3.0, 49, 0.9, 70]); sect(3.0, 4.4, 'A', v=82); sect(4.4, 5.8, 'E', v=84)
sect(5.8, 7.05, 'F#m', lvl=1, v=74)                                                     # the call buzzes
for k in [61, 64, 69]: brass.append([7.05, k + 12, 0.5, 84])                              # stab on Decline
kit.append([7.05, 49, 0.9, 80]); sect(7.05, 8.6, 'D', v=82)
# months flip: one chord per month, the band thinning out
for i, (ch, lv, vv) in enumerate([('A', 3, 80), ('E', 2, 76), ('F#m', 2, 72), ('D', 1, 68), ('Dm', 1, 62), ('Am', 0, 60)]):
    t0 = 8.6 + i * 0.5; sect(t0, t0 + 0.5 if i < 5 else 11.6, ch, lvl=lv, v=vv)
sect(11.6, 14.4, 'Am', lvl=0, v=58)                                                        # January
sect(14.4, 15.4, 'F', lvl=0, v=56); sect(15.4, 17.2, 'Dm', lvl=0, v=54)                    # recents, spam
bass.append([17.2, 33, 1.5, 84]); sect(17.2, 18.8, 'F', lvl=1, v=72); sect(18.8, 20.4, 'E', lvl=2, v=78)
kit.append([20.2, 38, 0.1, 80]); kit.append([20.3, 38, 0.1, 86])
kit.append([20.4, 49, 1.2, 84]); sect(20.4, 22.6, 'A', v=86)
for k in CH['A']: org.append([22.6, k + 12, 0.7, 80])
bass.append([22.6, 33, 0.7, 96]); kit.append([22.6, 36, 0.2, 84])
spec = {'bpm': 112, 'dur': DUR, 'tracks': [
    {'name': 'hammond organ', 'program': 16, 'sec': True, 'gain': 0.45, 'notes': org},
    {'name': 'brass section', 'program': 61, 'sec': True, 'gain': 0.55, 'notes': brass},
    {'name': 'glockenspiel', 'program': 9, 'sec': True, 'gain': 0.5, 'notes': glock},
    {'name': 'acoustic bass', 'program': 32, 'sec': True, 'gain': 0.6, 'notes': bass},
    {'name': 'kit', 'drums': True, 'program': 0, 'sec': True, 'gain': 0.75, 'notes': kit}]}
json.dump(spec, open('music.json', 'w')); print({t['name']: len(t['notes']) for t in spec['tracks']})
