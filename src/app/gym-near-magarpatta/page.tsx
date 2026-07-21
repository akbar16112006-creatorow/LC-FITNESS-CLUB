import { LandingClient } from '../../components/LandingClient';
import { LocalContent } from '../../components/LocalContent';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gym Near Magarpatta City Pune | L C Fitness Club',
  description: 'Looking for a gym near Magarpatta City, Hadapsar? Join L C Fitness Club. Fully equipped cardio floor, strength training, zumba, and personal training.',
  alternates: {
    canonical: 'https://lcfitness.club/gym-near-magarpatta',
  }
};

export default function GymNearMagarpatta() {
  return (
    <>
      <LandingClient />
      <LocalContent 
        location="Magarpatta City, Pune"
        title="Best Gym & Fitness Club Near Magarpatta City"
        description="For professionals and residents in Magarpatta City and Amanora, L C Fitness Club provides a premium, results-oriented workout facility just a short drive away. With certified personal coaching, advanced weight loss setups, zumba, yoga, and steam recovery rooms, we are Hadapsar's favorite local fitness center."
        nearbyAreas={['Magarpatta', 'Amanora Town City', 'Hadapsar', 'Mundhwa Road', 'Keshavnagar']}
      />
    </>
  );
}
