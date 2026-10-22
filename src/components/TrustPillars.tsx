import React from 'react';
import { 
  Heart, 
  Key, 
  Smile, 
  PawPrint, 
  ShieldCheck, 
  Coffee,
  CheckCircle2
} from 'lucide-react';
import { FAMILY_BENEFITS } from '../data/cleaningData';

export const TrustPillars: React.FC = () => {
  const icons = [Heart, Smile, Key, PawPrint];

  return (
    <section id="megbizhatosag" className="py-16 md:py-24 bg-[#FAF6F0] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Warm Storytelling Intro */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#EFE3D3] text-[#5C4028] text-xs font-bold uppercase tracking-wider border border-[#DFCEBA]">
            <Heart className="w-3.5 h-3.5 text-[#C4682E] fill-[#C4682E]" />
            <span>A bizalom a legfontosabb</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-4xl text-[#2E251E] font-bold tracking-tight">
            Tudjuk, hogy a lakásod nem csupán négy fal: ez a te privát menedéked.
          </h2>
          <p className="text-base sm:text-lg text-[#614D3E] leading-relaxed">
            Éppen ezért nálunk a megbízhatóság személyes érték. Nincs idegenek felvonulása, sem kellemetlen feszengés: diszkrét, gondos és odafigyelő segítséget nyújtunk.
          </p>
        </div>

        {/* 4 Organic Family-style Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {FAMILY_BENEFITS.map((benefit, idx) => {
            const Icon = icons[idx];
            return (
              <div 
                key={idx}
                className="bg-white rounded-3xl p-6 sm:p-8 border border-[#EBE1D3] shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between relative group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-[#F6EDE2] text-[#C4682E] flex items-center justify-center group-hover:scale-105 transition-transform shadow-xs">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-bold text-[#8C5325] bg-[#F9EBDD] px-3 py-1 rounded-full border border-[#EED7C1]">
                      {benefit.note}
                    </span>
                  </div>

                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#2E251E] mb-1">
                    {benefit.title}
                  </h3>
                  <p className="text-xs font-semibold text-[#C4682E] mb-3">
                    {benefit.short}
                  </p>

                  <p className="text-sm text-[#5C4A3C] leading-relaxed">
                    {benefit.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Personal handwritten note & promise section */}
        <div className="mt-12 bg-gradient-to-br from-[#FFFDF9] to-[#FBF5EC] rounded-3xl p-6 sm:p-10 border-2 border-dashed border-[#DECFBD] shadow-sm relative overflow-hidden">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <span className="font-handwriting text-3xl text-[#C4682E] block">
              „Úgy vigyázunk a lakásodra és a holmidra, mint a legkedvesebb barátunkéra.”
            </span>
            <p className="text-xs sm:text-sm text-[#5E4B3C] leading-relaxed">
              Munkatársaink feddhetetlen erkölcsi bizonyítvánnyal, lelkiismeretesen, alaposan és tisztelettudóan végezik a munkájukat minden egyes megbízás alkalmával.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-semibold text-[#543E2C] pt-2">
              <span className="flex items-center gap-1.5 bg-white px-3 py-1 rounded-xl border border-[#E6D8C6]">
                <ShieldCheck className="w-4 h-4 text-[#C4682E]" />
                Feddhetetlen erkölcsi bizonyítvány
              </span>
              <span className="flex items-center gap-1.5 bg-white px-3 py-1 rounded-xl border border-[#E6D8C6]">
                <CheckCircle2 className="w-4 h-4 text-[#C4682E]" />
                Lelkiismeretes, gondos odafigyelés
              </span>
              <span className="flex items-center gap-1.5 bg-white px-3 py-1 rounded-xl border border-[#E6D8C6]">
                <Coffee className="w-4 h-4 text-[#C4682E]" />
                Barátságos egyeztetés
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
