import { MetadataRoute } from 'next';
import { API_URL } from '@/lib/api';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = 'https://hasankayan.com';
  const staticRoutes = [
    { url: base, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 1 },
    { url: `${base}/projects`, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: `${base}/blog`, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: `${base}/cv`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${base}/contact`, lastModified: new Date(), changeFrequency: 'yearly' as const, priority: 0.6 },
  ];
  try {
    const posts = await fetch(`${API_URL}/blog`).then(r => r.json());
    const postRoutes = posts.map((p: { slug: string; publishedAt: string }) => ({
      url: `${base}/blog/${p.slug}`,
      lastModified: new Date(p.publishedAt),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    }));
    return [...staticRoutes, ...postRoutes];
  } catch {
    return staticRoutes;
  }
}
