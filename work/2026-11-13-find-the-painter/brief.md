# #16 "Find the Painter" (made Nov 13, 2026, nightly run)

**Test arm:** TEXT (no voice; voice is on hold). **Type:** 1, a game the viewer plays. **Topic:** being found.
**Buddy test:** a painter would tell his buddy this video is about "a town where you get five seconds to find the painter, and his sign is tiny and behind a tree".

## Idea
One game, one turn, one thing to try. A seek-and-find town of sixteen shops. Fifteen have big bright signs. The painter's shop is the plain one with a tiny grey sign behind a tree. The viewer gets five seconds on a clock. After the reveal a homeowner walks past it with her eyes on her phone, and the video ends on one thing an owner can do tonight: search "painter near me" on his own phone. Nothing is explained or sold; the services are only on the plum end card.

## Hook (on frame 0)
"PAINTERS: Can you find the painter in this town?" The whole town is already on screen and moving (cars, walkers, clouds), with a "5" on the countdown badge.
Pattern: direct question + a challenge the viewer can take right away. Written by hand to the runbook's hook rules; the viral-hook-creator, social-post-writer and marketing social skills were not loaded tonight. Options not used: "Painters: could a homeowner find you in 5 seconds?" (reads as a claim about how long homeowners look), "Painters: where are you in this picture?" (less clear what to do).

## Script (on-screen words only, no voice)
| Time | Picture | Caption |
|---|---|---|
| 0.0–2.5 | The town, wide. Badge shows 5. | You get 5 seconds. |
| 2.5–7.5 | Countdown 5, 4, 3, 2, 1 with a small zoom punch on each tick; the ring on the badge runs down and turns coral for 2 and 1. | Find the painter. |
| 7.5–9.0 | Flash, small shake, the picture dims. | Time's up. |
| 9.0–10.9 | A coral ring draws around the plain shop and the camera pushes in on it. | There he is. |
| 10.9–12.75 | Close on the shop: a small grey "PAINTING" sign, half behind the tree, a ladder and two paint cans. | Tiny sign. Behind a tree. |
| 12.75–15.25 | A homeowner in a yellow coat walks past the door looking at her phone. | A homeowner walks past. |
| 15.25–17.1 | The camera pulls back; a search bar drops in and "painter near me" is typed. | Try this tonight: |
| 17.1–19.6 | The search bar stays. | Can you find yourself? |
| 19.6–23.5 | Plum end card rises from the bottom: logo, "You run the business." / "We help it scale.", "Websites · Ads · AI receptionists", horizonscales.com | |

Length 23.5 s. Every caption is up 1.5 s or longer.

## Look
A picture-book seek-and-find town, new for the channel: four rows of four flat shopfronts with ink outlines, striped awnings and big sign boards, a plain house at each end of every row, cars and walkers on every street, a park with a path and a pond underneath. Built in the kit's canvas format; no animation skill's engine was used (the "find it" game needed its own drawing). Typeface pairing is new: Fredoka (title, captions, shop signs) with Poppins for the small label. The hook sits on a white panel with a coral edge at the top for the whole video; captions are dark plum cards with cream words and one sun-yellow key phrase, centred at x 500, y 1325; the countdown badge and the search bar sit under them, above y 1540.

## Sound
Real sampled instruments (`kit/sound/sf_render.py`, `music.py` writes `music.json`). **Band: nylon guitar, upright bass, recorder, hand percussion (bongos, shaker, claves, tambourine, triangle); 96 BPM, G major.** The middle is a one-a-second countdown: claves tick, the bass climbs a step each second, bongos roll into "Time's up", where the band stops on one hit. The band comes back on the reveal and lands a tambourine and conga hit on every caption change; a triangle marks each end-card line. No sound effects and no synth beeps.
Measured: −14.2 LUFS, true peak −1.3 dBTP. Claude can't hear it.

## Checks
- `sh build.sh`: all technical checks passed (determinism, 1080×1920, 30 fps, 23.5 s, audio, no black frames, loudness, true peak). One fix on the way: the first build's true peak was −0.6 dBTP; the percussion and the "Time's up" hit were turned down.
- Contact sheet (22 stills) and zone overlay (15 frames incl. the cover) looked at: every caption readable and spelled right, nothing cut off. One fix: "A homeowner walks right past." ran into the right-hand button strip, so it became "A homeowner walks past." The hook panel sits at y 176–396 (rule 1). The painter's shop, the ring, the badge and the search bar are inside the safe zone. In the wide shots the PETS and GYM signs sit under the button strip; they are decoys, not the answer.
- The "PAINTING" sign is 14 px on purpose (it is the joke) and is readable in the close-up.
- Rules: no stats, results, prices, guarantees, dates, real business names, real people or pitch. Shop names are generic words. "A homeowner walks past" describes the picture. No voice, so AI-content labels stay off.

## Caption (one for all four apps)
Painters: can you find the painter in this town? 🔎
Sixteen shops, one painter, five seconds on the clock.
Then try it for real: search "painter near me" on your own phone tonight. Did you find yourself? 👇
#smallbusiness #servicebusiness #contractorlife #localbusiness #paintingcontractor

- TikTok title: Can you find the painter in this town?
- YouTube Shorts title: Can you find the painter in 5 seconds? #contractorlife #shorts
- Facebook Reel title: Find the Painter
