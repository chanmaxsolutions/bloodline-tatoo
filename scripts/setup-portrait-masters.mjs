#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";
import { execSync } from "node:child_process";

const root = path.resolve("public/images/tattoo-styles/portrait");

/** Proof filenames (after SEO rename) used as hero / approach / card per studio. */
const mastersByStudio = {
  bangkok: {
    hero: "portrait-tattoo-eminem-rap-god-full-leg-sleeve-bloodline-bangkok.jpg",
    approach: "portrait-tattoo-children-jackson-olivia-chest-bloodline-bangkok.jpg",
    card: "portrait-tattoo-soldier-bearded-man-pocket-watch-plane-chest-bloodline-bangkok.jpg",
  },
  bali: {
    hero: "portrait-tattoo-kyrie-irving-michael-jordan-basketball-leg-sleeve-bloodline-bali.jpg",
    approach: "portrait-tattoo-elderly-man-flat-cap-glasses-chest-bloodline-bali.jpg",
    card: "portrait-tattoo-boxer-dog-chest-memorial-script-bloodline-bali.jpg",
  },
  phuket: {
    hero: "portrait-tattoo-joker-heath-ledger-full-back-bloodline-phuket.jpg",
    approach: "portrait-tattoo-kobe-bryant-lakers-tribute-leg-bloodline-phuket.jpg",
    card: "portrait-tattoo-chadwick-boseman-black-panther-forearm-bloodline-phuket.jpg",
  },
};

for (const [studio, slots] of Object.entries(mastersByStudio)) {
  const studioDir = path.join(root, studio);
  const proofDir = path.join(studioDir, "proof");

  for (const [slot, proofName] of Object.entries(slots)) {
    const src = path.join(proofDir, proofName);
    const dest = path.join(studioDir, `${slot}.jpg`);
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
    console.log(`${studio}: ${slot}.jpg from ${proofName}`);
  }
}
