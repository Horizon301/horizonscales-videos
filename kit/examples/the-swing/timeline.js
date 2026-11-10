// timeline.js — "The Swing" (Horizon Scales video #9). The logo swings like a pendulum; each pass wipes one card into the next.
// Inspired by a pendulum reel Kai shared (@1keysolution); our own words, design and music. No voice.
export const BPM = 120;
export const BEAT = 60 / BPM;          // 0.5 s
export const b = n => n * BEAT;        // a TIME in beats → seconds
export const L = n => n * BEAT;        // a LENGTH in beats → seconds (same maths here, kept separate on purpose)

// One card per pass. kind: hook | leak | fix | pay.  mark = the line that gets the coral underline / coral colour.
export const CARDS = [
  { kind: 'hook', lines: ['You never', 'hear about', 'the jobs', 'you lose.'], mark: 3 },
  { kind: 'leak', n: 1, lines: ['They can’t', 'find you.'] },
  { kind: 'fix',        lines: ['We run your', 'Google &', 'Meta ads.'], mark: 2 },
  { kind: 'leak', n: 2, lines: ['Your website', 'doesn’t get', 'the call.'] },
  { kind: 'fix',        lines: ['We build', 'one that', 'does.'], mark: 2 },
  { kind: 'leak', n: 3, lines: ['You miss', 'calls on', 'the job.'] },
  { kind: 'fix',        lines: ['Our AI', 'receptionist', 'picks up and', 'books it.'], mark: 3 },
  { kind: 'pay',        lines: ['So you get', 'found, called', 'and booked.'], mark: 2 },
];
export const N = CARDS.length - 1;     // 7 passes
export const FIRST = 3;                // the first pass starts on beat 3 (1.5 s): time to read the hook
export const SWING = 4;                // beats per pass (2 s). The string crosses the words on the middle beat, the music's downbeat.
export const pass = k => ({ s: b(FIRST + SWING * k), m: b(FIRST + SWING * k + 2), e: b(FIRST + SWING * (k + 1)) });
export const arrive = i => (i === 0 ? 0 : pass(i - 1).m + L(1));   // the beat a card is fully up (underline draws here)

// after the last pass (beat 31) the bob swings back to the middle, then blooms into the plum end card
export const T = { settle: b(31), bloom: b(33), word: b(34), tag1: b(35), tag2: b(36), serv: b(37), url: b(38) };
export const DUR = b(42);              // 21 s

export const CUES = [
  ...Array.from({ length: N }, (_, k) => ({ t: pass(k).m, sfx: 'pass', k })),
  ...Array.from({ length: N }, (_, k) => ({ t: arrive(k + 1), sfx: CARDS[k + 1].kind, k })),
  { t: T.bloom, sfx: 'bloom' },
];
export const HOLDS = [[b(39.5), DUR]];
export const DROPS = [];               // no drop arc in this one: it swings
