#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";

const mappingsDir = path.resolve("scripts/portrait-mappings");
const outPath = path.resolve("src/config/tattoo-style-portrait-media.ts");

const studioMedia = {
  bangkok: {
    heroAlt:
      "Memorial black and grey portrait tattoo of children Jackson and Olivia with birth dates on the chest at Bloodline Tattoo Bangkok",
    approachAlt:
      "Black and grey Jim Morrison portrait realism tattoo on the inner forearm at Bloodline Tattoo Bangkok",
    cardAlt:
      "Black and grey N.W.A portrait leg tattoo with Eazy-E and Dr. Dre in realism at Bloodline Tattoo Bangkok",
  },
  bali: {
    heroAlt:
      "Black and grey chest portrait realism with soldier, pocket watch, bearded figure, and vintage plane at Bloodline Tattoo Bali",
    approachAlt:
      "Black and grey Chadwick Boseman and Black Panther split portrait realism on the forearm at Bloodline Tattoo Bali",
    cardAlt:
      "Realistic black and grey Rottweiler dog portrait on the upper chest at Bloodline Tattoo Bali",
  },
  phuket: {
    heroAlt:
      "Black and grey portrait realism thigh tattoo of Angus Young in a schoolboy cap with devil horns at Bloodline Tattoo Phuket",
    approachAlt:
      "Black and grey Kobe Bryant portrait realism on both forearms with championship and Lakers tribute scenes at Bloodline Tattoo Phuket",
    cardAlt:
      "Black and grey child portrait realism with braided hair on the inner upper arm at Bloodline Tattoo Phuket",
  },
};

function escapeString(value) {
  return value.replace(/\\/g, "\\\\").replace(/"/g, '\\"');
}

const studios = ["bangkok", "bali", "phuket"];

let ts = `import type { TattooStyleStudioRegion } from "@/config/tattoo-style-image-regions";
import type { TattooStyleDetailProofImage } from "@/types/tattoo-style-detail";

type PortraitStudioRegion = "bangkok" | "bali" | "phuket";

const portraitImageRoot = "/images/tattoo-styles/portrait";

function isPortraitStudioRegion(
  studio: TattooStyleStudioRegion,
): studio is PortraitStudioRegion {
  return studio === "bangkok" || studio === "bali" || studio === "phuket";
}

function portraitProofSrc(studio: PortraitStudioRegion, filename: string): string {
  return \`\${portraitImageRoot}/\${studio}/proof/\${filename}\`;
}

const portraitStudioMediaByRegion = {
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
  PortraitStudioRegion,
  { heroAlt: string; approachAlt: string; cardAlt: string }
>;

const portraitProofPoolsByStudio: Record<
  PortraitStudioRegion,
  readonly TattooStyleDetailProofImage[]
> = {
`;

for (const studio of studios) {
  const entries = JSON.parse(fs.readFileSync(path.join(mappingsDir, `${studio}.json`), "utf8"));
  ts += `  ${studio}: [\n`;
  for (const { new: filename, alt } of entries) {
    ts += `    {
      src: portraitProofSrc("${studio}", "${escapeString(filename)}"),
      alt: "${escapeString(alt)}",
    },\n`;
  }
  ts += `  ],\n`;
}

ts += `};

function getPortraitStudioMediaAlt(
  studio: TattooStyleStudioRegion,
  slot: keyof (typeof portraitStudioMediaByRegion)["bangkok"],
): string {
  if (!isPortraitStudioRegion(studio)) {
    return portraitStudioMediaByRegion.bangkok[slot];
  }

  return portraitStudioMediaByRegion[studio][slot];
}

function getPortraitProofPoolForStudio(
  studio: TattooStyleStudioRegion,
): readonly TattooStyleDetailProofImage[] {
  if (!isPortraitStudioRegion(studio)) {
    return [];
  }

  return portraitProofPoolsByStudio[studio];
}

export {
  getPortraitProofPoolForStudio,
  getPortraitStudioMediaAlt,
  portraitProofPoolsByStudio,
  portraitStudioMediaByRegion,
};
`;

fs.writeFileSync(outPath, ts);
console.log(`Wrote ${outPath}`);
