import { Product } from '../../types/products';

import inDoos from "../../../public/images/inDoos.jpg";

// -- schilderijen --

import schilderij1Img from "../../../public/images/schilderij1.jpg";
import schilderij2Img from "../../../public/images/schilderij2.jpg";
import schilderij3Img from "../../../public/images/schilderij3.jpg";
import schilderij4Img from "../../../public/images/schilderij4.jpg";
import schilderij5Img from "../../../public/images/schilderij5.jpg";
import schilderij6Img from "../../../public/images/schilderij6.jpg";
import schilderij7Img from "../../../public/images/schilderij7.jpg";
import schilderij8Img from "../../../public/images/schilderij8.jpg";
import schilderij9Img from "../../../public/images/schilderij9.jpg";
import schilderij10Img from "../../../public/images/schilderij10.jpg";

// -- sculpturen --

// sculptuur 1
import boomBruin1 from "../../../public/images/BoomBruin/BoomBruin1.jpg"
import boomBruin2 from "../../../public/images/BoomBruin/BoomBruin2.jpg"
import boomBruin3 from "../../../public/images/BoomBruin/BoomBruin3.png"
import boomBruin4 from "../../../public/images/BoomBruin/BoomBruin4.png"
import boomBruin5 from "../../../public/images/BoomBruin/BoomBruin5.png"

// sculptuur 2
import boomRood1 from "../../../public/images/BoomRood/BoomRood1.jpg";
import boomRood2 from "../../../public/images/BoomRood/BoomRood2.jpg";
import boomRood3 from "../../../public/images/BoomRood/BoomRood3.png";
import boomRood4 from "../../../public/images/BoomRood/BoomRood4.png";
import boomRood5 from "../../../public/images/BoomRood/BoomRood5.jpg";
import boomRood6 from "../../../public/images/BoomRood/BoomRood6.png";

// sculptuur 3
import boomBlauw1 from "../../../public/images/BoomBlauw/BoomBlauw1.jpg";
import boomBlauw2 from "../../../public/images/BoomBlauw/BoomBlauw2.jpg";
import boomBlauw3 from "../../../public/images/BoomBlauw/BoomBlauw3.png";
import boomBlauw4 from "../../../public/images/BoomBlauw/BoomBlauw4.png";

// sculptuur 4
import boomPaars1 from "../../../public/images/BoomPaars/BoomPaars1.jpg";
import boomPaars2 from "../../../public/images/BoomPaars/BoomPaars2.jpg";
import boomPaars3 from "../../../public/images/BoomPaars/BoomPaars3.png";

// sculptuur 5
import boomKrul1 from "../../../public/images/BoomKrul/BoomKrul1.jpg";
import boomKrul2 from "../../../public/images/BoomKrul/BoomKrul2.jpg";
import boomKrul3 from "../../../public/images/BoomKrul/BoomKrul3.jpg";

// sculptuur 6
import boomStreep1 from "../../../public/images/BoomStreep/BoomStreep1.jpg";
import boomStreep2 from "../../../public/images/BoomStreep/BoomStreep2.jpg";
import boomStreep3 from "../../../public/images/BoomStreep/BoomStreep3.jpg";
import boomStreep4 from "../../../public/images/BoomStreep/BoomStreep4.jpg";
import boomStreep5 from "../../../public/images/BoomStreep/BoomStreep5.jpg";

