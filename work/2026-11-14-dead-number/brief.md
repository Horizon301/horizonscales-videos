# #17 "The Dead Number" (made Nov 14, 2026, nightly run)

**Test arm:** TEXT (no voice; voice is still on hold per RUNBOOK section 0, so the VOICE/TEXT alternation is paused). **Type:** 2, one free tip they can do tonight (first type-2 video). **Topic:** websites (yesterday was being found, the day before answering calls). **Trade:** landscapers (the last three were painters).
**Buddy test:** a landscaper would tell his buddy this video is about "a lady taps the phone number on a landscaper's website, nothing happens, so she calls the next guy. Go tap the number on your own site."

## Idea
One small story and one thing to try. A homeowner is on "your" landscaping website on her phone. She taps the phone number. Nothing happens (it's plain text, not a tap-to-call link). She taps again, long-presses, gets a Copy bubble, gives up, swipes back to the search list and taps the next landscaper's Call button. It rings, he picks up. Then the tip: tap your own number tonight. The last frame shows what a tap should bring up (a Call sheet), with "Does it ring?". Nothing is sold; the services are only on the plum end card.

## Hook (on frame 0)
"LANDSCAPERS: What happens when someone taps your number?" on a blue riso panel, with the phone and the website already on screen and the background moving.
Pattern: direct question to the trade owner about something they've never checked (curiosity gap; the viewer wants to know the answer for their own site). Written by hand to the runbook's hook rules; the hook/caption skills were not loaded tonight. Options not used: "Landscapers: have you ever tapped your own phone number?" (gives the tip away in the first second), "Landscapers: does your website's phone number work?" (vague, sounds technical).

## Script (on-screen words only, no voice)
| Time | Picture | Caption |
|---|---|---|
| 0.0–2.0 | Phone with "Your Landscaping" website: striped lawn, a house, "Call us: (208) 555-0142". | A homeowner finds your site. |
| 2.0–4.0 | Gentle push-in; a thumb taps the number, then twice more (ripples). | She taps your number. |
| 4.0–5.5 | The phone shakes a little, the band stops, the thumb lifts. | Nothing happens. |
| 5.5–7.5 | Long press: half the number gets selected, a "Copy · Select all" bubble. | Now she has to copy it. |
| 7.5–9.5 | Back swipe: the search list "landscaper near me" slides in (Your Landscaping, Next Landscaper with a coral Call button, Third Landscaper). | Or go back to the list. |
| 9.5–11.6 | She taps Next Landscaper's Call button; the calling screen slides up ("Calling…", ringback tone). | Next guy has a Call button. |
| 11.6–13.5 | "Connected 0:01", crash cymbal. | He picks up. |
| 13.5–15.25 | Yellow flash back to your site. | Try this tonight: |
| 15.25–17.25 | The thumb taps your number; a Call sheet slides up: "(208) 555-0142" and a coral Call button. | Tap your own number. |
| 17.25–19.5 | The Call sheet pulses. | Does it ring? |
| 19.5–23.5 | Plum end card: logo, "You run the business." / "We help it scale.", "Websites · Ads · AI receptionists", horizonscales.com. | — |

## Look
Risograph print, new for the channel: cream paper with grain, three inks (riso blue, coral, sun yellow) printed with multiply so overlaps mix (blue over yellow prints the green lawn), a coral misregistration offset behind the phone, the panels and the captions, slowly turning halftone discs and swaying grass in the edges. Captions are square paper labels with a blue ink border and a coral offset block, one word in red. Typefaces: Space Grotesk + DM Mono (new pairing, added to `kit/fonts`, SIL OFL). No animation skill used; the look is our own.

## Sound
Real sampled instruments (GeneralUser GS), no synth beeps. **Band: banjo (rolls), fiddle, steel-string guitar, finger bass, room drum kit; bluegrass-pop, 120 BPM, A major.** Side-stick hits on each tap, the band stops dead on "Nothing happens" (a low fiddle note hangs), half-time on the long press, a snare fill into the back swipe, crashes on the Call tap, "He picks up", the tip and the end card. One sound effect: the phone's ringback tone (440 + 480 Hz) under the calling screen. No voice.

## Checks
- `sh build.sh`: all technical checks passed (determinism, 1080×1920, 30 fps, 23.5 s, audio, no black frames, −14.2 LUFS, true peak −1.4 dBTP). Two rounds of fixes before the final build: the thumb covered the number (now it taps on "(208)" so "555-0142" stays visible) and the push-in pushed the phone under the hook panel (zoom reduced to 10%).
- Contact sheets (17 + 7 stills) and a 12-frame zone overlay: hook in the top band, captions centred at x 500 around y 1340 (≤ 640 px wide), phone x 270–730; nothing that matters in the right button strip or the bottom strip (only the thumb's lower end and background grass pass through the bottom strip).
- Rules: no stats, results, prices, guarantees, launch date or pitch. Business names are generic placeholders ("Your Landscaping", "Next Landscaper", "Third Landscaper"). The phone number uses the 555-01xx range reserved for fiction. One idea, one story, no services explained.
