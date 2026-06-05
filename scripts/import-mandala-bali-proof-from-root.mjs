#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";
import { execSync } from "node:child_process";

const studioDir = path.resolve("public/images/tattoo-styles/mandala/bali");
const proofDir = path.join(studioDir, "proof");
const mappings = JSON.parse(
  fs.readFileSync(path.resolve("scripts/mandala-mappings/bali.json"), "utf8"),
);

const rootPhotos = [
  "Photo 21-04-25 12.29.41.webp",
  "Photo 21-04-25 13.58.43.webp",
  "Photo 21-04-25 13.58.43 (1).webp",
  "Photo 21-04-25 13.58.45.webp",
  "Photo 21-04-25 13.58.46.webp",
];

const entries = mappings.filter((e) => rootPhotos.includes(e.old));

for (const { old: oldName, new: newName } of entries) {
  const from = path.join(studioDir, oldName);
  const to = path.join(proofDir, newName);
  if (!fs.existsSync(from)) {
    console.error(`Missing: ${from}`);
    process.exit(1);
  }
  if (fs.existsSync(to)) {
    console.error(`Already exists: ${to}`);
    process.exit(1);
  }
  fs.renameSync(from, to);
  execSync(`sips -s format jpeg -s formatOptions 82 "${to}" --out "${to}.tmp"`, {
    stdio: "inherit",
  });
  fs.renameSync(`${to}.tmp`, to);
  console.log(`→ ${newName}`);
}

console.log(`Imported ${entries.length} images into proof/`);
