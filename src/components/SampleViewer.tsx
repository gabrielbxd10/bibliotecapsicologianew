import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Maximize2, X, ZoomIn, ZoomOut, ArrowRight, BookOpen } from 'lucide-react';
import { SAMPLE_PAGES, SampleItem, TICKET_PRICE } from '../data/content';

interface SampleViewerProps {
  onOpenCheckout: () => void;
}

export const SampleViewer: React.FC<SampleViewerProps> = ({ onOpenCheckout }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedSampleIndex, setSelectedSampleIndex] = useState<number | null>(null);
  const [isZoomed, setIsZoomed] = useState<boolean>(false);
  const trackRef = useRef<HTMLDivElement>(null);

  // Filtered samples
  const filteredSamples = SAMPLE_PAGES.filter(sample => {
    if (activeCategory === 'all') return true;
    if (activeCategory === 'neuro' && sample.module === 2) return true;
    if (activeCategory === 'cognition' && sample.module === 3) return true;
    if (activeCategory === 'emotion' && sample.module === 6) return true;
    if (activeCategory === 'clinical' && (sample.module === 8 || sample.module === 9 || sample.module === 10)) return true;
    if (activeCategory === 'foundations' && (sample.module === 1 || sample.module === 4 || sample.module === 5 || sample.module === 7 || sample.module === 11)) return true;
    return true;
  });

  const scroll = (direction: 'left' | 'right') => {
    if (trackRef.current) {
      const scrollAmount = direction === 'left' ? -380 : 380;
      trackRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedSampleIndex === null) return;
      if (e.key === 'ArrowRight') {
        setSelectedSampleIndex((prev) => (prev !== null ? (prev + 1) % SAMPLE_PAGES.length : null));
        setIsZoomed(false);
      } else if (e.key === 'ArrowLeft') {
        setSelectedSampleIndex((prev) => (prev !== null ? (prev - 1 + SAMPLE_PAGES.length) % SAMPLE_PAGES.length : null));
        setIsZoomed(false);
      } else if (e.key === 'Escape') {
        setSelectedSampleIndex(null);
        setIsZoomed(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedSampleIndex]);

  const currentSample = selectedSampleIndex !== null ? SAMPLE_PAGES[selectedSampleIndex] : null;

  return (
    <section id="muestras" className="py-16 sm:py-24 bg-white border-b border-[#E6E1D6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-[#856425] mb-2">
            MIRA POR DENTRO EL MATERIAL
          </div>
          <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-normal text-[#16272E] tracking-tight leading-tight mb-4">
            Comprueba la calidad antes de comprar.
          </h2>
          <p className="text-sm sm:text-base text-[#4E6269] leading-relaxed">
            25 muestras reales de las 353 páginas de la biblioteca. Diagramas claros, infografías didácticas y síntesis visuales listas para consultar. Toca cualquier página para ampliar en pantalla completa.
          </p>
        </div>

        {/* Filter Tabs (Interactive Segmented Filter) */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-3.5 py-1.5 text-xs sm:text-sm font-medium rounded-lg transition-all cursor-pointer ${
              activeCategory === 'all'
                ? 'bg-[#183640] text-white shadow-xs'
                : 'bg-[#F2EFE9] text-[#4A5D64] hover:bg-[#E7E3D9] hover:text-[#183640]'
            }`}
          >
            Todas las muestras (25)
          </button>
          <button
            onClick={() => setActiveCategory('neuro')}
            className={`px-3.5 py-1.5 text-xs sm:text-sm font-medium rounded-lg transition-all cursor-pointer ${
              activeCategory === 'neuro'
                ? 'bg-[#183640] text-white shadow-xs'
                : 'bg-[#F2EFE9] text-[#4A5D64] hover:bg-[#E7E3D9] hover:text-[#183640]'
            }`}
          >
            Neuropsicología (Módulo 2)
          </button>
          <button
            onClick={() => setActiveCategory('cognition')}
            className={`px-3.5 py-1.5 text-xs sm:text-sm font-medium rounded-lg transition-all cursor-pointer ${
              activeCategory === 'cognition'
                ? 'bg-[#183640] text-white shadow-xs'
                : 'bg-[#F2EFE9] text-[#4A5D64] hover:bg-[#E7E3D9] hover:text-[#183640]'
            }`}
          >
            Cognición y Memoria (Módulo 3)
          </button>
          <button
            onClick={() => setActiveCategory('emotion')}
            className={`px-3.5 py-1.5 text-xs sm:text-sm font-medium rounded-lg transition-all cursor-pointer ${
              activeCategory === 'emotion'
                ? 'bg-[#183640] text-white shadow-xs'
                : 'bg-[#F2EFE9] text-[#4A5D64] hover:bg-[#E7E3D9] hover:text-[#183640]'
            }`}
          >
            Emoción y Motivación (Módulo 6)
          </button>
          <button
            onClick={() => setActiveCategory('clinical')}
            className={`px-3.5 py-1.5 text-xs sm:text-sm font-medium rounded-lg transition-all cursor-pointer ${
              activeCategory === 'clinical'
                ? 'bg-[#183640] text-white shadow-xs'
                : 'bg-[#F2EFE9] text-[#4A5D64] hover:bg-[#E7E3D9] hover:text-[#183640]'
            }`}
          >
            Psicopatología y Psicometría
          </button>
          <button
            onClick={() => setActiveCategory('foundations')}
            className={`px-3.5 py-1.5 text-xs sm:text-sm font-medium rounded-lg transition-all cursor-pointer ${
              activeCategory === 'foundations'
                ? 'bg-[#183640] text-white shadow-xs'
                : 'bg-[#F2EFE9] text-[#4A5D64] hover:bg-[#E7E3D9] hover:text-[#183640]'
            }`}
          >
            Fundamentos y Social
          </button>
        </div>

        {/* Carousel Navigation Strip */}
        <div className="flex items-center justify-between mb-4 px-1">
          <div className="text-xs text-[#6B7E84] flex items-center gap-2">
            <BookOpen className="w-3.5 h-3.5 text-[#C6A15B]" />
            <span>Mostrando {filteredSamples.length} páginas reales · Desliza horizontalmente</span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => scroll('left')}
              className="p-2 rounded-lg bg-[#FAF9F5] border border-[#E0DAD0] text-[#183640] hover:bg-[#EFECE3] transition-colors cursor-pointer"
              aria-label="Desplazar a la izquierda"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="p-2 rounded-lg bg-[#FAF9F5] border border-[#E0DAD0] text-[#183640] hover:bg-[#EFECE3] transition-colors cursor-pointer"
              aria-label="Desplazar a la derecha"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Horizontal Scroll Track */}
        <div
          ref={trackRef}
          className="flex gap-4 overflow-x-auto pb-6 pt-2 snap-x snap-mandatory no-scrollbar cursor-grab active:cursor-grabbing"
        >
          {filteredSamples.map((sample, idx) => {
            const originalIndex = SAMPLE_PAGES.findIndex(s => s.src === sample.src);
            return (
              <div
                key={sample.src}
                onClick={() => {
                  setSelectedSampleIndex(originalIndex);
                  setIsZoomed(false);
                }}
                className="flex-none w-[260px] sm:w-[290px] snap-start bg-[#FAF9F5] rounded-xl border border-[#E6E1D6] overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all cursor-pointer group"
              >
                <div className="relative aspect-[3/4] bg-[#EDE9E1] overflow-hidden">
                  <img
                    src={sample.src}
                    alt={`${sample.moduleName} - Página ${sample.page}`}
                    className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-[#183640]/0 group-hover:bg-[#183640]/25 transition-colors flex items-center justify-center">
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity bg-white/90 text-[#183640] px-3 py-1.5 rounded-lg text-xs font-semibold shadow-xs flex items-center gap-1.5 backdrop-blur-xs">
                      <Maximize2 className="w-3.5 h-3.5" />
                      Ampliar página
                    </span>
                  </div>
                </div>
                <div className="p-3.5 text-left border-t border-[#EAE5DA]">
                  <p className="text-xs font-semibold text-[#183640] truncate">
                    {sample.moduleName}
                  </p>
                  <p className="text-[11px] text-[#71848A] mt-0.5">
                    Módulo {sample.module} · Página {sample.page}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner & Fast Action */}
        <div className="mt-8 text-center p-6 rounded-2xl bg-[#F7F4EB] border border-[#E5DFD1] max-w-2xl mx-auto">
          <p className="font-editorial text-lg sm:text-xl text-[#183640] font-normal mb-2">
            25 de las 353 páginas completas.
          </p>
          <p className="text-xs sm:text-sm text-[#52646B] mb-5">
            Acceso a los 11 módulos descargables en PDF de alta calidad para cualquier dispositivo.
          </p>
          <button
            onClick={onOpenCheckout}
            className="px-6 py-3 text-xs sm:text-sm font-bold text-white bg-[#183640] hover:bg-[#204552] rounded-xl shadow-xs transition-all inline-flex items-center gap-2 cursor-pointer"
          >
            <span>QUIERO ACCEDER A LA BIBLIOTECA — US$ {TICKET_PRICE.toFixed(2).replace('.', ',')}</span>
            <ArrowRight className="w-4 h-4 text-[#C6A15B]" />
          </button>
        </div>
      </div>

      {/* Lightbox Modal Dialog */}
      {selectedSampleIndex !== null && currentSample && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-[#0E1E24]/85 backdrop-blur-md flex flex-col justify-between p-2 sm:p-4 overflow-hidden"
          onClick={() => setSelectedSampleIndex(null)}
        >
          {/* Modal Header */}
          <div
            className="flex items-center justify-between bg-[#183640] text-white px-4 py-3 rounded-xl max-w-4xl w-full mx-auto shadow-md border border-white/10"
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              <p className="text-xs sm:text-sm font-semibold text-white">
                Muestra {selectedSampleIndex + 1} de {SAMPLE_PAGES.length} · {currentSample.moduleName}
              </p>
              <p className="text-[11px] text-[#C2D3DA]">
                Módulo {currentSample.module} · Página {currentSample.page} de la guía
              </p>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsZoomed(!isZoomed)}
                className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer text-xs flex items-center gap-1"
                title={isZoomed ? "Reducir zoom" : "Aumentar zoom"}
              >
                {isZoomed ? <ZoomOut className="w-4 h-4" /> : <ZoomIn className="w-4 h-4" />}
                <span className="hidden sm:inline">{isZoomed ? 'Ajustar' : 'Zoom'}</span>
              </button>
              <button
                onClick={() => setSelectedSampleIndex(null)}
                className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
                aria-label="Cerrar visor"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Modal Body with Image & Navigation */}
          <div
            className="flex-1 relative flex items-center justify-center my-2 overflow-auto max-w-4xl w-full mx-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Prev Button */}
            <button
              onClick={() => {
                setSelectedSampleIndex((selectedSampleIndex - 1 + SAMPLE_PAGES.length) % SAMPLE_PAGES.length);
                setIsZoomed(false);
              }}
              className="absolute left-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-[#183640]/90 text-white hover:bg-[#183640] shadow-lg flex items-center justify-center transition-all cursor-pointer"
              aria-label="Página anterior"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Lightbox Image */}
            <div className={`overflow-auto max-h-[75vh] flex items-center justify-center transition-all ${isZoomed ? 'scale-125 cursor-zoom-out' : 'cursor-zoom-in'}`}>
              <img
                src={currentSample.src}
                alt={`${currentSample.moduleName} - Página ${currentSample.page}`}
                onClick={() => setIsZoomed(!isZoomed)}
                className="max-h-[72vh] w-auto object-contain rounded-lg shadow-2xl bg-white border border-[#DDD]"
              />
            </div>

            {/* Next Button */}
            <button
              onClick={() => {
                setSelectedSampleIndex((selectedSampleIndex + 1) % SAMPLE_PAGES.length);
                setIsZoomed(false);
              }}
              className="absolute right-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-[#183640]/90 text-white hover:bg-[#183640] shadow-lg flex items-center justify-center transition-all cursor-pointer"
              aria-label="Página siguiente"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Modal Footer */}
          <div
            className="bg-[#183640] text-white px-4 py-2.5 rounded-xl max-w-4xl w-full mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-xs border border-white/10"
            onClick={(e) => e.stopPropagation()}
          >
            <p className="text-[#D1DFE4] text-center sm:text-left">
              Usa las flechas del teclado (← / →) o los botones para navegar entre muestras.
            </p>
            <button
              onClick={() => {
                setSelectedSampleIndex(null);
                onOpenCheckout();
              }}
              className="px-4 py-1.5 bg-[#C6A15B] hover:bg-[#D5B26E] text-[#16272E] font-bold rounded-lg transition-colors cursor-pointer whitespace-nowrap flex items-center gap-1.5"
            >
              <span>Comprar biblioteca completa (US$ {TICKET_PRICE.toFixed(2).replace('.', ',')})</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
