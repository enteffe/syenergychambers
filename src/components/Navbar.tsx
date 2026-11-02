import React, { useState } from 'react';
import { 
  Menu, 
  X, 
  MapPin, 
  Mail, 
  Phone, 
  ChevronDown,
  ArrowRight
} from 'lucide-react';
import { FIRM_DETAILS, PRACTICE_AREAS } from '../data/firmData';

interface NavbarProps {
  onOpenConsultation: () => void;
  onSelectPractice: (id: string) => void;
  onSelectLawyer: (id: string) => void;
  textSize: 'sm' | 'md' | 'lg';
  onChangeTextSize: (size: 'sm' | 'md' | 'lg') => void;
  isHighContrast: boolean;
  onToggleHighContrast: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenConsultation,
  onSelectPractice,
  textSize,
  onChangeTextSize,
  isHighContrast,
  onToggleHighContrast
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [practiceDropdownOpen, setPracticeDropdownOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full bg-[#FAF8F5]/95 backdrop-blur-md border-b border-[#E5DDD0] transition-colors">
      
      {/* Top Ledger Strip (Archival Gazette Style) */}
      <div className="bg-[#111625] text-[#FAF8F5] text-[11px] py-2 px-6 sm:px-8 lg:px-12 border-b border-[#222B42]">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3 font-sans">
          
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2 text-slate-300">
              <span className="text-[#C79C5A] font-serif font-bold">Chamber No. 238</span>
              <span className="text-slate-600">•</span>
              <span>Patiala House Courts, New Delhi</span>
            </span>
            <span className="hidden md:flex items-center gap-1.5 text-slate-400">
              <span>Registry:</span>
              <a href={`mailto:${FIRM_DETAILS.email}`} className="text-[#C79C5A] hover:underline">
                {FIRM_DETAILS.email}
              </a>
            </span>
          </div>

          {/* Accessibility & Urgency Notice */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1 bg-white/5 px-2.5 py-0.5 rounded border border-white/10 text-[10px]">
              <span className="text-[#C79C5A] uppercase tracking-wider font-semibold mr-1">Scale:</span>
              <button
                onClick={() => onChangeTextSize('sm')}
                className={`px-1 rounded ${textSize === 'sm' ? 'text-[#C79C5A] font-bold underline' : 'text-slate-400 hover:text-white'}`}
                aria-label="Decrease text size"
              >
                A-
              </button>
              <button
                onClick={() => onChangeTextSize('md')}
                className={`px-1 rounded ${textSize === 'md' ? 'text-[#C79C5A] font-bold underline' : 'text-slate-400 hover:text-white'}`}
                aria-label="Default text size"
              >
                A
              </button>
              <button
                onClick={() => onChangeTextSize('lg')}
                className={`px-1 rounded ${textSize === 'lg' ? 'text-[#C79C5A] font-bold underline' : 'text-slate-400 hover:text-white'}`}
                aria-label="Increase text size"
              >
                A+
              </button>
            </div>

            <button
              onClick={onToggleHighContrast}
              className="hidden sm:inline-block px-2.5 py-0.5 text-[10px] text-slate-400 hover:text-white border border-white/10 rounded cursor-pointer"
              aria-label="Toggle high contrast"
            >
              {isHighContrast ? 'Normal' : 'High Contrast'}
            </button>

            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                onOpenConsultation();
              }}
              className="text-[#C79C5A] hover:text-[#D4AA6A] font-semibold text-[11px] uppercase tracking-wider flex items-center gap-1.5"
            >
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#C79C5A] animate-pulse" />
              <span>Urgent Remand Briefing</span>
            </a>
          </div>

        </div>
      </div>

      {/* Main Folio Header */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-22">
          
          {/* Monumental Wordmark */}
          <a href="#" className="flex items-baseline gap-3 group focus:outline-none">
            <span className="font-title text-2xl sm:text-[26px] font-bold tracking-[0.08em] text-[#111625] block leading-none">
              SYNERGY <span className="text-[#875A1E] font-normal">CHAMBERS</span>
            </span>
            <span className="hidden sm:inline-block text-[10px] font-sans font-semibold uppercase tracking-[0.25em] text-[#875A1E] pl-2 border-l border-[#E5DDD0]">
              Advocates &amp; Solicitors
            </span>
          </a>

          {/* Navigation Links (Editorial Small Caps) */}
          <nav className="hidden lg:flex items-center gap-7 text-[13px] font-sans font-semibold uppercase tracking-[0.12em] text-[#111625]/80">
            <a href="#" className="text-[#875A1E] transition-colors">
              Index
            </a>
            
            <a href="#about" className="hover:text-[#875A1E] transition-colors">
              Institutional Profile
            </a>

            {/* Practice Areas Dropdown */}
            <div className="relative group">
              <button
                onClick={() => setPracticeDropdownOpen(!practiceDropdownOpen)}
                onMouseEnter={() => setPracticeDropdownOpen(true)}
                className="flex items-center gap-1 hover:text-[#875A1E] transition-colors cursor-pointer py-2 uppercase tracking-[0.12em]"
                aria-expanded={practiceDropdownOpen}
              >
                <span>Practice Remit</span>
                <ChevronDown className="w-3.5 h-3.5 text-[#875A1E] transition-transform group-hover:rotate-180" />
              </button>

              <div 
                onMouseLeave={() => setPracticeDropdownOpen(false)}
                className={`absolute top-full left-0 w-84 bg-[#FAF8F5] border border-[#DDD4C5] rounded-none shadow-docket py-3 px-2 z-50 transition-all duration-150 ${
                  practiceDropdownOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2 pointer-events-none'
                }`}
              >
                <div className="text-[10px] uppercase font-sans font-bold tracking-[0.2em] text-[#875A1E] px-3 py-1.5 border-b border-[#E9E2D8] mb-1">
                  Courtroom Practice Domains
                </div>
                {PRACTICE_AREAS.slice(0, 6).map((practice, idx) => (
                  <button
                    key={practice.id}
                    onClick={() => {
                      onSelectPractice(practice.id);
                      setPracticeDropdownOpen(false);
                    }}
                    className="w-full text-left px-3 py-2 text-xs font-sans font-medium text-[#111625] hover:bg-[#F4EFEB] hover:text-[#875A1E] transition-colors flex items-center justify-between"
                  >
                    <span>{practice.title}</span>
                    <span className="font-mono text-[10px] text-[#A89982]">0{idx + 1}</span>
                  </button>
                ))}
                <div className="pt-2 mt-2 border-t border-[#E9E2D8] px-3">
                  <a
                    href="#practice-areas"
                    onClick={() => setPracticeDropdownOpen(false)}
                    className="text-[11px] font-sans font-bold uppercase tracking-wider text-[#875A1E] hover:underline flex items-center gap-1"
                  >
                    <span>View All 9 Practice Domains</span>
                    <ArrowRight className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>

            <a href="#industries" className="hover:text-[#875A1E] transition-colors">
              Regulated Sectors
            </a>

            <a href="#team" className="hover:text-[#875A1E] transition-colors">
              Counsel Roster
            </a>

            <a href="#why-us" className="hover:text-[#875A1E] transition-colors">
              Chamber Principles
            </a>
          </nav>

          {/* Action Button: Physical Brass Aesthetic (No Neon, No Cliché Pill) */}
          <div className="hidden lg:flex items-center gap-4">
            <button
              onClick={onOpenConsultation}
              className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#111625] text-[#FAF8F5] border border-[#875A1E] text-xs font-sans font-bold uppercase tracking-[0.14em] hover:bg-[#875A1E] hover:text-[#FAF8F5] transition-all cursor-pointer shadow-xs active:translate-y-0.5"
            >
              <span>Schedule Consultation</span>
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#111625] hover:text-[#875A1E] transition-colors"
              aria-label="Toggle navigation"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FAF8F5] border-t border-[#DDD4C5] px-6 py-6 space-y-4 shadow-docket font-sans">
          <a
            href="#"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-semibold uppercase tracking-wider text-[#111625] hover:text-[#875A1E]"
          >
            Index
          </a>
          <a
            href="#about"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-semibold uppercase tracking-wider text-[#111625] hover:text-[#875A1E]"
          >
            Institutional Profile
          </a>
          <a
            href="#practice-areas"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-semibold uppercase tracking-wider text-[#111625] hover:text-[#875A1E]"
          >
            Practice Remit
          </a>
          <a
            href="#industries"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-semibold uppercase tracking-wider text-[#111625] hover:text-[#875A1E]"
          >
            Regulated Sectors
          </a>
          <a
            href="#team"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-semibold uppercase tracking-wider text-[#111625] hover:text-[#875A1E]"
          >
            Counsel Roster
          </a>
          <a
            href="#why-us"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-semibold uppercase tracking-wider text-[#111625] hover:text-[#875A1E]"
          >
            Chamber Principles
          </a>
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-semibold uppercase tracking-wider text-[#111625] hover:text-[#875A1E]"
          >
            Case Registry &amp; Contact
          </a>

          <div className="pt-3 border-t border-[#DDD4C5]">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenConsultation();
              }}
              className="w-full py-3 bg-[#111625] text-[#FAF8F5] border border-[#875A1E] font-bold text-xs uppercase tracking-[0.14em]"
            >
              Schedule Consultation
            </button>
          </div>
        </div>
      )}

    </header>
  );
};
