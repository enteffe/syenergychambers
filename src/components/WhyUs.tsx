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
      num: '01',
      title: "High-Stakes Litigation Focus",
      desc: "Concentrated trial and appellate practice tailored to complex criminal, white-collar, and commercial litigation.",
      icon: Scale
    },
    {
      num: '02',
      title: "Extensive Courtroom Appearances",
      desc: "Arguing counsel presence before the Supreme Court of India, Delhi High Court, and Punjab & Haryana High Court.",
      icon: Gavel
    },
    {
      num: '03',
      title: "Former Public Prosecutors",
      desc: "Procedural acumen gained from representing the Enforcement Directorate (ED), NCB, SFIO, and CBIC in complex trials.",
      icon: UserCheck
    },
    {
      num: '04',
      title: "Discreet & Confidential Counsel",
      desc: "Sensitive advisory protected under statutory attorney-client privilege pursuant to Sections 126–129, Indian Evidence Act.",
      icon: Lock
    },
    {
      num: '05',
      title: "Partner-Led Engagements",
      desc: "Every mandate is managed directly by senior counsel — from evidentiary discovery and pleadings to final arguments.",
      icon: ShieldCheck
    },
    {
      num: '06',
      title: "Chambers 238 & Regional Corridors",
      desc: "Direct base at Patiala House Courts in New Delhi with dedicated regional teams active across Chandigarh and Haryana.",
      icon: MapPin
    }
  ];

  return (
    <section id="why-us" className="py-20 lg:py-28 bg-[#1e274a] text-white relative overflow-hidden">
      
      {/* Background Subtle Accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#18203f] via-[#1e274a] to-[#141b36] opacity-90" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-[#CDB091] font-extrabold text-xs sm:text-sm uppercase tracking-[2px] mb-2">
            Distinctive Advantage
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] font-normal text-white tracking-tight">
            Why Synergy Chambers
          </h2>
          <div className="w-14 h-0.5 bg-[#CDB091] mx-auto mt-4" />
        </div>

        {/* 6-Grid Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {pillars.map((item) => {
            const Icon = item.icon;
            return (
              <div 
                key={item.num}
                className="bg-white/[0.04] border border-white/10 hover:border-[#CDB091]/60 rounded-2xl p-7 sm:p-8 transition-all duration-300 hover:bg-white/[0.07] hover:-translate-y-1 relative group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center text-[#CDB091] group-hover:scale-110 group-hover:bg-[#CDB091] group-hover:text-[#18203f] transition-all">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="font-mono text-sm font-bold text-[#CDB091]/70">
                      {item.num}
                    </span>
                  </div>
                  
                  <h3 className="font-serif text-xl font-bold text-white group-hover:text-[#CDB091] transition-colors leading-snug mb-3">
                    {item.title}
                  </h3>
                  
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
