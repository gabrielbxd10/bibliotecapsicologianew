import React, { useEffect, useState } from 'react';
import { X, ArrowRight, ShieldCheck, Sparkles, BookOpen } from 'lucide-react';
import { TICKET_PRICE, ORIGINAL_PRICE, CHECKOUT_URL } from '../data/content';

interface ExitIntentModalProps {
  onOpenCheckout: () => void;
}

export const ExitIntentModal: React.FC<ExitIntentModalProps> = ({ onOpenCheckout }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      // Trigger when mouse moves out of top of browser window and hasn't triggered yet
      if (e.clientY <= 15 && !hasTriggered) {
        setIsVisible(true);
        setHasTriggered(true);
      }
    };

    // Add listener after 6 seconds of dwell
    const timer = setTimeout(() => {
      document.addEventListener('mouseleave', handleMouseLeave);
    }, 6000);

    return () => {
      clearTimeout(timer);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [hasTriggered]);

  if (!isVisible) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 bg-[#0E1E24]/85 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4 overflow-y-auto"
      onClick={() => setIsVisible(false)}
    >
      <div
        className="bg-white rounded-3xl border-2 border-[#C6A15B] max-w-md w-full p-6 sm:p-8 shadow-2xl relative my-auto text-center"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={() => setIsVisible(false)}
          className="absolute top-4 right-4 p-2 text-[#7E8F94] hover:text-[#183640] rounded-xl hover:bg-[#F2EFE9] transition-colors cursor-pointer"
          aria-label="Cerrar oferta"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="text-xs font-bold uppercase tracking-wider text-[#856425] mb-2 flex items-center justify-center gap-1.5">
          <Sparkles className="w-4 h-4 text-[#C6A15B]" />
          <span>ANTES DE IRTE</span>
        </div>

        <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-[#183640] mb-2">
          Tu biblioteca completa por US$ {TICKET_PRICE.toFixed(2).replace('.', ',')}
        </h3>

        <p className="text-xs sm:text-sm text-[#50636A] leading-relaxed mb-6">
          Los 11 módulos completos (353 páginas) y los 5 bonos adicionales, con entrega digital inmediata y garantía de 7 días.
        </p>

        {/* Highlight Price Box */}
        <div className="bg-[#FAF7F0] border border-[#E8DEC7] rounded-2xl p-4 mb-6">
          <div className="text-xs text-[#7A8A8F]">
            <span>Precio regular: </span>
            <s className="font-mono">US$ {ORIGINAL_PRICE.toFixed(2).replace('.', ',')}</s>
          </div>
          <div className="font-editorial text-4xl sm:text-5xl font-bold text-[#183640] tabular-nums mt-1">
            US$ {TICKET_PRICE.toFixed(2).replace('.', ',')}
          </div>
          <p className="text-xs text-[#20724A] font-semibold mt-1">
            Pago único · Sin costos adicionales
          </p>
        </div>

        {/* CTA Button */}
        <button
          onClick={() => {
            setIsVisible(false);
            onOpenCheckout();
          }}
          className="w-full py-4 px-6 text-sm font-bold text-white bg-[#183640] hover:bg-[#204552] rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer mb-3"
        >
          <span>SÍ, QUIERO LA BIBLIOTECA — US$ {TICKET_PRICE.toFixed(2).replace('.', ',')}</span>
          <ArrowRight className="w-4 h-4 text-[#C6A15B]" />
        </button>

        <button
          onClick={() => setIsVisible(false)}
          className="text-xs text-[#71848A] hover:text-[#183640] underline cursor-pointer"
        >
          Seguir viendo la página
        </button>
      </div>
    </div>
  );
};
