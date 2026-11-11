# HQ entry for video #12 "The Elevator" and Kai's Nov 11 feedback (to merge into `claude/14_Content_Social.md`)
*Written Nov 11, 2026. `14_Content_Social.md` itself was not changed: the Projects tool only replaces a file in full and there was no exact copy on disk to write back safely.*

**Version line to add:** v1.33 (Nov 11): Kai pulled nightly video #11 "The Empty Week" before it posted ("kinda repetitive, just explaining the same thing over and over"); new rule: one idea per video, no more three-leaks-three-fixes lists; video #12 "The Elevator" made the same morning and scheduled for Nov 11, 6:00 PM MT.

**New rule for the "Hooks and retention" / "Messaging" sections (Kai, Nov 11, Confirmed):**
- No video runs the "three leaks, three fixes" list again (in any wording: gaps, pits, places, steps).
- One idea per video: one leak, one moment, one tip or one joke, and at most one service named as the fix. Rotate ads, website and AI receptionist from night to night.
- No problem → fix → problem → fix pattern inside a video. One small story with a beginning, a turn and a payoff.
- Entertain or surprise first, explain last; at most one line about what Horizon Scales does, at the end.
- Already written into `RUNBOOK.md` section 2b in the repo, so the nightly run follows it.

**Skills for the nightly videos (Kai, Nov 11, Confirmed):** use the `viral-hook-creator` skill for every hook and the `social-post-writer` skill for every caption and title. Kai's content rules still win over anything a skill suggests (no stats, results, guarantees or pitches). Written into `RUNBOOK.md` section 2c. Kai added the `marketing-skills:social` skill the same afternoon ("also use this one"): the nightly run loads it for the short-form video rules, the caption and the no-AI-tells check. Videos #11 and #12 were made before this and did not use the skills.

**Video library rows:**

| # | Title | Length | Status | Source |
|---|---|---|---|---|
| 11 | The Empty Week (whiteboard week schedule; three job notes slip away, an ADS, WEBSITE and AI RECEPTIONIST magnet each make one stick) | 25.8 s | Made Nov 11, 2026 (nightly run) · **pulled by Kai before posting, never published** | `claude/content/empty-week/` |
| 12 | The Elevator (one idea: you can't be found. Hook on frame 0, spoken in the first second: "Painters: how deep is your business buried?" (hook redone with the viral-hook-creator skill) → search results are a building: "Page one. This is where the phones ring." → "You're a bit further down." → the floor display counts down to PAGE 47, "Keep going." "Still going." → a dusty basement, a sleeping phone, YOUR BUSINESS: "There you are." → the car's sign lights up ADS, the desk rides up: "Ads can put you on the top floor." → the phone rings on page 1 → elevator doors close into the end card) · flat building cutaway at dusk, big PAGE display, captions on dark panels; original elevator-music bossa; no voice (the Michael AI narration was removed before posting, Kai didn't like it); built to the frame safety rules | 22.5 s | Made Nov 11, 2026 · scheduled Nov 11, 2026 6:00 PM MT (10 AM was taken by #10) · Test 1 arm: TEXT · AI-content labels off · technical checks pass · cover = the hook frame | `claude/content/the-elevator/` (brief.md, index.html incl. cover `?dir=thumb`, timeline.js, score.mjs, vo_lines.json) |

**Captions for #12 "The Elevator" (one caption for all four apps, as scheduled):**
> Painters: how deep is your business buried? 🛗
> Page one is where the phones ring. Being good at the job doesn't move you up the list.
> What page do you think you're on? 👇
> #smallbusiness #servicebusiness #contractorlife #localbusiness #paintingcontractor
- *TikTok title:* Painters: how deep is your business buried?
- *YouTube Shorts title:* Painters: how deep is your business buried? #smallbusiness #shorts
- *Facebook Reel title:* The Elevator
- The caption was written by hand: the `social-post-writer` skill was not available in this session.
- Video: https://raw.githubusercontent.com/Horizon301/horizonscales-videos/main/videos/2026-11-11-the-elevator/video.mp4
- Rule check: no stats, results, prices, guarantee, opening date, real names or pitch; "page 47" is a joke, not a figure; "can" keeps the ads line from being a promise; AI voice, so the AI-content label is on for TikTok, Instagram and YouTube.

**Voice (Kai, Nov 11 afternoon, Confirmed):** Kai doesn't like the Kokoro Michael voice ("talks slow and kinda stutters") and turned down three other Kokoro voices (Puck, Fenrir, Heart). He asked for an ElevenLabs voice. Not done: ElevenLabs' terms (last updated Oct 9, 2026) say "If you are under 18 years of age (or the age of legal majority where you live), you may not use our Services" (https://elevenlabs.io/terms-of-use), which matches the hold already recorded in `14_Content_Social.md` (Open, ElevenLabs voice clone). Until a voice is chosen that Kai is allowed to use and likes, nightly videos are made with no voice and Test 1 (voice vs. no voice) is on hold. Options to decide in the Content & Social chat: Kai records his own voice; a parent records; a different AI voice service whose terms allow under-18 use with a parent's consent (check each one's terms first); or stay text-only until Apr 13, 2027.
