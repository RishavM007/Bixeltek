export async function GET() {
    const baseUrl = "https://compweb-lemon.vercel.app";
    // Manually defined static pages
    const staticPages = [
      "/",
      "/about",
      "/services",
      "/pricing",
      "industries",
      "googleadsman",
      "digitalmarketing",
      "about",
      "/webdev",
    ];
  
    // Fetch all WordPress blog posts dynamically
    const blogPosts = await fetch("https://bixeltek.com/wp-json/wp/v2/posts?per_page=100")
      .then((res) => res.json())
      .then((posts) =>
        posts.map((post: { slug: string }) => `/blog/${post.slug}`)
      )
      .catch(() => []);
  
    // Merge static and dynamic pages
    const allPages = [...staticPages, ...blogPosts];
  
    // Generate XML Sitemap
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${allPages
        .map((page) => {
          return `
            <url>
              <loc>${baseUrl}${page}</loc>
              <lastmod>${new Date().toISOString()}</lastmod>
              <changefreq>weekly</changefreq>
              <priority>0.8</priority>
            </url>
          `;
        })
        .join("")}
    </urlset>`;
  
    return new Response(sitemap, {
      headers: {
        "Content-Type": "application/xml",
      },
    });
  }
  