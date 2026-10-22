import React from 'react';
import { Calendar, ArrowRight } from 'lucide-react';
import { CONTACT_INFO } from '../data/cleaningData';

interface PromoBannerProps {
  onClaimPromo: () => void;
}

export const PromoBanner: React.FC<PromoBannerProps> = ({ onClaimPromo }) => {
  return (
    <div className="bg-[#5C4028] text-[#FDF8F2] border-b border-[#4A321E] shadow-sm relative z-40">
      <div className="max-w-7xl mx-auto px-4 py-2.5 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-3 text-center md:text-left">
          
          <div className="flex items-center gap-2.5 flex-wrap justify-center md:justify-start">
            <span className="inline-flex items-center bg-[#E8924A] text-white font-bold text-xs px-3 py-1 rounded-full shadow-xs">
              Kedvezményes próbaajánlat
            </span>
            <p className="text-xs sm:text-sm font-medium text-[#F4ECE2]">
              Próbálj ki minket az első alkalommal mindössze{' '}
              <strong className="text-[#FFDEB3] font-bold underline decoration-[#E8924A] underline-offset-4 text-sm sm:text-base">
                {CONTACT_INFO.promoPriceHourly.toLocaleString('hu-HU')} Ft / órabérrel!
              </strong>{' '}
              <span className="hidden sm:inline text-[#DDD0C2]">
                és adunk egy személyre szabott ajánlatot az otthonodhoz a rendszeres hetekre.
              </span>
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center text-xs text-[#E3D4C4] bg-[#432C1A] px-3 py-1 rounded-full border border-[#6E5037]">
              <Calendar className="w-3.5 h-3.5 mr-1.5 text-[#E8924A]" />
              <span>Érvényes: <strong>{CONTACT_INFO.promoDeadline}-ig</strong> (szabad időpontok erejéig)</span>
            </div>

            <button
              onClick={onClaimPromo}
              className="inline-flex items-center gap-1 bg-[#E8924A] hover:bg-[#D57E37] text-white text-xs font-bold px-3.5 py-1.5 rounded-full transition-all shadow-xs hover:shadow-sm cursor-pointer whitespace-nowrap"
            >
              <span>Kérem a próbanapot!</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};
