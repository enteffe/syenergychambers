import React from 'react';
import { Landmark, ArrowRight, ShieldCheck, Scale, CheckCircle2 } from 'lucide-react';
import { FIRM_DETAILS } from '../data/firmData';

export const AboutFirm: React.FC = () => {
  return (
    <section id="about" className="py-20 lg:py-28 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Advocate Portrait in Rounded Card with Floating Chamber Badge */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative max-w-md w-full">
              <div className="overflow-hidden rounded-[15px] shadow-[0_12px_36px_rgba(0,0,0,0.12)] border border-slate-200/80 bg-slate-900">
                <img
                  src="https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&q=80&w=1200"
                  alt="Synergy Chambers Advocacy"
                  className="w-full h-[460px] sm:h-[520px] object-cover object-top hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
              </div>

              {/* Refined Gold Floating Badge */}
              <div className="absolute -bottom-5 -left-5 bg-[#283361] text-white p-4 sm:p-5 rounded-xl shadow-xl border border-[#CDB091]/30 hidden sm:flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-[#CDB091]">
                  <Landmark className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-base font-bold text-white block leading-tight font-serif">
                    Chamber 238
                  </span>
                  <span className="text-[11px] text-[#CDB091] font-medium uppercase tracking-wider">
                    Patiala House Courts, New Delhi
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Scannable Copy with Clear Subsections */}
          <div className="lg:col-span-7 lg:ps-4 space-y-6">
            
            <div>
              <p className="text-[#CDB091] font-extrabold text-xs sm:text-sm uppercase tracking-[2px] mb-1.5">
                Institutional Profile
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] font-normal text-[#283361] leading-tight">
                Synergy Chambers
              </h2>
            </div>

            <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
              A New Delhi litigation and regulatory practice focused on high-stakes criminal trials, agency investigations, and complex commercial disputes.
            </p>

            {/* 3 Structured Pillars (Scannable, Easy-to-read) */}
            <div className="space-y-4 pt-1">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 flex items-start gap-3.5">
                <div className="w-8 h-8 rounded-lg bg-[#283361] text-[#CDB091] flex items-center justify-center shrink-0 mt-0.5">
                  <Landmark className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-[#283361] mb-0.5">
                    Trial-First Heritage at Patiala House Courts
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    Located at Chamber 238 at the heart of New Delhi's trial judiciary — facilitating immediate intervention for remand hearings, bail listings, and evidentiary trials.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 flex items-start gap-3.5">
                <div className="w-8 h-8 rounded-lg bg-[#283361] text-[#CDB091] flex items-center justify-center shrink-0 mt-0.5">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-[#283361] mb-0.5">
                    Former Agency &amp; Prosecutorial Acumen
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    Rare procedural insight derived from extensive experience assisting Special Prosecutors in matters under PMLA, NDPS, PC Act, SFIO, and CBIC.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 flex items-start gap-3.5">
                <div className="w-8 h-8 rounded-lg bg-[#283361] text-[#CDB091] flex items-center justify-center shrink-0 mt-0.5">
                  <Scale className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-[#283361] mb-0.5">
                    Multi-Forum Courtroom Corridor
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    Seamless arguing counsel presence across Delhi District Courts, Delhi High Court, Punjab &amp; Haryana High Court at Chandigarh, and specialized tribunals.
                  </p>
                </div>
              </div>
            </div>

            {/* Core Practice Principles (Checkmarks) */}
            <div className="pt-2 flex flex-wrap gap-x-6 gap-y-2 text-xs font-semibold text-slate-700">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#CDB091]" />
                Direct Arguing Counsel
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#CDB091]" />
                Strict Evidence Act Privilege
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#CDB091]" />
                Zero Associate Layering
              </span>
            </div>

            <div className="pt-2">
              <a
                href="#team"
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#283361] hover:text-[#CDB091] transition-colors"
              >
                <span>View Counsel Directory</span>
                <ArrowRight className="w-4 h-4 text-[#CDB091]" />
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
