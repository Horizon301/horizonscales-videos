"""audio/sfx.wav for "Cold wait": only sounds the picture shows. The ringback she hears calling HVAC #1, and her phone buzzing when he calls back."""
import numpy as np, soundfile as sf, json, re
src = open('timeline.js').read(); DUR = float(re.search(r'DUR = ([\d.]+)', src).group(1))
RINGS = json.loads(re.search(r'RINGS = (\[\[.*?\]\])', src).group(1)); BUZZ = json.loads(re.search(r'BUZZ = (\[\[.*?\]\])', src).group(1))
SR = 44100; N = int(DUR * SR); out = np.zeros(N, dtype=np.float32)
def add(t, x, g): i = int(t * SR); x = x[:max(0, N - i)]; out[i:i + len(x)] += g * x
for a, b in RINGS:
    n = np.arange(int((b - a) * SR)) / SR
    add(a, (0.5 * np.sin(2 * np.pi * 440 * n) + 0.5 * np.sin(2 * np.pi * 480 * n)) * np.minimum(1, n / 0.02) * np.minimum(1, (b - a - n) / 0.05), 0.12)
for a, b in BUZZ:
    n = np.arange(int((b - a) * SR)) / SR
    buzz = np.sign(np.sin(2 * np.pi * 150 * n)) * 0.5 + np.sin(2 * np.pi * 75 * n) * 0.5
    buzz = np.convolve(buzz, np.ones(15) / 15, mode='same'); half = ((n % 0.6) < 0.42).astype(np.float32)
    add(a, buzz * half * np.minimum(1, n / 0.02) * np.minimum(1, (b - a - n) / 0.04), 0.2)
sf.write('audio/sfx.wav', np.stack([out, out], 1), SR); print('sfx ok')