export const products: Product[] = [
  {
    id: 1,
    title: 'Najaarslicht',
    price: 295,
    images: [boomBruin1, boomBruin2, boomBruin3, boomBruin4, boomBruin5, inDoos],
    season: 'herfst',
    dimensions: {
      height: '195 cm',
      diameter: '60 cm', 
    },
    features: [
      'Handgemaakt',
      'Eenvoudig op te bergen na gebruik',
      'Seizoensgebonden decoratie mogelijk',
      'Mimaal materiaalgebruik met groots effect',
    ],
    inStock: true,
    category: 'sculpturen'
  },
  {
    id: 2,
    title: 'Licht in stijl',
    price: 275,
    images: [boomRood1, boomRood2, boomRood3, boomRood4, boomRood5, boomRood6, inDoos],
    season: 'alle-seizoenen',
    dimensions: {
      height: '200 cm',
      diameter: '70 cm',
    },
    features: [
      'Handgemaakt',
      'Eenvoudig op te bergen na gebruik',
      'Seizoensgebonden decoratie mogelijk',
      'Mimaal materiaalgebruik met groots effect',
    ],
    inStock: true,
    category: 'sculpturen'
  },
  {
    id: 3,
    title: 'Bubbellicht',
    price: 275,
    images: [boomBlauw1, boomBlauw2, boomBlauw3, boomBlauw4, inDoos],
    season: 'alle-seizoenen',
    dimensions: {
      height: '175 cm',
      diameter: '60 cm',
    },
    features: [
      'Handgemaakt',
      'Eenvoudig op te bergen na gebruik',
      'Seizoensgebonden decoratie mogelijk',
      'Mimaal materiaalgebruik met groots effect',
    ],
    inStock: true,
    category: 'sculpturen'
  },
   {
    id: 4,
    title: 'Lentelicht',
    price: 275,
    images: [boomPaars1, boomPaars2, boomPaars3, inDoos],
    season: 'winter',
    dimensions: {
      height: '220 cm',
      diameter: '70 cm',
    },
    features: [
      'Handgemaakt',
      'Eenvoudig op te bergen na gebruik',
      'Seizoensgebonden decoratie mogelijk',
      'Mimaal materiaalgebruik met groots effect',
    ],
    inStock: true,
    category: 'sculpturen'
  },
  {
    id: 5,
    title: 'Krullen',
    price: 275,
    images: [boomKrul1, boomKrul2, boomKrul3, inDoos],
    season: 'winter',
    dimensions: {
      height: '170 cm',
      diameter: '60 cm',
    },
    features: [
      'Handgemaakt',
      'Eenvoudig op te bergen na gebruik',
      'Seizoensgebonden decoratie mogelijk',
      'Mimaal materiaalgebruik met groots effect',
    ],
    inStock: true,
    category: 'sculpturen'
  },
    {
    id: 6,
    title: 'Strepen',
    price: 275,
    images: [boomStreep1, boomStreep2, boomStreep3, boomStreep4, boomStreep5, inDoos],
    season: 'winter',
    dimensions: {
      height: '170 cm',
      diameter: '60 cm',
    },
    features: [
      'Handgemaakt',
      'Eenvoudig op te bergen na gebruik',
      'Seizoensgebonden decoratie mogelijk',
      'Mimaal materiaalgebruik met groots effect',
    ],
    inStock: true,
    category: 'sculpturen'
  },
  {
    id: 7,
    title: 'Krijtjes',
    price: 150,
    images: [schilderij1Img],
    season: 'zomer',
    dimensions: {
      height: '50 cm',
      width: '70 cm',
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
    id: 8,
    title: 'Abstract',
    price: 275,
    images: [schilderij2Img],
    season: 'lente',
    dimensions: {
      height: '58 cm',
      width: '50 cm',
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
    id: 9,
    title: 'Abstract',
    price: 325,
    images: [schilderij3Img],
    season: 'herfst',
    dimensions: {
      height: '50 cm',
      width: '70 cm',
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
    id: 10,
    title: 'Abstract',
    price: 250,
    images: [schilderij4Img],
    season: 'lente',
    dimensions: {
      height: '50 cm',
      width: '70 cm',
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
    id: 11,
    title: 'Abstract',
    price: 295,
    images: [schilderij5Img],
    season: 'herfst',
    dimensions: {
      height: '80 cm',
      width: '70 cm',
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
    id: 12,
    title: 'Kippen',
    price: 220,
    images: [schilderij7Img],
    season: 'zomer',
    dimensions: {
      height: '100 cm',
      width: '70 cm',
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
    id: 13,
    title: 'Bloemen',  
    price: 280,
    images: [schilderij9Img],
    season: 'zomer',
    dimensions: {
      height: '40 cm',
      width: '50 cm',
    },
    features: [
    'Vrolijke, heldere kleuren',
    'Energieke compositie', 
    'Handgemaakt',
    'Brengt licht in huis',
    'Geschikt voor diverse interieurs'
    ],
    inStock: true,
    category: 'schilderijen'
  },
  {
    id: 14,
    title: 'Wensboom',
    price: 310,
    images: [schilderij10Img],
    season: 'winter',
    dimensions: {
      height: '50 cm',
      width: '50 cm',
    },
    features: [
    'Elegant en tijdloos ontwerp',  
    'Zachte, harmonieuze kleuren',
    'Hoogwaardige olieverf',
    'Handgemaakt',
    'Ideaal voor woon- en eetkamers'
    ],

    inStock: true,
    category: 'schilderijen'
  },
];

export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === Number(id));
};