#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";

const root = path.resolve("public/images/tattoo-styles/chicano");
const mappingsDir = path.resolve("scripts/chicano-mappings");

const studios = ["bangkok", "bali", "phuket"];

for (const studio of studios) {
  const mappingPath = path.join(mappingsDir, `${studio}.json`);
  if (!fs.existsSync(mappingPath)) {
    console.error(`Missing mapping: ${mappingPath}`);
    process.exit(1);
  }

  const entries = JSON.parse(fs.readFileSync(mappingPath, "utf8"));
  const proofDir = path.join(root, studio, "proof");
  const seenNew = new Set();

  for (const { old: oldName, new: newName } of entries) {
    if (!oldName || !newName) {
      console.error(`Invalid entry in ${studio}.json`, { oldName, newName });
      process.exit(1);
    }
    if (seenNew.has(newName)) {
      console.error(`Duplicate new name in ${studio}: ${newName}`);
      process.exit(1);
    }
    seenNew.add(newName);

    const from = path.join(proofDir, oldName);
    const to = path.join(proofDir, newName);
    if (!fs.existsSync(from)) {
      console.error(`Missing source: ${from}`);
      process.exit(1);
    }
    if (fs.existsSync(to) && path.resolve(from) !== path.resolve(to)) {
      console.error(`Target already exists: ${to}`);
      process.exit(1);
    }
  }

  for (const { old: oldName, new: newName } of entries) {
    const from = path.join(proofDir, oldName);
    const to = path.join(proofDir, newName);
    if (path.resolve(from) === path.resolve(to)) continue;
    fs.renameSync(from, to);
  }

  console.log(`${studio}: renamed ${entries.length} proof images`);
}
