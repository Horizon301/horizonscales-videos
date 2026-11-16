"""Writes audio/sfx.wav for "One Tap": the two real-world sounds in the picture.
1. her thumb tapping the glass at 5.0 s (a short soft click with a little body),
2. the phone keyboard while the search bar retypes "your business" (14.85-15.75 s, one key per letter)."""
import numpy as np, soundfile as sf
SR = 44100; DUR = 23.0
N = int(DUR * SR); out = np.zeros(N, dtype=np.float32)
rng = np.random.default_rng(4)
def click(t, gain, f=1800, ln=0.035):
    n = np.arange(int(ln * SR)) / SR
    env = np.exp(-n * 140) * np.minimum(1, n / 0.0008)
    s = 0.6 * np.sin(2 * np.pi * f * n) + 0.4 * rng.standard_normal(len(n)) * np.exp(-n * 400)
    i = int(t * SR); out[i:i + len(n)] += gain * s * env
click(5.0, 0.9, 900, 0.06); click(5.002, 0.5, 2400)
full = 'your business'
for j in range(len(full)):
    t = 14.85 + j * (0.9 / len(full))
    click(t, 0.35 + 0.1 * rng.random(), 2000 + 400 * rng.random())
sf.write('audio/sfx.wav', np.stack([out, out], 1), SR)
print('audio/sfx.wav written')
