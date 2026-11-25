# #29 cold-wait · Nov 25, 2026 (nightly run)

- **Topic:** T3 (voicemail full / no callback in time) · **Frame:** F1 (question → 3 problems → 3 fixes) · **VOICE (kai)** (Chatterbox from Kai's private clip; AI-content labels on) · **Trade:** HVAC
- **Length:** 30.4 s (end card from 27.5 s) · 1080×1920, 30 fps · −14.2 LUFS, true peak −1.4 dBTP
- **First v3 video** (RUNBOOK v3, standard `kit/examples/model-3reasons/`).

## Hook (hookscore.py)
- **"Her furnace quit. Why didn't she wait for you?" · 87.0 STRONG** ← picked (clearest; names the job by the furnace, asks the question)
- "HVAC pros: why didn't she wait for your call back?" · 52.2 OK
- "HVAC pros: she called. Why'd she book someone else?" · 39.2 WEAK

## Script (Kai's voice, every line checked by speech-to-text, 0 errors)
| key | line | caption |
|---|---|---|
| v0 | Her furnace quit. Why didn't she wait for you? | Why didn't she / **wait for you?** |
| v1 | Here are three reasons. Number three happens the next morning. | Here are / **3 reasons.** → #3 happens / **the next morning.** |
| p1 | One. Your voicemail was full. | **1.** Your voicemail / was full. |
| p2 | Two. You never texted her back. | **2.** You never / texted her back. |
| p3 | Three. You called back the next morning. | **3.** You called back / the next morning. |
| b | So, here's how to fix all three. (0.7 s pause before, recap card + mint flash) | How to fix / **all three:** |
| f1 | One. Clear your voicemail every Friday. | 1. **Clear voicemail** / every Friday. |
| f2 | Two. Text back right after a missed call. | 2. **Text back** / after a missed call. |
| f3 | Three. Call back within the hour. | 3. **Call back** / within the hour. |
| v5 | Fix all three, and next time, she waits for you. (0.8 s pause, warm wash) | Fix **all three.** → Next time, / **she waits for you.** |

Truth check: the tease ("number three happens the next morning") is literally p3. No stats, prices, names, promises; the ending mirrors the approved model line.

## Picture
Cold living room (pale blue walls, snow in the window, thermostat "58° HEAT OFF"), a homeowner in a plaid blanket with her breath showing; her phone "BOOKED · HVAC #2 · Tonight" in frame 0 → calling HVAC #1, "Voicemail is full" → the HVAC tech in a basement at another furnace (swinging work light, flame window), his phone "7:52 PM Missed call · No text sent" → next morning in his kitchen with coffee, calling her, her text "Someone came last night. Thanks." → recap card "Why she didn't wait: Full voicemail / No text back / Next-day call" (red ✕) → his phone "Voicemail Cleared · Every Friday" → his text "Sorry I missed you! Calling back in an hour." → her phone "INCOMING HVAC #1 · 8:31 PM" → her phone "On my way! 20 minutes." → plum end card. Progress chips 1-2-3 under the hook.

## Sound
Band: 96 BPM 4-bar loop D–Bm–G–A, one chord per bar, Rhodes + vibraphone + fingered bass + brush kit (sampled), nothing timed to cuts, last D chord on the end card; band bus 0.28 under the voice. SFX: only the ringback she hears and her phone buzzing on the call-back (bus 0.12).

## Checks
build.sh "All technical checks passed." · contact sheet every ~1.5 s (person with a face in frame 0, hook 2 lines, captions match the voice, all words readable) · zone overlay on 8 frames (same layout as the model, nothing in the avoid strips but the character's body) · voice report: FAILED none · earshot: not installed in this session.
Note: the first voice run was stopped by the container after 3 lines; the other 7 were made in 3 more runs with the same script (report merged).
