import { MetadataRoute } from 'next'
import { blogPosts } from '@/lib/blog-data';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://eferecycling.com';

  const staticRoutes = [
    '',
    '/about',
    '/blog',
    '/contact',
    '/our-process',
    '/services',
    '/who-we-serve',
    '/privacy-policy',
    '/terms-and-conditions',
    '/cookie-policy',
    '/what-we-accept',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  const blogRoutes = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));

  return [...staticRoutes, ...blogRoutes];
}
