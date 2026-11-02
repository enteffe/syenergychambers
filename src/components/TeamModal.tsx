import React, { useEffect } from 'react';
import { X, MapPin, CheckCircle, Scale, GraduationCap, ArrowRight, ShieldCheck, Award } from 'lucide-react';
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
      className="fixed inset-0 z-50 overflow-y-auto bg-[#111625]/75 flex items-center justify-center p-4 sm:p-6"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div 
        className="bg-[#FAF8F5] border border-[#E5DDD0] w-full max-w-[760px] max-h-[90svh] flex flex-col shadow-2xl animate-modal-in overflow-hidden relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="p-5 sm:p-7 border-b border-[#E5DDD0] flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white shrink-0 relative">
          <div className="flex items-center gap-4 sm:gap-6 pr-8 sm:pr-0">
            <img
              src={lawyer.imageUrl}
              alt={lawyer.name}
              className="w-16 h-16 sm:w-20 sm:h-20 object-cover object-top border border-[#E5DDD0] shadow-xs shrink-0 bg-[#111625]"
            />
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="font-title text-[10px] sm:text-xs text-[#875A1E] font-bold uppercase tracking-[1.5px] block">
                  {lawyer.role}
                </span>
                <span className="text-slate-400">•</span>
                <span className="font-sans text-xs text-slate-500 font-medium">
                  {lawyer.location}
                </span>
              </div>
              
              <h2 className="font-display text-xl sm:text-2xl lg:text-[28px] font-normal text-[#111625] leading-tight mb-0.5">
                {lawyer.name}
              </h2>
              
              {lawyer.barAdmissions && lawyer.barAdmissions.length > 0 && (
                <p className="font-sans text-[11px] sm:text-xs text-slate-600 font-medium">
                  Admitted: {lawyer.barAdmissions.join(' • ')}
                </p>
              )}
            </div>
          </div>

          <button
            onClick={onClose}
            className="absolute top-4 right-4 sm:static p-2 text-slate-400 hover:text-[#111625] transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content - Structured Legal Dossier */}
        <div className="flex-1 p-6 sm:p-8 overflow-y-auto space-y-6 text-sm text-slate-700 leading-relaxed font-sans">
          
          {/* Executive Overview */}
          <div>
            <h4 className="font-title text-xs font-bold uppercase tracking-wider text-[#111625] mb-2 flex items-center gap-2">
              <Scale className="w-3.5 h-3.5 text-[#875A1E]" />
              <span>Courtroom Biography</span>
            </h4>
            <p className="font-reading text-base text-slate-800 leading-relaxed">
              {lawyer.bio}
            </p>
          </div>

          {/* Academic Credentials & Bar Enrolments */}
          <div className="p-4 bg-[#F4EFEB] border border-[#DDD4C5] space-y-2.5">
            <h4 className="font-title text-xs font-bold uppercase tracking-wider text-[#111625] flex items-center gap-2">
              <GraduationCap className="w-4 h-4 text-[#875A1E]" />
              <span>Academic Credentials &amp; Bar Admissions</span>
            </h4>
            <div className="flex flex-wrap gap-2 text-xs">
              {lawyer.qualifications.map((q, idx) => (
                <span key={idx} className="px-3 py-1 bg-white border border-[#DDD4C5] text-slate-800 font-medium">
                  {q}
                </span>
              ))}
            </div>
          </div>

          {/* Primary Practice Focus */}
          {lawyer.practiceFocus && lawyer.practiceFocus.length > 0 && (
            <div>
              <h4 className="font-title text-xs font-bold uppercase tracking-wider text-[#111625] mb-2.5 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#875A1E]" />
                <span>Primary Practice Specializations</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-800">
                {lawyer.practiceFocus.map((focus, idx) => (
                  <div key={idx} className="flex items-center gap-2 p-2.5 bg-white border border-[#DDD4C5]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#875A1E] shrink-0" />
                    <span className="font-medium">{focus}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Notable Case Highlights */}
          {lawyer.notableHighlights && lawyer.notableHighlights.length > 0 && (
            <div>
              <h4 className="font-title text-xs font-bold uppercase tracking-wider text-[#111625] mb-2.5 flex items-center gap-2">
                <Award className="w-4 h-4 text-[#875A1E]" />
                <span>Notable Case Records &amp; Enforcement Proceedings</span>
              </h4>
              <ul className="space-y-2 text-xs text-slate-700">
                {lawyer.notableHighlights.map((hl, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <CheckCircle className="w-4 h-4 text-[#875A1E] shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{hl}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:p-5 border-t border-[#E5DDD0] flex flex-col-reverse sm:flex-row items-stretch sm:items-center justify-between gap-3 bg-white shrink-0 font-sans">
          <button 
            onClick={onClose}
            className="w-full sm:w-auto px-5 py-2.5 bg-white border border-[#DDD4C5] hover:bg-[#FAF8F5] text-slate-700 text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer text-center"
          >
            Close
          </button>

          <button
            onClick={() => {
              onClose();
              onOpenConsultation();
            }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-[#111625] text-[#FAF8F5] hover:bg-[#875A1E] text-xs font-bold uppercase tracking-wider transition-all cursor-pointer shadow-sm active:translate-y-0.5"
          >
            <span>Consult With {lawyer.name.split(' ')[0]}</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#C79C5A]" />
          </button>
        </div>

      </div>
    </div>
  );
};
