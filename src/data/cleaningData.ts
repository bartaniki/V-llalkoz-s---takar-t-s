export const CONTACT_INFO = {
  brandName: 'Otthonka',
  subName: 'Gondoskodó, megbízható otthontakarítás magánszemélyeknek',
  phone: '+36 30 789 4521',
  phoneDisplay: '+36 (30) 789-4521',
  email: 'kapcsolat@otthonkatakaritas.hu',
  operatingHours: 'Hétfő – Szombat: 08:00 – 18:00',
  serviceRegion: 'Tata, Tatabánya, Komárom és a környező települések',
  promoPriceHourly: 4000,
  regularPriceHourly: 5500,
  promoDeadline: 'december 11',
};

export const FAMILY_BENEFITS = [
  {
    icon: 'Heart',
    title: 'Mindig ugyanaz a megbízható személy',
    short: 'Nem idegenek serege váltja egymást',
    desc: 'Tudjuk, hogy a lakásod a legféltettebb kuckód. Nálunk nem cserélődnek hetente idegen alvállalkozók: mindig ugyanaz a megbízható, kedves és diszkrét segítő érkezik, akit már megismertél és akiben megbízol.',
    note: 'Feddhetetlen erkölcsi bizonyítvánnyal',
  },
  {
    icon: 'Smile',
    title: 'Nem kell „előtakarítanod” előttünk',
    short: 'Nincs feszengés, se szégyenérzet',
    desc: 'Ismerjük a hétköznapok rohanását. Nem kell rendet raknod, mielőtt megérkezünk: azért vagyunk, hogy levegyük a válladról ezt a terhet, szeretettel és megértéssel.',
    note: 'Ítélkezésmentes, barátságos segítség',
  },
  {
    icon: 'Key',
    title: 'Nyugodtan ránk bízhatod a kulcsot',
    short: 'Töltsd a napot a munkahelyeden vagy a szeretteiddel',
    desc: 'Helyi családok sora él úgy, hogy reggel elindulnak, és délután egy illatos, ragyogó tiszta otthon fogadja őket. Pontos, diszkrét kulcskezelési szokásokkal és maximális tisztelettel vigyázunk minden értékedre.',
    note: 'Gondos odafigyelés az értékeidre',
  },
  {
    icon: 'PawPrint',
    title: 'Állat- és bababarát tisztaság',
    short: 'Biztonságos a tappancsoknak és a tipegőknek',
    desc: 'Ha van otthon egy doromboló cica vagy csóváló kutya, nem probléma – szeretjük az állatokat! Gondos és kíméletes odafigyeléssel takarítunk, így a gyerekek és a kis kedvencek is biztonságban vannak.',
    note: 'Gondoskodó hozzáállás',
  },
];

export const ROOM_EXPERIENCES = [
  {
    id: 'konyha',
    title: 'Konyha & Étkező',
    tagline: 'Ahol végre öröm leülni egy meleg vacsorához',
    mood: '☕ Zsírtalan pultok, csillogó mosogató, morzsamentes étkező',
    details: [
      'Konyhapultok, csempék és főzőlap alapos zsírtalanítása',
      'Mosogatótálca és csaptelep vízkőtelenítése, csillogóra törlése',
      'Mikrohullámú sütő külső-belső megtisztítása',
      'Konyhabútor-frontok ujjlenyomat-mentesítése',
      'Étkezőasztal és székek gondos áttörlése',
      'Szemetes kimosása és új szemeteszsák behelyezése',
      'Padló seprése és illatos, ápoló felmosása',
    ],
  },
  {
    id: 'furdo',
    title: 'Fürdőszoba & Toalett',
    tagline: 'Mint egy kis otthoni wellness a nap végén',
    mood: '🛁 Kristálytiszta kád, csíkmentes tükrök, friss illat',
    details: [
      'Kád, zuhanyfülke és üvegfalak vízkő- és szappanmentesítése',
      'Mosdó és csaptelepek ragyogóvá varázsolása karcmentesen',
      'Toalett higiénikus, antibakteriális mélyfertőtlenítése',
      'Tükrök és piperetartók csíkmentes fényezése',
      'Csempék és szellőzők lemosása, portalanítása',
      'Fürdőszobaszőnyegek alapos kirázása és padló felmosása',
    ],
  },
  {
    id: 'nappali',
    title: 'Nappali & Hálószobák',
    tagline: 'Ahol a gyerekek mezítláb játszhatnak a puha szőnyegen',
    mood: '🛋️ Portalan polcok, friss ágynemű, tiszta kényelem',
    details: [
      'Bútorok, asztalok, polcok és dekorációk kíméletes portalanítása',
      'TV, képernyők és elektronikai felületek antisztatikus áttörlése',
      'Ágyazás, kérésre frissen mosott ágynemű felhúzása',
      'Kanapék és fotelek párnái közötti porszívózás',
      'Szőnyegek szálmélységi portalanítása (állatszőr eltávolítás)',
      'Parketta vagy járólap kímélő ápoló felmosása',
    ],
  },
  {
    id: 'eloter',
    title: 'Előszoba & Közlekedők',
    tagline: 'Az első benyomás: „De jó itthon lenni!”',
    mood: '🌿 Rendezettség, lábtörlő frissesség, tükörtisztaság',
    details: [
      'Bejárati ajtó és kilincsek fertőtlenítő áttörlése',
      'Cipőtárolók és fogasok környékének rendbetétele',
      'Egész alakos tükrök csíkmentes tisztítása',
      'Lábtörlő alapos kiporolása és alatta való felmosás',
      'Pókhálótlanítás a magas sarkokban és szegőléceknél',
    ],
  },
];

