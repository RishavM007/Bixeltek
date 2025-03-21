import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://compweb-lemon.vercel.app";

  // Manually defined static pages
  const staticPages = [
    "/",
    "/about",
    "/services",
    "/pricing",
    "/industries",
    "/googleadsman",
    "/digitalmarketing",
    "/webdev",
  ].map((page) => ({
    url: `${baseUrl}${page}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  // Fetch all WordPress blog posts dynamically
  const blogPosts = await fetch("https://bixeltek.com/wp-json/wp/v2/posts?per_page=100")
    .then((res) => res.json())
    .then((posts) =>
      posts.map((post: { slug: string }) => ({
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified: new Date().toISOString(),
        changeFrequency: "weekly",
        priority: 0.7,
      }))
    )
    .catch(() => []);

  return [...staticPages, ...blogPosts];
}
