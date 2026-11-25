# Nightly video runbook (Horizon Scales) · v2, Nov 18, 2026

Every night at about 1:30 AM Mountain, a fresh Claude session clones this repo, makes **one** short video, checks it, saves it in `videos/` and schedules it in **Buffer** for TikTok, Instagram and YouTube later the same day. Kai (the founder) gave standing approval on Nov 10, 2026. Don't ask him to approve a post: schedule it and tell him how to stop it. A parent set up and holds the Buffer and Metricool accounts.

**Order of a run:** 1. results → 2. pick the topic and format → 3. write it plain → 4. make it → 5. checks → 6. save and schedule → 7. morning message.

**Why this file was rewritten (Kai, Nov 18):** "these videos are not doing well ... they have lost a lot of quality." The run had drifted into tiny topics and gimmicks because the old rules demanded something new every night. The best videos so far were plain: #16 find-the-painter (Instagram ≈47% watched), #18 three-roofers (TikTok ≈24%, the best nightly TikTok), #15 worst-time (YouTube 1,338 views). **Plain and clear first. Variety second.**

---

## 1. Results first

1. Buffer `list_posts` (organization `6af7cdf680f19f2878ad51f9`, `status: ["sent"]`, `includeMetrics: true`). Buffer gives views, likes, comments, shares and average watch time on TikTok and Instagram (plus saves on Instagram); YouTube gives views, likes and comments only. Metricool (brandId 7855113) is read-only: only for the Instagram skip rate (`IGRE30`). Never schedule, edit or delete anything in Metricool.
2. Write a row in the **Results** table in `log.md` for every post that is **48 h+ old**: views, watch rate (average watch time ÷ length), likes, comments, shares, saves, engagement rate, Instagram skip rate.
3. A number **counts** only at 300+ views on that app after 48 h. A pattern needs 3 counted videos. Rank by watch rate, then engagement, then views. Goal: watch rate 50–60%+, reached in stages.

## 2. Pick tonight's topic and format

**Topic: pick one from this list.** Every video is about one of these. Don't use the same topic two nights running; check the last 3 lines of `log.md`. Repeating a topic after that is fine as long as the story is new.

| # | Big topic | What the owner feels |
|---|---|---|
| T1 | Missed call while on a job | "My hands were full and I lost the job." |
| T2 | Calls after hours and on weekends | "They called at 8 PM and hired someone else by morning." |
| T3 | Voicemail full / no callback in time | "By the time I called back, they'd booked someone." |
| T4 | Slow reply to a text or website form | "I answered the next day. Too late." |
| T5 | Not showing up when someone searches | "They searched for a painter and found everybody but me." |
| T6 | Showing up, but someone else gets picked | Fewer or no reviews, a weak profile, nothing that says "call me." |
| T7 | Website with no clear way to call | Number buried, no Call button, they leave. |
| T8 | Website that looks closed or out of date | "Are they even still in business?" |
| T9 | Website that's broken or slow on a phone | They tap, nothing works, they go back to the search. |
| T10 | Busy season vs. empty season | Phone ringing off the hook in June, quiet in January. |

Never a small detail as the whole video (a footer year, a listing photo, the length of a greeting) unless it is plainly about one of the big topics above.

**Format: 7 of every 10 videos use a proven format.** Count the last 10 lines in `log.md`; if fewer than 7 were proven formats, tonight is proven.

| Format | What it is | Reference |
|---|---|---|
| **P1 Homeowner's story** | She has a real problem, calls or searches, and someone else gets the job (or she picks the one who did it right). | #18 three-roofers, #22 next-plumber |
| **P2 Plain game** | The viewer plays with the real thing: "Which one would you call?", "Find the painter", "Would you tap this?" No puzzle, no twist. | #16 find-the-painter |
| **P3 Trade-life moment** | Something every owner has lived (the phone rings when your hands are full), no lesson. | #15 worst-time |

**3 of every 10 can be new:** a new format of your own, still following every rule in section 3. Mark it **NEW** in the log so the Sunday scorecard can see whether it worked.

