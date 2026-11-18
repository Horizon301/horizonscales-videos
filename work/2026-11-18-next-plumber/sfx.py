"""Writes audio/sfx.wav for "The Next Plumber": the phone ringing out under each call and the call-ended tone."""
import json, re, numpy as np, soundfile as sf
SR = 44100; DUR = 24.0; N = int(DUR * SR); out = np.zeros(N, dtype=np.float32)
src = open('timeline.js').read()
RING = json.loads(re.search(r'RING = (\[.*?\]);', src).group(1)); ENDT = float(re.search(r'ENDTONE = ([\d.]+)', src).group(1))
def put(t0, x): i = int(t0 * SR); x = x[:N - i]; out[i:i + len(x)] += x
for t0, t1 in RING:
    n = int((t1 - t0) * SR); tt = np.arange(n) / SR
    tone = 0.5 * (np.sin(2 * np.pi * 440 * tt) + np.sin(2 * np.pi * 480 * tt))
    env = np.minimum(1, tt / 0.03) * np.minimum(1, (t1 - t0 - tt) / 0.05) * np.where(tt < 1.6, 1.0, 0.0)
    put(t0, (0.13 * np.convolve(tone, np.ones(4) / 4, 'same') * env).astype(np.float32))
for i, f in enumerate([950, 700, 480]):
    n = int(0.18 * SR); tt = np.arange(n) / SR
    put(ENDT + i * 0.2, (0.1 * np.sin(2 * np.pi * f * tt) * np.minimum(1, tt / 0.005) * np.minimum(1, (0.18 - tt) / 0.02)).astype(np.float32))
sf.write('audio/sfx.wav', np.stack([out, out], 1), SR); print('sfx ok')
