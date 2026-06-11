/**
 * GA4 measurement IDs — hardcoded per regional domain (no env vars).
 * bloodlinetattoo.com and unknown hosts resolve to null (no tracking).
 */
const GA_MEASUREMENT_ID_BY_HOSTNAME: Readonly<Record<string, string>> = {
  "bloodlinetattoobali.com": "G-R3NZQPRE3L",
  "bloodlinetattoobangkok.com": "G-V5XKZL892W",
  "bloodlinetattoophuket.com": "G-CG9PQHXFR2",
};

function normalizeHostnameForAnalytics(hostname: string): string {
  const withoutPort = hostname.trim().toLowerCase().split(":")[0] ?? hostname.trim().toLowerCase();
  return withoutPort.replace(/^www\./, "");
}

function resolveGaMeasurementIdFromHostname(hostname: string): string | null {
  const normalized = normalizeHostnameForAnalytics(hostname);
  return GA_MEASUREMENT_ID_BY_HOSTNAME[normalized] ?? null;
}

export {
  GA_MEASUREMENT_ID_BY_HOSTNAME,
  normalizeHostnameForAnalytics,
  resolveGaMeasurementIdFromHostname,
};
