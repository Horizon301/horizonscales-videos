# Nightly video runbook (Horizon Scales) · v3, Nov 25, 2026

Every night at about 1:30 AM Mountain, a fresh Claude session clones this repo, makes **one** short video, checks it, saves it in `videos/` and schedules it in **Buffer** for TikTok, Instagram and YouTube later the same day. Kai (the founder) gave standing approval on Nov 10, 2026. Don't ask him to approve a post: schedule it and tell him how to stop it. A parent set up and holds the Buffer and Metricool accounts.

**Order of a run:** 1. results → 2. pick the topic and format → 3. write it plain → 4. make it → 5. checks → 6. save and schedule → 7. morning message.

**Why this file was rewritten (Kai, Nov 18):** "these videos are not doing well ... they have lost a lot of quality." The run had drifted into tiny topics and gimmicks because the old rules demanded something new every night. The best videos so far were plain: #16 find-the-painter (Instagram ≈47% watched), #18 three-roofers (TikTok ≈24%, the best nightly TikTok), #15 worst-time (YouTube 1,338 views). **Plain and clear first. Variety second.**

**v3 (Kai, Nov 25, 2026): "i like that i want to keep the same standards for all upcoming videos."** The standard is `kit/examples/model-3reasons/` ("3 reasons", made by hand with Kai on Nov 24–25 and approved after five rounds of his notes). Sections 2, 3, 4 (voice), 5 (sound) and 6 now hold that standard. Where an older line conflicts, this version wins.

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

**Story frame: rotate these four (Kai picked rotation on Nov 25).** Never the same frame two nights running; check the last 3 lines of `log.md`. Every frame follows every rule in section 3.

| Frame | Shape | Example (roofers) |
|---|---|---|
| **F1 Question → 3 problems → 3 fixes** | A question the owner feels (0–3 s) → "Here are three reasons, and …" with an honest tease → problem 1, 2, 3, one scene each → one turn line ("So, here's how to fix all three.") with a recap card → fix 1, 2, 3 → an ending that answers the opening question. | The model, `kit/examples/model-3reasons/` |
| **F2 Myth → the truth** | A common belief owners hold, said plainly (no made-up stats) → why it costs them, in one short story → what to do instead → ending that answers it. | "A website is a one-time thing." → it looks closed, she picks the next one → update it twice a year. |
| **F3 Mid-action → what's happening** | Open in the middle of the moment (phone ringing on the roof, a bucket under a leak) → what is going on → what it costs → the fix. | His phone buzzes while he's on the roof → she's already calling the next guy → text back fast. |
| **F4 "If you're a ___, watch this"** | Name a very specific owner in the first 2 s ("If you're a roofer who never answers on the roof…") → the problem → the fix. | — |

Not allowed until Horizon Scales has real results: "Result first" videos (no invented results, ever).

## 3. The standard (Kai, Nov 24–25, 2026)

**Why:** #22–#28 were small phones on still backgrounds, story told in tiny screen text, nothing moving in the first second; TikTok viewers watched 4–10%. Kai then shaped the model video through five rounds of notes. Each rule below comes from one of his notes (in quotes).

**Picture**
- **Big cartoon people fill the frame** (the `toon()` character in the model: thick outlines, big face, clear feelings). At least one person on screen almost all the time; the person + prop fill x 60–1020, y 420–1240. A phone may appear as a big side prop showing one state at a time.
- **Frame 0 already shows the situation** (a person and the problem or the result), and something moves in the first half second.
- **Hook panel at the top:** 2 lines, at most 9 words, names the trade and asks the question.
- **Captions:** 1–2 lines, at most 6 words, big (Fredoka 600, about 96 px, shrinks to fit 650 px), white with a dark outline, no box, **one word or phrase in sun yellow**. Captions say what the voice says (short form is fine, the meaning must match).
- A progress row (1 2 3 chips) under the hook when the video has a list: the current one lights up, a done one gets a check.
- A different picture at least every 2.5 s. No wrappers (karaoke, game shows, posters).

