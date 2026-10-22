import React from 'react';
import { 
  Heart, 
  Home,
  Sparkles, 
  Phone, 
  Mail, 
  Coffee, 
  Clock, 
  MapPin, 
  ShieldCheck, 
  Smile, 
  SunMedium,
  ArrowRight
} from 'lucide-react';
import { CONTACT_INFO } from '../data/cleaningData';

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  return (
    <section id="hero" className="relative pt-6 pb-16 md:pt-12 md:pb-24 overflow-hidden">
      
      {/* Warm gentle organic background shapes */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[900px] h-[550px] bg-gradient-to-br from-[#F5EAD9]/80 via-[#F7ECE1]/60 to-[#EFE2D0]/40 rounded-[4rem] blur-2xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top welcoming family note badge */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#EFE3D3] text-[#543E2B] text-xs sm:text-sm font-semibold border border-[#DECFBD] shadow-xs">
            <Home className="w-4 h-4 text-[#C4682E]" />
            <span>Magánlakások és házak takarítása</span>
            <span className="hidden sm:inline text-[#C4682E] font-bold">• Szívvel-lélekkel</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Human Storytelling & Value */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#2E251E] font-bold tracking-tight leading-[1.2]">
              Végre egy gondtalan hétvége{' '}
              <span className="italic font-normal text-[#C4682E] block">
                – a tiszta otthon illatát bízd ránk!
              </span>
            </h1>

            <p className="text-base sm:text-lg text-[#5A4738] leading-relaxed max-w-2xl">
              Tudjuk, milyen kimerítő a munka, a gyerekek és a rohanó mindennapok mellett még a takarítással is küzdeni. 
              <strong> Az Otthonka csapata nem idegenekből áll, hanem megbízható, leinformálható segítőkből:</strong> úgy gondoskodunk lakásodról vagy családi házadról, mintha a sajátunk lenne.
            </p>

            {/* Warm, handwritten styled Welcome Action Note */}
            <div className="bg-[#FFFDF9] border-2 border-[#E79A5B]/70 rounded-3xl p-5 sm:p-6 shadow-md shadow-[#E79A5B]/10 relative overflow-hidden">
              <div className="absolute top-2 right-4 font-handwriting text-2xl text-[#C4682E] -rotate-3 select-none">
                ~ Szeretettel Neked ~
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="bg-[#E8924A] text-white text-xs font-bold uppercase px-3 py-0.5 rounded-full">
                    Kiemelt Ajánlat
                  </span>
                  <span className="text-xs font-semibold text-[#7A6451] flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-[#C4682E]" />
                    Érvényes: <strong>{CONTACT_INFO.promoDeadline}-ig</strong>
                  </span>
                </div>

                <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#2E251E]">
                  Próbálj ki minket az 1. alkalommal{' '}
                  <span className="text-[#C4682E] underline decoration-[#E8924A] underline-offset-4">
                    4.000 Ft / órabérrel!
                  </span>
                </h3>

                <p className="text-xs sm:text-sm text-[#5C493A] leading-relaxed">
                  Ismerjük meg egymást, nézd meg, milyen munkát végzünk! A takarítás után pedig adunk egy személyre szabott ajánlatot a lakásodhoz rendszeres heti vagy kétheti alkalmakra.
                  <span className="italic text-[#8C7561] block text-xs mt-1">
                    (A szabad kapacitások függvényében érvényes.)
                  </span>
                </p>
              </div>
            </div>

            {/* Direct human call & email buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
              <button
                onClick={onOpenBooking}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-2xl bg-[#C4682E] hover:bg-[#B35820] text-white font-bold text-sm sm:text-base shadow-lg shadow-[#C4682E]/30 transition-all hover:scale-[1.02] cursor-pointer"
              >
                <Mail className="w-5 h-5 text-[#FFE8D1]" />
                <span>Kérem a próbanapot!</span>
              </button>

              <a
                href={`tel:${CONTACT_INFO.phone.replace(/\s+/g, '')}`}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-2xl bg-white hover:bg-[#FDF9F3] text-[#2E251E] font-bold text-sm sm:text-base border-2 border-[#DECDBD] transition-all hover:border-[#C4682E] shadow-xs"
              >
                <Phone className="w-5 h-5 text-[#C4682E]" />
                <span>Hívás: {CONTACT_INFO.phoneDisplay}</span>
              </a>
            </div>

            {/* Cozy reassurance icons */}
            <div className="pt-3 flex flex-wrap gap-y-2 gap-x-5 text-xs text-[#6A5543] font-medium border-t border-[#EAE0D1]">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#C4682E]" />
                Tiszta erkölcsi bizonyítvány
              </span>
              <span className="flex items-center gap-1.5">
                <Smile className="w-4 h-4 text-[#C4682E]" />
                Állat- és bababarát tisztaság
              </span>
              <span className="flex items-center gap-1.5">
                <Coffee className="w-4 h-4 text-[#C4682E]" />
                Nyugodt, pihentető hétvégék
              </span>
            </div>

          </div>

          {/* Right Column: Cozy Visual Mosaic & Vignettes */}
          <div className="lg:col-span-5">
            <div className="relative">
              
              {/* Cozy main vignette box */}
              <div className="bg-[#FFFFFF] rounded-3xl p-6 sm:p-7 shadow-xl shadow-[#614732]/10 border border-[#EBE1D3] space-y-5 relative z-10">
                
                {/* Atmosphere Header */}
                <div className="flex items-center justify-between pb-3 border-b border-[#F4EBE0]">
                  <div className="flex items-center gap-2.5">
                    <div className="w-10 h-10 rounded-2xl bg-[#F6EDE2] text-[#C4682E] flex items-center justify-center">
                      <SunMedium className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#C4682E]">Otthoni élmény</span>
                      <h4 className="font-serif text-lg font-bold text-[#2E251E]">Hazaérni egy tiszta lakásba</h4>
                    </div>
                  </div>
                  <span className="font-handwriting text-2xl text-[#8A715C]">„De jó itthon!”</span>
                </div>

                {/* 3 Everyday Family Moments */}
                <div className="space-y-3">
                  
                  <div className="p-3.5 rounded-2xl bg-[#FCFAF7] border border-[#EFE6DA] flex items-start gap-3 hover:bg-[#FBF6EE] transition-colors">
                    <div className="w-8 h-8 rounded-xl bg-[#EFE3D3] text-[#7A5B3D] flex items-center justify-center shrink-0 font-serif font-bold text-sm">
                      ☕
                    </div>
                    <div>
                      <h5 className="text-xs sm:text-sm font-bold text-[#2E251E]">A reggeli kávé a ragyogó konyhában</h5>
                      <p className="text-xs text-[#6B5746] mt-0.5">
                        Zsírtalan, tiszta pultok, csillogó mosogató – végre élvezet leülni a családdal reggelizni.
                      </p>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-[#FCFAF7] border border-[#EFE6DA] flex items-start gap-3 hover:bg-[#FBF6EE] transition-colors">
                    <div className="w-8 h-8 rounded-xl bg-[#EFE3D3] text-[#7A5B3D] flex items-center justify-center shrink-0 font-serif font-bold text-sm">
                      🧸
                    </div>
                    <div>
                      <h5 className="text-xs sm:text-sm font-bold text-[#2E251E]">A gyerekek mezítláb a tiszta szőnyegen</h5>
                      <p className="text-xs text-[#6B5746] mt-0.5">
                        Alapos, szálmélységi porszívózás és kímélő felmosás, ahol bátran játszhatnak a kicsik.
                      </p>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-[#FCFAF7] border border-[#EFE6DA] flex items-start gap-3 hover:bg-[#FBF6EE] transition-colors">
                    <div className="w-8 h-8 rounded-xl bg-[#EFE3D3] text-[#7A5B3D] flex items-center justify-center shrink-0 font-serif font-bold text-sm">
                      🌳
                    </div>
                    <div>
                      <h5 className="text-xs sm:text-sm font-bold text-[#2E251E]">Szabad szombatok a szeretteiddel</h5>
                      <p className="text-xs text-[#6B5746] mt-0.5">
                        A takarításra szánt órákat töltsd inkább kirándulással a tóparton vagy a Duna mentén, fagyizással vagy pihenéssel!
                      </p>
                    </div>
                  </div>

                </div>

                {/* Friendly Direct Booking Button */}
                <div className="p-4 rounded-2xl bg-gradient-to-r from-[#5C4028] to-[#452F1C] text-white flex items-center justify-between gap-3 shadow-md">
                  <div>
                    <p className="text-[11px] text-[#E0CDBB] font-medium">Beszéljük meg a részleteket:</p>
                    <p className="text-xs sm:text-sm font-bold">Kérj időpontot még ma!</p>
                  </div>
                  <button
                    onClick={onOpenBooking}
                    className="px-3.5 py-2 rounded-xl bg-[#E8924A] hover:bg-[#D77F35] text-white text-xs font-bold transition-all shrink-0 cursor-pointer flex items-center gap-1"
                  >
                    <span>Időpontkérés</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

                {/* Local family note */}
                <div className="text-center font-handwriting text-xl text-[#785E48] pt-1">
                  ~ Személyes odafigyeléssel, megbízható szeretettel ~
                </div>

              </div>

              {/* Decorative warm card behind */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-[#E6CFB7]/60 to-[#F0DDC7]/40 rounded-[2.5rem] transform rotate-1 -z-0" />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
