import React, { useState } from 'react';
import { Menu, X, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import { CHECKOUT_URL, TICKET_PRICE } from '../data/content';

interface HeaderProps {
  onOpenCheckout: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenCheckout }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-[#FAF9F5]/95 backdrop-blur-md border-b border-[#E6E1D6] transition-all">
      {/* Urgency Announcement Bar */}
      <div className="bg-[#183640] text-[#F3E7C9] py-2 px-4 text-center text-xs sm:text-sm font-medium tracking-wide flex items-center justify-center gap-2">
        <Sparkles className="w-3.5 h-3.5 text-[#C6A15B] shrink-0" />
        <span>OFERTA ESPECIAL HOY · ACCESO COMPLETO POR SOLO <strong className="text-white font-semibold">US$ {TICKET_PRICE.toFixed(2).replace('.', ',')}</strong></span>
        <span className="hidden md:inline text-[#C6A15B] font-mono tabular-nums">· PAGO ÚNICO</span>
      </div>

      {/* Main Navigation (3-Zone Top Bar Contract) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 gap-8">
          {/* Zone 1: Brand Wordmark */}
          <a
            href="#inicio"
            className="flex items-center gap-2.5 text-[#183640] hover:text-[#0E2026] transition-colors whitespace-nowrap shrink-0 group"
          >
            <span className="w-8 h-8 rounded-full bg-[#183640] text-[#E8DCC0] flex items-center justify-center font-serif text-lg font-bold group-hover:scale-105 transition-transform shadow-xs">
              Ψ
            </span>
            <span className="font-serif text-lg sm:text-xl font-bold tracking-tight text-[#183640]">
              BIBLIOTECA DE PSICOLOGÍA
            </span>
          </a>

          {/* Zone 2: Navigation Links (single-line, clean unboxed links) */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-[#465A61]">
            <a
              href="#muestras"
              className="hover:text-[#183640] transition-colors whitespace-nowrap shrink-0"
            >
              Muestras
            </a>
            <a
              href="#modulos"
              className="hover:text-[#183640] transition-colors whitespace-nowrap shrink-0"
            >
              11 Módulos
            </a>
            <a
              href="#bonos"
              className="hover:text-[#183640] transition-colors whitespace-nowrap shrink-0"
            >
              5 Bonos
            </a>
            <a
              href="#garantia"
              className="hover:text-[#183640] transition-colors whitespace-nowrap shrink-0"
            >
              Garantía
            </a>
            <a
              href="#faq"
              className="hover:text-[#183640] transition-colors whitespace-nowrap shrink-0"
            >
              Preguntas
            </a>
          </nav>

          {/* Zone 3: Primary CTA Action */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <button
              onClick={onOpenCheckout}
              className="px-5 py-2.5 text-xs sm:text-sm font-semibold tracking-wide text-white bg-[#183640] hover:bg-[#204552] active:bg-[#0F232A] rounded-xl shadow-xs transition-all flex items-center gap-2 whitespace-nowrap shrink-0 hover:shadow-md cursor-pointer"
            >
              <span>Acceder por US$ {TICKET_PRICE.toFixed(2).replace('.', ',')}</span>
              <ArrowRight className="w-4 h-4 text-[#C6A15B]" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={onOpenCheckout}
              className="sm:hidden px-3 py-1.5 text-xs font-semibold text-white bg-[#183640] rounded-lg cursor-pointer"
            >
              US$ {TICKET_PRICE.toFixed(2).replace('.', ',')}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#183640] hover:bg-[#EFECE4] rounded-lg transition-colors cursor-pointer"
              aria-label="Alternar menú"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[#E6E1D6] bg-[#FAF9F5] px-4 pt-3 pb-6 space-y-3">
          <nav className="flex flex-col space-y-2 text-sm font-medium text-[#364950]">
            <a
              href="#muestras"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-[#EFECE4] transition-colors"
            >
              Muestras por dentro (25 páginas)
            </a>
            <a
              href="#modulos"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-[#EFECE4] transition-colors"
            >
              Los 11 Módulos temáticos
            </a>
            <a
              href="#bonos"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-[#EFECE4] transition-colors"
            >
              5 Libros de Bono incluidos
            </a>
            <a
              href="#garantia"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-[#EFECE4] transition-colors"
            >
              Garantía de 7 días
            </a>
            <a
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg hover:bg-[#EFECE4] transition-colors"
            >
              Preguntas frecuentes
            </a>
          </nav>
          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCheckout();
              }}
              className="w-full py-3 text-center text-sm font-semibold text-white bg-[#183640] rounded-xl shadow-xs flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Quiero el Paquete Completo — US$ {TICKET_PRICE.toFixed(2).replace('.', ',')}</span>
              <ArrowRight className="w-4 h-4 text-[#C6A15B]" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
