#!/usr/bin/env node
/**
 * Rebuild portrait mapping JSON from files on disk.
 * Reuses alts from any studio mapping when the same source filename exists.
 */
import fs from "node:fs";
import path from "node:path";

const ROOT = path.resolve("public/images/tattoo-styles/portrait");
const mappingsDir = path.resolve("scripts/portrait-mappings");
const studios = process.env.STUDIOS
  ? process.env.STUDIOS.split(",").map((s) => s.trim())
  : ["bangkok", "bali"];

const STUDIO_LABEL = {
  bangkok: "Bangkok",
  bali: "Bali",
  phuket: "Phuket",
};

function slugify(filename) {
  return filename
    .replace(/\.[^.]+$/i, "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/\p{M}/gu, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 72);
}

function studioSuffix(studio) {
  return `-bloodline-${studio}.webp`;
}

function isFinalSeoName(filename, studio) {
  return filename.toLowerCase().endsWith(studioSuffix(studio)) && !filename.includes(" ");
}

function swapStudioInNewName(newName, studio) {
  return newName.replace(/-bloodline-(bangkok|bali|phuket)\.webp$/i, studioSuffix(studio));
}

function loadAllMappingsByOld() {
  const byOld = new Map();
  for (const studio of ["bangkok", "bali", "phuket"]) {
    const file = path.join(mappingsDir, `${studio}.json`);
    if (!fs.existsSync(file)) continue;
    for (const entry of JSON.parse(fs.readFileSync(file, "utf8"))) {
      if (!byOld.has(entry.old)) byOld.set(entry.old, entry);
    }
  }
  return byOld;
}

function uniqueNewName(slug, studio, used) {
  let base = `portrait-tattoo-${slug}-bloodline-${studio}`;
  if (base.length > 110) base = `portrait-tattoo-${slug.slice(0, 50)}-bloodline-${studio}`;
  let candidate = `${base}.webp`;
  let index = 2;
  while (used.has(candidate)) {
    candidate = `${base}-${index}.webp`;
    index += 1;
  }
  used.add(candidate);
  return candidate;
}

function defaultAlt(studio, slug) {
  const place = STUDIO_LABEL[studio] ?? studio;
  const hint = slug.replace(/-/g, " ");
  return `Black and grey portrait realism tattoo (${hint}) photographed at Bloodline Tattoo ${place}.`;
}

function adaptAlt(alt, studio) {
  const place = STUDIO_LABEL[studio] ?? studio;
  return alt
    .replace(/Bloodline Tattoo Bangkok\.?$/i, `Bloodline Tattoo ${place}.`)
    .replace(/Bloodline Tattoo Bali\.?$/i, `Bloodline Tattoo ${place}.`)
    .replace(/Bloodline Tattoo Phuket\.?$/i, `Bloodline Tattoo ${place}.`);
}

const byOld = loadAllMappingsByOld();

for (const studio of studios) {
  const proofDir = path.join(ROOT, studio, "proof");
  const files = fs
    .readdirSync(proofDir)
    .filter((f) => /\.(jpe?g)$/i.test(f))
    .sort((a, b) => a.localeCompare(b, "en"));

  const used = new Set();
  const entries = [];

  for (const file of files) {
    if (isFinalSeoName(file, studio)) {
      const prior = byOld.get(file);
      entries.push({
        old: file,
        new: file,
        alt: prior?.alt ?? defaultAlt(studio, slugify(file)),
      });
      used.add(file);
      continue;
    }

    const mapped = byOld.get(file);
    if (mapped?.new && mapped.alt) {
      const newName = swapStudioInNewName(mapped.new, studio);
      const finalName = used.has(newName)
        ? uniqueNewName(`${slugify(file)}-dup`, studio, used)
        : (used.add(newName), newName);
      entries.push({
        old: file,
        new: finalName,
        alt: adaptAlt(mapped.alt, studio),
      });
      continue;
    }

    const slug = slugify(file) || "portfolio";
    const newName = uniqueNewName(slug, studio, used);
    entries.push({ old: file, new: newName, alt: defaultAlt(studio, slug) });
  }

  const outPath = path.join(mappingsDir, `${studio}.json`);
  fs.writeFileSync(outPath, `${JSON.stringify(entries, null, 2)}\n`);
  console.log(`${studio}: ${entries.length} entries → ${path.relative(process.cwd(), outPath)}`);
}
