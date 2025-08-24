import { GraphQLClient } from "graphql-request";
import { GET_ALL_POSTS } from "@/lib/queries";

const endpoint = "https://demo.bixeltek.com/headless/graphql";
const client = new GraphQLClient(endpoint);
const baseUrl = "https://bixeltek.com";

export async function GET() {
  let blogPosts: { url: string; lastModified: string }[] = [];

  try {
    const data: any = await client.request(GET_ALL_POSTS);

    blogPosts =
      data?.posts?.nodes?.map((post: any) => {
        let date = post.date ? new Date(post.date) : new Date();

        return {
          url: `${baseUrl}/blogs/${post.slug}`,
          // ✅ Ensure valid ISO 8601 format
          lastModified: date.toISOString(),
        };
      }) || [];
  } catch (error) {
    console.error("❌ Error fetching blog posts:", error);
  }

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
  <?xml-stylesheet type="text/xsl" href="/sitemap.xsl"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${blogPosts
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
