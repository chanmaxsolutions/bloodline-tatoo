#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";

const mappingsDir = path.resolve("scripts/japanese-mappings");
const outPath = path.resolve("src/config/tattoo-style-japanese-media.ts");

const studioMedia = {
  bangkok: {
    heroAlt:
      "Japanese black and grey full-back tattoo with samurai, Hannya mask, pagoda, and dragon in a cinematic studio hero at Bloodline Tattoo Bangkok",
    approachAlt:
      "Japanese black and grey leg tattoo with Hannya mask, pagoda, and cherry blossom wind bars at Bloodline Tattoo Bangkok",
    cardAlt:
      "Japanese full-back oni or Hannya tattoo with glowing red eyes and cloud swirls at Bloodline Tattoo Bangkok",
  },
  bali: {
    heroAlt:
      "Japanese full-back tattoo with armoured samurai, dragon, and red maple accents in a traditional studio setting at Bloodline Tattoo Bali",
    approachAlt:
      "Japanese leg sleeve with tiger, pagoda, cherry blossoms, and red accents on stone steps at Bloodline Tattoo Bali",
    cardAlt:
      "Japanese black and grey leg tattoo with samurai kabuto portrait and mounted samurai scene at Bloodline Tattoo Bali",
  },
  phuket: {
    heroAlt:
      "Japanese full-back samurai tattoo with pagoda, swirling clouds, and kanji in dramatic lighting at Bloodline Tattoo Phuket",
    approachAlt:
      "Japanese samurai and dragon arm sleeve against misty temple and pagoda backdrop at Bloodline Tattoo Phuket",
    cardAlt:
      "Japanese full-back kabuto with dragon crest, menpo, bushido kanji, and shoulder dragons at Bloodline Tattoo Phuket",
  },
};

function escapeString(value) {
  return value.replace(/\\/g, "\\\\").replace(/"/g, '\\"');
}

const studios = ["bangkok", "bali", "phuket"];

let ts = `import type { TattooStyleStudioRegion } from "@/config/tattoo-style-image-regions";
import type { TattooStyleDetailProofImage } from "@/types/tattoo-style-detail";

type JapaneseStudioRegion = "bangkok" | "bali" | "phuket";

const japaneseImageRoot = "/images/tattoo-styles/japanese";

function isJapaneseStudioRegion(
  studio: TattooStyleStudioRegion,
): studio is JapaneseStudioRegion {
  return studio === "bangkok" || studio === "bali" || studio === "phuket";
}

function japaneseProofSrc(studio: JapaneseStudioRegion, filename: string): string {
  return \`\${japaneseImageRoot}/\${studio}/proof/\${filename}\`;
}

const japaneseStudioMediaByRegion = {
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
  JapaneseStudioRegion,
  { heroAlt: string; approachAlt: string; cardAlt: string }
>;

const japaneseProofPoolsByStudio: Record<
  JapaneseStudioRegion,
  readonly TattooStyleDetailProofImage[]
> = {
`;

for (const studio of studios) {
  const entries = JSON.parse(fs.readFileSync(path.join(mappingsDir, `${studio}.json`), "utf8"));
  ts += `  ${studio}: [\n`;
  for (const { new: filename, alt } of entries) {
    ts += `    {
      src: japaneseProofSrc("${studio}", "${escapeString(filename)}"),
      alt: "${escapeString(alt)}",
    },\n`;
  }
  ts += `  ],\n`;
}

ts += `};

function getJapaneseStudioMediaAlt(
  studio: TattooStyleStudioRegion,
  slot: keyof (typeof japaneseStudioMediaByRegion)["bangkok"],
): string {
  if (!isJapaneseStudioRegion(studio)) {
    return japaneseStudioMediaByRegion.bangkok[slot];
  }

  return japaneseStudioMediaByRegion[studio][slot];
}

function getJapaneseProofPoolForStudio(
  studio: TattooStyleStudioRegion,
): readonly TattooStyleDetailProofImage[] {
  if (!isJapaneseStudioRegion(studio)) {
    return [];
  }

  return japaneseProofPoolsByStudio[studio];
}

export {
  getJapaneseProofPoolForStudio,
  getJapaneseStudioMediaAlt,
  japaneseProofPoolsByStudio,
  japaneseStudioMediaByRegion,
};
`;

fs.writeFileSync(outPath, ts);
console.log(`Wrote ${outPath}`);
