// score.mjs — "The Dead Number". No synth voices: the soundtrack is the sampled band rendered by kit/sound/sf_render.py
// from music.json (banjo, fiddle, steel-string guitar, finger bass, room kit). music.py writes music.json; ring.py writes
// the phone's ringback tone (the only sound effect). This file only places the two and masters the mix.
import { DUR } from './timeline.js';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
export { DUR };
const HERE = dirname(fileURLToPath(import.meta.url));
export default function score(S) {
  S.tempo(120); S.space({ room: 0.3, damp: 0.5 });
  const band = S.bus('band', { gain: 0.75, reverb: 0.08, highpass: 35 });
  band.add(S.load(join(HERE, 'audio', 'band.wav')), 0, { gain: 1 });
  const fx = S.bus('phone', { gain: 0.32, reverb: 0.02, highpass: 300 });
  fx.add(S.load(join(HERE, 'audio', 'ring.wav')), 0, { gain: 1 });
}
