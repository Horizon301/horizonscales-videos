"""Writes audio/ring.wav: the North American ringback tone (440 Hz + 480 Hz), heard while the call connects, 10.0 to 11.5 s.
A real-world sound in the picture (the calling screen), not a UI beep."""
import numpy as np, soundfile as sf
SR = 44100; DUR = 23.5
a = np.zeros(int(DUR * SR), dtype=np.float32)
t0, t1 = 10.0, 11.5
n = np.arange(int((t1 - t0) * SR)) / SR
tone = 0.5 * np.sin(2 * np.pi * 440 * n) + 0.5 * np.sin(2 * np.pi * 480 * n)
env = np.minimum(1, n / 0.02) * np.minimum(1, (t1 - t0 - n) / 0.05)
a[int(t0 * SR):int(t0 * SR) + len(n)] = 0.35 * tone * env
sf.write('audio/ring.wav', np.stack([a, a], 1), SR)
print('audio/ring.wav written')
