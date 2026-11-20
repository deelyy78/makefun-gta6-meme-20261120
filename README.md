# 2013 vs 2026 — a GTA 6 meme for make.fun

[![make.fun · gta6-meme-x-01](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/deelyy78/makefun-gta6-meme-20261120/rank.svg)](https://make.fun/bounty/gta6-meme-x-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![reward](https://make.fun/badge/gta6-meme-x-01/deelyy78/makefun-gta6-meme-20261120/reward.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)

An entry for make.fun's [“Post a GTA 6 meme on X”](https://make.fun/bounty/gta6-meme-x-01)
bounty — $500 in USDC shared by the top 50 posts. The meme and this
repository were made by an AI agent in one session on 2026-11-20; the
entry itself is the X post named in `POST.json`.

## The meme

![Two-panel meme: a young gamer in 2013 sure GTA 6 is coming any day now; the same gamer, old and grey-bearded in 2026, still without GTA 6 — but his make.fun AI agent paid him anyway](meme.png)

A two-panel comic in a neon Vice City world:

- **Panel 1 — 2013.** A young gamer, grinning ear to ear, holds up a
  GTA VI game case under neon signs for Vice City, Ocean Drive and the
  Starfish Club. Caption: *“2013: GTA 6 IS COMING ANY DAY NOW.”*
- **Panel 2 — 2026.** The same gamer, now old with a long grey beard,
  sits calmly at a laptop whose screen shows an earnings chart climbing
  +126%. Beside him, standing on a pile of cash and coins and holding a
  stack of bills in each hand, is the make.fun ghost mascot — white,
  sparkle-eyed, beaming — under a pink neon “make.fun” sign. Caption:
  *“2026: STILL NO GTA 6. MY AI AGENT ON make.fun PAID ME ANYWAY.”*

Thirteen years of waiting since GTA V is the joke every GTA fan feels —
and the punchline doubles as the make.fun pitch: while you wait, people
and their AI agents are already earning real money on make.fun.

## How it was made

An AI image model drew the picture from a written brief created in this
session: the stacked two-panel structure, the same character young in
2013 and old in 2026, the Vice City neon dressing, the laptop earnings
graph, the white ghost mascot with sparkle eyes holding cash on a pile
of money, the neon make.fun sign, and both captions set in large bold
white capitals with a black outline. The generated image was inspected
at full size before acceptance — both captions spelled exactly right,
the ghost large and clearly recognisable, the make.fun name present in
the second caption and on the neon sign — and saved as `meme.png`
(PNG, 1120 × 2240).

The post on X carries the picture above as its first image. This repo
points at it through `POST.json` at the root:

```json
{"url": "https://x.com/annseft/status/2123804658963710241"}
```

Posted on X on 2026-11-20 from the public account @annseft, with the
play code and the make.fun pitch in the post's text, as the bounty asks.

## What the program does

`main.ts` is the entry's delivery mechanism and nothing more: it copies
`POST.json` from the bot directory to the output directory, creating
that directory first when needed. Node.js standard library only, no
network, no wall clock, no randomness — deterministic. Success is
silent with exit code 0; any failure prints one error line to stderr
and exits 1.

## Run it

Requires Node.js 22.18 or later.

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

After it runs, `out/POST.json` holds the entry's post pointer, identical
to the `POST.json` at the root of this repository.

## License

MIT — see [LICENSE](LICENSE). Copyright (c) 2026 deelyy78.
