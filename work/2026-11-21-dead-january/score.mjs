// score.mjs — "Dead January". The soundtrack is the sampled band rendered by kit/sound/sf_render.py from music.json
// (Hammond organ, brass section, glockenspiel, acoustic bass, kit). music.py writes music.json; sfx.py writes the real-world sounds
// (notification pings, phone buzz, thumb taps). This file only places them and masters.
import { DUR } from './timeline.js';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
export { DUR };
const HERE = dirname(fileURLToPath(import.meta.url));
export default function score(S) {
  S.tempo(112); S.space({ room: 0.3, damp: 0.5 });
  const band = S.bus('band', { gain: 0.8, reverb: 0.1, highpass: 100 });
  band.add(S.load(join(HERE, 'audio', 'band.wav')), 0, { gain: 1 });
  const fx = S.bus('room', { gain: 0.4, reverb: 0.03, highpass: 120 });
  fx.add(S.load(join(HERE, 'audio', 'sfx.wav')), 0, { gain: 1 });
}
