import React, { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { TICKET_PRICE } from '../data/content';

interface StickyMobileBarProps {
  onOpenCheckout: () => void;
}

export const StickyMobileBar: React.FC<StickyMobileBarProps> = ({ onOpenCheckout }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show only when scrolled beyond 400px
      if (window.scrollY > 400) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#183640]/95 backdrop-blur-md border-t border-[#2D5360] px-4 py-2.5 shadow-2xl flex items-center justify-between gap-3 animate-fade-in">
      <div className="flex flex-col">
        <span className="text-[11px] font-semibold text-[#DFBD75] uppercase tracking-wide">
          11 Módulos + 5 Bonos
        </span>
        <span className="font-editorial text-lg font-bold text-white tabular-nums leading-none mt-0.5">
          US$ {TICKET_PRICE.toFixed(2).replace('.', ',')}
        </span>
      </div>

      <button
        onClick={onOpenCheckout}
        className="px-4 py-2 bg-[#C6A15B] hover:bg-[#D5B26E] text-[#16272E] text-xs font-bold rounded-xl transition-all shadow-md flex items-center gap-1.5 whitespace-nowrap shrink-0 cursor-pointer"
      >
        <span>Acceder Ahora</span>
        <ArrowRight className="w-3.5 h-3.5" />
      </button>
    </div>
  );
};
