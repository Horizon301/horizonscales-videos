"""Writes music.json for "No Beep": the voicemail greeting played as a karaoke backing track. An 80s soft-rock ballad:
FM electric piano, harmonica, synth bass, power kit (80 BPM, G major). All times in seconds so hits land on the picture.
Soft intro under the hook; a held pedal while the phone rings; a crash and the ballad on "Now playing"; one chord per
lyric line with a harmonica sing-along melody; the band stops dead when she hangs up; a lonely bass under the second
call; a sad falling harmonica on the score of 0; the groove back for the tip; a question left open; home on the end card.
Render: python3 ../../kit/sound/sf_render.py music.json audio/band.wav"""
import json
B = 60 / 80
DUR = 25.0
CH = {'G': [55, 59, 62, 67], 'D': [54, 57, 62, 66], 'Em': [55, 59, 64, 67], 'C': [55, 60, 64, 67], 'Am': [57, 60, 64, 69], 'Dsus': [55, 57, 62, 67], 'Cm': [55, 60, 63, 67]}
ROOT = {'G': 43, 'D': 38, 'Em': 40, 'C': 36, 'Am': 45, 'Dsus': 38, 'Cm': 36}
ep, harp, bass, kit = [], [], [], []
R = lambda x: round(x, 4)

def pad(t0, t1, ch, v=60, arp=True):
    """e-piano: a soft chord, then an eighth-note arpeggio until t1"""
    for k in CH[ch]: ep.append([R(t0), k, min(1.2, t1 - t0), v])
    if arp:
        t, i = t0 + B / 2, 0
        while t < t1 - 0.1:
            ep.append([R(t), CH[ch][(i % 3) + 1] + 12, B * 0.45, v - 14]); t += B / 2; i += 1
def groove(t0, t1, ch, full=True, v=84):
    """slow ballad beat: kick on 1 and the and-of-2, gated snare on 2 and 4, hats eighths; bass on the root"""
    t, b = t0, 0
    while t < t1 - 0.05:
        kit.append([R(t), 42, 0.06, 40 + (12 if b % 2 == 0 else 0)])
        if b % 4 == 0 and full: kit.append([R(t), 36, 0.2, v])
        if b % 4 == 3 and full: kit.append([R(t), 36, 0.2, v - 18])
        if b % 4 in (2, 6) and full: kit.append([R(t), 38, 0.2, v - 6])
        if b % 2 == 0: bass.append([R(t), ROOT[ch], B * 0.9, v])
        t += B / 2; b += 1
def hit(t, ch, v=96, crash=True):
    for k in CH[ch]: ep.append([R(t), k, 0.9, v - 14])
    bass.append([R(t), ROOT[ch], 0.8, v + 4]); kit.append([R(t), 36, 0.25, v + 4])
    if crash: kit.append([R(t), 49, 1.4, v - 10])
def mel(t0, notes, v=86, step=None):
    t = t0
    for key, ln in notes:
        if key: harp.append([R(t), key, ln * 0.92, v])
        t += ln

# 0-2.2 hook: soft e-piano intro, hats only
pad(0.0, 2.2, 'G', 62); pad(1.1, 2.2, 'D', 56, arp=False)
for i in range(6): kit.append([R(i * B / 2 + 0.05), 42, 0.06, 34])
# 2.2-4.0 she calls: a held pedal and a rim tick (the ringback sits on top)
hit(2.2, 'Em', 80, crash=False); pad(2.2, 4.0, 'Em', 52, arp=False)
for i in range(4): kit.append([R(2.2 + i * B / 2 + B / 4), 37, 0.06, 40])
# 4.0 "Now playing": tom fill into a crash, the ballad starts, harmonica pickup
for i, k in enumerate([50, 48, 47, 45]): kit.append([R(3.62 + i * 0.09), k, 0.12, 62 + i * 8])
hit(4.0, 'G', 98); pad(4.0, 5.6, 'G', 64); groove(4.0, 5.6, 'G', full=False, v=76)
mel(4.75, [(67, 0.3), (69, 0.3), (71, 0.25)], 82)
# 5.6-13.2 one chord per lyric line, with a sing-along harmonica line
LINES = [(5.6, 7.2, 'G'), (7.2, 8.8, 'D'), (8.8, 10.4, 'Em'), (10.4, 12.0, 'C'), (12.0, 13.2, 'Dsus')]
MEL = [[(74, .4), (74, .2), (72, .2), (71, .4), (67, .4)],
       [(69, .4), (71, .2), (69, .2), (66, .4), (62, .4)],
       [(67, .2), (67, .2), (71, .4), (74, .4), (72, .4)],
       [(72, .2), (71, .2), (69, .4), (67, .4), (64, .4)],
       [(66, .3), (67, .3), (69, .6)]]
