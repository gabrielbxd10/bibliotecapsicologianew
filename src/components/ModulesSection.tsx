import React, { useState } from 'react';
import { ChevronDown, ChevronUp, BookOpen, Search, ArrowRight, Layers } from 'lucide-react';
import { MODULES_DATA, TICKET_PRICE } from '../data/content';

interface ModulesSectionProps {
  onOpenCheckout: () => void;
}

export const ModulesSection: React.FC<ModulesSectionProps> = ({ onOpenCheckout }) => {
  const [openModules, setOpenModules] = useState<number[]>([1, 2]); // Default open first two
  const [searchQuery, setSearchQuery] = useState<string>('');

  const toggleModule = (id: number) => {
    if (openModules.includes(id)) {
      setOpenModules(openModules.filter(mId => mId !== id));
    } else {
      setOpenModules([...openModules, id]);
    }
  };

  const expandAll = () => {
    if (openModules.length === MODULES_DATA.length) {
      setOpenModules([]);
    } else {
      setOpenModules(MODULES_DATA.map(m => m.id));
    }
  };

  const filteredModules = MODULES_DATA.filter(mod => {
    if (!searchQuery.trim()) return true;
    const q = searchQuery.toLowerCase();
    return (
      mod.title.toLowerCase().includes(q) ||
      mod.description.toLowerCase().includes(q) ||
      mod.topics.some(t => t.toLowerCase().includes(q))
    );
  });

  return (
    <section id="modulos" className="py-16 sm:py-24 bg-[#FAF9F5] border-b border-[#E6E1D6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-[#856425] mb-2">
            UNA BIBLIOTECA. ONCE GRANDES ÁREAS.
          </div>
          <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-normal text-[#16272E] tracking-tight leading-tight mb-4">
            11 módulos para construir una base comprensiva.
          </h2>
          <p className="text-sm sm:text-base text-[#4E6269] leading-relaxed">
            Desde las corrientes históricas y la neurobiología hasta la psicopatología y la metodología científica. Organizado para estudiar paso a paso o consultar con inmediatez.
          </p>
        </div>

        {/* Highlight Stats Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-10">
          <div className="bg-white border border-[#E3DDD2] p-5 rounded-2xl text-center shadow-xs">
            <div className="font-editorial text-3xl sm:text-4xl font-bold text-[#183640] tabular-nums">11</div>
            <p className="text-xs text-[#52646B] mt-1 font-medium">Módulos temáticos</p>
          </div>
          <div className="bg-white border border-[#E3DDD2] p-5 rounded-2xl text-center shadow-xs">
            <div className="font-editorial text-3xl sm:text-4xl font-bold text-[#183640] tabular-nums">353</div>
            <p className="text-xs text-[#52646B] mt-1 font-medium">Páginas organizadas</p>
          </div>
          <div className="bg-white border border-[#E3DDD2] p-5 rounded-2xl text-center shadow-xs">
            <div className="font-editorial text-3xl sm:text-4xl font-bold text-[#183640] tabular-nums">100%</div>
            <p className="text-xs text-[#52646B] mt-1 font-medium">Guías digitales en PDF</p>
          </div>
          <div className="bg-white border border-[#E3DDD2] p-5 rounded-2xl text-center shadow-xs">
            <div className="font-editorial text-3xl sm:text-4xl font-bold text-[#183640] tabular-nums">US$ 9,90</div>
            <p className="text-xs text-[#52646B] mt-1 font-medium">Acceso permanente</p>
          </div>
        </div>

        {/* Search & Expand Controls */}
        <div className="max-w-4xl mx-auto mb-6 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-[#8C9C9E] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Buscar tema o autor (ej. Neurobiología, Freud, Memoria, Ansiedad)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-[#DCD6C9] bg-white text-xs sm:text-sm text-[#183640] placeholder-[#8C9C9E] focus:outline-none focus:ring-2 focus:ring-[#183640]/30 transition-all shadow-xs"
            />
          </div>
          <button
            onClick={expandAll}
            className="px-4 py-2.5 rounded-xl border border-[#DCD6C9] bg-white text-xs font-semibold text-[#183640] hover:bg-[#F2EFE9] transition-colors whitespace-nowrap shrink-0 shadow-xs cursor-pointer flex items-center justify-center gap-1.5"
          >
            <Layers className="w-3.5 h-3.5 text-[#C6A15B]" />
            <span>{openModules.length === MODULES_DATA.length ? 'Colapsar todos' : 'Expandir todos los módulos'}</span>
          </button>
        </div>

        {/* Modules Accordion List */}
        <div className="max-w-4xl mx-auto space-y-3.5">
          {filteredModules.map((module) => {
            const isOpen = openModules.includes(module.id);
            return (
              <div
                key={module.id}
                className="bg-white border border-[#E3DDD2] rounded-2xl overflow-hidden shadow-xs transition-all hover:border-[#D1C9BA]"
              >
                {/* Module Trigger Header */}
                <button
                  onClick={() => toggleModule(module.id)}
                  className="w-full p-4 sm:p-5 flex items-center justify-between gap-4 text-left cursor-pointer hover:bg-[#FCFBF8] transition-colors"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3.5 sm:gap-4 flex-1">
                    <span className="w-9 h-9 rounded-xl bg-[#FAF7F0] border border-[#E4DEC0] text-[#183640] font-mono text-xs font-bold flex items-center justify-center shrink-0">
                      {String(module.id).padStart(2, '0')}
                    </span>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-sm sm:text-base font-bold text-[#183640] font-editorial truncate">
                        {module.title}
                      </h3>
                      <div className="flex items-center gap-2 text-xs text-[#6B7E84] mt-0.5">
                        <span className="font-mono tabular-nums">{module.pages} páginas</span>
                        <span aria-hidden="true">·</span>
                        <span>Formato digital</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    <span className="hidden sm:inline text-xs text-[#7A8E94]">
                      {isOpen ? 'Ocultar' : 'Ver contenido'}
                    </span>
                    <div className="w-8 h-8 rounded-lg bg-[#FAF9F5] border border-[#E6E1D6] flex items-center justify-center text-[#183640]">
                      {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </div>
                  </div>
                </button>

                {/* Module Expanded Content */}
                {isOpen && (
                  <div className="px-5 pb-5 pt-1 border-t border-[#F0EBE1] bg-[#FAF9F6]">
                    <p className="text-xs sm:text-sm text-[#4E6269] leading-relaxed mb-3.5">
                      {module.description}
                    </p>
                    <div>
                      <span className="text-[11px] font-semibold uppercase tracking-wider text-[#856425] block mb-2">
                        Subtemas y conceptos incluidos:
                      </span>
                      <div className="flex flex-wrap gap-x-3 gap-y-1.5 text-xs text-[#3E5158]">
                        {module.topics.map((topic, i) => (
                          <span key={i} className="flex items-center gap-2">
                            <span>{topic}</span>
                            {i < module.topics.length - 1 && (
                              <span className="text-[#BFB8A8]" aria-hidden="true">·</span>
                            )}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}

          {filteredModules.length === 0 && (
            <div className="text-center py-12 bg-white rounded-2xl border border-[#E3DDD2] p-8">
              <p className="text-sm text-[#6B7E84]">No se encontraron módulos con el término "{searchQuery}".</p>
              <button
                onClick={() => setSearchQuery('')}
                className="mt-3 text-xs text-[#183640] underline font-semibold cursor-pointer"
              >
                Limpiar búsqueda
              </button>
            </div>
          )}
        </div>

        {/* Fast Action CTA */}
        <div className="text-center mt-12">
          <button
            onClick={onOpenCheckout}
            className="px-6 py-3.5 text-sm sm:text-base font-bold text-white bg-[#183640] hover:bg-[#204552] rounded-xl shadow-md hover:shadow-lg transition-all inline-flex items-center gap-2 cursor-pointer"
          >
            <span>QUIERO MI BIBLIOTECA DE PSICOLOGÍA — US$ {TICKET_PRICE.toFixed(2).replace('.', ',')}</span>
            <ArrowRight className="w-4 h-4 text-[#C6A15B]" />
          </button>
          <p className="text-xs text-[#71848A] mt-2">
            11 módulos completos + 5 libros de bonificación incluidos en un solo pago
          </p>
        </div>
      </div>
    </section>
  );
};
