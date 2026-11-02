import React, { useState } from 'react';
import { ArrowRight, Users, Scale, MapPin } from 'lucide-react';
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
    <section id="team" className="py-20 lg:py-28 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          
          {/* Left Column: Title & Description (Directly matches K&R Legal left column) */}
          <div className="lg:col-span-4 space-y-5 lg:sticky lg:top-28">
            <p className="text-[#CDB091] font-extrabold text-sm uppercase tracking-[2px]">
              Chambers Advocates
            </p>
            
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[44px] font-normal text-[#283361] tracking-tight leading-tight">
              Our Team
            </h2>

            <p className="text-base text-slate-600 leading-relaxed font-normal">
              A focused team supporting high-stakes litigation, investigations, and complex disputes — directed by founding advocates at Patiala House Courts in New Delhi.
            </p>

            {/* Filter Tabs */}
            <div className="flex flex-wrap gap-2 pt-2">
              <button
                onClick={() => setFilter('all')}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                  filter === 'all'
                    ? 'bg-[#283361] text-[#CDB091]'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                All Counsel ({allLawyers.length})
              </button>
              <button
                onClick={() => setFilter('founders')}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                  filter === 'founders'
                    ? 'bg-[#283361] text-[#CDB091]'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                Patiala House ({FOUNDERS.length})
              </button>
              <button
                onClick={() => setFilter('chandigarh')}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                  filter === 'chandigarh'
                    ? 'bg-[#283361] text-[#CDB091]'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                Chandigarh ({CHANDIGARH_TEAM.length})
              </button>
              <button
                onClick={() => setFilter('haryana')}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                  filter === 'haryana'
                    ? 'bg-[#283361] text-[#CDB091]'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                Haryana ({HARYANA_TEAM.length})
              </button>
            </div>

            <div className="pt-4 hidden lg:block">
              <button
                onClick={() => setFilter('all')}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-[#283361] hover:bg-[#1c2445] text-white text-xs font-bold uppercase tracking-wider transition-all shadow-md group cursor-pointer"
              >
                <span>View Complete Roster</span>
                <ArrowRight className="w-4 h-4 text-[#CDB091] group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Right Column: Team Cards (Matches K&R Legal team-card layout) */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredLawyers.map((lawyer) => (
                <div
                  key={lawyer.id}
                  onClick={() => onSelectLawyer(lawyer.id)}
                  className="bg-white rounded-xl border border-slate-200/80 shadow-[0_4px_15px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_30px_rgba(40,51,97,0.12)] hover:-translate-y-1.5 transition-all duration-300 overflow-hidden flex flex-col justify-between cursor-pointer group"
                >
                  {/* Portrait Image */}
                  <div className="h-64 sm:h-72 w-full overflow-hidden bg-slate-900 relative">
                    <img
                      src={lawyer.imageUrl}
                      alt={lawyer.name}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>

                  {/* Card Content (Matches K&R Legal .team-info) */}
                  <div className="p-5 space-y-2">
                    <h3 className="font-serif text-xl font-bold text-[#283361] group-hover:text-[#CDB091] transition-colors leading-snug">
                      {lawyer.name}
                    </h3>
                    
                    <span className="text-[#CDB091] font-bold uppercase text-xs tracking-wider block">
                      {lawyer.role}
                    </span>

                    <p className="text-xs text-slate-500 flex items-center gap-1 pt-1">
                      <MapPin className="w-3.5 h-3.5 text-slate-400" />
                      <span>{lawyer.location}</span>
                    </p>

                    <div className="pt-3 border-t border-slate-100 flex items-center">
                      <span className="text-sm font-semibold text-[#CDB091] group-hover:text-[#283361] inline-flex items-center gap-1.5 transition-colors">
                        Know More <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
