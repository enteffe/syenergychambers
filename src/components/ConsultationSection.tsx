import React, { useState } from 'react';
import { 
  Send, 
  Check, 
  AlertCircle, 
  ShieldCheck, 
  Mail, 
  MapPin, 
  Clock, 
  RotateCcw,
  Lock
} from 'lucide-react';
import { FIRM_DETAILS, PRACTICE_AREAS } from '../data/firmData';

export const ConsultationSection: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    practiceArea: 'criminal-litigation',
    jurisdiction: 'delhi',
    isUrgent: false,
    message: '',
    honeypot: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [referenceNumber, setReferenceNumber] = useState('');

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.firstName.trim()) errs.firstName = 'First name is required.';
    if (!formData.lastName.trim()) errs.lastName = 'Last name is required.';
    
    if (!formData.email.trim()) {
      errs.email = 'Email address is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please provide a valid corporate or personal email address.';
    }

    if (!formData.phone.trim()) {
      errs.phone = 'Direct telephone number is required.';
    } else if (!/^[0-9+\s\-()]{8,16}$/.test(formData.phone)) {
      errs.phone = 'Please provide a valid telephone number (8–16 digits).';
    }

    if (!formData.message.trim() || formData.message.trim().length < 15) {
      errs.message = 'Please provide a brief factual summary of the dispute or ongoing proceedings (min. 15 characters).';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.honeypot) return;

    if (!validate()) return;

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      const randomRef = 'SC/DOCKET-' + Math.floor(100000 + Math.random() * 900000);
      setReferenceNumber(randomRef);
    }, 700);
  };

  const resetForm = () => {
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      practiceArea: 'criminal-litigation',
      jurisdiction: 'delhi',
      isUrgent: false,
      message: '',
      honeypot: ''
    });
    setErrors({});
    setIsSubmitted(false);
    setReferenceNumber('');
  };

  return (
    <section id="contact" className="bg-[#FAF8F5] py-14 sm:py-20 lg:py-24 border-b border-[#E5DDD0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        
        {/* Section Header with Balanced Negative Space */}
        <div className="max-w-3xl mb-10 sm:mb-12">
          <span className="font-title text-xs tracking-[0.28em] text-[#875A1E] uppercase block mb-2">
            Case Intake Registry // Confidential Briefing
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-[48px] font-normal text-[#111625] leading-[1.12]">
            Initiate a Case Docket &amp; Matter Briefing
          </h2>
          <p className="font-reading text-sm sm:text-base text-slate-700 mt-3 leading-relaxed">
            In compliance with Bar Council of India standards of professional conduct, consultations and briefings are scheduled strictly upon voluntary inquiry. Complete the docket briefing below for preliminary conflict check.
          </p>
        </div>

        {/* Asymmetrical Grid: Left Ledger Details + Right Paper Intake Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Left Column: Official Chambers Dispatch Ledger */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-white border border-[#E5DDD0] p-8 sm:p-10 space-y-8 shadow-md">
              <div className="space-y-1.5">
                <span className="font-title text-[10px] uppercase font-bold tracking-[0.22em] text-[#875A1E] block">
                  Chamber Seat
                </span>
                <h3 className="font-serif text-2xl font-bold text-[#111625]">
                  {FIRM_DETAILS.establishedLocation}
                </h3>
                <p className="text-sm text-slate-600 font-sans pt-1">
                  Opposite National Gallery of Modern Art, New Delhi – 110001
                </p>
              </div>

              <div className="space-y-5 text-xs font-sans pt-6 border-t border-[#EFE9DF]">
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-wider text-slate-500 block mb-1.5">
                    Registry Email
                  </span>
                  <a 
                    href={`mailto:${FIRM_DETAILS.email}`}
                    className="font-bold text-[#111625] text-base hover:text-[#875A1E] transition-colors"
                  >
                    {FIRM_DETAILS.email}
                  </a>
                </div>

                <div>
                  <span className="text-[10px] uppercase font-bold tracking-wider text-slate-500 block mb-1.5">
                    Operating Hours
                  </span>
                  <span className="font-semibold text-slate-800 text-sm block">
                    {FIRM_DETAILS.hours}
                  </span>
                  <span className="text-xs text-slate-500 block mt-1">
                    Urgent remand, production, and bail interventions prioritized 24/7.
                  </span>
                </div>

                <div>
                  <span className="text-[10px] uppercase font-bold tracking-wider text-slate-500 block mb-1.5">
                    Regional Practice Corridors
                  </span>
                  <span className="text-slate-700 text-xs block leading-relaxed sm:leading-loose">
                    Punjab &amp; Haryana High Court at Chandigarh • District Sessions Benches in Gurugram, Rewari, Karnal &amp; Panipat.
                  </span>
                </div>
              </div>

              {/* Statutory Privilege Framework Box */}
              <div className="p-5 bg-[#F4EFEB] border border-[#E5DDD0] space-y-2 font-sans">
                <div className="flex items-center gap-2.5 text-xs font-bold uppercase tracking-wider text-[#111625]">
                  <Lock className="w-4 h-4 text-[#875A1E]" />
                  <span>Statutory Attorney-Client Privilege</span>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed font-normal">
                  Factual briefs and case particulars submitted via this docket constitute privileged communications under Sections 126–129 of the Indian Evidence Act, 1872.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Confidential Paper Form */}
          <div className="lg:col-span-7">
            <div className="border border-[#E5DDD0] bg-white p-10 sm:p-14 shadow-xl relative">
              
              {isSubmitted ? (
                <div className="text-center py-10 space-y-6 font-sans">
                  <div className="w-16 h-16 bg-[#FAF8F5] text-[#111625] border border-[#DDD4C5] flex items-center justify-center mx-auto">
                    <Check className="w-8 h-8 text-[#875A1E]" />
                  </div>
                  <div>
                    <span className="font-title text-xs font-bold uppercase tracking-[0.2em] text-[#875A1E] block mb-1">
                      Docket Verified &amp; Logged
                    </span>
                    <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#111625]">
                      Matter Briefing Received
                    </h3>
                    <p className="font-reading text-sm text-slate-600 max-w-md mx-auto mt-2 leading-relaxed">
                      Your summary has been registered for internal conflict verification. Our arguing counsel will review the factual particulars.
                    </p>
                  </div>

                  <div className="p-4 bg-[#FAF8F5] border border-[#DDD4C5] max-w-sm mx-auto text-center space-y-1">
                    <span className="text-[10px] uppercase font-bold tracking-wider text-slate-500 block">
                      Assigned Registry Reference:
                    </span>
                    <span className="font-mono text-lg font-bold text-[#111625] tracking-widest block">
                      {referenceNumber}
                    </span>
                  </div>

                  <div className="pt-2">
                    <button
                      onClick={resetForm}
                      className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#111625] hover:bg-[#875A1E] text-white text-xs font-bold uppercase tracking-wider transition-all cursor-pointer"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                      <span>Submit Additional Matter</span>
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5 font-sans">
                  
                  {/* Honeypot Spam Trap */}
                  <input
                    type="text"
                    name="website_verification_url"
                    tabIndex={-1}
                    autoComplete="off"
                    value={formData.honeypot}
                    onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
                    className="hidden"
                    aria-hidden="true"
                  />

                  {/* Name Fields */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="firstName" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                        First Name *
                      </label>
                      <input
                        id="firstName"
                        type="text"
                        required
                        value={formData.firstName}
                        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                        className={`w-full px-4 py-3 text-sm bg-[#FAF8F5] border text-[#111625] focus:outline-none transition-colors ${
                          errors.firstName ? 'border-red-600 bg-red-50/20' : 'border-[#E5DDD0] focus:border-[#875A1E] focus:bg-white'
                        }`}
                        placeholder="e.g. Vikram"
                      />
                      {errors.firstName && (
                        <p className="mt-1.5 text-xs text-red-600 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                          <span>{errors.firstName}</span>
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="lastName" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                        Last Name *
                      </label>
                      <input
                        id="lastName"
                        type="text"
                        required
                        value={formData.lastName}
                        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                        className={`w-full px-4 py-3 text-sm bg-[#FAF8F5] border text-[#111625] focus:outline-none transition-colors ${
                          errors.lastName ? 'border-red-600 bg-red-50/20' : 'border-[#E5DDD0] focus:border-[#875A1E] focus:bg-white'
                        }`}
                        placeholder="e.g. Sharma"
                      />
                      {errors.lastName && (
                        <p className="mt-1.5 text-xs text-red-600 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                          <span>{errors.lastName}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Contact Fields */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                        Corporate / Personal Email *
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className={`w-full px-4 py-3 text-sm bg-[#FAF8F5] border text-[#111625] focus:outline-none transition-colors ${
                          errors.email ? 'border-red-600 bg-red-50/20' : 'border-[#E5DDD0] focus:border-[#875A1E] focus:bg-white'
                        }`}
                        placeholder="counsel@domain.com"
                      />
                      {errors.email && (
                        <p className="mt-1.5 text-xs text-red-600 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                          <span>{errors.email}</span>
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                        Direct Phone / Mobile *
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className={`w-full px-4 py-3 text-sm bg-[#FAF8F5] border text-[#111625] focus:outline-none transition-colors ${
                          errors.phone ? 'border-red-600 bg-red-50/20' : 'border-[#E5DDD0] focus:border-[#875A1E] focus:bg-white'
                        }`}
                        placeholder="+91 98XXX XXXXX"
                      />
                      {errors.phone && (
                        <p className="mt-1.5 text-xs text-red-600 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                          <span>{errors.phone}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Practice Area & Forum Selection */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="practiceArea" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                        Practice Remit *
                      </label>
                      <select
                        id="practiceArea"
                        value={formData.practiceArea}
                        onChange={(e) => setFormData({ ...formData, practiceArea: e.target.value })}
                        className="w-full px-4 py-3 text-sm bg-[#FAF8F5] border border-[#E5DDD0] text-[#111625] focus:outline-none focus:border-[#875A1E]"
                      >
                        {PRACTICE_AREAS.map((practice) => (
                          <option key={practice.id} value={practice.id}>
                            {practice.title}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label htmlFor="jurisdiction" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                        Primary Court / Forum *
                      </label>
                      <select
                        id="jurisdiction"
                        value={formData.jurisdiction}
                        onChange={(e) => setFormData({ ...formData, jurisdiction: e.target.value })}
                        className="w-full px-4 py-3 text-sm bg-[#FAF8F5] border border-[#E5DDD0] text-[#111625] focus:outline-none focus:border-[#875A1E]"
                      >
                        <option value="delhi">Delhi NCR (Patiala House / Delhi High Court)</option>
                        <option value="chandigarh">Chandigarh (High Court / CAT / AFT)</option>
                        <option value="haryana">Haryana District Courts (Gurugram / Karnal)</option>
                        <option value="tribunal">Specialized Tribunal (NCLT / TDSAT / PMLA)</option>
                        <option value="supreme">Supreme Court of India</option>
                      </select>
                    </div>
                  </div>

                  {/* Urgent Remand / Listing Checkbox */}
                  <div className="flex items-start gap-3.5 p-4 bg-[#FAF8F5] border border-[#E5DDD0]">
                    <input
                      id="isUrgent"
                      type="checkbox"
                      checked={formData.isUrgent}
                      onChange={(e) => setFormData({ ...formData, isUrgent: e.target.checked })}
                      className="mt-0.5 h-4 w-4 text-[#875A1E] border-[#E5DDD0] focus:ring-[#875A1E] cursor-pointer"
                    />
                    <label htmlFor="isUrgent" className="text-xs text-slate-700 cursor-pointer leading-relaxed">
                      <strong className="text-[#111625]">Urgent Production, Remand or Bail Hearing:</strong> Check if this matter requires emergency listing within 24–48 hours.
                    </label>
                  </div>

                  {/* Factual Summary */}
                  <div>
                    <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                      Factual Summary of the Legal Dispute *
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className={`w-full px-4 py-3 text-sm bg-[#FAF8F5] border text-[#111625] focus:outline-none transition-colors ${
                        errors.message ? 'border-red-600 bg-red-50/20' : 'border-[#E5DDD0] focus:border-[#875A1E] focus:bg-white'
                      }`}
                      placeholder="Please summarize the essential facts, ongoing FIR/complaint details, current stage of proceedings, and specific legal relief sought..."
                    />
                    {errors.message && (
                      <p className="mt-1 text-[11px] text-red-600 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3 shrink-0" />
                        <span>{errors.message}</span>
                      </p>
                    )}
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <span className="text-[11px] text-slate-500 italic">
                      Strictly confidential under Rule 36, Bar Council of India Rules.
                    </span>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-[#111625] hover:bg-[#875A1E] disabled:opacity-50 text-white text-xs font-bold uppercase tracking-[0.14em] transition-all cursor-pointer active:translate-y-0.5"
                    >
                      {isSubmitting ? (
                        <span>Logging Docket...</span>
                      ) : (
                        <>
                          <Send className="w-3.5 h-3.5 text-[#C79C5A]" />
                          <span>Submit Legal Docket</span>
                        </>
                      )}
                    </button>
                  </div>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
