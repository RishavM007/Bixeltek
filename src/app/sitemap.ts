import { MetadataRoute } from "next";
import { GraphQLClient } from "graphql-request";
import { GET_ALL_POSTS } from "@/lib/queries";
import { readdirSync, statSync } from "fs";
import path from "path";

const endpoint = "https://demo.bixeltek.com/headless/graphql";
const client = new GraphQLClient(endpoint);
const baseUrl = "https://bixeltek.com";


function getAppRoutes(dirPath: string, prefix = ""): { url: string; lastModified: Date }[] {
  const entries = readdirSync(dirPath, { withFileTypes: true });
  const urls: { url: string; lastModified: Date }[] = [];

  for (const entry of entries) {
    if (entry.isDirectory()) {
      const fullPath = path.join(dirPath, entry.name);

      // Skip special folders
      if (
        entry.name.startsWith("(") || // route groups
        entry.name.startsWith("_") || // private
        entry.name === "api" || // API routes
        entry.name === "blogs" || // handled separately
        entry.name === "sitemap.ts" // avoid recursion
      ) {
        continue;
      }

      // Build the route path
      const routePath = prefix ? `${prefix}/${entry.name}` : `/${entry.name}`;

      urls.push({
        url: `${baseUrl}${routePath}`,
        lastModified: new Date(),
      });

      // Recurse deeper (nested routes)
      urls.push(...getAppRoutes(fullPath, routePath));
    }
  }

  return urls;
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // 1. Get static pages automatically from /app
  const appDir = path.join(process.cwd(), "app");
  const staticRoutes = getAppRoutes(appDir);

  // 2. Get dynamic blog posts from GraphQL
  let blogPosts: { url: string; lastModified: Date }[] = [];
  try {
    const data: any = await client.request(GET_ALL_POSTS);
    blogPosts =
      data?.posts?.nodes?.map((post: any) => ({
        url: `${baseUrl}/blogs/${post.slug}`,
        lastModified: new Date(post.date) || new Date(),
      })) || [];
  } catch (error) {
    console.error("❌ Error fetching blog posts:", error);
  }

  // 3. Add homepage manually (since /app/page.ts is root)
  const homePage = [
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
    },
  ];

  return [...homePage, ...staticRoutes, ...blogPosts];
}
