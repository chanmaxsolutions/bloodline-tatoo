#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";

const mappingsDir = path.resolve("scripts/healed-mappings");
const outPath = path.resolve("src/config/tattoo-style-healed-media.ts");

const studioMedia = {
  bali: {
    heroAlt:
      "Healed black and grey full-back tattoo with woman portrait and motorcycle at Bloodline Tattoo Bali",
    approachAlt:
      "Healed Japanese black and grey full-back tattoo with dragon, Hannya masks, and samurai at Bloodline Tattoo Bali",
    cardAlt:
      "Healed black and grey wildlife full-leg sleeve with wolf, squirrel, and deer at Bloodline Tattoo Bali",
  },
};

function escapeString(value) {
  return value.replace(/\\/g, "\\\\").replace(/"/g, '\\"');
}

const studios = ["bali"];

let ts = `import type { TattooStyleStudioRegion } from "@/config/tattoo-style-image-regions";
import type { TattooStyleDetailProofImage } from "@/types/tattoo-style-detail";

type HealedStudioRegion = "bali";

const healedImageRoot = "/images/tattoo-styles/healed";

function isHealedStudioRegion(
  studio: TattooStyleStudioRegion,
): studio is HealedStudioRegion {
  return studio === "bali";
}

function healedProofSrc(studio: HealedStudioRegion, filename: string): string {
  return \`\${healedImageRoot}/\${studio}/proof/\${filename}\`;
}

const healedStudioMediaByRegion = {
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
  HealedStudioRegion,
  { heroAlt: string; approachAlt: string; cardAlt: string }
>;

const healedProofPoolsByStudio: Record<
  HealedStudioRegion,
  readonly TattooStyleDetailProofImage[]
> = {
`;

for (const studio of studios) {
  const entries = JSON.parse(fs.readFileSync(path.join(mappingsDir, `${studio}.json`), "utf8"));
  ts += `  ${studio}: [\n`;
  for (const { new: filename, alt } of entries) {
    ts += `    {
      src: healedProofSrc("${studio}", "${escapeString(filename)}"),
      alt: "${escapeString(alt)}",
    },\n`;
  }
  ts += `  ],\n`;
}

ts += `};

function getHealedStudioMediaAlt(
  studio: TattooStyleStudioRegion,
  slot: keyof (typeof healedStudioMediaByRegion)["bali"],
): string {
  if (!isHealedStudioRegion(studio)) {
    return healedStudioMediaByRegion.bali[slot];
  }

  return healedStudioMediaByRegion[studio][slot];
}

function getHealedProofPoolForStudio(
  studio: TattooStyleStudioRegion,
): readonly TattooStyleDetailProofImage[] {
  if (!isHealedStudioRegion(studio)) {
    return [];
  }

  return healedProofPoolsByStudio[studio];
}

export {
  getHealedProofPoolForStudio,
  getHealedStudioMediaAlt,
  healedProofPoolsByStudio,
  healedStudioMediaByRegion,
};
`;

fs.writeFileSync(outPath, ts);
console.log(`Wrote ${outPath}`);
