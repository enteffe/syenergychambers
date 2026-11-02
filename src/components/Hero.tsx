import React from 'react';
import { 
  Scale, 
  ArrowRight, 
  CheckCircle2, 
  Shield, 
  Gavel,
  Landmark
} from 'lucide-react';
import { FIRM_DETAILS } from '../data/firmData';

interface HeroProps {
  onOpenConsultation: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenConsultation }) => {
  return (
    <section id="hero" className="relative min-h-[600px] lg:min-h-[660px] flex items-center justify-center bg-[#1c2445] text-white overflow-hidden py-20 lg:py-28">
      
      {/* Background Architectural & Courtroom Imagery with Dark Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center opacity-25 mix-blend-luminosity scale-105 transform transition-transform duration-1000"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=1920')`
        }}
      />

      {/* Layered Gradient Overlay for Signature Navy Tone */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#12172d]/95 via-[#1c2445]/90 to-[#283361]/85" />

      {/* Decorative Subtle Line Accents */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#CDB091]/30 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#CDB091]/20 to-transparent" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        
        {/* Subtle Gold Eyebrow Kicker */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-[#CDB091]/40 text-[#CDB091] text-xs font-bold uppercase tracking-[0.2em] backdrop-blur-sm">
          <Scale className="w-3.5 h-3.5" />
          <span>Chamber No. 238 • Patiala House Courts, New Delhi</span>
        </div>

        {/* Master Headline (Marcellus Serif, 50px-60px like krlegal.in) */}
        <h1 className="font-serif text-4xl sm:text-5xl lg:text-[56px] font-normal tracking-tight text-white leading-[1.18] max-w-4xl mx-auto">
          Trusted Counsel in High-Stakes Criminal &amp; Commercial Litigation
        </h1>

        {/* Narrative Subtitle (Matches K&R Legal) */}
        <p className="text-base sm:text-lg lg:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-normal">
          Led by seasoned courtroom advocates with extensive prosecution and defense experience across Enforcement Directorate (ED), NCB, SFIO, and trial benches, Synergy Chambers advises corporations, business leaders, and individuals facing high-impact investigations, prosecution, and complex litigation.
        </p>

        {/* Action Buttons (Matches K&R Legal styling) */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-3">
          <button
            onClick={onOpenConsultation}
            className="px-8 py-3.5 rounded-md bg-[#CDB091] hover:bg-[#b89874] text-[#1c2445] text-xs font-bold uppercase tracking-wider transition-all shadow-lg hover:shadow-xl flex items-center gap-2 cursor-pointer group font-sans"
          >
            <span>Consult Us</span>
            <ArrowRight className="w-4 h-4 text-[#1c2445] group-hover:translate-x-1 transition-transform" />
          </button>
          
          <a
            href="#practice-areas"
            className="px-8 py-3.5 rounded-md bg-transparent hover:bg-white/10 text-white border border-white/30 hover:border-[#CDB091] text-xs font-bold uppercase tracking-wider transition-all cursor-pointer font-sans"
          >
            Our Practice Areas
          </a>
        </div>

        {/* Value Highlights Pill Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs text-slate-300">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#CDB091]" />
            <span>Direct Arguing Counsel</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#CDB091]" />
            <span>Supreme Court &amp; High Court Appearances</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#CDB091]" />
            <span>Strict Evidence Act Privilege</span>
          </div>
        </div>

      </div>

    </section>
  );
};
