"""Make AI voiceover lines with Kokoro. Kai's voices (Nov 18, 2026, from the voice-samples video): am_adam, am_echo, am_liam, am_onyx at speed 1.15.

Usage (from a video's work folder):
    python3 ../../kit/voice/make_vo.py lines.json <voice> 1.15
lines.json is a list of strings, one per line of narration. Writes audio/vo_0.wav, audio/vo_1.wav, ...
and audio/vo_lines.json ([{i, text, dur}]) so timeline.js can place each line and score.mjs can load it
(see kit/examples/quiet-phone for how #6 placed and mixed its lines).

First run installs kokoro-onnx and downloads the full model (~325 MB, the same one the samples used) from GitHub into ~/.cache/kokoro.
Write numbers and initials the way they should sound ("nine P.M.", "A.I.").
"""
import json, os, subprocess, sys, urllib.request

CACHE = os.path.expanduser('~/.cache/kokoro')
BASE = 'https://github.com/thewh1teagle/kokoro-onnx/releases/download/model-files-v1.0/'
FILES = ['kokoro-v1.0.onnx', 'voices-v1.0.bin']

def setup():
    try:
        import kokoro_onnx, soundfile  # noqa: F401
    except ImportError:
        subprocess.check_call([sys.executable, '-m', 'pip', 'install', '--quiet', '--break-system-packages', 'kokoro-onnx', 'soundfile'])
    os.makedirs(CACHE, exist_ok=True)
    for f in FILES:
        p = os.path.join(CACHE, f)
        if not os.path.exists(p) or os.path.getsize(p) < 1_000_000:
            print('downloading', f); urllib.request.urlretrieve(BASE + f, p)

def main(path, voice='am_adam', speed=1.15):
    setup()
    import numpy as np, soundfile as sf
    from kokoro_onnx import Kokoro
    k = Kokoro(os.path.join(CACHE, FILES[0]), os.path.join(CACHE, FILES[1]))
    lines = json.load(open(path))
    os.makedirs('audio', exist_ok=True)
    out = []
    for i, line in enumerate(lines):
        a, sr = k.create(line, voice=voice, speed=speed, lang='en-us')
        a = np.asarray(a, dtype=np.float32)
        thr = 0.01 * np.max(np.abs(a)); idx = np.where(np.abs(a) > thr)[0]                 # trim silence at both ends
        a = a[max(0, idx[0] - int(0.02 * sr)): idx[-1] + int(0.08 * sr)]
        sf.write(f'audio/vo_{i}.wav', a, sr)
        out.append({'i': i, 'text': line, 'dur': round(len(a) / sr, 3)})
    json.dump(out, open('audio/vo_lines.json', 'w'), indent=1)
    print(json.dumps(out, indent=1))

if __name__ == '__main__':
    main(sys.argv[1], *(sys.argv[2:3]), *([float(sys.argv[3])] if len(sys.argv) > 3 else []))
