import { NextResponse } from "next/server";

export async function GET() {
  const baseUrl = "https://bixeltek.com";

  // Define static pages
  const staticPages = [
    { url: `${baseUrl}/`, lastModified: new Date().toISOString(), changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/about`, lastModified: new Date().toISOString(), changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/social-media-marketing-agency-hyderabad`, lastModified: new Date().toISOString(), changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/pricing`, lastModified: new Date().toISOString(), changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/industries`, lastModified: new Date().toISOString(), changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/contact-us`, lastModified: new Date().toISOString(), changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/google-ads-agency-hyderabad`, lastModified: new Date().toISOString(), changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/digitalmarketing`, lastModified: new Date().toISOString(), changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/web-design-services-hyderabad`, lastModified: new Date().toISOString(), changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/seo-agency-hyderabad`, lastModified: new Date().toISOString(), changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/casestudies-bixeltek/Tumblewash-Casestudy`, lastModified: new Date().toISOString(), changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/casestudies-bixeltek/google-ads-case-study-bike-repair-hyderabad`, lastModified: new Date().toISOString(), changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/casestudies-bixeltek/digital-marketing-for-dentists-case-study`, lastModified: new Date().toISOString(), changeFrequency: "weekly", priority: 0.8 },
  ];

  // Fetch WordPress blog posts
  // let blogPosts = [];
  // try {
  //   const res = await fetch("https://bixeltek.com/wp-json/wp/v2/posts?per_page=10", { cache: "no-store" });
  //   if (res.ok) {
  //     const posts = await res.json();
  //     blogPosts = posts.map((post: { slug: string }) => ({
  //       url: `${baseUrl}/blog/${post.slug}`,
  //       lastModified: new Date().toISOString(),
  //       changeFrequency: "weekly",
  //       priority: 0.7,
  //     }));
  //   }
  // } catch (error) {
  //   console.error("Error fetching blog posts:", error);
  // }

  // Combine all URLs
  const allUrls = [...staticPages];

  // Convert JSON to XML format
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${allUrls
    .map(
      (page) => `
    <url>
      <loc>${page.url}</loc>
      <lastmod>${page.lastModified}</lastmod>
      <changefreq>${page.changeFrequency}</changefreq>
      <priority>${page.priority}</priority>
    </url>`
    )
    .join("")}
</urlset>`;

  // Return XML response
  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
