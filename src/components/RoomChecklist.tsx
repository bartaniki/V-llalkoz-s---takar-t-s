import React, { useState } from 'react';
import { 
  Sparkles, 
  Check, 
  Heart, 
  Coffee, 
  Bath, 
  Sofa, 
  DoorOpen 
} from 'lucide-react';
import { ROOM_EXPERIENCES } from '../data/cleaningData';

export const RoomChecklist: React.FC = () => {
  const [activeRoomId, setActiveRoomId] = useState<string>('konyha');

  const currentRoom = ROOM_EXPERIENCES.find(r => r.id === activeRoomId) || ROOM_EXPERIENCES[0];

  const getIcon = (id: string) => {
    switch (id) {
      case 'konyha': return Coffee;
      case 'furdo': return Bath;
      case 'nappali': return Sofa;
      case 'eloter': return DoorOpen;
      default: return Sparkles;
    }
  };

  return (
    <section id="szobak" className="py-16 md:py-24 bg-[#F5EDE1]/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#EFE3D3] text-[#5C4028] text-xs font-bold uppercase tracking-wider border border-[#DFCEBA]">
            <Sparkles className="w-3.5 h-3.5 text-[#C4682E]" />
            <span>Szobáról szobára az otthonodban</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#2E251E] font-bold tracking-tight">
            Nézzünk be a szobákba: Így varázsolunk rendet
          </h2>
          <p className="text-base sm:text-lg text-[#614D3E] leading-relaxed">
            Minden helyiségnek megvan a maga sajátos hangulata és gondoskodása.
          </p>
        </div>

        {/* Room Navigation Buttons */}
        <div className="flex flex-wrap justify-center gap-2.5 sm:gap-3 mb-10">
          {ROOM_EXPERIENCES.map((room) => {
            const Icon = getIcon(room.id);
            const isSelected = room.id === activeRoomId;
            return (
              <button
                key={room.id}
                onClick={() => setActiveRoomId(room.id)}
                className={`inline-flex items-center gap-2 px-5 py-3 rounded-2xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-[#5C4028] text-white shadow-md scale-105'
                    : 'bg-white text-[#574435] hover:bg-[#FDFBF7] border border-[#E8DEC8]'
                }`}
              >
                <Icon className={`w-4 h-4 ${isSelected ? 'text-[#FFDEB3]' : 'text-[#C4682E]'}`} />
                <span>{room.title}</span>
              </button>
            );
          })}
        </div>

        {/* Room Detail Showcase Card */}
        <div className="bg-white rounded-[2.5rem] p-6 sm:p-10 border border-[#E8DEC8] shadow-lg shadow-[#614732]/5 max-w-4xl mx-auto">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-[#F4EBE0] gap-3 mb-6">
            <div>
              <span className="text-xs uppercase font-extrabold text-[#C4682E] tracking-wider">
                Helyiség részletei
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#2E251E] mt-0.5">
                {currentRoom.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#7A6451] italic mt-1 font-serif">
                {currentRoom.tagline}
              </p>
            </div>

            <div className="bg-[#FAF6F0] p-3 rounded-2xl border border-[#EFE5D6] text-xs font-semibold text-[#5A4534] max-w-xs">
              {currentRoom.mood}
            </div>
          </div>

          {/* Checklist items */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {currentRoom.details.map((item, idx) => (
              <div 
                key={idx}
                className="flex items-start gap-3 p-3.5 rounded-2xl bg-[#FCFAF7] border border-[#EFE6DA] hover:bg-[#FAF4EC] transition-colors"
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

        </div>

      </div>
    </section>
  );
};
