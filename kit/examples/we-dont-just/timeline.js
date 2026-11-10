// timeline.js — "We don't just…" (Horizon Scales video #8). Kinetic type, one idea per beat, no voice.
export const BPM = 112;     // Horizon Scales' own track (score.mjs); the Bliss idea was dropped Nov 3
export const BEAT = 60 / BPM;          // 0.536 s
export const PRE = 4;                  // a 4-beat hook plays before beat 0: "You don't need a website." (crossed out) → "You need booked jobs."
export const b = n => (n + PRE) * BEAT; // every beat below is counted from the end of that hook
export const HOOK = { strike: b(-3.0), line2: b(-2.5), out: b(-0.3) };   // marker crosses out "a website.", "You need booked jobs." slams in, hook clears

// [beat, words (\n = second line), style]  style: base | accent | flash | flashAccent
export const WORDS = [
  [0,    'we,\ndon’t',  'stack'],
  [2,    'just',            'base'],
  [3,    'build\nwebsites.', 'accent'],
  [4.5,  'run\nads.',        'accent'],
  [6,    'answer\ncalls.',   'accent'],
  [7.5,  'we get\nyou',      'flash'],
  [9,    'found.',          'flash'],
  [10,   'chosen.',         'flash'],
  [11,   'called.',         'flash'],
  [12,   'booked.',         'flashAccent'],
];
// End card: half-time groove from the drop to the end. The drums in score.mjs play exactly these hits, and the end card pulses on them.
const K = [12, 13.5, 14, 15.5, 16, 17, 17.5, 18, 19, 19.5, 20], SN = [13, 15, 17, 19];   // kicks, snares (beats)
const ROLL = [18.25, 18.5, 18.75, 19.25, 19.5, 19.75];                                // snare fill into the last hit (beat 20)
export const GROOVE = { K, SN, ROLL };
export const HITS = [...K.map(n => [b(n), n === 12 || n === 20 ? 1 : 0.7]), ...SN.map(n => [b(n), 0.9]), ...ROLL.map(n => [b(n), 0.4])].sort((x, y) => x[0] - y[0]);
export const END = b(14);              // end card
export const ET = { tag1: b(14.5), tag2: b(15), serv: b(16), url: b(17) };   // end-card lines, each on a hit
export const DUR = b(21);              // ≈ 13.4 s (hook + 21 beats)

export const CUES = [
  ...WORDS.map(([n, w, s], i) => ({ t: b(n), sfx: s === 'flashAccent' ? 'drop' : s.startsWith('flash') ? 'flash' : 'word', n: i })),
  { t: END, sfx: 'end' },
];
export const HOLDS = [];             // the end card pulses on every hit, so nothing freezes
export const DROPS = [b(12)];
