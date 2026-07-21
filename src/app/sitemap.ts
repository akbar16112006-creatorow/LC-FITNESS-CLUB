import { MetadataRoute } from 'next';
import { BLOG_POSTS } from '../data/blogData';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://lcfitness.club';

  const locations = [
    '/gym-in-keshavnagar',
    '/gym-in-mundhwa',
    '/gym-near-magarpatta',
    '/personal-trainer-keshavnagar',
    '/weight-loss-gym-pune',
    '/crossfit-keshavnagar',
  ];

  const sitemapEntries: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/login`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.3,
    },
  ];

  // Add location landing pages
  locations.forEach((route) => {
    sitemapEntries.push({
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    });
  });

  // Add blog post pages
  BLOG_POSTS.forEach((post) => {
    sitemapEntries.push({
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    });
  });

  return sitemapEntries;
}
