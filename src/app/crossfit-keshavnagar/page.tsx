import { LandingClient } from '../../components/LandingClient';
import { LocalContent } from '../../components/LocalContent';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'CrossFit Functional Training in Keshavnagar | L C Fitness Club',
  description: 'Boost endurance and stamina with CrossFit functional fitness training in Keshavnagar, Pune. High-intensity cardiorespiratory exercises.',
  alternates: {
    canonical: 'https://lcfitness.club/crossfit-keshavnagar',
  }
};

export default function CrossfitKeshavnagar() {
  return (
    <>
      <LandingClient />
      <LocalContent 
        location="CrossFit Keshavnagar"
        title="High-Intensity CrossFit & Functional Conditioning in Keshavnagar"
        description="Experience the ultimate stamina booster workouts at L C Fitness Club. Our dedicated functional training sector features state-of-the-art kettlebells, slam balls, battle ropes, agility rings, plyometric boxes, and structured CrossFit routines guided by certified coaches."
        nearbyAreas={['Keshavnagar', 'Mundhwa Road', 'Hadapsar', 'Manjari', 'Magarpatta']}
      />
    </>
  );
}
