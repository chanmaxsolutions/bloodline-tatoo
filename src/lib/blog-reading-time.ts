function normalizeReadingMinutes(minutes: number): number {
  return Math.max(1, Math.round(minutes));
}

function formatBlogReadingTime(minutes: number): string {
  return `${normalizeReadingMinutes(minutes)} min read`;
}

function toIso8601ReadingDuration(minutes: number): string {
  return `PT${normalizeReadingMinutes(minutes)}M`;
}

export { formatBlogReadingTime, normalizeReadingMinutes, toIso8601ReadingDuration };
