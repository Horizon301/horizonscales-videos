# #26 Slow Site · brief (Nov 22, 2026)

- **Topic:** T9, website broken or slow on a phone (first T9 video). **Format:** P1, homeowner's story. **Trade:** garage door repair (first garage door video).
- **Arm:** TEXT (no voice; voice on hold since Kai's Nov 18 evening note, Test 1 paused). AI-content labels off.
- **Buddy test:** "a garage door guy would tell his buddy this video is about a lady whose door was stuck, his website wouldn't load on her phone, so she called the other guy."
- **Why this one:** the last 3 videos were T2, T4, T10; T9 had never been done. Since RUNBOOK v2 every video has been a proven format; P1 tonight (refs #18 three-roofers, #22 next-plumber). One phone, the real screens (search results, a loading page, a squeezed desktop page with a pop-up, a mobile page with a Call button, the calling screen), no wrapper.

## Hook (frame 0, top panel)
"GARAGE DOOR PROS: She tapped your website. Did it load?" · score **47.0 (WEAK on the scorer's STAKES)**, picked because it is the clearest and shortest. Others (`kit/skills/instagram-agent/ig-reel/hookscore.py`):
- "Garage door pros: her door is stuck and your site won't load. Who does she call?" 55.5 (higher, but three lines and gives the story away)
- "Garage door pros: your site is still loading. Is she still waiting?" 47.2
- "Garage door pros: she opened your site. Why did she leave?" 47.0
- "Garage door pros: her door is stuck. Does your website load?" 47.0
- "Garage door pros: does your website work on her phone?" 37.8

## Script (23.4 s)
- 0.0 HER PHONE: search "garage door repair", two results, Your business and Next garage door co.; behind the phone her garage door is stuck crooked: "Her garage door is stuck." She taps Your business (1.9).
- 3.0 yourbusiness.com: white page, spinner, the progress bar crawls: "Your site is still loading."
- 6.2 it loads as a desktop page squeezed onto the phone (tiny menu, tiny text, a tiny phone number); a "Join our newsletter!" pop-up covers it; she taps twice and misses the tiny ×: "Tiny text. A pop-up."
- 9.0 she taps Back, the results again, and taps Next garage door co.: "She goes back."
- 11.6 nextgaragedoor.com loads at once: "Garage door stuck? We can help today." and a big orange Call now button: "His site loads right away."
- 14.6 she taps Call now; Calling…, ringback, Connected: "She calls him."
- 17.4 back to yourbusiness.com: still a spinner: "Have you opened your site on a phone?"
- 20.4 plum circle grows into the end card (logo, "You run the business." / "We help it scale.", "Websites · Ads · AI receptionists", horizonscales.com).

## Look
Her house at dusk: slate-blue to peach sky with slow clouds, charcoal roof, beige siding, a flickering porch light, and a white garage door stuck crooked in a slate frame (it shudders a little), concrete driveway. One phone with a slate HER PHONE tag. Slate hook panel (sun-yellow trade label, cream line, light-coral question); white caption cards with a slate border and text, one coral phrase. **Bricolage Grotesque** (new, added to `kit/fonts` with its OFL licence) + Young Serif on the end card.

## Sound
Band (sampled, new combination): **vibraphone, steel-string guitar, string section, room kit with shaker** (light indie-folk pop, 100 BPM, E major). Easy groove on the search; while your site loads it stalls to one ticking vibraphone note over a held string chord; a thin guitar under the tiny page; a side-stick and silence on Back; full band when his site loads, crash on Call now; back to the ticking note on your site, then it builds for the end card. Sound effects: thumb taps on glass, ringback tone.

## Checks
- `sh build.sh`: all technical checks passed (23.4 s, 30 fps, 1080×1920, −14.1 LUFS, true peak −1.3 dBTP, deterministic, no black or flash frames). Audio note: light low end (no bass instrument, on purpose).
- Contact sheet: 12 stills, one fix (the stuck door covered only the top half of the opening; lowered so it reads as a door stuck crooked), then 14 frames at about 2 s steps from the final MP4: every word readable and spelled right.
- Zone overlay (14 frames): hook y 180–410, phone x 280–760 and y 450–1240, captions centred at x 520 around y 1350; nothing but house and driveway in the right strip (x > 864, y > 920) or the bottom strip (y > 1630).
- Rules: no stats, results, prices, guarantees, launch date, real names or pitch; the phone number on the squeezed page is a 555-01xx fictional number; no service named before the end card; 7 captions, each up 2.6–3.2 s.
