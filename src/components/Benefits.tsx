import React from 'react';
import { BENEFITS_DATA } from '../data/content';
import { Search, GitMerge, Compass, RotateCcw, Smartphone } from 'lucide-react';

const BENEFIT_ICONS = [
  Search,
  GitMerge,
  Compass,
  RotateCcw,
  Smartphone
];

export const Benefits: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-white border-b border-[#E6E1D6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-[#856425] mb-2">
            HECHA PARA FACILITAR TU APRENDIZAJE
          </div>
          <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-normal text-[#16272E] tracking-tight leading-tight mb-4">
            Encuentra lo que necesitas.<br />
            <span className="italic text-[#183640] font-semibold">Estudia con más claridad.</span>
          </h2>
          <p className="text-sm sm:text-base text-[#4E6269] leading-relaxed">
            Diseñada minuciosamente para transformar la experiencia de estudio en un proceso fluido, comprensible y altamente organizado.
          </p>
        </div>

        {/* Bento Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {BENEFITS_DATA.map((benefit, index) => {
            const Icon = BENEFIT_ICONS[index % BENEFIT_ICONS.length];
            const isWide = index === 0 || index === 3;
            return (
              <div
                key={benefit.id}
                className={`p-6 sm:p-7 rounded-2xl bg-[#FAF9F5] border border-[#E3DDD2] shadow-xs hover:border-[#D1C9BA] transition-all flex flex-col justify-between ${
                  isWide ? 'md:col-span-2' : 'md:col-span-1'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-white border border-[#E0D9CB] text-[#183640] flex items-center justify-center shadow-xs">
                      <Icon className="w-5 h-5 text-[#183640]" />
                    </div>
                    <span className="text-xs font-mono font-semibold text-[#8C9C9E] tabular-nums">
                      {benefit.id}
                    </span>
                  </div>
                  <h3 className="font-editorial text-lg sm:text-xl font-bold text-[#183640] mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#50636A] leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
