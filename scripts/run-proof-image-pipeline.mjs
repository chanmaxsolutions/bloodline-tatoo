#!/usr/bin/env node
/**
 * End-to-end proof image pipeline (excludes portrait).
 * 1. Normalize  2. Regenerate mappings  3. Apply renames  4. Regenerate media TS  5. Gallery catalog
 */
import { execSync } from "node:child_process";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

function run(label, command) {
  console.log(`\n▶ ${label}`);
  execSync(command, { cwd: root, stdio: "inherit" });
}

run("Normalize proof images", "node scripts/normalize-proof-images.mjs");
run("Regenerate SEO mappings", "node scripts/regenerate-proof-mappings.mjs");

const applyScripts = [
  "apply-realism-mappings.mjs",
  "apply-japanese-mappings.mjs",
  "apply-colour-mappings.mjs",
  "apply-mandala-mappings.mjs",
  "apply-chicano-mappings.mjs",
  "apply-bamboo-mappings.mjs",
  "apply-healed-mappings.mjs",
];

for (const script of applyScripts) {
  run(`Apply ${script}`, `node scripts/${script}`);
}

const generateScripts = [
  "generate-realism-media-ts.mjs",
  "generate-japanese-media-ts.mjs",
  "generate-colour-media-ts.mjs",
  "generate-mandala-media-ts.mjs",
  "generate-chicano-media-ts.mjs",
  "generate-bamboo-media-ts.mjs",
  "generate-healed-media-ts.mjs",
];

for (const script of generateScripts) {
  run(`Generate ${script}`, `node scripts/${script}`);
}

run("Gallery catalog", "npm run generate:gallery-catalog");
run("Typecheck", "npm run typecheck");

console.log("\n✓ Proof image pipeline complete (portrait skipped).");
