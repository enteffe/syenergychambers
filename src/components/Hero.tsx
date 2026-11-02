import React from 'react';
import { ArrowRight, Lock, MapPin, Scale, Shield, Landmark } from 'lucide-react';
import { FIRM_DETAILS } from '../data/firmData';

interface HeroProps {
  onOpenConsultation: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenConsultation }) => {
  return (
    <section 
      id="hero" 
      className="relative bg-[#111625] text-[#FAF8F5] min-h-[calc(100svh-4.5rem)] lg:min-h-[calc(100vh-5rem)] flex items-center py-10 sm:py-12 lg:py-8 xl:py-12 overflow-hidden border-b border-[#222B42]"
    >
      
      {/* Background Architectural Etching / Fine Grid (Archival Legal Texture) */}
      <div 
        className="absolute inset-0 z-0 opacity-10 mix-blend-luminosity scale-105 pointer-events-none bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=1920')`
        }}
      />
      
      {/* Serene Editorial Ink Wash */}
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-[#111625] via-[#111625]/95 to-[#161C2E]/90 pointer-events-none" />

      {/* Hairline Grid Accent */}
      <div className="absolute inset-x-0 bottom-0 h-px bg-[#222B42]" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-16 items-center">
          
          {/* Left Column: Monumental Legal Statement (Fits Screen Area Directly) */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-5 lg:space-y-6">
            
            {/* Highlighted Urgent Remand Briefing Direct Hotline */}
            <div className="inline-block">
              <a
                href="tel:+919034120650"
                className="inline-flex items-center gap-2.5 px-3.5 py-1.5 bg-[#875A1E]/30 border border-[#C79C5A] hover:bg-[#875A1E]/50 text-[#FAF8F5] transition-all cursor-pointer group shadow-xs"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="font-title text-[11px] sm:text-xs tracking-[0.16em] uppercase text-[#E5DDD0]">
                  Urgent Remand Briefing:
                </span>
                <span className="font-sans font-bold text-xs sm:text-sm text-[#C79C5A] group-hover:text-white transition-colors">
                  +91-90341-20650
                </span>
              </a>
            </div>

            <h1 className="font-display text-3xl sm:text-5xl lg:text-[44px] xl:text-[54px] font-normal tracking-tight text-[#FAF8F5] leading-[1.12] text-balance">
              Trial rigor in high-stakes criminal &amp; commercial litigation.
            </h1>

            <p className="font-reading text-sm sm:text-base lg:text-lg text-slate-300/90 max-w-xl leading-relaxed">
              Led by seasoned courtroom advocates with extensive prosecution background across the Enforcement Directorate (ED), NCB, and central agencies. We advise corporations, business leaders, and individuals facing regulatory investigations, criminal trials, and appellate disputes before the Supreme Court and High Courts.
            </p>

            {/* Action Group */}
            <div className="flex flex-wrap items-center gap-3.5 sm:gap-4 pt-1 font-sans">
              <button
                onClick={onOpenConsultation}
                className="px-6 sm:px-8 py-3 sm:py-3.5 bg-[#A3702C] hover:bg-[#875A1E] text-[#FAF8F5] text-xs font-bold uppercase tracking-[0.16em] transition-all flex items-center gap-2.5 cursor-pointer shadow-sm active:translate-y-0.5"
              >
                <span>Schedule Case Briefing</span>
                <ArrowRight className="w-4 h-4 text-[#FAF8F5]" />
              </button>
              
              <a
                href="#practice-areas"
                className="px-6 sm:px-8 py-3 sm:py-3.5 bg-transparent hover:bg-white/5 text-[#FAF8F5] border border-white/20 hover:border-[#C79C5A] text-xs font-bold uppercase tracking-[0.16em] transition-all"
              >
                Practice Remit
              </a>
            </div>

          </div>

          {/* Right Column: Physical Chamber Docket Card (Calibrated to Fit Viewport) */}
          <div className="lg:col-span-5">
            <div className="bg-[#FAF8F5] text-[#111625] p-5 sm:p-7 xl:p-8 border border-[#E5DDD0] shadow-xl relative">
              
              {/* Docket Header */}
              <div className="flex items-center justify-between pb-4 sm:pb-5 border-b border-[#E5DDD0] mb-4 sm:mb-5">
                <div>
                  <span className="font-title text-[10px] sm:text-xs tracking-[0.2em] text-[#875A1E] uppercase block mb-0.5">
                    Judicial Registry Docket
                  </span>
                  <span className="font-mono text-xs font-bold text-[#111625] tracking-widest block">
                    NO. SC/238-PHC/2026
                  </span>
                </div>
                <div className="w-9 h-9 sm:w-10 sm:h-10 border border-[#875A1E]/50 flex items-center justify-center text-[#875A1E]">
                  <Scale className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
              </div>

              {/* Ledger Entries */}
              <div className="space-y-4 sm:space-y-5 text-xs font-sans">
                
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-[0.15em] text-slate-500 block mb-0.5">
                    Primary Chamber Seat
                  </span>
                  <p className="font-serif text-base sm:text-lg font-bold text-[#111625] leading-snug">
                    Chamber No. 238, Patiala House Courts
                  </p>
                  <span className="text-slate-600 block text-xs mt-0.5">New Delhi – 110001 (Opp. NGMA)</span>
                </div>

                <div className="grid grid-cols-2 gap-3 sm:gap-4 pt-3 sm:pt-4 border-t border-[#EFE9DF]">
                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-[0.15em] text-slate-500 block mb-0.5">
                      Arguing Experience
                    </span>
                    <span className="font-serif text-xs sm:text-sm font-bold text-[#111625] block leading-snug">
                      Supreme Court &amp; High Courts
                    </span>
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-[0.15em] text-slate-500 block mb-0.5">
                      Agency Pedigree
                    </span>
                    <span className="font-serif text-xs sm:text-sm font-bold text-[#111625] block leading-snug">
                      Former Special Prosecutors
                    </span>
                  </div>
                </div>

                <div className="pt-3 sm:pt-4 border-t border-[#EFE9DF]">
                  <span className="text-[10px] uppercase font-bold tracking-[0.15em] text-slate-500 block mb-0.5">
                    Statutory Privilege Framework
                  </span>
                  <p className="text-xs text-slate-700 leading-relaxed font-normal">
                    Client communication protected under Sections 126–129 of the Indian Evidence Act, 1872. No public disclosure of matter specifics.
                  </p>
                </div>

                <div className="p-3 bg-[#F4EFEB] border border-[#E5DDD0] flex items-center justify-between mt-2">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
                    <span className="text-[10px] sm:text-[11px] font-bold text-[#111625] uppercase tracking-wider">
                      Emergency Remand / Bail Desk
                    </span>
                  </div>
                  <span className="text-[10px] sm:text-[11px] font-bold text-[#875A1E]">24/7 Available</span>
                </div>

                {/* Highlighted Direct Arguing Counsel Notice */}
                <div className="p-3 bg-[#111625] border-l-2 border-[#C79C5A] text-[#FAF8F5] shadow-sm mt-2.5">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C79C5A] shrink-0" />
                    <span className="font-title text-[10px] uppercase font-bold tracking-wider text-[#C79C5A]">
                      Direct Arguing Counsel
                    </span>
                  </div>
                  <p className="font-sans text-[11px] sm:text-xs text-[#E5DDD0] font-medium leading-relaxed">
                    Direct Partner Engagement Throughout Trial
                  </p>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>

    </section>
  );
};
