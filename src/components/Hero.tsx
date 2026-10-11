import React from 'react';
import { ArrowRight, CheckCircle2, ShieldCheck, Download, Sparkles, BookOpen, Star } from 'lucide-react';
import { TICKET_PRICE, ORIGINAL_PRICE } from '../data/content';

interface HeroProps {
  onOpenCheckout: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenCheckout }) => {
  return (
    <section id="inicio" className="relative pt-8 pb-16 sm:pt-14 sm:pb-24 overflow-hidden border-b border-[#E6E1D6]">
      {/* Subtle architectural background texture */}
      <div className="absolute inset-0 bg-radial from-[#F4EFE6]/60 via-[#FAF9F5] to-[#FAF9F5] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          {/* Eyebrow Kicker */}
          <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-wider uppercase text-[#856425] bg-[#F7F1DF] border border-[#E8DCBD] px-3.5 py-1.5 rounded-full mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C6A15B]" />
            <span>BIBLIOTECA DIGITAL · 11 MÓDULOS · 353 PÁGINAS</span>
          </div>

          {/* Headline with Fraunces serif */}
          <h1 className="font-editorial text-3xl sm:text-5xl lg:text-6xl font-normal text-[#16272E] tracking-tight leading-[1.15] text-balance mb-6">
            Biblioteca de Psicología Completa: <span className="italic text-[#183640] font-semibold">organiza tus estudios</span> y comprende lo esencial con más claridad.
          </h1>

          {/* Subheading / Value Proposition */}
          <p className="text-base sm:text-xl text-[#4A5D64] max-w-2xl mx-auto leading-relaxed mb-8">
            11 módulos visuales estructurados para estudiar, sintetizar y repasar en un solo lugar. Todo el contenido fundamental organizado para consultar en cualquier dispositivo.
          </p>

          {/* Price Anchor Callout */}
          <div className="inline-flex flex-col items-center justify-center p-4 sm:p-5 rounded-2xl bg-[#FFFFFF] border border-[#E3DDD2] shadow-sm mb-8 max-w-md w-full">
            <div className="flex items-center gap-2 text-xs sm:text-sm text-[#738287]">
              <span>Valor de referencia estimado:</span>
              <s className="font-mono">US$ {ORIGINAL_PRICE.toFixed(2).replace('.', ',')}</s>
              <span className="text-[#20724A] font-semibold bg-[#E7F3EC] px-2 py-0.5 rounded-md text-xs">87% OFF HOY</span>
            </div>
            <div className="flex items-baseline gap-2 mt-1">
              <span className="text-xs uppercase tracking-wider text-[#738287] font-semibold">Por solo</span>
              <span className="font-editorial text-3xl sm:text-4xl font-bold text-[#183640] tabular-nums">
                US$ {TICKET_PRICE.toFixed(2).replace('.', ',')}
              </span>
              <span className="text-xs text-[#738287]">· Pago único</span>
            </div>
            
            <button
              onClick={onOpenCheckout}
              className="mt-4 w-full py-4 px-6 text-sm sm:text-base font-bold text-white bg-[#183640] hover:bg-[#204552] active:bg-[#0E2026] rounded-xl shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2.5 group cursor-pointer"
            >
              <span>QUIERO ACCEDER A LA BIBLIOTECA COMPLETA</span>
              <ArrowRight className="w-5 h-5 text-[#C6A15B] group-hover:translate-x-1 transition-transform" />
            </button>
            <p className="text-xs text-[#738287] mt-2.5 flex items-center justify-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#20724A]" />
              <span>Garantía de 7 días · Acceso digital inmediato · Sin mensualidades</span>
            </p>
          </div>

          {/* Trust points */}
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs sm:text-sm text-[#4E6269] mb-12">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#20724A]" />
              Acceso digital inmediato
            </span>
            <span className="hidden sm:inline text-[#C8C2B5]">·</span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#20724A]" />
              100% digital (PDF alta resolución)
            </span>
            <span className="hidden sm:inline text-[#C8C2B5]">·</span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#20724A]" />
              Pago único definitivo
            </span>
            <span className="hidden sm:inline text-[#C8C2B5]">·</span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#20724A]" />
              Garantía de satisfacción 7 días
            </span>
          </div>
        </div>

        {/* Hero Visual Mockup Container */}
        <div className="relative max-w-4xl mx-auto">
          <div className="relative rounded-2xl p-2 sm:p-4 bg-gradient-to-b from-[#EFECE3] to-[#FAF9F5] border border-[#E3DDD2] shadow-xl">
            <div className="overflow-hidden rounded-xl bg-white border border-[#EBE6DC] relative group">
              <img
                src="/assets/mockup-biblioteca-premium.png"
                alt="Biblioteca de Psicología Completa con 11 guías digitales premium y 5 bonos"
                className="w-full h-auto max-h-[580px] object-contain mx-auto transition-transform duration-500 group-hover:scale-[1.01]"
                loading="eager"
                width={1254}
                height={1254}
              />
              <div className="absolute bottom-4 left-4 right-4 sm:left-6 sm:right-6 bg-[#183640]/90 backdrop-blur-md text-white p-3 sm:p-4 rounded-xl flex flex-col sm:flex-row items-center justify-between gap-3 border border-white/10">
                <div className="flex items-center gap-3 text-center sm:text-left">
                  <BookOpen className="w-5 h-5 text-[#C6A15B] shrink-0 hidden sm:block" />
                  <div>
                    <p className="text-xs sm:text-sm font-semibold text-white">11 Módulos Guía + 5 Libros de Bono</p>
                    <p className="text-xs text-[#D1DFE4]">Total de 353 páginas ilustradas organizadas por áreas de estudio</p>
                  </div>
                </div>
                <a
                  href="#muestras"
                  className="px-4 py-2 bg-[#FAF9F5] text-[#183640] hover:bg-white text-xs font-bold rounded-lg transition-colors whitespace-nowrap shrink-0 shadow-xs"
                >
                  Ver Muestras por dentro →
                </a>
              </div>
            </div>
          </div>

          {/* Social Proof Strip */}
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
            <div className="p-4 rounded-xl bg-white border border-[#EAE5DA] shadow-xs">
              <div className="font-editorial text-2xl sm:text-3xl font-bold text-[#183640] tabular-nums">11</div>
              <div className="text-xs text-[#556970] mt-1 font-medium">Módulos temáticos</div>
            </div>
            <div className="p-4 rounded-xl bg-white border border-[#EAE5DA] shadow-xs">
              <div className="font-editorial text-2xl sm:text-3xl font-bold text-[#183640] tabular-nums">353</div>
              <div className="text-xs text-[#556970] mt-1 font-medium">Páginas organizadas</div>
            </div>
            <div className="p-4 rounded-xl bg-white border border-[#EAE5DA] shadow-xs">
              <div className="font-editorial text-2xl sm:text-3xl font-bold text-[#183640] tabular-nums">5</div>
              <div className="text-xs text-[#556970] mt-1 font-medium">Bonos de regalo</div>
            </div>
            <div className="p-4 rounded-xl bg-white border border-[#EAE5DA] shadow-xs">
              <div className="font-editorial text-2xl sm:text-3xl font-bold text-[#183640] tabular-nums">US$ 9,90</div>
              <div className="text-xs text-[#556970] mt-1 font-medium">Precio especial hoy</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
