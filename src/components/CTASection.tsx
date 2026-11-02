import React from 'react';
import { ArrowRight, Phone, Shield } from 'lucide-react';

interface CTASectionProps {
  onOpenConsultation: () => void;
}

export const CTASection: React.FC<CTASectionProps> = ({ onOpenConsultation }) => {
  return (
    <section className="py-16 sm:py-20 bg-[#fbfbfb] border-b border-slate-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#283361] rounded-2xl p-8 sm:p-12 lg:p-14 text-white shadow-xl relative overflow-hidden">
          
          {/* Subtle Background Accent */}
          <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-gradient-to-l from-white/5 to-transparent pointer-events-none" />

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            
            <div className="space-y-3 text-center md:text-left max-w-2xl">
              <span className="text-[#CDB091] font-bold text-xs uppercase tracking-[2px] block">
                Chamber 238 • Patiala House Courts
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-normal text-white leading-tight">
                Need Strategic Counsel on a High-Stakes Dispute?
              </h2>
              <p className="text-sm sm:text-base text-slate-300 font-normal leading-relaxed">
                Connect with our arguing counsel for confidential trial defense, urgent bail listings, and appellate strategy.
              </p>
            </div>

            <div className="shrink-0">
              <button
                onClick={onOpenConsultation}
                className="inline-flex items-center gap-3 px-8 py-4 rounded-md bg-[#CDB091] hover:bg-[#b89874] text-[#1c2445] text-xs font-bold uppercase tracking-wider transition-all shadow-lg hover:shadow-xl cursor-pointer font-sans group"
              >
                <span>Get In Touch</span>
                <ArrowRight className="w-4 h-4 text-[#1c2445] group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
