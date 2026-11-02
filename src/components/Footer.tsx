import React from 'react';
import { 
  Scale, 
  MapPin, 
  Mail, 
  Phone, 
  Linkedin, 
  Twitter, 
  Facebook, 
  Instagram,
  ArrowUp
} from 'lucide-react';
import { FIRM_DETAILS, PRACTICE_AREAS } from '../data/firmData';

interface FooterProps {
  onOpenConsultation: () => void;
  onOpenDisclaimer: () => void;
  onOpenPrivacy: () => void;
}

export const Footer: React.FC<FooterProps> = ({ 
  onOpenConsultation, 
  onOpenDisclaimer,
  onOpenPrivacy
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#12172d] text-slate-300 pt-16 sm:pt-20 pb-12 border-t border-white/10 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 4 Columns (Directly matches K&R Legal .wpo-site-footer) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 sm:gap-12 pb-14 border-b border-white/10">
          
          {/* Column 1: Logo & Direct Contacts */}
          <div className="lg:col-span-4 space-y-6">
            <div className="flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-lg bg-[#283361] border border-[#CDB091]/30 flex items-center justify-center text-[#CDB091] shadow-md">
                <Scale className="w-6 h-6" />
              </div>
              <div>
                <span className="font-serif text-2xl font-bold tracking-tight text-white block">
                  SYNERGY <span className="text-[#CDB091]">CHAMBERS</span>
                </span>
                <span className="text-[10px] tracking-[0.2em] uppercase text-slate-400 font-semibold block">
                  Advocates &amp; Solicitors
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-normal">
              A boutique litigation and advisory practice focused on high-stakes criminal, regulatory, and commercial disputes before the Supreme Court, High Courts, and Special Tribunals.
            </p>

            <ul className="space-y-3 text-xs sm:text-sm text-slate-300">
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#CDB091] shrink-0" />
                <a href={`mailto:${FIRM_DETAILS.email}`} className="hover:text-[#CDB091] transition-colors">
                  {FIRM_DETAILS.email}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#CDB091] shrink-0" />
                <a href={`tel:${FIRM_DETAILS.phone}`} className="hover:text-[#CDB091] transition-colors">
                  {FIRM_DETAILS.phone}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#CDB091] shrink-0 mt-1" />
                <span>{FIRM_DETAILS.establishedLocation}</span>
              </li>
            </ul>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-serif text-lg font-bold text-white tracking-wide border-b border-white/10 pb-2">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-400">
              <li>
                <a href="#" className="hover:text-[#CDB091] transition-colors block">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#CDB091] transition-colors block">
                  About Us
                </a>
              </li>
              <li>
                <a href="#team" className="hover:text-[#CDB091] transition-colors block">
                  Our Team
                </a>
              </li>
              <li>
                <a href="#industries" className="hover:text-[#CDB091] transition-colors block">
                  Industries Served
                </a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-[#CDB091] transition-colors block">
                  Why Us
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#CDB091] transition-colors block">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Practice Areas */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-serif text-lg font-bold text-white tracking-wide border-b border-white/10 pb-2">
              Practice Areas
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-400">
              {PRACTICE_AREAS.slice(0, 5).map((practice) => (
                <li key={practice.id}>
                  <a href="#practice-areas" className="hover:text-[#CDB091] transition-colors line-clamp-1 block">
                    {practice.title}
                  </a>
                </li>
              ))}
              <li>
                <a href="#practice-areas" className="text-[#CDB091] hover:underline font-semibold text-xs block pt-1">
                  View All Practice Areas &rarr;
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Policies & Notices */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-serif text-lg font-bold text-white tracking-wide border-b border-white/10 pb-2">
              Policies &amp; Notices
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-400">
              <li>
                <button
                  onClick={onOpenPrivacy}
                  className="hover:text-[#CDB091] transition-colors text-left cursor-pointer"
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenDisclaimer}
                  className="hover:text-[#CDB091] transition-colors text-left cursor-pointer"
                >
                  Bar Council Disclaimer
                </button>
              </li>
            </ul>

            <div className="pt-4 border-t border-white/10 space-y-2">
              <span className="text-[11px] uppercase tracking-wider text-slate-500 font-bold block">
                Chamber Hours
              </span>
              <p className="text-xs text-slate-400">
                {FIRM_DETAILS.hours}
              </p>
            </div>
          </div>

        </div>

        {/* Secondary Footer (Bottom Bar with Copyright and Social Icons) */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500 text-center sm:text-left">
            &copy; 2026 Synergy Chambers. All Rights Reserved.
          </p>

          <div className="flex items-center gap-3">
            <a 
              href="#" 
              className="w-9 h-9 rounded-full bg-white/5 hover:bg-[#CDB091] hover:text-[#12172d] flex items-center justify-center text-slate-300 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a 
              href="#" 
              className="w-9 h-9 rounded-full bg-white/5 hover:bg-[#CDB091] hover:text-[#12172d] flex items-center justify-center text-slate-300 transition-colors"
              aria-label="Twitter / X"
            >
              <Twitter className="w-4 h-4" />
            </a>
            <a 
              href="#" 
              className="w-9 h-9 rounded-full bg-white/5 hover:bg-[#CDB091] hover:text-[#12172d] flex items-center justify-center text-slate-300 transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="w-4 h-4" />
            </a>
            <a 
              href="#" 
              className="w-9 h-9 rounded-full bg-white/5 hover:bg-[#CDB091] hover:text-[#12172d] flex items-center justify-center text-slate-300 transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              className="ml-3 p-2 rounded-lg bg-white/5 hover:bg-white/15 text-slate-400 hover:text-white transition-colors cursor-pointer"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
