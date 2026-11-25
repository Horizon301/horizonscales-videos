"""music.json for "8:47 PM" v2. ONE steady groove from the first frame to the end card: the kick, rim and hats never stop,
the bass plays every beat, only the chord changes with the scene. Electric piano, vibraphone, finger bass, room kit, 96 BPM.
A minor at night, C major from "answers" on. Scene changes get an extra accent on top of the groove, never a stop.
Render: python3 ../../kit/sound/sf_render.py music.json audio/band.wav"""
import json
BPM = 96; B = 60 / BPM; DUR = 20.6
CH = {'Am': [57, 60, 64, 67], 'F': [53, 57, 60, 64], 'Dm': [50, 53, 57, 60], 'E': [52, 56, 59, 62], 'C': [48, 52, 55, 59], 'G': [55, 59, 62, 65]}
ROOT = {'Am': 33, 'F': 29, 'Dm': 38, 'E': 28, 'C': 36, 'G': 31}
ep, vib, bass, kit = [], [], [], []
R = lambda x: round(x, 3)
# chord for each scene: [start, chord]
PLAN = [[0.0, 'Am'], [2.6, 'Dm'], [3.6, 'E'], [4.8, 'Am'], [6.6, 'F'], [7.7, 'C'], [9.0, 'F'], [10.0, 'G'], [11.0, 'C'], [12.2, 'Am'], [13.2, 'Dm'], [14.2, 'E'], [15.2, 'Am'], [16.3, 'F'], [17.4, 'C'], [18.65, 'G'], [19.3, 'C']]
def chord_at(t):
    c = 'Am'
    for t0, ch in PLAN:
        if t >= t0 - 0.02: c = ch
    return c
END = 19.3
beat = 0; t = 0.0
while t < END - 0.05:                      # the groove: never stops
    ch = chord_at(t); bright = t >= 7.7 and t < 13.2 or t >= 17.4
    bass.append([R(t), ROOT[ch] + (12 if beat % 4 == 3 else 0), B * 0.85, 86])
    kit.append([R(t), 36 if beat % 2 == 0 else 37, 0.2, 84 if beat % 2 == 0 else 70])
    kit.append([R(t), 42, 0.1, 52]); kit.append([R(t + B / 2), 42, 0.1, 40])
    if bright and beat % 2 == 1: kit.append([R(t), 54, 0.1, 46])
    if beat % 2 == 0:                      # electric piano comps every two beats, rolled a little
        for j, k in enumerate(CH[ch]): ep.append([R(t + 0.015 * j), k + 12, B * 1.8, 60 - j * 2])
    t += B; beat += 1
for t0, ch in PLAN[1:]:                    # an accent on every scene change, on top of the groove
    if t0 < END: kit.append([R(t0), 49, 1.0, 58]); vib.append([R(t0), CH[ch][2] + 24, 0.5, 70])
def mel(t0, notes, v=72):
    t = t0
    for key, ln in notes:
        if key: vib.append([R(t), key, ln * 0.95, v])
        t += ln
mel(0.3, [(76, B / 2), (72, B / 2), (69, B)], 62)
mel(7.75, [(72, B / 2), (76, B / 2), (79, B / 2), (84, B)], 86)        # somebody answers
mel(9.05, [(81, B / 2), (79, B / 2), (77, B / 2), (79, B)], 78)
mel(13.25, [(77, B / 2), (74, B / 2), (69, B)], 64)                    # the job is gone
mel(17.45, [(72, B / 2), (76, B / 2), (79, B / 2), (81, B / 2), (79, B)], 80)
for j, k in enumerate([48, 55, 60, 64, 67]): ep.append([R(END + 0.02 * j), k + 12, 1.2, 86])
bass.append([END, 24, 1.2, 100]); kit.append([END, 36, 0.2, 100]); kit.append([END, 49, 1.3, 76]); vib.append([END, 84, 1.2, 76])
spec = {'bpm': BPM, 'dur': DUR, 'tracks': [
    {'name': 'electric piano', 'program': 4, 'sec': True, 'gain': 1.0, 'notes': ep},
    {'name': 'vibraphone', 'program': 11, 'sec': True, 'gain': 0.8, 'notes': vib},
    {'name': 'finger bass', 'program': 33, 'sec': True, 'gain': 1.5, 'notes': bass},
    {'name': 'room kit', 'drums': True, 'program': 8, 'sec': True, 'gain': 0.8, 'notes': kit}]}
json.dump(spec, open('music.json', 'w')); print({t['name']: len(t['notes']) for t in spec['tracks']})
