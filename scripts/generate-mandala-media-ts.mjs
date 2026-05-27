#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";

const mappingsDir = path.resolve("scripts/mandala-mappings");
const outPath = path.resolve("src/config/tattoo-style-mandala-media.ts");

/** Placeholder master alts until custom hero/approach/card uploads are finalized. */
const studioMedia = {
  bangkok: {
    heroAlt:
      "Large-scale mandala tattoo with radial symmetry and precise dotwork at Bloodline Tattoo Bangkok",
    approachAlt:
      "Geometric mandala composition with sacred geometry and fine line structure at Bloodline Tattoo Bangkok",
    cardAlt:
      "Mandala tattoo with balanced symmetry and ornamental dotwork detail at Bloodline Tattoo Bangkok",
  },
  bali: {
    heroAlt:
      "Mandala back piece with radial geometry and ornamental dotwork at Bloodline Tattoo Bali",
    approachAlt:
      "Sacred geometry mandala tattoo with layered symmetry and fine linework at Bloodline Tattoo Bali",
    cardAlt:
      "Forearm mandala band with precise geometric repetition and dotwork at Bloodline Tattoo Bali",
  },
  phuket: {
    heroAlt:
      "Full-back mandala tattoo with radial symmetry and ornamental structure at Bloodline Tattoo Phuket",
    approachAlt:
      "Geometric mandala sleeve with dotwork bands and sacred geometry at Bloodline Tattoo Phuket",
    cardAlt:
      "Mandala tattoo with symmetrical linework and controlled negative space at Bloodline Tattoo Phuket",
  },
};

function escapeString(value) {
  return value.replace(/\\/g, "\\\\").replace(/"/g, '\\"');
}

const studios = ["bangkok", "bali", "phuket"];

let ts = `import type { TattooStyleStudioRegion } from "@/config/tattoo-style-image-regions";
import type { TattooStyleDetailProofImage } from "@/types/tattoo-style-detail";

type MandalaStudioRegion = "bangkok" | "bali" | "phuket";

const mandalaImageRoot = "/images/tattoo-styles/mandala";

function isMandalaStudioRegion(
  studio: TattooStyleStudioRegion,
): studio is MandalaStudioRegion {
  return studio === "bangkok" || studio === "bali" || studio === "phuket";
}

function mandalaProofSrc(studio: MandalaStudioRegion, filename: string): string {
  return \`\${mandalaImageRoot}/\${studio}/proof/\${filename}\`;
}

const mandalaStudioMediaByRegion = {
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
  MandalaStudioRegion,
  { heroAlt: string; approachAlt: string; cardAlt: string }
>;

const mandalaProofPoolsByStudio: Record<
  MandalaStudioRegion,
  readonly TattooStyleDetailProofImage[]
> = {
`;

for (const studio of studios) {
  const entries = JSON.parse(fs.readFileSync(path.join(mappingsDir, `${studio}.json`), "utf8"));
  ts += `  ${studio}: [\n`;
  for (const { new: filename, alt } of entries) {
    ts += `    {
      src: mandalaProofSrc("${studio}", "${escapeString(filename)}"),
      alt: "${escapeString(alt)}",
    },\n`;
  }
  ts += `  ],\n`;
}

ts += `};

function getMandalaStudioMediaAlt(
  studio: TattooStyleStudioRegion,
  slot: keyof (typeof mandalaStudioMediaByRegion)["bangkok"],
): string {
  if (!isMandalaStudioRegion(studio)) {
    return mandalaStudioMediaByRegion.bangkok[slot];
  }

  return mandalaStudioMediaByRegion[studio][slot];
}

function getMandalaProofPoolForStudio(
  studio: TattooStyleStudioRegion,
): readonly TattooStyleDetailProofImage[] {
  if (!isMandalaStudioRegion(studio)) {
    return [];
  }

  return mandalaProofPoolsByStudio[studio];
}

export {
  getMandalaProofPoolForStudio,
  getMandalaStudioMediaAlt,
  mandalaProofPoolsByStudio,
  mandalaStudioMediaByRegion,
};
`;

fs.writeFileSync(outPath, ts);
console.log(`Wrote ${outPath}`);
