# Video #13 — The Drive-By Test
*Horizon Scales · 2026-11-11 (evening) · no voice · type 1: a test the viewer plays · 20.5 s · 1080×1920*

- **Why this one:** Kai, Nov 11: "The entire videos that you post are just explaining the three steps in the exact same way, just different layouts." This video explains nothing about Horizon Scales. It is a test a painter can take in 15 seconds and a tip he can use on his own sign tomorrow. The services appear only on the end card.
- **Hook (frame 0):** "Painters: can a driver read your yard sign?" The street is already moving past the car window.
- **What happens:** "Quick test. You're driving past." → Sign A goes by at driving speed (a crowded sign: long name, three lines of services, two phone numbers, a web address) → "Did you catch the phone number?" (the music drops to a ticking clock) → Sign B goes by at the same speed ("PAINTING" and one big number) → the car slows, both signs come up side by side: "Same street. Same speed. Which one did you read?" → a coral ring around B: "One job. One number. Big enough for the road." → the plum end card slides across the window.
- **Look:** flat side-window view of a suburban street with parallax (clouds, hills, houses, lawn, road), cream road-sign caption plates, Young Serif title with Poppins signs. New for this series.
- **Sound:** original road-trip shuffle at 120 BPM in G major (walking bass, plucked chords, brushed snare, swung shaker), a low engine hum, a whoosh as each sign passes, a ticking clock on the question, bells on the answer.
- **Rule check:** no stats, results, prices, guarantee, launch date or pitch. Both signs are made up: "Your Name Painting" is a placeholder and the phone numbers are 555-01xx (reserved for fiction). The tip is advice, not a promise.
- **Frame check:** title at the top, captions centred at x 500 just below the middle, the comparison stack left of x 864, only the car door in the bottom strip. The signs cross the whole frame on purpose as they pass.
- **Checks:** `sh build.sh` → all technical checks passed (determinism, 1080×1920, 30 fps, 20.5 s, no black frames, −14.1 LUFS, true peak −1.4 dBTP). Contact sheet and zone overlay reviewed. The mix was checked by measurement only.
- **Rebuild:** copy `kit/build.sh`, `kit/motion.js`, `kit/fonts/`, `kit/assets/` into this folder, then `sh build.sh`.
