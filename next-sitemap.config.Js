/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://bixeltek.com",
  generateRobotsTxt: true,
  sitemapSize: 5000,
  outDir: "./public",  // sitemaps will be saved in public/
  changefreq: "daily",
  priority: 0.7,

  // Optional: Separate index + nested sitemaps
  sitemapBaseFileName: "sitemap",
  additionalSitemaps: [
    "https://bixeltek.com/pages-sitemap.xml",
    "https://bixeltek.com/posts-sitemap.xml",
  ],
};
