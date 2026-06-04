#!/usr/bin/env node
/**
 * Normalize, apply SEO renames, and refresh config for portrait proof in one studio.
 * Usage: STUDIO=bangkok node scripts/process-portrait-studio-proof.mjs
 */
import { execSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const studio = process.env.STUDIO;
const allowed = new Set(["bangkok", "bali", "phuket"]);
if (!studio || !allowed.has(studio)) {
  console.error("Set STUDIO to bangkok, bali, or phuket");
  process.exit(1);
}

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const proofDir = path.join(root, "public/images/tattoo-styles/portrait", studio, "proof");
const MAX_EDGE = 2400;
const JPEG_QUALITY = 82;

function run(command) {
  execSync(command, { cwd: root, stdio: "inherit" });
}

console.log(`Normalizing portrait/${studio} proof…`);
for (const name of fs.readdirSync(proofDir)) {
  if (name === ".gitkeep") continue;
  const file = path.join(proofDir, name);
  if (!fs.statSync(file).isFile()) continue;
  const ext = path.extname(name).toLowerCase();
  if (![".jpg", ".jpeg", ".heic"].includes(ext)) continue;

  const base = file.slice(0, -ext.length);
  let target = file;
  if (ext === ".heic" || ext === ".jpeg") {
    target = `${base}.jpg`;
    run(`sips -s format jpeg -s formatOptions ${JPEG_QUALITY} "${file}" --out "${target}"`);
    if (target !== file) fs.unlinkSync(file);
  }

  const dims = execSync(`sips -g pixelWidth -g pixelHeight "${target}"`, {
    encoding: "utf8",
  });
  const w = Number(dims.match(/pixelWidth:\s*(\d+)/)?.[1] ?? 0);
  const h = Number(dims.match(/pixelHeight:\s*(\d+)/)?.[1] ?? 0);
  if (Math.max(w, h) > MAX_EDGE) run(`sips -Z ${MAX_EDGE} "${target}"`);

  const tmp = `${target}.tmp.jpg`;
  run(`sips -s format jpeg -s formatOptions ${JPEG_QUALITY} "${target}" --out "${tmp}"`);
  fs.renameSync(tmp, target);
}

run(`STUDIO=${studio} node scripts/apply-portrait-mappings.mjs`);

if (studio === "phuket") {
  console.log("Phuket already wired; run generate separately if mappings changed.");
}

run("node scripts/generate-portrait-media-ts.mjs");
run("npm run generate:gallery-catalog");
run("npm run typecheck");
console.log(`Done: portrait/${studio}`);
