// score.mjs — "Three Roofers". No synth voices: the soundtrack is the sampled band rendered by kit/sound/sf_render.py
// from music.json (muted trumpet, celesta, fretless bass, jazz kit). music.py writes music.json; sfx.py writes the three
// real-world sounds (ringback tone, drips into the bucket, rain on the window). This file only places them and masters.
import { DUR } from './timeline.js';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
export { DUR };
const HERE = dirname(fileURLToPath(import.meta.url));
export default function score(S) {
  S.tempo(100); S.space({ room: 0.35, damp: 0.5 });
  const band = S.bus('band', { gain: 0.78, reverb: 0.1, highpass: 35 });
  band.add(S.load(join(HERE, 'audio', 'band.wav')), 0, { gain: 1 });
  const fx = S.bus('room', { gain: 0.34, reverb: 0.04, highpass: 200 });
  fx.add(S.load(join(HERE, 'audio', 'sfx.wav')), 0, { gain: 1 });
}
