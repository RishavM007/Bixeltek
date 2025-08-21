

export async function GET() {
  const baseUrl = "https://bixeltek.com";

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
  <sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <sitemap>
      <loc>${baseUrl}/pages-sitemap.xml</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
    </sitemap>
    <sitemap>
      <loc>${baseUrl}/posts-sitemap.xml</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
    </sitemap>
  </sitemapindex>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
