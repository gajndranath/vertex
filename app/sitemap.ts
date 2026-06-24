import { MetadataRoute } from 'next';

// In a real application, you would fetch these from your CMS or Database
const BLOG_SLUGS = [
  "understanding-hexahedral-vs-tetrahedral",
  "non-linear-material-workflows-in-ls-dyna",
  "reducing-solver-turnaround-time-with-hpc"
];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://vortex-engineering.com';

  const staticRoutes = [
    '',
    '/about',
    '/services',
    '/industries',
    '/faq',
    '/contact',
    '/blog',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));

  const blogRoutes = BLOG_SLUGS.map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...blogRoutes];
}
