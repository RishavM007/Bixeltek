<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
  xmlns:s="http://www.sitemaps.org/schemas/sitemap/0.9">

  <xsl:output method="html" indent="yes" encoding="UTF-8"/>

  <xsl:template match="/">
    <html>
      <head>
        <title>BIXELTEK Sitemap</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            background: #f9f9f9;
            margin: 0;
            padding: 20px;
          }
          h1 {
            color: #333;
          }
          table {
            border-collapse: collapse;
            width: 100%;
            background: #fff;
            margin-top: 20px;
            box-shadow: 0 2px 5px rgba(0,0,0,0.1);
          }
          th, td {
            border: 1px solid #ddd;
            padding: 8px;
            text-align: left;
          }
          th {
            background-color: #4CAF50;
            color: white;
          }
          tr:nth-child(even) { background-color: #f2f2f2; }
          a {
            color: #2a6496;
            text-decoration: none;
          }
          a:hover {
            text-decoration: underline;
          }
        </style>
      </head>
      <body>
        <h1>BIXELTEK Sitemap</h1>

        <!-- Case 1: Sitemap Index -->
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

        <!-- Case 2: URL Set -->
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
