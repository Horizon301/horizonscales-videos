// score.mjs — "Level 1" (video #10). Original chiptune: square-wave lead and arps, triangle bass, noise drums, like an old game console.
// The music runs while a customer runs, and stops dead when one falls. Each fix gets a power-up sound, each bridge crossing a coin ding.
// Runs 1–3 are in A minor (something is wrong); the last run is in C major and ends in a little victory fanfare.
import { DUR, BPM, b, L, FALL, BRIDGE, RUN, T, crossTime, HOOK } from './timeline.js';
export { DUR };

export default function score(S) {
  S.tempo(BPM); S.space({ room: 0.2, damp: 0.6 });
  const lead = S.bus('lead', { gain: 0.17, lowpass: 4200, highpass: 250, delay: 0.1, reverb: 0.06 });
  const arp = S.bus('arp', { gain: 0.1, lowpass: 3600, highpass: 300 });
  const bass = S.bus('bass', { gain: 0.26, lowpass: 1800, highpass: 45 });
  const drums = S.bus('drums', { gain: 0.42, highpass: 60, lowpass: 6000 });
  const sfx = S.bus('sfx', { gain: 0.22, lowpass: 4500, highpass: 200, reverb: 0.08 });
  const low = S.bus('thud', { gain: 0.4, highpass: 40, lowpass: 2500 });

  const sq = (bus, n, t, len, g = 0.8, opt = {}) => bus.add(S.lead(n, len, { wave: 'square', cutoff: 5000, vibrato: 0, detune: 0, release: 0.02, ...opt }), t, { gain: g });
  const tri = (n, t, len, g = 0.9) => bass.add(S.bass(n, len, { wave: 'tri', cutoff: 1500, sub: 0, drive: 0.1, envAmt: 0, release: 0.02 }), t, { gain: g });
  const kick = (t, g = 0.8) => drums.add(S.kick({ tone: 60, decay: 0.09, drive: 0.3, click: 0.6 }), t, { gain: g });
  const snare = (t, g = 0.45) => drums.add(S.snare({ tone: 240, decay: 0.07 }), t, { gain: g });
  const hat = (t, g = 0.12) => drums.add(S.hat({ decay: 0.015 }), t, { gain: g });
  const ARP = { A: ['A4', 'C5', 'E5', 'C5'], F: ['A4', 'C5', 'F5', 'C5'], G: ['G4', 'B4', 'D5', 'B4'], C: ['G4', 'C5', 'E5', 'C5'] };
  const ROOT = { A: ['A2', 'A3'], F: ['F2', 'F3'], G: ['G2', 'G3'], C: ['C3', 'C4'] };

  // one run of game music: chords = one letter per beat; layers grow with each run
  function run(t0, chords, { arps = false, melody = null, drumsOn = true } = {}) {
    chords.forEach((c, i) => {
      const t = t0 + L(i);
      [0, 0.5].forEach((o, j) => tri(ROOT[c][j], t + L(o), L(0.42)));
      if (arps) ARP[c].forEach((n, j) => sq(arp, n, t + L(j * 0.25), L(0.2), 0.8));
      if (drumsOn) { kick(t); if (i % 2) snare(t); hat(t); hat(t + L(0.5), 0.09); }
    });
    if (melody) melody.forEach(([n, at, len]) => sq(lead, n, t0 + L(at), L(len), 0.8));
  }

  // ── start: a two-blip "game on", then customer 1 strolls in (calm: bass, hats, a curious little tune)
  // ── the hook: GAME OVER. A thud, a falling slide, a sad four-note tune of our own, then a quiet pulse.
  low.add(S.kick({ tone: 48, decay: 0.22, drive: 0.5, click: 0.5 }), 0, { gain: 1 }); low.add(S.boom({ size: 0.6 }), 0, { gain: 0.4 });
  sq(sfx, 'B5', 0.04, 0.06); sq(sfx, 'B5', 0.16, 0.06); sq(sfx, 'A3', 0.3, 0.4, 0.8, { glideFrom: 'A5', glide: 0.36 });   // alert blips while he hangs, then the fall
  [['E5', 0.8, 0.16], ['C5', 0.98, 0.16], ['A4', 1.16, 0.16], ['F4', 1.34, 0.5]].forEach(([n, at, len]) => sq(lead, n, at, len, 0.85));
  tri('F2', 1.34, 0.5, 0.6);
  sq(sfx, 'G4', HOOK.again, 0.09, 0.8); sq(sfx, 'C5', HOOK.again + 0.1, 0.22, 0.8);                      // "TRY AGAIN?"
  for (let n = -2; n < -0.7; n += 0.5) { hat(b(n), 0.1); tri('A2', b(n), L(0.2), 0.35); }
  sq(sfx, 'E5', HOOK.start, 0.07); sq(sfx, 'A5', HOOK.start + 0.08, 0.14);                              // select: the level restarts
  low.add(S.riser(0.3, { from: 400, to: 2400, noise: 0.3 }), HOOK.start, { gain: 0.2 });
  run(RUN[0][0], ['A', 'A', 'F', 'G'], { melody: [['A4', 0, 0.8], ['C5', 1, 0.8], ['E5', 2, 0.8], ['D5', 3, 0.8]] });
  // customers 2 and 3 run: the arp comes in, then a faster tune on top
  run(RUN[1][0], ['A', 'A', 'F', 'G'], { arps: true, melody: [['E5', 0, 0.9], ['A5', 1, 0.9], ['G5', 2, 0.9], ['D5', 3, 0.9]] });
  run(RUN[2][0], ['A', 'A', 'F', 'G'], { arps: true, melody: [['E5', 0, 0.45], ['E5', 0.5, 0.45], ['G5', 1, 0.45], ['A5', 1.5, 0.45], ['A5', 2, 0.45], ['G5', 2.5, 0.45], ['E5', 3, 0.45], ['D5', 3.5, 0.45]] });
  // customer 4: C major, everything in, climbing to the door
  run(RUN[3][0], ['C', 'C', 'F', 'G', 'G'], { arps: true, melody: [['C5', 0, 0.45], ['E5', 0.5, 0.45], ['G5', 1, 0.45], ['C6', 1.5, 0.45], ['A5', 2, 0.45], ['C6', 2.5, 0.45], ['F6', 3, 0.9], ['D6', 4, 0.3], ['E6', 4.33, 0.3], ['G6', 4.66, 0.3]] });

  // ── each fall: an alert blip, a falling slide, a thud, two sad notes — and the music is gone
  FALL.forEach((f, k) => {
    sq(sfx, 'B5', f - 0.42, 0.06); sq(sfx, 'B5', f - 0.3, 0.06);
    sq(sfx, 'A3', f, 0.34, 0.9, { glideFrom: 'A5', glide: 0.3 });
    low.add(S.kick({ tone: 48, decay: 0.2, drive: 0.5, click: 0.4 }), f + 0.3, { gain: 0.9 }); low.add(S.boom({ size: 0.5 }), f + 0.3, { gain: 0.35 });
    sq(lead, 'E4', f + 0.55, 0.2, 0.7); sq(lead, 'C4', f + 0.8, 0.45, 0.7);
    for (let n = 2.5; n < 4.4; n += 0.5) { hat(f + L(n), 0.1); tri('A2', f + L(n), L(0.2), 0.35); }   // a quiet suspense pulse, so the gap isn't dead air
    // the bridge: a short whistle down, a thunk as it lands, then a power-up
    const br = BRIDGE[k];
    sq(sfx, 'C4', br - 0.3, 0.3, 0.5, { glideFrom: 'C6', glide: 0.28 });
    low.add(S.kick({ tone: 55, decay: 0.14, drive: 0.5, click: 0.9 }), br, { gain: 1 }); drums.add(S.tom('C3', { decay: 0.1 }), br, { gain: 0.5 });
    ['C5', 'E5', 'G5', 'C6', 'E6'].forEach((n, i) => sq(sfx, n, br + 0.12 + i * 0.07, 0.09, 0.8));
    sq(sfx, 'G6', br + 0.5, 0.2, 0.5);                                            // the sign pops up
    // the next customer crosses this bridge: coin ding
    const ct = crossTime(k + 1, k); sq(sfx, 'B5', ct, 0.06, 0.9); sq(sfx, 'E6', ct + 0.07, 0.3, 0.9);
  });

  // ── booked: fanfare, three hops, a held C chord
  const B = T.booked;
  ['C5', 'E5', 'G5'].forEach((n, i) => sq(lead, n, B + i * 0.09, 0.1, 0.9)); sq(lead, 'C6', B + 0.27, 0.6, 1); sq(arp, 'E5', B + 0.27, 0.6, 0.9); sq(arp, 'G5', B + 0.27, 0.6, 0.9);
  kick(B, 1); drums.add(S.crash({ dur: 1.2 }), B, { gain: 0.14 }); tri('C3', B, 0.8);
  [0, 0.4, 0.8].forEach((o, i) => sq(sfx, ['E5', 'G5', 'C6'][i], B + o + 0.02, 0.12, 0.6, { glideFrom: ['C5', 'E5', 'G5'][i], glide: 0.1 }));   // hop, hop, hop
  [['F5', 2, 0.4], ['A5', 2.5, 0.4], ['G5', 3, 0.4], ['B5', 3.25, 0.2]].forEach(([n, at, len]) => sq(lead, n, B + L(at), L(len), 0.85));
  [['F2', 2], ['F3', 2.5], ['G2', 3], ['G3', 3.25]].forEach(([n, at]) => tri(n, B + L(at), L(0.4)));
  [2, 2.5, 3, 3.25].forEach(o => { kick(B + L(o), 0.7); hat(B + L(o) + L(0.25)); });
  // ── iris: the level ends. A falling arp into the end card, which sits on a soft C chord.
  ['C6', 'G5', 'E5', 'C5'].forEach((n, i) => sq(lead, n, T.iris + i * 0.11, 0.14, 0.8)); tri('C3', T.iris, L(1.5)); kick(T.iris, 0.9);
  const pad = S.bus('pad', { gain: 0.12, lowpass: 2200, highpass: 150, reverb: 0.3 });
  pad.add(S.pad(S.chord('C3', 'maj7'), L(8), { voices: 3, cents: 6, cutoff: 1400, attack: 0.4, release: 1, wave: 'tri' }), T.logo - 0.3, { gain: 1 });
  tri('C2', T.logo, L(4), 0.5);
  [[T.logo, 'C5'], [T.tag1, 'E5'], [T.tag2, 'G5'], [T.serv, 'C6'], [T.url, 'E6']].forEach(([t, n]) => { sq(sfx, n, t, 0.09, 0.7); sq(sfx, n, t + 0.1, 0.3, 0.45); });
}
