# #31 on-top · Nov 27, 2026 (nightly run)

- **Topic:** T7 (website with no clear way to call) · **Frame:** F3 (mid-action → what's happening → what it costs → the fix; first F3 video) · **VOICE (kai)** (Chatterbox from Kai's private clip; AI-content labels on) · **Trade:** pest control (first pest control video)
- **Length:** 26.4 s (end card from 23.5 s) · 1080×1920, 30 fps · −14.1 LUFS, true peak −1.4 dBTP
- Built from the v3 standard (`kit/examples/model-3reasons/`): big cartoon people, two-line captions with one yellow phrase, every line true, an ending that answers the opening question. No 1-2-3 chips because F3 has no list.

## Hook (hookscore.py)
- **"Mouse in her kitchen. Can she find your number?" · 47.0** ← picked (clearest: the moment and the question in nine words; the ending answers it)
- "She's on a chair. Where's your phone number?" · 47.0 (not picked: the picture shows her from the chest up, so no chair is seen)
- "Pest control pros: a mouse is loose. Where's your number?" · 47.0 (three lines on the panel)
- "Pest control pros: can she find your number?" · 37.8

## Script (Kai's voice, every line checked by speech-to-text, 0 word errors)
| key | line | caption |
|---|---|---|
| v0 | There's a mouse in her kitchen. Can she find your number? | Can she find / **your number?** |
| w1 | She's on your website right now, scrolling. | She's on / **your website.** → **Scrolling.** |
| w2 | Photos. Your story. Still no phone number. | Photos. / Your **story.** → Still / **no phone number.** |
| c1 | So she goes back, and calls the next company. | She goes **back.** → She calls / **the next company.** |
| b | So, here's the fix. (0.7 s pause before, recap card + mint flash) | Here's / **the fix:** |
| f1 | Put a call button at the top of every page. | **Call button** / on top. → On **every page.** |
| f2 | And keep it on screen while she scrolls. | It **stays** / while she scrolls. |
| v5 | Put your number on top, and next time, she calls you. (0.8 s pause, warm wash) | Your number / **on top.** → Next time, / **she calls you.** |

Truth check: no tease, no stats, prices, names or promises. The fixes are plain advice (a Call button at the top of every page that stays on screen). The ending answers the opening question ("Can she find your number?" → "Put your number on top, and next time, she calls you.", the same ending shape as the model).

## Picture
Her kitchen (butter-yellow wall, teal cabinets, cream tile, a coral kettle steaming), an island in front with a grey mouse running back and forth on it from frame 0; the homeowner (auburn bun, purple top) startled, her thumb scrolling a big phone showing "PEST CO." with a "Number?" thought bubble → she keeps scrolling → close-up: PHOTOS, OUR STORY, then a red "No phone number" stamp → the page swipes back to "NEXT PEST CO." with a green Call now button on top, a tap, then "CALLING · Next pest company" with the phone at her ear → the pest control owner (navy cap, khaki shirt, PEST label) on a sunny street with the recap card "Why she left: She scrolled / No number in sight / Called the next one" (red ✕) → his phone: a green Call now button drops onto the top of his site, page labels flip (Photos page, About page) while it stays → the page scrolls under the button, a "Stays put" tag → her again, smiling: the site with Call now on top and a "Found it!" bubble, then "CALLING · Pest Co." while the mouse runs off → plum end card.

## Sound
Band: 92 BPM 4-bar loop F–Dm–B♭–C, one chord per bar, nylon guitar + vibraphone + acoustic bass + brush kit (sampled), nothing timed to cuts, last F chord on the end card; band bus 0.28 under the voice. SFX: only the ringback she hears when she calls the next company (bus 0.12).

## Checks
build.sh "All technical checks passed." · contact sheet with 25 stills (person with a face in frame 0, mouse moving from the first frame, hook 2 lines, captions match the voice, all words readable) · zone overlay on 12 frames (no text in the avoid strips; only background, the kettle and the mouse) · voice report: FAILED none · caption times inside each line set from speech-to-text word times · earshot critique ran: first pass flagged the band as synthetic-sounding (critical) and a weak last chord (major); the band was changed to acoustic instruments and the last chord made stronger; final pass 0 critical, 0 major (minor notes only: near-mono mix, light low end). Its tips to add whooshes or hits on cuts were not followed because the runbook forbids sounds on cuts.
