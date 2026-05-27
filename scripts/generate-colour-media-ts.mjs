#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";

const mappingsDir = path.resolve("scripts/colour-mappings");
const outPath = path.resolve("src/config/tattoo-style-colour-media.ts");

const studioMedia = {
  bangkok: {
    heroAlt:
      "Japanese colour full-back samurai tattoo with saturated reds and greens in a Bloodline Tattoo Bangkok studio hero image",
    approachAlt:
      "Japanese colour leg tattoo with red Tengu mask, blue tassels, and wind bars at Bloodline Tattoo Bangkok",
    cardAlt:
      "Japanese colour leg sleeve with samurai helmet, tiger, and orange cloud swirls at Bloodline Tattoo Bangkok",
  },
  bali: {
    heroAlt:
      "Japanese colour chest and arm tattoo with green dragon, red Hannya mask, and cherry blossoms at Bloodline Tattoo Bali",
    approachAlt:
      "Full-leg colour tattoo with Greek god portrait, snake, and red lightning accents at Bloodline Tattoo Bali",
    cardAlt:
      "Colour realism fox sleeve with blue eyes, magenta peonies, and diagonal skin breaks at Bloodline Tattoo Bali",
  },
  phuket: {
    heroAlt:
      "Japanese colour leg sleeve with orange Hannya mask and black-and-grey waves at Bloodline Tattoo Phuket",
    approachAlt:
      "Colour leg tattoo with twin red Japanese masks and ornamental black-and-grey shading at Bloodline Tattoo Phuket",
    cardAlt:
      "Japanese colour leg sleeve with geisha in blue kimono, chrysanthemums, and wind bars at Bloodline Tattoo Phuket",
  },
};

function escapeString(value) {
  return value.replace(/\\/g, "\\\\").replace(/"/g, '\\"');
}

const studios = ["bangkok", "bali", "phuket"];

let ts = `import type { TattooStyleStudioRegion } from "@/config/tattoo-style-image-regions";
import type { TattooStyleDetailProofImage } from "@/types/tattoo-style-detail";

type ColourStudioRegion = "bangkok" | "bali" | "phuket";

const colourImageRoot = "/images/tattoo-styles/colour";

function isColourStudioRegion(
  studio: TattooStyleStudioRegion,
): studio is ColourStudioRegion {
  return studio === "bangkok" || studio === "bali" || studio === "phuket";
}

function colourProofSrc(studio: ColourStudioRegion, filename: string): string {
  return \`\${colourImageRoot}/\${studio}/proof/\${filename}\`;
}

const colourStudioMediaByRegion = {
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
  ColourStudioRegion,
  { heroAlt: string; approachAlt: string; cardAlt: string }
>;

const colourProofPoolsByStudio: Record<
  ColourStudioRegion,
  readonly TattooStyleDetailProofImage[]
> = {
`;

for (const studio of studios) {
  const entries = JSON.parse(fs.readFileSync(path.join(mappingsDir, `${studio}.json`), "utf8"));
  ts += `  ${studio}: [\n`;
  for (const { new: filename, alt } of entries) {
    ts += `    {
      src: colourProofSrc("${studio}", "${escapeString(filename)}"),
      alt: "${escapeString(alt)}",
    },\n`;
  }
  ts += `  ],\n`;
}

ts += `};

function getColourStudioMediaAlt(
  studio: TattooStyleStudioRegion,
  slot: keyof (typeof colourStudioMediaByRegion)["bangkok"],
): string {
  if (!isColourStudioRegion(studio)) {
    return colourStudioMediaByRegion.bangkok[slot];
  }

  return colourStudioMediaByRegion[studio][slot];
}

function getColourProofPoolForStudio(
  studio: TattooStyleStudioRegion,
): readonly TattooStyleDetailProofImage[] {
  if (!isColourStudioRegion(studio)) {
    return [];
  }

  return colourProofPoolsByStudio[studio];
}

export {
  colourProofPoolsByStudio,
  colourStudioMediaByRegion,
  getColourProofPoolForStudio,
  getColourStudioMediaAlt,
};
`;

fs.writeFileSync(outPath, ts);
console.log(`Wrote ${outPath}`);
