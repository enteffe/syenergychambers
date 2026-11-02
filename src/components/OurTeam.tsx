import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { FOUNDERS, CHANDIGARH_TEAM, HARYANA_TEAM, Lawyer } from '../data/firmData';

interface OurTeamProps {
  onSelectLawyer: (id: string) => void;
}

export const OurTeam: React.FC<OurTeamProps> = ({ onSelectLawyer }) => {
  const [filter, setFilter] = useState<'all' | 'founders' | 'chandigarh' | 'haryana'>('all');

  const allLawyers: Lawyer[] = [...FOUNDERS, ...CHANDIGARH_TEAM, ...HARYANA_TEAM];

  const filteredLawyers = filter === 'all' 
    ? allLawyers 
    : filter === 'founders'
    ? FOUNDERS
    : filter === 'chandigarh'
    ? CHANDIGARH_TEAM
    : HARYANA_TEAM;

  return (
    <section id="team" className="bg-[#FAF8F5] py-14 sm:py-20 lg:py-24 border-b border-[#E5DDD0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        
        {/* Section Header with Balanced Negative Space */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 sm:pb-8 border-b border-[#E5DDD0] mb-10 sm:mb-12">
          <div>
            <span className="font-title text-xs tracking-[0.28em] text-[#875A1E] uppercase block mb-2">
              Chambers Advocates // Counsel Roster
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-[48px] font-normal text-[#111625] tracking-tight leading-[1.12]">
              Courtroom Advocates &amp; Bench Counsel
            </h2>
          </div>
          
          {/* Filter Ledger Tabs */}
          <div className="flex flex-wrap gap-2.5 font-sans text-xs">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-2 border transition-all cursor-pointer font-semibold uppercase tracking-wider ${
                filter === 'all'
                  ? 'bg-[#111625] text-[#FAF8F5] border-[#111625]'
                  : 'bg-white text-slate-700 border-[#E5DDD0] hover:border-[#875A1E]'
              }`}
            >
              All Counsel ({allLawyers.length})
            </button>
            <button
              onClick={() => setFilter('founders')}
              className={`px-4 py-2 border transition-all cursor-pointer font-semibold uppercase tracking-wider ${
                filter === 'founders'
                  ? 'bg-[#111625] text-[#FAF8F5] border-[#111625]'
                  : 'bg-white text-slate-700 border-[#E5DDD0] hover:border-[#875A1E]'
              }`}
            >
              Patiala House ({FOUNDERS.length})
            </button>
            <button
              onClick={() => setFilter('chandigarh')}
              className={`px-4 py-2 border transition-all cursor-pointer font-semibold uppercase tracking-wider ${
                filter === 'chandigarh'
                  ? 'bg-[#111625] text-[#FAF8F5] border-[#111625]'
                  : 'bg-white text-slate-700 border-[#E5DDD0] hover:border-[#875A1E]'
              }`}
            >
              Chandigarh ({CHANDIGARH_TEAM.length})
            </button>
            <button
              onClick={() => setFilter('haryana')}
              className={`px-4 py-2 border transition-all cursor-pointer font-semibold uppercase tracking-wider ${
                filter === 'haryana'
                  ? 'bg-[#111625] text-[#FAF8F5] border-[#111625]'
                  : 'bg-white text-slate-700 border-[#E5DDD0] hover:border-[#875A1E]'
              }`}
            >
              Haryana ({HARYANA_TEAM.length})
            </button>
          </div>
        </div>

        {/* Counsel Registry Table / Grid with Breathing Room */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {filteredLawyers.map((lawyer) => (
            <div
              key={lawyer.id}
              onClick={() => onSelectLawyer(lawyer.id)}
              className="bg-white border border-[#E5DDD0] p-8 shadow-md hover:border-[#875A1E] transition-all cursor-pointer flex flex-col justify-between group"
            >
              <div>
                <div className="h-72 w-full overflow-hidden bg-[#111625] mb-6">
                  <img
                    src={lawyer.imageUrl}
                    alt={lawyer.name}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                    loading="lazy"
                  />
                </div>

                <span className="font-title text-[11px] uppercase tracking-[0.2em] text-[#875A1E] block mb-1.5">
                  {lawyer.role}
                </span>

                <h3 className="font-display text-2xl font-bold text-[#111625] group-hover:text-[#875A1E] transition-colors mb-3 leading-snug">
                  {lawyer.name}
                </h3>

                <p className="font-reading text-sm text-slate-600 line-clamp-2 leading-relaxed mb-6 font-normal">
                  {lawyer.bio}
                </p>
              </div>

              <div className="pt-4 border-t border-[#EFE9DF] flex items-center justify-between text-xs font-sans">
                <span className="text-slate-500 text-[11px]">
                  {lawyer.location.includes('Patiala House') ? 'New Delhi' : lawyer.location.includes('Chandigarh') ? 'Chandigarh' : 'Haryana'}
                </span>
                <span className="font-bold text-[#875A1E] uppercase tracking-wider text-[11px] flex items-center gap-1 group-hover:underline">
                  Dossier <ArrowRight className="w-3 h-3" />
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
