import React from 'react';
import { 
  Building2, 
  HardHat, 
  Radio, 
  Home, 
  Cpu, 
  Pill, 
  Zap, 
  Factory 
} from 'lucide-react';

export const IndustriesSection: React.FC = () => {
  const industries = [
    {
      id: 'banking',
      title: 'Banking & Finance',
      desc: 'PMLA, IBC restructuring, SFIO proceedings, and debt recovery',
      icon: Building2
    },
    {
      id: 'infrastructure',
      title: 'Infrastructure & Construction',
      desc: 'High-value arbitration, EPC disputes, and public procurement',
      icon: HardHat
    },
    {
      id: 'telecom',
      title: 'Telecommunications',
      desc: 'Spectrum licensing, regulatory litigation, and TDSAT advocacy',
      icon: Radio
    },
    {
      id: 'real-estate',
      title: 'Real Estate & Urban Dev',
      desc: 'RERA disputes, land acquisition, title trials, and developer defence',
      icon: Home
    },
    {
      id: 'tech',
      title: 'Technology & Media',
      desc: 'Cyber investigations, IP enforcement, and digital intermediary liability',
      icon: Cpu
    },
    {
      id: 'pharma',
      title: 'Pharmaceuticals & Health',
      desc: 'Drugs & Cosmetics Act compliance, clinical regulatory actions',
      icon: Pill
    },
  ];

  return (
    <section id="industries" className="py-20 lg:py-28 bg-[#fdfdfd] border-b border-slate-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header (Matches K&R Legal) */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-[#CDB091] font-extrabold text-sm uppercase tracking-[2px] mb-2">
            Sectoral Representation
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] font-normal text-[#283361] tracking-tight">
            Industries Served
          </h2>
          <p className="text-base sm:text-lg text-slate-600 mt-3 font-normal">
            Advising clients across regulated and high-risk sectors
          </p>
        </div>

        {/* 6-Card Grid (Matches K&R Legal Cards with Marcellus uppercase typography) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {industries.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="bg-white border border-slate-200/80 hover:border-[#283361] rounded-[15px] p-8 sm:p-10 text-center shadow-[0_4px_15px_rgba(0,0,0,0.02)] hover:shadow-[0_12px_30px_rgba(40,51,97,0.12)] hover:-translate-y-2 transition-all duration-300 flex flex-col items-center justify-center min-h-[220px] group"
              >
                <div className="w-14 h-14 rounded-full bg-[#f8f9fc] flex items-center justify-center text-[#283361] group-hover:text-[#CDB091] group-hover:bg-[#283361] transition-all mb-5">
                  <Icon className="w-7 h-7" />
                </div>

                <span className="font-serif text-lg sm:text-xl font-bold text-[#283361] uppercase tracking-[1.2px] block mb-2 group-hover:text-[#283361]">
                  {item.title}
                </span>

                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-normal max-w-xs">
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
