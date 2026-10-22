import React from 'react';
import { MapPin, Heart, CheckCircle2 } from 'lucide-react';

export const ServiceAreas: React.FC = () => {
  const nearbyTowns = [
    'Tata',
    'Tatabánya',
    'Komárom',
    'Vértesszőlős',
    'Baj',
    'Környe',
    'Kocs',
    'Naszály',
    'Ács',
    'Szőny',
    'Koppánymonostor',
    'Mocsa',
    'Szomód',
    'Dunaszentmiklós',
    'Tarján'
  ];

  return (
    <section id="helyek" className="py-14 md:py-20 bg-[#FAF6F0] relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-white rounded-[2.5rem] p-7 sm:p-10 border border-[#EBE1D3] shadow-md shadow-[#614732]/5 text-center space-y-6">
          
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#EFE3D3] text-[#5C4028] text-xs font-bold uppercase tracking-wider border border-[#DFCEBA]">
            <MapPin className="w-3.5 h-3.5 text-[#C4682E]" />
            <span>Kiszállási körzet</span>
          </div>

          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#2E251E] font-bold tracking-tight">
            Tata, Tatabánya, Komárom
          </h2>

          <div className="p-4 sm:p-5 rounded-2xl bg-[#FCFAF7] border border-[#EFE6DA] max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-2 text-sm sm:text-base font-bold text-[#C4682E] mb-1">
              <Heart className="w-4 h-4 fill-[#C4682E]" />
              <span>A környező településekre is szívesen megyünk!</span>
            </div>
            <p className="text-xs sm:text-sm text-[#5C4A3C] leading-relaxed">
              Ha a környező falvakban vagy kisvárosokban laksz, keress minket bátran, előzetes egyeztetés alapján rugalmasan házhoz megyünk.
            </p>
          </div>

          {/* Town pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-2 max-w-3xl mx-auto">
            {nearbyTowns.map((town, idx) => (
              <span 
                key={idx}
                className="px-3.5 py-1.5 rounded-xl bg-[#FAF6F0] border border-[#EAE0D1] text-xs font-semibold text-[#4A382C]"
              >
                {town}
              </span>
            ))}
            <span className="px-3.5 py-1.5 rounded-xl bg-[#F6EDE2] border border-[#DECFBD] text-xs font-semibold text-[#8C5325]">
              + és egyéb közeli települések
            </span>
          </div>

        </div>

      </div>
    </section>
  );
};
