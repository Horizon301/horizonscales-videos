// timeline.js — "The Quiet Phone" (Horizon Scales video #6). 3D night neighborhood, narrated (AI voice: Kokoro am_michael).
// Timing follows the voiceover: each line's start is fixed here, its length comes from audio/vo_lines.json.
export const DUR = 31.0;

export const VO = [   // [start, duration, text]
  [0.30, 4.255, 'This roofer is good at his job. So why is his phone so quiet?'],
  [5.10, 3.002, 'He tried yard signs. Nobody drove by.'],
  [8.60, 2.937, 'He tried a nice-looking website. People left.'],
  [12.00, 4.642, "He tried calling people back the next morning. They'd already hired someone else."],
  [17.40, 0.911, 'Get found.'],
  [18.90, 1.399, 'Keep them on the page.'],
  [20.70, 4.950, 'And answer every call, even at 9 PM, with an AI receptionist.'],
  [26.30, 4.250, 'Horizon Scales. Websites, ads, and AI receptionists.'],
];

export const SHOT = {           // camera shots
  A: [0, 5.0],                  // fly down the street to his house
  B: [5.0, 8.45],               // yard sign, a car drives past
  C: [8.45, 11.85],             // the pretty website, swiped away
  D: [11.85, 17.15],            // phone on the van dash: missed, called back, too late
  E1: [17.15, 18.8],            // FIX 1 ads: a pin drops, the street lights up
  E2: [18.8, 20.6],             // FIX 2 website: Call now
  E3: [20.6, 26.0],             // FIX 3 AI receptionist answers at 9 PM, crane up
  END: [26.0, 31.0],
};

export const EV = {
  carPass: 5.7,
  siteIn: 8.5, swipe: 10.75,
  ring1: 12.05, missed: 13.25, callBack: 14.05, reply: 15.25,
  pin: 17.45,
  call2: 19.75,
  ring2: 20.75, aiAnswer: 21.7, booked: 23.6, crane: 24.2,
  end: 26.0,
};

export const TAGS = [            // small top labels: [t0, t1, text, kind]
  [6.6, 8.4, 'Leak 1 · Not found', 'leak'],
  [10.8, 11.85, 'Leak 2 · Clicked away', 'leak'],
  [13.3, 17.1, 'Leak 3 · Missed call', 'leak'],
  [17.4, 18.8, 'Fix 1 · Ads', 'fix'],
  [18.9, 20.6, 'Fix 2 · Website', 'fix'],
  [20.75, 25.9, 'Fix 3 · AI receptionist', 'fix'],
];

export const CUES = [
  { t: EV.carPass, sfx: 'car' },
  { t: EV.siteIn, sfx: 'pop' }, { t: EV.swipe, sfx: 'swipe' },
  { t: EV.ring1, sfx: 'ring', n: 1.15 }, { t: EV.missed, sfx: 'missed' }, { t: EV.callBack, sfx: 'dial' }, { t: EV.reply, sfx: 'msg' },
  { t: EV.pin, sfx: 'pin' },
  { t: EV.call2, sfx: 'tap' },
  { t: EV.ring2, sfx: 'ring', n: 0.9 }, { t: EV.aiAnswer, sfx: 'answer' }, { t: EV.booked, sfx: 'booked' }, { t: EV.crane, sfx: 'rise' },
  { t: EV.end, sfx: 'end' },
];

export const HOLDS = [[28.4, DUR]];
export const DROPS = [];
