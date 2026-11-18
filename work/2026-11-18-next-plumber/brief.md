# #22 The Next Plumber · brief (Nov 18, 2026, replaces #21 "No Beep")

- **Why it exists:** Kai, Nov 18 morning: "These videos are starting to make no sense." He picked three reasons: the gimmick hides the point, the story is hard to follow, the topics are too small. He asked to pull #21 (the karaoke voicemail video) and remake the same idea simpler. #21 was deleted from Buffer before it posted.
- **Test arm:** TEXT (no voice; voice on hold).
- **Type (RUNBOOK 2b-2):** 5, the homeowner's point of view. **Topic:** answering calls. The point is the big one, not a detail: a missed call is a job the next plumber gets. Trade: plumbers.
- **Buddy test:** "a plumber would tell his buddy this video is about what a customer does when you miss her call: she doesn't leave a voicemail, she calls the next guy."
- **Plain on purpose:** one phone, one story, one thing on screen at a time, eight captions that each stay up 2.4–3 s. No wrapper, no game, no joke format.

## Hook (frame 0, top panel)
"PLUMBERS: You missed her call. What does she do next?" · direct question · hook score 47.0 (the scorer rates it weak; it was kept because it is the clearest of the three: "…Does she leave a voicemail?" 47.0, "Plumbers: what does she do when you don't pick up?" 45.0).

## Script (24.0 s)
- 0.0 HER PHONE: "You · Calling…" (rings): "A leaking sink. She calls you."
- 2.6 "No answer", bubble "Leave a message after the beep…": "You're on a job. Voicemail."
- 5.2 she presses End: "Call ended", "No message left": "She doesn't leave a message."
- 7.6 "Next plumber · Calling…": "She calls the next plumber."
- 10.4 screen turns green, "Connected", bubble "Hello, plumbing!": "He picks up."
- 13.0 a big green check, "Job booked with the next plumber": "He gets the job."
- 15.4 her phone slides out, YOUR PHONE slides in: lock screen, "Missed call · 1", "Voicemail · 0 new messages": "All you see: one missed call."
- 18.4 "Who picks up when you can't?"
- 21.0 a plum circle grows from the phone into the end card (logo, "You run the business." / "We help it scale.", "Websites · Ads · AI receptionists", horizonscales.com).

## Look
Flat cream background, one soft coral and yellow disc, one phone in the middle with a tag above it saying whose phone it is. Hook on a plum panel; captions on plum blocks with the key words in sun yellow. Young Serif + Poppins.

## Sound
Band (sampled): **grand piano, upright bass, brush kit** (plain warm trio, 96 BPM, C major). One chord per caption with a clear hit on each change; the band drops to one low note when she hangs up and comes back when the next plumber picks up. Sound effects: the phone ringing out under each call and the call-ended tone. No voice.

## Checks
- `sh build.sh`: all technical checks passed (24.0 s, 30 fps, 1080×1920, −14.2 LUFS, true peak −1.4 dBTP, deterministic, no black frames).
- Contact sheet (13 stills, at most 2.5 s apart; a second sheet after the fix): every word readable and spelled right. One fix: the "Leave a message" bubble overlapped the contact circle, so the circle moved down.
- Zone overlay (6 frames): hook y 172–412, phone x 280–760 and y 448–1230, captions centred at x 500 around y 1340; nothing in the avoid strips.
- Rules: no stats, results, prices, guarantees, launch date, real names or pitch. The story says what one homeowner did. No service named before the end card.
