#!/usr/bin/env node
/**
 * Extract hero-poster.jpg from each regional homepage hero MP4.
 * Requires ffmpeg on PATH (brew install ffmpeg).
 *
 * Usage: node scripts/extract-hero-posters-from-video.mjs [--at 3]
 */
import { spawnSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

const regions = [
  { slug: "global", video: "hero-global.mp4" },
  { slug: "bangkok", video: "hero-bangkok.mp4" },
  { slug: "bali", video: "hero-bali.mp4" },
  { slug: "phuket", video: "hero-phuket.mp4" },
];

const atArg = process.argv.indexOf("--at");
const seekSeconds = atArg >= 0 ? Number(process.argv[atArg + 1]) : 3;

if (!Number.isFinite(seekSeconds) || seekSeconds < 0) {
  console.error(
    "Invalid --at value. Example: node scripts/extract-hero-posters-from-video.mjs --at 3",
  );
  process.exit(1);
}

function ffmpegAvailable() {
  const result = spawnSync("ffmpeg", ["-version"], { encoding: "utf8" });
  return result.status === 0;
}

if (!ffmpegAvailable()) {
  console.error("ffmpeg not found. Install with: brew install ffmpeg");
  process.exit(1);
}

const posterWidth = 2400;
const posterHeight = 1350;

for (const { slug, video } of regions) {
  const input = path.join(root, "public/videos/hero", video);
  const output = path.join(root, "public/images/homepage", slug, "hero-poster.jpg");

  if (!fs.existsSync(input)) {
    console.error(`Missing video: ${input}`);
    process.exit(1);
  }

  fs.mkdirSync(path.dirname(output), { recursive: true });

  const args = [
    "-y",
    "-ss",
    String(seekSeconds),
    "-i",
    input,
    "-frames:v",
    "1",
    "-vf",
    `scale=${posterWidth}:${posterHeight}:flags=lanczos`,
    "-q:v",
    "3",
    output,
  ];

  const result = spawnSync("ffmpeg", args, { encoding: "utf8", stdio: "pipe" });
  if (result.status !== 0) {
    console.error(`ffmpeg failed for ${slug}:\n${result.stderr}`);
    process.exit(1);
  }

  const stat = fs.statSync(output);
  console.log(
    `Wrote ${path.relative(root, output)} (${Math.round(stat.size / 1024)} KB) from ${video}`,
  );
}

console.log(`Done — posters captured at ${seekSeconds}s.`);
