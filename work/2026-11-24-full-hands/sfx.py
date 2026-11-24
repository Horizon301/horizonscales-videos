"""Writes audio/sfx.wav for "Full Hands": the ringback tone while she calls (and when you call back), your phone buzzing
face-down on the floor (shown in the inset) with her first three rings, and one thumb tap on glass."""
import json, re, numpy as np, soundfile as sf
SR = 44100; DUR = 23.4; N = int(DUR * SR); out = np.zeros(N, dtype=np.float32)
src = open('timeline.js').read()
def arr(k): return json.loads(re.search(k + r' = (\[.*?\]);', src).group(1))
TAPS, RING, BUZZ = arr('TAPS'), arr('RING'), arr('BUZZ')
def put(t0, x): i = int(t0 * SR); x = x[:N - i]; out[i:i + len(x)] += x
rng = np.random.default_rng(7)
for t0 in TAPS:
    n = int(0.05 * SR); tt = np.arange(n) / SR
    x = rng.standard_normal(n) * np.exp(-tt * 140) * 0.5 + np.sin(2 * np.pi * 1800 * tt) * np.exp(-tt * 90) * 0.3
    put(t0, (0.22 * np.convolve(x, np.ones(3) / 3, 'same')).astype(np.float32))
for t0 in RING:   # US ringback: 440 + 480 Hz
    n = int(0.9 * SR); tt = np.arange(n) / SR
    x = (np.sin(2 * np.pi * 440 * tt) + np.sin(2 * np.pi * 480 * tt)) * 0.5 * np.minimum(1, tt / 0.01) * np.minimum(1, (0.9 - tt) / 0.02)
    put(t0, (0.06 * x).astype(np.float32))
for t0 in BUZZ:   # phone vibrating on a hard floor: two 0.4 s pulses, ~170 Hz motor with rattle
    for p in (0.0, 0.6):
        n = int(0.4 * SR); tt = np.arange(n) / SR
        env = np.minimum(1, tt / 0.02) * np.minimum(1, (0.4 - tt) / 0.03)
        x = (np.sign(np.sin(2 * np.pi * 172 * tt)) * 0.35 + np.sin(2 * np.pi * 172 * tt) * 0.5 + rng.standard_normal(n) * 0.12) * env
        x = np.convolve(x, np.ones(6) / 6, 'same')
        put(t0 + p, (0.09 * x).astype(np.float32))
sf.write('audio/sfx.wav', np.stack([out, out], 1), SR); print('sfx ok')
