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
      className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div 
        className="bg-white rounded-[15px] max-w-3xl w-full max-h-[85vh] flex flex-col shadow-[0_10px_50px_rgba(0,0,0,0.3)] animate-modal-in overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="bg-[#283361] text-white p-6 sm:p-8 flex items-start justify-between shrink-0">
          <div>
            <div className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[2px] text-[#CDB091] font-bold mb-1.5">
              <Scale className="w-3.5 h-3.5" />
              <span>Chambers Practice Domain</span>
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
              {practice.title}
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 font-medium mt-1">
              {practice.subtitle}
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
            aria-label="Close practice modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6 flex-1 overflow-y-auto text-slate-800">
          
          {/* Statutory Overview */}
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#283361] block mb-2">
              Jurisprudential Framework &amp; Scope
            </span>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
              {practice.fullDesc}
            </p>
          </div>

          {/* Scope of Legal Services */}
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#283361] block mb-3">
              Key Procedural &amp; Litigation Actions
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {practice.keyServices.map((service, idx) => (
                <div 
                  key={idx}
                  className="p-3 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-700 flex items-start gap-2.5"
                >
                  <Check className="w-3.5 h-3.5 text-[#CDB091] shrink-0 mt-0.5" />
                  <span className="leading-snug">{service}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Court Representation */}
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#283361] block mb-2">
              Courts &amp; Appearance Forums
            </span>
            <div className="flex flex-wrap gap-2">
              {practice.courtRepresentation.map((court, idx) => (
                <span 
                  key={idx}
                  className="px-3 py-1 text-xs bg-slate-100 border border-slate-200 text-[#283361] rounded-full font-medium"
                >
                  {court}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Footer Actions */}
        <div className="bg-slate-50 p-5 sm:p-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4 shrink-0">
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
              className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-[#283361] hover:bg-[#1c2445] text-[#CDB091] text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
            >
              <span>Consult on This Matter</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#CDB091]" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
