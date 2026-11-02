import React from 'react';
import { ArrowUpRight, Scale, ChevronRight } from 'lucide-react';
import { PRACTICE_AREAS, PracticeArea } from '../data/firmData';

interface PracticeAreasProps {
  onSelectPractice: (id: string) => void;
}

export const PracticeAreas: React.FC<PracticeAreasProps> = ({ onSelectPractice }) => {
  const romanNumerals = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'];

  return (
    <section id="practice-areas" className="bg-[#FAF8F5] py-14 sm:py-20 lg:py-24 border-b border-[#E5DDD0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        
        {/* Section Header with Balanced Negative Space */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 sm:pb-8 border-b border-[#E5DDD0] mb-10 sm:mb-12">
          <div className="max-w-2xl">
            <span className="font-title text-xs tracking-[0.28em] text-[#875A1E] uppercase block mb-2">
              Practice Remit // Cause Classification
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-[48px] font-normal text-[#111625] tracking-tight leading-[1.12]">
              Courtroom Practice Domains
            </h2>
          </div>
          <p className="font-reading text-sm sm:text-base text-slate-600 max-w-md leading-relaxed">
            Direct trial and appellate advocacy across special statutes, financial crimes, constitutional writs, and commercial arbitration.
          </p>
        </div>

        {/* The Judicial Cause-List Ledger with Balanced Row Heights */}
        <div className="divide-y divide-[#E5DDD0] border-b border-[#E5DDD0]">
          {PRACTICE_AREAS.map((practice, idx) => (
            <div
              key={practice.id}
              onClick={() => onSelectPractice(practice.id)}
              className="group py-6 sm:py-7 lg:py-8 cursor-pointer transition-all duration-200 hover:bg-[#F4EFEB] px-4 sm:px-6 -mx-4 sm:-mx-6"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-baseline">
                
                {/* Roman Numeral & Classification Code */}
                <div className="lg:col-span-3 flex items-baseline gap-5">
                  <span className="font-title text-base sm:text-lg font-bold text-[#875A1E] tracking-wider w-8 shrink-0">
                    {romanNumerals[idx] || (idx + 1)}.
                  </span>
                  <span className="font-mono text-xs uppercase tracking-wider text-slate-500 font-semibold">
                    {practice.subtitle}
                  </span>
                </div>

                {/* Practice Area Title & Scope Summary */}
                <div className="lg:col-span-6 space-y-3">
                  <h3 className="font-display text-2xl sm:text-3xl text-[#111625] group-hover:text-[#875A1E] transition-colors leading-snug">
                    {practice.title}
                  </h3>
                  <p className="font-reading text-sm sm:text-base text-slate-600 leading-relaxed font-normal max-w-xl">
                    {practice.shortDesc}
                  </p>
                </div>

                {/* Primary Forums & Action Trigger */}
                <div className="lg:col-span-3 flex items-center justify-between lg:justify-end gap-6 pt-3 lg:pt-0">
                  <span className="font-sans text-xs font-medium text-slate-500 hidden sm:inline-block">
                    {practice.courtRepresentation[0] || 'High Courts & Special Benches'}
                  </span>
                  <div className="w-10 h-10 border border-[#DDD4C5] group-hover:border-[#875A1E] group-hover:bg-[#875A1E] group-hover:text-white flex items-center justify-center text-[#111625] transition-all shrink-0">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
