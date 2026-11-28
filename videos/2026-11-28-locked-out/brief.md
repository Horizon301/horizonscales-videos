# #32 locked-out · Nov 28, 2026 (nightly run)

- **Topic:** T5 (not showing up when someone searches) · **Frame:** F4 ("If you're a ___, watch this" → the problem → the fix; first F4 video) · **VOICE (kai)** (Chatterbox from Kai's private clip; AI-content labels on) · **Trade:** locksmiths (first locksmith video)
- **Length:** 27.8 s (end card from 24.9 s) · 1080×1920, 30 fps · −14.2 LUFS, true peak −1.5 dBTP
- Built from the v3 standard (`kit/examples/model-3reasons/`): big cartoon people, two-line captions with one yellow phrase, every line true, an ending that answers the hook's question. No 1-2-3 chips because F4 has no list.

## Hook (hookscore.py)
- **"Locksmiths: she's locked out. Can she find you?" · 47.0** ← picked (clearest: names the trade, the moment and the question in eight words; the ending answers it)
- "Locksmiths: not on the map? Watch this." · 59.6 (not picked: no question for the ending to answer, and "not on the map" is less clear without the picture)
- "If you're a locksmith who's not on the map, watch this." · 48.6 (three lines on the panel; used as the spoken first line)
- "Locked out at night. Can she find your number?" · 47.0 (too close to #31's hook)

## Script (Kai's voice, every line checked by speech-to-text, 0 word errors)
| key | line | caption |
|---|---|---|
| v0 | If you're a locksmith who's not on the map, watch this. | Locksmith? / **Not on the map?** → **Watch this.** |
| p1 | She's locked out, so she searches, locksmith near me. | She's / **locked out.** → She searches: / **locksmith near me** |
| p2 | Three names come up on the map. Yours isn't one. | **Three names** / come up. → Yours / **isn't one.** |
| c1 | So she calls the first one she sees. | She calls / **the first one.** |
| b | So, here's the fix. (0.7 s pause before, recap card + mint flash) | Here's / **the fix:** |
| f1 | Claim your free business listing on the map. | Claim your / **free listing.** |
| f2 | Add your hours, your area, and a few photos. | Add **hours,** / area, photos. |
| v5 | Get on the map, and next time, she can find you. (0.8 s pause, warm wash) | Get / **on the map.** → Next time, / **she can find you.** |

Truth check: no tease, no stats, prices, names or promises. "Free business listing" is true (the business listings on the big map apps cost nothing to claim). The ending says she **can** find you, not that she will call. The fixes are plain advice. The ending answers the hook ("Can she find you?" → "Get on the map, and next time, she can find you.").

## Picture
A snowy evening on her porch (purple siding, a shut red door with a wreath, a glowing porch lamp, falling snow, a snowy railing in front): the homeowner (coral beanie, mustard coat, teal scarf) shivers, a "My keys!" thought bubble from frame 0, her thumb typing on a big phone → the search bar fills in "locksmith near me" → close-up: a map with three red pins and Locksmith A, B, C, then a red "Not yours" stamp → her thumb taps the first one, "CALLING · Locksmith A", phone at her ear → the locksmith (green cap, blue work shirt, KEYS label) on a snowy morning street with the recap card "Why she missed you: She searched / Three names came up / Yours wasn't one" (red ✕) → his phone, "YOUR LISTING": a "Free" tag, a green pin drops, a green "Listed" badge → rows tick on one by one: Hours, Service area, Photos → her again, smiling: the map now shows "Your business" in green on top, a "Found one!" bubble, then "CALLING · Your business" → plum end card.

## Sound
Band: 106 BPM 4-bar loop C–Am–F–G, one chord per bar, grand piano + celesta + acoustic bass + brush kit (sampled), nothing timed to cuts, last C chord on the end card; band bus 0.28 under the voice. SFX: only the ringback she hears when she calls the first locksmith (bus 0.12).

## Checks
build.sh "All technical checks passed." · contact sheets (26 stills, then one every 2 s: a person with a face in frame 0, snow and typing moving from the first frame, hook 2 lines, captions match the voice, all words readable) · zone overlay on 10 frames (no text in the avoid strips) · voice report: FAILED none · caption times inside each line set from speech-to-text word times · earshot critique ran twice: 0 critical; 1 major both times (the last chord on the end card is quieter than the body; it was made fuller once and stayed major; the suggested "logo sting" was not added because the runbook allows only one last chord and nothing timed to the picture).
