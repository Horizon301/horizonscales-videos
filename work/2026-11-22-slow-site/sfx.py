"""Writes audio/sfx.wav for "Slow Site": thumb taps on glass and the ringback tone while she calls."""
import json, re, numpy as np, soundfile as sf
SR = 44100; DUR = 23.4; N = int(DUR * SR); out = np.zeros(N, dtype=np.float32)
src = open('timeline.js').read()
TAPS = json.loads(re.search(r'TAPS = (\[.*?\]);', src).group(1)); RING = json.loads(re.search(r'RING = (\[.*?\]);', src).group(1))
def put(t0, x): i = int(t0 * SR); x = x[:N - i]; out[i:i + len(x)] += x
rng = np.random.default_rng(5)
for t0 in TAPS:
    n = int(0.05 * SR); tt = np.arange(n) / SR
    x = rng.standard_normal(n) * np.exp(-tt * 140) * 0.5 + np.sin(2 * np.pi * 1800 * tt) * np.exp(-tt * 90) * 0.3
    put(t0, (0.22 * np.convolve(x, np.ones(3) / 3, 'same')).astype(np.float32))
for t0 in RING:   # US ringback: 440 + 480 Hz
    n = int(0.6 * SR); tt = np.arange(n) / SR
    x = (np.sin(2 * np.pi * 440 * tt) + np.sin(2 * np.pi * 480 * tt)) * 0.5 * np.minimum(1, tt / 0.01) * np.minimum(1, (0.6 - tt) / 0.02)
    put(t0, (0.07 * x).astype(np.float32))
sf.write('audio/sfx.wav', np.stack([out, out], 1), SR); print('sfx ok')
