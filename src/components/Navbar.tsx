import React, { useState } from 'react';
import { 
  Scale, 
  Menu, 
  X, 
  Phone, 
  Mail, 
  MapPin, 
  ChevronDown,
  Clock,
  ArrowRight,
  Shield
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
    <header className="sticky top-0 z-40 w-full bg-white shadow-sm border-b border-slate-100 transition-all">
      
      {/* Top Utility Bar (Navy with Gold Accents) */}
      <div className="bg-[#1c2445] text-slate-200 text-xs py-2 px-4 sm:px-6 lg:px-8 border-b border-white/10">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          
          <div className="flex items-center gap-6 text-[11.5px]">
            <div className="flex items-center gap-1.5 font-medium text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-[#CDB091]" />
              <span>Chamber No. 238, Patiala House Courts, New Delhi</span>
            </div>
            <div className="hidden md:flex items-center gap-1.5">
              <Mail className="w-3.5 h-3.5 text-[#CDB091]" />
              <a href={`mailto:${FIRM_DETAILS.email}`} className="hover:text-[#CDB091] transition-colors">
                {FIRM_DETAILS.email}
              </a>
            </div>
            <div className="hidden lg:flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[#CDB091]" />
              <span>Mon – Sat: 9:30 AM – 7:30 PM</span>
            </div>
          </div>

          {/* Accessibility Controls & Helpline */}
          <div className="flex items-center gap-4 text-[11px]">
            <div className="flex items-center gap-1 bg-white/5 px-2 py-0.5 rounded border border-white/15">
              <span className="text-[10px] text-[#CDB091] font-semibold uppercase pr-1">Text:</span>
              <button
                onClick={() => onChangeTextSize('sm')}
                className={`px-1.5 py-0.5 rounded hover:bg-white/20 transition-colors ${textSize === 'sm' ? 'font-bold text-[#CDB091] underline' : 'text-slate-300'}`}
                aria-label="Decrease font size"
              >
                A-
              </button>
              <button
                onClick={() => onChangeTextSize('md')}
                className={`px-1.5 py-0.5 rounded hover:bg-white/20 transition-colors ${textSize === 'md' ? 'font-bold text-[#CDB091] underline' : 'text-slate-300'}`}
                aria-label="Default font size"
              >
                A
              </button>
              <button
                onClick={() => onChangeTextSize('lg')}
                className={`px-1.5 py-0.5 rounded hover:bg-white/20 transition-colors ${textSize === 'lg' ? 'font-bold text-[#CDB091] underline' : 'text-slate-300'}`}
                aria-label="Increase font size"
              >
                A+
              </button>
            </div>

            <button
              onClick={onToggleHighContrast}
              className="hidden sm:inline-flex items-center gap-1 px-2.5 py-0.5 rounded bg-white/5 hover:bg-white/15 border border-white/15 transition-colors cursor-pointer text-[11px] text-slate-300"
              aria-label="Toggle high contrast mode"
            >
              <span>{isHighContrast ? 'Normal' : 'Contrast'}</span>
            </button>

            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                onOpenConsultation();
              }}
              className="font-semibold text-[#CDB091] hover:underline flex items-center gap-1.5"
            >
              <Phone className="w-3 h-3" />
              <span>Urgent Legal Inquiry</span>
            </a>
          </div>

        </div>
      </div>

      {/* Main Clean White Navbar (Directly styled like K&R Legal) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <a href="#" className="flex items-center gap-3.5 group focus:outline-none">
            <div className="w-11 h-11 rounded-lg bg-[#283361] flex items-center justify-center text-[#CDB091] shadow-md border border-[#CDB091]/30 group-hover:scale-105 transition-transform">
              <Scale className="w-6 h-6" />
            </div>
            <div>
              <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-[#283361] block leading-tight">
                SYNERGY <span className="text-[#CDB091]">CHAMBERS</span>
              </span>
              <span className="text-[10px] tracking-[0.2em] uppercase text-slate-500 font-semibold block">
                Advocates &amp; Solicitors
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8 text-[14px] font-semibold text-slate-700">
            <a href="#" className="text-[#283361] hover:text-[#CDB091] transition-colors">
              Home
            </a>
            
            <a href="#about" className="hover:text-[#283361] transition-colors">
              About Us
            </a>

            {/* Practice Areas Dropdown */}
            <div className="relative group">
              <button
                onClick={() => setPracticeDropdownOpen(!practiceDropdownOpen)}
                onMouseEnter={() => setPracticeDropdownOpen(true)}
                className="flex items-center gap-1 hover:text-[#283361] transition-colors cursor-pointer py-2"
                aria-expanded={practiceDropdownOpen}
              >
                <span>Practice Areas</span>
                <ChevronDown className="w-4 h-4 text-slate-400 group-hover:text-[#283361] transition-transform group-hover:rotate-180" />
              </button>

              {/* Dropdown Menu */}
              <div 
                onMouseLeave={() => setPracticeDropdownOpen(false)}
                className={`absolute top-full left-0 w-80 bg-white border border-slate-200 rounded-xl shadow-xl py-3 px-2 z-50 transition-all duration-200 ${
                  practiceDropdownOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2 pointer-events-none'
                }`}
              >
                <div className="text-[10px] uppercase font-bold tracking-wider text-[#CDB091] px-3 py-1">
                  Core Legal Domains
                </div>
                {PRACTICE_AREAS.slice(0, 6).map((practice) => (
                  <button
                    key={practice.id}
                    onClick={() => {
                      onSelectPractice(practice.id);
                      setPracticeDropdownOpen(false);
                    }}
                    className="w-full text-left px-3 py-2 text-xs font-medium text-slate-700 hover:bg-slate-50 hover:text-[#283361] rounded-lg transition-colors flex items-center justify-between"
                  >
                    <span>{practice.title}</span>
                    <ArrowRight className="w-3 h-3 text-[#CDB091]" />
                  </button>
                ))}
                <div className="pt-2 mt-2 border-t border-slate-100 px-3">
                  <a
                    href="#practice-areas"
                    onClick={() => setPracticeDropdownOpen(false)}
                    className="text-xs font-bold text-[#283361] hover:text-[#CDB091] flex items-center gap-1 transition-colors"
                  >
                    <span>View All Practice Domains</span>
                    <ArrowRight className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>

            <a href="#industries" className="hover:text-[#283361] transition-colors">
              Industries Served
            </a>

            <a href="#why-us" className="hover:text-[#283361] transition-colors">
              Why Us
            </a>

            <a href="#team" className="hover:text-[#283361] transition-colors">
              Team
            </a>

            <a href="#contact" className="hover:text-[#283361] transition-colors">
              Contact
            </a>
          </nav>

          {/* Desktop Right CTA Button (K&R Legal Style: "Consult Us") */}
          <div className="hidden lg:flex items-center gap-4">
            <button
              onClick={onOpenConsultation}
              className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-[#283361] hover:bg-[#1c2445] text-[#CDB091] hover:text-white border border-[#CDB091]/50 text-xs font-bold uppercase tracking-wider transition-all shadow-md hover:shadow-lg cursor-pointer"
            >
              <span>Consult Us</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#CDB091]" />
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:text-[#283361] hover:bg-slate-100 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-slate-100 px-4 pt-3 pb-6 space-y-2 shadow-xl animate-in slide-in-from-top-2">
          <a
            href="#"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-sm font-semibold text-slate-800 hover:bg-slate-50 hover:text-[#283361]"
          >
            Home
          </a>
          <a
            href="#about"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-sm font-semibold text-slate-800 hover:bg-slate-50 hover:text-[#283361]"
          >
            About Us
          </a>
          <a
            href="#practice-areas"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-sm font-semibold text-slate-800 hover:bg-slate-50 hover:text-[#283361]"
          >
            Practice Areas
          </a>
          <a
            href="#industries"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-sm font-semibold text-slate-800 hover:bg-slate-50 hover:text-[#283361]"
          >
            Industries Served
          </a>
          <a
            href="#why-us"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-sm font-semibold text-slate-800 hover:bg-slate-50 hover:text-[#283361]"
          >
            Why Synergy Chambers
          </a>
          <a
            href="#team"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-sm font-semibold text-slate-800 hover:bg-slate-50 hover:text-[#283361]"
          >
            Our Team
          </a>
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-sm font-semibold text-slate-800 hover:bg-slate-50 hover:text-[#283361]"
          >
            Contact Us
          </a>

          <div className="pt-3 border-t border-slate-100">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenConsultation();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-full bg-[#283361] text-[#CDB091] font-bold text-xs uppercase tracking-wider shadow-md"
            >
              <span>Consult Us</span>
              <ArrowRight className="w-4 h-4 text-[#CDB091]" />
            </button>
          </div>
        </div>
      )}

    </header>
  );
};
