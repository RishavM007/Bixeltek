// /app/sitemap.xml/route.ts (App Router only)
import { GraphQLClient } from 'graphql-request'
import { GET_ALL_POSTS } from '@/lib/queries'// Adjust path if needed
import { NextRequest } from 'next/server'

const endpoint = 'https://demo.bixeltek.com/headless/graphql'
const client = new GraphQLClient(endpoint)

export async function GET(req: NextRequest) {
  const baseUrl = 'https://bixeltek.com'

  const staticPages = [
    { url: `${baseUrl}/`, lastModified: new Date().toISOString() },
    { url: `${baseUrl}/about`, lastModified: new Date().toISOString() },
    { url: `${baseUrl}/social-media-marketing-agency-hyderabad`, lastModified: new Date().toISOString() },
    { url: `${baseUrl}/pricing`, lastModified: new Date().toISOString() },
    { url: `${baseUrl}/industries`, lastModified: new Date().toISOString() },
    { url: `${baseUrl}/contact-us`, lastModified: new Date().toISOString() },
    { url: `${baseUrl}/google-ads-agency-hyderabad`, lastModified: new Date().toISOString() },
    { url: `${baseUrl}/digitalmarketing`, lastModified: new Date().toISOString() },
    { url: `${baseUrl}/web-design-services-hyderabad`, lastModified: new Date().toISOString() },
    { url: `${baseUrl}/seo-agency-hyderabad`, lastModified: new Date().toISOString() },
    { url: `${baseUrl}/casestudies-bixeltek/Tumblewash-Casestudy`, lastModified: new Date().toISOString() },
    { url: `${baseUrl}/casestudies-bixeltek/google-ads-case-study-bike-repair-hyderabad`, lastModified: new Date().toISOString() },
    { url: `${baseUrl}/casestudies-bixeltek/digital-marketing-for-dentists-case-study`, lastModified: new Date().toISOString() },
  ]

  let blogPosts: { url: string; lastModified: string }[] = []

  try {
    const data: any = await client.request(GET_ALL_POSTS)

    blogPosts =
      data?.posts?.nodes?.map((post: any) => ({
        url: `${baseUrl}/blogs/${post.slug}`,
        lastModified: post.date || new Date().toISOString(),
      })) || []
  } catch (error) {
    console.error('❌ Error fetching blog posts for sitemap:', error)
  }

  const allUrls = [...staticPages, ...blogPosts]

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${allUrls
      .map(
        (page) => `
      <url>
        <loc>${page.url}</loc>
        <lastmod>${page.lastModified}</lastmod>
        <changefreq>weekly</changefreq>
        <priority>0.8</priority>
      </url>`
      )
      .join('')}
  </urlset>`

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml',
    },
  })
}
