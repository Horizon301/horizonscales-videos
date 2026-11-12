# #15 "Worst Time" (made Nov 12, 2026, nightly run)

**Test arm:** TEXT (no voice; voice is on hold). **Type:** 3, a trade-life moment with no lesson. **Topic:** answering calls.
**Buddy test:** a painter would tell his buddy this video is about "the phone always ringing when your hands are full".

## Idea
One joke, told once. A painter's phone rings every time his hands are full, and stays silent the moment they are free. Nothing is explained and nothing is sold; the services are only on the plum end card.

## Hook (on frame 0)
"PAINTERS: Why does the phone only ring when your hands are full?" The painter is already on the ladder with a roller in one hand and a tray in the other, the phone in his shirt pocket is already ringing (green screen, ring arcs, a RING! burst) and the ring is the first sound.
Pattern: direct question + recognition (empathy). Written by hand to the runbook's hook rules; the viral-hook-creator skill was not loaded tonight. Options not used: "Painters: where's your phone right now?" (no picture to go with it), "Painters: how many calls come in while you're up a ladder?" (asks for a number).

## Script (on-screen words only, no voice)
| Time | Picture | Caption |
|---|---|---|
| 0.0–3.6 | Top of a stepladder, rolling a teal wall. The phone rings twice. He freezes and sweats. | Top of the ladder. |
| 3.6–6.0 | Walking past a fence with a full bucket in each hand. Ring. He stops dead, the buckets slosh. | Both hands full. |
| 6.0–9.6 | Cutting in a coral line under white trim. Ring: the line turns into a zigzag. | Cutting in a clean line. → It was clean. |
| 9.6–14.4 | Lunch on an upturned bucket, phone in both hands. Clouds drift, a fly circles, three dots count. He looks at us. | Lunch. Hands free. → Nothing. |
| 14.4–17.8 | Back up the ladder, roller up. Ring. He looks at us, deadpan; slow push-in. | Back up the ladder. → There it is. |
| 17.8–22.2 | Plum end card: logo, "You run the business." / "We help it scale.", "Websites · Ads · AI receptionists", horizonscales.com | |

Length 22.2 s. Every caption is up 1.6 s or longer.

## Look
Borrowed from Kai's `animation-skills:stick-figure` skill: its stick-figure rig and drawing helpers (`web/lib.js`, `web/chars.js`) are inlined in `index.html`, with a painter's cap added. Built in the kit's canvas format, not the skill's own engine (that engine is timed to a voiceover). Bright flat colours with thick ink outlines, a white-overalls painter with a coral cap, whip slides between five scenes, a slow push-in on every scene and a shake and punch on every ring. The hook sits on a cream panel at the top for the whole video; captions are white cards with an ink outline and one coral key word (Poppins 600), centred at x 500, y 1345. Title in Young Serif.

## Sound
Real sampled instruments (`kit/sound/sf_render.py`, `music.py` writes `music.json`). **Band: tuba, accordion, clarinet, brush kit; oom-pah at 100 BPM in C major.** One real-world sound effect: a sampled telephone ring (General MIDI "telephone"). The band stops dead on the rings in scenes 2, 3 and 5; a two-note tuba answers the ruined line; lunch is only wood blocks ticking and a waiting clarinet; a soft crash marks each scene change; a triangle marks each end-card line. No synth beeps.
Measured: −14.2 LUFS, true peak −1.0 dBTP, band balance OK. Claude can't hear it.

## Checks
- `sh build.sh`: all technical checks passed (determinism, 1080×1920, 30 fps, 22.2 s, audio, no black frames, loudness, true peak). One fix on the way: the first build failed "no black frames" at 18.13–18.33 s; the end-card glow and first tag line now come in earlier.
- Contact sheet (22 stills) and zone overlay (12 frames) looked at: every word readable, nothing cut off, nothing that matters in the right-hand button strip or the bottom strip. The hook sits at y 170–400 (rule 1).
- Rules: no stats, results, prices, guarantees, dates, business names, real people or pitch. The AI receptionist appears only as words on the end card. No voice, so AI-content labels stay off.

## Caption (one for all four apps)
Painters: why does the phone only ring when your hands are full? 📞
Top of the ladder. Two full buckets. Halfway through a cut-in. Sit down for lunch and it goes quiet.
Where were you the last time it rang at the worst moment? 👇
#smallbusiness #servicebusiness #contractorlife #localbusiness #paintingcontractor

- TikTok title: Why does the phone only ring when your hands are full?
- YouTube Shorts title: Why does the phone only ring when your hands are full? #contractorlife #shorts
- Facebook Reel title: Worst Time
