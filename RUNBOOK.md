# Nightly video runbook (Horizon Scales)

This repo holds everything the nightly run needs. Each night (about 1:30 AM Mountain) a fresh Claude session clones it, makes **one new short video**, checks it, puts it in `videos/`, and schedules it in Metricool for the best time later that same day. Kai (the founder) gave standing approval for this on Nov 10, 2026: he checks most mornings, and if he doesn't, the post goes out anyway. A parent holds the Metricool account.

Read this whole file before starting. The rules here are Kai's, not suggestions.

**Order of a run:** 0. read last results → pick tonight's test arm → 1–4 rules (2b: one idea per video; 2c: the hook, caption and social skills; 2d: the animation skills; 3b: sound) → 5. make → 6. save and schedule → 7. record and report.

---

## 0. Results first, then tonight's test (Kai, Nov 10 grilling)

**Goal.** Kai's success measure is **watch rate** = average watch time ÷ video length. He wants 50–60%+. As of Nov 10 most videos sit at 0–9% (viewers leave in the first 1–2 seconds), with the best at 23% (TikTok, "Why is this roofer's phone so quiet?") and 15% (Instagram, "One Home"). Aim as high as possible every night; progress is judged in stages: **Stage 1:** the median nightly video beats 15% and at least one beats 23% → **Stage 2:** median 30%+ → **Stage 3:** 50%+.

**Every night, before making anything:**
1. Pull per-post results from Metricool (`getAnalyticsDataByMetrics`, brandId 7855113, `from` = 30 days ago, `to` = now, America/Denver). Field IDs:
   - **TikTok:** `TKPO02` published, `TKPO05` caption, `TKPO06` length (s), `TKPO07` views, `TKPO08` likes, `TKPO09` comments, `TKPO10` shares, `TKPO15` average watch time (s), `TKPO13` full-watch rate.
   - **Instagram Reels:** `IGRE02` published, `IGRE03` caption, `IGRE23` views, `IGRE10` likes, `IGRE07` comments, `IGRE21` shares, `IGRE12` saves, `IGRE24` average watch time (s), `IGRE27` retention %, `IGRE30` skip rate (swiped away in the first 3 s: the direct hook score).
   - **YouTube Shorts** ("videos published in range"): `YTVP02` published, `YTVP17` title, `YTVP06` views, `YTVP08` average view duration, `YTVP09` likes, `YTVP11` comments, `YTVP12` shares.
   - **Facebook Reels:** `FBRE02` published, `FBRE05` caption, `FBRE10` views, `FBRE08` likes, `FBRE07` actions, `FBRE13` average time watched.
   Match each post to its video by caption text and date. Watch rate = average watch time ÷ the video's length (from `log.md` or the brief when the app doesn't give the length).
2. Write the numbers into the **Results** table in `log.md` for every post that is **at least 48 h old**: per app, views, watch rate, likes, comments, shares, saves, engagement rate ((likes + comments + shares + saves) ÷ views), Instagram skip rate.
3. **What counts:** a number counts only once that post has **300+ views on that app** after 48 h (Kai: "300 is a good baseline but it will vary"; if posts rarely reach 300, say so in the Sunday scorecard and propose a lower line). Below the line, record it but don't act on it. A pattern needs **3 counted videos** before you drop something or do more of it. One fluke never changes the rules.
4. **How to rank:** watch rate first, then engagement rate, then views (Kai: "watch rate is first"). Views depend on luck and timing.
5. Keep doing what beats the median, stop doing what lands in the bottom third, and **change one thing at a time** so the cause is clear.

