#!/usr/bin/env node
import { execSync } from "node:child_process";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const proofDir = path.join(root, "public/images/tattoo-styles/portrait/phuket/proof");
const MAX_EDGE = 2400;
const JPEG_QUALITY = 82;

function run(command) {
  execSync(command, { cwd: root, stdio: "inherit" });
}

console.log("Normalizing portrait/phuket proof…");
for (const name of execSync(`ls -1 "${proofDir}"`, { encoding: "utf8" })
  .split("\n")
  .filter(Boolean)) {
  if (name === ".gitkeep") continue;
  const file = path.join(proofDir, name);
  const ext = path.extname(name).toLowerCase();
  if (![".jpg", ".jpeg", ".heic"].includes(ext)) continue;

  const base = file.slice(0, -ext.length);
  let target = file;

  if (ext === ".heic" || ext === ".jpeg") {
    target = `${base}.jpg`;
    run(`sips -s format jpeg -s formatOptions ${JPEG_QUALITY} "${file}" --out "${target}"`);
    if (target !== file) {
      execSync(`rm -f "${file}"`);
    }
  }

  const dims = execSync(`sips -g pixelWidth -g pixelHeight "${target}"`, {
    encoding: "utf8",
  });
  const w = Number(dims.match(/pixelWidth:\s*(\d+)/)?.[1] ?? 0);
  const h = Number(dims.match(/pixelHeight:\s*(\d+)/)?.[1] ?? 0);
  if (Math.max(w, h) > MAX_EDGE) {
    run(`sips -Z ${MAX_EDGE} "${target}"`);
  }

  const tmp = `${target}.tmp.jpg`;
  run(`sips -s format jpeg -s formatOptions ${JPEG_QUALITY} "${target}" --out "${tmp}"`);
  execSync(`mv "${tmp}" "${target}"`);
}

console.log("Applying Phuket portrait SEO renames…");
run("STUDIO=phuket node scripts/apply-portrait-mappings.mjs");
console.log("Regenerating portrait media config…");
run("node scripts/generate-portrait-media-ts.mjs");
console.log("Regenerating gallery catalog…");
run("npm run generate:gallery-catalog");
run("npm run typecheck");
console.log("Done: portrait/phuket proof processed.");
