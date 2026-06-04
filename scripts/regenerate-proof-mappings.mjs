#!/usr/bin/env node
/**
 * Build SEO mapping JSONs from proof folder contents.
 * Reuses existing mapping entries when `old` filename still exists on disk.
 * Skips portrait. Writes scripts/{style}-mappings/{studio}.json
 */
import fs from "node:fs";
import path from "node:path";

const ROOT = path.resolve("public/images/tattoo-styles");
const SKIP_STYLES = new Set(["portrait"]);

const STYLE_CONFIG = {
  realism: {
    prefix: "black-grey-realism",
    studios: ["bangkok", "bali", "phuket"],
    label: "Black and grey realism",
  },
  japanese: {
    prefix: "japanese-tattoo",
    studios: ["bangkok", "bali", "phuket"],
    label: "Japanese",
  },
  colour: {
    prefix: "colour-tattoo",
    studios: ["bangkok", "bali", "phuket"],
    label: "Colour",
  },
  mandala: {
    prefix: "mandala-tattoo",
    studios: ["bangkok", "bali", "phuket"],
    label: "Mandala dotwork",
  },
  chicano: {
    prefix: "chicano-tattoo",
    studios: ["bangkok", "bali", "phuket"],
    label: "Chicano",
  },
  bamboo: {
    prefix: "bamboo-sak-yant",
    studios: ["bangkok", "phuket"],
    label: "Bamboo Sak Yant",
  },
  healed: {
    prefix: "healed-tattoo",
    studios: ["bali"],
    label: "Healed",
  },
};

const STUDIO_LABEL = {
  bangkok: "Bangkok",
  bali: "Bali",
  phuket: "Phuket",
};

function slugify(filename) {
  const base = filename.replace(/\.[^.]+$/i, "");
  return base
    .toLowerCase()
    .normalize("NFD")
    .replace(/\p{M}/gu, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 72);
}

function studioSuffix(studio) {
  return `-bloodline-${studio}.jpg`;
}

function isFinalSeoName(filename, studio) {
  return filename.toLowerCase().endsWith(studioSuffix(studio)) && !filename.includes(" ");
}

function defaultAlt(label, studio, slug) {
  const place = STUDIO_LABEL[studio] ?? studio;
  const hint = slug ? slug.replace(/-/g, " ") : "portfolio";
  return `${label} tattoo (${hint}) photographed at Bloodline Tattoo ${place}.`;
}

function uniqueNewName(prefix, slug, studio, used) {
  let base = `${prefix}-${slug}-bloodline-${studio}`;
  if (base.length > 110) {
    base = `${prefix}-${slug.slice(0, 50)}-bloodline-${studio}`;
  }
  let candidate = `${base}.jpg`;
  let index = 2;
  while (used.has(candidate)) {
    candidate = `${base}-${index}.jpg`;
    index += 1;
  }
  used.add(candidate);
  return candidate;
}

function listProofFiles(proofDir) {
  return fs
    .readdirSync(proofDir)
    .filter((name) => name !== ".gitkeep")
    .filter((name) => {
      const ext = path.extname(name).toLowerCase();
      return ext === ".jpg" || ext === ".jpeg";
    })
    .sort((a, b) => a.localeCompare(b, "en"));
}

function loadExistingMapping(style, studio) {
  const mappingPath = path.resolve("scripts", `${style}-mappings`, `${studio}.json`);
  if (!fs.existsSync(mappingPath)) {
    return [];
  }
  return JSON.parse(fs.readFileSync(mappingPath, "utf8"));
}

function buildEntries(files, existing, config, studio) {
  const byOld = new Map(existing.map((entry) => [entry.old, entry]));
  const byNew = new Map(existing.map((entry) => [entry.new, entry]));
  const used = new Set();
  const entries = [];

  for (const file of files) {
    if (isFinalSeoName(file, studio)) {
      const prior = byNew.get(file);
      entries.push({
        old: file,
        new: file,
        alt:
          prior?.alt ??
          defaultAlt(config.label, studio, slugify(file.replace(studioSuffix(studio), ""))),
      });
      used.add(file);
      continue;
    }

    const mapped = byOld.get(file);
    if (mapped?.new && mapped.alt) {
      let newName = mapped.new;
      if (used.has(newName)) {
        newName = uniqueNewName(config.prefix, `${slugify(file)}-dup`, studio, used);
      } else {
        used.add(newName);
      }
      entries.push({ old: file, new: newName, alt: mapped.alt });
      continue;
    }

    const slug = slugify(file) || "portfolio";
    const newName = uniqueNewName(config.prefix, slug, studio, used);
    entries.push({
      old: file,
      new: newName,
      alt: defaultAlt(config.label, studio, slug),
    });
  }

  return entries;
}

for (const [style, config] of Object.entries(STYLE_CONFIG)) {
  if (SKIP_STYLES.has(style)) continue;

  const mappingsDir = path.resolve("scripts", `${style}-mappings`);
  fs.mkdirSync(mappingsDir, { recursive: true });

  for (const studio of config.studios) {
    const proofDir = path.join(ROOT, style, studio, "proof");
    if (!fs.existsSync(proofDir)) continue;

    const files = listProofFiles(proofDir);
    const existing = loadExistingMapping(style, studio);
    const entries = buildEntries(files, existing, config, studio);
    const outPath = path.join(mappingsDir, `${studio}.json`);
    fs.writeFileSync(outPath, `${JSON.stringify(entries, null, 2)}\n`);
    const reused = entries.filter((e) => {
      const prior = existing.find((x) => x.old === e.old);
      return prior && prior.new === e.new && prior.alt === e.alt;
    }).length;
    console.log(
      `${style}/${studio}: ${entries.length} entries (${reused} kept from prior mapping) → ${path.relative(process.cwd(), outPath)}`,
    );
  }
}
