#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/../public/images/tattoo-styles/chicano" && pwd)"
QUALITY=82

reencode_jpeg() {
  local src="$1"
  local dest="$2"
  sips -s format jpeg -s formatOptions "$QUALITY" "$src" --out "$dest" >/dev/null
}

for studio in bangkok bali phuket; do
  dir="$ROOT/$studio"
  for master in hero approach card; do
    file="$dir/$master.webp"
    if [[ -f "$file" ]]; then
      tmp="${file%.webp}.tmp.webp"
      reencode_jpeg "$file" "$tmp"
      mv "$tmp" "$file"
      echo "master $studio/$master.webp"
    fi
  done

  proof_dir="$dir/proof"
  while IFS= read -r -d '' file; do
    base="${file%.*}"
    ext="${file##*.}"
    ext_lower="$(printf '%s' "$ext" | tr '[:upper:]' '[:lower:]')"

    if [[ "$ext_lower" == "heic" ]]; then
      out="${base}.webp"
      reencode_jpeg "$file" "$out"
      rm -f "$file"
      echo "heic→jpg ${out#$ROOT/}"
      continue
    fi

    if [[ "$ext_lower" == "jpg" || "$ext_lower" == "jpeg" ]]; then
      tmp="${base}.tmp.webp"
      reencode_jpeg "$file" "$tmp"
      mv "$tmp" "$file"
      echo "reencode ${file#$ROOT/}"
    fi
  done < <(find "$proof_dir" -type f ! -name '.gitkeep' ! -name '*.tmp.webp' -print0)
done

echo "Done."
