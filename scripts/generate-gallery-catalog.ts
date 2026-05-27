import fs from "node:fs";
import path from "node:path";
import { buildGalleryCatalog } from "../src/lib/build-gallery-catalog";

const outputPath = path.join(process.cwd(), "src/data/gallery-catalog.json");

const catalog = buildGalleryCatalog();

fs.mkdirSync(path.dirname(outputPath), { recursive: true });
fs.writeFileSync(outputPath, `${JSON.stringify(catalog, null, 2)}\n`, "utf8");

console.log(`Wrote ${catalog.length} gallery items to ${path.relative(process.cwd(), outputPath)}`);
