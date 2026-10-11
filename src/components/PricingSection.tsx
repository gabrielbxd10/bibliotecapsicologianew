import React from 'react';
import { Check, ShieldCheck, ArrowRight, Sparkles, Lock, CreditCard, RefreshCw } from 'lucide-react';
import { TICKET_PRICE, ORIGINAL_PRICE, BONUSES_DATA, CHECKOUT_URL } from '../data/content';

interface PricingSectionProps {
  onOpenCheckout: () => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onOpenCheckout }) => {
  return (
    <section id="planes" className="py-16 sm:py-24 bg-[#F5F2EA] border-b border-[#E6E1D6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-[#856425] mb-2">
            TU BIBLIOTECA COMPLETA
          </div>
          <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-normal text-[#16272E] tracking-tight leading-tight mb-4">
            Invierte en una forma más organizada de estudiar Psicología.
          </h2>
          <p className="text-sm sm:text-base text-[#4E6269] leading-relaxed">
            11 módulos temáticos completos y los 5 libros de bonificación incluidos en una única inversión.
          </p>
        </div>

        {/* Pricing Card */}
        <div className="max-w-2xl mx-auto">
          <div className="relative rounded-3xl bg-white border-2 border-[#C6A15B] shadow-xl overflow-hidden p-6 sm:p-10">
            {/* Top Recommended Banner */}
            <div className="bg-gradient-to-r from-[#9C742F] via-[#DFBD75] to-[#A88037] text-[#16272E] text-center font-bold text-xs uppercase tracking-wider py-2.5 px-4 -mx-6 -mt-6 sm:-mx-10 sm:-mt-10 mb-8">
              ★ OPCIÓN DESTACADA · BIBLIOTECA COMPLETA + 5 BONOS
            </div>

            <div className="text-center mb-6">
              <div className="text-xs font-semibold uppercase tracking-wider text-[#856425] mb-1">
                PAQUETE COMPLETO
              </div>
              <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-[#183640]">
                Amplía tu colección de estudio
              </h3>
              <p className="text-xs sm:text-sm text-[#5C7077] mt-1">
                Acceso digital permanente a todos los materiales
              </p>
            </div>

            {/* Price Box */}
            <div className="bg-[#FAF7F0] border border-[#E8DEC7] rounded-2xl p-5 text-center mb-8">
              <div className="text-xs text-[#7A8A8F]">
                <span>Biblioteca + 5 Bonos · Valor de referencia estimado: </span>
                <s className="font-mono text-sm text-[#7A8A8F]">US$ {ORIGINAL_PRICE.toFixed(2).replace('.', ',')}</s>
              </div>

              <div className="flex items-baseline justify-center gap-2 mt-2">
                <span className="text-lg font-bold text-[#183640]">US$</span>
                <span className="font-editorial text-5xl sm:text-6xl font-bold text-[#183640] tabular-nums tracking-tight">
                  {TICKET_PRICE.toFixed(2).replace('.', ',')}
                </span>
              </div>

              <p className="text-xs font-semibold text-[#20724A] mt-2">
                Pago único · Acceso digital inmediato · Sin mensualidades
              </p>
            </div>

            {/* What's Included */}
            <div className="space-y-3.5 mb-8">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#183640]">
                Todo lo que recibes de inmediato:
              </h4>
              <ul className="space-y-3 text-xs sm:text-sm text-[#34474E]">
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#E7F3EC] text-[#20724A] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span><strong>Los 11 módulos completos:</strong> fundamentos, neuropsicología, cognición, desarrollo, personalidad, emoción, social, psicopatología, evaluación, psicoeducación e investigación.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#E7F3EC] text-[#20724A] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span><strong>Las 353 páginas ilustradas:</strong> explicaciones didácticas, diagramas de síntesis y contenido visual organizado.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#E7F3EC] text-[#20724A] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span><strong>Formato 100% digital:</strong> compatible con cualquier teléfono móvil, tablet, iPad o computadora personal.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#E7F3EC] text-[#20724A] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span><strong>Lectura sin conexión:</strong> descárgalos en tus dispositivos y consúltalos cuando y donde quieras.</span>
                </li>
              </ul>
            </div>

            {/* Bonuses Included Inside The Plan */}
            <div className="bg-[#FAF9F5] border border-[#E5DFD2] rounded-2xl p-5 mb-8">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#856425] mb-3">
                <Sparkles className="w-4 h-4 text-[#C6A15B]" />
                <span>ADEMÁS, RECIBES LOS 5 BONOS EXCLUSIVOS GRATIS:</span>
              </div>
              <ul className="space-y-2 text-xs text-[#3E5259]">
                {BONUSES_DATA.map((bonus) => (
                  <li key={bonus.id} className="flex items-center justify-between gap-2 border-b border-[#EFECE3] pb-1.5 last:border-0 last:pb-0">
                    <span className="font-medium">✓ {bonus.title}</span>
                    <span className="text-[11px] text-[#20724A] font-semibold bg-[#E7F3EC] px-2 py-0.5 rounded">Incluido</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Action CTA */}
            <button
              onClick={onOpenCheckout}
              className="w-full py-4 px-6 text-sm sm:text-base font-bold text-white bg-[#183640] hover:bg-[#204552] active:bg-[#0E2026] rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 group cursor-pointer"
            >
              <span>SÍ, QUIERO EL PAQUETE COMPLETO — US$ {TICKET_PRICE.toFixed(2).replace('.', ',')}</span>
              <ArrowRight className="w-5 h-5 text-[#C6A15B] group-hover:translate-x-1 transition-transform" />
            </button>

            <div className="mt-4 text-center space-y-1.5">
              <p className="text-xs text-[#6B7E84] flex items-center justify-center gap-1.5">
                <Lock className="w-3.5 h-3.5 text-[#20724A]" />
                <span>Pago 100% seguro a través de Hotmart · Encriptación SSL 256-bit</span>
              </p>
              <p className="text-[11px] text-[#869599]">
                Conversión automática a tu moneda local en la pasarela de pago.
              </p>
            </div>
          </div>
        </div>

        {/* 7-Day Guarantee Box */}
        <div id="garantia" className="max-w-2xl mx-auto mt-12 bg-white border border-[#E3DDD2] rounded-3xl p-6 sm:p-8 shadow-xs flex flex-col sm:flex-row items-center gap-6">
          <img
            src="/assets/garantia.webp"
            alt="Sello de garantía incondicional de 7 días"
            className="w-28 h-28 sm:w-32 sm:h-32 object-contain shrink-0"
            loading="lazy"
            width={447}
            height={447}
          />
          <div className="text-center sm:text-left">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#856425] block mb-1">
              COMPRA CON TOTAL TRANQUILIDAD
            </span>
            <h3 className="font-editorial text-2xl font-bold text-[#183640] mb-2">
              Garantía incondicional de 7 días.
            </h3>
            <p className="text-xs sm:text-sm text-[#50636A] leading-relaxed mb-2">
              Accede a la biblioteca completa, lee las 353 páginas y los 5 bonos. Si durante los primeros 7 días sientes que no cumplió tus expectativas, puedes solicitar el 100% de tu dinero de vuelta con un solo clic.
            </p>
            <p className="text-[11px] text-[#7E8F94]">
              Sin preguntas complicadas. Sin mensualidades. Acceso digital inmediato.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
