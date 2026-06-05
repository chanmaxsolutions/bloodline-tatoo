#!/usr/bin/env node
/**
 * Option C: JPEG/PNG → WebP with max-edge cap and high visual quality.
 * Usage: node scripts/convert-images-to-webp.mjs <dir> [dir2 ...]
 *   --max-edge=1600  --quality=86
 *
 * Skips logos/, favicons/, videos/, and already-small PNG brand marks.
 */
import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const args = process.argv.slice(2);
const dirs = args.filter((a) => !a.startsWith("--"));
const maxEdge = Number(args.find((a) => a.startsWith("--max-edge="))?.split("=")[1] ?? 1600);
const quality = Number(args.find((a) => a.startsWith("--quality="))?.split("=")[1] ?? 86);

const SKIP_DIR_NAMES = new Set(["logos", "favicons", "videos"]);
const CONVERT_EXT = new Set([".jpg", ".jpeg", ".png"]);

function shouldSkipDir(dirPath) {
  const parts = dirPath.split(path.sep);
  return parts.some((part) => SKIP_DIR_NAMES.has(part));
}

function collectImages(targetDir) {
  const results = [];
  if (!fs.existsSync(targetDir)) {
    console.warn(`Skip missing: ${targetDir}`);
    return results;
  }

  function walk(current) {
    if (shouldSkipDir(current)) return;
    for (const entry of fs.readdirSync(current, { withFileTypes: true })) {
      const full = path.join(current, entry.name);
      if (entry.isDirectory()) {
        walk(full);
        continue;
      }
      const ext = path.extname(entry.name).toLowerCase();
      if (!CONVERT_EXT.has(ext)) continue;
      if (entry.name === ".gitkeep") continue;
      results.push(full);
    }
  }

  walk(path.resolve(targetDir));
  return results;
}

async function convertOne(file) {
  const ext = path.extname(file).toLowerCase();
  const out = file.slice(0, -ext.length) + ".webp";

  if (fs.existsSync(out)) {
    fs.unlinkSync(file);
    return { file, out, bytesBefore: 0, bytesAfter: fs.statSync(out).size, skipped: true };
  }

  const bytesBefore = fs.statSync(file).size;
  let pipeline = sharp(file, { failOn: "none" }).rotate();
  const meta = await pipeline.metadata();
  const longest = Math.max(meta.width ?? 0, meta.height ?? 0);

  if (longest > maxEdge) {
    pipeline = pipeline.resize(maxEdge, maxEdge, {
      fit: "inside",
      withoutEnlargement: true,
    });
  }

  await pipeline.webp({ quality, effort: 4 }).toFile(out);
  fs.unlinkSync(file);

  const bytesAfter = fs.statSync(out).size;
  return { file, out, bytesBefore, bytesAfter, skipped: false };
}

async function main() {
  if (dirs.length === 0) {
    console.error("Usage: node scripts/convert-images-to-webp.mjs <directory> [...]");
    process.exit(1);
  }

  const files = dirs.flatMap(collectImages);
  console.log(`Converting ${files.length} images (maxEdge=${maxEdge}, quality=${quality})`);

  let saved = 0;
  let converted = 0;

  for (const file of files) {
    try {
      const result = await convertOne(file);
      if (!result.skipped) {
        converted += 1;
        saved += result.bytesBefore - result.bytesAfter;
      }
      const rel = path.relative(process.cwd(), result.out);
      console.log(
        `${result.skipped ? "exists" : "ok"} ${rel} (${Math.round(result.bytesAfter / 1024)} KB)`,
      );
    } catch (error) {
      console.error(`FAIL ${file}:`, error instanceof Error ? error.message : error);
      process.exitCode = 1;
    }
  }

  console.log(
    `\nDone: ${converted} converted, ${Math.round(saved / 1024 / 1024)} MB saved in this batch.`,
  );
}

main();
