import React from 'react';
import { BlogPostClient } from '../../../components/BlogPostClient';
import { BLOG_POSTS } from '../../../data/blogData';
import type { Metadata } from 'next';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) return {};

  return {
    title: `${post.title} | L C Fitness Club Blog`,
    description: post.description,
    alternates: {
      canonical: `https://lcfitness.club/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.description,
      url: `https://lcfitness.club/blog/${post.slug}`,
      images: [{ url: post.image }],
      type: 'article',
      authors: [post.author],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
      images: [post.image],
    }
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;

  // Generate dynamic article schema
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  const articleSchema = post ? {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.description,
    "image": post.image,
    "datePublished": "2026-07-15T08:00:00+05:30",
    "author": {
      "@type": "Person",
      "name": post.author
    },
    "publisher": {
      "@type": "Organization",
      "name": "L C Fitness Club",
      "logo": {
        "@type": "ImageObject",
        "url": "https://lcfitness.club/logo.jpg"
      }
    }
  } : null;

  return (
    <>
      {articleSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
        />
      )}
      <BlogPostClient slug={slug} />
    </>
  );
}
