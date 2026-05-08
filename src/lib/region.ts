import { regionsBySlug } from "@/config/regions";
import { env } from "@/lib/env";
import type { RegionConfig, RegionSlug } from "@/types";

const defaultHostsByRegion: Record<RegionSlug, string[]> = {
  global: ["bloodlinetattoo.com", "www.bloodlinetattoo.com", "localhost"],
  bangkok: ["bloodlinetattoobangkok.com", "www.bloodlinetattoobangkok.com", "bangkok.localhost"],
  bali: ["bloodlinetattoobali.com", "www.bloodlinetattoobali.com", "bali.localhost"],
  phuket: ["bloodlinetattoophuket.com", "www.bloodlinetattoophuket.com", "phuket.localhost"],
};

function normalizeHostname(hostname: string): string {
  return hostname.trim().toLowerCase().split(":")[0] ?? hostname.trim().toLowerCase();
}

function parseEnvHosts(value?: string): string[] {
  if (!value) return [];

  return value
    .split(",")
    .map((entry) => normalizeHostname(entry))
    .filter((entry) => entry.length > 0);
}

const hostsByRegion: Record<RegionSlug, string[]> = {
  global: [...defaultHostsByRegion.global, ...parseEnvHosts(env.REGION_HOSTS_GLOBAL)],
  bangkok: [...defaultHostsByRegion.bangkok, ...parseEnvHosts(env.REGION_HOSTS_BANGKOK)],
  bali: [...defaultHostsByRegion.bali, ...parseEnvHosts(env.REGION_HOSTS_BALI)],
  phuket: [...defaultHostsByRegion.phuket, ...parseEnvHosts(env.REGION_HOSTS_PHUKET)],
};

const hostnameToRegion: Record<string, RegionSlug> = Object.entries(hostsByRegion).reduce(
  (accumulator, [region, hosts]) => {
    for (const host of hosts) {
      accumulator[host] = region as RegionSlug;
    }

    return accumulator;
  },
  {} as Record<string, RegionSlug>,
);

export function resolveRegionFromHostname(hostname: string): RegionSlug {
  return hostnameToRegion[normalizeHostname(hostname)] ?? "global";
}

export function getRegionConfig(region: RegionSlug): RegionConfig {
  return regionsBySlug[region];
}
