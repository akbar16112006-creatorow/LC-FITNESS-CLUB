import { LandingClient } from '../../components/LandingClient';
import { LocalContent } from '../../components/LocalContent';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gym in Mundhwa Pune | L C Fitness Club',
  description: 'Looking for a premium gym near Mundhwa, Pune? L C Fitness Club offers fully equipped strength and cardio sections, dedicated ladies batches, and personal trainers.',
  alternates: {
    canonical: 'https://lcfitness.club/gym-in-mundhwa',
  }
};

export default function GymInMundhwa() {
  return (
    <>
      <LandingClient />
      <LocalContent 
        location="Mundhwa, Pune"
        title="Top Fitness Center & Gym near Mundhwa, Pune"
        description="Serving the Mundhwa community, L C Fitness Club offers an elite training experience just minutes away in Keshavnagar. Our spacious floor boasts professional trainers, dedicated weight loss programs, ladies-only workout hours, zumba classes, yoga, and relaxing therapeutic steam rooms."
        nearbyAreas={['Mundhwa', 'Kharadi', 'Magarpatta City', 'Keshavnagar', 'Ghorpadi']}
      />
    </>
  );
}
