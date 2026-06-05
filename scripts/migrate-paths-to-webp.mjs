#!/usr/bin/env node
/**
 * Replace raster path extensions .jpg/.jpeg/.png → .webp in source + scripts.
 * Preserves logos/favicons PNG paths (brand assets stay PNG).
 */
import fs from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const TARGET_DIRS = ["src", "scripts"];
const SKIP_PATH_SNIPPETS = ["/logos/", "/favicons/", "logoPath", "faviconPath"];

const SKIP_FILES = new Set([
  "scripts/convert-images-to-webp.mjs",
  "scripts/migrate-paths-to-webp.mjs",
]);

function shouldTouchFile(filePath) {
  const rel = path.relative(ROOT, filePath);
  if (SKIP_FILES.has(rel)) return false;
  const ext = path.extname(filePath);
  return [".ts", ".tsx", ".json", ".mjs", ".js", ".sh", ".py", ".md"].includes(ext);
}

function shouldSkipContent(relPath, content) {
  if (relPath.includes("migrate-paths-to-webp")) return true;
  return false;
}

function migrateLine(line) {
  if (SKIP_PATH_SNIPPETS.some((snippet) => line.includes(snippet))) {
    return line;
  }

  return line.replace(/\.(jpe?g|png)\b/gi, ".webp");
}

function migrateContent(content) {
  return content
    .split("\n")
    .map((line) => migrateLine(line))
    .join("\n");
}

function walk(dir, files = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name === "node_modules" || entry.name === ".next") continue;
      walk(full, files);
      continue;
    }
    if (shouldTouchFile(full)) files.push(full);
  }
  return files;
}

let changed = 0;
for (const dir of TARGET_DIRS) {
  const abs = path.join(ROOT, dir);
  if (!fs.existsSync(abs)) continue;
  for (const file of walk(abs)) {
    const rel = path.relative(ROOT, file);
    const original = fs.readFileSync(file, "utf8");
    if (shouldSkipContent(rel, original)) continue;
    const updated = migrateContent(original);
    if (updated !== original) {
      fs.writeFileSync(file, updated, "utf8");
      changed += 1;
      console.log(`updated ${rel}`);
    }
  }
}

console.log(`\n${changed} files updated.`);
