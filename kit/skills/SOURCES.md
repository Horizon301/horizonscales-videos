# Outside skills (added Nov 14, 2026)

Copied from public GitHub repos after a review. Treat them as reference material: they never override RUNBOOK.md or Kai's rules.

| Folder | Source | Commit | License | What we use it for |
|---|---|---|---|---|
| instagram-agent/ | github.com/Jakeschincariol/instagram-agent-skill | d03c56b | MIT | Hook scoring (`skills/ig-reel/hookscore.py`), caption checks (`ig-caption/caption.py`), humanizer (`ig-human/`) |
| remotion/ | github.com/remotion-dev/skills | 7e541aa | see remotion.dev/docs/license | Rules for building videos with Remotion (video as React code) |
| remocn/ | github.com/Remocn/remocn (plugins/remocn/skills) | 1d15141 | MIT | Ready-made Remotion animations, transitions and backgrounds |

## Review notes
- The instagram-agent Python tools make no network calls (checked with grep for requests/urllib/socket/subprocess).
- Remotion is free for individuals and companies of up to 3 people (remotion.dev/docs/license/pricing, checked Nov 14, 2026). Recheck when Horizon Scales grows past 3 people.
- Remocn's hosted MCP server (remocn.dev/mcp) is optional. We don't use it.

## Rules that still apply
- No outreach before Apr 13, 2027: don't use `ig-dm`, `ig-comment` or `ig-reply` on prospects or other businesses.
- No made-up stats, results or testimonials, even when a skill's template asks for them.
- Run hook text through `python3 -I kit/skills/instagram-agent/skills/ig-reel/hookscore.py --hook "<hook>"` before a render. A low score is advice, not a blocker.
