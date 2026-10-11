import React from 'react';
import { BONUSES_DATA, BONUSES_TOTAL_VALUE, TICKET_PRICE } from '../data/content';
import { Gift, Sparkles, Check, ArrowRight } from 'lucide-react';

interface BonusSectionProps {
  onOpenCheckout: () => void;
}

export const BonusSection: React.FC<BonusSectionProps> = ({ onOpenCheckout }) => {
  return (
    <section id="bonos" className="py-16 sm:py-24 bg-white border-b border-[#E6E1D6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-[#856425] mb-2 flex items-center justify-center gap-1.5">
            <Gift className="w-4 h-4 text-[#C6A15B]" />
            <span>SOLO EN EL PAQUETE COMPLETO</span>
          </div>
          <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-normal text-[#16272E] tracking-tight leading-tight mb-4">
            Tu biblioteca puede ir más allá.<br />
            <span className="italic text-[#183640] font-semibold">5 libros digitales adicionales de regalo.</span>
          </h2>
          <p className="text-sm sm:text-base text-[#4E6269] leading-relaxed">
            Amplía tu formación con cinco guías complementarias especialmente elaboradas para acelerar tus consultas diarias.
          </p>
        </div>

        {/* 5 Bonuses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
          {BONUSES_DATA.map((bonus, index) => {
            const isFifth = index === 4;
            return (
              <div
                key={bonus.id}
                className={`bg-[#FAF9F5] border border-[#E3DDD2] rounded-2xl overflow-hidden shadow-xs hover:border-[#D1C9BA] hover:shadow-md transition-all flex flex-col justify-between group ${
                  isFifth ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
              >
                <div>
                  {/* Book Cover Image */}
                  <div className="relative aspect-square bg-[#ECE7DC] overflow-hidden p-6 flex items-center justify-center">
                    <img
                      src={bonus.image}
                      alt={`Portada digital: ${bonus.title}`}
                      className="w-full h-full object-contain max-h-[260px] drop-shadow-md group-hover:scale-103 transition-transform duration-300"
                      loading="lazy"
                    />
                    <div className="absolute top-3 left-3 bg-[#183640] text-[#E8DCC0] font-mono text-[11px] font-bold px-2.5 py-1 rounded-md shadow-xs">
                      BONO {String(bonus.id).padStart(2, '0')}
                    </div>
                  </div>

                  {/* Bonus Description */}
                  <div className="p-5">
                    <h3 className="font-editorial text-lg font-bold text-[#183640] mb-2 leading-snug">
                      {bonus.title}
                    </h3>
                    <p className="text-xs text-[#52646B] leading-relaxed mb-4">
                      {bonus.description}
                    </p>
                  </div>
                </div>

                {/* Price Value Strip */}
                <div className="p-5 pt-0 border-t border-[#EDE7D9] mt-auto">
                  <div className="pt-3 flex items-center justify-between">
                    <div>
                      <span className="text-[11px] text-[#7E8F94] block">Valor de referencia</span>
                      <s className="text-xs text-[#7E8F94] font-mono">US$ {bonus.value.toFixed(2).replace('.', ',')}</s>
                    </div>
                    <span className="text-xs font-bold text-[#20724A] bg-[#E7F3EC] px-2.5 py-1 rounded-md tracking-wide">
                      GRATIS HOY
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Total Bonus Value Callout Banner */}
        <div className="max-w-2xl mx-auto p-6 sm:p-8 rounded-2xl bg-[#FAF6EC] border border-[#E2D8C3] shadow-xs text-center">
          <div className="text-xs text-[#7E8F94] uppercase tracking-wider font-semibold mb-1">
            Valor de referencia estimado de los 5 bonos juntos:
          </div>
          <div className="font-editorial text-3xl sm:text-4xl text-[#7E8F94] line-through font-normal my-1">
            US$ {BONUSES_TOTAL_VALUE.toFixed(2).replace('.', ',')}
          </div>
          <div className="text-sm font-bold text-[#20724A] tracking-wide uppercase mt-2">
            ★ INCLUIDOS AL 100% EN EL PAQUETE COMPLETO
          </div>
          <p className="text-xs text-[#52646B] mt-3">
            Todo en un solo pago de <strong className="text-[#183640] font-bold">US$ {TICKET_PRICE.toFixed(2).replace('.', ',')}</strong>, sin costos adicionales ni cuotas recurrentes.
          </p>

          <button
            onClick={onOpenCheckout}
            className="mt-6 px-6 py-3.5 text-xs sm:text-sm font-bold text-white bg-[#183640] hover:bg-[#204552] rounded-xl shadow-xs transition-all inline-flex items-center gap-2 cursor-pointer"
          >
            <span>QUIERO LA BIBLIOTECA + LOS 5 BONOS POR US$ {TICKET_PRICE.toFixed(2).replace('.', ',')}</span>
            <ArrowRight className="w-4 h-4 text-[#C6A15B]" />
          </button>
        </div>
      </div>
    </section>
  );
};
