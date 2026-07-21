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
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Anton&family=Hanken+Grotesk:wght@300;400;500;700;900&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased selection:bg-[#F0FF00] selection:text-[#1E1E1A] overflow-x-hidden w-full bg-[#EFECE6] text-[#1E1E1A]">
        {children}
      </body>
    </html>
  );
}
