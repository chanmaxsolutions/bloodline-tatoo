#!/usr/bin/env node
import { execSync } from "node:child_process";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

const generators = [
  "generate-realism-media-ts.mjs",
  "generate-portrait-media-ts.mjs",
  "generate-japanese-media-ts.mjs",
  "generate-colour-media-ts.mjs",
  "generate-mandala-media-ts.mjs",
  "generate-chicano-media-ts.mjs",
  "generate-bamboo-media-ts.mjs",
  "generate-healed-media-ts.mjs",
];

for (const script of generators) {
  execSync(`node scripts/${script}`, { cwd: root, stdio: "inherit" });
}

execSync("npm run generate:gallery-catalog", { cwd: root, stdio: "inherit" });
execSync("npm run typecheck", { cwd: root, stdio: "inherit" });
console.log("All style media + gallery catalog regenerated.");
