"""Writes audio/sfx.wav for "Dead January": notification pings, the phone vibrating on two incoming calls, thumb taps (Decline)."""
import json, re, numpy as np, soundfile as sf
SR = 44100; DUR = 23.4; N = int(DUR * SR); out = np.zeros(N, dtype=np.float32)
src = open('timeline.js').read()
PINGS = json.loads(re.search(r'PINGS = (\[.*?\]);', src).group(1)); BUZZ = json.loads(re.search(r'BUZZ = (\[.*?\]);', src).group(1))
TAPS = json.loads(re.search(r'TAPS = (\[.*?\]);', src).group(1))
def put(t0, x): i = int(t0 * SR); x = x[:N - i]; out[i:i + len(x)] += x
for t0 in PINGS + [TAPS[0] + 1.0]:
    for j, f in enumerate([1568, 2093]):
        n = int(0.35 * SR); tt = np.arange(n) / SR
        put(t0 + j * 0.07, (0.045 * (np.sin(2 * np.pi * f * tt) + 0.25 * np.sin(2 * np.pi * 2 * f * tt)) * np.exp(-tt * 11) * np.minimum(1, tt / 0.004)).astype(np.float32))
for c, (a, b) in enumerate(BUZZ):
    t0 = a; k = 0
    while t0 < b - 0.2:
        n = int(0.22 * SR); tt = np.arange(n) / SR
        x = (np.sign(np.sin(2 * np.pi * 150 * tt)) * 0.5 + np.sin(2 * np.pi * 300 * tt) * 0.3) * (0.6 + 0.4 * np.random.default_rng(c * 10 + k).random(n))
        x = np.convolve(x, np.ones(12) / 12, 'same') * np.minimum(1, tt / 0.01) * np.minimum(1, (0.22 - tt) / 0.02)
        put(t0, (0.2 * x).astype(np.float32)); t0 += 0.3 if k % 2 == 0 else 0.55; k += 1
rng = np.random.default_rng(3)
for t0 in TAPS:
    n = int(0.05 * SR); tt = np.arange(n) / SR
    x = rng.standard_normal(n) * np.exp(-tt * 140) * 0.5 + np.sin(2 * np.pi * 1800 * tt) * np.exp(-tt * 90) * 0.3
    put(t0, (0.22 * np.convolve(x, np.ones(3) / 3, 'same')).astype(np.float32))
sf.write('audio/sfx.wav', np.stack([out, out], 1), SR); print('sfx ok')
