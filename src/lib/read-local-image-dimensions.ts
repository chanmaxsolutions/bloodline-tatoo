import fs from "node:fs";
import path from "node:path";

function publicSrcToFilePath(publicSrc: string): string {
  const relativePath = publicSrc.replace(/^\//, "");

  return path.join(process.cwd(), "public", relativePath);
}

function readJpegDimensionsFromBuffer(buffer: Buffer): { width: number; height: number } | null {
  let offset = 2;

  while (offset + 9 < buffer.length) {
    if (buffer[offset] !== 0xff) {
      break;
    }

    const marker = buffer[offset + 1];
    const segmentLength = buffer.readUInt16BE(offset + 2);

    if (
      marker === 0xc0 ||
      marker === 0xc1 ||
      marker === 0xc2 ||
      marker === 0xc3 ||
      marker === 0xc5 ||
      marker === 0xc6 ||
      marker === 0xc7 ||
      marker === 0xc9 ||
      marker === 0xca ||
      marker === 0xcb ||
      marker === 0xcd ||
      marker === 0xce ||
      marker === 0xcf
    ) {
      return {
        height: buffer.readUInt16BE(offset + 5),
        width: buffer.readUInt16BE(offset + 7),
      };
    }

    offset += 2 + segmentLength;
  }

  return null;
}

export interface LocalImageMetadata {
  width: number;
  height: number;
  /** ISO-8601 from file mtime when not set on the proof record. */
  uploadedAt: string;
}

/** Reads JPEG dimensions and file mtime from a file under `public/`. */
export function readLocalImageMetadata(publicSrc: string): LocalImageMetadata {
  const filePath = publicSrcToFilePath(publicSrc);
  const fallbackUploadedAt = "1970-01-01T00:00:00.000Z";

  try {
    const stat = fs.statSync(filePath);
    const uploadedAt = stat.mtime.toISOString();
    const buffer = fs.readFileSync(filePath);
    const dimensions = readJpegDimensionsFromBuffer(buffer);

    if (dimensions) {
      return {
        width: dimensions.width,
        height: dimensions.height,
        uploadedAt,
      };
    }

    return { width: 1200, height: 1500, uploadedAt };
  } catch {
    return { width: 1200, height: 1500, uploadedAt: fallbackUploadedAt };
  }
}

/** Reads JPEG width/height from a file under `public/`. */
export function readLocalImageDimensions(publicSrc: string): {
  width: number;
  height: number;
} {
  const { width, height } = readLocalImageMetadata(publicSrc);

  return { width, height };
}
