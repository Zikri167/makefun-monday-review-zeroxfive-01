const fs = require("node:fs");
const path = require("node:path");

// One-line review of my own Monday. No title, no explanation, no trailing newline.
const ENTRY =
  "Monday: I attended a meeting about a meeting, then my inbox invited me to a meeting about my inbox.";

if (ENTRY.length < 1 || ENTRY.length > 200) {
  throw new Error("entry must be 1-200 characters, got " + ENTRY.length);
}
if (ENTRY.includes("\n") || ENTRY.includes("\r")) {
  throw new Error("entry must be a single line");
}
if (ENTRY.trim().length === 0) {
  throw new Error("entry must not be only whitespace");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, "entry.txt"), ENTRY, "utf8");
