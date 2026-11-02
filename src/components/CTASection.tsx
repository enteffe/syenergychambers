import React from 'react';
import { ArrowRight, Lock } from 'lucide-react';

interface CTASectionProps {
  onOpenConsultation: () => void;
}

export const CTASection: React.FC<CTASectionProps> = ({ onOpenConsultation }) => {
  return (
    <section className="py-16 sm:py-20 bg-[#FAF8F5] border-b border-[#DDD4C5]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#111625] p-8 sm:p-12 lg:p-14 text-[#FAF8F5] shadow-docket relative overflow-hidden border border-[#2C3652]">
          
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            
            <div className="space-y-3 text-center md:text-left max-w-2xl">
              <span className="font-title text-xs tracking-[0.22em] text-[#C79C5A] uppercase block">
                Chamber No. 238 • Patiala House Courts
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-normal text-white leading-tight">
                Facing an Urgent Agency Notice or Special Court Listing?
              </h2>
              <p className="font-reading text-sm sm:text-base text-slate-300 font-normal leading-relaxed">
                Connect directly with arguing counsel for emergency remand listings, PMLA inquiries, or High Court trial strategy. Disclosures are protected under statutory privilege.
              </p>
            </div>

            <div className="shrink-0 font-sans">
              <button
                onClick={onOpenConsultation}
                className="inline-flex items-center gap-3 px-8 py-4 bg-[#A3702C] hover:bg-[#875A1E] text-white text-xs font-bold uppercase tracking-[0.15em] transition-all cursor-pointer shadow-sm active:translate-y-0.5"
              >
                <Lock className="w-3.5 h-3.5 text-white/90" />
                <span>Schedule Briefing</span>
                <ArrowRight className="w-4 h-4 text-white" />
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
