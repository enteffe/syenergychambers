import React from 'react';
import { ArrowRight, Scale, ChevronRight } from 'lucide-react';
import { PRACTICE_AREAS, PracticeArea } from '../data/firmData';

interface PracticeAreasProps {
  onSelectPractice: (id: string) => void;
}

export const PracticeAreas: React.FC<PracticeAreasProps> = ({ onSelectPractice }) => {
  return (
    <section id="practice-areas" className="py-20 lg:py-28 bg-white border-b border-slate-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <p className="text-[#CDB091] font-extrabold text-xs sm:text-sm uppercase tracking-[2px] mb-2">
              Practice Domains
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] font-normal text-[#283361] tracking-tight">
              Our Practice Areas
            </h2>
          </div>
          <p className="text-sm text-slate-500 max-w-md font-normal leading-relaxed">
            Direct courtroom advocacy across special trial courts, commercial arbitration tribunals, and constitutional writ benches.
          </p>
        </div>

        {/* Service Rows (Polished K&R Legal Style) */}
        <div className="space-y-3 divide-y divide-slate-100">
          {PRACTICE_AREAS.map((practice) => (
            <div
              key={practice.id}
              onClick={() => onSelectPractice(practice.id)}
              className="group pt-6 pb-6 cursor-pointer transition-all duration-200 hover:bg-[#fcfbfa] px-3 sm:px-6 rounded-xl border border-transparent hover:border-slate-200/70"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                
                {/* Left Group */}
                <div className="space-y-2 max-w-3xl">
                  <div className="flex items-center gap-3">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#CDB091] px-2.5 py-0.5 rounded-full bg-[#fdfaf6] border border-[#CDB091]/30">
                      {practice.subtitle}
                    </span>
                  </div>

                  <h3 className="font-serif text-xl sm:text-2xl text-[#283361] group-hover:text-[#CDB091] transition-colors leading-snug">
                    {practice.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed font-normal">
                    {practice.shortDesc}
                  </p>

                  {/* Quick Services Preview Badges */}
                  <div className="flex flex-wrap gap-2 pt-1">
                    {practice.keyServices.slice(0, 3).map((svc, idx) => (
                      <span key={idx} className="text-[11px] text-slate-500 bg-slate-50 px-2 py-0.5 rounded border border-slate-100">
                        {svc}
                      </span>
                    ))}
                    {practice.keyServices.length > 3 && (
                      <span className="text-[11px] text-[#CDB091] font-semibold">
                        +{practice.keyServices.length - 3} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Right Arrow Link with Gold Styling */}
                <div className="shrink-0 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#CDB091] group-hover:text-[#283361] transition-colors self-end sm:self-center">
                  <span className="hidden md:inline">View Scope</span>
                  <div className="w-10 h-10 rounded-full border border-slate-200 group-hover:border-[#CDB091] group-hover:bg-[#CDB091]/10 flex items-center justify-center transition-all">
                    <ArrowRight className="w-4 h-4 text-[#CDB091] group-hover:translate-x-1 transition-transform" />
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
