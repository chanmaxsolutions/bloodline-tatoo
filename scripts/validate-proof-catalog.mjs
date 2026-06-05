#!/usr/bin/env node
/**
 * Validates proof images, mapping JSON, media config, and gallery catalog stay in sync.
 */
import fs from "node:fs";
import path from "node:path";

const TEMPLATE_ALT =
  /tattoo \([^)]*(?:\bphoto\b|\bimg\b|\bfinal\b|\d{1,2} \d{1,2} \d{4})[^)]*\) photographed at Bloodline Tattoo/i;

const STUDIO_BY_STYLE = {
  realism: ["bangkok", "bali", "phuket"],
  portrait: ["bangkok", "bali", "phuket"],
  japanese: ["bangkok", "bali", "phuket"],
  colour: ["bangkok", "bali", "phuket"],
  mandala: ["bangkok", "bali", "phuket"],
  chicano: ["bangkok", "bali", "phuket"],
  bamboo: ["bangkok", "phuket"],
  healed: ["bali"],
};

const styles = Object.keys(STUDIO_BY_STYLE);
let errors = 0;
let templateAlts = 0;
let totalMappings = 0;

for (const style of styles) {
  for (const studio of STUDIO_BY_STYLE[style]) {
    const proofDir = path.join("public/images/tattoo-styles", style, studio, "proof");
    const mappingPath = path.join("scripts", `${style}-mappings`, `${studio}.json`);

    const onDisk = new Set(
      fs.existsSync(proofDir) ? fs.readdirSync(proofDir).filter((f) => f.endsWith(".webp")) : [],
    );

    if (!fs.existsSync(mappingPath)) {
      if (onDisk.size > 0) {
        console.error(`Missing mapping: ${mappingPath} (${onDisk.size} images on disk)`);
        errors += 1;
      }
      continue;
    }

    const entries = JSON.parse(fs.readFileSync(mappingPath, "utf8"));
    const mapped = new Set();

    for (const { old: oldName, new: newName, alt } of entries) {
      totalMappings += 1;
      mapped.add(newName);
      const filePath = path.join(proofDir, newName);
      if (!fs.existsSync(filePath)) {
        console.error(`Missing file: ${filePath} (mapped from ${oldName})`);
        errors += 1;
      }
      if (!newName.endsWith(`-bloodline-${studio}.webp`)) {
        console.error(`Bad SEO suffix: ${newName}`);
        errors += 1;
      }
      if (!alt || alt.length < 40) {
        console.error(`Short alt (${alt?.length ?? 0} chars): ${newName}`);
        errors += 1;
      }
      if (TEMPLATE_ALT.test(alt)) {
        templateAlts += 1;
      }
    }

    for (const file of onDisk) {
      if (!mapped.has(file)) {
        console.error(`Unmapped on disk: ${style}/${studio}/proof/${file}`);
        errors += 1;
      }
    }
  }
}

const catalog = JSON.parse(fs.readFileSync("src/data/gallery-catalog.json", "utf8"));
let catalogMissing = 0;
for (const item of catalog) {
  const rel = `public${item.imageSrc}`;
  if (!fs.existsSync(rel)) catalogMissing += 1;
}

console.log("\n--- Proof validation ---");
console.log("Mapping entries:", totalMappings);
console.log("Template placeholder alts:", templateAlts);
console.log("Sync/SEO errors:", errors);
console.log("Gallery items:", catalog.length);
console.log("Gallery missing files:", catalogMissing);

if (errors > 0 || catalogMissing > 0) process.exit(1);
if (templateAlts > 0) process.exit(2);
console.log("OK: all proofs synced, no placeholder alts.");
