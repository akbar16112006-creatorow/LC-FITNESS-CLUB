import React, { useEffect } from 'react';
import { GYM_DETAILS } from '../data/gymData';

export const SEO: React.FC = () => {
  useEffect(() => {
    const jsonLdData = {
      "@context": "https://schema.org",
      "@type": ["ExerciseGym", "HealthClub", "LocalBusiness"],
      "name": GYM_DETAILS.name,
      "image": "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80",
      "@id": "https://lcfitnessclubpune.com/",
      "url": "https://lcfitnessclubpune.com/",
      "telephone": `+91-${GYM_DETAILS.primaryPhone}`,
      "email": GYM_DETAILS.email,
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
        "latitude": 18.5204,
        "longitude": 73.9312
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
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": GYM_DETAILS.rating.toString(),
        "reviewCount": GYM_DETAILS.reviewCount.toString()
      },
      "priceRange": "₹1500 - ₹8500"
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = 'json-ld-schema';
    script.innerHTML = JSON.stringify(jsonLdData);

    const existingScript = document.getElementById('json-ld-schema');
    if (existingScript) {
      existingScript.remove();
    }

    document.head.appendChild(script);

    return () => {
      const el = document.getElementById('json-ld-schema');
      if (el) el.remove();
    };
  }, []);

  return null;
};
