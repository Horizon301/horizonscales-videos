"""Writes music.json for "Slow Site": vibraphone, steel-string guitar, string section, room kit with shaker
(light indie-folk pop, 100 BPM, E major). Easy groove on the search, then it stalls into one repeating vibraphone note
and a held string chord while your site loads; the tiny page and pop-up get a thin, uneasy guitar; it stops on Back;
the full band comes in when his site loads at once, a crash on Call now, then it drops back to the waiting note on your
site and builds for the end card.  Render: python3 ../../kit/sound/sf_render.py music.json audio/band.wav"""
import json
B = 60 / 100; DUR = 23.4
CH = {'E': [52, 56, 59], 'B': [54, 59, 63], 'C#m': [52, 56, 61], 'A': [52, 57, 61], 'F#m': [54, 57, 61], 'G#m': [56, 59, 63]}
ROOT = {'E': 40, 'B': 47, 'C#m': 49, 'A': 45, 'F#m': 42, 'G#m': 44}
vib, gtr, strg, kit = [], [], [], []
R = lambda x: round(x, 4)
def sect(t0, t1, ch, lvl=3, v=78):
    # lvl 3 full, 2 no strings swell, 1 guitar + shaker, 0 held strings + one ticking vibraphone note
    for k in CH[ch]: strg.append([R(t0), k + (12 if lvl >= 2 else 0), t1 - t0, v - (26 if lvl >= 2 else 14)])
    t, b = t0, 0
    while t < t1 - 0.05:
        if lvl == 0:
            if b % 2 == 0: vib.append([R(t), CH[ch][2] + 12, B * 0.4, v - 10])
        else:
            if b % 2 == 0 or lvl >= 2: gtr.append([R(t), (ROOT[ch] if b % 4 == 0 else CH[ch][b % 3]) , B * 0.45, v - (0 if b % 4 == 0 else 14)])
            kit.append([R(t), 70, 0.05, 40 if b % 2 == 0 else 28])
            if lvl >= 2:
                if b % 4 == 0: kit.append([R(t), 36, 0.2, v])
                if b % 4 == 2: kit.append([R(t), 38, 0.1, v - 10])
            if lvl >= 3 and b % 4 in (0, 3): vib.append([R(t), CH[ch][(b // 2) % 3] + 24, B * 0.5, v - 16])
        t += B / 2; b += 1
sect(0.0, 1.5, 'E', 2, 76); sect(1.5, 3.0, 'B', 2, 76)
sect(3.0, 4.6, 'E', 0, 60); sect(4.6, 6.2, 'E', 0, 58)                   # loading: one note ticking
sect(6.2, 7.6, 'C#m', 1, 66); sect(7.6, 9.0, 'G#m', 1, 66)                # tiny page, pop-up
kit.append([9.0, 37, 0.1, 70])                                            # stop on Back
sect(9.3, 10.4, 'A', 0, 54); sect(10.4, 11.6, 'B', 1, 64)
kit.append([11.6, 49, 1.0, 80]); sect(11.6, 13.1, 'E', 3, 84); sect(13.1, 14.6, 'B', 3, 84)
sect(14.6, 15.2, 'C#m', 3, 82)
kit.append([15.2, 49, 1.2, 86]); sect(15.2, 17.4, 'A', 2, 80)            # Call now
sect(17.4, 18.9, 'E', 0, 60); sect(18.9, 20.4, 'F#m', 1, 70)             # your site, still loading
kit.append([20.2, 38, 0.1, 80]); kit.append([20.3, 38, 0.1, 86])
kit.append([20.4, 49, 1.2, 84]); sect(20.4, 22.6, 'E', 3, 86)
for k in CH['E']: vib.append([22.6, k + 24, 0.8, 80]); strg.append([22.6, k + 12, 0.8, 70])
gtr.append([22.6, 40, 0.8, 90]); kit.append([22.6, 36, 0.2, 84])
spec = {'bpm': 100, 'dur': DUR, 'tracks': [
    {'name': 'vibraphone', 'program': 11, 'sec': True, 'gain': 0.55, 'notes': vib},
    {'name': 'steel-string guitar', 'program': 25, 'sec': True, 'gain': 0.6, 'notes': gtr},
    {'name': 'string section', 'program': 48, 'sec': True, 'gain': 0.4, 'notes': strg},
    {'name': 'room kit', 'drums': True, 'program': 8, 'sec': True, 'gain': 0.75, 'notes': kit}]}
json.dump(spec, open('music.json', 'w')); print({t['name']: len(t['notes']) for t in spec['tracks']})
