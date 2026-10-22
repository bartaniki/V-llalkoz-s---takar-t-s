import React from 'react';
import { Home, Phone, Mail, MapPin, Clock, ShieldCheck } from 'lucide-react';
import { CONTACT_INFO } from '../data/cleaningData';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-[#382618] text-[#FDF8F2] pt-16 pb-12 border-t border-[#4E3523]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#4E3523]">
          
          {/* Brand & mission */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-[#E8924A] flex items-center justify-center text-white shadow-xs">
                <Home className="w-5 h-5 text-white stroke-[2.2]" />
              </div>
              <span className="font-serif font-bold text-2xl text-white tracking-tight">
                Otthonka
              </span>
            </div>

            <p className="text-xs sm:text-sm text-[#DDD0C2] leading-relaxed max-w-sm">
              Gondoskodó, megbízható otthontakarítás magánszemélyeknek <strong>Tata, Tatabánya, Komárom és a környező települések</strong> területén.
            </p>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs uppercase font-extrabold tracking-wider text-[#A8927F]">
              Navigáció
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-[#DDD0C2]">
              <li>
                <button
                  onClick={() => onNavigate('bemutatkozas')}
                  className="hover:text-[#FFDEB3] transition-colors cursor-pointer text-left"
                >
                  Bemutatkozás
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('megbizhatosag')}
                  className="hover:text-[#FFDEB3] transition-colors cursor-pointer text-left"
                >
                  Miért bíznak bennünk?
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('szolgaltatasok')}
                  className="hover:text-[#FFDEB3] transition-colors cursor-pointer text-left"
                >
                  Alapcsomagunk
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('szobak')}
                  className="hover:text-[#FFDEB3] transition-colors cursor-pointer text-left"
                >
                  Szobáról szobára
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('helyek')}
                  className="hover:text-[#FFDEB3] transition-colors cursor-pointer text-left"
                >
                  Kiszállási helyszínek
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('gyik')}
                  className="hover:text-[#FFDEB3] transition-colors cursor-pointer text-left"
                >
                  Gyakori kérdések
                </button>
              </li>
            </ul>
          </div>

          {/* Direct contact */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs uppercase font-extrabold tracking-wider text-[#A8927F]">
              Kapcsolat
            </h4>
            <div className="space-y-3 text-xs sm:text-sm text-[#DDD0C2]">
              <a
                href={`tel:${CONTACT_INFO.phone.replace(/\s+/g, '')}`}
                className="flex items-center gap-2.5 hover:text-[#FFDEB3] transition-colors"
              >
                <Phone className="w-4 h-4 text-[#E8924A] shrink-0" />
                <span className="font-bold text-white text-sm sm:text-base">{CONTACT_INFO.phoneDisplay}</span>
              </a>

              <a
                href={`mailto:${CONTACT_INFO.email}`}
                className="flex items-center gap-2.5 hover:text-[#FFDEB3] transition-colors"
              >
                <Mail className="w-4 h-4 text-[#E8924A] shrink-0" />
                <span className="break-all">{CONTACT_INFO.email}</span>
              </a>

              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#E8924A] shrink-0 mt-0.5" />
                <span>Tata, Tatabánya, Komárom és a környező települések</span>
              </div>

              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-[#E8924A] shrink-0" />
                <span>{CONTACT_INFO.operatingHours}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom copyright & warm signoff */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#A8927F]">
          <p>© {new Date().getFullYear()} Otthonka. Szívvel-lélekkel Tata, Tatabánya, Komárom otthonaiért.</p>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#E8924A]" />
            <span>Feddhetetlen erkölcsi bizonyítvánnyal • Diszkrét odafigyeléssel</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
