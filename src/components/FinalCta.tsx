import React from 'react';
import { ArrowRight, ShieldCheck, Sparkles, BookOpen } from 'lucide-react';
import { TICKET_PRICE, ORIGINAL_PRICE } from '../data/content';

interface FinalCtaProps {
  onOpenCheckout: () => void;
}

export const FinalCta: React.FC<FinalCtaProps> = ({ onOpenCheckout }) => {
  return (
    <section className="py-16 sm:py-24 bg-[#183640] text-white text-center relative overflow-hidden">
      {/* Decorative subtle ambient backdrop */}
      <div className="absolute inset-0 bg-radial from-[#224A58] via-[#183640] to-[#0F2228] opacity-80 pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-wider uppercase text-[#DFBD75] bg-white/5 border border-white/10 px-3.5 py-1.5 rounded-full mb-6">
          <Sparkles className="w-3.5 h-3.5 text-[#C6A15B]" />
          <span>COMIENZA A ESTUDIAR CON MÁS CLARIDAD HOY</span>
        </div>

        <h2 className="font-editorial text-3xl sm:text-5xl font-normal text-white tracking-tight leading-tight mb-6 text-balance">
          Menos apuntes dispersos.<br />
          <span className="italic text-[#DFBD75] font-semibold">Más claridad para estudiar Psicología.</span>
        </h2>

        <p className="text-sm sm:text-base text-[#D0DFE4] max-w-2xl mx-auto leading-relaxed mb-8">
          11 módulos temáticos · 353 páginas ilustradas · 5 libros de bono incluidos · Acceso permanente por solo US$ {TICKET_PRICE.toFixed(2).replace('.', ',')}.
        </p>

        <div className="inline-flex flex-col items-center justify-center">
          <button
            onClick={onOpenCheckout}
            className="py-4 px-8 text-sm sm:text-base font-bold text-[#16272E] bg-[#C6A15B] hover:bg-[#D5B26E] active:bg-[#B38D46] rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 group cursor-pointer"
          >
            <span>QUIERO MI BIBLIOTECA COMPLETA — US$ {TICKET_PRICE.toFixed(2).replace('.', ',')}</span>
            <ArrowRight className="w-5 h-5 text-[#16272E] group-hover:translate-x-1 transition-transform" />
          </button>
          <p className="text-xs text-[#9BB1B9] mt-3 flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#4ADE80]" />
            <span>Pago único · Acceso inmediato a tu correo · Garantía de 7 días</span>
          </p>
        </div>
      </div>
    </section>
  );
};
