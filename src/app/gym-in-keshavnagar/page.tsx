import { LandingClient } from '../../components/LandingClient';
import { LocalContent } from '../../components/LocalContent';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'L C Fitness Club | Best Gym in Keshavnagar Pune',
  description: 'Looking for the best gym in Keshavnagar, Pune? Join L C Fitness Club today! Fully A.C. gym floor, cardio CrossFit zones, zumba classes, and certified personal trainers.',
  alternates: {
    canonical: 'https://lcfitness.club/gym-in-keshavnagar',
  }
};

export default function GymInKeshavnagar() {
  return (
    <>
      <LandingClient />
      <LocalContent 
        location="Keshavnagar, Pune"
        title="Best Gym in Keshavnagar, Pune"
        description="L C Fitness Club is the premier fitness destination in Keshavnagar, Mundhwa, Pune. Located conveniently on Manjari Road, our fitness center features high-end bodybuilding machines, cardiorespiratory training, special ladies batches, steam baths, lockers, and specialized training programs designed to help you transform your physique."
        nearbyAreas={['Keshavnagar', 'Manjari Road', 'Mundhwa', 'Amanora', 'Hadapsar']}
      />
    </>
  );
}
