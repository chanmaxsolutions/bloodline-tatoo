#!/usr/bin/env node
/**
 * Normalize tattoo style proof images: HEIC→JPEG, re-encode, cap longest edge, remove non-images.
 * Skips portrait (awaiting client uploads).
 */
import fs from "node:fs";
import path from "node:path";
import { execSync } from "node:child_process";

const ROOT = path.resolve("public/images/tattoo-styles");
const SKIP_STYLES = new Set(["portrait"]);
const MAX_EDGE = 2400;
const JPEG_QUALITY = 82;

const STUDIO_BY_STYLE = {
  realism: ["bangkok", "bali", "phuket"],
  japanese: ["bangkok", "bali", "phuket"],
  colour: ["bangkok", "bali", "phuket"],
  mandala: ["bangkok", "bali", "phuket"],
  chicano: ["bangkok", "bali", "phuket"],
  bamboo: ["bangkok", "phuket"],
  healed: ["bali"],
};

function run(command) {
  execSync(command, { stdio: "pipe" });
}

function getDimensions(file) {
  const out = execSync(`sips -g pixelWidth -g pixelHeight "${file}"`, {
    encoding: "utf8",
  });
  const width = Number(out.match(/pixelWidth:\s*(\d+)/)?.[1] ?? 0);
  const height = Number(out.match(/pixelHeight:\s*(\d+)/)?.[1] ?? 0);
  return { width, height };
}

function reencodeJpeg(file) {
  const tmp = `${file}.tmp.jpg`;
  run(`sips -s format jpeg -s formatOptions ${JPEG_QUALITY} "${file}" --out "${tmp}"`);
  fs.renameSync(tmp, file);
}

function resizeIfNeeded(file) {
  const { width, height } = getDimensions(file);
  const longest = Math.max(width, height);
  if (longest > MAX_EDGE) {
    run(`sips -Z ${MAX_EDGE} "${file}"`);
  }
}

function processImageFile(file) {
  const ext = path.extname(file).toLowerCase();
  const base = file.slice(0, -ext.length);

  if (ext === ".heic") {
    const out = `${base}.jpg`;
    run(`sips -s format jpeg -s formatOptions ${JPEG_QUALITY} "${file}" --out "${out}"`);
    fs.unlinkSync(file);
    resizeIfNeeded(out);
    reencodeJpeg(out);
    return out;
  }

  if (ext === ".jpeg") {
    const out = `${base}.jpg`;
    fs.renameSync(file, out);
    resizeIfNeeded(out);
    reencodeJpeg(out);
    return out;
  }

  if (ext === ".jpg") {
    resizeIfNeeded(file);
    reencodeJpeg(file);
    return file;
  }

  return null;
}

let converted = 0;
let reencoded = 0;
let removed = 0;

for (const [style, studios] of Object.entries(STUDIO_BY_STYLE)) {
  if (SKIP_STYLES.has(style)) continue;

  for (const studio of studios) {
    const proofDir = path.join(ROOT, style, studio, "proof");
    if (!fs.existsSync(proofDir)) continue;

    for (const name of fs.readdirSync(proofDir)) {
      if (name === ".gitkeep") continue;
      const file = path.join(proofDir, name);
      if (!fs.statSync(file).isFile()) continue;

      const ext = path.extname(name).toLowerCase();
      if (![".jpg", ".jpeg", ".heic", ".png", ".webp"].includes(ext)) {
        fs.unlinkSync(file);
        removed += 1;
        console.log(`removed non-image ${style}/${studio}/proof/${name}`);
        continue;
      }

      const before = name;
      const afterPath = processImageFile(file);
      if (!afterPath) continue;

      const after = path.basename(afterPath);
      if (before !== after) converted += 1;
      else reencoded += 1;
    }
  }
}

console.log(
  `Normalize done: ${reencoded} jpeg(s) optimized, ${converted} converted/renamed, ${removed} non-images removed.`,
);
