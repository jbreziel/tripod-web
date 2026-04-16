import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const CONTENT_DIR = path.join(process.cwd(), "content");

export type ContentFile = {
  slug: string;
  frontmatter: Record<string, unknown>;
  content: string;
};

/**
 * Load a markdown content file from the content/ directory.
 * File naming convention: {slug}-{locale}.md (e.g. homepage-nl.md)
 * Falls back to NL if requested locale file doesn't exist.
 */
export function loadContent(slug: string, locale: "nl" | "en" = "nl"): ContentFile | null {
  const primary = path.join(CONTENT_DIR, `${slug}-${locale}.md`);
  const fallback = path.join(CONTENT_DIR, `${slug}-nl.md`);

  let filePath: string;
  if (fs.existsSync(primary)) {
    filePath = primary;
  } else if (fs.existsSync(fallback)) {
    filePath = fallback;
  } else {
    return null;
  }

  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);

  return {
    slug,
    frontmatter: data,
    content,
  };
}

/**
 * List all available project slugs by scanning the content directory.
 */
export function listProjectSlugs(locale: "nl" | "en" = "nl"): string[] {
  if (!fs.existsSync(CONTENT_DIR)) return [];

  const files = fs.readdirSync(CONTENT_DIR);
  const suffix = `-${locale}.md`;
  const prefix = "projects-";

  return files
    .filter((file) => file.startsWith(prefix) && file.endsWith(suffix))
    .map((file) => file.slice(prefix.length, -suffix.length));
}

/**
 * Load the frontmatter-only metadata for a project (fast, no body parse).
 */
export function loadProjectMeta(slug: string, locale: "nl" | "en" = "nl") {
  const file = loadContent(`projects-${slug}`, locale);
  if (!file) return null;
  return {
    slug,
    ...file.frontmatter,
  };
}
