import React, { useEffect } from 'react';
import { X, Check, ArrowRight, Scale } from 'lucide-react';
import { PracticeArea } from '../data/firmData';

interface PracticeModalProps {
  practice: PracticeArea | null;
  onClose: () => void;
  onOpenConsultation: () => void;
}

export const PracticeModal: React.FC<PracticeModalProps> = ({ 
  practice, 
  onClose,
  onOpenConsultation 
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (practice) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [practice, onClose]);

  if (!practice) return null;

  return (
    <div 
      className="fixed inset-0 z-50 overflow-y-auto bg-[#111625]/75 flex items-center justify-center p-4 sm:p-6"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div 
        className="bg-[#FAF8F5] border border-[#DDD4C5] w-full max-w-3xl max-h-[88vh] flex flex-col shadow-docket animate-modal-in overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="bg-[#111625] text-white p-6 sm:p-8 flex items-start justify-between shrink-0">
          <div>
            <div className="inline-flex items-center gap-2 font-title text-[11px] uppercase tracking-[0.2em] text-[#C79C5A] font-bold mb-1.5">
              <Scale className="w-3.5 h-3.5" />
              <span>Chamber Practice Dossier</span>
            </div>
            <h3 className="font-display text-2xl sm:text-3xl font-normal text-white">
              {practice.title}
            </h3>
            <p className="font-mono text-xs text-slate-300 tracking-wider mt-1">
              {practice.subtitle}
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white transition-colors cursor-pointer"
            aria-label="Close practice modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6 flex-1 overflow-y-auto text-slate-800 font-sans">
          
          {/* Statutory Overview */}
          <div>
            <span className="font-title text-xs font-bold uppercase tracking-wider text-[#111625] block mb-2">
              Jurisprudential Framework &amp; Scope
            </span>
            <p className="font-reading text-base text-slate-700 leading-relaxed font-normal">
              {practice.fullDesc}
            </p>
          </div>

          {/* Scope of Legal Services */}
          <div>
            <span className="font-title text-xs font-bold uppercase tracking-wider text-[#111625] block mb-3">
              Core Procedural &amp; Courtroom Mandates
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {practice.keyServices.map((service, idx) => (
                <div 
                  key={idx}
                  className="p-3 bg-white border border-[#DDD4C5] text-xs text-slate-800 flex items-start gap-2.5 shadow-xs"
                >
                  <Check className="w-3.5 h-3.5 text-[#875A1E] shrink-0 mt-0.5" />
                  <span className="leading-snug font-medium">{service}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Court Representation */}
          <div>
            <span className="font-title text-xs font-bold uppercase tracking-wider text-[#111625] block mb-2">
              Appearance Benches &amp; Tribunals
            </span>
            <div className="flex flex-wrap gap-2">
              {practice.courtRepresentation.map((court, idx) => (
                <span 
                  key={idx}
                  className="px-3 py-1 text-xs bg-[#F4EFEB] border border-[#DDD4C5] text-[#111625] font-medium"
                >
                  {court}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Footer Actions */}
        <div className="bg-white p-5 sm:p-6 border-t border-[#DDD4C5] flex flex-col sm:flex-row items-center justify-between gap-4 shrink-0 font-sans">
          <span className="text-xs text-slate-500 italic text-center sm:text-left">
            Consultations governed by Bar Council of India regulations.
          </span>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-slate-600 hover:text-slate-900 transition-colors cursor-pointer"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onOpenConsultation();
              }}
              className="inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-[#111625] hover:bg-[#875A1E] text-[#FAF8F5] text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
            >
              <span>Schedule Briefing on This Matter</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#C79C5A]" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
