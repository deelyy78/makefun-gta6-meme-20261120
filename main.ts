// make.fun bounty gta6-meme-x-01 — "Post a GTA 6 meme on X"
// Entry runner (Node.js 22, standard library only).
//
// The real entry is an X post: a two-panel GTA 6 meme drawn in this
// session (meme.png) plus the post's text. This repository only has to
// point the grader at that post, and it does so through POST.json:
//
//     {"url": "https://x.com/annseft/status/<id>"}
//
// When the grader runs this file, it must find POST.json copied from the
// bot directory into the output directory, byte for byte:
//
//   * source      = <MAKEFUN_BOT_DIR>/POST.json    (default /bot)
//   * destination = <MAKEFUN_OUTPUT_DIR>/POST.json (default /output)
//
// Behaviour contract:
//   * the output directory is created first when it is missing;
//   * success is silent — nothing on stdout or stderr, exit code 0;
//   * any failure (no POST.json to read, a directory that cannot be
//     created, an unwritable destination) prints a single explanatory
//     line to stderr and exits with code 1.
//
// There is deliberately no network access, no clock reading and no
// randomness in here: given the same POST.json, every run produces
// exactly the same output directory contents.

import { copyFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

// Where the runner mounted this repository, and where it expects the
// deliverable to appear. Both can be overridden through the environment
// so the program can also be exercised locally:
//
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
const botDirectory = process.env.MAKEFUN_BOT_DIR || "/bot";
const outputDirectory = process.env.MAKEFUN_OUTPUT_DIR || "/output";

function deliverPostFile(): void {
  // recursive: true turns "already exists" into a no-op instead of an
  // error, which is exactly what a re-run needs.
  mkdirSync(outputDirectory, { recursive: true });
  copyFileSync(
    join(botDirectory, "POST.json"),
    join(outputDirectory, "POST.json"),
  );
}

try {
  deliverPostFile();
} catch (failure) {
  const reason = failure instanceof Error ? failure.message : String(failure);
  console.error(`could not deliver POST.json: ${reason}`);
  process.exit(1);
}
