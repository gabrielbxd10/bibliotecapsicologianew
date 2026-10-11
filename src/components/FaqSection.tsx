import React, { useState } from 'react';
import { FAQS_DATA } from '../data/content';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First one open by default

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 sm:py-24 bg-white border-b border-[#E6E1D6]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-[#856425] mb-2 flex items-center justify-center gap-1.5">
            <HelpCircle className="w-4 h-4 text-[#C6A15B]" />
            <span>PREGUNTAS FRECUENTES</span>
          </div>
          <h2 className="font-editorial text-3xl sm:text-4xl font-normal text-[#16272E] tracking-tight leading-tight mb-4">
            Resuelve todas tus dudas.
          </h2>
          <p className="text-sm text-[#4E6269] leading-relaxed">
            Todo lo que necesitas saber antes de acceder a tu biblioteca digital.
          </p>
        </div>

        <div className="space-y-3">
          {FAQS_DATA.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="border border-[#E3DDD2] rounded-2xl overflow-hidden bg-[#FAF9F5] transition-all hover:border-[#D1C9BA]"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-white transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="font-editorial text-base sm:text-lg font-bold text-[#183640]">
                    {faq.question}
                  </span>
                  <div className="w-7 h-7 rounded-lg bg-white border border-[#E0D9CB] flex items-center justify-center text-[#183640] shrink-0">
                    {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-[#4E6269] leading-relaxed border-t border-[#EDE7D9] bg-white">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
