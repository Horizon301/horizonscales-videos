"""audio/sfx.wav for "8:47 PM": the ringback she hears, a low two-note "call ended" tone, drips, his phone buzzing on the counter."""
import numpy as np, soundfile as sf
SR = 44100; DUR = 20.6; N = int(DUR * SR); out = np.zeros(N, dtype=np.float32)
def add(t, x, g): i = int(t * SR); out[i:i + len(x)] += g * x[:max(0, N - i)]
for a, b in [[2.75, 3.5], [6.7, 7.15], [7.25, 7.65]]:
    n = np.arange(int((b - a) * SR)) / SR
    add(a, (0.5 * np.sin(2 * np.pi * 440 * n) + 0.5 * np.sin(2 * np.pi * 480 * n)) * np.minimum(1, n / 0.02) * np.minimum(1, (b - a - n) / 0.05), 0.12)
for a, b in [[15.3, 16.0], [16.3, 17.0]]:
    n = np.arange(int((b - a) * SR)) / SR
    buzz = np.sign(np.sin(2 * np.pi * 150 * n)) * 0.5 + np.sin(2 * np.pi * 75 * n) * 0.5
    k = np.ones(15) / 15; buzz = np.convolve(buzz, k, mode='same')
    add(a, buzz * np.minimum(1, n / 0.02) * np.minimum(1, (b - a - n) / 0.04) * (0.75 + 0.25 * np.sin(2 * np.pi * 9 * n)), 0.2)
sf.write('audio/sfx.wav', np.stack([out, out], 1), SR); print('sfx ok')