for (t0, t1, ch), m in zip(LINES, MEL):
    hit(t0, ch, 90, crash=(t0 in (5.6, 10.4))); pad(t0, t1, ch, 60); groove(t0, t1, ch); mel(t0 + 0.05, m, 84)
# 13.2 she hangs up: band stops dead; one low tom and a soft low piano note
kit.append([13.2, 41, 0.4, 96]); bass.append([13.2, 31, 0.5, 90]); ep.append([13.45, 43, 1.3, 46])
# 15.0 calling the next one: lonely bass + soft pad
pad(15.0, 16.8, 'Am', 48, arp=False); bass.append([15.0, 45, 0.6, 80]); bass.append([15.9, 43, 0.6, 72])
for i in range(4): kit.append([R(15.0 + i * B / 2 + B / 4), 37, 0.06, 38])
# 16.8 score: 0. sad falling harmonica over Cm
hit(16.8, 'Cm', 86, crash=False); pad(16.8, 18.8, 'Cm', 54, arp=False)
mel(16.95, [(70, .38), (69, .38), (68, .38), (67, 0.8)], 92)
# 18.8 the tip: groove back, lighter (ringback on top)
hit(18.8, 'G', 90); pad(18.8, 20.8, 'G', 56); groove(18.8, 20.8, 'G', v=74)
# 20.8 the question: C to Dsus, left open, harmonica asks
hit(20.8, 'C', 92, crash=False); pad(20.8, 21.6, 'C', 58); groove(20.8, 21.6, 'C', v=78)
hit(21.6, 'Dsus', 90, crash=False); pad(21.6, 22.4, 'Dsus', 58); groove(21.6, 22.4, 'Dsus', v=78)
mel(20.85, [(67, .3), (69, .3), (71, .5), (72, .3), (74, .6)], 86)
# 22.4 end card: home to G, crash, harmonica tag, ring out
for i, k in enumerate([45, 47, 48, 50]): kit.append([R(22.04 + i * 0.09), k, 0.12, 64 + i * 8])
hit(22.4, 'G', 104); pad(22.4, 24.2, 'G', 64); groove(22.4, 24.0, 'G', v=82)
mel(22.5, [(74, .3), (71, .3), (67, .3), (69, .3), (71, .9)], 88)
hit(24.0, 'G', 96); harp.append([24.0, 67, 0.9, 82])

spec = {'bpm': 80, 'dur': DUR, 'tracks': [
    {'name': 'FM electric piano', 'program': 5, 'sec': True, 'gain': 0.9, 'notes': ep},
    {'name': 'harmonica', 'program': 22, 'sec': True, 'gain': 0.75, 'notes': harp},
    {'name': 'synth bass', 'program': 39, 'sec': True, 'gain': 0.9, 'notes': bass},
    {'name': 'power kit', 'drums': True, 'program': 16, 'sec': True, 'gain': 0.9, 'notes': kit},
]}
json.dump(spec, open('music.json', 'w'))
print('music.json written:', {t['name']: len(t['notes']) for t in spec['tracks']})
