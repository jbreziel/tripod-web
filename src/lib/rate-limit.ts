// In-memory rate limiter. Module-level Map keyed by IP.
// Phase 3 volume is single-digit submissions/day, so the occasional cold-start
// reset of the Map is fine. Swap to Upstash Redis if volume crosses ~50/day.

const hits = new Map<string, number[]>();

export function checkRate(
  ip: string,
  limit = 10,
  windowMs = 60 * 60 * 1000,
): boolean {
  const now = Date.now();
  const cutoff = now - windowMs;
  const prev = hits.get(ip) ?? [];
  const recent = prev.filter((t) => t > cutoff);
  if (recent.length >= limit) {
    hits.set(ip, recent);
    return false;
  }
  recent.push(now);
  hits.set(ip, recent);
  return true;
}
