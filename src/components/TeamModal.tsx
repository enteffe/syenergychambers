import React, { useEffect } from 'react';
import { X, MapPin, CheckCircle, Scale, GraduationCap } from 'lucide-react';
import { Lawyer } from '../data/firmData';

interface TeamModalProps {
  lawyer: Lawyer | null;
  onClose: () => void;
  onOpenConsultation: () => void;
}

export const TeamModal: React.FC<TeamModalProps> = ({ 
  lawyer, 
  onClose,
  onOpenConsultation 
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (lawyer) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [lawyer, onClose]);

  if (!lawyer) return null;

  return (
    <div 
      className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div 
        className="bg-white rounded-[15px] w-full max-w-[720px] max-h-[85vh] flex flex-col shadow-[0_10px_50px_rgba(0,0,0,0.3)] animate-modal-in overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header (Directly matches K&R Legal .modal-header) */}
        <div className="p-6 sm:p-8 border-b border-slate-100 flex items-start justify-between bg-white shrink-0">
          <div className="flex items-center gap-4 sm:gap-5">
            <img
              src={lawyer.imageUrl}
              alt={lawyer.name}
              className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl object-cover object-top border border-slate-200 shadow-sm shrink-0"
            />
            <div>
              <h2 className="font-serif text-2xl sm:text-[28px] font-bold text-[#283361] leading-tight mb-1">
                {lawyer.name}
              </h2>
              <span className="text-[#CDB091] font-bold uppercase text-xs sm:text-[13px] tracking-[1px] block">
                {lawyer.role}
              </span>
              <p className="text-xs text-slate-500 mt-1 flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-slate-400" />
                <span>{lawyer.location}</span>
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content (Directly matches K&R Legal .modal-content) */}
        <div className="flex-1 p-6 sm:p-8 overflow-y-auto text-sm sm:text-[15px] text-slate-600 leading-[1.8] space-y-4">
          
          <div className="space-y-3">
            <p className="font-normal text-slate-700 leading-relaxed">
              {lawyer.bio}
            </p>
          </div>

          {/* Academic Qualifications & Bar Admissions */}
          <div className="p-4 bg-slate-50 border border-slate-200/80 rounded-xl space-y-2 mt-4">
            <span className="text-xs font-bold uppercase tracking-wider text-[#283361] block">
              Qualifications &amp; Bar Admissions
            </span>
            <div className="flex flex-wrap gap-2 text-xs text-slate-700">
              {lawyer.qualifications.map((q, idx) => (
                <span key={idx} className="px-3 py-1 bg-white border border-slate-200 rounded-full font-medium">
                  {q}
                </span>
              ))}
            </div>
          </div>

          {/* Practice Focus Areas */}
          {lawyer.practiceFocus && lawyer.practiceFocus.length > 0 && (
            <div className="pt-2 space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-[#283361] block">
                Primary Practice Focus
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                {lawyer.practiceFocus.map((focus, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#CDB091] shrink-0" />
                    <span>{focus}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Notable Case Highlights */}
          {lawyer.notableHighlights && lawyer.notableHighlights.length > 0 && (
            <div className="pt-2 space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-[#283361] block">
                Notable Courtroom &amp; Agency Mandates
              </span>
              <ul className="space-y-1.5 text-xs text-slate-600">
                {lawyer.notableHighlights.map((hl, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-[#CDB091] shrink-0 mt-0.5" />
                    <span>{hl}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

        </div>

        {/* Modal Footer (Directly matches K&R Legal .modal-footer) */}
        <div className="p-4 sm:p-6 border-t border-slate-100 flex items-center justify-between bg-slate-50 shrink-0">
          <button
            onClick={() => {
              onClose();
              onOpenConsultation();
            }}
            className="text-xs font-bold uppercase tracking-wider text-[#283361] hover:text-[#CDB091] transition-colors"
          >
            Consult With {lawyer.name.split(' ')[0]} &rarr;
          </button>

          <button 
            onClick={onClose}
            className="px-6 py-2.5 rounded-lg bg-[#6c757d] hover:bg-[#5a6268] text-white text-sm font-semibold transition-colors cursor-pointer"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
};
