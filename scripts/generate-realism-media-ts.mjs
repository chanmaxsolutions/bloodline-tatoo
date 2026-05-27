#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";

const mappingsDir = path.resolve("scripts/realism-mappings");
const outPath = path.resolve("src/config/tattoo-style-realism-media.ts");

const studioMedia = {
  bangkok: {
    heroAlt:
      "Black and grey realism back tattoo with Greek god portrait, winged angel, temple, and lightning at Bloodline Tattoo Bangkok",
    approachAlt:
      "Black and grey realism sleeve with Greek god, winged angel, cathedral architecture, and eye detail at Bloodline Tattoo Bangkok",
    cardAlt:
      "Archangel Michael black and grey realism back tattoo with sword, ruins, and rose sleeve at Bloodline Tattoo Bangkok",
  },
  bali: {
    heroAlt:
      "Black and grey realism Spartan warrior and Parthenon full back tattoo in a moody studio at Bloodline Tattoo Bali",
    approachAlt:
      "Black and grey realism portrait sleeve with roses and classical columns on a woman at Bloodline Tattoo Bali",
    cardAlt:
      "Spartan warrior and Parthenon full moon black and grey realism back tattoo at Bloodline Tattoo Bali",
  },
  phuket: {
    heroAlt:
      "Black and grey realism angel full back tattoo with cathedral columns in a cinematic studio at Bloodline Tattoo Phuket",
    approachAlt:
      "Black and grey realism angel back tattoo with sword, roses, and classical columns at Bloodline Tattoo Phuket",
    cardAlt:
      "Black and grey realism sleeve with angel, skull, snake, and Greek god with lightning at Bloodline Tattoo Phuket",
  },
};

function proofSrc(studio, filename) {
  return `/images/tattoo-styles/realism/${studio}/proof/${filename}`;
}

function escapeString(value) {
  return value.replace(/\\/g, "\\\\").replace(/"/g, '\\"');
}

const studios = ["bangkok", "bali", "phuket"];
const pools = {};

for (const studio of studios) {
  const entries = JSON.parse(fs.readFileSync(path.join(mappingsDir, `${studio}.json`), "utf8"));
  pools[studio] = entries.map(({ new: filename, alt }) => ({
    src: proofSrc(studio, filename),
    alt,
  }));
}

let ts = `import type { TattooStyleStudioRegion } from "@/config/tattoo-style-image-regions";
import type { TattooStyleDetailProofImage } from "@/types/tattoo-style-detail";

type RealismStudioRegion = "bangkok" | "bali" | "phuket";

const realismImageRoot = "/images/tattoo-styles/realism";

function isRealismStudioRegion(
  studio: TattooStyleStudioRegion,
): studio is RealismStudioRegion {
  return studio === "bangkok" || studio === "bali" || studio === "phuket";
}

function realismProofSrc(studio: RealismStudioRegion, filename: string): string {
  return \`\${realismImageRoot}/\${studio}/proof/\${filename}\`;
}

const realismStudioMediaByRegion = {
`;

for (const studio of studios) {
  const m = studioMedia[studio];
  ts += `  ${studio}: {
    heroAlt: "${escapeString(m.heroAlt)}",
    approachAlt: "${escapeString(m.approachAlt)}",
    cardAlt: "${escapeString(m.cardAlt)}",
  },
`;
}

ts += `} as const satisfies Record<
  RealismStudioRegion,
  { heroAlt: string; approachAlt: string; cardAlt: string }
>;

const realismProofPoolsByStudio: Record<
  RealismStudioRegion,
  readonly TattooStyleDetailProofImage[]
> = {
`;

for (const studio of studios) {
  ts += `  ${studio}: [\n`;
  for (const { new: filename, alt } of JSON.parse(
    fs.readFileSync(path.join(mappingsDir, `${studio}.json`), "utf8"),
  )) {
    ts += `    {
      src: realismProofSrc("${studio}", "${escapeString(filename)}"),
      alt: "${escapeString(alt)}",
    },\n`;
  }
  ts += `  ],\n`;
}

ts += `};

function getRealismStudioMediaAlt(
  studio: TattooStyleStudioRegion,
  slot: keyof (typeof realismStudioMediaByRegion)["bangkok"],
): string {
  if (!isRealismStudioRegion(studio)) {
    return realismStudioMediaByRegion.bangkok[slot];
  }

  return realismStudioMediaByRegion[studio][slot];
}

function getRealismProofPoolForStudio(
  studio: TattooStyleStudioRegion,
): readonly TattooStyleDetailProofImage[] {
  if (!isRealismStudioRegion(studio)) {
    return [];
  }

  return realismProofPoolsByStudio[studio];
}

export {
  getRealismProofPoolForStudio,
  getRealismStudioMediaAlt,
  realismProofPoolsByStudio,
  realismStudioMediaByRegion,
};
`;

fs.writeFileSync(outPath, ts);
console.log(`Wrote ${outPath}`);
