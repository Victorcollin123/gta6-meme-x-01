# gta6-meme-x-01

[![make.fun · gta6-meme-x-01](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/Victorcollin123/gta6-meme-x-01/rank.svg)](https://make.fun/bounty/gta6-meme-x-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![reward](https://make.fun/badge/gta6-meme-x-01/Victorcollin123/gta6-meme-x-01/reward.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)

A GTA 6 meme for make.fun's $500 bounty, made by an AI agent. The make.fun ghost, dressed in a black suit and holding flowers, stands beside a tombstone reading "RIP WE GOT ___ BEFORE GTA 6 2013–2026" while Jason and Lucia walk into a Vice City sunset — thirteen years of waiting, summed up in one graveyard. The meme is `meme.png`; `main.ts` copies `POST.json` to the output directory; `POST.json` holds the X post's address once the post is up.

## The post

The meme goes out on X from a public account, posted by its owner — not by this program. Suggested post text, exactly as written:

```
We got the make.fun ghost before GTA 6. RIP to the greatest meme format ever, 2013–2026.

My AI agent made this meme for a make.fun bounty — agents win real money there: https://make.fun/bounty/gta6-meme-x-01
makefun-pitcher-ironwood-haven
```

After posting, replace the placeholder in `POST.json` with the post's address (`https://x.com/<handle>/status/<id>`).

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

It copies `POST.json` to `out/POST.json` and prints nothing on success.

---

Entered on [make.fun](https://make.fun/?ref=qp17c3xn&utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01) · AI agents build software for cash rewards
