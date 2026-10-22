import React, { useState } from 'react';
import { PromoBanner } from './components/PromoBanner';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutLeader } from './components/AboutLeader';
import { TrustPillars } from './components/TrustPillars';
import { ServicesSection } from './components/ServicesSection';
import { RoomChecklist } from './components/RoomChecklist';
import { ServiceAreas } from './components/ServiceAreas';
import { FaqSection } from './components/FaqSection';
import { ContactForm } from './components/ContactForm';
import { Footer } from './components/Footer';
import { Phone, Mail } from 'lucide-react';
import { CONTACT_INFO } from './data/cleaningData';

export default function App() {
  const [selectedService, setSelectedService] = useState<string>('Rendszeres gondoskodó takarítás');

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navOffset = 85;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  const handleSelectService = (serviceName: string) => {
    setSelectedService(serviceName);
    scrollToSection('kapcsolat');
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF6F0] text-[#2E251E] antialiased relative">
      
      {/* Top Friendly Invitation Announcement */}
      <PromoBanner onClaimPromo={() => scrollToSection('kapcsolat')} />

      {/* Sticky Header */}
      <Navbar onNavigate={scrollToSection} />

      {/* Main Flow */}
      <main className="flex-1">
        {/* Warm Storytelling Hero */}
        <Hero onOpenBooking={() => scrollToSection('kapcsolat')} />

        {/* Bemutatkozás - A vállalkozás vezetője */}
        <AboutLeader onOpenBooking={() => scrollToSection('kapcsolat')} />

        {/* Családi Bizalom & Megbízhatóság */}
        <TrustPillars />

        {/* Alapcsomagunk: Rendszeres gondoskodó takarítás */}
        <ServicesSection onSelectService={handleSelectService} />

        {/* Szobáról szobára (Élményalapú bemutató) */}
        <RoomChecklist />

        {/* Kiszállási körzet (Tata, Tatabánya, Komárom és a környező települések) */}
        <ServiceAreas />

        {/* Kérdések & Megnyugtató válaszok */}
        <FaqSection />

        {/* Megrendelés Telefonon és E-mailben */}
        <ContactForm initialService={selectedService} />
      </main>

      {/* Footer */}
      <Footer onNavigate={scrollToSection} />

      {/* Floating Bottom Bar for Mobile Quick Actions */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-[#FAF6F0]/95 backdrop-blur-md border-t border-[#E8DEC8] p-3 sm:hidden shadow-2xl flex items-center gap-2.5">
        <a
          href={`tel:${CONTACT_INFO.phone.replace(/\s+/g, '')}`}
          className="flex-1 py-3 px-2 rounded-2xl bg-[#5C4028] text-white font-bold text-xs flex items-center justify-center gap-2 active:scale-95 shadow-sm"
        >
          <Phone className="w-4 h-4 text-[#FFDEB3]" />
          <span>Hívás: {CONTACT_INFO.phoneDisplay}</span>
        </a>

        <button
          onClick={() => scrollToSection('kapcsolat')}
          className="flex-1 py-3 px-2 rounded-2xl bg-[#C4682E] text-white font-bold text-xs flex items-center justify-center gap-2 active:scale-95 shadow-sm cursor-pointer"
        >
          <Mail className="w-4 h-4 text-[#FFE8D1]" />
          <span>Időpontkérés</span>
        </button>
      </div>

    </div>
  );
}
