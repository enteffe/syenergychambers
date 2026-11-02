import React from 'react';
import { 
  Scale, 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  Lock,
  Landmark,
  FileCheck
} from 'lucide-react';
import { FIRM_DETAILS } from '../data/firmData';

interface HeroProps {
  onOpenConsultation: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenConsultation }) => {
  return (
    <section id="hero" className="relative min-h-[620px] lg:min-h-[680px] flex items-center justify-center bg-[#151c38] text-white overflow-hidden py-24 lg:py-32">
      
      {/* Background Architectural & Courtroom Imagery with Layered Depth */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center opacity-20 mix-blend-luminosity scale-105"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=1920')`
        }}
      />

      {/* Layered Gradient Overlay for Signature Trust Navy */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#101528]/95 via-[#1a2345]/90 to-[#222b54]/95" />

      {/* Subtle Grid / Line Pattern */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        
        {/* Authoritative Gold Eyebrow Kicker */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/5 border border-[#CDB091]/35 text-[#CDB091] text-xs font-semibold uppercase tracking-[0.18em] backdrop-blur-sm shadow-sm">
          <Scale className="w-3.5 h-3.5 text-[#CDB091]" />
          <span>Chamber No. 238 • Patiala House Courts, New Delhi</span>
        </div>

        {/* Master Display Headline (Marcellus Serif) */}
        <h1 className="font-serif text-4xl sm:text-5xl lg:text-[58px] font-normal tracking-tight text-white leading-[1.16] max-w-4xl mx-auto text-balance">
          Trusted Counsel in High-Stakes Criminal &amp; Commercial Litigation
        </h1>

        {/* Refined, Concise Narrative Subtitle */}
        <p className="text-base sm:text-lg lg:text-[19px] text-slate-200/90 max-w-3xl mx-auto leading-relaxed font-normal">
          Operating from Chamber 238, Patiala House Courts, with active regional corridors across Chandigarh and Haryana. We advise corporations, business leaders, and individuals facing regulatory investigations, criminal trials, and appellate disputes before the Supreme Court, High Courts, and Special Tribunals.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <button
            onClick={onOpenConsultation}
            className="px-8 py-4 rounded-md bg-[#CDB091] hover:bg-[#b89874] text-[#12172d] text-xs font-bold uppercase tracking-wider transition-all shadow-lg hover:shadow-xl flex items-center gap-2.5 cursor-pointer group font-sans border border-[#e2caa8]"
          >
            <Lock className="w-3.5 h-3.5 text-[#12172d]/80" />
            <span>Schedule a Consultation</span>
            <ArrowRight className="w-4 h-4 text-[#12172d] group-hover:translate-x-1 transition-transform" />
          </button>
          
          <a
            href="#practice-areas"
            className="px-8 py-4 rounded-md bg-white/5 hover:bg-white/10 text-white border border-white/20 hover:border-[#CDB091]/60 text-xs font-bold uppercase tracking-wider transition-all cursor-pointer font-sans backdrop-blur-xs"
          >
            Explore Practice Areas
          </a>
        </div>

        {/* Institutional Trust Indicators */}
        <div className="pt-8 border-t border-white/10 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs text-slate-300">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#CDB091] shrink-0" />
            <span className="font-medium">Direct Arguing Counsel</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#CDB091] shrink-0" />
            <span className="font-medium">Supreme Court &amp; High Court Benches</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#CDB091] shrink-0" />
            <span className="font-medium">Confidential Under Sec. 126 Evidence Act</span>
          </div>
        </div>

      </div>

    </section>
  );
};
