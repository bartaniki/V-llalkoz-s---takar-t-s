import React, { useState } from 'react';
import { Phone, Mail, Home, Menu, X, MapPin } from 'lucide-react';
import { CONTACT_INFO } from '../data/cleaningData';

interface NavbarProps {
  onNavigate: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-30 bg-[#FAF6F0]/95 backdrop-blur-md border-b border-[#E8DEC8] transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo with Otthonka name and warm badge */}
          <button 
            onClick={() => handleNavClick('hero')} 
            className="flex items-center gap-3 text-left group cursor-pointer focus:outline-hidden"
          >
            <div className="w-12 h-12 rounded-2xl bg-[#E8924A] text-white flex items-center justify-center shadow-md shadow-[#E8924A]/25 group-hover:rotate-3 transition-transform">
              <Home className="w-6 h-6 text-white stroke-[2.2]" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-serif font-bold text-2xl text-[#2E251E] tracking-tight">
                  Otthonka
                </span>
                <span className="hidden sm:inline-flex items-center gap-1 text-[11px] font-semibold bg-[#EFE4D2] text-[#694828] px-2.5 py-0.5 rounded-full border border-[#DFCEB7]">
                  Otthontakarítás
                </span>
              </div>
              <p className="text-xs text-[#7A6451] font-medium flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-[#C4682E] inline shrink-0" />
                Tata • Tatabánya • Komárom & vonzáskörzetük
              </p>
            </div>
          </button>

          {/* Warm navigation links */}
          <nav className="hidden lg:flex items-center gap-6">
            <button
              onClick={() => handleNavClick('bemutatkozas')}
              className="text-sm font-semibold text-[#574435] hover:text-[#C4682E] transition-colors cursor-pointer"
            >
              Bemutatkozás
            </button>
            <button
              onClick={() => handleNavClick('megbizhatosag')}
              className="text-sm font-semibold text-[#574435] hover:text-[#C4682E] transition-colors cursor-pointer"
            >
              Miért bíznak bennünk?
            </button>
            <button
              onClick={() => handleNavClick('szolgaltatasok')}
              className="text-sm font-semibold text-[#574435] hover:text-[#C4682E] transition-colors cursor-pointer"
            >
              Alapcsomagunk
            </button>
            <button
              onClick={() => handleNavClick('szobak')}
              className="text-sm font-semibold text-[#574435] hover:text-[#C4682E] transition-colors cursor-pointer"
            >
              Szobáról szobára
            </button>
            <button
              onClick={() => handleNavClick('helyek')}
              className="text-sm font-semibold text-[#574435] hover:text-[#C4682E] transition-colors cursor-pointer"
            >
              Kiszállási helyszínek
            </button>
            <button
              onClick={() => handleNavClick('gyik')}
              className="text-sm font-semibold text-[#574435] hover:text-[#C4682E] transition-colors cursor-pointer"
            >
              Kérdések
            </button>
          </nav>

          {/* Direct warm contact buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={`tel:${CONTACT_INFO.phone.replace(/\s+/g, '')}`}
              className="inline-flex items-center gap-2.5 px-3.5 py-2 rounded-2xl bg-[#F0E6D8] hover:bg-[#E7D9C6] text-[#2E251E] text-xs font-bold transition-all border border-[#DFD1BE]"
              title="Hívj minket bátran egy barátságos egyeztetésre!"
            >
              <div className="w-8 h-8 rounded-xl bg-[#5C4028] text-white flex items-center justify-center">
                <Phone className="w-4 h-4" />
              </div>
              <div className="text-left leading-tight">
                <span className="block text-[10px] text-[#7A6451] font-normal">Hívj bátran:</span>
                <span className="text-xs sm:text-sm font-extrabold text-[#2E251E]">{CONTACT_INFO.phoneDisplay}</span>
              </div>
            </a>

            <button
              onClick={() => handleNavClick('kapcsolat')}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-[#C4682E] hover:bg-[#B35820] text-white text-xs sm:text-sm font-bold shadow-md shadow-[#C4682E]/25 transition-all hover:scale-[1.02] cursor-pointer"
            >
              <Mail className="w-4 h-4" />
              <span>Megrendelés</span>
            </button>
          </div>

          {/* Mobile Menu trigger */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={`tel:${CONTACT_INFO.phone.replace(/\s+/g, '')}`}
              className="p-2.5 rounded-xl bg-[#C4682E] text-white sm:hidden shadow-xs"
              aria-label="Telefonhívás"
            >
              <Phone className="w-4 h-4" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl bg-[#EFE6DA] text-[#4A392C] hover:bg-[#E5D7C5] cursor-pointer"
              aria-label="Menü nyitása"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FAF6F0] border-b border-[#E8DEC8] px-4 pt-2 pb-6 space-y-3 shadow-xl">
          <div className="grid grid-cols-2 gap-2 pb-3 border-b border-[#EFE6DA]">
            <button
              onClick={() => handleNavClick('bemutatkozas')}
              className="text-left py-2.5 px-3 rounded-xl text-[#3D2F24] font-medium hover:bg-[#F0E6D8] text-xs sm:text-sm"
            >
              Bemutatkozás
            </button>
            <button
              onClick={() => handleNavClick('megbizhatosag')}
              className="text-left py-2.5 px-3 rounded-xl text-[#3D2F24] font-medium hover:bg-[#F0E6D8] text-xs sm:text-sm"
            >
              Miért bíznak bennünk?
            </button>
            <button
              onClick={() => handleNavClick('szolgaltatasok')}
              className="text-left py-2.5 px-3 rounded-xl text-[#3D2F24] font-medium hover:bg-[#F0E6D8] text-xs sm:text-sm"
            >
              Alapcsomagunk
            </button>
            <button
              onClick={() => handleNavClick('szobak')}
              className="text-left py-2.5 px-3 rounded-xl text-[#3D2F24] font-medium hover:bg-[#F0E6D8] text-xs sm:text-sm"
            >
              Szobáról szobára
            </button>
            <button
              onClick={() => handleNavClick('helyek')}
              className="text-left py-2.5 px-3 rounded-xl text-[#3D2F24] font-medium hover:bg-[#F0E6D8] text-xs sm:text-sm"
            >
              Kiszállási helyszínek
            </button>
            <button
              onClick={() => handleNavClick('gyik')}
              className="text-left py-2.5 px-3 rounded-xl text-[#3D2F24] font-medium hover:bg-[#F0E6D8] text-xs sm:text-sm"
            >
              Kérdések
            </button>
          </div>

          <div className="pt-2 flex flex-col gap-2">
            <a
              href={`tel:${CONTACT_INFO.phone.replace(/\s+/g, '')}`}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-2xl bg-[#5C4028] text-white font-bold text-sm shadow-xs"
            >
              <Phone className="w-4 h-4 text-[#FFDEB3]" />
              <span>Hívás: {CONTACT_INFO.phoneDisplay}</span>
            </a>
            <button
              onClick={() => handleNavClick('kapcsolat')}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-2xl bg-[#C4682E] text-white font-bold text-sm shadow-md"
            >
              <Mail className="w-4 h-4" />
              <span>Megrendelés & Ajánlatkérés</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