**The test plan.**
- **VOICE IS ON HOLD (Kai, Nov 11, 2026). Make every nightly video with NO voice (TEXT) until this line is removed.** Kai said the Kokoro Michael voice "talks slow and kinda stutters" and turned down three other Kokoro voices. He asked for an ElevenLabs voice; ElevenLabs' terms bar anyone under 18, so don't use it (or anyone else's account) before Apr 13, 2027. Test 1 below resumes only after Kai picks a voice he is allowed to use. Until then, ignore the VOICE/TEXT alternation, keep the direct-question hook, and say "voice on hold" in the morning message's test line.
- **Test 1 (from Nov 11): AI voice vs. no voice.** Alternate nights: if the number of nightly videos already in `log.md` is even, tonight is **VOICE**; if odd, **TEXT**. Both arms open on a **direct question to the trade owner** (the hook style of the best video so far). VOICE: Michael voice asks the question in the first second and talks through the video; on-screen text still carries the key words (many people watch muted). TEXT: the same kind of question as on-screen text, no voice. Everything else (look, story, music) varies freely. Evidence so far (Nov 10): the only two videos with a voice were the top two on TikTok by views (#7 52,607 views, about 9% watch rate; #6 657 views, about 23%); every no-voice video got under 200 TikTok views.
- **Test 1 ends** when each arm has 3 counted videos. The arm with the higher median watch rate becomes the default, and you record the result in `log.md` and the Sunday scorecard.
- **Test 2 (next):** question hook vs. bold-statement hook, using the winning voice setting.
- Then keep going one variable at a time (format: story vs. list vs. game; length: 15 s vs. 25 s; first-frame motion). Write each new test in `log.md` before starting it.

## 1. The business (what every video is about)

- **Horizon Scales** (horizonscales.com), Meridian, Idaho. Helps service businesses (landscapers, hardscapers, painters first; also roofers, plumbers and every trade in between) get more booked jobs.
- **Three services, sold separately or together:** Google & Meta ads · websites built to get the call · an AI receptionist that answers, books and texts the owner.
- **The story we tell:** service businesses lose jobs in three places ("the three leaks"):
  1. **They can't find you** → fix: ads.
  2. **Your website doesn't get the call** (they land on it and leave) → fix: a website built to get the call.
  3. **You miss the call on a job** → fix: an AI receptionist that picks up.
  **Use one of these per video, never all three (see section 2b).** Every video must make sense to a **trade owner**, not to marketers or AI people.
- **Tag line:** "You run the business. We help it scale."
- **Brand:** plum `rgb(28,2,40)`, coral `#F0645A`, light coral `#F5A39A`, cream `#F6F0E6`, sun yellow `#FFD27A`. Logo: `kit/assets/logo-long.png` (wide, on dark plum: draw it with `globalCompositeOperation = 'lighten'` so its dark box never shows), `kit/assets/badge.png` (round), `kit/assets/wordmark.png` (text only).
- **Every video ends on the plum end card:** logo, "You run the business." (cream), "We help it scale." (light coral), "Websites · Ads · AI receptionists", "horizonscales.com". Only the logo and the plum end card stay the same between videos.

## 2. Content rules (never break these)

- **No made-up stats, results, testimonials, case studies or credentials.** No "we've helped 50 businesses", no "3x more calls", no percentages.
- **No real business names** and no real people. Characters are generic and fictional.
- **No prices, no guarantees, no "Opening spring 2027"** or any launch date.
- **Never promise revenue, sales or appointments.** "Found, called, booked" describes the aim, not a guarantee.
- **The AI receptionist is always called AI.** It is never shown as a human.
- **No pitching or outreach:** no "DM me", no "book a call with me", no tagging businesses. Captions may ask a question for comments.
- **Original work only:** no copyrighted songs, characters, logos, games or film scenes. Music is synthesized in `score.mjs`. Don't recreate a famous game, show, ad or song.
- **Voice follows the test plan (section 0).** On voice nights the narration is the AI voice (Kokoro `am_michael`, made with `kit/voice/make_vo.py`), never a real person's voice or a clone, and the post turns on every app's AI-content label. On text nights there is no voice.

## 2b. One idea per video (Kai, Nov 11, 2026: "kinda repetitive, just explaining the same thing over and over")

Kai pulled video #11 ("The Empty Week") because it was the same script as most earlier videos. These rules come before the story notes in section 1:
- **Never run the "three leaks, three fixes" list again.** No video walks through not found → website → missed call with a fix for each. That includes renamed versions (three gaps, three pits, three places, three steps).
- **One idea per video:** one leak, one moment, one tip or one joke, and at most one service named as the fix. Rotate which one from night to night (ads, website, AI receptionist) and check `log.md` so the same idea isn't used two nights running.
- **No problem → fix → problem → fix pattern inside a video.** Tell one small story with a beginning, a turn and a payoff.
- **Entertain or surprise first, explain last.** Show it, don't list it. At most one line says what Horizon Scales does, and it comes at the end.
- A pulled video doesn't count toward the test-arm alternation in section 0: count only nightly videos that stayed scheduled or were posted.

## 2b-2. A new look is not a new video (Kai, Nov 11 evening)

Kai, after seeing #12: "I want it to be more unique instead of being the exact same video over and over again. The entire videos that you post are just explaining the three steps in the exact same way, just different layouts." **This is the most important rule in this file.**

- **Stop making videos that explain what Horizon Scales does or sells.** No "here's the problem, here's our service that fixes it", even for a single service. The services appear on the plum end card and nowhere else, except in type 7 below.
- **Rotate the TYPE of video, not just the look.** Never the same type two nights running; write the type in `log.md`. Types:
  1. **A test or game the viewer plays** (a drive-by sign test, "A or B: which would you call?", spot what's wrong).
  2. **One free tip they can do today in five minutes** (their voicemail greeting, the photo on their Google profile, where the phone number sits on their site).
  3. **A trade-life moment or joke** an owner recognizes, with no lesson attached.
  4. **A myth or hot take:** one opinion, stated plainly, that owners will want to argue with.
  5. **POV of the homeowner:** how a customer actually picks who to call.
  6. **Behind the build:** practice work, always labeled "concept".
  7. **A service story** (one service, one small story). At most one a week.
- **The subject is always something Horizon Scales works on (Kai, Nov 11, on the yard-sign video: "I do like that but I don't sell street signs").** Every video is about one of: a business's **website**, **being found online / ads**, or **answering calls** (the AI receptionist's territory). Not yard signs, truck wraps, flyers, business cards or anything else we don't do. Kai liked the #13/#14 test format; keep it in the rotation.
- **The buddy test, before building:** finish the sentence "a painter would tell his buddy this video is about ___". If the answer is "a marketing agency", "three leaks" or "why you need ads / a website / an AI receptionist", start over.
- **Never ask Kai to approve a post.** He said it again on Nov 11: "you dont need my approvle to post, that's the whole point of this chat." Schedule it, and tell him how to stop it. That's all.

## 2c. Skills to use when they help (Kai, Nov 11, 2026)

Kai: "when doing this videos i want you to use these skills: /viral-hook-creator /social-post-writer", then `marketing-skills:social`, then (Nov 11 evening) "Use the skills as needed, please." So: they are tools, not a checklist. Load one with the Skill tool when it will make tonight's hook, caption or format better, and skip it when it won't. When you do load one (they may be listed as `anthropic-skills:viral-hook-creator` and `anthropic-skills:social-post-writer`) before writing, and follow them:
- **`viral-hook-creator` → the hook.** Use it before you settle the concept. Write several hook options with it, pick the strongest one that is a direct question to the trade owner (Test 1 needs a question hook on both arms), and note in `brief.md` which pattern it uses and the options you rejected.
- **`social-post-writer` → the caption and titles.** Use it for the post text, the TikTok title, the YouTube Shorts title and the Facebook Reel title in section 6, in the same voice as the hook.
- **`marketing-skills:social` → the whole post (Kai, Nov 11 afternoon: "also use this one").** Read its `references/short-form-video.md` before planning the video, and follow its short-form rules: the first second carries a visual hook, the hook words and (when there is a voice) the spoken hook together; on-screen captions are at most 2 lines of 3–5 words with key words in a second colour; shorter beats longer; the story comes first. Use its "No AI tells" list on the caption and on every on-screen line: no "it's not X, it's Y", no "no X, no Y, no Z" lists, no em dashes, no one-sentence-per-line posts, no engagement bait ("Agree?", "Thoughts?"). The closing question must be a real one a trade owner can answer. If `social-post-writer` isn't installed, this skill covers the caption and titles on its own.
- **Kai's rules win over the skills.** If a skill suggests a stat, a number, a result, a testimonial, a guarantee, a "DM me" or a call to book, leave it out (sections 2 and 2b). The social skill also says to create posts as drafts and wait for approval; Kai's standing approval (top of this file) already covers the nightly post, so schedule it as section 6 says. Keep the caption format in section 6: 2–3 short lines, a question for comments, 5 hashtags.
- If a skill isn't available in the session, say so in the morning message and write the hook and caption by hand to the same rules. Don't skip the video.

## 2d. Kai's animation skills (uploaded Nov 11, 2026): use them, or take inspiration from them

Kai: "i just uploaded a new skill set ... i want you to use these / Take inspiration from them." Six skills in the `animation-skills` plugin. Load one with the Skill tool (`animation-skills:<name>`) and read its SKILL.md before using it; each comes with a working engine or template. Rotate them like the video types in 2b-2, and mix in your own formats too.

| Skill | What it makes | How it fits here |
|---|---|---|
| `zach-d-films` | 3D cartoon "what if / could X" short: procedural people and props, slow-motion impacts, whip cuts, 1–3 word captions | A "what if" about a painter's website, search or missed call. Built around a voiceover: while voice is on hold, drive it with captions only. |
| `stick-figure` | Bright stick-figure explainer world, constant camera motion, 1–2 word captions, cartoon sound | Trade-life moments and homeowner POV stories. Also voiceover-timed: captions only while voice is on hold. Its setup downloads about 1 GB of voice models; skip the voice part. |
| `minimalistic-graphics` | Black-and-white line art, one dot, one quiet line that swaps to a second | A single thought or hot take (type 4). |
| `map-route` | 3D white city, a route drawing itself, a pin drop, an ETA card | "Being found": the homeowner's route to a painter, who shows up on the map. |
| `breakdown` | 3D exploded view of a phone with labels on each layer | "What's inside a website that gets the call" or a missed call taken apart. |
| `graph` | A line graph drawing itself while a number counts up | **Only with real numbers** (the skill says never invent data, and so do Kai's rules). Fine for Horizon's own real social numbers from `log.md`; never a made-up client result. |

- These skills' engines render their own video. Either use the engine and then run the result through the same gates (1080×1920, 15–30 s, zone overlay, loudness, no black frames, plum end card with the logo), or borrow the look and build it in the kit's canvas format. Say in `brief.md` which skill was used or borrowed from.
- All of sections 2, 2b, 2b-2 and 4 still apply: no invented stats or results, the subject is something Horizon Scales does, no pitch, frame safety. Don't use any skill's ElevenLabs option (under 18).
- If the plugin isn't loaded in a night's session, say so in the morning message and build in the kit as usual.
- **Setup notes from the first test (Nov 11, `work/2026-11-11-map-test/` is a working example with `map-route`):** don't run the plugin's `kit/setup.sh` as written (it runs `playwright install`, which this machine must not do). Instead, in the plugin's `kit/` folder: `npm install --no-save three@0.169.0 @fontsource/montserrat@5.1.0`; get GSAP from npm (`npm install gsap@3.12.5` somewhere, copy `node_modules/gsap/dist/gsap.min.js` to `kit/vendor/gsap.min.js`; cdnjs is blocked); and export `HYPERFRAMES_BROWSER_PATH` = the pre-installed Chromium (`node -e "console.log(require('playwright').chromium.executablePath())"`) before running a skill's `build.py`. A map render takes about 3 minutes; run it in the foreground (background jobs get killed). To put a skill's clip inside our frame (title, captions, end card), extract its frames to JPGs and draw them in `index.html` at the clip's own speed; slowing a 30 fps clip down ghosts or judders.

## 3b. Sound (Kai, Nov 11, 2026: "You kind of keep using the same beeps and stuff for each video ... I don't think it sounds very good anyway.")

- **Stop using the synth "UI" sounds as the soundtrack:** no `S.blip`, `S.pop`, `S.tick`, `S.click`, `S.swipe` on every card change, and no all-synth band. That set made every video sound the same.
- **Music comes from real sampled instruments:** write the parts as notes in `music.json` and render them with `python3 ../../kit/sound/sf_render.py music.json audio/band.wav` (General MIDI SoundFont: pianos, guitars, basses, strings, brass, woodwinds, mallets, accordion, banjo, fiddle, steel drums, and several real drum kits). Load the WAV in `score.mjs` with `S.load(...)` on its own bus and let `score.mjs` do only the mix and mastering. The script's docstring lists the instrument and drum numbers.
- **A different band every night.** Read `log.md` and pick a lead instrument, a rhythm section and a tempo that haven't been used in the last 7 videos (for example: nylon guitar + upright bass + brush kit; piano + strings; electric piano + finger bass; accordion + tuba; steel drums + congas; banjo + fiddle; muted trumpet + jazz kit). Write the band in the log line.
- **Hits on changes use the band, not beeps:** a drum fill, a cymbal, a bass slide, a chord stab, a triangle or wood block from the drum kit. Sound effects only where the picture has a real-world sound (a phone ringing, a door, a car passing), at most three kinds per video, and never the same effect set two nights running.
- Keep the old rules: clear hits on card changes, nothing "overdramatic cinematic", −14 LUFS, true peak ≤ −1 dBTP.
- Claude can't hear the result. Check it by measurement (`audio.mjs check`), keep arrangements simple (three or four parts), and say in the morning message which band was used so Kai can say what he likes.

## 3. Style rules (from Kai's feedback)

- **Variety:** every video gets a new look: a new visual idea, format, typeface pairing and music genre. Read `log.md` first and don't repeat a concept or style that's already there. Only the logo and the plum end card repeat.
- **Hook:** frame 0 must already be readable and must stop the scroll with something surprising or recognizable (a GAME OVER screen, a crossed-out cliché, a question a trade owner feels). No stats in hooks. Pick from the patterns that need no proof: contrarian, question, empathy, bold claim (one you can back up), confession.
- **Hold attention to the end.** Something changes every 1–2 seconds; the payoff comes before the end card.
- **No fat, heavy bold text**, and slides that aren't too fast: every card or caption stays up at least ~1.4 s, and leak captions ~2 s.
- **Beats on card changes:** every time a card or caption changes, the music hits (kick/clap/stab, or the style's equivalent). Kai likes clear hits on changes. He did NOT like "overdramatic cinematic" backgrounds (braams, choirs, trailer strings).
- **Length:** 15–30 s.

## 4. Frame safety rules (Kai, Nov 5; measured for 1080 × 1920)

1. Hook or title at the **top** of the frame, about y 190–380 px.
2. Running captions **just below the middle**, about y 1250–1440 px. Not at the bottom.
3. **Safe zone:** x 140–940 px, y 290–1540 px. All words, faces, phones and logos stay inside it.
4. **Danger zone:** the edges outside the safe zone. Background and motion only.
5. **Avoid at all costs:** the right-hand strip from the middle down (x > 864, y > 920: like/comment/share buttons) and the bottom strip (y > 1630: username and caption). In the lower half, text stays left of x ≈ 860 px; centre lower captions at x ≈ 500.
6. **Punch in:** zoom-ins on beats and cuts so the frame never sits still.
7. **Busy background → stroke:** text over busy pictures gets a dark outline.

Check this with the zone overlay in step 5.

## 5. How to make the video

Work in `work/YYYY-MM-DD-<slug>/` (copy `kit/build.sh`, `kit/motion.js`, `kit/fonts/`, `kit/assets/` into it; make `audio/ out/ qa/`). The three folders in `kit/examples/` are complete, working videos. Read at least one before writing your own: `index.html` (canvas animation, exposes `window.render(t)`, `window.DUR`, sets `window.READY`), `timeline.js` (all timings), `score.mjs` (synthesized music, run by `kit/msr/scripts/audio.mjs`).

Setup, once per run:
```
cd kit/msr/scripts && npm install --no-audit --no-fund --loglevel=error && cd -
```
Playwright and Chromium are already installed on the machine. Don't run `playwright install`.

Useful commands (from the work folder):
- Stills: `node ../../kit/msr/scripts/render.mjs . --size 1080x1920 --still 0,1.5,3,... --sheet --out qa/s1` → look at `qa/s1/sheet.png`.
- Audio only: `node ../../kit/msr/scripts/audio.mjs build score.mjs --out audio/music.wav` then `... audio.mjs check audio/music.wav`.
- Full build with every check: `sh build.sh` → must end with **"All technical checks passed."**
- Cover: `node ../../kit/msr/scripts/render.mjs . --size 1080x1920 --directions thumb --at 0 --out qa/thumb` (your page reads `?dir=thumb` and shows the hook frame), then `ffmpeg -y -v error -i qa/thumb/thumb_t0.00.png -q:v 2 out/cover.jpg`.

Known pitfalls (each one cost a re-render before):
- **Times vs lengths:** if `b(n)` includes an offset (a hook before beat 0), never use it for note lengths or step sizes. Keep a separate `L(n) = n * BEAT`.
- **Fill the background on every frame** (`fillRect` first). Leftovers from the previous frame break the determinism check.
- **Round `t`** at the top of `render`: `t = Math.round(t * 1e5) / 1e5`.
- **"No black frames" fails** on dark plum end cards when nothing bright is on screen: bring the logo in early and keep something light visible.
- **Comments in generated code:** a `// comment` pasted mid-line swallows the code after it. Keep comments at the end of lines.
- **Audio checks:** fix any "boomy", "harsh/hissy" or "silences" warning unless the silence is the deliberate breath before a drop (then keep it under ~0.5 s or add a quiet pulse). True peak must stay ≤ −1 dBTP.

**Quality gates.** All must pass before anything is scheduled:
1. `sh build.sh` ends with "All technical checks passed." (determinism, size, fps, duration, audio, no black frames, loudness −14 ± 1.5 LUFS, true peak ≤ −1 dBTP).
2. Look at a contact sheet with a still at least every 2 s. Every word readable and spelled right, nothing cut off, nothing overlapping.
3. **Zone overlay:** draw the safe-zone rectangle and the two avoid strips over 6–10 key frames (Pillow) and look at it. Fix anything inside the avoid strips.
4. Re-read the script against section 2. If any line could be read as a claim or a promise, rewrite it.
If a gate still fails after two fix attempts, **don't schedule anything**. Write what went wrong in `log.md` and in the final message.

## 6. Save and schedule

1. Copy the finished files to `videos/YYYY-MM-DD-<slug>/`: `video.mp4`, `cover.jpg`, and `brief.md` (idea, script, look, sound, checks). Keep the source (`index.html`, `timeline.js`, `score.mjs`, `brief.md`) in `work/YYYY-MM-DD-<slug>/` and delete its `audio/ out/ qa/` folders and any `node_modules`.
2. Add a line to `log.md` under **Nightly runs** (date, #n, slug, **test arm: VOICE or TEXT**, concept, look, music genre, hook, length in seconds, scheduled time, Metricool post id).
3. Commit and push to `main`: `git -c user.name="Claude" -c user.email="noreply@anthropic.com" commit -m "..."`, then `git push origin main`. If the push is rejected, `git pull --rebase origin main` and push again.
4. Check the public link loads: `curl -sS -o /dev/null -w "%{http_code} %{size_download}\n" https://raw.githubusercontent.com/Horizon301/horizonscales-videos/main/videos/<folder>/video.mp4` → `200` and the full size.
5. **Pick the time.** Metricool brand `blogId` **7855113**, timezone **America/Denver**. Call `getBestTimeToPostByNetwork` for `tiktok` and `instagram` for the post day: **the same calendar day the run started in America/Denver** (the run starts about 1:30 AM, so the post goes out that morning and Kai can check it first). If the best hour is less than 2 h away when you finish, use the best hour that is at least 2 h away. Add the two values hour by hour for hours 8–20 and take the highest. It has been **10:00** so far. Then call `getScheduledPosts` for that day. If another post is already within 6 h of that hour, use the best hour at least 6 h away from it; if none, move to the next day.
6. **Schedule** with `createScheduledPost`: `autoPublish: true`, `draft: false`, `media: [<raw video URL>]`, providers `instagram` (`instagramData.type: "REEL"`, `showReelOnFeed: true`), `tiktok` (`tiktokData.title` is **required**: a short title, `privacyOption: "PUBLIC_TO_EVERYONE"`), `youtube` (`youtubeData`: `title` with `#shorts`, `type: "short"`, `privacy: "public"`, `madeForKids: false`), `facebook` (`facebookData.type: "REEL"`, `title`). Set `publicationDate` in America/Denver. **AI-content flags:** on VOICE nights set `tiktokData.isAigc: true`, `instagramData.isAiGenerated: true` and `youtubeData.isAiGeneratedContent: true` (AI voice). On TEXT nights leave them false (clearly animated, no AI voice), per the HQ content rules.
   - **Caption** (`text`, one for all platforms): 2–3 short lines a trade owner would read, the same voice as the hook, then a question that invites comments, then **5 hashtags**: `#smallbusiness #servicebusiness #contractorlife #localbusiness #marketing` (swap one for a trade tag if the video is about a trade).
   - Don't send `videoThumbnailUrl` (it can reject the whole post on some account types). The cover is for `videos/` and the HQ record.
7. Save the returned `plannerUrl`.

## 7. Record it in HQ and report

- If the Projects tool is available (HorizonScales HQ): add a row to the video library table in `claude/14_Content_Social.md` (next number, title, one-line description, length, "Made <date> · scheduled <date time> (nightly run)") and its captions block above the newest captions, then bump the version line. Also save the source to `claude/content/<slug>/` (brief.md, index.html, timeline.js, score.mjs). Read before writing and write back the whole file.
- **Final message** (Kai reads it in the morning; he asked for exactly this, in this order):
  1. **Yesterday's post:** did it publish on all 4 apps? (Check with `getScheduledPosts` for yesterday, `extendedRange: true`, and look at each provider's status; a failure goes **at the very top** in bold.) Then how it did, per app: views, watch rate, likes, comments, shares (and saves and skip rate on Instagram). Mark numbers under 300 views as "too early to count". If yesterday's post is less than 24 h old, give what's there and say so.
  2. **Today's video:** title, hook, test arm (VOICE or TEXT), the time it will post, the raw video link to watch it, the Metricool planner link, and: **"To stop it, delete or reschedule the post in Metricool before <time>."**
  3. One line on the test so far (e.g. "Voice vs. no voice: 1 counted video each, too early to call").
  If nothing was scheduled tonight, say so and why, still with part 1.
