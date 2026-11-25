// score.mjs — "8:47 PM" (test). Sampled band (music.py → sf_render.py), real-world sounds (sfx.py), and the narration
// from audio/<VOICE>/vo_<i>.wav (VOICE env: am_adam | am_echo | am_liam | am_onyx; none = no voice).
import { DUR, VO } from './timeline.js';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
export { DUR };
const HERE = dirname(fileURLToPath(import.meta.url));
const VOICE = process.env.VOICE || 'am_adam';
export default function score(S) {
  S.tempo(96); S.space({ room: 0.3, damp: 0.5 });
  const band = S.bus('band', { gain: VOICE === 'none' ? 0.7 : 0.34, reverb: 0.1, highpass: 35 });
  band.add(S.load(join(HERE, 'audio', 'band.wav')), 0, { gain: 1 });
  const fx = S.bus('room', { gain: 0.22, reverb: 0.04, highpass: 120 });
  fx.add(S.load(join(HERE, 'audio', 'sfx.wav')), 0, { gain: 1 });
  if (VOICE !== 'none') { const vo = S.bus('vo', { gain: 1.0, highpass: 90 }); VO.forEach(([t0, i]) => vo.add(S.load(join(HERE, 'audio', VOICE, `vo_${i}.wav`)), t0, { gain: 1 })); }
}
