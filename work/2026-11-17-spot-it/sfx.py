"""Writes audio/sfx.wav for "Spot It": the two real-world sounds in the picture.
1. crayon on paper: the circles around the footers, the green check and the ring on "your site" (scratchy filtered noise
   in short strokes),
2. the phone ringing out (ringback, 440 + 480 Hz) while she calls the other painter."""
import json, numpy as np, soundfile as sf, re
SR = 44100; DUR = 23.5
N = int(DUR * SR); out = np.zeros(N, dtype=np.float32)
rng = np.random.default_rng(8)
src = open('timeline.js').read()
SCRIB = json.loads(re.search(r'SCRIBBLE = (\[.*?\]);', src).group(1))
RING = json.loads(re.search(r'RING = (\[.*?\]);', src).group(1))
def scribble(t0, ln, gain=0.32):
    n = int(ln * SR); x = rng.standard_normal(n).astype(np.float32)
    # band-limit (crayon wax scrape ~1.5-5 kHz) with a simple difference + smoothing
    x = np.diff(np.concatenate([[0], x])); k = np.ones(6) / 6; x = np.convolve(x, k, 'same')
    tt = np.arange(n) / SR
    strokes = 0.55 + 0.45 * np.abs(np.sin(2 * np.pi * 7.5 * tt))      # back-and-forth strokes
    env = np.minimum(1, tt / 0.02) * np.minimum(1, (ln - tt) / 0.06) * strokes
    grit = 1 + 0.6 * (rng.random(n) > 0.985)
    i = int(t0 * SR); out[i:i + n] += gain * x * env * grit
for t0, ln in SCRIB: scribble(t0, ln)
t0, t1 = RING; n = int((t1 - t0) * SR); tt = np.arange(n) / SR
tone = 0.5 * (np.sin(2 * np.pi * 440 * tt) + np.sin(2 * np.pi * 480 * tt))
env = np.minimum(1, tt / 0.03) * np.minimum(1, (t1 - t0 - tt) / 0.05)
gate = np.where(tt < 1.25, 1.0, 0.0)                                   # one ring, then the gap
lp = np.convolve(tone, np.ones(4) / 4, 'same')
i = int(t0 * SR); out[i:i + n] += 0.13 * lp * env * gate
sf.write('audio/sfx.wav', np.stack([out, out], 1), SR)
print('audio/sfx.wav written')
