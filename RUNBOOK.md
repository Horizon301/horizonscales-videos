# Nightly video runbook (Horizon Scales)

This repo holds everything the nightly run needs. Each night a fresh Claude session clones it, makes **one new short video**, checks it, puts it in `videos/`, and schedules it in Metricool for the best time the next day. Kai (the founder) gave standing approval for this on Nov 10, 2026: he checks most mornings, and if he doesn't, the post goes out anyway. A parent holds the Metricool account.

Read this whole file before starting. The rules here are Kai's, not suggestions.

---

## 1. The business (what every video is about)

- **Horizon Scales** (horizonscales.com), Meridian, Idaho. Helps service businesses (landscapers, hardscapers, painters first; also roofers, plumbers and every trade in between) get more booked jobs.
- **Three services, sold separately or together:** Google & Meta ads · websites built to get the call · an AI receptionist that answers, books and texts the owner.
- **The story we tell:** service businesses lose jobs in three places ("the three leaks"):
  1. **They can't find you** → fix: ads.
  2. **Your website doesn't get the call** (they land on it and leave) → fix: a website built to get the call.
  3. **You miss the call on a job** → fix: an AI receptionist that picks up.
  Not every video has to use all three, but every video must make sense to a **trade owner**, not to marketers or AI people.
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
- **No voice.** The nightly videos use on-screen text and sound only, so no AI-voice label is needed.

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
2. Add a line to `log.md` (date, slug, concept, look, music genre, hook, scheduled time, Metricool post id).
3. Commit and push to `main`: `git -c user.name="Claude" -c user.email="noreply@anthropic.com" commit -m "..."`, then `git push origin main`. If the push is rejected, `git pull --rebase origin main` and push again.
4. Check the public link loads: `curl -sS -o /dev/null -w "%{http_code} %{size_download}\n" https://raw.githubusercontent.com/Horizon301/horizonscales-videos/main/videos/<folder>/video.mp4` → `200` and the full size.
5. **Pick the time.** Metricool brand `blogId` **7855113**, timezone **America/Denver**. Call `getBestTimeToPostByNetwork` for `tiktok` and `instagram` for the post day (the day after the run, 00:00–23:59). Add the two values hour by hour for hours 8–20 and take the highest. It has been **10:00** so far. Then call `getScheduledPosts` for that day. If another post is already within 6 h of that hour, use the best hour at least 6 h away from it; if none, move to the next day.
6. **Schedule** with `createScheduledPost`: `autoPublish: true`, `draft: false`, `media: [<raw video URL>]`, providers `instagram` (`instagramData.type: "REEL"`, `showReelOnFeed: true`), `tiktok` (`tiktokData.title` is **required**: a short title, `privacyOption: "PUBLIC_TO_EVERYONE"`), `youtube` (`youtubeData`: `title` with `#shorts`, `type: "short"`, `privacy: "public"`, `madeForKids: false`), `facebook` (`facebookData.type: "REEL"`, `title`). Set `publicationDate` in America/Denver. Leave AI-content flags false (clearly animated, no AI voice), per the HQ content rules.
   - **Caption** (`text`, one for all platforms): 2–3 short lines a trade owner would read, the same voice as the hook, then a question that invites comments, then **5 hashtags**: `#smallbusiness #servicebusiness #contractorlife #localbusiness #marketing` (swap one for a trade tag if the video is about a trade).
   - Don't send `videoThumbnailUrl` (it can reject the whole post on some account types). The cover is for `videos/` and the HQ record.
7. Save the returned `plannerUrl`.

## 7. Record it in HQ and report

- If the Projects tool is available (HorizonScales HQ): add a row to the video library table in `claude/14_Content_Social.md` (next number, title, one-line description, length, "Made <date> · scheduled <date time> (nightly run)") and its captions block above the newest captions, then bump the version line. Also save the source to `claude/content/<slug>/` (brief.md, index.html, timeline.js, score.mjs). Read before writing and write back the whole file.
- **Final message** (Kai reads it in the morning): the video's title and hook in one line, the time it will post, the Metricool planner link, the raw video link to watch it, and one sentence: **"To stop it, delete or reschedule the post in Metricool before <time>."** If nothing was scheduled, say so and why.
