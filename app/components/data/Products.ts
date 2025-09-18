import { Product } from '../../types/products';
import boom1Img from "../../../public/images/boom1.jpg";
import boom2Img from "../../../public/images/boom2.jpeg";
import schilderij1Img from "../../../public/images/schilderij1.jpg";
import boom3Img from "../../../public/images/boom3.jpg";
import schilderij2Img from "../../../public/images/schilderij2.jpg";
import boom4Img from "../../../public/images/boom4.jpeg";

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
    longDescription: 'Een warme scuptuur die je kamer vult met gezellig herfstlicht.',
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
    title: 'Boslandschap',
    description: 'Warme gele en rode tinten die een warme dag in het bos uitbeelden',
    longDescription: 'Een prachtig schilderij dat je meeneemt naar de magie van het bos.',
    price: 275,
    images: [schilderij2Img],
    materials: [ 'Aquarel op papier'],
    season: 'lente',
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
    category: 'schilderijen'
  },
  {
    id: 6,
    title: 'Lentelicht',
    description: 'Feestelijke, vrolijke sculptuur met een frisse uitstraling',
    longDescription: 'Brengt vrolijkheid, een feestje voor iedere dag!',
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
  }
];

export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === Number(id));
};