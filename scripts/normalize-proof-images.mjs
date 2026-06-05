#!/usr/bin/env node
/**
 * Normalize tattoo style proof images: HEIC/PNG/JPEG → WebP, cap longest edge.
 * Skips portrait (awaiting client uploads).
 */
import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const ROOT = path.resolve("public/images/tattoo-styles");
const SKIP_STYLES = new Set(["portrait"]);
const MAX_EDGE = 1600;
const WEBP_QUALITY = 86;

const STUDIO_BY_STYLE = {
  realism: ["bangkok", "bali", "phuket"],
  japanese: ["bangkok", "bali", "phuket"],
  colour: ["bangkok", "bali", "phuket"],
  mandala: ["bangkok", "bali", "phuket"],
  chicano: ["bangkok", "bali", "phuket"],
  bamboo: ["bangkok", "phuket"],
  healed: ["bali"],
};

const SOURCE_EXT = new Set([".jpg", ".jpeg", ".png", ".heic"]);

async function convertToWebp(file) {
  const ext = path.extname(file).toLowerCase();
  const out = file.slice(0, -ext.length) + ".webp";

  let pipeline = sharp(file, { failOn: "none" }).rotate();
  const meta = await pipeline.metadata();
  const longest = Math.max(meta.width ?? 0, meta.height ?? 0);
  if (longest > MAX_EDGE) {
    pipeline = pipeline.resize(MAX_EDGE, MAX_EDGE, {
      fit: "inside",
      withoutEnlargement: true,
    });
  }

  await pipeline.webp({ quality: WEBP_QUALITY, effort: 4 }).toFile(out);
  fs.unlinkSync(file);
  return out;
}

async function processProofDir(proofDir) {
  const names = fs.readdirSync(proofDir).filter((name) => name !== ".gitkeep");
  for (const name of names) {
    const file = path.join(proofDir, name);
    const ext = path.extname(name).toLowerCase();
    if (!SOURCE_EXT.has(ext)) continue;
    await convertToWebp(file);
  }
}

async function processStyleAssets(styleDir) {
  for (const slot of [
    "hero.jpg",
    "approach.jpg",
    "card.jpg",
    "hero.webp",
    "approach.webp",
    "card.webp",
  ]) {
    const file = path.join(styleDir, slot);
    if (!fs.existsSync(file)) continue;
    const ext = path.extname(file).toLowerCase();
    if (!SOURCE_EXT.has(ext) && ext !== ".jpg" && ext !== ".jpeg") continue;
    if (ext === ".webp") continue;
    await convertToWebp(file);
  }
}

async function main() {
  for (const [style, studios] of Object.entries(STUDIO_BY_STYLE)) {
    if (SKIP_STYLES.has(style)) continue;
    for (const studio of studios) {
      const styleDir = path.join(ROOT, style, studio);
      const proofDir = path.join(styleDir, "proof");
      if (fs.existsSync(proofDir)) await processProofDir(proofDir);
      if (fs.existsSync(styleDir)) await processStyleAssets(styleDir);
    }
  }
  console.log("Proof normalization complete (WebP).");
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