export const LOCAL_COMMUNITIES = [
  {
    name: 'Tata',
    note: 'Tóváros, Belváros, Újhegy, Kertváros, Agostyán',
    desc: 'Az Öreg-tó partjától a Cseke-tóig otthonosan mozgunk.',
  },
  {
    name: 'Tatabánya',
    note: 'Dózsakert, Újváros, Bánhida, Alsó- és Felsőgalla, Kertváros, Sárberek',
    desc: 'A Turul lábától a Panoráma lakótelepig.',
  },
  {
    name: 'Komárom',
    note: 'Belváros, Koppánymonostor, Szőny, Duna-parti övezet',
    desc: 'A Monostori erődtől a családi házas kertvárosokig.',
  },
  {
    name: 'Vértesszőlős & Baj',
    note: 'Családi házas övezetek és csendes utcák',
    desc: 'Közvetlen szomszédos települések, gyors elérhetőséggel.',
  },
  {
    name: 'Környe, Kocs & Naszály',
    note: 'Családi házak és meghitt otthonok',
    desc: 'Rendszeres heti/kétheti járattal, rugalmas egyeztetéssel.',
  },
  {
    name: 'Ács, Szomód, Mocsa & környékük',
    note: 'Környező települések a térségben',
    desc: 'Előzetes egyeztetés szerint szívesen vállaljuk.',
  },
];

export const WARM_FAQS = [
  {
    q: 'Hogyan működik ez a 4000 Ft/órás próbaakció?',
    a: 'Nem szeretnénk, hogy zsákbamacskát vásárolj! Ezért az első alkalommal kedvezményes, 4.000 Ft/óra díjért kipróbálhatod, hogyan dolgozunk a lakásodban vagy házadban. A takarítás végén közösen átnézzük az eredményt, és ha tetszett, készítünk egy személyre szabott ajánlatot a rendszeres heti vagy kétheti alkalmakra. Az akció december 11-ig érvényes, a szabad kapacitásaink erejéig.',
  },
  {
    q: 'Pontosan mely településeken vehető igénybe a szolgáltatás?',
    a: 'Tata, Tatabánya, Komárom és a környező települések (pl. Vértesszőlős, Baj, Környe, Kocs, Naszály, Ács, Szomód, Mocsa stb.) területén vállalunk magánlakás és háztakarítást.',
  },
  {
    q: 'Kellemetlen lenne, ha rendetlenség van a lakásban?',
    a: 'Egyáltalán nem! Az élet nem egy katalógusfotó, a játékok, ruhák, edények felgyűlhetnek egy nehéz héten. Kérünk, ne takaríts össze előttünk szégyenérzetből – éppen azért jövünk, hogy a te válladról vegyük le ezt a terhet, szeretettel és teljes megértéssel.',
  },
  {
    q: 'Biztonságban vannak a személyes tárgyaink és értékeink?',
    a: 'Maximálisan. Feddhetetlen erkölcsi bizonyítvánnyal rendelkezünk, és a privát szférát a legmélyebben tiszteletben tartjuk. Nem kutakodunk zárt fiókokban, nem nyúlunk személyes iratokhoz. Kulcsos megbízás esetén is úgy bánunk az otthonoddal, mintha a saját családunké lenne.',
  },
  {
    q: 'Ott kell lennem otthon, amíg dolgoztok?',
    a: 'Ahogy neked a legkényelmesebb! Az első alkalommal örülünk, ha az elején és a végén találkozunk, hogy átbeszéljük az apró részleteket (pl. melyik szoba az első, van-e kedvenc illatod). Később a legtöbb családunk egyszerűen ránk bízza a kulcsot, és a nap végén egy ragyogó tiszta otthonba tér haza.',
  },
  {
    q: 'Ki hozza a szereket és eszközöket?',
    a: 'A felszerelést és a tisztítószereket a megrendelő háztartás biztosítja, de kérésre szívesen segítünk az összeállításban és a bevált szerek kiválasztásában. Tapasztalatunk szerint a legtöbb családnak sokkal megnyugtatóbb, ha a saját porszívójukkal, eszközeikkel dolgozunk, emellett minden háztartásban mások a megszokott rutinok és a preferált tisztítószerek.',
  },
  {
    q: 'Hogyan tudok időpontot egyeztetni?',
    a: 'Közvetlenül felhívhatsz telefonon a +36 30 789 4521 számon (egy barátságos beszélgetés keretében), vagy írhatsz egy e-mailt a kapcsolat@otthonkatakaritas.hu címre, illetve a lenti űrlapon is elküldheted a kérésed. Pár órán belül szeretettel visszahívunk!',
  },
];
