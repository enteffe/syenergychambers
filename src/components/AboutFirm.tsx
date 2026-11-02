import React from 'react';
import { ArrowRight, Scale, Landmark, ShieldCheck } from 'lucide-react';

export const AboutFirm: React.FC = () => {
  return (
    <section id="about" className="bg-[#FAF8F5] py-20 lg:py-28 border-b border-[#DDD4C5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Section Header */}
        <div className="mb-14">
          <span className="font-title text-xs tracking-[0.25em] text-[#875A1E] uppercase block mb-2">
            Institutional Profile // Est. New Delhi
          </span>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-[54px] font-normal text-[#111625] leading-tight max-w-4xl text-balance">
            Litigation is not an exercise in theory. It is decided in the crucible of courtroom advocacy.
          </h2>
        </div>

        {/* Asymmetrical Broadsheet Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Narrative Dossier & Courtroom Philosophy */}
          <div className="lg:col-span-7 space-y-6">
            
            <p className="font-reading text-xl text-[#111625] leading-relaxed font-normal">
              At Synergy Chambers, we reject passive representation. Modern white-collar litigation, special statutory trials, and complex commercial disputes demand relentless evidentiary analysis, forensic cross-examination, and commanding courtroom presence.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-4 border-t border-[#DDD4C5]">
              <div className="space-y-2">
                <span className="font-title text-xs font-bold uppercase tracking-[0.15em] text-[#875A1E] block">
                  I. Patiala House Chambers
                </span>
                <p className="font-reading text-sm text-slate-700 leading-relaxed">
                  Operating directly from Chamber No. 238 within the historic Patiala House Courts complex puts our counsel at the center of the capital’s trial jurisprudence. This location ensures immediate attendance for urgent remand proceedings, bail hearings, and ongoing trial sessions.
                </p>
              </div>

              <div className="space-y-2">
                <span className="font-title text-xs font-bold uppercase tracking-[0.15em] text-[#875A1E] block">
                  II. Agency &amp; Trial Pedigree
                </span>
                <p className="font-reading text-sm text-slate-700 leading-relaxed">
                  With substantial tenure assisting Special Prosecutors for the Enforcement Directorate (ED), Narcotics Control Bureau (NCB), and SFIO, our counsel understand the investigative architectures and procedural nuances of central agencies.
                </p>
              </div>
            </div>

            {/* Direct Arguing Counsel Callout */}
            <div className="p-6 bg-[#F4EFEB] border-l-2 border-[#875A1E] space-y-2 mt-4 font-sans">
              <span className="font-title text-xs uppercase tracking-wider text-[#111625] font-bold block">
                Direct Arguing Counsel Protocol
              </span>
              <p className="text-xs text-slate-700 leading-relaxed font-normal">
                Our clients interface directly with the advocates who draft the pleadings and argue before the bench. We do not operate associate layers or delegate critical courtroom arguments.
              </p>
            </div>

            <div className="pt-2">
              <a
                href="#team"
                className="inline-flex items-center gap-2 text-xs font-sans font-bold uppercase tracking-[0.16em] text-[#875A1E] hover:text-[#111625] transition-colors"
              >
                <span>Read Counsel Curricula Vitae</span>
                <ArrowRight className="w-4 h-4 text-[#875A1E]" />
              </a>
            </div>

          </div>

          {/* Right Column: Physical Chamber Photograph & Gazette Artifact */}
          <div className="lg:col-span-5 space-y-6">
            <div className="border border-[#DDD4C5] p-3 bg-white shadow-folio">
              <div className="overflow-hidden bg-[#111625] relative">
                <img
                  src="https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&q=80&w=1200"
                  alt="Synergy Chambers Advocacy Session"
                  className="w-full h-[400px] sm:h-[460px] object-cover object-top filter grayscale contrast-110 hover:grayscale-0 transition-all duration-700"
                  loading="lazy"
                />
              </div>
              <div className="pt-3 pb-1 px-1 flex items-center justify-between text-[11px] font-sans text-slate-500">
                <span>Chamber No. 238 Consultation</span>
                <span className="font-title text-[#875A1E] uppercase">Patiala House Courts</span>
              </div>
            </div>

            {/* Statutory Corridor Note */}
            <div className="p-5 border border-[#DDD4C5] bg-[#FAF8F5] font-sans text-xs space-y-2">
              <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-[#875A1E] block">
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
