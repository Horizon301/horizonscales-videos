"""Writes audio/sfx.wav for "Three Roofers": the three real-world sounds in the picture.
1. the ringback tone she hears in the phone (440 + 480 Hz) in the RINGS windows,
2. a water drop landing in the bucket at each DRIPS time (a short rising "bloop", like a drop into water),
3. soft rain on the window while it's night (filtered noise, fades out when morning comes at 14.0 s)."""
import numpy as np, soundfile as sf
SR = 44100; DUR = 24.0
RINGS = [[2.4, 3.3], [3.6, 4.5], [6.8, 7.7], [8.0, 8.9], [9.2, 10.1], [11.0, 11.8]]
DRIPS = [round(0.6 + 1.2 * i, 2) for i in range(12) if 0.6 + 1.2 * i < 13.7]
N = int(DUR * SR); out = np.zeros(N, dtype=np.float32)
for a, b in RINGS:
    n = np.arange(int((b - a) * SR)) / SR
    tone = 0.5 * np.sin(2 * np.pi * 440 * n) + 0.5 * np.sin(2 * np.pi * 480 * n)
    env = np.minimum(1, n / 0.02) * np.minimum(1, (b - a - n) / 0.05)
    out[int(a * SR):int(a * SR) + len(n)] += 0.30 * tone * env
for t in DRIPS:
    n = np.arange(int(0.09 * SR)) / SR
    f = 700 + 1900 * (n / 0.09) ** 1.5                      # rising pitch: a drop into water
    ph = 2 * np.pi * np.cumsum(f) / SR
    env = np.exp(-n * 45) * np.minimum(1, n / 0.002)
    out[int(t * SR):int(t * SR) + len(n)] += 0.55 * np.sin(ph) * env
rng = np.random.default_rng(3)
noise = rng.standard_normal(N).astype(np.float32)
# simple one-pole low-pass then high-pass for a soft rain hiss
lp = np.zeros(N, dtype=np.float32); a = 0.25; acc = 0.0
for i in range(N): acc += a * (noise[i] - acc); lp[i] = acc
hp = lp - np.convolve(lp, np.ones(200) / 200, mode='same')
tt = np.arange(N) / SR
renv = np.clip(1 - (tt - 13.8) / 0.6, 0, 1) * np.minimum(1, tt / 0.05)
out += 0.06 * hp * renv
sf.write('audio/sfx.wav', np.stack([out, out], 1), SR)
print('audio/sfx.wav written; drips at', DRIPS)
