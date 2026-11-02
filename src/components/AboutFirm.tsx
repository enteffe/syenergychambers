import React from 'react';
import { Landmark, ArrowRight, Shield, Award } from 'lucide-react';
import { FIRM_DETAILS } from '../data/firmData';

export const AboutFirm: React.FC = () => {
  return (
    <section id="about" className="py-20 lg:py-28 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Refined Photo with Rounded Corners and Shadow (Matches K&R Legal) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative max-w-md w-full">
              <div className="overflow-hidden rounded-[15px] shadow-[0_10px_30px_rgba(0,0,0,0.12)] border border-slate-100 bg-slate-900">
                <img
                  src="https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&q=80&w=1200"
                  alt="Synergy Chambers Advocacy"
                  className="w-full h-[450px] sm:h-[500px] object-cover object-top hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
              </div>

              {/* Refined Gold Floating Badge */}
              <div className="absolute -bottom-5 -left-5 bg-[#283361] text-white p-4 sm:p-5 rounded-xl shadow-xl border border-[#CDB091]/30 hidden sm:flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-[#CDB091]">
                  <Landmark className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-base font-bold text-white block leading-tight">
                    Chamber 238
                  </span>
                  <span className="text-[11px] text-[#CDB091] font-medium uppercase tracking-wider">
                    Patiala House Courts
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Text Content (Matches K&R Legal) */}
          <div className="lg:col-span-7 lg:ps-6 space-y-5">
            
            {/* K&R Legal Kicker Style */}
            <p className="text-[#CDB091] font-extrabold text-sm sm:text-base uppercase tracking-[2px]">
              About the Firm
            </p>

            {/* K&R Legal Heading Style (Navy #283361, ~40px) */}
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] font-normal text-[#283361] leading-tight">
              Synergy Chambers
            </h2>

            {/* Narrative Paragraphs */}
            <p className="text-base sm:text-[17px] text-slate-700 leading-relaxed font-normal">
              Synergy Chambers is a premier New Delhi–based boutique litigation and investigations practice focused on high-stakes criminal, regulatory, and commercial disputes.
            </p>

            <p className="text-base sm:text-[17px] text-slate-700 leading-relaxed font-normal">
              Operating directly from <strong className="font-semibold text-slate-900">Chamber No. 238, Patiala House Courts</strong>, with active regional corridors across Chandigarh and Haryana, our advocates have extensive experience advising corporations, business leaders, and individuals facing inquiries, prosecution, and complex litigation before the Supreme Court of India, Delhi High Court, Punjab &amp; Haryana High Court, and specialized tribunals.
            </p>

            <p className="text-base sm:text-[17px] text-slate-700 leading-relaxed font-normal">
              The firm combines strategic multi-forum advisory with aggressive courtroom advocacy in sensitive, high-impact matters.
            </p>

            {/* Quick Points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3">
              <div className="flex items-center gap-2.5 text-xs font-semibold text-slate-800">
                <span className="w-2 h-2 rounded-full bg-[#CDB091]" />
                <span>Partner-Led Trial Engagements</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs font-semibold text-slate-800">
                <span className="w-2 h-2 rounded-full bg-[#CDB091]" />
                <span>PMLA, NDPS &amp; CBI Special Courts</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs font-semibold text-slate-800">
                <span className="w-2 h-2 rounded-full bg-[#CDB091]" />
                <span>Commercial Arbitration &amp; NCLT</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs font-semibold text-slate-800">
                <span className="w-2 h-2 rounded-full bg-[#CDB091]" />
                <span>Immediate Remand &amp; Bail Intervention</span>
              </div>
            </div>

            <div className="pt-4">
              <a
                href="#team"
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#283361] hover:text-[#CDB091] transition-colors"
              >
                <span>Meet Our Trial Advocates</span>
                <ArrowRight className="w-4 h-4 text-[#CDB091]" />
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
