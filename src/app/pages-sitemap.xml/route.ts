// src/app/pages-sitemap.xml/route.ts
import { NextResponse } from "next/server";
import { readdirSync, statSync, existsSync } from "fs";
import path from "path";

export const runtime = "nodejs";       // required for fs
const ORIGIN = "https://bixeltek.com";

// ---- Configure your dynamic combos here ----
const COUNTRIES = ["usa", "canada", "saudi-arabia", "india"];
const SERVICES  = ["google-ads", "seo", "web-design", "social-media", "analytics-cro"];

function buildDynamicURLs(): string[] {
  const out: string[] = [];
  for (const c of COUNTRIES) for (const s of SERVICES) out.push(`/services/${c}/${s}`);
  return out;
}

// ---- Files/dirs to skip when scanning ----
const SKIP_DIR_PREFIXES = ["(", "_"];               // route groups/private
const SKIP_DIR_EXACT    = new Set(["api"]);         // API dirs
const SKIP_FILE_PREFIX  = ["sitemap", "robots", "manifest"]; // system
const PAGE_FILES = new Set(["page.ts", "page.tsx", "page.js", "page.jsx", "page.mdx"]);

function collectStaticRoutes(appDir: string, prefix = ""): string[] {
  if (!existsSync(appDir)) return [];
  const out: string[] = [];

  for (const entry of readdirSync(appDir)) {
    const full = path.join(appDir, entry);
    const isDir = statSync(full).isDirectory();
    if (!isDir) continue;

    if (SKIP_DIR_PREFIXES.some(p => entry.startsWith(p))) continue;
    if (SKIP_DIR_EXACT.has(entry)) continue;

    const seg = entry;                     // e.g., "about-us" or "[slug]"
    const nextPrefix = `${prefix}/${seg}`;

    // Skip dynamic segments by default (we'll add real URLs via builders)
    if (seg.includes("[") || seg.includes("]")) {
      // still descend to catch static children under a dynamic folder
      out.push(...collectStaticRoutes(full, nextPrefix));
      continue;
    }

    // If folder has a page.* → routable page exists
    const hasPage = readdirSync(full).some((f) => PAGE_FILES.has(f));
    if (hasPage) out.push(nextPrefix);

    // Recurse for nested segments
    out.push(...collectStaticRoutes(full, nextPrefix));
  }
  return out;
}

export async function GET() {
  const appDir = path.join(process.cwd(), "src", "app");

  // Build the list
  const homepage = ["/"];                             // put first
  const staticRoutes = collectStaticRoutes(appDir);
  const dynamicRoutes = buildDynamicURLs();

  // Clean & de-dupe
  const combined = [...homepage, ...staticRoutes, ...dynamicRoutes]
    .filter(Boolean)
    .map((p) => p.replace(/\/+/g, "/"));              // collapse double slashes

  const urls = Array.from(new Set(combined)).filter((p) => {
    // no placeholders
    if (p.includes("[") || p.includes("]")) return false;
    // no api/system
    if (p.startsWith("/api")) return false;
    const leaf = (p.split("/").pop() || "").toLowerCase();
    if (SKIP_FILE_PREFIX.some((pref) => leaf.startsWith(pref))) return false;
    // do not include other sitemaps/robots
    if (p === "/sitemap.xml" || p === "/pages-sitemap.xml" || p === "/posts-sitemap.xml" || p === "/robots.txt") return false;
    return true;
  });

  // Sort with "/" first
  urls.sort((a, b) => (a === "/" ? -1 : b === "/" ? 1 : a.localeCompare(b)));

  const lastmod = new Date().toISOString();
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((p) => `<url><loc>${ORIGIN}${p}</loc><lastmod>${lastmod}</lastmod></url>`).join("")}
</urlset>`;

  return new NextResponse(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, s-maxage=1800, stale-while-revalidate=86400",
    },
  });
}
