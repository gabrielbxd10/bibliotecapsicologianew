import React, { useState } from 'react';
import { X, ShieldCheck, Check, ArrowRight, Lock, CreditCard, Sparkles, ExternalLink } from 'lucide-react';
import { TICKET_PRICE, ORIGINAL_PRICE, CHECKOUT_URL, BONUSES_DATA } from '../data/content';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({ isOpen, onClose }) => {
  const [isRedirecting, setIsRedirecting] = useState(false);

  if (!isOpen) return null;

  const handleProceed = () => {
    setIsRedirecting(true);
    setTimeout(() => {
      window.location.href = CHECKOUT_URL;
    }, 600);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 bg-[#0E1E24]/80 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-3xl border border-[#DCD6C9] max-w-lg w-full p-6 sm:p-8 shadow-2xl relative my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-[#7E8F94] hover:text-[#183640] rounded-xl hover:bg-[#F2EFE9] transition-colors cursor-pointer"
          aria-label="Cerrar ventana"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#856425] bg-[#FAF5E8] border border-[#E9DECA] px-3 py-1 rounded-full mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#C6A15B]" />
            <span>ACCESO COMPLETO INMEDIATO</span>
          </div>
          <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-[#183640]">
            Biblioteca de Psicología
          </h3>
          <p className="text-xs sm:text-sm text-[#556970] mt-1">
            11 módulos digitales + 5 libros adicionales de regalo
          </p>
        </div>

        {/* Summary Card */}
        <div className="bg-[#FAF9F5] border border-[#E6E1D6] rounded-2xl p-4 sm:p-5 mb-6">
          <div className="flex items-center justify-between text-xs text-[#7A8A8F] pb-2 border-b border-[#ECE7DC]">
            <span>Precio habitual de referencia:</span>
            <s className="font-mono">US$ {ORIGINAL_PRICE.toFixed(2).replace('.', ',')}</s>
          </div>
          <div className="flex items-center justify-between pt-2">
            <div>
              <span className="text-xs font-bold text-[#20724A] bg-[#E7F3EC] px-2 py-0.5 rounded">
                OFERTA ESPECIAL
              </span>
              <p className="text-xs text-[#6B7E84] mt-1">Pago único definitivo</p>
            </div>
            <div className="text-right">
              <span className="font-editorial text-3xl font-bold text-[#183640] tabular-nums">
                US$ {TICKET_PRICE.toFixed(2).replace('.', ',')}
              </span>
            </div>
          </div>
        </div>

        {/* Quick Highlights */}
        <ul className="space-y-2 text-xs sm:text-sm text-[#45585F] mb-6">
          <li className="flex items-center gap-2">
            <Check className="w-4 h-4 text-[#20724A] shrink-0" />
            <span>353 páginas completas organizadas en 11 áreas</span>
          </li>
          <li className="flex items-center gap-2">
            <Check className="w-4 h-4 text-[#20724A] shrink-0" />
            <span>5 bonos digitales de regalo incluidos (valor de US$ 50)</span>
          </li>
          <li className="flex items-center gap-2">
            <Check className="w-4 h-4 text-[#20724A] shrink-0" />
            <span>Descarga inmediata en PDF para móvil, tablet o PC</span>
          </li>
          <li className="flex items-center gap-2">
            <Check className="w-4 h-4 text-[#20724A] shrink-0" />
            <span>Garantía de reembolso de 7 días 100% segura</span>
          </li>
        </ul>

        {/* Proceed Button */}
        <button
          onClick={handleProceed}
          disabled={isRedirecting}
          className="w-full py-4 px-6 text-sm sm:text-base font-bold text-white bg-[#183640] hover:bg-[#204552] active:bg-[#0E2026] rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75"
        >
          {isRedirecting ? (
            <span>Redirigiendo a Hotmart Seguro...</span>
          ) : (
            <>
              <span>CONTINUAR AL CHECKOUT — US$ {TICKET_PRICE.toFixed(2).replace('.', ',')}</span>
              <ArrowRight className="w-4 h-4 text-[#C6A15B]" />
            </>
          )}
        </button>

        {/* Security strip */}
        <div className="mt-4 pt-3 border-t border-[#EAE5DA] text-center">
          <p className="text-[11px] text-[#788B91] flex items-center justify-center gap-1.5">
            <Lock className="w-3.5 h-3.5 text-[#20724A]" />
            <span>Pasarela oficial protegida con encriptación SSL de 256 bits</span>
          </p>
          <p className="text-[10px] text-[#93A2A7] mt-1">
            Podrás abonar con tarjeta, PayPal o el medio de pago local disponible en tu país.
          </p>
        </div>
      </div>
    </div>
  );
};
