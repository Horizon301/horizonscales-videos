"""Kai's voice for a video, with checks. Run from the work folder with the Chatterbox venv:
  /home/claude/cbx/bin/python ../../kit/voice/chatterbox_vo.py lines.json /home/claude/voice/kai_voice_ref.flac
lines.json = {"v0": "Roofers, why did she call the other guy?", "p1": "...", ...}  (one sentence or two per key)
For every line: 3 takes (calm settings), speech-to-text check of each, keep the take that says the exact words at the
most even pace, cut it right after the last spoken word (no trailing garble), even its speed (x0.85-1.08, pitch kept).
Writes audio/vo/<key>.wav and audio/vo/report.json. A line whose best take still has wrong words is listed under "FAILED"."""
import sys, json, re, os, subprocess
import torch, torchaudio as ta, numpy as np, soundfile as sf
from chatterbox.tts import ChatterboxTTS
from faster_whisper import WhisperModel
lines = json.load(open(sys.argv[1])); ref = sys.argv[2]; os.makedirs("audio/vo", exist_ok=True)
NUM = {"1": "one", "2": "two", "3": "three", "4": "four", "5": "five"}
norm = lambda s: [NUM.get(w, w) for w in re.sub(r"[^a-z0-9 ]", " ", s.lower()).split()]
def wer(r, h):
    r, h = norm(r), norm(h); d = list(range(len(h) + 1))
    for i in range(1, len(r) + 1):
        p, d[0] = d[0], i
        for j in range(1, len(h) + 1): p, d[j] = d[j], min(d[j] + 1, d[j - 1] + 1, p + (r[i - 1] != h[j - 1]))
    return d[-1] / max(1, len(r))
tts = ChatterboxTTS.from_pretrained(device="cpu"); asr = WhisperModel("small.en", device="cpu", compute_type="int8")
report, failed = {}, []
for n, (key, text) in enumerate(lines.items()):
    takes = []
    for k in range(3):
        torch.manual_seed(1000 + 10 * n + k)
        w = tts.generate(text, audio_prompt_path=ref, exaggeration=0.5, cfg_weight=0.5, temperature=0.5)
        a16 = ta.functional.resample(w, tts.sr, 16000).squeeze().numpy().astype("float32")
        segs, _ = asr.transcribe(a16, language="en", word_timestamps=True); ws = [x for s in segs for x in s.words]
        if not ws: continue
        heard = " ".join(x.word.strip() for x in ws); span = max(0.3, ws[-1].end - ws[0].start)
        takes.append(dict(k=k, w=w, heard=heard, wer=round(wer(text, heard), 3), wps=round(len(norm(text)) / span, 2), s0=ws[0].start, s1=ws[-1].end))
    best = min(takes, key=lambda t: (t["wer"], abs(t["wps"] - 3.6)))
    x = best["w"].squeeze().numpy(); sr = tts.sr
    x = x[int(max(0, best["s0"] - 0.06) * sr): int(min(len(x) / sr, best["s1"] + 0.12) * sr)].copy()
    f = int(.02 * sr); x[:f] *= np.linspace(0, 1, f); g = int(.06 * sr); x[-g:] *= np.linspace(1, 0, g)
    sf.write("audio/vo/_raw.wav", x, sr); speed = min(1.08, max(0.85, 3.6 / best["wps"]))
    subprocess.run(["ffmpeg", "-y", "-loglevel", "error", "-i", "audio/vo/_raw.wav", "-af", f"atempo={speed:.3f}", f"audio/vo/{key}.wav"], check=True)
    dur = sf.info(f"audio/vo/{key}.wav").duration
    report[key] = dict(text=text, heard=best["heard"], wer=best["wer"], speed=round(speed, 2), dur=round(dur, 2), takes=[(t["heard"], t["wer"]) for t in takes])
    if best["wer"] > 0: failed.append(key)
    print(key, report[key]["dur"], "s |", best["heard"], "| wer", best["wer"], flush=True)
os.remove("audio/vo/_raw.wav"); report["FAILED"] = failed
json.dump(report, open("audio/vo/report.json", "w"), indent=1); print("FAILED:", failed or "none")
