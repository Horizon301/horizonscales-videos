# #30 never-done · Nov 26, 2026 (nightly run)

- **Topic:** T8 (website that looks closed or out of date; first T8 video) · **Frame:** F2 (myth → the truth) · **VOICE (kai)** (Chatterbox from Kai's private clip; AI-content labels on) · **Trade:** fence builders (first fence video)
- **Length:** 29.3 s (end card from 26.4 s) · 1080×1920, 30 fps · −14.1 LUFS, true peak −1.4 dBTP
- Built from the v3 standard (`kit/examples/model-3reasons/`): big cartoon people, two-line captions with one yellow phrase, every line true, an ending that answers the opening question. No 1-2-3 chips tonight because F2 has no list.

## Hook (hookscore.py)
- **"Her fence blew down. Why did she think you closed?" · 47.0** ← picked (clearest: the story is in the question, and the ending answers it)
- "Fence builders: your site still says spring sale. Why?" · 77.8 (not picked: the very next line answers it, so there is nothing left to wait for)
- "Fence builders: is your website ever really done?" · 37.8
- "Fence builders: does your website look closed?" · 37.8

## Script (Kai's voice, every line checked by speech-to-text, 0 word errors)
| key | line | caption |
|---|---|---|
| v0 | Her fence blew down. Why did she think you closed? | Why did she think / **you closed?** |
| m (the myth) | You built your website once, and never touched it again. | You built it / **once.** → **Never** touched / it again. |
| s1 | She opens it. It still says spring sale. It's November. | She **opens it.** → It still says / **spring sale.** → It's **November.** |
| s3 | She figures you closed, and calls the next builder. | She figures / **you closed.** → She calls / **the next builder.** |
| b | So, here's the truth. (0.7 s pause before, recap card + mint flash) | Here's / **the truth:** |
| t | A website is never done. | A website is / **never done.** |
| f1 | Twice a year, take down the old banner. | **Twice a year:** / old banner down. |
| f2 | And add a photo from your latest job. | Add a photo: / **your latest job.** |
| v5 | Keep it current, and next time, she knows you're open. (0.8 s pause, warm wash) | Keep it **current.** → Next time, she / **knows you're open.** |

Truth check: no tease, no stats, prices, names or promises. "Twice a year" is advice, not a claim. The ending answers the opening question ("Why did she think you closed?" → "Keep it current, and next time, she knows you're open.").

## Picture
Autumn backyard (blue-to-peach sky, orange and yellow trees, falling leaves), a white picket fence with a blown-down section; the homeowner (rust sweater, cream scarf) with her phone showing "FENCE CO." and a red "SPRING SALE!" banner, a "Closed?" thought bubble → the fence builder (orange cap, green work shirt) hammering a new fence, his phone "YOUR WEBSITE ✓ Built once", then a red "Never touched" → her again: the banner pulses, a calendar card "TODAY · NOV" pops → the site greys out under a "CLOSED?" stamp, then "CALLING · Next fence builder" with the phone at her ear → recap card "Why she left: Built once / Old sale banner / Looked closed" (red ✕) → his phone "YOUR WEBSITE · Never done" with turning arrows → the old banner slides off, a mint "We're open!" banner with a check → a bright new fence photo with a "NEW" tag → her, smiling, the fresh site and an "Open!" thought bubble → plum end card.

## Sound
Band: 100 BPM 4-bar loop G–Em–C–D, one chord per bar, steel-string guitar + marimba + acoustic bass + room kit (sampled), nothing timed to cuts, last G chord on the end card; band bus 0.28 under the voice. SFX: only the ringback she hears when she calls the next builder (bus 0.12).

## Checks
build.sh "All technical checks passed." · contact sheet every ~1.3 s (person with a face in frame 0, hook 2 lines, captions match the voice, all words readable) · zone overlay on 12 frames (nothing in the avoid strips but the background and the character's body) · voice report: FAILED none · caption times inside each line set from speech-to-text word times · earshot critique ran: no critical rows; minor notes only (near-mono mix, light low end), and its tip to add whooshes on cuts was not followed because the runbook forbids sounds on cuts.
