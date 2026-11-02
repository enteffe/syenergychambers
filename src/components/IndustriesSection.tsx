import React from 'react';
import { ArrowRight, Landmark } from 'lucide-react';

export const IndustriesSection: React.FC = () => {
  const sectors = [
    {
      code: 'SEC-01',
      name: 'Banking & Financial Services',
      tribunals: 'ED • SFIO • NCLT • DRT',
      focus: 'PMLA inquiries, IBC corporate insolvency, Section 138 NI Act, forensic audit defense, and director liability litigation.'
    },
    {
      code: 'SEC-02',
      name: 'Infrastructure & Construction',
      tribunals: 'Arbitral Tribunals • High Court • Supreme Court',
      focus: 'High-value commercial arbitration, EPC contractual disputes, delay and liquidated damages claims, and public procurement writ petitions.'
    },
    {
      code: 'SEC-03',
      name: 'Telecommunications & Media',
      tribunals: 'TDSAT • High Court of Delhi',
      focus: 'Appellate representation before TDSAT, spectrum licensing disputes, digital intermediary liability, and contentious broadcasting litigation.'
    },
    {
      code: 'SEC-04',
      name: 'Real Estate & Urban Development',
      tribunals: 'RERA Authority • REAT • NCLT',
      focus: 'Commercial title trials, RERA regulatory adjudication, builder-buyer group litigation, land acquisition compensation, and developer defense.'
    },
    {
      code: 'SEC-05',
      name: 'Technology & Digital Commerce',
      tribunals: 'Special Cyber Courts • Commercial Courts',
      focus: 'Cyber crime investigations, intermediary safe-harbor compliance, data privacy litigation, and commercial intellectual property enforcement.'
    },
    {
      code: 'SEC-06',
      name: 'Pharmaceuticals & Healthcare',
      tribunals: 'State Licensing Authorities • Sessions Courts',
      focus: 'Drugs & Cosmetics Act inquiries, regulatory product seizures, prosecution defense, and clinical licensing challenges.'
    }
  ];

  return (
    <section id="industries" className="bg-[#FAF8F5] py-20 lg:py-28 border-b border-[#DDD4C5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Asymmetrical Layout: Left Briefing + Right Regulatory Ledger */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Sectoral Authority Statement */}
          <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-28">
            <span className="font-title text-xs tracking-[0.25em] text-[#875A1E] uppercase block">
              Regulatory Scope // Sector Representation
            </span>

            <h2 className="font-display text-4xl sm:text-5xl font-normal text-[#111625] leading-tight text-balance">
              Advising enterprises facing investigative &amp; commercial exposure.
            </h2>

            <p className="font-reading text-base text-slate-700 leading-relaxed font-normal">
              Heavily regulated industries operate under strict statutory scrutiny. Our practice bridges preventive compliance advisory with proactive trial advocacy before regulatory adjudicators, tribunals, and superior courts.
            </p>

            <div className="p-5 border border-[#DDD4C5] bg-[#F4EFEB] font-sans text-xs space-y-2">
              <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-[#875A1E] block">
                Tribunal Corridors
              </span>
              <p className="text-slate-700 leading-relaxed font-normal">
                Direct appearance counsel before NCLT, NCLAT, TDSAT, RERA, and PMLA Adjudicating Authorities in New Delhi and Chandigarh.
              </p>
            </div>
          </div>

          {/* Right Column: Regulatory Index Ledger (No generic card grid!) */}
          <div className="lg:col-span-7 divide-y divide-[#DDD4C5] border-t border-b border-[#DDD4C5]">
            {sectors.map((sector) => (
              <div key={sector.code} className="py-6 hover:bg-[#F4EFEB] transition-colors px-3 -mx-3">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-2">
                  <div className="flex items-baseline gap-3">
                    <span className="font-mono text-xs font-bold text-[#875A1E]">
                      {sector.code}
                    </span>
                    <h3 className="font-display text-xl sm:text-2xl font-bold text-[#111625]">
                      {sector.name}
                    </h3>
                  </div>
                  <span className="font-sans text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
                    {sector.tribunals}
                  </span>
                </div>
                
                <p className="font-reading text-sm text-slate-600 leading-relaxed pl-0 sm:pl-16">
                  {sector.focus}
                </p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
