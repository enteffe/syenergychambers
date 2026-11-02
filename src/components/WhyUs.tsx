import React from 'react';
import { Scale, Gavel, Shield, Lock, MapPin, UserCheck } from 'lucide-react';

export const WhyUs: React.FC = () => {
  const canons = [
    {
      num: 'CANON I',
      title: 'High-Stakes Trial Specialization',
      text: 'Our practice is strictly focused on contentious, high-exposure litigation: economic offenses, central agency investigations, commercial arbitration, and superior court appeals.'
    },
    {
      num: 'CANON II',
      title: 'Superior Court & Appellate Pedigree',
      text: 'Seasoned arguing counsel regularly appearing before the Supreme Court of India, Delhi High Court, and Punjab & Haryana High Court across writs, appeals, and special leave petitions.'
    },
    {
      num: 'CANON III',
      title: 'Prosecutorial & Central Agency Acumen',
      text: 'Prior tenure assisting Special Public Prosecutors for the Narcotics Control Bureau (NCB), Enforcement Directorate (ED), and SFIO provides direct insight into prosecutorial mechanisms.'
    },
    {
      num: 'CANON IV',
      title: 'Statutory Attorney-Client Privilege',
      text: 'Every mandate, factual brief, and sensitive communication is guarded under strict statutory privilege pursuant to Sections 126–129 of the Indian Evidence Act, 1872.'
    },
    {
      num: 'CANON V',
      title: 'Direct Partner-Led Arguments',
      text: 'We do not operate associate layers or delegate courtroom appearances. The counsel who formulate your trial strategy and draft the pleadings will argue before the bench.'
    },
    {
      num: 'CANON VI',
      title: 'Patiala House Base & Regional Corridors',
      text: 'Permanent chambers at Chamber 238, Patiala House Courts, combined with seamless representation corridors across Chandigarh and Haryana.'
    }
  ];

  return (
    <section id="why-us" className="bg-[#111625] text-[#FAF8F5] py-28 lg:py-40 border-b border-[#222B42]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header with Expansive Margin */}
        <div className="max-w-3xl mb-20">
          <span className="font-title text-xs tracking-[0.28em] text-[#C79C5A] uppercase block mb-3">
            Institutional Standards // Chamber Canons
          </span>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-[56px] font-normal text-[#FAF8F5] leading-[1.12]">
            Principles forged in high-stakes courtroom contest.
          </h2>
          <p className="font-reading text-lg sm:text-xl text-slate-300 mt-6 leading-relaxed sm:leading-loose">
            Legal disputes of consequence require relentless trial preparation, institutional ethics, and strategic clarity.
          </p>
        </div>

        {/* Gazette Canons with Generous Spacing */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 sm:gap-14 lg:gap-16">
          {canons.map((canon) => (
            <div 
              key={canon.num}
              className="border-t border-[#222B42] pt-8 space-y-4"
            >
              <span className="font-title text-xs font-bold text-[#C79C5A] tracking-[0.22em] block">
                {canon.num}
              </span>
              <h3 className="font-display text-2xl text-white font-normal leading-snug">
                {canon.title}
              </h3>
              <p className="font-reading text-sm sm:text-base text-slate-300/90 leading-relaxed sm:leading-loose font-normal">
                {canon.text}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