**Story**
- **"it takes a long time to get the point and barely even ends what it is talking about"** → 22–32 s including a 2.5 s end card. Get to the point in the first 3 s, and end exactly when the last point is made.
- **"all three problems should be presented first, and then they go out and fix them"** → in F1, all problems first, then one turn line, then all fixes. Never "problem, here's the fix, problem, here's the fix" (**"sounds a little repetitive"**).
- **"there needs to be a longer pause or more emphasis between the question and the answer"** → a real pause before the turn (0.7 s) and a visual mark on it (the recap card with the problems crossed out in red, a soft mint flash).
- **"does not make sense"** (about "#3 is easy to miss" for old reviews) → **every tease and every line must be literally true.** If you can't back a tease, say something you can ("the last one happens before she even calls").
- **"the end sounds out of place … the way it cuts to it doesn't fit"** → the ending line answers the opening question ("Why did she call the other guy?" → "Fix all three, and next time, she calls you."), comes after a 0.8 s pause, and the picture eases into it (a warm wash and a slow camera settle, no hard flash).
- The relevance check still applies: a trade owner would tell his buddy what it's about in one sentence, and it's about his phone, his customers or his jobs, not about marketing.
- **Hook score:** write 2–3 hooks, score them with `python3 -I kit/skills/instagram-agent/skills/ig-reel/hookscore.py --hook "<hook>"`, pick the **clearest**; scores go in `brief.md`. Services only on the end card.
- Skills to use when they help: `viral-hook-creator`, `marketing-skills:social`, Kai's animation skills (`animation-skills:*`), `kit/skills/` (`ig-caption`, `ig-human`). Never `ig-dm`, `ig-comment`, `ig-reply`. **Kai's rules win over any skill.**

## 4. Never break these

- **No made-up stats, results, testimonials, case studies or credentials.** No percentages, no "3x more calls".
- No real business names or real people. No prices, no guarantees, no launch date. Never promise revenue, sales or appointments.
- The AI receptionist is always called AI and never shown as a human.
- No pitching or outreach: no "DM me", no "book a call", no tagging businesses. A caption may ask a question.
- Original work only: no copyrighted songs, characters, logos, games or film scenes.
- **VOICE = Kai's own voice, made with Chatterbox from his private clip (Kai, Nov 24–25: "it sounds good put it into the video").** The clip is `kai_voice_ref.flac` in Kai's **private** Google Drive (Claude backup › videos, file id `1aeYUvGp0aUCm2gWWCs1D0NZ52cQYkpiY`). **This repo is public: never commit, upload, share or post that clip or any raw voice take; never store it outside `/home/claude/voice/`.** Never use Kokoro, ElevenLabs, anyone else's account, or any other real person's voice. Every video with the voice is posted with the **AI-content label on** (`isAiGenerated: true`) on all three apps. If the clip can't be fetched or the voice fails its checks (section 6), make a TEXT video (labels off) and say so in bold at the top of the morning message.

## 5. Look and sound

