import type { NextConfig } from "next";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { getLegacyRedirects } from "./src/config/legacy-redirects";

/**
 * Turbopack infers the repo root by walking up for lockfiles (`pnpm-lock.yaml`,
 * `package-lock.json`, etc.). A stray `~/package-lock.json` makes Next pick your
 * home directory instead of this app, which breaks module resolution, file watching,
 * and dev performance.
 *
 * @see https://nextjs.org/docs/app/api-reference/config/next-config-js/turbopack#root-directory
 */
const turbopackRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)));

const nextConfig: NextConfig = {
  turbopack: {
    root: turbopackRoot,
  },
  experimental: {
    optimizePackageImports: ["lucide-react"],
  },
  async redirects() {
    return getLegacyRedirects();
  },
  images: {
    /** Must include every `quality` prop used on `<Image />` (Next.js 16). */
    qualities: [68, 70, 72, 75, 78, 80, 88, 92],
    remotePatterns: [
      { protocol: "https", hostname: "picsum.photos", pathname: "/**" },
      { protocol: "https", hostname: "lh3.googleusercontent.com", pathname: "/**" },
      { protocol: "https", hostname: "lh4.googleusercontent.com", pathname: "/**" },
      { protocol: "https", hostname: "lh5.googleusercontent.com", pathname: "/**" },
      { protocol: "https", hostname: "lh6.googleusercontent.com", pathname: "/**" },
      { protocol: "https", hostname: "i.ytimg.com", pathname: "/vi/**" },
    ],
  },
};

export default nextConfig;
