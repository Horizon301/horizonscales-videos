# Video #10 — "Level 1"

- **Made:** Nov 10, 2026 (Claude, for Kai's approval). Not posted.
- **Ask:** "Make a very unique one that has not been made." A first idea (a plumbing blueprint) was dropped because #4 already used a blueprint look.
- **Idea:** a retro 8-bit video game. Customers try to reach "your business" and fall into three pits, which are the three leaks. A bridge drops in to fix each one. The fourth customer makes it across: JOB BOOKED! The viewer keeps watching to see whether a customer finally gets there.
- **Script (on-screen text only, no voice):**
  1. Hook (top title): "CAN A CUSTOMER REACH YOU?" Customer 1 strolls toward a gap.
  2. "CUSTOMER 1 LOST" · "Leak 1: they can't find you." → bridge "ADS" drops in · "LEAK 1 FIXED" · "Fix: Google & Meta ads."
  3. "CUSTOMER 2 LOST" · "Leak 2: your website doesn't get the call." → bridge "WEBSITE" · "Fix: a website built to get the call."
  4. "CUSTOMER 3 LOST" · "Leak 3: you miss the call on a job." → bridge "AI RECEPTIONIST" · "Fix: an AI receptionist that picks up."
  5. Customer 4 crosses all three and reaches the shop: "JOB BOOKED!" · "Found. Called. Booked." HUD: LOST 3, BOOKED 1.
  6. An iris closes on the shop door (like the end of an old game level) into the plum end card: logo, "You run the business. We help it scale.", "Websites · Ads · AI receptionists", horizonscales.com.
- **Look (new for this video):** pixel art drawn at 135 × 240 and scaled up ×8 with hard edges. The world is a pixel version of the logo: purple sky, striped sunset, mountains, palm trees. Pixel font (Press Start 2P, open licence) for the title, HUD and signs; Poppins with a dark outline for the captions.
- **Timing:** 120 BPM, 24 s. Each leak caption stays up about 2 s and each fix caption about 3 s.
- **Sound (original, synthesized chiptune):** square-wave lead and arps, triangle bass, noise drums. The music runs while a customer runs and cuts out when one falls (alert blip, falling slide, thud, two sad notes, then a quiet suspense pulse). Each bridge gets a whistle, a thunk and a power-up; each crossing gets a coin ding. Runs 1–3 are in A minor; the last run is in C major and ends in a short fanfare.
- **Frame safety rules (Kai, Nov 5):** title at the top; captions just below the middle, centred at x 500 so they stay left of the button strip; customers, pits and the shop stay left of x 864 in the lower half (the final camera stops the shop there); nothing in the bottom strip; a zoom punch on every fall and on the booking; every word has a dark outline because the background is busy.
- **Honesty check:** no stats, results, testimonials or business names; "LOST 3 / BOOKED 1" is the game's score, not a claim; no prices, guarantee or opening date; the receptionist is named as AI.
- **Checks:** render is deterministic; 1080×1920, 30 fps, 24.00 s; −14.1 LUFS; no black frames; text-framing check clean. Claude cannot hear the audio; the mix was checked by measurement.
- **Files:** `index.html` (the game), `timeline.js` (script, timing, world layout), `score.mjs` (chiptune). Outputs: `level-1.mp4`, `level-1-cover.jpg`.
- **New hook (Nov 10, Kai: "this needs a better hook"):** a 3 s cold open before the level. Frame 0 is a GAME OVER screen: a customer hangs over the first gap for a beat and drops, with a red flash and "You just lost a customer." (LOST 1). At 1.75 s the title changes to "TRY AGAIN?" with "Let's see what went wrong." At 2.7 s a select blip and a white flash restart the level, and the original opening ("CAN A CUSTOMER REACH YOU?") plays. Sound: a thud, alert blips, a falling slide and a sad four-note tune of our own (not copied from any game). The video is now 27 s. Every time after the hook shifted by `PRE` in timeline.js. The cover is now the GAME OVER frame.