- **Brand:** plum `rgb(28,2,40)`, coral `#F0645A`, light coral `#F5A39A`, cream `#F6F0E6`, sun yellow `#FFD27A`. Logo files in `kit/assets/`. Every video ends on the **plum end card**: logo, "You run the business." (cream), "We help it scale." (light coral), "Websites · Ads · AI receptionists", "horizonscales.com".
- Change the colours, type and music from night to night; keep the layout simple. No fat, heavy bold text. Something moves every 1–2 s (punch in on cuts). Length 15–30 s.
- **Music: a plain loop that ignores the picture (Kai, Nov 24: "the music is really choppy"; then, about a first fix: "each frame change it plays the same noise over and over again or makes an odd sounding switch noise that makes it sound clunky").** Build it like `kit/examples/model-847pm/music.py`: a 4-bar loop, **one chord per bar, chords change only on bar lines**, the same kick/rim, hat, bass and held-chord pattern in every bar from 0 s to the end card. **Nothing in the music is timed to a cut or a caption: no crash, fill, stab, bright note, stop, drop-out or thinning on scene changes.** (This replaces the old "beat hits on card changes" idea; the picture's own punch-in is enough.) Allowed changes in the whole piece: at most one move to a brighter set of chords, on a bar line near the turn, and one last chord on the end card. One quiet melody line that repeats. 92–108 BPM. **Under the voice: band bus gain 0.28 with a 70 Hz high-pass, effects 0.12 (as in `kit/examples/model-3reasons/score.mjs`); band 0.7 only on a TEXT night.** The loop runs whole bars and its last chord lands on the end card. Real sampled instruments via `python3 ../../kit/sound/sf_render.py music.json audio/band.wav`; change the instruments and chords from night to night, not the approach. −14 LUFS, true peak ≤ −1 dBTP. **Sound effects: only a sound the picture shows happening for real (a phone ringing or buzzing), at most 2 kinds, bus gain ≤ 0.22; no beeps, pings, whooshes, clicks or tones for captions, cards, taps or screen changes.** If `kit/sfx-library/` has audio files, `kit/skills/real-sfx/` may be used within those limits.

**Frame safety (1080 × 1920):** hook at the top (y 190–380); captions just below the middle (y 1250–1440); everything inside the safe zone (x 140–940, y 290–1540); nothing in the right strip from the middle down (x > 864, y > 920) or the bottom strip (y > 1630); a dark stroke on text over busy backgrounds.

## 6. Make it, check it

Work in `work/YYYY-MM-DD-<slug>/` (copy `kit/build.sh`, `kit/motion.js`, `kit/fonts/`, `kit/assets/`; make `audio/ out/ qa/`). **Start from `kit/examples/model-3reasons/`** (copy its `index.html`, `timeline.js`, `music.py`, `sfx.py`, `score.mjs` into the work folder, then change the trade, story, places, colours and band; keep the character, caption, chips and pacing approach). Don't start from #22–#28. Setup once: `cd kit/msr/scripts && npm install --no-audit --no-fund --loglevel=error && cd -`. Don't run `playwright install`.

**Voice (every night unless it fails):**
1. Setup (about 5–10 min): `python3 -m venv /home/claude/cbx && /home/claude/cbx/bin/pip install -q torch torchaudio --index-url https://download.pytorch.org/whl/cpu && /home/claude/cbx/bin/pip install -q chatterbox-tts faster-whisper`.
2. Fetch the clip with the Google Drive tool `download_file_content` (file id above) to `/home/claude/voice/kai_voice_ref.flac`. Outside the repo, never committed.
3. Write the script as `lines.json` (one key per spoken piece, e.g. v0 question, v1 list setup, p1–p3 problems, b turn, f1–f3 fixes, v5 ending). Plain spoken sentences, no "…", numbers as words.
4. `/home/claude/cbx/bin/python ../../kit/voice/chatterbox_vo.py lines.json /home/claude/voice/kai_voice_ref.flac` → `audio/vo/<key>.wav` + `audio/vo/report.json`. It makes 3 takes per line, checks the words with speech-to-text, keeps the best, cuts right after the last word and evens the speed. A key under `FAILED`: rewrite that line more plainly and run it again once; still failing → TEXT night.
5. Lay the voice out like the model: gaps 0.25–0.55 s between lines, 0.7 s before the turn, 0.8 s before the ending; scene and caption times come from the voice times; the end card starts on the next whole bar of the music.
6. Delete `/home/claude/voice/` and `audio/vo/` before committing (they must never reach the public repo).
7. **earshot** (Kai, Nov 24: "run that before finishing any video"): if the `earshot` command is installed, run `earshot critique out/final.mp4` and fix critical rows. If it isn't available or can't be installed, say so in one line in the morning message.

- Stills: `node ../../kit/msr/scripts/render.mjs . --size 1080x1920 --still 0,1.5,3,... --sheet --out qa/s1`
- Full build: `sh build.sh` → must end with **"All technical checks passed."**
- Cover: `node ../../kit/msr/scripts/render.mjs . --size 1080x1920 --directions thumb --at 0 --out qa/thumb`, then `ffmpeg -y -v error -i qa/thumb/thumb_t0.00.png -q:v 2 out/cover.jpg`
- Pitfalls: fill the background every frame; round `t` at the top of `render`; keep something light on the plum end card (black-frame check); keep times and lengths separate in `timeline.js`; comments only at line ends.

**Gates, all must pass before scheduling:** (0) on the contact sheet: a person with a face in frame 0, the subject fills the frame, no phone-only video, hook is 2 lines, captions match the voice; (0b) voice: `audio/vo/report.json` has no FAILED key, and every line is true (section 3); (1) `sh build.sh` passes; (2) a contact sheet with a still every 2 s: every word readable and spelled right, nothing cut off; (3) the zone overlay on 6–10 frames (Pillow): nothing in the avoid strips; (4) the 3-second check and section 4 re-read against the final script. If a gate still fails after two fixes, don't schedule; say why in `log.md` and the morning message.

## 7. Save, schedule, report

1. Copy `video.mp4`, `cover.jpg`, `brief.md` (topic, format, hook scores, script, look, band, checks) to `videos/YYYY-MM-DD-<slug>/`. Keep the source in the work folder; delete its `audio/ out/ qa/` and any `node_modules`.
2. Add a line to `log.md` under **Nightly runs**: date, #n, slug, **topic (T#)**, **format (P1/P2/P3 or NEW)**, **VOICE (kai) or TEXT**, **frame (F1–F4)**, concept, look, band, hook, length, scheduled time, Buffer post ids.
3. Commit with `git -c user.name="Claude" -c user.email="noreply@anthropic.com" commit -m "..."` and `git push origin main` (if rejected: `git pull --rebase origin main`, push again). Check `https://raw.githubusercontent.com/Horizon301/horizonscales-videos/main/videos/<folder>/video.mp4` returns 200 and the full size.
4. **Time:** the same day the run started (America/Denver). Best hour from Metricool `getBestTimeToPostByNetwork` (tiktok + instagram, hours 8–20, add them, take the highest; it has been 10:00), at least 2 h from now and 6 h from any post already scheduled in Buffer that day.
5. **Buffer, three posts, one caption each.** Channels: TikTok `6af7ced962b70b94b026220a`, Instagram `6af7ce5262b70b94b0261667`, YouTube `6af7ce9062b70b94b02617a1` (if an id is rejected, use `list_channels`; never guess). Each `create_post`: `schedulingType: "automatic"`, `mode: "customScheduled"`, `dueAt` with the right Mountain offset (`get_account` → `currentTime`), `assets: [{"video": {"url": "<raw URL>"}}]`.
   - TikTok: `metadata.tiktok = {"title": "<hook>", "isAiGenerated": <true on a VOICE night, false on TEXT>}`; caption 1–2 lines + a real question + 5 hashtags (`#smallbusiness #servicebusiness #contractorlife #localbusiness #marketing`, swap one for a trade tag).
   - Instagram: `metadata.instagram = {"type": "reel", "shouldShareToFeed": true, "isAiGenerated": <true on a VOICE night, false on TEXT>}`; caption 2–4 lines, first 125 characters work on their own, question, the same 5 hashtags.
   - YouTube: `metadata.youtube = {"title": "<hook> #shorts", "categoryId": "27", "privacy": "public", "madeForKids": false, "isAiGenerated": <true on a VOICE night, false on TEXT>}`; description 1–2 sentences + "You run the business. We help it scale. horizonscales.com".
   - No custom cover. Buffer Free holds 10 scheduled posts per channel; if one is full, say so at the top of the message.
6. **HQ** (if the Projects tool is there): save only `brief.md` and `hq-entry.md` to `claude/content/<slug>/`. Build code never goes into HQ, and don't edit the main HQ files.
7. **Morning message**, in this order:
   1. **Yesterday's post:** published on all 3 apps? (Buffer status `sent`; any failure **at the very top in bold**.) Then per app: views, watch rate, likes, comments, shares (+ saves and skip rate on Instagram). Under 300 views = "too early to count".
   2. **Today's video:** title, hook (+ score), topic and frame, VOICE (kai) or TEXT, post time, the raw video link, and **"To stop it, delete the posts in Buffer before <time>."**
   3. Two lines: the frames used in the last 7 nights (e.g. "F1, F3, F2, F4, F1") and whether the voice was made and passed its checks (and whether earshot ran).
