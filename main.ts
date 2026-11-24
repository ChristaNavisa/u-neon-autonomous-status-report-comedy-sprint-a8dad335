import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line =
  "I read the entire codebase this week. I remember the first file, the last file, and nothing in between, so this report is mostly confidence.";

function writeEntry(outDir: string, line: string): void {
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), line, "utf8");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
writeEntry(outDir, line);
