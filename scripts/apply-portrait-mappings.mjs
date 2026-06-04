#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";

const root = path.resolve("public/images/tattoo-styles/portrait");
const mappingsDir = path.resolve("scripts/portrait-mappings");
const allStudios = ["bangkok", "bali", "phuket"];
const studios = process.env.STUDIO
  ? allStudios.filter((s) => s === process.env.STUDIO)
  : allStudios;

if (studios.length === 0) {
  console.error(`Unknown STUDIO="${process.env.STUDIO}"`);
  process.exit(1);
}

for (const studio of studios) {
  const entries = JSON.parse(fs.readFileSync(path.join(mappingsDir, `${studio}.json`), "utf8"));
  const proofDir = path.join(root, studio, "proof");
  const seenNew = new Set();

  for (const { old: oldName, new: newName } of entries) {
    if (seenNew.has(newName)) {
      console.error(`Duplicate new name in ${studio}: ${newName}`);
      process.exit(1);
    }
    seenNew.add(newName);

    const from = path.join(proofDir, oldName);
    if (!fs.existsSync(from)) {
      console.error(`Missing source: ${from}`);
      process.exit(1);
    }
  }

  for (const { old: oldName, new: newName } of entries) {
    const from = path.join(proofDir, oldName);
    const to = path.join(proofDir, newName);
    if (path.resolve(from) !== path.resolve(to)) {
      fs.renameSync(from, to);
    }
  }

  console.log(`${studio}: renamed ${entries.length} proof images`);
}
