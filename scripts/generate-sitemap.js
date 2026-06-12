// scripts/generate-sitemap.js
const fs = require("fs");
const path = require("path");

const baseUrl = "https://www.ecofleixewasterecycling.com";

const staticRoutes = [
  "",
  "/about",
  "/blog",
  "/contact",
  "/our-process",
  "/services",
  "/who-we-serve",
];

const blogPosts = [
  // Replace this with actual blog post data from your `blog-data.ts` or fetch source
  { slug: "first-post", date: "2025-07-01" },
  { slug: "second-post", date: "2025-07-15" },
];

const urls = [
  ...staticRoutes.map((route) => ({
    loc: `${baseUrl}${route}`,
    lastmod: new Date().toISOString(),
    changefreq: "monthly",
    priority: route === "" ? "1.0" : "0.8",
  })),
  ...blogPosts.map((post) => ({
    loc: `${baseUrl}/blog/${post.slug}`,
    lastmod: new Date(post.date).toISOString(),
    changefreq: "weekly",
    priority: "0.9",
  })),
];

const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${urls
    .map(
      (url) => `
    <url>
      <loc>${url.loc}</loc>
      <lastmod>${url.lastmod}</lastmod>
      <changefreq>${url.changefreq}</changefreq>
      <priority>${url.priority}</priority>
    </url>`
    )
    .join("")}
</urlset>`;

fs.writeFileSync(
  path.join(__dirname, "../public/sitemap.xml"),
  sitemapXml.trim()
);

console.log("✅ sitemap.xml generated");
