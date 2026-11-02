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
      className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div 
        className="bg-white rounded-[15px] w-full max-w-[760px] max-h-[88vh] flex flex-col shadow-[0_12px_50px_rgba(0,0,0,0.35)] animate-modal-in overflow-hidden border border-slate-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="p-6 sm:p-8 border-b border-slate-100 flex items-start justify-between bg-white shrink-0">
          <div className="flex items-center gap-4 sm:gap-6">
            <img
              src={lawyer.imageUrl}
              alt={lawyer.name}
              className="w-18 h-18 sm:w-22 sm:h-22 rounded-xl object-cover object-top border border-slate-200 shadow-sm shrink-0 bg-slate-900"
            />
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-[#CDB091] font-bold uppercase text-[11px] sm:text-xs tracking-[1.5px] block">
                  {lawyer.role}
                </span>
                <span className="text-slate-300">•</span>
                <span className="text-xs text-slate-500 font-medium">
                  {lawyer.location}
                </span>
              </div>
              
              <h2 className="font-serif text-2xl sm:text-[30px] font-bold text-[#283361] leading-tight mb-1">
                {lawyer.name}
              </h2>
              
              {lawyer.barAdmissions && lawyer.barAdmissions.length > 0 && (
                <p className="text-xs text-slate-500 font-medium">
                  Admitted: {lawyer.barAdmissions.join(' • ')}
                </p>
              )}
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content - Structured & Scannable */}
        <div className="flex-1 p-6 sm:p-8 overflow-y-auto space-y-6 text-sm text-slate-700 leading-relaxed">
          
          {/* Executive Overview */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#283361] mb-2 flex items-center gap-1.5">
              <Scale className="w-3.5 h-3.5 text-[#CDB091]" />
              <span>Professional Biography</span>
            </h4>
            <p className="font-normal text-slate-600 leading-relaxed">
              {lawyer.bio}
            </p>
          </div>

          {/* Academic Qualifications & Bar Enrolments */}
          <div className="p-4 bg-slate-50 border border-slate-200/90 rounded-xl space-y-2.5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#283361] flex items-center gap-1.5">
              <GraduationCap className="w-4 h-4 text-[#CDB091]" />
              <span>Credentials &amp; Bar Enrolments</span>
            </h4>
            <div className="flex flex-wrap gap-2 text-xs">
              {lawyer.qualifications.map((q, idx) => (
                <span key={idx} className="px-3 py-1 bg-white border border-slate-200 text-slate-700 rounded-full font-medium shadow-xs">
                  {q}
                </span>
              ))}
            </div>
          </div>

          {/* Primary Practice Focus */}
          {lawyer.practiceFocus && lawyer.practiceFocus.length > 0 && (
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#283361] mb-2.5 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#CDB091]" />
                <span>Primary Practice Specializations</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                {lawyer.practiceFocus.map((focus, idx) => (
                  <div key={idx} className="flex items-center gap-2 p-2 rounded-lg bg-slate-50 border border-slate-100">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#CDB091] shrink-0" />
                    <span className="font-medium text-slate-800">{focus}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Notable Case Work & Enforcement Mandates */}
          {lawyer.notableHighlights && lawyer.notableHighlights.length > 0 && (
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#283361] mb-2.5 flex items-center gap-1.5">
                <Award className="w-4 h-4 text-[#CDB091]" />
                <span>Selected Mandates &amp; Prosecutorial Background</span>
              </h4>
              <ul className="space-y-2 text-xs text-slate-600">
                {lawyer.notableHighlights.map((hl, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <CheckCircle className="w-4 h-4 text-[#CDB091] shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{hl}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:p-6 border-t border-slate-100 flex items-center justify-between bg-slate-50 shrink-0">
          <button
            onClick={() => {
              onClose();
              onOpenConsultation();
            }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-[#283361] hover:bg-[#1a2244] text-[#CDB091] hover:text-white text-xs font-bold uppercase tracking-wider transition-all cursor-pointer font-sans"
          >
            <span>Consult With {lawyer.name.split(' ')[0]}</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#CDB091]" />
          </button>

          <button 
            onClick={onClose}
            className="px-5 py-2.5 rounded-md bg-white border border-slate-200 hover:bg-slate-100 text-slate-700 text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
};
