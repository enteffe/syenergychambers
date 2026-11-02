import React from 'react';
import { ArrowRight, Scale, Landmark, ShieldCheck } from 'lucide-react';

export const AboutFirm: React.FC = () => {
  return (
    <section id="about" className="bg-[#FAF8F5] py-28 lg:py-40 border-b border-[#E5DDD0]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Editorial Section Header with Generous Negative Space */}
        <div className="mb-20">
          <span className="font-title text-xs tracking-[0.28em] text-[#875A1E] uppercase block mb-3">
            Institutional Profile // Est. New Delhi
          </span>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-[56px] font-normal text-[#111625] leading-[1.15] max-w-4xl text-balance">
            Litigation is not an exercise in theory. It is decided in the crucible of courtroom advocacy.
          </h2>
        </div>

        {/* Asymmetrical Broadsheet Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          
          {/* Left Column: Narrative Dossier & Courtroom Philosophy */}
          <div className="lg:col-span-7 space-y-8">
            
            <p className="font-reading text-xl sm:text-2xl text-[#111625] leading-relaxed sm:leading-loose font-normal">
              At Synergy Chambers, we reject passive representation. Modern white-collar litigation, special statutory trials, and complex commercial disputes demand relentless evidentiary analysis, forensic cross-examination, and commanding courtroom presence.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 pt-6 border-t border-[#E5DDD0]">
              <div className="space-y-3">
                <span className="font-title text-xs font-bold uppercase tracking-[0.18em] text-[#875A1E] block">
                  I. Patiala House Chambers
                </span>
                <p className="font-reading text-sm text-slate-600 leading-relaxed sm:leading-loose">
                  Operating directly from Chamber No. 238 within the historic Patiala House Courts complex puts our counsel at the center of the capital’s trial jurisprudence. This location ensures immediate attendance for urgent remand proceedings, bail hearings, and ongoing trial sessions.
                </p>
              </div>

              <div className="space-y-3">
                <span className="font-title text-xs font-bold uppercase tracking-[0.18em] text-[#875A1E] block">
                  II. Agency &amp; Trial Pedigree
                </span>
                <p className="font-reading text-sm text-slate-600 leading-relaxed sm:leading-loose">
                  With substantial tenure assisting Special Prosecutors for the Enforcement Directorate (ED), Narcotics Control Bureau (NCB), and SFIO, our counsel understand the investigative architectures and procedural nuances of central agencies.
                </p>
              </div>
            </div>

            {/* Direct Arguing Counsel Callout with Quiet Restful Styling */}
            <div className="p-8 bg-[#F4EFEB] border-l-2 border-[#875A1E] space-y-3 mt-6 font-sans">
              <span className="font-title text-xs uppercase tracking-wider text-[#111625] font-bold block">
                Direct Arguing Counsel Protocol
              </span>
              <p className="text-sm text-slate-700 leading-relaxed font-normal">
                Our clients interface directly with the advocates who draft the pleadings and argue before the bench. We do not operate associate layers or delegate critical courtroom arguments.
              </p>
            </div>

            <div className="pt-4">
              <a
                href="#team"
                className="inline-flex items-center gap-2.5 text-xs font-sans font-bold uppercase tracking-[0.18em] text-[#875A1E] hover:text-[#111625] transition-colors"
              >
                <span>Read Counsel Curricula Vitae</span>
                <ArrowRight className="w-4 h-4 text-[#875A1E]" />
              </a>
            </div>

          </div>

          {/* Right Column: Physical Chamber Photograph & Gazette Artifact */}
          <div className="lg:col-span-5 space-y-8">
            <div className="border border-[#E5DDD0] p-4 bg-white shadow-lg">
              <div className="overflow-hidden bg-[#111625] relative">
                <img
                  src="https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&q=80&w=1200"
                  alt="Synergy Chambers Advocacy Session"
                  className="w-full h-[420px] sm:h-[480px] object-cover object-top filter grayscale contrast-105 hover:grayscale-0 transition-all duration-700"
                  loading="lazy"
                />
              </div>
              <div className="pt-4 pb-1 px-1 flex items-center justify-between text-xs font-sans text-slate-500">
                <span>Chamber No. 238 Consultation</span>
                <span className="font-title text-[#875A1E] uppercase tracking-wider">Patiala House Courts</span>
              </div>
            </div>

            {/* Statutory Corridor Note */}
            <div className="p-6 border border-[#E5DDD0] bg-[#FAF8F5] font-sans text-xs space-y-2.5">
              <span className="text-[10px] uppercase font-bold tracking-[0.22em] text-[#875A1E] block">
                Regional Jurisdictional Corridor
              </span>
              <p className="text-slate-600 leading-relaxed font-normal">
                Continuous representation connecting the Supreme Court of India and Delhi trial benches with the High Court of Punjab &amp; Haryana at Chandigarh, CAT, AFT, and District Sessions Courts across Haryana.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
