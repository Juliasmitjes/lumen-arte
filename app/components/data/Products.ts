import { Product } from '../../types/products';
import boom1Img from "../../../public/images/boom1.jpg";
import boom2Img from "../../../public/images/boom2.jpeg";
import schilderij1Img from "../../../public/images/schilderij1.jpg";
import boom3Img from "../../../public/images/boom3.jpg";
import schilderij2Img from "../../../public/images/schilderij2.jpg";
import boom4Img from "../../../public/images/boom4.jpeg";
import schilderij3Img from "../../../public/images/schilderij3.jpg";
import schilderij4Img from "../../../public/images/schilderij4.jpg";
import schilderij5Img from "../../../public/images/schilderij5.jpg";
import schilderij6Img from "../../../public/images/schilderij6.jpg";
import schilderij7Img from "../../../public/images/schilderij7.jpg";
import schilderij8Img from "../../../public/images/schilderij8.jpg";

export const products: Product[] = [
  {
    id: 1,
    title: 'Najaarslicht',
    description: 'Organische vormen in warme aardtinten',
    longDescription: 'Deze prachtige lichtsculptuur brengt de warmte van de herfst in huis. Gemaakt met zorgvuldig geselecteerde materialen die de natuurlijke schoonheid van het seizoen weerspiegelen. De warme LED-verlichting creëert een intieme sfeer die perfect past bij koude herfstavonden.',
    price: 295,
    images: [boom1Img, boom2Img],
    materials: ['Berkenhouten stokken', 'Warm LED-lichtsnoer', 'IJzeren ringen'],
    season: 'herfst',
    dimensions: {
      height: '180 cm',
      width: '120 cm', 
      depth: '120 cm'
    },
    features: [
      'Handgemaakt met natuurlijke materialen',
      'Energiezuinige LED-verlichting',
      'Eenvoudig op te bergen na gebruik',
      'Seizoensgebonden decoratie mogelijk',
      'Duurzaam en milieuvriendelijk'
    ],
    inStock: true,
    category: 'sculpturen'
  },
  {
    id: 2,
    title: 'Licht in stijl',
    description: 'Minimalistische elegantie voor moderne interieurs',
    longDescription: 'Een tijdloze lichtsculptuur die zich perfect aanpast aan elk modern interieur. De cleane lijnen en neutrale tinten maken deze sculptuur een elegante toevoeging aan elke ruimte. Het zachte licht creëert een serene atmosfeer.',
    price: 275,
    images: [boom2Img, boom1Img],
    materials: ['Beukenhout', 'Warm wit LED-snoer', 'Natuurlijk linnen', 'RVS bevestigingen'],
    season: 'alle-seizoenen',
    dimensions: {
      height: '160 cm',
      width: '100 cm',
      depth: '100 cm'
    },
    features: [
      'Tijdloos design',
      'Hoogwaardige materialen',
      'Dimbare LED-verlichting',
      'Makkelijk te monteren',
      'Geschikt voor alle seizoenen'
    ],
    inStock: true,
    category: 'sculpturen'
  },
  {
    id: 3,
    title: 'Krijtjes',
    description: 'Een kleurrijk doek vol speelse expressie',
    longDescription: 'Dit levendige schilderij, gemaakt met olieverf op linnen, straalt de energie en vrijheid van een zomerse dag uit. De frisse kleuren en losse penseelstreken doen denken aan krijttekeningen op straat: spontaan, vrolijk en vol beweging. Perfect om een ruimte op te fleuren en een speelse, creatieve sfeer te creëren. Elk werk is met zorg handgemaakt, waardoor geen enkel exemplaar hetzelfde is.',
    price: 150,
    images: [schilderij1Img],
    materials: ['Olieverf op doek', 'Natuurlijk linnen', 'Lichtreflecterende pigmenten'],
    season: 'zomer',
    dimensions: {
      height: '40 cm',
      width: '40 cm',
      depth: '4 cm'
    },
    features: [
      'Kleurrijk ontwerp',
      'Compact formaat, geschikt voor diverse ruimtes',
      'Direct ophangbaar',
      'Handgeschilderd in olieverf'
    ],
    inStock: true,
    category: 'schilderijen'
  },
  {
    id: 4,
    title: 'Bubbellicht',
    description: 'Warme oranje en bruine tinten met zachte gloed',
    longDescription: 'Een warme scuptuur die je kamer vult met gezellig herfstlicht. De subtiele gloed en organische vormen zorgen voor een betoverend middelpunt, perfect voor zowel feestelijke avonden als bijzondere gelegenheden.',
    price: 275,
    images: [boom3Img],
    materials: ['Hout', 'Natuurlijke vezels'],
    season: 'alle-seizoenen',
    dimensions: {
      height: '160 cm',
      width: '100 cm',
      depth: '100 cm'
    },
    features: [
      'Tijdloos design',
      'Hoogwaardige materialen',
      'Dimbare LED-verlichting',
      'Makkelijk te monteren',
      'Geschikt voor alle seizoenen'
    ],
    inStock: true,
    category: 'sculpturen'
  },
  {
    id: 5,
    title: 'Vormen',
    description: 'Abstracte vormen in zachte lentetinten',
    longDescription: 'Dit is een abstract aquarelwerk waarin speelse lijnen en zachte kleuren samensmelten tot een harmonieus geheel. De transparantie van de aquarelverf geeft het werk een luchtige en levendige uitstraling, die perfect aansluit bij de frisheid van de lente. Het schilderij nodigt de kijker uit om eigen betekenissen en associaties te ontdekken binnen de vormen en kleurvlakken. Een unieke blikvanger die rust én inspiratie in de ruimte brengt.',
    price: 275,
    images: [schilderij2Img],
    materials: [ 'Aquarel op papier'],
    season: 'lente',
    dimensions: {
      height: '100 cm',
      width: '70 cm',
      depth: '3 cm'
    },
    features: [
    'Origineel abstract ontwerp',
    'Met aquareltechniek handgeschilderd',
    'Frisse, lichte uitstraling',
    'Uniek kunstwerk',
    'Klaar om in te lijsten of op te hangen'
    ],
    inStock: true,
    category: 'schilderijen'
  },
  {
    id: 6,
    title: 'Lentelicht',
    description: 'Feestelijke, vrolijke sculptuur met een frisse uitstraling',
    longDescription: 'Een speelse en feestelijke sculptuur die met zijn frisse kleuren en natuurlijke materialen direct een positieve sfeer oproept. Het werk combineert biologisch linnen, gevilte wol en zorgvuldig gekozen dennenappels tot een verrassend geheel dat doet denken aan het ontwaken van de natuur. De zachte, dimbare LED-verlichting versterkt dit gevoel en zorgt voor een uitnodigende gloed in elke ruimte. Brengt vrolijkheid, een feestje voor iedere dag!',
    price: 275,
    images: [boom4Img],
    materials: ['Biologisch linnen', 'Gevilte wol', 'Denneappels'],
    season: 'winter',
    dimensions: {
      height: '160 cm',
      width: '100 cm',
      depth: '100 cm'
    },
    features: [
      'Tijdloos design',
      'Hoogwaardige materialen',
      'Dimbare LED-verlichting',
      'Makkelijk te monteren',
      'Geschikt voor alle seizoenen'
    ],
    inStock: true,
    category: 'sculpturen'
  },
  {
    id: 7,
    title: 'Herfst',
    description: 'Warme tinten in abstracte vormen',
    longDescription: 'Een schilderij dat de overgang van zomer naar herfst vangt in diepe aardetinten en speelse penseelstreken. De warme kleuren roepen de geur van natte bladeren en de gloed van laagstaande zon op. Een werk dat warmte en melancholie combineert, perfect voor wie de charme van dit seizoen in huis wil halen.',
    price: 325,
    images: [schilderij3Img],
    materials: ['Acrylverf op doek', 'Linnen', 'Natuurlijke pigmenten'],
    season: 'herfst',
    dimensions: {
      height: '100 cm',
      width: '70 cm',
      depth: '3 cm'
    },
    features: [
    'Diepe, warme kleuren',
    'Abstracte interpretatie van de natuur',
    'Handgemaakt en uniek',
    'Stevige linnen ondergrond',
    'Geschikt voor woonkamer of kantoor'
    ],
    inStock: true,
    category: 'schilderijen'
  },
  {
    id: 8,
    title: 'Vrolijk',
    description: 'Speels schilderij vol kleur en beweging',
    longDescription: 'Een explosie van kleuren en vormen die energie en optimisme uitstralen. Met levendige tinten en luchtige composities brengt dit werk de frisheid van de lente in iedere ruimte. Ideaal om een saaie muur tot leven te wekken en een positieve sfeer te creëren.',
    price: 250,
    images: [schilderij4Img],
    materials: ['Aquarel op papier', 'Lichtgewicht houten lijst'],
    season: 'lente',
    dimensions: {
      height: '100 cm',
      width: '70 cm',
      depth: '3 cm'
    },
    features: [
    'Kleurrijk en expressief',
    'Lichte aquareltechniek',
    'Past bij moderne en klassieke interieurs',
    'Brengt vrolijkheid in huis'
    ],
    inStock: true,
    category: 'schilderijen'
  },
  {
    id: 9,
    title: 'Dansen',
    description: 'Beweging en ritme gevangen op doek',
    longDescription: 'Dit schilderij vangt de dynamiek en vrijheid van dans in een kleurrijke, abstracte compositie. De penseelstreken volgen elkaar op als muzieknoten en geven het gevoel dat de figuren zich ritmisch voortbewegen. Een krachtig schilderij dat vitaliteit en energie toevoegt aan elke ruimte.',
    price: 295,
    images: [schilderij5Img],
    materials: ['Olieverf op doek', 'Linnen'],
    season: 'herfst',
    dimensions: {
      height: '100 cm',
      width: '70 cm',
      depth: '3 cm'
    },
    features: [
    'Expressieve penseelstreken',
    'Sterke contrasten',
    'Abstracte weergave van beweging',
    'Hoogwaardige olieverf',
    'Een echte blikvanger'
    ],
    inStock: true,
    category: 'schilderijen'
  },
  {
    id: 10,
    title: 'Griekse vaas',
    description: 'Moderne interpretatie van klassieke vormen',
    longDescription: 'Dit schilderij brengt een ode aan de klassieke oudheid met een eigentijdse twist. De vormen zijn strak en minimalistisch weergegeven, terwijl de kleuren subtiel verwijzen naar aardewerk. Dit werk verbindt verleden en heden en past perfect in een modern interieur met een liefde voor geschiedenis.',
    price: 340,
    images: [schilderij6Img],
    materials: ['Gemengde techniek op doek', 'Minerale pigmenten'],
    season: 'alle-seizoenen',
    dimensions: {
      height: '100 cm',
      width: '70 cm',
      depth: '3 cm'
    },
    features: [
    'Geïnspireerd door klassieke kunst',
    'Minimalistisch en modern',
    'Uniek gebruik van materialen',
    'Duurzaam afgewerkt',
    'Geschikt voor diverse ruimtes'
    ],
    inStock: true,
    category: 'schilderijen'
  },
  {
    id: 11,
    title: 'Kippen',
    description: 'Speelse weergave van alledaagse dieren',
    longDescription: 'Een vrolijk en luchtig schilderij waarin de eenvoud van het boerenleven centraal staat. Met speelse lijnen en felle kleuren komen de dieren tot leven op het doek. Dit kunstwerk brengt een glimlach op ieders gezicht en voegt een landelijke charme toe aan je interieur.',
    price: 220,
    images: [schilderij7Img],
    materials: ['Acrylverf op doek', 'Linnen'],
    season: 'zomer',
    dimensions: {
      height: '100 cm',
      width: '70 cm',
      depth: '3 cm'
    },
    features: [
    'Luchtig en humoristisch',
    'Vrolijke kleuren',
    'Handgeschilderd',
    'Compact formaat',
    'Ideaal als cadeau'
    ],
    inStock: true,
    category: 'schilderijen'
  },
  {
    id: 12,
    title: 'Man met gitaar',
    description: 'Een muzikale ode in verf en vorm',
    longDescription: 'Dit doek ademt muziek. De figuur en het instrument versmelten in een harmonieuze compositie vol ritme en emotie. Het schilderij vangt de intimiteit van een muzikant die volledig opgaat in zijn spel. Een kunstwerk dat zowel sereniteit als passie uitstraalt.',
    price: 360,
    images: [schilderij8Img],
    materials: ['Olieverf en houtskool op doek', 'Linnen'],
    season: 'alle-seizoenen',
    dimensions: {
      height: '100 cm',
      width: '70 cm',
      depth: '3 cm'
    },
    features: [
    'Muzikale thematiek',
    'Diepe kleuren en textuur',
    'Sterke emotionele uitstraling',
    'Hoogwaardige olieverf',
    'Uniek en handgemaakt'
    ],
    inStock: true,
    category: 'schilderijen'
  }
];

export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === Number(id));
};