import React from 'react';
import { Scale, Gavel, Landmark, FileText } from 'lucide-react';

export const FunFacts: React.FC = () => {
  return (
    <section className="bg-[#FAF8F5] border-b border-[#E5DDD0] py-14 sm:py-18 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        
        {/* Asymmetrical Ledger: Left Anchor + Right Data Rows */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 xl:gap-20 items-start">
          
          {/* Left Column: Visual Anchor (Monumental Metric with Peaceful Margins) */}
          <div className="lg:col-span-5 space-y-6">
            <span className="font-title text-xs uppercase tracking-[0.25em] text-[#875A1E] block">
              Cumulative Trial Heritage
            </span>
            <div className="flex items-baseline gap-4">
              <span className="font-display text-7xl sm:text-8xl font-normal text-[#111625] leading-none">
                25+
              </span>
              <span className="font-title text-2xl text-[#875A1E] tracking-wider uppercase font-semibold">
                Years
              </span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#111625] leading-snug pt-2">
              Trial depth across Special Statutes, Agency Inquiries &amp; Appellate Benches.
            </h2>
            <p className="font-reading text-base sm:text-lg text-slate-600 leading-relaxed sm:leading-loose">
              Litigation experience forged in high-stakes criminal proceedings, agency prosecutions, commercial arbitrations, and constitutional challenges before superior courts.
            </p>
          </div>

          {/* Right Column: High-Density Cause-Ledger Table with Restful Spacing */}
          <div className="lg:col-span-7 divide-y divide-[#E5DDD0] border-t border-b border-[#E5DDD0] font-sans">
            
            <div className="py-5 sm:py-6 flex flex-col sm:flex-row sm:items-baseline justify-between gap-3">
              <div className="sm:w-2/5">
                <span className="font-title text-sm font-bold uppercase tracking-[0.14em] text-[#111625] block">
                  Superior Forums
                </span>
                <span className="text-[11px] text-[#875A1E] uppercase tracking-wider block mt-0.5">
                  Appellate Jurisprudence
                </span>
              </div>
              <div className="sm:w-3/5">
                <p className="text-sm font-reading text-slate-600 leading-relaxed">
                  Regular appearances before the Supreme Court of India, Delhi High Court, and Punjab &amp; Haryana High Court in appeals, revisions, and writ petitions.
                </p>
              </div>
            </div>

            <div className="py-5 sm:py-6 flex flex-col sm:flex-row sm:items-baseline justify-between gap-3">
              <div className="sm:w-2/5">
                <span className="font-title text-sm font-bold uppercase tracking-[0.14em] text-[#111625] block">
                  700+ Matters
                </span>
                <span className="text-[11px] text-[#875A1E] uppercase tracking-wider block mt-0.5">
                  Docketed &amp; Argued
                </span>
              </div>
              <div className="sm:w-3/5">
                <p className="text-sm font-reading text-slate-600 leading-relaxed">
                  Extensive trial representation in complex white-collar crimes, PMLA proceedings, NDPS trials, POCSO special courts, and high-value contractual disputes.
                </p>
              </div>
            </div>

            <div className="py-5 sm:py-6 flex flex-col sm:flex-row sm:items-baseline justify-between gap-3">
              <div className="sm:w-2/5">
                <span className="font-title text-sm font-bold uppercase tracking-[0.14em] text-[#111625] block">
                  Central Agency Pedigree
                </span>
                <span className="text-[11px] text-[#875A1E] uppercase tracking-wider block mt-0.5">
                  Prosecutorial Acumen
                </span>
              </div>
              <div className="sm:w-3/5">
                <p className="text-sm font-reading text-slate-600 leading-relaxed">
                  Firsthand experience assisting Special Public Prosecutors for the Narcotics Control Bureau (NCB), Enforcement Directorate (ED), SFIO, and CBIC.
                </p>
              </div>
            </div>

            <div className="py-5 sm:py-6 flex flex-col sm:flex-row sm:items-baseline justify-between gap-3">
              <div className="sm:w-2/5">
                <span className="font-title text-sm font-bold uppercase tracking-[0.14em] text-[#111625] block">
                  Patiala House Chamber 238
                </span>
                <span className="text-[11px] text-[#875A1E] uppercase tracking-wider block mt-0.5">
                  Physical Courtroom Base
                </span>
              </div>
              <div className="sm:w-3/5">
                <p className="text-sm font-reading text-slate-600 leading-relaxed">
                  Permanent trial chambers situated in the Patiala House Courts complex, enabling immediate attendance for remand hearings and urgent listing motions.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
