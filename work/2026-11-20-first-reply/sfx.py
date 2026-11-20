"""Writes audio/sfx.wav for "First Reply": thumb taps on glass (Send, Send, "Yes please!") and a message-arrived ding."""
import json, re, numpy as np, soundfile as sf
SR = 44100; DUR = 22.8; N = int(DUR * SR); out = np.zeros(N, dtype=np.float32)
src = open('timeline.js').read()
TAPS = json.loads(re.search(r'TAPS = (\[.*?\]);', src).group(1)); DINGS = json.loads(re.search(r'DINGS = (\[.*?\]);', src).group(1))
def put(t0, x): i = int(t0 * SR); x = x[:N - i]; out[i:i + len(x)] += x
rng = np.random.default_rng(3)
for t0 in TAPS:
    n = int(0.05 * SR); tt = np.arange(n) / SR
    x = rng.standard_normal(n) * np.exp(-tt * 140) * 0.5 + np.sin(2 * np.pi * 1800 * tt) * np.exp(-tt * 90) * 0.3
    put(t0, (0.35 * np.convolve(x, np.ones(3) / 3, 'same')).astype(np.float32))
for t0 in DINGS:
    for j, f in enumerate([1320, 1760]):
        n = int(0.45 * SR); tt = np.arange(n) / SR
        put(t0 + j * 0.09, (0.09 * (np.sin(2 * np.pi * f * tt) + 0.3 * np.sin(2 * np.pi * 2 * f * tt)) * np.exp(-tt * 9) * np.minimum(1, tt / 0.004)).astype(np.float32))
sf.write('audio/sfx.wav', np.stack([out, out], 1), SR); print('sfx ok')
