"""Writes music.json for "Full Hands": nylon guitar, cello, oboe, brush kit (warm bossa-folk, 100 BPM, A minor -> C major).
Soft picking under her three rings to you; the band stops on "No answer" (one low cello note); thin guitar while she looks
at her list; side-stick on the tap; a held oboe note while she calls the next one; the full band lifts in C major on
"Hello, flooring!" and "Booked"; thin and minor when you call back; it stops on her text (low cello, a falling oboe line);
builds again under the question and lands on a C major chord on the end card.
Render: python3 ../../kit/sound/sf_render.py music.json audio/band.wav"""
import json
B = 60 / 100; DUR = 23.4
CH = {'Am': [57, 60, 64], 'F': [53, 57, 60], 'C': [48, 52, 55], 'G': [55, 59, 62], 'Dm': [50, 53, 57], 'Em': [52, 55, 59]}
ROOT = {'Am': 45, 'F': 41, 'C': 36, 'G': 43, 'Dm': 38, 'Em': 40}
gtr, cello, oboe, kit = [], [], [], []
R = lambda x: round(x, 4)
def sect(t0, t1, ch, lvl=2, v=76):
    # lvl 3 full + oboe, 2 guitar + cello + brushes, 1 guitar only, 0 held cello note
    if lvl == 0: cello.append([R(t0), ROOT[ch], t1 - t0, v]); return
    t, b = t0, 0
    if lvl >= 2: cello.append([R(t0), ROOT[ch] + 12, t1 - t0, v - 10])
    while t < t1 - 0.05:
        k = CH[ch][[0, 2, 1, 2][b % 4]] + (12 if b % 8 in (3, 7) else 0)
        if lvl >= 2 or b % 2 == 0: gtr.append([R(t), k, B * 0.6, v - (0 if b % 2 == 0 else 14)])
        if b % 4 == 0: gtr.append([R(t), ROOT[ch] + 12, B * 0.9, v])
        if lvl >= 2:
            kit.append([R(t), 42 if b % 2 else 44, 0.05, 40 if b % 2 else 50])   # brushes swish
            if b % 4 == 2: kit.append([R(t), 38, 0.1, v - 18])
            if b % 8 == 0: kit.append([R(t), 36, 0.1, v - 10])
        t += B / 2; b += 1
    if lvl == 3:
        mel = [CH[ch][2] + 12, CH[ch][1] + 12, CH[ch][2] + 12, CH[ch][0] + 24]
        for i, k in enumerate(mel):
            if t0 + i * B < t1 - 0.1: oboe.append([R(t0 + i * B), k, B * 0.9, v - 8])
sect(0.0, 1.45, 'Am', 2, 70); sect(1.45, 2.9, 'F', 2, 70); sect(2.9, 4.35, 'C', 2, 72); sect(4.35, 5.8, 'G', 2, 72)
sect(5.8, 6.6, 'Am', 0, 74)                                          # "No answer": the band stops
sect(6.6, 7.5, 'Dm', 1, 64); sect(7.5, 8.1, 'Em', 1, 64)            # she looks at her list
kit.append([8.1, 37, 0.1, 96])                                       # side-stick on the tap
oboe.append([8.4, 76, 1.5, 58]); cello.append([8.4, 43, 1.6, 60])    # calling the next one
sect(10.0, 11.2, 'C', 3, 82); kit.append([10.0, 49, 0.3, 70])        # "Hello, flooring!"
sect(11.2, 12.5, 'F', 3, 82); sect(12.5, 13.8, 'C', 3, 84)           # Booked
sect(13.8, 15.2, 'Am', 1, 64)                                        # you call back
sect(15.2, 17.0, 'Am', 0, 70)                                        # her text: stops
for i, k in enumerate([76, 74, 72, 69]): oboe.append([R(15.4 + i * 0.4), k, 0.42, 62])
sect(17.0, 18.0, 'Am', 2, 72); sect(18.0, 19.0, 'F', 2, 74); sect(19.0, 20.4, 'G', 2, 78)
kit.append([20.0, 38, 0.1, 80]); kit.append([20.2, 38, 0.1, 86])
sect(20.4, 21.6, 'C', 3, 86); sect(21.6, 22.6, 'F', 3, 84)
for k in CH['C']: gtr.append([22.6, k + 12, 0.8, 84])
oboe.append([22.6, 76, 0.8, 74]); cello.append([22.6, 36, 0.8, 86]); kit.append([22.6, 49, 0.4, 70])
spec = {'bpm': 100, 'dur': DUR, 'tracks': [
    {'name': 'nylon guitar', 'program': 24, 'sec': True, 'gain': 0.9, 'notes': gtr},
    {'name': 'cello', 'program': 42, 'sec': True, 'gain': 0.55, 'notes': cello},
    {'name': 'oboe', 'program': 68, 'sec': True, 'gain': 0.45, 'notes': oboe},
    {'name': 'brush kit', 'drums': True, 'program': 40, 'sec': True, 'gain': 0.7, 'notes': kit}]}
json.dump(spec, open('music.json', 'w')); print({t['name']: len(t['notes']) for t in spec['tracks']})
