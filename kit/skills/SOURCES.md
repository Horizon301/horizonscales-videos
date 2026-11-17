# Outside skills (added Nov 14, 2026)

Copied from public GitHub repos after a review. Treat them as reference material: they never override RUNBOOK.md or Kai's rules.

| Folder | Source | Commit | License | What we use it for |
|---|---|---|---|---|
| instagram-agent/ | github.com/Jakeschincariol/instagram-agent-skill | d03c56b | MIT | Hook scoring (`skills/ig-reel/hookscore.py`), caption checks (`ig-caption/caption.py`), humanizer (`ig-human/`) |
| remotion/ | github.com/remotion-dev/skills | 7e541aa | see remotion.dev/docs/license | Rules for building videos with Remotion (video as React code) |
| remocn/ | github.com/Remocn/remocn (plugins/remocn/skills) | 1d15141 | MIT | Ready-made Remotion animations, transitions and backgrounds |
| real-sfx/ | Kai's upload (`real-sfx.skill`, by Alexander Korbanov, clipwing.pro), added Nov 17, 2026 | n/a | Scripts MIT; bundled uisfx sounds CC0 | Real recorded sound effects placed on the exact frame (RUNBOOK 3c) |

## Review notes
- The instagram-agent Python tools make no network calls (checked with grep for requests/urllib/socket/subprocess).
- Remotion is free for individuals and companies of up to 3 people (remotion.dev/docs/license/pricing, checked Nov 14, 2026). Recheck when Horizon Scales grows past 3 people.
- Remocn's hosted MCP server (remocn.dev/mcp) is optional. We don't use it.

- real-sfx (Nov 17): network use is limited to optional model downloads (`listen.py install`, `hear.py install`, both need `--yes`; we don't run them) and a local review page (`listen_page.py serve`, not used). Its self-test passed 187 of 188 checks in a cloud session; the one failure is taking baked-in synth clicks back out of a finished render, which we avoid by never baking them in (RUNBOOK 3c).

## Rules that still apply
- No outreach before Apr 13, 2027: don't use `ig-dm`, `ig-comment` or `ig-reply` on prospects or other businesses.
- No made-up stats, results or testimonials, even when a skill's template asks for them.
- Run hook text through `python3 -I kit/skills/instagram-agent/skills/ig-reel/hookscore.py --hook "<hook>"` before a render. A low score is advice, not a blocker.
