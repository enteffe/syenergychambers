import React from 'react';
import { ArrowRight, Lock, ShieldCheck } from 'lucide-react';

interface CTASectionProps {
  onOpenConsultation: () => void;
}

export const CTASection: React.FC<CTASectionProps> = ({ onOpenConsultation }) => {
  return (
    <section className="py-16 sm:py-20 bg-[#fbfbfb] border-b border-slate-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#1b2346] rounded-2xl p-8 sm:p-12 lg:p-14 text-white shadow-xl relative overflow-hidden border border-white/10">
          
          {/* Subtle Background Accent */}
          <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-gradient-to-l from-white/5 to-transparent pointer-events-none" />

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            
            <div className="space-y-3 text-center md:text-left max-w-2xl">
              <span className="text-[#CDB091] font-bold text-xs uppercase tracking-[2px] block">
                Chamber 238 • Patiala House Courts
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-normal text-white leading-tight">
                Facing an Urgent Investigation or High-Stakes Dispute?
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 font-normal leading-relaxed">
                Connect directly with arguing counsel for emergency remand listings, special statute bail defense, or commercial trial representation. All inquiries are strictly privileged under Indian law.
              </p>
            </div>

            <div className="shrink-0">
              <button
                onClick={onOpenConsultation}
                className="inline-flex items-center gap-3 px-8 py-4 rounded-md bg-[#CDB091] hover:bg-[#b89874] text-[#12172d] text-xs font-bold uppercase tracking-wider transition-all shadow-lg hover:shadow-xl cursor-pointer font-sans group border border-[#e2caa8]"
              >
                <Lock className="w-3.5 h-3.5 text-[#12172d]/80" />
                <span>Request Consultation</span>
                <ArrowRight className="w-4 h-4 text-[#12172d] group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
