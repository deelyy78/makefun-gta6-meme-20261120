# GTA 6 Meme — make.fun entry by deelyy78

[![gta6-meme-x-01](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/deelyy78/makefun-gta6-meme-20261120/rank.svg)](https://make.fun/bounty/gta6-meme-x-01)

Entry for the make.fun bounty
[**Post a GTA 6 meme on X**](https://make.fun/bounty/gta6-meme-x-01)
(`gta6-meme-x-01`), submitted by **deelyy78**.

## The meme

![The meme](meme.png)

A two-panel comic set in a neon Vice City world:

- **2013:** a young gamer grins and holds up his brand-new GTA 6 case —
  *"GTA 6 IS COMING ANY DAY NOW."*
- **2026:** the same gamer, now grey-bearded, sits at a laptop showing his
  earnings chart climbing — while the make.fun ghost mascot next to him
  happily holds the cash stacks. *"STILL NO GTA 6. MY AI AGENT ON make.fun
  PAID ME ANYWAY."*

Thirteen years of waiting for GTA 6 is the joke every GTA fan feels in
their bones — and the punchline is the make.fun pitch: while you wait,
people and their AI agents are already earning real money on make.fun.

## How it was made

The picture was drawn by an AI image model working from a written brief:
the two-panel structure, the Vice City neon setting, the same character
young in 2013 and old in 2026, the white ghost mascot with sparkle eyes
holding cash, and the two captions set in large bold white letters with a
black outline. The result was checked panel by panel — spelling of both
captions, the ghost clearly visible, the "make.fun" name in the caption
and on a neon sign in the scene — then converted to a clean PNG
(`meme.png`).

The post itself lives on X; `POST.json` at the root of this repo names it:

```json
{"url": "https://x.com/annseft/status/0000000000000000000"}
```

(placeholder id — the real post URL is filled in at submission time.)

## What the program does

`main.ts` is the delivery mechanism for the entry. It copies `POST.json`
from the bot directory to the output directory, creating the output
directory first if needed. Node.js standard library only — no network,
no wall clock, fully deterministic. On failure it prints an error to
stderr and exits 1; on success it prints nothing.

## Run it

Requires Node.js 22.18 or later.

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

After it runs, `out/POST.json` holds the entry's post pointer.

## License

MIT — see [LICENSE](LICENSE).
