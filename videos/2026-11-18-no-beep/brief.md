# #21 No Beep · brief (nightly run, Nov 18, 2026)

- **Test arm:** TEXT (no voice). Voice is still on hold (RUNBOOK section 0), so Test 1 doesn't alternate.
- **Type (RUNBOOK 2b-2):** 4, a myth or hot take (the first type-4 video). Last night was type 1 (a game), so not a game tonight.
- **Topic:** answering calls (the voicemail greeting). Last three nights: answering calls (#18), being found (#19), websites (#20). Trade: plumbers (first plumber video).
- **Buddy test:** "a plumber would tell his buddy this video is about how nobody sits through a long voicemail greeting, and to call his own number and listen."
- **Skills:** hook scored with `kit/skills/instagram-agent/ig-reel/hookscore.py`; captions written by hand to the `marketing-skills:social` "no AI tells" rules and the ig-caption 125-character rule. No animation-skill engine; the karaoke look is built in the kit canvas. Real-sfx (RUNBOOK 3c) skipped: `kit/sfx-library/` is still empty.

## Hook (frame 0, top panel)
"PLUMBERS: HOT TAKE. Nobody waits for the beep. Would you?" · pattern: hot take + direct question · **hook score 84.4 (STRONG)**.
Rejected: "Plumbers: would YOU wait for the beep on this voicemail?" (37.8), "Plumbers: does anyone still leave a voicemail?" (44.4), "Plumbers: her sink is flooding. Would she wait for your beep?" (45.6), "Plumbers: her sink is leaking. Would you sit through your own voicemail?" (45.6), "Plumbers: is your voicemail greeting longer than her patience?" (36.4), "Plumbers: hot take. Nobody leaves a voicemail anymore. Do you?" (80.0).

## Script (25.0 s)
- 0.0 hook panel (cream marquee sign with chase-light bulbs); a karaoke TV shows a call screen ("Plumber", tap to call) with a little leaking faucet in the corner. Caption "Her sink is leaking."
- 2.2 the call rings out (ringback): "She calls a plumber."
- 4.0 static flash; the karaoke title card: "♪ NOW PLAYING ♪ 'Your Voicemail Greeting' by: the plumber who didn't pick up": "No answer. Then this:"
- 5.6–13.2 the greeting plays as karaoke lyrics, line by line, filling with sun yellow under a bouncing coral ball, a song bar crawling 0:00 → 0:41: "Hi! You've reached the office of…" / "We're either on another line" / "or away from the phone right now." / "Please leave your name and your number," / "a brief message, and after the…". Captions: "It's a long one." → "Her sink is still leaking." → "Still going." → "Almost to the beep…"
- 13.2 the band stops dead; a red CALL ENDED stamp, "Message left: none": "She hung up before the beep."
- 15.0 "Plumber #2, Calling…": "Already calling the next one."
- 16.8 karaoke score screen: "YOUR SCORE 0", five empty stars, "Nobody stayed for the beep.": caption "Nobody waits for the beep."
- 18.8 "Your business, Calling…": "Call your own number tonight."
- 20.8 "♪ NEXT SONG ♪ 'Your Voicemail Greeting'" and a big coral "?", bar "0:00 / ?:??": "Would YOU wait for the beep?"
- 22.4 the TV screen zooms to fill the frame and becomes the plum end card (logo, "You run the business." / "We help it scale.", "Websites · Ads · AI receptionists", horizonscales.com).

## Look
Karaoke night, new for the channel: a small lounge (velvet plum wall with a sparkly tinsel curtain, two sweeping coral and yellow stage lights, a mic stand, a stage floor) and a big karaoke TV with the classic blue screen, scan lines, soft moving light blobs and a static flash on every cut. Lyrics in white with a dark outline that fill sun yellow; a bouncing coral ball. Captions on dark pill labels with a coral rim and the key phrase in sun yellow. **Righteous + Outfit** (new pairing, both added to `kit/fonts` with their OFL licences).

## Sound
Band (sampled, `sf_render.py`): **FM electric piano, harmonica, synth bass, power kit** (80s soft-rock karaoke ballad, 80 BPM, G major). Soft e-piano intro under the hook; a held E-minor pedal while the phone rings; a tom fill and crash into "Now playing"; one chord per lyric line (G, D, Em, C, Dsus) with a harmonica sing-along line; the band stops dead on the hang-up (one low tom); a lonely bass under the second call; a sad falling harmonica over C minor on the score of 0; the groove back for the tip; C to Dsus left open on the question; a fill, crash and harmonica tag home to G on the end card. Three sound effects, all in the picture: the ringback under each call, drips from the faucet, and the call-ended tone. No voice.

## Checks
- `sh build.sh`: all technical checks passed (25.0 s, 30 fps, 1080×1920, −14.1 LUFS, true peak −1.2 dBTP, deterministic, no black frames).
- Contact sheets (qa/s1–s5; stills at most 2 s apart): every word readable and spelled right, nothing cut off. Fixes: the lyrics were too small on one row, so each line now sits on two rows at about 62 px; the bouncing ball sat on top of the letters, so the active line got more row spacing and the ball rides between the rows.
- Zone overlay (8 frames): hook y 172–412 (the same band as earlier videos), TV x 150–850 and y 470–1170 (left of x 864), captions centred at x 500 around y 1340; only the curtain, lights, mic stand and stage floor sit in the avoid strips.
- Rules: no stats, results, prices, guarantees, launch date, real names or pitch. "Plumber", "Plumber #2" and the 0:41 song length are made up and part of the joke; "Nobody waits for the beep" is labelled as a hot take (an opinion), not a statistic. One idea (the voicemail greeting), no service named before the end card.
