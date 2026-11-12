// score.mjs — "Not You" (map-route test). No synth voices: the whole soundtrack is the sampled band rendered by
// kit/sound/sf_render.py from music.json (electric piano, upright bass, brush kit, a trombone on the reveal, vibraphone on the end card).
// This file only places it and masters the mix.
import { DUR } from './timeline.js';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
export { DUR };
const HERE = dirname(fileURLToPath(import.meta.url));
export default function score(S) {
  S.tempo(88); S.space({ room: 0.35, damp: 0.5 });
  const band = S.bus('band', { gain: 0.8, reverb: 0.1, highpass: 35 });
  band.add(S.load(join(HERE, 'audio', 'band.wav')), 0, { gain: 1 });
}
