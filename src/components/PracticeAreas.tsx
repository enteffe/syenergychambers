import React from 'react';
import { ArrowUpRight, Scale, ChevronRight } from 'lucide-react';
import { PRACTICE_AREAS, PracticeArea } from '../data/firmData';

interface PracticeAreasProps {
  onSelectPractice: (id: string) => void;
}

export const PracticeAreas: React.FC<PracticeAreasProps> = ({ onSelectPractice }) => {
  const romanNumerals = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'];

  return (
    <section id="practice-areas" className="bg-[#FAF8F5] py-20 lg:py-28 border-b border-[#DDD4C5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-[#DDD4C5] mb-12">
          <div>
            <span className="font-title text-xs tracking-[0.25em] text-[#875A1E] uppercase block mb-2">
              Practice Remit // Cause Classification
            </span>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-[52px] font-normal text-[#111625] tracking-tight">
              Courtroom Practice Domains
            </h2>
          </div>
          <p className="font-reading text-base text-slate-600 max-w-md leading-relaxed">
            Direct trial and appellate advocacy across special statutes, financial crimes, constitutional writs, and commercial arbitration.
          </p>
        </div>

        {/* The Judicial Cause-List Ledger */}
        <div className="divide-y divide-[#DDD4C5] border-b border-[#DDD4C5]">
          {PRACTICE_AREAS.map((practice, idx) => (
            <div
              key={practice.id}
              onClick={() => onSelectPractice(practice.id)}
              className="group py-7 sm:py-8 cursor-pointer transition-all duration-150 hover:bg-[#F4EFEB] px-4 sm:px-6 -mx-4 sm:-mx-6"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8 items-baseline">
                
                {/* Roman Numeral & Classification Code */}
                <div className="lg:col-span-3 flex items-baseline gap-4">
                  <span className="font-title text-base font-bold text-[#875A1E] tracking-wider w-8 shrink-0">
                    {romanNumerals[idx] || (idx + 1)}.
                  </span>
                  <span className="font-mono text-xs uppercase tracking-wider text-slate-500 font-semibold">
                    {practice.subtitle}
                  </span>
                </div>

                {/* Practice Area Title & Scope Summary */}
                <div className="lg:col-span-6 space-y-2">
                  <h3 className="font-display text-2xl sm:text-3xl text-[#111625] group-hover:text-[#875A1E] transition-colors leading-snug">
                    {practice.title}
                  </h3>
                  <p className="font-reading text-sm text-slate-600 leading-relaxed font-normal">
                    {practice.shortDesc}
                  </p>
                </div>

                {/* Primary Forums & Action Trigger */}
                <div className="lg:col-span-3 flex items-center justify-between lg:justify-end gap-4 pt-2 lg:pt-0">
                  <span className="font-sans text-[11px] font-medium text-slate-500 hidden sm:inline-block">
                    {practice.courtRepresentation[0] || 'High Courts & Special Benches'}
                  </span>
                  <div className="w-9 h-9 border border-[#DDD4C5] group-hover:border-[#875A1E] group-hover:bg-[#875A1E] group-hover:text-white flex items-center justify-center text-[#111625] transition-all shrink-0">
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
