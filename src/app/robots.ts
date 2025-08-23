// src/app/robots.ts
import type { MetadataRoute } from "next";

const ORIGIN = "https://bixeltek.com";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: [`${ORIGIN}/sitemap.xml`], // points to your sitemap index
  };
}
