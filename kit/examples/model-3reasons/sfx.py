"""audio/sfx.wav for "On the roof": only sounds the picture shows. His phone buzzing in his pocket, and the ringback a caller hears."""
import numpy as np, soundfile as sf
SR = 44100; DUR = 29.3; N = int(DUR * SR); out = np.zeros(N, dtype=np.float32)
def add(t, x, g): i = int(t * SR); x = x[:max(0, N - i)]; out[i:i + len(x)] += g * x
for a, b in [[8.69, 9.94]]:
    n = np.arange(int((b - a) * SR)) / SR
    add(a, (0.5 * np.sin(2 * np.pi * 440 * n) + 0.5 * np.sin(2 * np.pi * 480 * n)) * np.minimum(1, n / 0.02) * np.minimum(1, (b - a - n) / 0.05), 0.12)
for a, b in [[6.4, 8.0], [23.5, 25.1]]:
    n = np.arange(int((b - a) * SR)) / SR
    buzz = np.sign(np.sin(2 * np.pi * 150 * n)) * 0.5 + np.sin(2 * np.pi * 75 * n) * 0.5
    k = np.ones(15) / 15; buzz = np.convolve(buzz, k, mode='same')
    half = ((n % 0.6) < 0.42).astype(np.float32)          # buzz-buzz, like a phone on vibrate
    add(a, buzz * half * np.minimum(1, n / 0.02) * np.minimum(1, (b - a - n) / 0.04), 0.2)
sf.write('audio/sfx.wav', np.stack([out, out], 1), SR); print('sfx ok')
