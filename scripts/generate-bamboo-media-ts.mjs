#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";

const mappingsDir = path.resolve("scripts/bamboo-mappings");
const outPath = path.resolve("src/config/tattoo-style-bamboo-media.ts");

const studioMedia = {
  bangkok: {
    heroAlt:
      "Sak Yant twin tigers and Gao Yord bamboo tattoo banner with candlelit temple atmosphere at Bloodline Tattoo Bangkok",
    approachAlt:
      "Traditional bamboo hand-tap Sak Yant session with twin tigers and Gao Yord on the back at Bloodline Tattoo Bangkok",
    cardAlt:
      "Lotus Sak Yant spine tattoo with Om symbol, bamboo hand-tap work at Bloodline Tattoo Bangkok",
  },
  phuket: {
    heroAlt:
      "Sak Yant bamboo tattoo hero with twin tigers, embers, and spiritual atmosphere at Bloodline Tattoo Phuket",
    approachAlt:
      "Bamboo hand-tap Sak Yant application on the shoulder with Gao Yord and twin tigers at Bloodline Tattoo Phuket",
    cardAlt: "Gao Yord and Suea Koo twin-tigers Sak Yant on the back at Bloodline Tattoo Phuket",
  },
};

function escapeString(value) {
  return value.replace(/\\/g, "\\\\").replace(/"/g, '\\"');
}

const studios = ["bangkok", "phuket"];

let ts = `import type { TattooStyleStudioRegion } from "@/config/tattoo-style-image-regions";
import type { TattooStyleDetailProofImage } from "@/types/tattoo-style-detail";

type BambooStudioRegion = "bangkok" | "phuket";

const bambooImageRoot = "/images/tattoo-styles/bamboo";

function isBambooStudioRegion(studio: TattooStyleStudioRegion): studio is BambooStudioRegion {
  return studio === "bangkok" || studio === "phuket";
}

function bambooProofSrc(studio: TattooStyleStudioRegion, filename: string): string {
  return \`\${bambooImageRoot}/\${studio}/proof/\${filename}\`;
}

const bambooStudioMediaByRegion = {
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
  BambooStudioRegion,
  { heroAlt: string; approachAlt: string; cardAlt: string }
>;

const bambooProofPoolsByStudio: Record<BambooStudioRegion, readonly TattooStyleDetailProofImage[]> =
  {
`;

for (const studio of studios) {
  const entries = JSON.parse(fs.readFileSync(path.join(mappingsDir, `${studio}.json`), "utf8"));
  ts += `  ${studio}: [\n`;
  for (const { new: filename, alt } of entries) {
    ts += `    {
      src: bambooProofSrc("${studio}", "${escapeString(filename)}"),
      alt: "${escapeString(alt)}",
    },\n`;
  }
  ts += `  ],\n`;
}

ts += `};

function getBambooStudioMediaAlt(
  studio: TattooStyleStudioRegion,
  slot: keyof (typeof bambooStudioMediaByRegion)["bangkok"],
): string {
  if (!isBambooStudioRegion(studio)) {
    return bambooStudioMediaByRegion.bangkok[slot];
  }

  return bambooStudioMediaByRegion[studio][slot];
}

function getBambooProofPoolForStudio(
  studio: TattooStyleStudioRegion,
): readonly TattooStyleDetailProofImage[] {
  if (!isBambooStudioRegion(studio)) {
    return [];
  }

  return bambooProofPoolsByStudio[studio];
}

export {
  bambooProofPoolsByStudio,
  bambooStudioMediaByRegion,
  getBambooProofPoolForStudio,
  getBambooStudioMediaAlt,
};
`;

fs.writeFileSync(outPath, ts);
console.log(`Wrote ${outPath}`);
