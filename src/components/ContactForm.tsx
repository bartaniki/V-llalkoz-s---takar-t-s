import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  Mail, 
  Clock, 
  Heart, 
  Send, 
  CheckCircle2, 
  Copy, 
  Sparkles,
  Smile
} from 'lucide-react';
import { CONTACT_INFO } from '../data/cleaningData';
import { BookingFormData } from '../types';

interface ContactFormProps {
  initialService?: string;
}

export const ContactForm: React.FC<ContactFormProps> = ({ initialService }) => {
  const [formData, setFormData] = useState<BookingFormData>({
    fullName: '',
    phone: '',
    email: '',
    city: 'Tata',
    address: '',
    propertyType: 'Családi ház',
    areaM2: '75',
    serviceType: initialService || 'Rendszeres gondoskodó takarítás',
    preferredDate: '',
    message: '',
    applyPromo: true,
  });

  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  useEffect(() => {
    if (initialService) {
      setFormData((prev) => ({ ...prev, serviceType: initialService }));
    }
  }, [initialService]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const generateMailtoLink = () => {
    const subject = encodeURIComponent(`Próbaalkalom időpontkérés - ${formData.fullName || 'Kedves Érdeklődő'} (${formData.city})`);
    const bodyContent = `Kedves Otthonka Takarítás!

Szeretnék időpontot egyeztetni a 4000 Ft/órás próbaalkalomra az alábbi adatokkal:

- Név: ${formData.fullName}
- Telefonszám: ${formData.phone}
- E-mail cím: ${formData.email}
- Település és cím: ${formData.city}, ${formData.address || 'Cím pontosítása később'}
- Lakás mérete: ~${formData.areaM2} m² (${formData.propertyType})
- Választott segítség: ${formData.serviceType}
- Preferált időpont / nap: ${formData.preferredDate || 'Rugalmas egyeztetés szerint'}
- Próbaakció igénybevétele (4000 Ft/óra december 11-ig): ${formData.applyPromo ? 'IGEN, szeretném az első alkalommal!' : 'Nem'}

Megjegyzés, kisállat vagy egyedi kérés:
${formData.message || 'Nincs külön megjegyzés.'}

Várom a szeretetteljes visszajelzést vagy hívást!
Üdvözlettel:
${formData.fullName}`;

    return `mailto:${CONTACT_INFO.email}?subject=${subject}&body=${encodeURIComponent(bodyContent)}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    window.location.href = generateMailtoLink();
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(CONTACT_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section id="kapcsolat" className="py-16 md:py-24 bg-[#FAF6F0] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#EFE3D3] text-[#5C4028] text-xs font-bold uppercase tracking-wider border border-[#DFCEBA]">
            <Heart className="w-3.5 h-3.5 text-[#C4682E] fill-[#C4682E]" />
            <span>Közvetlen kapcsolat & Időpont</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#2E251E] font-bold tracking-tight">
            Keress minket bizalommal telefonon vagy e-mailben!
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Email Info Card & Cozy note */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Email Card */}
            <div className="bg-white rounded-3xl p-6 sm:p-7 border border-[#EBE1D3] shadow-sm space-y-4">
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-2xl bg-[#F6EDE2] text-[#C4682E] flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#7A6451]">E-mail elérhetőség</span>
                  <h3 className="font-serif text-lg font-bold text-[#2E251E]">Írj nekünk bármikor</h3>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-[#5C4A3C] leading-relaxed">
                Írd meg a lakásod adatait, és pár órán belül részletes válasszal jelentkezünk!
              </p>

              <div className="flex items-center justify-between p-3 rounded-2xl bg-[#FAF6F0] border border-[#EAE0D1]">
                <span className="text-xs sm:text-sm font-semibold text-[#2E251E] truncate mr-2">
                  {CONTACT_INFO.email}
                </span>
                <button
                  type="button"
                  onClick={copyEmail}
                  className="px-2.5 py-1.5 rounded-xl bg-white hover:bg-[#F2E8DC] text-[#4A382A] border border-[#DECFBD] transition-colors text-xs font-semibold cursor-pointer shrink-0"
                >
                  {copiedEmail ? 'Másolva!' : 'Másolás'}
                </button>
              </div>

              <a
                href={`mailto:${CONTACT_INFO.email}?subject=Érdeklődés%20otthontakarításról`}
                className="w-full py-3 rounded-2xl bg-[#FAF6F0] hover:bg-[#F2E8DC] text-[#5C4028] border border-[#DECFBD] font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                <Mail className="w-4 h-4 text-[#C4682E]" />
                <span>Közvetlen levél megnyitása</span>
              </a>
            </div>

            {/* Cozy note card: Megbízható, közvetlen kapcsolat (telefonos egyeztetés fölött) */}
            <div className="bg-[#FAF3E8] rounded-3xl p-6 border border-[#EADCC8] space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold text-[#7A5B3D] uppercase tracking-wider">
                <Heart className="w-4 h-4 text-[#C4682E] fill-[#C4682E]" />
                <span>Megbízható, közvetlen kapcsolat</span>
              </div>
              <p className="text-xs sm:text-sm text-[#614D3E] leading-relaxed">
                Ha kérdésed van vagy részletesebben leírnád, milyen segítségre lenne szükséged, írj bátran e-mailt vagy használd az űrlapot!
              </p>
            </div>

            {/* Phone Card directly under the note */}
            <div className="bg-white rounded-3xl p-6 sm:p-7 border border-[#EBE1D3] shadow-sm space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-2xl bg-[#5C4028] text-white flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6 text-[#FFDEB3]" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-bold text-[#2E251E]">Telefonos egyeztetés</h3>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-xs text-[#7A6451] bg-[#FAF6F0] px-3.5 py-1.5 rounded-full border border-[#EAE0D1] self-start sm:self-auto">
                  <Clock className="w-3.5 h-3.5 text-[#C4682E]" />
                  <span>{CONTACT_INFO.operatingHours} • <strong>Hívható ma is</strong></span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-[#5C4A3C] leading-relaxed">
                Ha szívesebben hallod az emberi hangot a másik oldalon, hívj fel bátran még ma! Örömmel válaszolunk kérdéseidre.
              </p>

              <a
                href={`tel:${CONTACT_INFO.phone.replace(/\s+/g, '')}`}
                className="w-full py-4 rounded-2xl bg-[#C4682E] hover:bg-[#B35820] text-white font-bold text-base flex items-center justify-center gap-2.5 shadow-md shadow-[#C4682E]/25 transition-all"
              >
                <Phone className="w-5 h-5 text-[#FFE8D1]" />
                <span>{CONTACT_INFO.phoneDisplay}</span>
              </a>
            </div>

          </div>

          {/* Right: Friendly Online Booking Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-[2.5rem] p-6 sm:p-10 border border-[#E8DEC8] shadow-lg shadow-[#614732]/5">
              
              {submitted ? (
                /* Sweet thank you state */
                <div className="text-center py-8 space-y-5 animate-in fade-in">
                  <div className="w-16 h-16 rounded-3xl bg-[#F6EDE2] text-[#C4682E] flex items-center justify-center mx-auto shadow-xs">
                    <CheckCircle2 className="w-9 h-9" />
                  </div>
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#2E251E]">
                    Köszönjük a megkeresésedet, {formData.fullName}!
                  </h3>
                  <p className="text-xs sm:text-sm text-[#5C4A3C] max-w-md mx-auto leading-relaxed">
                    Megnyitottuk az e-mail leveleződet az előkészített levéllel, emellett hamarosan visszahívunk a megadott <strong>{formData.phone}</strong> telefonszámon, hogy megbeszéljük a részleteket!
                  </p>

                  <div className="p-4 bg-[#FAF6F0] rounded-2xl border border-[#EAE0D1] max-w-md mx-auto text-left text-xs space-y-1.5 text-[#543E2C]">
                    <div className="font-bold text-[#2E251E] mb-1">Rögzített paraméterek:</div>
                    <div>• Település: <strong>{formData.city}</strong></div>
                    <div>• Segítség jellege: <strong>{formData.serviceType}</strong></div>
                    <div>• 4000 Ft/órás próbaakció: <strong>{formData.applyPromo ? 'Kérve (december 11-ig)' : 'Nem'}</strong></div>
                  </div>

                  <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="px-5 py-2.5 rounded-xl border border-[#DFCEBA] text-[#543E2C] font-semibold text-xs hover:bg-[#FAF6F0] cursor-pointer"
                    >
                      Új üzenet írása
                    </button>
                    <a
                      href={`tel:${CONTACT_INFO.phone.replace(/\s+/g, '')}`}
                      className="px-5 py-2.5 rounded-xl bg-[#C4682E] text-white font-bold text-xs hover:bg-[#B35820] shadow-sm"
                    >
                      Hívás most azonnal
                    </a>
                  </div>
                </div>
              ) : (
                /* Active Form */
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                  <div className="border-b border-[#F4EBE0] pb-4 mb-4">
                    <span className="text-[11px] uppercase font-bold tracking-wider text-[#C4682E]">
                      Barátságos egyeztetés
                    </span>
                    <h3 className="font-serif text-2xl font-bold text-[#2E251E] mt-0.5">
                      Kérj időpontot a takarításra!
                    </h3>
                  </div>

                  {/* Promo Checkbox Banner in Form */}
                  <div className="p-3.5 rounded-2xl bg-[#FFFDF7] border-2 border-[#E79A5B]/80 flex items-start gap-3">
                    <input
                      id="applyPromoWarm"
                      type="checkbox"
                      name="applyPromo"
                      checked={formData.applyPromo}
                      onChange={handleChange}
                      className="w-5 h-5 mt-0.5 rounded text-[#C4682E] focus:ring-[#C4682E] cursor-pointer"
                    />
                    <label htmlFor="applyPromoWarm" className="text-xs text-[#4A382B] cursor-pointer leading-snug">
                      <strong className="text-[#C4682E] font-bold">Kérem a bevezető próbaakciót:</strong> Most 4.000 Ft/órabérrel szeretném kipróbálni az első alkalommal, és kérem a személyre szabott ajánlatot a lakásomhoz a rendszeres hetekre! (december 11-ig érvényes)
                    </label>
                  </div>

                  {/* Name & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#755F4D] mb-1">
                        Hogy szólíthatunk? (Név) *
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        required
                        placeholder="pl. Nagy Eszter"
                        value={formData.fullName}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-2xl border border-[#DFCEBA] text-xs sm:text-sm focus:outline-hidden focus:ring-2 focus:ring-[#C4682E] bg-white"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#755F4D] mb-1">
                        Telefonszám (visszahíváshoz) *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        placeholder="pl. +36 30 123 4567"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-2xl border border-[#DFCEBA] text-xs sm:text-sm focus:outline-hidden focus:ring-2 focus:ring-[#C4682E] bg-white"
                      />
                    </div>
                  </div>

                  {/* Email & Town */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#755F4D] mb-1">
                        E-mail címed *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        placeholder="pl. eszter@gmail.com"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-2xl border border-[#DFCEBA] text-xs sm:text-sm focus:outline-hidden focus:ring-2 focus:ring-[#C4682E] bg-white"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#755F4D] mb-1">
                        Település *
                      </label>
                      <select
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-2xl border border-[#DFCEBA] text-xs sm:text-sm focus:outline-hidden focus:ring-2 focus:ring-[#C4682E] bg-white"
                      >
                        <option value="Tata">Tata</option>
                        <option value="Tatabánya">Tatabánya</option>
                        <option value="Komárom">Komárom</option>
                        <option value="Vértesszőlős">Vértesszőlős</option>
                        <option value="Baj">Baj</option>
                        <option value="Környe">Környe</option>
                        <option value="Kocs">Kocs</option>
                        <option value="Naszály">Naszály</option>
                        <option value="Ács">Ács</option>
                        <option value="Szőny">Szőny</option>
                        <option value="Mocsa">Mocsa</option>
                        <option value="Szomód">Szomód</option>
                        <option value="Dunaszentmiklós">Dunaszentmiklós</option>
                        <option value="Tarján">Tarján</option>
                        <option value="Egyéb közeli település">Egyéb közeli település</option>
                      </select>
                    </div>
                  </div>

                  {/* Address & Floor area */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#755F4D] mb-1">
                        Cím / Városrész (opcionális)
                      </label>
                      <input
                        type="text"
                        name="address"
                        placeholder="pl. Tóváros, Május 1. út..."
                        value={formData.address}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-2xl border border-[#DFCEBA] text-xs sm:text-sm focus:outline-hidden focus:ring-2 focus:ring-[#C4682E] bg-white"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#755F4D] mb-1">
                        Lakás mérete (~m²)
                      </label>
                      <input
                        type="number"
                        name="areaM2"
                        placeholder="pl. 75"
                        value={formData.areaM2}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-2xl border border-[#DFCEBA] text-xs sm:text-sm focus:outline-hidden focus:ring-2 focus:ring-[#C4682E] bg-white"
                      />
                    </div>
                  </div>

                  {/* Preferred time */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#755F4D] mb-1">
                      Mikor lenne a legideálisabb?
                    </label>
                    <input
                      type="text"
                      name="preferredDate"
                      placeholder="pl. Péntek délelőtt, vagy hétfő délután"
                      value={formData.preferredDate}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-2xl border border-[#DFCEBA] text-xs sm:text-sm focus:outline-hidden focus:ring-2 focus:ring-[#C4682E] bg-white"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#755F4D] mb-1">
                      Megjegyzés, kis kedvenc vagy bármilyen kérés:
                    </label>
                    <textarea
                      name="message"
                      rows={3}
                      placeholder="Pl. Van egy kutyusunk, vagy különösen figyeljetek a parkettára..."
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-2xl border border-[#DFCEBA] text-xs sm:text-sm focus:outline-hidden focus:ring-2 focus:ring-[#C4682E] bg-white resize-none"
                    />
                  </div>

                  {/* Submit */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-4 rounded-2xl bg-[#C4682E] hover:bg-[#B35820] text-white font-bold text-sm sm:text-base shadow-lg shadow-[#C4682E]/30 transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-98"
                    >
                      <Send className="w-5 h-5 text-[#FFE8D1]" />
                      <span>Időpontkérés</span>
                    </button>
                    <p className="text-center text-[11px] text-[#7A6451] mt-2 flex items-center justify-center gap-1.5">
                      <Smile className="w-3.5 h-3.5 text-[#C4682E]" />
                      <span>Adataidat biztonságban, tiszteletben tartva kezeljük.</span>
                    </p>
                  </div>

                </form>
              )}

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
