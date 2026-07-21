import React from 'react';
import { BlogClient } from '../../components/BlogClient';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Fitness & Health Blog | L C Fitness Club Pune',
  description: 'Expert gym workout routines, fat loss nutrition plans, post-workout recovery tips, and bodybuilding advice from certified fitness coaches in Keshavnagar.',
  alternates: {
    canonical: 'https://lcfitness.club/blog',
  }
};

export default function BlogIndex() {
  return <BlogClient />;
}
