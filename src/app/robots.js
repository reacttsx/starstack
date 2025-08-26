const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://example.com";

export default function robots() {
  return {
    host: siteUrl,
    sitemap: `${siteUrl}/sitemap.xml`,
    rules: [
      { userAgent: "*", allow: "/" },
      // add per-bot rules if you want:
      { userAgent: "GPTBot", disallow: ["/private", "/api/*"] },
    ],
  };
}
