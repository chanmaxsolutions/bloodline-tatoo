#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";

const mappingsDir = path.resolve("scripts/chicano-mappings");
const outPath = path.resolve("src/config/tattoo-style-chicano-media.ts");

const studioMedia = {
  bangkok: {
    heroAlt:
      "Chicano black and grey back tattoo with Familia script, payasa portrait, lowrider, and roses in a moody studio at Bloodline Tattoo Bangkok",
    approachAlt:
      "Chicano Familia and Vida Loca script with payasa and portrait sleeves on a woman at Bloodline Tattoo Bangkok",
    cardAlt:
      "Chicano sleeve with Virgin of Guadalupe, payasa portrait, roses, Familia script, and lowrider at Bloodline Tattoo Bangkok",
  },
  bali: {
    heroAlt:
      "Chicano Familia script full back tattoo with payasa portrait, lowrider, money stacks, and roses at Bloodline Tattoo Bali",
    approachAlt:
      "Chicano chest piece with Familia, Blessed script, payasa, Virgin Mary, lowrider, and LA logo at Bloodline Tattoo Bali",
    cardAlt:
      "Chicano arm sleeve with payasa portrait, script lettering, rose, and LA lowrider at Bloodline Tattoo Bali",
  },
  phuket: {
    heroAlt:
      "Chicano Loyalty script back tattoo with LA logo, payasa portrait, lowrider, and palm trees at Bloodline Tattoo Phuket",
    approachAlt:
      "Chicano torso tattoo with Familia, Virgin Mary, payasa, Vida Loca script, and praying hands at Bloodline Tattoo Phuket",
    cardAlt:
      "Chicano leg sleeve with Smile Now Cry Later, payasa, LA skyline, lowrider, roses, and praying hands at Bloodline Tattoo Phuket",
  },
};

function escapeString(value) {
  return value.replace(/\\/g, "\\\\").replace(/"/g, '\\"');
}

const studios = ["bangkok", "bali", "phuket"];

let ts = `import type { TattooStyleStudioRegion } from "@/config/tattoo-style-image-regions";
import type { TattooStyleDetailProofImage } from "@/types/tattoo-style-detail";

type ChicanoStudioRegion = "bangkok" | "bali" | "phuket";

const chicanoImageRoot = "/images/tattoo-styles/chicano";

function isChicanoStudioRegion(
  studio: TattooStyleStudioRegion,
): studio is ChicanoStudioRegion {
  return studio === "bangkok" || studio === "bali" || studio === "phuket";
}

function chicanoProofSrc(studio: ChicanoStudioRegion, filename: string): string {
  return \`\${chicanoImageRoot}/\${studio}/proof/\${filename}\`;
}

const chicanoStudioMediaByRegion = {
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
  ChicanoStudioRegion,
  { heroAlt: string; approachAlt: string; cardAlt: string }
>;

const chicanoProofPoolsByStudio: Record<
  ChicanoStudioRegion,
  readonly TattooStyleDetailProofImage[]
> = {
`;

for (const studio of studios) {
  const entries = JSON.parse(fs.readFileSync(path.join(mappingsDir, `${studio}.json`), "utf8"));
  ts += `  ${studio}: [\n`;
  for (const { new: filename, alt } of entries) {
    ts += `    {
      src: chicanoProofSrc("${studio}", "${escapeString(filename)}"),
      alt: "${escapeString(alt)}",
    },\n`;
  }
  ts += `  ],\n`;
}

ts += `};

function getChicanoStudioMediaAlt(
  studio: TattooStyleStudioRegion,
  slot: keyof (typeof chicanoStudioMediaByRegion)["bangkok"],
): string {
  if (!isChicanoStudioRegion(studio)) {
    return chicanoStudioMediaByRegion.bangkok[slot];
  }

  return chicanoStudioMediaByRegion[studio][slot];
}

function getChicanoProofPoolForStudio(
  studio: TattooStyleStudioRegion,
): readonly TattooStyleDetailProofImage[] {
  if (!isChicanoStudioRegion(studio)) {
    return [];
  }

  return chicanoProofPoolsByStudio[studio];
}

export {
  chicanoProofPoolsByStudio,
  chicanoStudioMediaByRegion,
  getChicanoProofPoolForStudio,
  getChicanoStudioMediaAlt,
};
`;

fs.writeFileSync(outPath, ts);
console.log(`Wrote ${outPath}`);
