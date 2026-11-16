# #19 One Tap · brief (nightly run, Nov 16, 2026)

- **Test arm:** TEXT (no voice). Voice is still on hold (RUNBOOK section 0), so Test 1 doesn't alternate.
- **Type (RUNBOOK 2b-2):** 1, a game the viewer plays (games are the format to beat after #16's ≈47% on Instagram). Last night was type 5.
- **Topic:** being found (what shows on a search listing). Last two nights were answering calls (#18) and websites (#17). Trade: hardscapers (first nightly video for them).
- **Buddy test:** "a hardscaper would tell his buddy this video is about which patio guy she tapped in a search, and the photo on your listing."
- **Skills:** hook scored with `kit/skills/instagram-agent/ig-reel/hookscore.py`; caption checked against the `marketing-skills:social` "no AI tells" rules and the ig-caption 125-character rule by hand. No animation skill engine; the poster look is built in the kit canvas.

## Hook (frame 0, top panel)
"HARDSCAPERS: 3 patio builders. She taps one. Can you guess which?" · pattern: question / game · **hook score 88.0 (STRONG)**.
Rejected: "Hardscapers: which one would she tap?" (30.0), "… would she tap your listing or the next guy's?" (37.8), "… can you guess which patio builder she calls?" (37.8), "… 3 patio builders, one search. Which one does she call?" (49.2), "… she has 3 patio builders and 3 seconds. Who gets the call?" (47.8), "… she only taps 1 of these 3. Would you pick right?" (83.0).

## Script (23.0 s)
- 0.0 hook panel + a phone with three search results for "patio builder near me" (Hardscaper A, B, C, identical except the picture), countdown disc "3". Caption "She needs a new patio."
- 1.2 / 2.4 countdown 2, 1 · 1.8 "You get 3 seconds."
- 3.6 "time" · her thumb drifts over A, B, lands on C: "Her thumb goes to…"
- 5.0 tap (ripple, C lights up, A and B fade) · 5.4 "She tapped C."
- 7.2 A lit: "A: no photo." (grey placeholder) · 9.0 B lit: "B: just a logo." · 10.8 C lit: "C: a patio he built."
- 12.8 "She could see the work."
- 14.8 the search bar retypes "your business"; a listing "Your business" slides in with a yellow "?" photo: "Search your business tonight."
- 16.8 a coral ring around the photo slot: "What photo shows up first?"
- 19.2 plum end card rises (logo, "You run the business." / "We help it scale.", "Websites · Ads · AI receptionists", horizonscales.com).

## Look
Swiss / Bauhaus poster: warm paper with a thin black grid and grain, big flat shapes (sun-yellow disc, ink-blue half disc, coral bar, a thin black ring) that slide and turn to a new arrangement on every beat; a flat black phone with a coral offset shadow; black letter discs A/B/C beside it; a coral countdown disc with an emptying ring; captions as black blocks with a coral offset, one phrase in sun yellow. Archivo 500/600 + Instrument Serif Italic (new pairing, added to `kit/fonts`). Thumbnails drawn flat: grey placeholder, a made-up stacked-paver mark, a patio with pavers, fire pit and planter.

## Sound
Band (sampled, `sf_render.py`): **steel drums, slap bass, clean electric guitar, standard kit with congas** (calypso-pop, 108 BPM, E-flat major). Congas + high agogo count down 3-2-1; the band stops on "time" while the bass creeps up; crash on the tap; thin and minor (bass, rim, congas) on A and B; full band on C; guitar and congas only under the typing; F minor → B-flat on the question; home to E-flat on the end card. Two sound effects, both in the picture: her thumb tapping the glass, the phone keyboard. No voice.

## Checks
- `sh build.sh`: all technical checks passed (23.0 s, 30 fps, 1080×1920, −14.1 LUFS, true peak −1.4 dBTP, deterministic, no black frames).
- Contact sheets (qa/s1–s3, 22 stills): every word readable, nothing cut off. Fixes before the final: the camera pan on A/B/C pushed the phone into the caption and the title (now a small zoom with the other rows dimmed); the first logo mark read as a mouse cursor (now stacked pavers); the lit row was dimmed along with the others.
- Zone overlay (11 frames): title y 172–412 (same band as earlier videos), phone x 230–866, countdown disc x 746–938 above y 580, captions centred at x 500 around y 1340; nothing that matters in the right-hand button strip or the bottom strip (only the background shapes).
- Rules: no stats, results, prices, guarantees, launch date, real names or pitch. "3 seconds" is the game timer, "3 patio builders" counts the listings. The story says what she did, not what all homeowners do. One idea (the listing photo), no service named before the end card.
