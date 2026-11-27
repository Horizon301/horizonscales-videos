"""Word start times for each finished voice line (speech-to-text), so captions can change on the right word. Writes audio/vo/words.json."""
import json, re, soundfile as sf, numpy as np, torch, torchaudio as ta
from faster_whisper import WhisperModel
asr = WhisperModel("small.en", device="cpu", compute_type="int8"); out = {}
for k in json.load(open('lines.json')):
    x, sr = sf.read(f'audio/vo/{k}.wav', dtype='float32'); x = x if x.ndim == 1 else x.mean(1)
    a = ta.functional.resample(torch.from_numpy(x), sr, 16000).numpy()
    segs, _ = asr.transcribe(a, language='en', word_timestamps=True)
    out[k] = [[re.sub(r"[^a-z']", '', w.word.lower()), round(w.start, 2)] for s in segs for w in s.words]
json.dump(out, open('audio/vo/words.json', 'w')); print(out)
