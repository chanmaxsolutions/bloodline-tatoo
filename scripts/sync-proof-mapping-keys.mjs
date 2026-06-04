#!/usr/bin/env node
/** Set old = new for every mapping entry so mappings match on-disk SEO filenames. */
import fs from "node:fs";
import path from "node:path";

const STUDIO_BY_STYLE = {
  realism: ["bangkok", "bali", "phuket"],
  portrait: ["bangkok", "bali", "phuket"],
  japanese: ["bangkok", "bali", "phuket"],
  colour: ["bangkok", "bali", "phuket"],
  mandala: ["bangkok", "bali", "phuket"],
  chicano: ["bangkok", "bali", "phuket"],
  bamboo: ["bangkok", "phuket"],
  healed: ["bali"],
};

for (const [style, studios] of Object.entries(STUDIO_BY_STYLE)) {
  for (const studio of studios) {
    const mappingPath = path.join("scripts", `${style}-mappings`, `${studio}.json`);
    if (!fs.existsSync(mappingPath)) continue;
    const entries = JSON.parse(fs.readFileSync(mappingPath, "utf8"));
    for (const entry of entries) {
      entry.old = entry.new;
    }
    fs.writeFileSync(mappingPath, `${JSON.stringify(entries, null, 2)}\n`);
  }
}
console.log("Synced old=new for all mapping entries.");
