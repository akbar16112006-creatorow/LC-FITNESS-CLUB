import { useState } from 'react';
import { SEO } from './components/SEO';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Facilities } from './components/Facilities';
import { Membership } from './components/Membership';
import { PersonalTraining } from './components/PersonalTraining';
import { ClassSchedule } from './components/ClassSchedule';
import { Transformations } from './components/Transformations';
import { InstagramSection } from './components/InstagramSection';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { InquiryModal } from './components/InquiryModal';
import { MarqueeTicker } from './components/MarqueeTicker';

export function App() {
  const [isInquiryModalOpen, setIsInquiryModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<string | undefined>(undefined);

  const handleOpenInquiry = (planName?: string) => {
    setSelectedPlan(planName);
    setIsInquiryModalOpen(true);
  };

  const handleCloseInquiry = () => {
    setIsInquiryModalOpen(false);
    setSelectedPlan(undefined);
  };

  return (
    <div className="min-h-screen bg-[#EFECE6] text-[#1E1E1A] antialiased selection:bg-[#F0FF00] selection:text-[#1E1E1A] font-sans relative overflow-x-hidden">
      {/* Local Business JSON-LD SEO Schema */}
      <SEO />

      {/* Global Website Ambient Glow Orbs Layer */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[5%] -left-36 w-[650px] h-[650px] bg-[#F0FF00]/15 rounded-full blur-[150px]" />
        <div className="absolute top-[28%] -right-36 w-[650px] h-[650px] bg-[#00E5FF]/15 rounded-full blur-[150px]" />
        <div className="absolute top-[52%] -left-36 w-[650px] h-[650px] bg-[#4A5300]/15 rounded-full blur-[150px]" />
        <div className="absolute top-[75%] -right-36 w-[650px] h-[650px] bg-[#F0FF00]/15 rounded-full blur-[150px]" />
      </div>

      {/* Floating Capsule Glass Navigation Header */}
      <Navbar onOpenInquiry={handleOpenInquiry} />

      {/* Homepage Flow */}
      <main>
        {/* 1. Hero & 2. Trust Statistics */}
        <Hero onOpenInquiry={handleOpenInquiry} />

        <MarqueeTicker />
        
        {/* 3. About Gym */}
        <About />

        {/* 4. Facilities */}
        <Facilities />

        {/* 6. Membership Packages */}
        <Membership onOpenInquiry={handleOpenInquiry} />

        {/* 7. Personal Training */}
        <PersonalTraining onOpenInquiry={handleOpenInquiry} />

        {/* 8. Daily Activity Classes */}
        <ClassSchedule />

        {/* 9. Client Transformations (Before & After) */}
        <Transformations />

        {/* Instagram Social Proof */}
        <InstagramSection />

        {/* 12. Contact & 13. Google Map */}
        <Contact />

        <MarqueeTicker bgColor="bg-[#4A5300]" textColor="text-[#F0FF00]" />
      </main>

      {/* 14. Footer */}
      <Footer />

      {/* Global Interactive Enrollment Modal */}
      <InquiryModal
        isOpen={isInquiryModalOpen}
        onClose={handleCloseInquiry}
        selectedPlanName={selectedPlan}
      />
    </div>
  );
}

export default App;
