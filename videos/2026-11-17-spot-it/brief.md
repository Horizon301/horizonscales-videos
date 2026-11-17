# #20 Spot It · brief (nightly run, Nov 17, 2026)

- **Test arm:** TEXT (no voice). Voice is still on hold (RUNBOOK section 0), so Test 1 doesn't alternate.
- **Type (RUNBOOK 2b-2):** 1, a game the viewer plays, as Kai asked on Nov 16 ("the next one to be a game or question/test hook"). A new kind of game: **spot the difference** (not compare-two #13/#14, not seek-and-find with a countdown #16, not pick-one-of-three #19). The hunt uses a crayon magnifier, no countdown.
- **Topic:** websites (the footer year). Last three nights: websites (#17), answering calls (#18), being found (#19). Trade: painters.
- **Buddy test:** "a painter would tell his buddy this video is about two identical painter websites where the only difference is the year at the bottom, and to go check his own."
- **Skills:** hook scored with `kit/skills/instagram-agent/ig-reel/hookscore.py`; captions written by hand to the `marketing-skills:social` "no AI tells" rules and the ig-caption 125-character rule. No animation-skill engine; the placemat look is built in the kit canvas.

## Hook (frame 0, top panel)
"PAINTERS: 2 websites, 1 difference. Can you spot what lost the call?" · pattern: question / game · **hook score 83.0 (STRONG)**.
Rejected: "… same website, one difference. Can you spot it?" (47.0), "… these 2 websites have 1 difference. Can you spot it?" (57.0), "… 2 copies of one website. Can you spot what's different?" (57.0), "… she called one of these 2 identical sites. Can you spot why?" (52.0), "… one tiny difference sent her to the other painter. Can you spot it?" (42.9), "… can you spot the 1 thing that cost this painter the call?" (75.0), "… can you spot the 1 difference that lost this painter the job?" (75.0), "… these 2 sites differ in 1 spot. Can you find what lost the job?" (73.0).

## Script (23.5 s)
- 0.0 hook panel; two phones side by side showing the same painter website ("Painting Co.": crayon house photo, "House painting, inside & out", 555-0142 with a Call button, three room photos, a dark footer). Caption "Same painter. Same site?"
- 2.0 a crayon magnifier comes in and hunts (both photos, both numbers): "Look closely." · 3.8 "Same photo. Same number." · 5.6 it wanders, confused: "Give up?"
- 7.2 the magnifier dives to the footer and splits into two big lenses: "© 2019" and "© 2026"; crayon rings around both tiny footers: "Way down at the bottom."
- 9.2 the 2019 lens shakes, a coral crayon underline: "This one still says 2019."
- 11.2 her face and a thought bubble: "Are they still open?" · "She saw 2019."
- 13.2 the left site greys out; a big green crayon check on the right one, its Call button rings: "She called the other one."
- 15.2 both phones drop away; one phone, "Your site", scrolls to its footer with a crayon arrow: "Scroll down your site tonight."
- 17.4 the footer reads "© ????", a coral ring and a lens pop up, a big crayon "?": "What year does it say?"
- 19.8 a plum crayon blot grows out of the footer into the end card (logo, "You run the business." / "We help it scale.", "Websites · Ads · AI receptionists", horizonscales.com).

## Look
Diner kids'-menu placemat, new for the channel: cream paper, a coral-and-white checker border, crayon doodles (stars, a swirl, squiggles) in the margins; everything drawn in wax crayon (doubled wobbly outlines that boil at 8 fps, waxy streaks inside every fill). Hook on a white placemat panel with a coral crayon tab; captions on sun-yellow crayon labels with the key phrase in red and a crayon underline. **Baloo 2 + Gochi Hand** (new pairing, both added to `kit/fonts` with their OFL licences).

## Sound
Band (sampled, `sf_render.py`): **honky-tonk piano, tenor sax, picked electric bass, standard kit with hand claps** (1950s diner rock'n'roll shuffle, 132 BPM, B-flat major). Boogie piano under the hook; tiptoe walking bass and side stick while the magnifier hunts; stop-time with a falling sax line on "Give up?" and a walk-up; crash and a sax riff on the reveal; a sax honk on "2019"; piano tremolo in G minor under the thought bubble; band back on the call; piano glissando while the site scrolls; E-flat to F7 left open on the question; home to B-flat on the end card. Two sound effects, both in the picture: crayon on paper (the rings and the check) and the phone ringing out (ringback) when she calls. No voice.

## Checks
- `sh build.sh`: all technical checks passed (23.5 s, 30 fps, 1080×1920, −14.1 LUFS, true peak −1.2 dBTP, deterministic, no black frames).
- Contact sheets (qa/s1, qa/s2; 27 stills, at most 2 s apart): every word readable and spelled right, nothing cut off. Fix after the first sheet: the "Your site" footer was too small to read on the question, so a lens with "© ????" now pops up above it.
- Zone overlay (12 frames): hook y 172–412 (the same band as earlier videos), phones x 150–860 and y 450–1220 (the right phone stays left of x 864), lenses and their handles inside x 180–860, captions centred at x 500 around y 1340; only the checker border and doodles sit in the avoid strips.
- Rules: no stats, results, prices, guarantees, launch date, real names or pitch. "Painting Co." and 555-0142 are made up; "2 websites, 1 difference" counts what's on screen. The story says what one homeowner did, not what all homeowners do. One idea (the footer year), no service named before the end card.
