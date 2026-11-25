// score.mjs — "Cold wait" with Kai's voice. Band and effects tucked under the voice; nothing timed to cuts.
import { DUR, VO } from './timeline.js';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
export { DUR };
const HERE = dirname(fileURLToPath(import.meta.url));
export default function score(S) {
  S.tempo(96); S.space({ room: 0.25, damp: 0.5 });
  const band = S.bus('band', { gain: 0.28, reverb: 0.1, highpass: 70 });
  band.add(S.load(join(HERE, 'audio', 'band.wav')), 0, { gain: 1 });
  const fx = S.bus('room', { gain: 0.12, reverb: 0.04, highpass: 120 });
  fx.add(S.load(join(HERE, 'audio', 'sfx.wav')), 0, { gain: 1 });
  const vo = S.bus('vo', { gain: 1.0, highpass: 80 });
  VO.forEach(([t, i]) => vo.add(S.load(join(HERE, 'audio', 'vo', `${i}.wav`)), t, { gain: 1 }));
}
