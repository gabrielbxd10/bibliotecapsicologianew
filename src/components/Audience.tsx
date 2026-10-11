import React from 'react';
import { AUDIENCE_DATA } from '../data/content';
import { GraduationCap, Compass, BookOpenCheck, HeartHandshake, Eye, AlertCircle } from 'lucide-react';

const AUDIENCE_ICONS = [
  GraduationCap,
  Compass,
  BookOpenCheck,
  HeartHandshake,
  Eye
];

export const Audience: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-[#F5F2EA] border-b border-[#E6E1D6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-[#856425] mb-2">
            ¿ESTA BIBLIOTECA ES PARA TI?
          </div>
          <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-normal text-[#16272E] tracking-tight leading-tight mb-4">
            Para estudiantes y mentes curiosas por la Psicología.
          </h2>
          <p className="text-sm sm:text-base text-[#4E6269] leading-relaxed">
            Un recurso adaptable tanto para quienes cursan la carrera como para quienes desean comprender el comportamiento humano con rigor y claridad.
          </p>
        </div>

        {/* Audience Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto mb-10">
          {AUDIENCE_DATA.map((item, index) => {
            const Icon = AUDIENCE_ICONS[index % AUDIENCE_ICONS.length];
            return (
              <div
                key={item.title}
                className="p-6 rounded-2xl bg-white border border-[#E3DDD2] shadow-xs hover:border-[#D1C9BA] transition-all flex flex-col justify-start"
              >
                <div className="w-10 h-10 rounded-xl bg-[#FAF7F0] border border-[#E6E0CE] text-[#183640] flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-[#183640]" />
                </div>
                <h3 className="font-editorial text-base sm:text-lg font-bold text-[#183640] mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#52656B] leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Academic Disclaimer Callout */}
        <div className="max-w-3xl mx-auto p-4 sm:p-5 rounded-xl bg-[#EDE7D9] border border-[#DDD4C1] text-center">
          <p className="text-xs text-[#556970] leading-relaxed flex items-center justify-center gap-2">
            <AlertCircle className="w-4 h-4 text-[#856425] shrink-0 hidden sm:inline" />
            <span>
              <strong>Aviso pedagógico:</strong> Material educativo complementario de síntesis. No sustituye la bibliografía académica de referencia, planes de estudio universitarios, formación clínica ni supervisión profesional.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};
