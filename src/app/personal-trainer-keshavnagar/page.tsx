import { LandingClient } from '../../components/LandingClient';
import { LocalContent } from '../../components/LocalContent';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Best Personal Trainers in Keshavnagar Pune | L C Fitness Club',
  description: 'Get certified 1-on-1 personal coaching in Keshavnagar, Pune. Customized diet plans, strength conditioning, and fat loss training with expert coaches.',
  alternates: {
    canonical: 'https://lcfitness.club/personal-trainer-keshavnagar',
  }
};

export default function PersonalTrainerKeshavnagar() {
  return (
    <>
      <LandingClient />
      <LocalContent 
        location="Personal Trainer Keshavnagar"
        title="Certified 1-on-1 Personal Training in Keshavnagar, Pune"
        description="Transform your body with dedicated fitness coaching at L C Fitness Club. Lead coach Anand Jankar and our elite trainers design personalized workout regimes, body recomposition trackers, and direct nutritional consultation. Achieve real results in fat loss, muscle building, and core strengthening."
        nearbyAreas={['Keshavnagar', 'Mundhwa', 'Manjari', 'Hadapsar', 'Magarpatta']}
      />
    </>
  );
}