## 3. Write it plain

**Why this section was rewritten (Nov 24, Kai: "the content is still really bad ... the videos don't make much sense or is not relevant ... the music is really choppy").** After the Nov 18 rewrite, #22–#28 all became the same video: one small phone in the middle of a still background, the story told in tiny phone-screen text, "HER PHONE / YOUR PHONE" labels swapping sides, a 3-line hook panel, and nothing moving in the first second. TikTok viewers watched 1–2 seconds of them (4–10%). The videos that held people (#15, #16, #18) had a person or a game filling the frame. The model for all the rules below is `kit/examples/model-847pm/` ("8:47 PM"): copy its size, pacing and music approach, never its look or story.

**The first second (most viewers decide in under 2 seconds):**
- Frame 0 shows **the problem itself, big**: a person with a face and the broken thing (leaking heater, dead furnace, branch on the fence), or the game board. Never a phone screen that says "Calling…".
- **Something moves in the first half second** (camera push, a drip, a blinking light, a person turning).
- **Hook: 2 lines, at most 9 words in total, 64 px or bigger.** Line 1 names the trade and the moment, line 2 is the question ("Plumbers: it's 8:47 PM." / "Who answers your phone?"). No third line, no small label line.

**The picture:**
- **People, not screens.** Every video has at least one drawn person with a face and feelings (worried, annoyed, relieved) who is on screen for most of it. A phone screen may appear as a big side prop that shows one state at a time.
- **Fill the frame.** The main subject (person + prop) is at least 600 px tall and the scene fills x 60–1020, y 420–1240. If the contact sheet shows a small object in an empty frame, zoom in.
- **Any words inside the scene (a phone screen, a sign) are 34 px or bigger and at most 6 words per state.** If it needs more words, it's the caption's job.
- **One point of view, told in the third person:** "she" (the homeowner) and "he"/"the plumber". No HER PHONE / YOUR PHONE tags, no "Your business" as a contact name, no switching sides mid-video. The owner works out it's about him; the final question says "you".
- **A different picture at least every 2.5 seconds** (new pose, new prop state, new place). Two or three places per video (her house at night, his shop in the morning).

**The story:**
- **One idea, one small story:** a problem, a turn, a payoff, then one question. No "problem, fix, problem, fix", no lists.
- **15–21 seconds** including a 3-second end card. **At most 8 captions,** each 1.8–2.6 s, at most 6 words, 56 px or bigger, one phrase highlighted.
- **The 3-second check:** anyone who sees a single frame with the sound off can say what's happening.
- **The relevance check:** the story is one a trade owner has lived or feared this month (a missed call, a job lost to the next guy, an empty week). Finish "a painter would tell his buddy this video is about ___"; if the answer is "a marketing agency", "a phone app" or a detail of a website, start over.
- No wrappers (karaoke, crayons, posters, game shows). A new look = new colours, type, place and music, never a new metaphor.
- **Hook score:** write 2–3 hooks, score them with `python3 -I kit/skills/instagram-agent/skills/ig-reel/hookscore.py --hook "<hook>"` (or by hand with `ig-reel/hooks.json`), pick the **clearest**; scores go in `brief.md`.
- **Services only on the end card.** The video never explains what Horizon Scales sells.
- Skills to use when they help (not a checklist): `viral-hook-creator`, `marketing-skills:social` (its `references/short-form-video.md`), `social-post-writer`, Kai's animation skills (`animation-skills:*`, good for people and props), `kit/skills/` (`ig-caption`, `ig-human`; see `kit/skills/SOURCES.md`). Never `ig-dm`, `ig-comment`, `ig-reply` or anything that contacts other accounts. **Kai's rules win over any skill.**

## 4. Never break these

