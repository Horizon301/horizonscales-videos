# #25 Dead January · brief (Nov 21, 2026)

- **Topic:** T10, busy season vs. empty season (first T10 video). **Format:** P3, trade-life moment (no lesson). **Trade:** landscapers.
- **Arm:** TEXT (no voice; voice on hold since Nov 18, Test 1 paused). AI-content labels off.
- **Buddy test:** "a landscaper would tell his buddy this video is about how the phone won't stop in June and the only call in January is spam."
- **Why this one:** the last 3 videos were T1 (missed call), T2 (after hours), T4 (slow form reply). T10 hasn't been done. Since RUNBOOK v2 all videos have been proven formats; P3 (proven, ref. #15 worst-time) tonight. One phone, real screens (calendar, notifications, incoming call, recents), no wrapper.

## Hook (frame 0, top panel)
"LANDSCAPERS: Your phone rings all June. Who calls in January?" · score **48.6 (WEAK on the scorer's STAKES)**, picked because it is the clearest. Others:
- "Landscapers: 31 days booked in June. How many in January?" 50.6 (higher, but a made-up count and harder to read at once)
- "Landscapers: why is your phone full in June and dead in January?" 48.6
- "Landscapers: what does your January look like?" 47.0
- "Landscapers: June is packed. Why is January empty?" 42.2

## Script (23.4 s)
- 0.0 YOUR PHONE: the June calendar, green job tags (Mow, Patio, Mulch, Edging…) filling every day: "June. Every day is booked."
- 3.0 notification banners pile up: "Can you mow Saturday?", "Missed call", "Missed call (2)", "Need a quote for edging", "Voicemail · 3 new", "Missed call (3)": "Your phone won't stop."
- 5.8 incoming call, "Unknown caller", the phone buzzes; the thumb taps Decline, "Call declined", then "Missed call (4)" in red on top of the stack: "You can't get to them all."
- 8.6 the months flip, July to December, the jobs thin out; the lawn behind turns to falling leaves, then snow: "Then the season ends."
- 11.6 January: an empty calendar, "Nothing scheduled": "January. Nothing booked."
- 14.4 Recents: pull to refresh, "No recent calls"; then one call: "Spam Likely" (Spam risk), declined: "The only call is spam."
- 17.2 two cards: June (all green, "Too busy to answer") and January (empty, "Nothing to answer"): "Who calls you in January?"
- 20.4 plum circle grows into the end card (logo, "You run the business." / "We help it scale.", "Websites · Ads · AI receptionists", horizonscales.com).

## Look
A mowed lawn seen from above (diagonal mower stripes, slow drift, soft summer sun) that turns gold with falling leaves, then white with snow as the months flip. One phone with a forest-green YOUR PHONE tag. Forest-green hook panel (sun-yellow trade label, cream line, light-coral question); cream caption cards with a forest-green border and text, one dark-coral phrase. Nunito throughout (first posted use as the main face) + Young Serif on the end card.

## Sound
Band (sampled, new): **Hammond organ, brass section, glockenspiel, acoustic bass, standard kit** (sunny soul-pop, 112 BPM, A major). Busy through June, a brass stab on Decline, one chord per month as the band thins, January is only glockenspiel and a held organ chord in A minor, then it builds back for the question and end card. Sound effects: notification pings, the phone buzzing (two calls), thumb taps.

## Checks
- `sh build.sh`: all technical checks passed (23.4 s, 30 fps, 1080×1920, −14.1 LUFS, true peak −1.0 dBTP, deterministic, no black or flash frames). First build failed true peak (−0.7): pings, taps, the brass stab and hats were turned down and the band high-pass raised to 100 Hz.
- Contact sheets: 14 stills, one fix (notification banners were see-through over the calendar and covered "June"; now solid, stacked below the month name, calendar dimmed behind; "Missed call (4)" now joins the stack instead of popping over the header), then 12 frames at 2 s steps from the final MP4: every word readable and spelled right.
- Zone overlay (8 frames): hook y 180–410, phone x 280–760 and y 450–1240, captions centred at x 520 around y 1350; nothing but lawn/snow in the right strip (x > 864, y > 920) or the bottom strip (y > 1630).
- Rules: no stats, results, prices, guarantees, launch date, real names or pitch ("Spam Likely" is the phone's generic label); no service named before the end card; 7 captions, each up 2.8–3.3 s.
