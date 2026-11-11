# Video #11 — The Empty Week
*Horizon Scales · nightly run · 2026-11-11 · Test 1 arm: **VOICE** (AI voice, Kokoro `am_michael`) · 25.8 s · 1080×1920*

- **Idea:** a painter's whiteboard schedule for next week with "open" on every day. Three job notes try to reach the board and slip away, one per leak; each service (a coral magnet) makes one stick.
- **Hook (frame 0, on screen and spoken in the first second):** "Painters: why is next week still empty?" A coral marker loop circles the empty column.
- **Script (voice = on-screen captions):**
  1. "Painters. Why is next week still empty?"
  2. "Jobs slip out in three places." (numbered dots 1, 2, 3 land on MON, WED, THU)
  3. "One. Homeowners can't find you." (the "Exterior repaint" note drifts past the board with a "?") → "Ads put you in front of them." (ADS magnet, the note sticks on MON)
  4. "Two. Your website doesn't get the call." (the "Deck stain" note lands, peels off and falls) → "We build one that's made to." (WEBSITE magnet, the note sticks on WED)
  5. "Three. You miss the call on a job." (the "Cabinets" note rings, nobody answers, it drops) → "An AI receptionist picks up." (AI RECEPTIONIST magnet, the note sticks on THU)
  6. "Found. Called. Booked. That's the aim." (a check lands on each note; TUE and FRI stay open)
  7. An eraser wipes the board into the plum end card: "Horizon Scales. You run the business. We help it scale."
- **Look:** a whiteboard: marker-drawn week grid, handwriting (Patrick Hand, OFL) with small printed labels (Poppins), yellow sticky job notes, coral pill magnets, captions on strips of masking tape. New for this series.
- **Sound:** original light funk groove at 100 BPM in E minor (kick, claps, sixteenth hats, plucky bass, organ stabs, cowbell on each fix). The band stops and a tom falls each time a job slips away; a bell when a note sticks. Music sits about 5 dB under the voice. AI voice lines and lengths: `vo_lines.json`; regenerate with `python3 ../../kit/voice/make_vo.py lines.json`.
- **Rule check:** no stats, results, prices, guarantee, launch date, real names or pitch. The jobs on the board are a made-up example; "That's the aim" states the goal, not a promise. The receptionist is named as AI. AI voice → AI-content labels on for every app.
- **Frame check:** title at the top, captions centred at x 500 just below the middle, grid and notes left of x 860, nothing that matters in the right-hand button strip or the bottom strip (only the marker tray, and notes passing through as they fall). Zoom punch on every hit.
- **Checks:** `sh build.sh` → all technical checks passed (determinism, 1080×1920, 30 fps, 25.8 s, no black frames, −14.2 LUFS, true peak −1.4 dBTP). Contact sheet and zone overlay reviewed. The mix was checked by measurement only (Claude can't hear it).
- **Rebuild:** copy `kit/build.sh`, `kit/motion.js`, `kit/fonts/`, `kit/assets/` into this folder (plus `fonts/PatrickHand.woff2`, kept here), make the voice lines, then `sh build.sh`.
