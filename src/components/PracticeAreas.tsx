import React from 'react';
import { ArrowRight } from 'lucide-react';
import { PRACTICE_AREAS, PracticeArea } from '../data/firmData';

interface PracticeAreasProps {
  onSelectPractice: (id: string) => void;
}

export const PracticeAreas: React.FC<PracticeAreasProps> = ({ onSelectPractice }) => {
  return (
    <section id="practice-areas" className="py-20 lg:py-28 bg-white border-b border-slate-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header (K&R Legal Style) */}
        <div className="mb-12">
          <p className="text-[#CDB091] font-extrabold text-sm uppercase tracking-[2px] mb-2">
            Areas of Expertise
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] font-normal text-[#283361] tracking-tight">
            Our Practice Areas
          </h2>
        </div>

        {/* Service All Items: Signature K&R Legal Horizontal Row Cards */}
        <div className="space-y-2 divide-y divide-slate-100">
          {PRACTICE_AREAS.map((practice) => (
            <div
              key={practice.id}
              onClick={() => onSelectPractice(practice.id)}
              className="group py-6 sm:py-8 cursor-pointer transition-all duration-200 hover:bg-[#fcfbfa] px-3 sm:px-6 rounded-xl"
            >
              <div className="flex items-center justify-between gap-6">
                
                {/* Left Group */}
                <div className="space-y-2 max-w-3xl">
                  <h3 className="font-serif text-xl sm:text-2xl text-[#283361] group-hover:text-[#CDB091] transition-colors leading-snug">
                    {practice.title}
                  </h3>
                  <p className="text-sm sm:text-[15px] text-slate-600 leading-relaxed font-normal">
                    {practice.shortDesc}
                  </p>
                </div>

                {/* Right Arrow Link with Gold Styling */}
                <div className="shrink-0 flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-slate-200 group-hover:border-[#CDB091] group-hover:bg-[#CDB091]/10 transition-all">
                  <ArrowRight className="w-5 h-5 text-[#CDB091] group-hover:translate-x-1 transition-transform" />
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
