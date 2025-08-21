<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
  xmlns:s="http://www.sitemaps.org/schemas/sitemap/0.9">

  <xsl:template match="/">
    <html>
      <head>
        <title>XML Sitemap</title>
        <style>
          body { font-family: Arial, sans-serif; background:#f8f9fa; }
          table { border-collapse: collapse; width: 100%; margin-top:20px; }
          th, td { padding: 8px; border: 1px solid #ccc; }
          th { background: #3f6cf4; color: white; text-align: left; }
          tr:nth-child(even) { background: #f2f2f2; }
          a { color: #3f6cf4; text-decoration: none; }
        </style>
      </head>
      <body>
        <h1>BIXELTEK Sitemap</h1>

        <!-- Case 1: sitemapindex -->
        <xsl:if test="s:sitemapindex">
          <table>
            <tr>
              <th>Sitemap</th>
              <th>Last Modified</th>
            </tr>
            <xsl:for-each select="s:sitemapindex/s:sitemap">
              <tr>
                <td><a href="{s:loc}"><xsl:value-of select="s:loc"/></a></td>
                <td><xsl:value-of select="s:lastmod"/></td>
              </tr>
            </xsl:for-each>
          </table>
        </xsl:if>

        <!-- Case 2: urlset -->
        <xsl:if test="s:urlset">
          <table>
            <tr>
              <th>URL</th>
              <th>Last Modified</th>
            </tr>
            <xsl:for-each select="s:urlset/s:url">
              <tr>
                <td><a href="{s:loc}"><xsl:value-of select="s:loc"/></a></td>
                <td><xsl:value-of select="s:lastmod"/></td>
              </tr>
            </xsl:for-each>
          </table>
        </xsl:if>

      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
