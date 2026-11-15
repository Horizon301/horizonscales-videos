# #18 "Three Roofers" (made Nov 15, 2026, nightly run)

**Test arm:** TEXT (no voice; voice is still on hold per RUNBOOK section 0, so the VOICE/TEXT alternation is paused). **Type:** 5, the homeowner's point of view (the last four nightly videos were types 1, 3, 1, 2). **Topic:** answering calls (the last two were being found and websites). **Trade:** roofers (the last four were painters and landscapers).
**Buddy test:** a roofer would tell his buddy this video is about "a lady with a leaky ceiling calls three roofers. One's mailbox is full, one just rings, the third picks up and gets the job. Which one are you?"

## Idea
One small story told from the homeowner's side of the phone. Her ceiling drips into a bucket at night. She calls roofer #1: it rings, then "The mailbox is full." She calls roofer #2: it just rings. She calls roofer #3: "Hello, roofing!" Next morning there's a ladder at her window. Then the three roofers side by side (Mailbox full / No answer / Picked up, "Got the job") and the question back to the viewer. No service is named or explained; the services are only on the plum end card.

## Hook (on frame 0)
"ROOFERS: 3 roofers got her call. Which one are you?" on a cream panel at the top, with the rainy-night room, the dripping ceiling and the bucket already on screen and moving.
Pattern: direct question to the trade owner that puts him in the story (self-identification; he has to watch to see the three options). Written by hand to the runbook's hook rules (the hook/caption skills weren't loaded tonight).
Hook scores (`hookscore.py`): **58.4 "Roofers: 3 roofers got her call. Which one are you?"** (used; weakest property: stakes) · 58.4 "Roofers: she called 3 of you. Which one are you?" (vaguer) · 57.1 "Roofers: 3 of you got her 10 PM call. Which one are you?" (longer) · 54.8 "Roofers: her roof leaks at 10 PM. Which one are you?" · 45.0 "Roofers: what does a homeowner hear when you don't pick up?" (payload too late). The "3" counts the roofers in the story; it isn't a statistic.

## Script (on-screen words only, no voice)
| Time | Picture | Caption |
|---|---|---|
| 0.0–2.0 | Rainy night, a woman with her phone at her ear, a ceiling stain dripping into a red bucket. | Her ceiling is leaking. |
| 2.0–4.6 | Push-in; a "Calling · Roofer #1" card swings in; "ring…" balloon (ringback tone). | She calls the first roofer. |
| 4.6–6.4 | Grey recorded-message box: "The mailbox is full." The band stops, she frowns. | His mailbox is full. |
| 6.4–8.2 | A red X stamps card #1, card #2 swings in, "ring…". | She tries the next one. |
| 8.2–10.6 | It rings three times; the celesta ticks; X stamps card #2. | It just rings. |
| 10.6–12.0 | Card #3, one ring. | Roofer number three. |
| 12.0–14.0 | Yellow balloon "Hello, roofing!", card says CONNECTED, she smiles, the band opens up. | He picks up. |
| 14.0–15.8 | Flash to morning: sunny wall, a ladder at the window, no bucket. | He gets the job. |
| 15.8–17.8 | Room dims; three cards land: #1 Mailbox full ✕, #2 No answer ✕, #3 Picked up ✓ "Got the job". | Three roofers. One job. |
| 17.8–20.0 | The three cards pulse. | Which one are you? |
| 20.0–24.0 | Plum end card slides in: logo, "You run the business." / "We help it scale.", "Websites · Ads · AI receptionists", horizonscales.com. | — |

## Look
Mid-century flat cartoon, new for the channel: teal night wall with a thin diamond wallpaper, mustard, brick red and cream, a skewed window with rain and a crescent moon, a floor lamp, a starred rug; flat colour shapes with a thin brush-ink line drawn slightly off them, dry-brush scratch texture over everything, the woman animated on twos (12 fps limited animation). Captions are cream cards with an offset ink shadow, one word in brick red. Typefaces: **Josefin Sans + Fraunces Italic** (new pairing, added to `kit/fonts` from Fontsource, SIL OFL). No animation skill used; our own look.

## Sound
Real sampled instruments (GeneralUser GS), no synth beeps. **Band: muted trumpet, celesta, fretless bass, jazz kit (cool-jazz noir, 100 BPM, D minor opening to F major on the pick-up).** Hits on every caption change (kick + snare + celesta stab, crash on the big ones), the band thins under each ringback, stops on "The mailbox is full", ticks under "It just rings", and opens up when he picks up. Three sound effects, all things in the picture: the ringback tone in her phone, the drip landing in the bucket, soft rain on the window (stops at morning). No voice.

## Checks
- `sh build.sh`: all technical checks passed (determinism, 1080×1920, 30 fps, 24.0 s, audio, no black frames, −14.2 LUFS, true peak −1.4 dBTP). The "sudden jumps" it lists are the deliberate beat punches and the morning flash.
- Contact sheets (13 + 6 + 3 + 16 stills) and a 10-frame zone overlay: hook at the top (y 172–400), captions centred at x 500 around y 1340 (≤ 600 px wide), call card and balloons inside x 470–910 and above y 935, the three end cards inside x 150–930 and above y 890; nothing that matters in the right button strip or the bottom strip (only the rug pattern). Fixes before the final build: the "mailbox is full" box overlapped her phone (moved right, smaller type), the three end cards overlapped and the small call card showed behind them (spaced out, card hidden), the "Got the job" label was unreadable (now a mustard tag).
- Rules: no stats, results, prices, guarantees, launch date or pitch; no real business or person ("Roofer #1–#3"); one idea, one story; no service named before the end card. "He gets the job" is the end of the made-up story, not a promise.
