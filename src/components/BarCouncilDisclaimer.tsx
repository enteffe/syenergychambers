import React, { useState, useEffect } from 'react';
import { Shield, Check, Scale } from 'lucide-react';

export const BarCouncilDisclaimer: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const acknowledged = localStorage.getItem('synergy_bci_disclaimer');
    if (!acknowledged) {
      setIsOpen(true);
    }
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleAccept = () => {
    localStorage.setItem('synergy_bci_disclaimer', 'true');
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 bg-[#111625]/85 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-300"
      role="dialog"
      aria-labelledby="disclaimer-title"
      aria-modal="true"
    >
      <div 
        className="bg-[#FAF8F5] border border-[#DDD4C5] max-w-xl w-full max-h-[90svh] flex flex-col shadow-2xl text-[#111625] overflow-hidden"
      >
        {/* Header */}
        <div className="bg-[#111625] text-[#FAF8F5] p-5 sm:p-6 flex items-center gap-3.5 shrink-0 border-b border-[#222B42]">
          <div className="w-10 h-10 border border-[#875A1E] flex items-center justify-center text-[#C79C5A] shrink-0">
            <Scale className="w-5 h-5" />
          </div>
          <div>
            <h3 id="disclaimer-title" className="font-serif text-lg sm:text-xl font-bold text-[#FAF8F5]">
              Bar Council of India Disclaimer
            </h3>
            <p className="text-[10px] sm:text-[11px] text-[#C79C5A] uppercase tracking-[1.5px] font-bold font-title">
              Rule 36, Bar Council of India Rules
            </p>
          </div>
        </div>

        {/* Scrollable Body */}
        <div className="p-5 sm:p-7 space-y-3.5 text-xs sm:text-[13px] text-slate-700 leading-relaxed overflow-y-auto flex-1 font-sans">
          <p>
            Under the statutory rules framed by the <strong className="text-[#111625] font-bold">Bar Council of India</strong>, advocates and law chambers are strictly prohibited from soliciting work or advertising in any form or manner.
          </p>
          <p>
            By proceeding and accessing this website, you acknowledge and confirm that:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-xs text-slate-600">
            <li>
              You are seeking information relating to Synergy Chambers of your own independent accord and there has been no advertisement, personal communication, solicitation, or inducement by the firm or its advocates.
            </li>
            <li>
              The information provided on this website is made available solely for informational purposes and should not be construed or interpreted as legal advice or formal opinion.
            </li>
            <li>
              Accessing this site or transmitting communications does not create an advocate-client relationship.
            </li>
            <li>
              Synergy Chambers is not liable for any consequence of any action taken by relying on material or information provided on this website.
            </li>
          </ul>
        </div>

        {/* Sticky Footer */}
        <div className="p-4 sm:p-5 bg-white border-t border-[#E5DDD0] flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0 font-sans">
          <span className="text-[11px] text-slate-500 text-center sm:text-left">
            Advocates Act, 1961 • BCI Regulatory Framework
          </span>
          <button
            onClick={handleAccept}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-[#111625] hover:bg-[#875A1E] text-[#FAF8F5] font-bold text-xs uppercase tracking-wider transition-all cursor-pointer shadow-sm active:translate-y-0.5"
          >
            <Check className="w-4 h-4 text-[#C79C5A]" />
            <span>I Acknowledge &amp; Proceed</span>
          </button>
        </div>
      </div>
    </div>
  );
};
