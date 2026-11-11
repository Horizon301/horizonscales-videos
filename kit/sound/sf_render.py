"""Render music with REAL sampled instruments (piano, guitar, bass, strings, drum kits...) instead of synth beeps.

Kai, Nov 11 2026: the synthesized blips and pops sounded repetitive and "not very good". This renders a note list through
the free GeneralUser GS SoundFont (General MIDI: 128 instruments + drum kits) and writes a WAV that score.mjs can load.

Usage (from a video's work folder):
    python3 ../../kit/sound/sf_render.py music.json audio/band.wav
music.json:
    {"bpm": 96, "dur": 22.0,
     "tracks": [
       {"name": "piano", "program": 0,  "gain": 1.0, "notes": [[0, 60, 1, 80], [1, 64, 1, 70]]},
       {"name": "bass",  "program": 32, "notes": [[0, 36, 2, 95]]},
       {"name": "kit",   "drums": true, "program": 0, "notes": [[0, 36, 0.2, 90], [1, 38, 0.2, 70]]}
     ]}
A note is [start_beat, midi_key, length_beats, velocity 1-127]. Use "sec": true on a track to give starts and lengths in seconds
(for hits that must land on a picture cue). "program" is the General MIDI program number (0 = grand piano, 24 = nylon guitar,
25 = steel guitar, 32 = upright bass, 33 = finger bass, 4 = electric piano, 11 = vibraphone, 12 = marimba, 46 = harp,
48 = strings, 56 = trumpet, 65 = alto sax, 73 = flute, 105 = banjo, 21 = accordion, 110 = fiddle, 114 = steel drums ...).
Drum kits ("drums": true): program 0 standard, 8 room, 16 power, 25 analog, 32 jazz, 40 brush. Drum keys: 36 kick, 38 snare,
37 side stick, 39 clap, 42 closed hat, 46 open hat, 49 crash, 51 ride, 54 tambourine, 56 cowbell, 60/61 bongos, 62-64 congas,
70 maracas, 75 claves, 76/77 wood blocks, 80/81 triangle.

In score.mjs:   band.add(S.load(join(HERE, 'audio', 'band.wav')), 0, { gain: 1 })
First run installs tinysoundfont and downloads the SoundFont (32 MB) into ~/.cache/soundfont. The SoundFont's licence allows
use in music, including commercial use (GeneralUser GS licence v2.0).
"""
import json, os, subprocess, sys, urllib.request

CACHE = os.path.expanduser('~/.cache/soundfont')
SF = os.path.join(CACHE, 'GeneralUser-GS.sf2')
URL = 'https://raw.githubusercontent.com/mrbumpy409/GeneralUser-GS/main/GeneralUser-GS.sf2'
SR = 44100

def setup():
    try:
        import tinysoundfont, soundfile, numpy  # noqa: F401
    except ImportError:
        subprocess.check_call([sys.executable, '-m', 'pip', 'install', '--quiet', '--break-system-packages', '--no-deps', 'tinysoundfont'])
        subprocess.check_call([sys.executable, '-m', 'pip', 'install', '--quiet', '--break-system-packages', 'soundfile', 'numpy'])
    os.makedirs(CACHE, exist_ok=True)
    if not os.path.exists(SF) or os.path.getsize(SF) < 1_000_000:
        print('downloading SoundFont'); urllib.request.urlretrieve(URL, SF)
    if os.path.getsize(SF) < 1_000_000:
        sys.exit('SoundFont download failed (got a tiny file). Fall back to score.mjs synth voices and say so in the brief.')

def main(spec_path, out_path):
    setup()
    import numpy as np, soundfile as sf, tinysoundfont
    spec = json.load(open(spec_path)); beat = 60.0 / spec.get('bpm', 120); dur = float(spec['dur'])
    mix = np.zeros((int(dur * SR), 2), dtype=np.float32)
    for tr in spec['tracks']:                       # one synth per track, so each track gets its own gain and no channel clashes
        s = tinysoundfont.Synth(samplerate=SR); fid = s.sfload(SF)
        drums = bool(tr.get('drums')); ch = 9 if drums else 0
        if drums: s.program_select(ch, fid, 128, tr.get('program', 0), True)
        else: s.program_select(ch, fid, tr.get('bank', 0), tr.get('program', 0))
        k = 1.0 if tr.get('sec') else beat
        ev = []
        for t, key, ln, vel in tr['notes']:
            ev.append((t * k, 1, int(key), int(vel))); ev.append(((t + ln) * k, 0, int(key), 0))
        ev.sort(key=lambda e: (e[0], e[1]))
        out, cur, total = [], 0, int(dur * SR)
        for t, on, key, vel in ev:
            n = min(total, int(t * SR)) - cur
            if n > 0: out.append(np.frombuffer(s.generate(n), dtype=np.float32).copy()); cur += n
            if cur >= total: break
            s.noteon(ch, key, vel) if on else s.noteoff(ch, key)
        if cur < total: out.append(np.frombuffer(s.generate(total - cur), dtype=np.float32).copy())
        a = np.concatenate(out).reshape(-1, 2)[:total]
        mix[:len(a)] += a * float(tr.get('gain', 1.0))
    fade = int(0.05 * SR); mix[-fade:] *= np.linspace(1, 0, fade)[:, None]
    peak = float(np.max(np.abs(mix))) or 1.0
    mix = mix / peak * 0.7                           # leave headroom; score.mjs masters the final mix to -14 LUFS
    os.makedirs(os.path.dirname(out_path) or '.', exist_ok=True)
    sf.write(out_path, mix, SR)
    print(f'{out_path}: {dur:.2f}s, {len(spec["tracks"])} tracks, peak before normalising {peak:.2f}')

if __name__ == '__main__':
    main(sys.argv[1], sys.argv[2])
