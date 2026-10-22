import React, { useState, useEffect, useRef } from 'react';
import { 
  Sparkles, 
  Heart, 
  Phone, 
  Mail, 
  Camera,
  Check
} from 'lucide-react';
import { CONTACT_INFO } from '../data/cleaningData';

import bartaNikolettaPhoto from '../assets/images/barta_nikoletta.jpg';

interface AboutLeaderProps {
  onOpenBooking: () => void;
}

// Barta Nikoletta saját, feltöltött fényképe immár véglegesen a projekt része:
const DEFAULT_PHOTO = bartaNikolettaPhoto;

export const AboutLeader: React.FC<AboutLeaderProps> = ({ onOpenBooking }) => {
  const [photoSrc, setPhotoSrc] = useState<string>(DEFAULT_PHOTO);
  const [uploadSuccess, setUploadSuccess] = useState<boolean>(false);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // Ha a böngészőben volt korábbi egyedi feltöltés, tiszteletben tartjuk,
    // de alapértelmezetten a véglegesen elmentett saját kép töltődik be
    const savedPhoto = localStorage.getItem('otthonka_leader_custom_photo');
    if (savedPhoto) {
      setPhotoSrc(savedPhoto);
    }
  }, []);

  const handleFile = (file: File) => {
    if (!file || !file.type.startsWith('image/')) {
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      const dataUrl = e.target?.result as string;
      if (dataUrl) {
        setPhotoSrc(dataUrl);
        setUploadSuccess(true);
        localStorage.setItem('otthonka_leader_custom_photo', dataUrl);

        // Also persist to server disk via Vite middleware
        fetch('/api/upload-leader-photo', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ dataUrl }),
        }).catch(() => {
          // localStorage already holds it safely
        });

        setTimeout(() => setUploadSuccess(false), 4000);
      }
    };
    reader.readAsDataURL(file);
  };

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      handleFile(file);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files?.[0];
    if (file) {
      handleFile(file);
    }
  };


  return (
    <section id="bemutatkozas" className="py-16 md:py-24 bg-[#FFFDF9] relative overflow-hidden border-y border-[#EFE6DA]">
      {/* Subtle warm background elements */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-[#F8EDE0]/60 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#F5E6D3]/50 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-3 mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#EFE3D3] text-[#5C4028] text-xs font-bold uppercase tracking-wider border border-[#DFCEBA]">
            <Sparkles className="w-3.5 h-3.5 text-[#C4682E]" />
            <span>Személyes bemutatkozás</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#2E251E] font-bold tracking-tight">
            Ismerd meg az Otthonka alapítóját
          </h2>
          <p className="text-base sm:text-lg text-[#614D3E] max-w-2xl mx-auto leading-relaxed">
            Nem egy arctalan takarítócég vagyunk: nálunk az otthonod biztonsága és tisztasága személyes szívügy.
          </p>
        </div>

        {/* Founder presentation card */}
        <div className="bg-white rounded-[2.5rem] p-6 sm:p-10 lg:p-12 border border-[#EBE1D3] shadow-xl shadow-[#614732]/5">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Photo of the Founder with upload / replace feature */}
            <div className="lg:col-span-5 flex flex-col items-center">
              <div className="relative group w-full max-w-sm">
                
                {/* Decorative warm background rotation frame */}
                <div className="absolute -inset-2.5 bg-gradient-to-tr from-[#E8924A]/25 via-[#FAF0E3] to-[#C4682E]/20 rounded-[2.2rem] transform -rotate-2 group-hover:rotate-0 transition-transform duration-300 -z-0" />
                
                {/* Image Container with Drag-and-drop & Click to Upload */}
                <div 
                  onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
                  onDragLeave={() => setIsDragging(false)}
                  onDrop={handleDrop}
                  onClick={() => fileInputRef.current?.click()}
                  className={`relative z-10 overflow-hidden rounded-[2rem] border-2 cursor-pointer transition-all duration-300 shadow-lg ${
                    isDragging ? 'border-[#C4682E] ring-4 ring-[#E8924A]/30 scale-[1.01]' : 'border-[#EADCCB] bg-[#F7F2EC]'
                  }`}
                  title="Kattints vagy húzd ide a saját fényképedet a beillesztéshez!"
                >
                  <img
                    src={photoSrc}
                    alt="Barta Nikoletta - Az Otthonka alapítója és vezetője"
                    referrerPolicy="no-referrer"
                    className="w-full h-auto object-cover object-center aspect-[3/4] group-hover:scale-[1.02] transition-transform duration-500"
                  />
                  
                  {/* Discreet update button on corner */}
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      fileInputRef.current?.click();
                    }}
                    className="absolute top-3 right-3 z-20 w-8 h-8 rounded-full bg-white/90 hover:bg-white text-[#5C4028] shadow-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
                    title="Fotó frissítése új képpel"
                    aria-label="Fotó frissítése"
                  >
                    <Camera className="w-4 h-4 text-[#C4682E]" />
                  </button>

                  {/* Floating badge over photo */}
                  <div className="absolute bottom-3 left-3 right-3 p-3 rounded-2xl bg-[#FAF6F0]/95 backdrop-blur-md border border-[#E7DCCE] shadow-md flex items-center justify-between pointer-events-none z-10">
                    <div>
                      <p className="text-xs font-bold text-[#2E251E] leading-tight">Barta Nikoletta</p>
                      <p className="text-[11px] font-medium text-[#7A6451]">Alapító & Vállalkozásvezető</p>
                    </div>
                    <div className="w-8 h-8 rounded-xl bg-[#E8924A] text-white flex items-center justify-center shrink-0">
                      <Heart className="w-4 h-4 fill-white" />
                    </div>
                  </div>
                </div>

                {/* Hidden File Input for updates if needed */}
                <input 
                  type="file" 
                  ref={fileInputRef} 
                  onChange={handleFileInputChange} 
                  accept="image/*" 
                  className="hidden" 
                />

                {/* Status bar under photo */}
                <div className="mt-2.5 flex items-center justify-between text-xs px-1 text-[#7A6451]">
                  {uploadSuccess ? (
                    <span className="inline-flex items-center gap-1.5 text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full font-bold animate-pulse">
                      <Check className="w-3.5 h-3.5" />
                      Fotó sikeresen elmentve!
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1 text-[#8C7461] text-[11px]">
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      Hivatalos Otthonka profilfotó
                    </span>
                  )}

                  <button
                    type="button"
                    onClick={() => fileInputRef.current?.click()}
                    className="text-[#A18066] hover:text-[#C4682E] text-[11px] inline-flex items-center gap-1 cursor-pointer transition-colors"
                    title="Új fénykép feltöltése"
                  >
                    <Camera className="w-3 h-3" />
                    <span>Fotócsere</span>
                  </button>
                </div>

                {/* Handcrafted signoff touch */}
                <div className="text-center mt-2 font-handwriting text-2xl text-[#8A715C]">
                  ~ Szeretettel és tisztelettel ~
                </div>
              </div>
            </div>

            {/* Right Column: Founder's Story & Personal Guarantee */}
            <div className="lg:col-span-7 space-y-6 text-left">
              
              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-[#C4682E] bg-[#FBEFE3] px-3 py-1 rounded-full border border-[#F1DFC9] inline-block">
                  Személyes üzenet
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#2E251E] leading-snug">
                  „Célom, hogy mikor hazaérsz, fellélegezz: tisztaság és friss illat fogad.”
                </h3>
              </div>

              <div className="space-y-4 text-sm sm:text-base text-[#574435] leading-relaxed">
                <p className="font-bold text-[#3D2C20]">
                  Kedves Érdeklődő!
                </p>
                <p>
                  Amikor elindítottam az <strong>Otthonka</strong> takarítási szolgáltatást, pontosan láttam, mekkora terhet jelent a mindennapi munka és az állandó rohanás mellett még a takarítással is foglalkozni, gyakran a szabadidőnk rovására.
                </p>
                <p>
                  Korábban szállodavezetőként dolgoztam, így jól tudom, mennyire fontos a részletekre való odafigyelés, a kifogástalan tisztaság és a vendégélmény szempontjából meghatározó, gondoskodó hozzáállás. Luxemburgban egy magas színvonalon dolgozó takarítócégnél szerzett munkatapasztalataim révén pedig azt is megismertem, hogyan működik igazán jól egy ilyen vállalkozás. Ezt a szemléletet és tapasztalatot hoztam haza, hogy Tata és környéke otthonaiban is ugyanezt a minőséget, figyelmességet és megbízhatóságot képviseljem.
                </p>
                <p>
                  Tudom, hogy a lakásod vagy a családi házad a legbensőségesebb kuckód. Nem egyszerű döntés egy idegent beengedni a privát tereidbe. Éppen ezért nálam <strong>a megbízhatóság, a diszkréció és a feddhetetlen erkölcsi bizonyítvány alapkövetelmény</strong>. Nincsenek hetente cserélődő, idegen arcok: gondos, tisztelettudó és szeretetteljes kezekbe kerül az otthonod.
                </p>
                <p className="italic text-[#705642] bg-[#FAF5EE] p-4 rounded-2xl border-l-4 border-[#C4682E]">
                  „Úgy bánunk a lakásoddal, a bútoraiddal és az értékeiddel, mintha a saját családunk otthonát csinosítanánk.”
                </p>
              </div>

              {/* Direct Call to Action */}
              <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <button
                  type="button"
                  onClick={onOpenBooking}
                  className="px-6 py-3.5 rounded-2xl bg-[#C4682E] hover:bg-[#B35820] text-white font-bold text-sm shadow-md shadow-[#C4682E]/25 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Mail className="w-4 h-4" />
                  <span>Időpontkérés közvetlenül Nikitől</span>
                </button>

                <a
                  href={`tel:${CONTACT_INFO.phone.replace(/\s+/g, '')}`}
                  className="px-5 py-3.5 rounded-2xl bg-white hover:bg-[#FAF6F0] text-[#2E251E] font-bold text-sm border border-[#DECDBD] transition-all flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4 text-[#C4682E]" />
                  <span>{CONTACT_INFO.phoneDisplay}</span>
                </a>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
