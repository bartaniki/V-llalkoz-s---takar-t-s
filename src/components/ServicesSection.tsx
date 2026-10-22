import React from 'react';
import { Heart, Check, ArrowRight, Clock } from 'lucide-react';
import { CONTACT_INFO } from '../data/cleaningData';

interface ServicesSectionProps {
  onSelectService: (serviceName: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const serviceItems = [
    'Porszívózás és kímélő felmosás minden helyiségben',
    'Portalanítás a polcokon, asztalokon és szabad bútorfelületeken',
    'Fürdőszoba és WC higiénikus, alapos tisztítása és vízkőtelenítése',
    'Konyhapult, mosogatótálca, csaptelep és főzőlap zsírtalanítása',
    'Szemetesek kiürítése és új szemeteszsákok behelyezése',
    'Tükrök és piperetartók csíkmentes áttörlése',
  ];

  return (
    <section id="szolgaltatasok" className="py-16 md:py-24 bg-[#FAF6F0] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#EFE3D3] text-[#5C4028] text-xs font-bold uppercase tracking-wider border border-[#DFCEBA]">
            <Heart className="w-3.5 h-3.5 text-[#C4682E] fill-[#C4682E]" />
            <span>Szolgáltatásunk</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#2E251E] font-bold tracking-tight">
            Rendszeres gondoskodó takarítás
          </h2>
          <p className="text-base sm:text-lg text-[#614D3E] leading-relaxed">
            Átlátható, megbízható alapcsomagunk mindent tartalmaz, ami egy folyamatosan tiszta, rendezett és illatos otthonhoz szükséges.
          </p>
        </div>

        {/* Single Core Service Card */}
        <div className="bg-white rounded-[2.5rem] p-7 sm:p-10 border border-[#EBE1D3] shadow-lg shadow-[#614732]/5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-[#F4EBE0] gap-3 mb-6">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#8C5325] bg-[#F9EBDD] px-3 py-1 rounded-full border border-[#EED7C1]">
                Alapcsomag
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#2E251E] mt-2">
                Rendszeres gondoskodó takarítás
              </h3>
              <p className="text-xs sm:text-sm text-[#7A6451] mt-1">
                Heti vagy kétheti ritmusban – Tata, Tatabánya, Komárom és a környező települések
              </p>
            </div>

            <div className="bg-[#FAF6F0] p-4 rounded-2xl border border-[#EFE5D6] text-left sm:text-right">
              <span className="text-xs text-[#7A6451] block font-medium">Megbízható segítség:</span>
              <span className="font-serif text-lg sm:text-xl font-bold text-[#2E251E]">
                Személyre szabott ajánlat
              </span>
              <span className="text-[11px] text-[#8C7461] block mt-0.5">
                a lakásod adottságaihoz igazítva
              </span>
            </div>
          </div>

          <p className="text-sm text-[#5C4A3C] leading-relaxed mb-6">
            Az alapcsomag célja, hogy levegye a mindennapi takarítás terhét a válladról. Nem kell a hétvégéidet takarítással töltened: mire hazaérsz, tiszta, friss és rendezett lakás fogad.
          </p>

          {/* Checklist */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-8">
            {serviceItems.map((item, idx) => (
              <div 
                key={idx}
                className="flex items-start gap-3 p-3.5 rounded-2xl bg-[#FCFAF7] border border-[#EFE6DA]"
              >
                <div className="w-5 h-5 rounded-full bg-[#E8924A] text-white flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                  <Check className="w-3 h-3 stroke-[3]" />
                </div>
                <span className="text-xs sm:text-sm text-[#473628] leading-snug font-medium">
                  {item}
                </span>
              </div>
            ))}
          </div>

          {/* Action button */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-[#F4EBE0]">
            <p className="text-xs text-[#7A6451]">
              Az első alkalom után személyre szabott ajánlatot adunk a lakásodhoz.
            </p>

            <button
              type="button"
              onClick={() => onSelectService('Rendszeres gondoskodó takarítás')}
              className="w-full sm:w-auto px-6 py-3.5 rounded-2xl bg-[#C4682E] hover:bg-[#B35820] text-white text-xs sm:text-sm font-bold transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md shrink-0"
            >
              <span>Időpontkérés az alapcsomagra</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
