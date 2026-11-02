import React, { useState } from 'react';
import { ArrowRight, MapPin, Scale, GraduationCap } from 'lucide-react';
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

  // Primary Featured Counsel: Akshay Chauhan (Co-Founder & Former Special Prosecutor Assistant)
  const featuredCounsel = FOUNDERS[0];
  const remainingLawyers = filteredLawyers.filter(l => filter !== 'founders' || l.id !== featuredCounsel.id);

  return (
    <section id="team" className="bg-[#FAF8F5] py-20 lg:py-28 border-b border-[#DDD4C5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-[#DDD4C5] mb-12">
          <div>
            <span className="font-title text-xs tracking-[0.25em] text-[#875A1E] uppercase block mb-2">
              Chambers Advocates // Counsel Roster
            </span>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-[52px] font-normal text-[#111625] tracking-tight">
              Courtroom Advocates &amp; Bench Counsel
            </h2>
          </div>
          
          {/* Filter Ledger Tabs */}
          <div className="flex flex-wrap gap-2 font-sans text-xs">
            <button
              onClick={() => setFilter('all')}
              className={`px-3 py-1.5 border transition-all cursor-pointer font-semibold uppercase tracking-wider ${
                filter === 'all'
                  ? 'bg-[#111625] text-[#FAF8F5] border-[#111625]'
                  : 'bg-white text-slate-700 border-[#DDD4C5] hover:border-[#875A1E]'
              }`}
            >
              All Counsel ({allLawyers.length})
            </button>
            <button
              onClick={() => setFilter('founders')}
              className={`px-3 py-1.5 border transition-all cursor-pointer font-semibold uppercase tracking-wider ${
                filter === 'founders'
                  ? 'bg-[#111625] text-[#FAF8F5] border-[#111625]'
                  : 'bg-white text-slate-700 border-[#DDD4C5] hover:border-[#875A1E]'
              }`}
            >
              Patiala House ({FOUNDERS.length})
            </button>
            <button
              onClick={() => setFilter('chandigarh')}
              className={`px-3 py-1.5 border transition-all cursor-pointer font-semibold uppercase tracking-wider ${
                filter === 'chandigarh'
                  ? 'bg-[#111625] text-[#FAF8F5] border-[#111625]'
                  : 'bg-white text-slate-700 border-[#DDD4C5] hover:border-[#875A1E]'
              }`}
            >
              Chandigarh ({CHANDIGARH_TEAM.length})
            </button>
            <button
              onClick={() => setFilter('haryana')}
              className={`px-3 py-1.5 border transition-all cursor-pointer font-semibold uppercase tracking-wider ${
                filter === 'haryana'
                  ? 'bg-[#111625] text-[#FAF8F5] border-[#111625]'
                  : 'bg-white text-slate-700 border-[#DDD4C5] hover:border-[#875A1E]'
              }`}
            >
              Haryana ({HARYANA_TEAM.length})
            </button>
          </div>
        </div>

        {/* Featured Master Dossier: Akshay Chauhan (Visual Anchor) */}
        {filter === 'all' && (
          <div 
            onClick={() => onSelectLawyer(featuredCounsel.id)}
            className="mb-14 p-8 sm:p-10 border border-[#DDD4C5] bg-white shadow-folio cursor-pointer hover:border-[#875A1E] transition-all group"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              <div className="lg:col-span-4">
                <div className="h-80 sm:h-96 w-full overflow-hidden bg-[#111625] relative">
                  <img
                    src={featuredCounsel.imageUrl}
                    alt={featuredCounsel.name}
                    className="w-full h-full object-cover object-top filter grayscale contrast-105 group-hover:grayscale-0 transition-all duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 bg-[#111625] text-[#C79C5A] px-2.5 py-1 text-[10px] font-title uppercase tracking-widest">
                    Featured Trial Counsel
                  </div>
                </div>
              </div>

              <div className="lg:col-span-8 space-y-4">
                <div>
                  <span className="font-title text-xs uppercase tracking-[0.2em] text-[#875A1E] block mb-1">
                    {featuredCounsel.role} • {featuredCounsel.location}
                  </span>
                  <h3 className="font-display text-3xl sm:text-4xl font-normal text-[#111625] group-hover:text-[#875A1E] transition-colors">
                    {featuredCounsel.name}
                  </h3>
                </div>

                <p className="font-reading text-base text-slate-700 leading-relaxed font-normal">
                  {featuredCounsel.bio}
                </p>

                {/* Key Mandate Badges */}
                <div className="pt-2 border-t border-[#E9E2D8] space-y-2 font-sans text-xs text-slate-600">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-slate-500 block">
                    Prosecution &amp; Trial Record
                  </span>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-[#FAF8F5] border border-[#DDD4C5] px-2.5 py-1 text-[#111625] font-medium">
                      Assisted Special Prosecutor / NCB &amp; ED
                    </span>
                    <span className="bg-[#FAF8F5] border border-[#DDD4C5] px-2.5 py-1 text-[#111625] font-medium">
                      Over 100 NDPS &amp; 50 PMLA Prosecutions
                    </span>
                    <span className="bg-[#FAF8F5] border border-[#DDD4C5] px-2.5 py-1 text-[#111625] font-medium">
                      Supreme Court &amp; High Courts
                    </span>
                  </div>
                </div>

                <div className="pt-2">
                  <span className="inline-flex items-center gap-2 text-xs font-sans font-bold uppercase tracking-[0.16em] text-[#875A1E] group-hover:underline">
                    <span>Inspect Full Judicial Record</span>
                    <ArrowRight className="w-4 h-4 text-[#875A1E]" />
                  </span>
                </div>
              </div>

            </div>
          </div>
        )}

        {/* Counsel Registry Table / Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {(filter === 'all' ? remainingLawyers : filteredLawyers).map((lawyer) => (
            <div
              key={lawyer.id}
              onClick={() => onSelectLawyer(lawyer.id)}
              className="bg-white border border-[#DDD4C5] p-6 shadow-folio hover:border-[#875A1E] transition-all cursor-pointer flex flex-col justify-between group"
            >
              <div>
                <div className="h-64 w-full overflow-hidden bg-[#111625] mb-5">
                  <img
                    src={lawyer.imageUrl}
                    alt={lawyer.name}
                    className="w-full h-full object-cover object-top filter grayscale contrast-105 group-hover:grayscale-0 transition-all duration-500"
                    loading="lazy"
                  />
                </div>

                <span className="font-title text-[11px] uppercase tracking-[0.18em] text-[#875A1E] block mb-1">
                  {lawyer.role}
                </span>

                <h3 className="font-display text-2xl font-bold text-[#111625] group-hover:text-[#875A1E] transition-colors mb-2 leading-snug">
                  {lawyer.name}
                </h3>

                <p className="font-reading text-xs text-slate-600 line-clamp-2 leading-relaxed mb-4">
                  {lawyer.bio}
                </p>
              </div>

              <div className="pt-3 border-t border-[#E9E2D8] flex items-center justify-between text-xs font-sans">
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
