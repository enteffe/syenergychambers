import React from 'react';
import { 
  ShieldCheck, 
  Scale, 
  Gavel, 
  Lock, 
  UserCheck, 
  MapPin 
} from 'lucide-react';

export const WhyUs: React.FC = () => {
  const pillars = [
    {
      title: "High-Stakes Litigation Focus",
      desc: "Criminal, regulatory, and complex commercial disputes before special trial benches and appellate forums.",
      icon: Scale
    },
    {
      title: "Courtroom Experience",
      desc: "Extensive arguing appearances before the Supreme Court of India, Delhi High Court, and Punjab & Haryana High Court.",
      icon: Gavel
    },
    {
      title: "Former Agency Prosecutors",
      desc: "Firsthand procedural acumen having represented the Enforcement Directorate (ED), NCB, CBIC, and SFIO.",
      icon: UserCheck
    },
    {
      title: "Discreet Representation",
      desc: "Meticulous handling of sensitive, confidential, and high-impact investigative mandates under strict legal privilege.",
      icon: Lock
    },
    {
      title: "Partner-Led Engagement",
      desc: "Direct partner involvement in every mandate — from initial strategy and evidentiary analysis to final arguments.",
      icon: ShieldCheck
    },
    {
      title: "Patiala House & Regional Reach",
      desc: "Chamber No. 238 at Patiala House Courts in New Delhi, coupled with active regional counsel in Chandigarh and Haryana.",
      icon: MapPin
    }
  ];

  return (
    <section id="why-us" className="py-20 lg:py-28 bg-[#283361] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header (Matches K&R Legal) */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-[#CDB091] font-extrabold text-sm uppercase tracking-[2px] mb-2">
            Institutional Rigor
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] font-normal text-white tracking-tight">
            Why Synergy Chambers
          </h2>
          <div className="w-16 h-0.5 bg-[#CDB091] mx-auto mt-4" />
        </div>

        {/* 6-Grid Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {pillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx}
                className="text-center space-y-3 p-6 rounded-xl hover:bg-white/5 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-[#CDB091] mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6" />
                </div>
                
                <h3 className="font-serif text-xl sm:text-[22px] font-bold text-white group-hover:text-[#CDB091] transition-colors leading-snug">
                  {item.title}
                </h3>
                
                <p className="text-sm sm:text-[15px] text-slate-300 leading-relaxed font-normal">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
