// make.fun entry — gta6-meme-x-01 ("Post a GTA 6 meme on X")
// Entrant: deelyy78 — https://make.fun/bounty/gta6-meme-x-01
//
// What this program does
// ----------------------
// The judged artifact for this bounty is the X post named in POST.json at
// the root of this repository: the house reads the post (its first picture
// and its text) directly from X. This program is the delivery mechanism —
// it simply carries POST.json from the bot directory into the output
// directory so the grader can pick it up.
//
// Contract (kept deliberately tiny and deterministic):
//   * Input  : $MAKEFUN_BOT_DIR/POST.json   (default bot dir: /bot)
//   * Output : $MAKEFUN_OUTPUT_DIR/POST.json (default output dir: /output)
//   * The output directory is created if it does not exist yet.
//   * On success the program prints nothing and exits 0.
//   * On any failure it prints one error line to stderr and exits 1.
//
// Standard library only, no network access, no wall clock, no randomness:
// the same input always produces the same output.

import { copyFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

// Resolve the two directories from the environment, falling back to the
// conventional locations the make.fun runner uses.
const botDir: string = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const outputDir: string = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

const sourcePath: string = join(botDir, "POST.json");
const destinationPath: string = join(outputDir, "POST.json");

try {
  // Make sure the destination exists before copying into it.
  // `recursive: true` makes this a no-op when the directory is already there.
  mkdirSync(outputDir, { recursive: true });

  // Byte-for-byte copy: POST.json is delivered exactly as committed.
  copyFileSync(sourcePath, destinationPath);
} catch (error) {
  // Any failure (missing POST.json, unreadable source, unwritable output)
  // is reported on stderr and signalled with a non-zero exit code.
  const message: string =
    error instanceof Error ? error.message : String(error);
  console.error(`error: could not copy POST.json: ${message}`);
  process.exit(1);
}
