// score.mjs — "Find the Painter". No synth voices: the soundtrack is the sampled band rendered by kit/sound/sf_render.py
// from music.json (nylon guitar, upright bass, recorder, hand percussion). music.py writes music.json.
// This file only places the band and masters the mix.
import { DUR } from './timeline.js';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
export { DUR };
const HERE = dirname(fileURLToPath(import.meta.url));
export default function score(S) {
  S.tempo(96); S.space({ room: 0.3, damp: 0.5 });
  const band = S.bus('band', { gain: 0.7, reverb: 0.08, highpass: 35 });
  band.add(S.load(join(HERE, 'audio', 'band.wav')), 0, { gain: 1 });
}
