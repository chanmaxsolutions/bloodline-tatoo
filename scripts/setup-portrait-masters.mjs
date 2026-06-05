#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";
import { execSync } from "node:child_process";

const root = path.resolve("public/images/tattoo-styles/portrait");

/** Proof filenames (after SEO rename) used as hero / approach / card per studio. */
const mastersByStudio = {
  bangkok: {
    hero: "portrait-tattoo-eminem-rap-god-full-leg-sleeve-bloodline-bangkok.webp",
    approach: "portrait-tattoo-children-jackson-olivia-chest-bloodline-bangkok.webp",
    card: "portrait-tattoo-soldier-bearded-man-pocket-watch-plane-chest-bloodline-bangkok.webp",
  },
  bali: {
    hero: "portrait-tattoo-kyrie-irving-michael-jordan-basketball-leg-sleeve-bloodline-bali.webp",
    approach: "portrait-tattoo-elderly-man-flat-cap-glasses-chest-bloodline-bali.webp",
    card: "portrait-tattoo-boxer-dog-chest-memorial-script-bloodline-bali.webp",
  },
  phuket: {
    hero: "portrait-tattoo-joker-heath-ledger-full-back-bloodline-phuket.webp",
    approach: "portrait-tattoo-kobe-bryant-lakers-tribute-leg-bloodline-phuket.webp",
    card: "portrait-tattoo-chadwick-boseman-black-panther-forearm-bloodline-phuket.webp",
  },
};

for (const [studio, slots] of Object.entries(mastersByStudio)) {
  const studioDir = path.join(root, studio);
  const proofDir = path.join(studioDir, "proof");

  for (const [slot, proofName] of Object.entries(slots)) {
    const src = path.join(proofDir, proofName);
    const dest = path.join(studioDir, `${slot}.webp`);
    if (!fs.existsSync(src)) {
      console.error(`Missing proof for ${studio} ${slot}: ${src}`);
      process.exit(1);
    }
    fs.copyFileSync(src, dest);
    execSync(`sips -s format jpeg -s formatOptions 82 "${dest}" --out "${dest}"`, {
      stdio: "inherit",
    });
    if (slot === "card") {
      execSync(`sips -z 1800 1200 "${dest}"`, { stdio: "inherit" });
    }
    console.log(`${studio}: ${slot}.webp from ${proofName}`);
  }
}
