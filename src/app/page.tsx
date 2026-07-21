import { createClient } from '../lib/supabase/client';
import { LandingClient } from '../components/LandingClient';
import type { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  const supabase = createClient();
  let title = 'L C Fitness Club | Best Gym in Keshavnagar Pune';
  let description = 'Join L C Fitness Club in Keshavnagar, Mundhwa, Pune. Experience premium strength, cardio, zumba, and flexibility programs with certified personal trainers.';
  let keywords = ['gym', 'fitness club', 'pune', 'keshavnagar', 'cardioworkout', 'zumba', 'yoga'];

  try {
    const { data } = await supabase.from('seo').select('*').eq('id', 1).single();
    if (data) {
      if (data.meta_title) title = data.meta_title;
      if (data.meta_description) description = data.meta_description;
      if (data.keywords) keywords = data.keywords;
    }
  } catch (err) {
    console.warn('Metadata fetch fallback:', err);
  }

  return {
    title,
    description,
    keywords,
    authors: [{ name: 'Anand Jankar', url: 'https://lcfitness.club/' }],
    creator: 'L C Fitness Club',
    publisher: 'L C Fitness Club',
    metadataBase: new URL('https://lcfitness.club/'),
    alternates: {
      canonical: '/',
    },
    openGraph: {
      title,
      description,
      url: 'https://lcfitness.club/',
      siteName: 'L C Fitness Club',
      images: [
        {
          url: '/logo.jpg',
          width: 800,
          height: 800,
          alt: 'L C Fitness Club Logo',
        },
      ],
      locale: 'en_IN',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['/logo.jpg'],
    },
    verification: {
      google: 'google-site-verification-id',
    },
  };
}

export default function Home() {
  return <LandingClient />;
}
