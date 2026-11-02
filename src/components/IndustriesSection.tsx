import React from 'react';
import { 
  Building2, 
  HardHat, 
  Radio, 
  Home, 
  Cpu, 
  Pill, 
  Check 
} from 'lucide-react';

export const IndustriesSection: React.FC = () => {
  const industries = [
    {
      id: 'banking',
      title: 'Banking & Financial Services',
      desc: 'Advisory and trial defence under PMLA, IBC debt restructuring, SFIO corporate investigations, and recovery proceedings.',
      highlights: ['PMLA & Enforcement Directorate', 'IBC & NCLT Restructuring', 'SFIO Corporate Trials'],
      icon: Building2
    },
    {
      id: 'infrastructure',
      title: 'Infrastructure & Construction',
      desc: 'High-value commercial arbitration, EPC contractual disputes, and statutory tender litigation before appellate benches.',
      highlights: ['Domestic & Int. Arbitration', 'EPC Contractual Claims', 'Public Procurement Writs'],
      icon: HardHat
    },
    {
      id: 'telecom',
      title: 'Telecommunications & Media',
      desc: 'Regulatory litigation, spectrum and licensing disputes, and specialized representation before TDSAT and High Courts.',
      highlights: ['TDSAT Appellate Advocacy', 'Licensing & Spectrum Issues', 'Intermediary Liability'],
      icon: Radio
    },
    {
      id: 'real-estate',
      title: 'Real Estate & Urban Dev',
      desc: 'RERA compliance, builder-buyer litigation, land acquisition disputes, and title trial management across Delhi NCR.',
      highlights: ['RERA Tribunal & Appellate', 'Commercial Title Litigations', 'Land Acquisition Defense'],
      icon: Home
    },
    {
      id: 'tech',
      title: 'Technology & Digital Platforms',
      desc: 'Cyber crime investigations, data protection, digital intermediary liabilities, and intellectual property disputes.',
      highlights: ['Cyber Crime Inquiries', 'Intermediary Safe Harbor', 'Commercial IP Protection'],
      icon: Cpu
    },
    {
      id: 'pharma',
      title: 'Pharmaceuticals & Healthcare',
      desc: 'Drugs & Cosmetics Act inquiries, regulatory compliance actions, and licensing appeals across state and central authorities.',
      highlights: ['Drugs & Cosmetics Trials', 'Regulatory Inquiries', 'Clinical Licensing Appeals'],
      icon: Pill
    },
  ];

  return (
    <section id="industries" className="py-20 lg:py-28 bg-[#fbfbfb] border-b border-slate-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-[#CDB091] font-extrabold text-xs sm:text-sm uppercase tracking-[2px] mb-2">
            Sectoral Representation
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] font-normal text-[#283361] tracking-tight">
            Industries Served
          </h2>
          <p className="text-base text-slate-600 mt-3 font-normal leading-relaxed">
            Advising corporate enterprises and leaders across heavily regulated and high-risk commercial sectors.
          </p>
        </div>

        {/* 6-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {industries.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="bg-white border border-slate-200/90 hover:border-[#283361] rounded-[15px] p-7 sm:p-8 shadow-[0_4px_15px_rgba(0,0,0,0.02)] hover:shadow-[0_12px_30px_rgba(40,51,97,0.1)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#f5f7fc] border border-slate-100 flex items-center justify-center text-[#283361] group-hover:text-[#CDB091] group-hover:bg-[#283361] transition-all mb-5">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="font-serif text-lg sm:text-xl font-bold text-[#283361] uppercase tracking-[1px] mb-2.5">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal mb-5">
                    {item.desc}
                  </p>
                </div>

                {/* Sub-bullets for quick scannability */}
                <div className="pt-4 border-t border-slate-100 space-y-1.5">
                  {item.highlights.map((hl, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-slate-500">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#CDB091] shrink-0" />
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
