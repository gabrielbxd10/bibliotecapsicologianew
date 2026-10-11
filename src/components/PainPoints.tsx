import React from 'react';
import { PAIN_POINTS } from '../data/content';
import { Sparkles, AlertCircle, CheckCircle } from 'lucide-react';

export const PainPoints: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-[#F5F2EA] border-b border-[#E6E1D6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-[#856425] mb-2">
            ¿TE RESULTA FAMILIAR?
          </div>
          <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-normal text-[#16272E] tracking-tight leading-tight mb-4">
            Estudiar Psicología ya tiene suficientes desafíos.
          </h2>
          <p className="text-sm sm:text-base text-[#4E6269] leading-relaxed">
            Deja de perder tiempo entre decenas de archivos sueltos y explicaciones abstractas sin estructura.
          </p>
        </div>

        {/* 2x2 Clean Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
          {PAIN_POINTS.map((item) => (
            <div
              key={item.id}
              className="p-6 rounded-2xl bg-white border border-[#E3DDD2] shadow-xs hover:border-[#D1C9BA] transition-all flex items-start gap-4"
            >
              <div className="w-9 h-9 rounded-xl bg-[#F7F4EB] border border-[#E5DFD1] text-[#183640] font-mono text-xs font-bold flex items-center justify-center shrink-0">
                {item.id}
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-bold text-[#183640] mb-1.5 font-editorial">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#556970] leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Solution Callout (Without thick left border or pill sandwich) */}
        <div className="max-w-3xl mx-auto p-6 sm:p-8 rounded-2xl bg-[#183640] text-white border border-[#274B57] shadow-lg text-center relative overflow-hidden">
          <div className="relative z-10">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#C6A15B] mb-2 block">
              La perspectiva correcta
            </span>
            <h3 className="font-editorial text-2xl sm:text-3xl font-normal text-white mb-3">
              La solución no es acumular más archivos.
            </h3>
            <p className="text-sm sm:text-base text-[#D4E2E7] max-w-xl mx-auto leading-relaxed">
              Encuentra, asimila y repasa los conceptos clave en una biblioteca visual estructurada de forma lógica y amigable.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
