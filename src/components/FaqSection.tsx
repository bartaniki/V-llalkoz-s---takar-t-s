import React, { useState } from 'react';
import { HelpCircle, ChevronDown, Heart } from 'lucide-react';
import { WARM_FAQS } from '../data/cleaningData';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section id="gyik" className="py-16 md:py-24 bg-[#FAF6F0] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#EFE3D3] text-[#5C4028] text-xs font-bold uppercase tracking-wider border border-[#DFCEBA]">
            <HelpCircle className="w-3.5 h-3.5 text-[#C4682E]" />
            <span>Gyakori kérdések & Nyugtató válaszok</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#2E251E] font-bold tracking-tight">
            Minden, ami felmerülhet benned
          </h2>
          <p className="text-base sm:text-lg text-[#614D3E] leading-relaxed">
            Nincsenek tabuk, nincsenek kellemetlen kérdések. Szeretnénk, ha teljesen nyugodtan és magabiztosan dönthetnél.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5">
          {WARM_FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`rounded-3xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'border-[#C4682E] bg-white shadow-sm'
                    : 'border-[#EAE0D1] bg-[#FAF8F5] hover:border-[#DFD1BF]'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer focus:outline-hidden"
                >
                  <span className="font-serif font-bold text-[#2E251E] text-base sm:text-lg">
                    {faq.q}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform ${
                      isOpen ? 'bg-[#C4682E] text-white rotate-180' : 'bg-[#EAE0D1] text-[#695240]'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 text-xs sm:text-sm text-[#5C4839] leading-relaxed border-t border-[#F5ECE0] pt-4">
                    {faq.a}
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
