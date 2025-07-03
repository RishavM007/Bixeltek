// app/robots.txt/route.ts

export function GET() {
  const content = `
User-agent: *
Disallow:

Sitemap: https://bixeltek.com/sitemap.xml
  `.trim();

  return new Response(content, {
    headers: {
      'Content-Type': 'text/plain',
    },
  });
}
