import React from 'react';
import { 
  Scale, 
  MapPin, 
  Mail, 
  Phone, 
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
    <footer className="bg-[#111625] text-slate-300 pt-24 sm:pt-28 pb-16 border-t border-[#222B42] font-sans">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Main Colophon Layout with Generous Column Margins */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 sm:gap-16 pb-16 border-b border-[#222B42]">
          
          {/* Column 1: Chamber Imprint & Address */}
          <div className="lg:col-span-4 space-y-5">
            <div>
              <span className="font-title text-2xl font-bold tracking-[0.08em] text-[#FAF8F5] block">
                SYNERGY <span className="text-[#C79C5A] font-normal">CHAMBERS</span>
              </span>
              <span className="text-[10px] tracking-[0.25em] uppercase text-slate-400 font-semibold block mt-1">
                Advocates &amp; Solicitors • Patiala House Courts
              </span>
            </div>

            <p className="font-reading text-sm text-slate-300 leading-relaxed font-normal">
              A boutique litigation and regulatory investigations practice advising corporations, institutions, and individuals before the Supreme Court of India, High Courts, and Special Trial Benches.
            </p>

            <div className="space-y-2.5 text-xs text-slate-300 pt-2 border-t border-[#1E263D]">
              <div className="flex items-center gap-3">
                <Mail className="w-3.5 h-3.5 text-[#C79C5A] shrink-0" />
                <a href={`mailto:${FIRM_DETAILS.email}`} className="hover:text-[#C79C5A] transition-colors">
                  {FIRM_DETAILS.email}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-3.5 h-3.5 text-[#C79C5A] shrink-0" />
                <a href={`tel:${FIRM_DETAILS.phone}`} className="hover:text-[#C79C5A] transition-colors">
                  {FIRM_DETAILS.phone}
                </a>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-3.5 h-3.5 text-[#C79C5A] shrink-0 mt-0.5" />
                <span>{FIRM_DETAILS.establishedLocation}</span>
              </div>
            </div>
          </div>

          {/* Column 2: Index */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-title text-xs font-bold uppercase tracking-[0.18em] text-[#C79C5A] pb-2 border-b border-[#2C3652]">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-300">
              <li>
                <a href="#" className="hover:text-[#C79C5A] transition-colors block">
                  Index
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#C79C5A] transition-colors block">
                  Institutional Profile
                </a>
              </li>
              <li>
                <a href="#practice-areas" className="hover:text-[#C79C5A] transition-colors block">
                  Practice Remit
                </a>
              </li>
              <li>
                <a href="#industries" className="hover:text-[#C79C5A] transition-colors block">
                  Regulated Sectors
                </a>
              </li>
              <li>
                <a href="#team" className="hover:text-[#C79C5A] transition-colors block">
                  Counsel Roster
                </a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-[#C79C5A] transition-colors block">
                  Chamber Principles
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Core Practices */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-title text-xs font-bold uppercase tracking-[0.18em] text-[#C79C5A] pb-2 border-b border-[#2C3652]">
              Special Statutes
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-300">
              {PRACTICE_AREAS.slice(0, 5).map((practice) => (
                <li key={practice.id}>
                  <a href="#practice-areas" className="hover:text-[#C79C5A] transition-colors line-clamp-1 block">
                    {practice.title}
                  </a>
                </li>
              ))}
              <li>
                <a href="#practice-areas" className="text-[#C79C5A] hover:underline font-semibold text-xs block pt-1">
                  View All 9 Practice Domains &rarr;
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Regulatory & Hours */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-title text-xs font-bold uppercase tracking-[0.18em] text-[#C79C5A] pb-2 border-b border-[#2C3652]">
              Compliance &amp; Hours
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-300">
              <li>
                <button
                  onClick={onOpenPrivacy}
                  className="hover:text-[#C79C5A] transition-colors text-left cursor-pointer"
                >
                  Client Privilege &amp; Confidentiality Policy
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenDisclaimer}
                  className="hover:text-[#C79C5A] transition-colors text-left cursor-pointer"
                >
                  Bar Council of India Disclaimer
                </button>
              </li>
            </ul>

            <div className="pt-3 border-t border-[#1E263D] space-y-1 text-xs">
              <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400 block">
                Chamber Hours
              </span>
              <p className="text-slate-300">
                {FIRM_DETAILS.hours}
              </p>
              <p className="text-[11px] text-slate-400 pt-1">
                Urgent bail listings and remand intervention active 24/7 upon direct verification.
              </p>
            </div>
          </div>

        </div>

        {/* Regulatory Notice Banner (Bar Council of India) */}
        <div className="py-6 border-b border-[#2C3652] text-[11px] text-slate-400 leading-relaxed font-sans space-y-1">
          <p className="font-semibold text-slate-200">
            Statutory Notice (Bar Council of India Rules):
          </p>
          <p>
            This website is maintained strictly in accordance with Rule 36 of the Bar Council of India Rules. The information provided herein is solely for informational purposes upon voluntary user inquiry and does not constitute advertisement, personal communication, solicitation, or legal advice.
          </p>
        </div>

        {/* Colophon Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-sans text-slate-400">
          <p>
            &copy; 2026 Synergy Chambers (Advocates &amp; Solicitors). Patiala House Courts, New Delhi.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-slate-400 hover:text-[#C79C5A] transition-colors cursor-pointer uppercase tracking-wider text-[11px] font-semibold"
          >
            <span>Top of Folio</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
