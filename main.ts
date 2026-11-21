// main.ts — GTA 6 meme entry (gta6-meme-x-01)
//
// The entry's whole job: carry POST.json from the repository root into
// the output directory the grader points at. The house reads the post
// itself from X, so nothing else this program writes is judged.
//
// The run prints nothing on success and writes identical bytes every
// time: no network, no wall clock, no files outside the repository.

import { copyFileSync, mkdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

const repoRoot = process.env.MAKEFUN_BOT_DIR ?? ".";
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "out";

const postPath = join(repoRoot, "POST.json");

// Read the post file first, so a broken file fails loudly here instead
// of being copied through unchecked.
const raw = readFileSync(postPath, "utf8");
const parsed = JSON.parse(raw);

if (typeof parsed !== "object" || parsed === null || Array.isArray(parsed)) {
  throw new Error("POST.json must hold a JSON object");
}
if (typeof parsed.url !== "string" || parsed.url.length === 0) {
  throw new Error("POST.json must hold a url string");
}

mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "POST.json");
copyFileSync(postPath, outPath);

// Prove the copy landed intact: the destination must read back
// byte for byte identical to the source.
const copied = readFileSync(outPath, "utf8");
if (copied !== raw) {
  throw new Error("POST.json copy does not match the source");
}
