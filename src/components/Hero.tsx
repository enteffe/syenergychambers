import React from 'react';
import { ArrowRight, Lock, MapPin, Scale, Shield, Landmark } from 'lucide-react';
import { FIRM_DETAILS } from '../data/firmData';

interface HeroProps {
  onOpenConsultation: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenConsultation }) => {
  return (
    <section id="hero" className="relative bg-[#111625] text-[#FAF8F5] pt-16 pb-20 lg:pt-24 lg:pb-32 overflow-hidden border-b border-[#2C3652]">
      
      {/* Background Architectural Etching / Fine Grid (Archival Legal Texture) */}
      <div 
        className="absolute inset-0 z-0 opacity-15 mix-blend-luminosity scale-105 pointer-events-none bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=1920')`
        }}
      />
      
      {/* Editorial Ink Wash */}
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-[#111625] via-[#111625]/95 to-[#171E30]/90 pointer-events-none" />

      {/* Hairline Grid Accent */}
      <div className="absolute inset-x-0 bottom-0 h-px bg-[#2C3652]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Monumental Legal Statement (Visual Anchor) */}
          <div className="lg:col-span-7 space-y-8">
            
            <div className="inline-block border-b border-[#875A1E] pb-1">
              <span className="font-title text-xs tracking-[0.22em] text-[#C79C5A] uppercase">
                Chamber No. 238 • Patiala House Courts Complex
              </span>
            </div>

            <h1 className="font-display text-4xl sm:text-6xl lg:text-[68px] font-normal tracking-tight text-[#FAF8F5] leading-[1.08] text-balance">
              Trial rigor in high-stakes criminal &amp; commercial litigation.
            </h1>

            <p className="font-reading text-lg sm:text-xl text-slate-300 max-w-2xl leading-relaxed">
              Led by seasoned courtroom advocates with extensive prosecution background across the Enforcement Directorate (ED), NCB, and central agencies. We advise corporations, business leaders, and individuals facing regulatory investigations, criminal trials, and appellate disputes before the Supreme Court and High Courts.
            </p>

            {/* Action Group */}
            <div className="flex flex-wrap items-center gap-5 pt-2 font-sans">
              <button
                onClick={onOpenConsultation}
                className="px-8 py-4 bg-[#A3702C] hover:bg-[#875A1E] text-[#FAF8F5] text-xs font-bold uppercase tracking-[0.16em] transition-all flex items-center gap-3 cursor-pointer shadow-sm active:translate-y-0.5"
              >
                <span>Schedule Case Briefing</span>
                <ArrowRight className="w-4 h-4 text-[#FAF8F5]" />
              </button>
              
              <a
                href="#practice-areas"
                className="px-8 py-4 bg-transparent hover:bg-white/5 text-[#FAF8F5] border border-[#DDD4C5]/30 hover:border-[#C79C5A] text-xs font-bold uppercase tracking-[0.16em] transition-all"
              >
                Practice Remit
              </a>
            </div>

            {/* Sub-text Citation */}
            <div className="pt-4 border-t border-[#1F263D] flex items-center gap-3 text-xs text-slate-400 font-sans">
              <span className="w-2 h-2 rounded-full bg-[#A3702C]" />
              <span>Direct Arguing Counsel — Direct Partner Engagement Throughout Trial</span>
            </div>

          </div>

          {/* Right Column: Physical Chamber Docket Card (Asymmetric Architectural Counterpoint) */}
          <div className="lg:col-span-5">
            <div className="bg-[#FAF8F5] text-[#111625] p-8 sm:p-10 border border-[#DDD4C5] shadow-docket relative">
              
              {/* Docket Header */}
              <div className="flex items-center justify-between pb-6 border-b border-[#DDD4C5] mb-6">
                <div>
                  <span className="font-title text-xs tracking-[0.2em] text-[#875A1E] uppercase block mb-1">
                    Judicial Registry Docket
                  </span>
                  <span className="font-mono text-xs font-bold text-[#111625] tracking-widest block">
                    NO. SC/238-PHC/2026
                  </span>
                </div>
                <div className="w-10 h-10 border border-[#875A1E] flex items-center justify-center text-[#875A1E]">
                  <Scale className="w-5 h-5" />
                </div>
              </div>

              {/* Ledger Entries */}
              <div className="space-y-5 text-xs font-sans">
                
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-[0.15em] text-slate-500 block mb-1">
                    Primary Chamber Seat
                  </span>
                  <p className="font-serif text-base font-bold text-[#111625] leading-snug">
                    Chamber No. 238, Patiala House Courts
                  </p>
                  <span className="text-slate-600 block mt-0.5">New Delhi – 110001 (Opp. NGMA)</span>
                </div>

                <div className="grid grid-cols-2 gap-4 pt-3 border-t border-[#E9E2D8]">
                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-[0.15em] text-slate-500 block mb-1">
                      Arguing Experience
                    </span>
                    <span className="font-serif text-sm font-bold text-[#111625] block">
                      Supreme Court &amp; High Courts
                    </span>
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-[0.15em] text-slate-500 block mb-1">
                      Agency Pedigree
                    </span>
                    <span className="font-serif text-sm font-bold text-[#111625] block">
                      Former Special Prosecutors
                    </span>
                  </div>
                </div>

                <div className="pt-3 border-t border-[#E9E2D8]">
                  <span className="text-[10px] uppercase font-bold tracking-[0.15em] text-slate-500 block mb-1">
                    Statutory Privilege Framework
                  </span>
                  <p className="text-xs text-slate-700 leading-relaxed font-normal">
                    Client communication protected under Sections 126–129 of the Indian Evidence Act, 1872. No public disclosure of matter specifics.
                  </p>
                </div>

                <div className="p-3.5 bg-[#F4EFEB] border border-[#DDD4C5] flex items-center justify-between mt-2">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
                    <span className="text-[11px] font-bold text-[#111625] uppercase tracking-wider">
                      Emergency Remand / Bail Desk
                    </span>
                  </div>
                  <span className="text-[11px] font-bold text-[#875A1E]">24/7 Available</span>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>

    </section>
  );
};
