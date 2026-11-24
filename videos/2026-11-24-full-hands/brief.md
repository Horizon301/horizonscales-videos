# #28 Full Hands · brief (Nov 24, 2026)

- **Topic:** T1, missed call while on a job ("My hands were full and I lost the job"; T1 not used in the last 3: T10, T9, T6). **Format:** P1, homeowner's story (ref #18 three-roofers, #22 next-plumber). **Trade:** flooring / tile (first flooring video).
- **Arm:** TEXT (no voice; voice on hold since Kai's Nov 18 evening note, Test 1 paused). AI-content labels off.
- **Buddy test:** "a tile guy would tell his buddy this video is about a lady who called him while his hands were in mortar; he didn't pick up, the next guy did and got the job, and when he called back she'd already booked someone."
- **What's new in the story:** both sides at once. Her phone fills the frame; a round inset, "YOU, RIGHT NOW", shows the owner laying tile with his phone buzzing face-down on the floor. No wrapper: a phone, a calling screen, a list, a booking, a text.

## Hook (frame 0, top panel)
"FLOORING PROS: She called while you were laying tile. Who picked up?" · score **45.6 (WEAK)**, picked as the clearest (it names the trade, the moment and the question). Others (`kit/skills/instagram-agent/ig-reel/hookscore.py`):
- "Flooring pros: she called you mid-job. What did she do next?" 47.0 (vaguer: "mid-job")
- "Tile setters: your phone rang on the floor. Who got her job?" 47.0 (less clear who "her" is)
- "Flooring pros: your hands are full of grout. Who answers her call?" 45.6
- "Flooring pros: she called while your hands were full. Who got the job?" 44.2

## Script (23.4 s)
- 0.0 HER PHONE calls "Your business": Calling…, 3 rings. Inset YOU, RIGHT NOW: top-down floor, tiles laid, a trowel in an orange work glove combing mortar, your phone face-down buzzing on each ring. "She calls you about her floor." → 3.0 "Your hands are full of mortar."
- 5.8 "No answer" → "Call ended": "No answer. She hangs up."
- 6.6 her list "Flooring near me": Your business (No answer, red ✕), Next flooring co. (Open now, Call). 8.1 she taps Call.
- 8.4 "She calls the next one." Calling… → 10.0 Connected, "Hello, flooring!" (a new tile drops into place in the inset).
- 11.2 green check, "Booked · Thursday, 9:00 AM · Next flooring co.": "He picked up. He got the job."
- 13.8 inset closes; the tag flips to YOUR PHONE: "Missed call · 2:14", Calling back… 15.2 her text drops in: "Sorry, already booked someone else!", call ended: "You call back. Too late."
- 17.0 push in: "Who picks up when your hands are full?"
- 20.4 plum circle grows into the end card (logo, "You run the business." / "We help it scale.", "Websites · Ads · AI receptionists", horizonscales.com).

## Look
Her living room in the afternoon: terracotta wall with window light sliding across, a small framed print, cream baseboard, an oak plank floor with a dark water stain (why she's calling). One phone with an espresso HER PHONE tag that flips to a coral YOUR PHONE tag. Round inset with a cream rim and espresso outline, sun-yellow "YOU, RIGHT NOW" label. Espresso hook panel (sun-yellow trade label, cream lines, light-coral question); cream caption cards with an espresso border, one dark-coral phrase. **Archivo** (last used #19) + Young Serif on the end card.

## Sound
Band (sampled, new combination): **nylon guitar, cello, oboe, brush kit** (warm bossa-folk, 100 BPM, A minor → C major). Soft picking under her three rings; stops on "No answer" (one low cello note); thin guitar over her list; side-stick on the tap; a held oboe note while she calls the next one; the full band lifts in C major on "Hello, flooring!" and "Booked"; thin and minor when you call back; stops on her text (low cello, a falling oboe line); builds under the question; C major chord on the end card. Sound effects (3 kinds): ringback, a phone buzzing on a hard floor (only while the inset shows it), one thumb tap.

## Checks
- `sh build.sh`: all technical checks passed (23.4 s, 30 fps, 1080×1920, −14.1 LUFS, true peak −1.5 dBTP, deterministic, no black or flash frames, no frozen stretch after adding a slow drift to the final push-in). Audio note: light low end (acoustic band, on purpose).
- Contact sheets: 10 stills, then 14 frames from the MP4, then 12 frames at 2 s steps from the final MP4. Fixes: inset re-framed (trowel was cut off), stray floor stripes removed, the text banner overlapped the name on your phone (moved down), "Next flooring co." ran under the Call button (button moved down), hang-up button clipped (moved up), the tag hides during the push-in. Every word readable and spelled right.
- Zone overlay (14 frames): hook panel y 180–450, phone bezel x 150–570 / y 540–1180, inset x 587–917 / y 605–935 (right of x 864 it stays above y ≈ 880), captions centred at x 520 around y 1350; nothing but wall and floor in the right strip (x > 864, y > 920) or the bottom strip (y > 1630).
- Rules: no stats, results, prices, guarantees, launch date, real names or pitch; businesses are "Your business" and "Next flooring co."; services only on the end card; 7 captions, each up 2.6–3.4 s.
