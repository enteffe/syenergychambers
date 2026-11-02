import React, { useEffect, useState, useRef } from 'react';
import { Gavel, UserCheck, Scale, Award } from 'lucide-react';

export const FunFacts: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState({ years: 0, matters: 0 });
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 1800;
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // easeOutQuart
      const ease = 1 - Math.pow(1 - progress, 4);

      setCounts({
        years: Math.round(ease * 25),
        matters: Math.round(ease * 700)
      });

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isVisible]);

  return (
    <section ref={sectionRef} className="relative z-20 -mt-8 sm:-mt-12 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-white rounded-2xl shadow-[0_12px_40px_rgba(0,0,0,0.06)] border border-slate-200/80 p-6 sm:p-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4 divide-y sm:divide-y-0 sm:divide-x divide-slate-100 text-center">
          
          {/* Stat 1: 25+ Years */}
          <div className="flex flex-col items-center justify-center p-3">
            <div className="h-14 flex items-center justify-center mb-1">
              <span className="font-serif text-4xl sm:text-5xl font-bold text-[#CDB091] tracking-tight">
                {counts.years}+
              </span>
            </div>
            <p className="text-sm font-bold text-[#283361] leading-snug">
              Years of Combined Trial Practice
            </p>
            <span className="text-[11px] text-slate-500 mt-1">
              High-stakes criminal &amp; commercial litigation
            </span>
          </div>

          {/* Stat 2: Supreme & High Courts Gavel */}
          <div className="flex flex-col items-center justify-center p-3">
            <div className="h-14 flex items-center justify-center mb-1">
              <div className="w-12 h-12 rounded-full bg-[#fdfaf6] border border-[#CDB091]/20 flex items-center justify-center text-[#CDB091]">
                <Gavel className="w-6 h-6" />
              </div>
            </div>
            <p className="text-sm font-bold text-[#283361] leading-snug">
              Supreme Court &amp; High Courts
            </p>
            <span className="text-[11px] text-slate-500 mt-1">
              Trial, writ &amp; appellate representation
            </span>
          </div>

          {/* Stat 3: 700+ Matters */}
          <div className="flex flex-col items-center justify-center p-3">
            <div className="h-14 flex items-center justify-center mb-1">
              <span className="font-serif text-4xl sm:text-5xl font-bold text-[#CDB091] tracking-tight">
                {counts.matters}+
              </span>
            </div>
            <p className="text-sm font-bold text-[#283361] leading-snug">
              Complex Matters Handled
            </p>
            <span className="text-[11px] text-slate-500 mt-1">
              Special courts, remand, trials &amp; appeals
            </span>
          </div>

          {/* Stat 4: Former Special Public Prosecutors */}
          <div className="flex flex-col items-center justify-center p-3">
            <div className="h-14 flex items-center justify-center mb-1">
              <div className="w-12 h-12 rounded-full bg-[#fdfaf6] border border-[#CDB091]/20 flex items-center justify-center text-[#CDB091]">
                <UserCheck className="w-6 h-6" />
              </div>
            </div>
            <p className="text-sm font-bold text-[#283361] leading-snug">
              Former Special Prosecutors
            </p>
            <span className="text-[11px] text-slate-500 mt-1">
              ED, NCB, SFIO &amp; central agency acumen
            </span>
          </div>

        </div>
      </div>
    </section>
  );
};
