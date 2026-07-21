import { LandingClient } from '../../components/LandingClient';
import { LocalContent } from '../../components/LocalContent';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Top Weight Loss Gym in Pune | L C Fitness Club',
  description: 'Looking to shed fat and build lean muscle? L C Fitness Club offers the best fat loss workouts, dedicated personal training, and zumba/yoga classes.',
  alternates: {
    canonical: 'https://lcfitness.club/weight-loss-gym-pune',
  }
};

export default function WeightLossGymPune() {
  return (
    <>
      <LandingClient />
      <LocalContent 
        location="Weight Loss Gym Pune"
        title="Best Fat Loss & Weight Management Gym in Pune"
        description="Shred body fat and achieve a lean physique at L C Fitness Club. Our customized weight loss programs combine high-intensity functional cardio training, battle ropes, CrossFit exercises, fat-loss dance/Zumba sessions, yoga classes, and dedicated calorie deficit nutrition blueprints."
        nearbyAreas={['Pune', 'Keshavnagar', 'Mundhwa', 'Hadapsar', 'Kharadi']}
      />
    </>
  );
}
