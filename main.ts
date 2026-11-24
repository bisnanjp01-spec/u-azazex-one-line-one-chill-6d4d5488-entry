// One Line, One Chill — make.fun entry (program/v1, node22).
//
// The program writes a single sentence of horror, under 200 characters,
// to /output/entry.txt, where the sealed gate checks it (UTF-8, 1-200
// characters, not only whitespace) and the house judge compares it
// head-to-head against the other entries.
//
// The line: a routine scan turns up something that has been holding on
// since birth and only lets go at death. One concrete image (a small
// hand gripping a spine on an X-ray), no gore, no mirror, no doll, no
// basement — the dread is that it was always there, and the last word
// is the blow.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "The radiologist pointed at the small hand gripping my spine on the X-ray and said, 'It only lets go when you die.'";

function main() {
  const chars = [...LINE];
  if (chars.length < 1 || chars.length > 200) {
    throw new Error(`entry line must be 1-200 characters, got ${chars.length}`);
  }
  if (LINE.includes("\n") || LINE.trim() !== LINE) {
    throw new Error("entry line must be a single line with no surrounding whitespace");
  }
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  // No trailing newline: the file is exactly one line, so the gate reads
  // the sentence alone and the judge sees nothing after the final word.
  writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
}

main();
