import { readdirSync, existsSync } from "fs";
import path from "path";

const baseUrl = "https://bixeltek.com";

function getAppRoutes(dirPath: string, prefix = ""): { url: string; lastModified: string }[] {
  if (!existsSync(dirPath)) return [];

  const entries = readdirSync(dirPath, { withFileTypes: true });
  const urls: { url: string; lastModified: string }[] = [];

  for (const entry of entries) {
    if (entry.isDirectory()) {
      const fullPath = path.join(dirPath, entry.name);

      if (
        entry.name.startsWith("(") ||
        entry.name.startsWith("_") ||
        entry.name === "api" ||
        entry.name === "blogs" ||
        entry.name.startsWith("sitemap")
      ) {
        continue;
      }

      const routePath = prefix ? `${prefix}/${entry.name}` : `/${entry.name}`;

      urls.push({
        url: `${baseUrl}${routePath}`,
        lastModified: new Date().toISOString(),
      });

      urls.push(...getAppRoutes(fullPath, routePath));
    }
  }

  return urls;
}

export async function GET() {
  const appDir = path.join(process.cwd(), "src", "app");
  const staticRoutes = getAppRoutes(appDir);

  const homePage = [{ url: `${baseUrl}/`, lastModified: new Date().toISOString() }];

  const allPages = [...homePage, ...staticRoutes];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
  <?xml-stylesheet type="text/xsl" href="/sitemap.xsl"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${allPages
      .map(
        (u) => `<url>
        <loc>${u.url}</loc>
        <lastmod>${u.lastModified}</lastmod>
      </url>`
      )
      .join("")}
  </urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml",
    },
  });

}