import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { FunFacts } from './components/FunFacts';
import { AboutFirm } from './components/AboutFirm';
import { PracticeAreas } from './components/PracticeAreas';
import { IndustriesSection } from './components/IndustriesSection';
import { WhyUs } from './components/WhyUs';
import { OurTeam } from './components/OurTeam';
import { CTASection } from './components/CTASection';
import { ConsultationSection } from './components/ConsultationSection';
import { Footer } from './components/Footer';
import { BarCouncilDisclaimer } from './components/BarCouncilDisclaimer';
import { PracticeModal } from './components/PracticeModal';
import { TeamModal } from './components/TeamModal';
import { LegalModals } from './components/LegalModals';
import { 
  PRACTICE_AREAS, 
  FOUNDERS, 
  CHANDIGARH_TEAM, 
  HARYANA_TEAM, 
  PracticeArea, 
  Lawyer 
} from './data/firmData';

export function App() {
  const [selectedPracticeId, setSelectedPracticeId] = useState<string | null>(null);
  const [selectedLawyerId, setSelectedLawyerId] = useState<string | null>(null);
  const [legalModalType, setLegalModalType] = useState<'disclaimer' | 'privacy' | null>(null);

  // Accessibility State (Text Size & High Contrast)
  const [textSize, setTextSize] = useState<'sm' | 'md' | 'lg'>(() => {
    const saved = localStorage.getItem('synergy_text_size');
    return (saved === 'sm' || saved === 'lg') ? saved : 'md';
  });

  const [isHighContrast, setIsHighContrast] = useState<boolean>(() => {
    return localStorage.getItem('synergy_high_contrast') === 'true';
  });

  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove('text-size-sm', 'text-size-md', 'text-size-lg');
    root.classList.add(`text-size-${textSize}`);
    localStorage.setItem('synergy_text_size', textSize);
  }, [textSize]);

  useEffect(() => {
    const root = document.documentElement;
    if (isHighContrast) {
      root.classList.add('high-contrast');
      localStorage.setItem('synergy_high_contrast', 'true');
    } else {
      root.classList.remove('high-contrast');
      localStorage.setItem('synergy_high_contrast', 'false');
    }
  }, [isHighContrast]);

  const allLawyers: Lawyer[] = [...FOUNDERS, ...CHANDIGARH_TEAM, ...HARYANA_TEAM];

  const selectedPractice: PracticeArea | null = selectedPracticeId
    ? PRACTICE_AREAS.find(p => p.id === selectedPracticeId) || null
    : null;

  const selectedLawyer: Lawyer | null = selectedLawyerId
    ? allLawyers.find(l => l.id === selectedLawyerId) || null
    : null;

  const handleOpenConsultation = () => {
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col font-sans text-slate-800 antialiased selection:bg-[#CDB091] selection:text-[#12172d]">
      {/* Statutory Bar Council of India initial acceptance modal */}
      <BarCouncilDisclaimer />

      {/* 1. Header / Navbar (Exact K&R Legal Skeleton) */}
      <Navbar 
        onOpenConsultation={handleOpenConsultation}
        onSelectPractice={(id) => setSelectedPracticeId(id)}
        onSelectLawyer={(id) => setSelectedLawyerId(id)}
        textSize={textSize}
        onChangeTextSize={setTextSize}
        isHighContrast={isHighContrast}
        onToggleHighContrast={() => setIsHighContrast(prev => !prev)}
      />

      {/* Main Page Flow Arranged in Exact K&R Legal Skeleton Order */}
      <main id="main-content" tabIndex={-1} className="flex-grow focus:outline-none">
        
        {/* 2. Hero Section (wpo-hero-static-s4) */}
        <Hero onOpenConsultation={handleOpenConsultation} />

        {/* 3. Fun Fact / Stats Counter Strip (wpo-fun-fact-section-s2) */}
        <FunFacts />

        {/* 4. About the Firm (wpo-about-section-s3) */}
        <AboutFirm />

        {/* 5. Practice Areas: Signature Horizontal Row Cards (wpo-service-section-s3) */}
        <PracticeAreas onSelectPractice={(id) => setSelectedPracticeId(id)} />

        {/* 6. Industries Served (wpo-industries-section) */}
        <IndustriesSection />

        {/* 7. Why Us Dark Navy Section (why-choose-us) */}
        <WhyUs />

        {/* 8. Our Team Section with Know More Modal (wpo-team-section) */}
        <OurTeam onSelectLawyer={(id) => setSelectedLawyerId(id)} />

        {/* 9. Full-width Get In Touch CTA Banner (wpo-cta-section-s2) */}
        <CTASection onOpenConsultation={handleOpenConsultation} />

        {/* 10. Case Intake & Contact Registry */}
        <ConsultationSection />

      </main>

      {/* 11. Footer (wpo-site-footer) */}
      <Footer 
        onOpenConsultation={handleOpenConsultation}
        onOpenDisclaimer={() => setLegalModalType('disclaimer')}
        onOpenPrivacy={() => setLegalModalType('privacy')}
      />

      {/* Practice Area Deep Dive Modal */}
      <PracticeModal 
        practice={selectedPractice}
        onClose={() => setSelectedPracticeId(null)}
        onOpenConsultation={handleOpenConsultation}
      />

      {/* Team Member Curriculum Vitae Modal (#teamModal) */}
      <TeamModal 
        lawyer={selectedLawyer}
        onClose={() => setSelectedLawyerId(null)}
        onOpenConsultation={handleOpenConsultation}
      />

      {/* Statutory Disclaimers & Privacy Modals */}
      <LegalModals 
        type={legalModalType}
        onClose={() => setLegalModalType(null)}
      />
    </div>
  );
}

export default App;
