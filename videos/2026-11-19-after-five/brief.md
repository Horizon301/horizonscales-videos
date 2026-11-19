# #23 After Five · brief (Nov 19, 2026)

- **Topic:** T2, calls after hours. **Format:** P3, trade-life moment (from the owner's phone). **Trade:** HVAC (first HVAC video).
- **Arm:** TEXT (no voice; voice on hold since Nov 18, Test 1 paused). AI-content labels off.
- **Buddy test:** "an HVAC guy would tell his buddy this video is about the call that comes in at 8:47 PM: you call back in the morning and somebody already went out last night."
- **Why this one:** last 3 videos were T8 (footer year), T3/T1 (voicemail, missed call). T2 is new for RUNBOOK v2. Plain story, one phone, real screens, no wrapper.

## Hook (frame 0, top panel)
"HVAC OWNERS: She called at 8:47 PM. When do you call back?" · score 53.5 (OK). Picked as the clearest of three:
- "HVAC owners: her furnace quit at 8:47 PM. Who did she call?" 57.7 (scores higher, but the story is told from YOUR phone and the question is about when you call back, so this one is less clear)
- "HVAC owners: who answers when she calls at 8:47 PM?" 43.4

## Script (22.2 s)
- 0.0 YOUR PHONE, night sky: "Unknown caller · Incoming call…", buzzing, nobody answers: "8:47 PM. / You're home for the night."
- 2.8 lock screen 8:48 PM: "Missed call · 8:47 PM", then a text "Our furnace quit. Anyone free tonight?": "Her furnace just quit."
- 5.6 the clock rolls through the night to 7:12 AM, the moon sets, the sun comes up: "You see it in the morning."
- 8.2 "Last night's caller · Calling…": "You call her back."
- 10.8 "Connected", bubble "Oh, someone came last night. Thanks!", then "Call ended": "Too late. / Someone came last night."
- 13.6 two cards: "She called 8:47 PM" / "You called back 7:12 AM": "Her furnace didn't wait / until morning."
- 16.4 "Who answers after 5 PM?"
- 19.2 plum circle grows into the end card (logo, "You run the business." / "We help it scale.", "Websites · Ads · AI receptionists", horizonscales.com).

## Look
A night-to-morning sky behind one phone: navy with stars and a crescent moon, rolling into a blue-to-peach morning with a rising sun; faint cream window lines. Cream hook panel with a coral label, cream caption cards with navy text and one coral phrase. Space Grotesk (first use since #17) + Young Serif/Nunito on the end card.

## Sound
Band (sampled, new): **marimba, pizzicato cello, flute, light standard kit with shaker** (90 BPM, D minor at night → F major in the morning). Night is marimba and cello only; a rising marimba run carries the night into morning, kit and flute come in; the band drops to one low note on "Too late"; builds to the question and the end card. Sound effects: the phone buzzing at 8:47 PM, ringback when you call back, the call-ended tone.

## Checks
- `sh build.sh`: all technical checks passed (22.2 s, 30 fps, 1080×1920, −14 LUFS, true peak −1.4 dBTP, deterministic, no flash frames). Note: low end thin (deliberately light band).
- Contact sheets: 13 stills, then 12 after fixes, every word readable and spelled right. Fixes: the text notification ran off the screen (shortened), long captions were tiny (now two lines), the clock said "12:53 PM" mid-roll (now AM), the moon showed as a ring (now a crescent).
- Zone overlay (6 frames): hook y 180–410, phone x 280–760 and y 450–1230, captions centred at x 500 around y 1340–1380; nothing in the right strip (x > 864, y > 920) or the bottom strip (y > 1630).
- Rules: no stats, results, prices, guarantees, launch date, real names or pitch; one homeowner's story; no service named before the end card; 7 captions, each up 2.6–2.9 s.
