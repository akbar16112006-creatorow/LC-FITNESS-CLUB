import '../index.css';
import React from 'react';

export const metadata = {
  title: 'L C Fitness Club - Keshavnagar, Mundhwa, Pune',
  description: 'Join L C Fitness Club, Pune. Experience premium strength, cardio, zumba, and flexibility programs with certified personal trainers.',
  icons: {
    icon: '/logo.jpg',
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLdData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ExerciseGym",
        "@id": "https://lcfitness.club/#gym",
        "name": "L C Fitness Club",
        "url": "https://lcfitness.club/",
        "logo": "https://lcfitness.club/logo.jpg",
        "image": "https://ik.imagekit.io/0q9tfyg2b/facilities/gym-facility.jpg",
        "telephone": "+91-9762444458",
        "email": "lcfitnessclubpune@gmail.com",
        "priceRange": "₹1500 - ₹8500",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Sr. No. 38, Manjari Road, Keshavnagar",
          "addressLocality": "Mundhwa",
          "addressRegion": "Pune",
          "postalCode": "411036",
          "addressCountry": "IN"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "18.5204",
          "longitude": "73.9312"
        },
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            "opens": "06:00",
            "closes": "22:30"
          },
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": "Sunday",
            "opens": "07:00",
            "closes": "12:00"
          }
        ],
        "sameAs": [
          "https://www.instagram.com/lc_fitness_club_pune?igsh=MW5oc3gydmZ2c2tjZA=="
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://lcfitness.club/#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What are the gym timings?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "L C Fitness Club is open Monday to Saturday from 6:00 AM to 10:30 PM, and Sundays from 7:00 AM to 12:00 PM."
            }
          },
          {
            "@type": "Question",
            "name": "Do you have personal training?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, we offer premium 1-on-1 personal training with certified trainers, including customized diet plans and workout tracking."
            }
          },
          {
            "@type": "Question",
            "name": "Do you have ladies batches?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, we offer dedicated ladies-only batches with female certified personal trainers for privacy and comfort."
            }
          }
        ]
      }
    ]
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Anton&family=Hanken+Grotesk:wght@300;400;500;700;900&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
        />
        {/* GA4 Script Integration */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
        <script dangerouslySetInnerHTML={{__html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-XXXXXXXXXX');
        `}} />
      </head>
      <body className="antialiased selection:bg-[#F0FF00] selection:text-[#1E1E1A] overflow-x-hidden w-full bg-[#EFECE6] text-[#1E1E1A]">
        {children}
      </body>
    </html>
  );
}