- **No made-up stats, results, testimonials, case studies or credentials.** No percentages, no "3x more calls".
- No real business names or real people. No prices, no guarantees, no launch date. Never promise revenue, sales or appointments.
- The AI receptionist is always called AI and never shown as a human.
- No pitching or outreach: no "DM me", no "book a call", no tagging businesses. A caption may ask a question.
- Original work only: no copyrighted songs, characters, logos, games or film scenes.
- **VOICE IS ON HOLD (Kai, Nov 18 evening).** Every video is text only (TEXT), AI-content labels off, until this line is replaced. Kai heard the Kokoro voices Adam, Echo, Liam and Onyx in a real test video and said they have "no emotion at all", "just a monotone". Don't use any Kokoro voice, ElevenLabs, anyone else's account, or a clone of a real voice. The voice vs. no voice test is paused; write TEXT in the log line.

## 5. Look and sound

- **Brand:** plum `rgb(28,2,40)`, coral `#F0645A`, light coral `#F5A39A`, cream `#F6F0E6`, sun yellow `#FFD27A`. Logo files in `kit/assets/`. Every video ends on the **plum end card**: logo, "You run the business." (cream), "We help it scale." (light coral), "Websites · Ads · AI receptionists", "horizonscales.com".
- Change the colours, type and music from night to night; keep the layout simple. No fat, heavy bold text. Something moves every 1–2 s (punch in on cuts). Length 15–30 s.
- **Music: a plain loop that ignores the picture (Kai, Nov 24: "the music is really choppy"; then, about a first fix: "each frame change it plays the same noise over and over again or makes an odd sounding switch noise that makes it sound clunky").** Build it like `kit/examples/model-847pm/music.py`: a 4-bar loop, **one chord per bar, chords change only on bar lines**, the same kick/rim, hat, bass and held-chord pattern in every bar from 0 s to the end card. **Nothing in the music is timed to a cut or a caption: no crash, fill, stab, bright note, stop, drop-out or thinning on scene changes.** (This replaces the old "beat hits on card changes" idea; the picture's own punch-in is enough.) Allowed changes in the whole piece: at most one move to a brighter set of chords, on a bar line near the turn, and one last chord on the end card. One quiet melody line that repeats. 92–108 BPM, band gain 0.7. Real sampled instruments via `python3 ../../kit/sound/sf_render.py music.json audio/band.wav`; change the instruments and chords from night to night, not the approach. −14 LUFS, true peak ≤ −1 dBTP. **Sound effects: only a sound the picture shows happening for real (a phone ringing or buzzing), at most 2 kinds, bus gain ≤ 0.22; no beeps, pings, whooshes, clicks or tones for captions, cards, taps or screen changes.** If `kit/sfx-library/` has audio files, `kit/skills/real-sfx/` may be used within those limits.

**Frame safety (1080 × 1920):** hook at the top (y 190–380); captions just below the middle (y 1250–1440); everything inside the safe zone (x 140–940, y 290–1540); nothing in the right strip from the middle down (x > 864, y > 920) or the bottom strip (y > 1630); a dark stroke on text over busy backgrounds.

## 6. Make it, check it

Work in `work/YYYY-MM-DD-<slug>/` (copy `kit/build.sh`, `kit/motion.js`, `kit/fonts/`, `kit/assets/`; make `audio/ out/ qa/`). Start from `kit/examples/model-847pm/` (people, big picture, 20.6 s, steady groove; copy its files into the work folder, then change the story, place, colours, type and band). Older references for a game or a trade-life moment: `work/2026-11-13-find-the-painter/`, `work/2026-11-12-worst-time/`. Don't start from #22–#28. Setup once: `cd kit/msr/scripts && npm install --no-audit --no-fund --loglevel=error && cd -`. Don't run `playwright install`.

- Stills: `node ../../kit/msr/scripts/render.mjs . --size 1080x1920 --still 0,1.5,3,... --sheet --out qa/s1`
- Full build: `sh build.sh` → must end with **"All technical checks passed."**
- Cover: `node ../../kit/msr/scripts/render.mjs . --size 1080x1920 --directions thumb --at 0 --out qa/thumb`, then `ffmpeg -y -v error -i qa/thumb/thumb_t0.00.png -q:v 2 out/cover.jpg`
- Pitfalls: fill the background every frame; round `t` at the top of `render`; keep something light on the plum end card (black-frame check); keep times and lengths separate in `timeline.js`; comments only at line ends.

**Gates, all must pass before scheduling:** (0) on the contact sheet: a person with a face in frame 0, the subject fills the frame, no phone-only video, hook is 2 lines; (1) `sh build.sh` passes; (2) a contact sheet with a still every 2 s: every word readable and spelled right, nothing cut off; (3) the zone overlay on 6–10 frames (Pillow): nothing in the avoid strips; (4) the 3-second check and section 4 re-read against the final script. If a gate still fails after two fixes, don't schedule; say why in `log.md` and the morning message.

## 7. Save, schedule, report

1. Copy `video.mp4`, `cover.jpg`, `brief.md` (topic, format, hook scores, script, look, band, checks) to `videos/YYYY-MM-DD-<slug>/`. Keep the source in the work folder; delete its `audio/ out/ qa/` and any `node_modules`.
2. Add a line to `log.md` under **Nightly runs**: date, #n, slug, **topic (T#)**, **format (P1/P2/P3 or NEW)**, **VOICE (which voice) or TEXT**, concept, look, band, hook, length, scheduled time, Buffer post ids.
3. Commit with `git -c user.name="Claude" -c user.email="noreply@anthropic.com" commit -m "..."` and `git push origin main` (if rejected: `git pull --rebase origin main`, push again). Check `https://raw.githubusercontent.com/Horizon301/horizonscales-videos/main/videos/<folder>/video.mp4` returns 200 and the full size.
4. **Time:** the same day the run started (America/Denver). Best hour from Metricool `getBestTimeToPostByNetwork` (tiktok + instagram, hours 8–20, add them, take the highest; it has been 10:00), at least 2 h from now and 6 h from any post already scheduled in Buffer that day.
5. **Buffer, three posts, one caption each.** Channels: TikTok `6af7ced962b70b94b026220a`, Instagram `6af7ce5262b70b94b0261667`, YouTube `6af7ce9062b70b94b02617a1` (if an id is rejected, use `list_channels`; never guess). Each `create_post`: `schedulingType: "automatic"`, `mode: "customScheduled"`, `dueAt` with the right Mountain offset (`get_account` → `currentTime`), `assets: [{"video": {"url": "<raw URL>"}}]`.
   - TikTok: `metadata.tiktok = {"title": "<hook>", "isAiGenerated": <voice?>}`; caption 1–2 lines + a real question + 5 hashtags (`#smallbusiness #servicebusiness #contractorlife #localbusiness #marketing`, swap one for a trade tag).
   - Instagram: `metadata.instagram = {"type": "reel", "shouldShareToFeed": true, "isAiGenerated": <voice?>}`; caption 2–4 lines, first 125 characters work on their own, question, the same 5 hashtags.
   - YouTube: `metadata.youtube = {"title": "<hook> #shorts", "categoryId": "27", "privacy": "public", "madeForKids": false, "isAiGenerated": <voice?>}`; description 1–2 sentences + "You run the business. We help it scale. horizonscales.com".
   - No custom cover. Buffer Free holds 10 scheduled posts per channel; if one is full, say so at the top of the message.
6. **HQ** (if the Projects tool is there): save only `brief.md` and `hq-entry.md` to `claude/content/<slug>/`. Build code never goes into HQ, and don't edit the main HQ files.
7. **Morning message**, in this order:
   1. **Yesterday's post:** published on all 3 apps? (Buffer status `sent`; any failure **at the very top in bold**.) Then per app: views, watch rate, likes, comments, shares (+ saves and skip rate on Instagram). Under 300 views = "too early to count".
   2. **Today's video:** title, hook (+ score), topic and format, VOICE (which voice) or TEXT, post time, the raw video link, and **"To stop it, delete the posts in Buffer before <time>."**
   3. Two lines: proven vs. NEW so far (e.g. "Last 10: 7 proven, 3 new") and the voice test so far (e.g. "Voice vs. no voice: 1 counted each, too early to call").
