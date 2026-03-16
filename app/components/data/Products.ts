import { Product } from '../../types/products';

import inDoos from "../../../public/images/inDoos.jpg";

// -- schilderijen --

import schilderij1Img from "../../../public/images/Pasteltekeningen/schilderij1.jpg";
import schilderij2Img from "../../../public/images/Pasteltekeningen/schilderij2.jpg";
import schilderij3Img from "../../../public/images/Pasteltekeningen/schilderij3.png";
import schilderij4Img from "../../../public/images/Pasteltekeningen/schilderij4.jpg";
import schilderij5Img from "../../../public/images/Pasteltekeningen/schilderij5.png";
import schilderij6Img from "../../../public/images/Pasteltekeningen/schilderij6.jpg";
import schilderij7Img from "../../../public/images/Pasteltekeningen/schilderij7.jpg";
import schilderij8Img from "../../../public/images/Pasteltekeningen/schilderij8.jpg";
import schilderij9Img from "../../../public/images/Pasteltekeningen/schilderij9.jpg";
import schilderij10Img from "../../../public/images/Pasteltekeningen/schilderij10.jpg";
import schilderij11Img from "../../../public/images/Pasteltekeningen/schilderij11.jpg";
import schilderij12Img from "../../../public/images/Pasteltekeningen/schilderij12.jpg";
import schilderij13Img from "../../../public/images/Pasteltekeningen/schilderij13.png";
import schilderij14Img from "../../../public/images/Pasteltekeningen/schilderij14.png";
import schilderij15Img from "../../../public/images/Pasteltekeningen/schilderij15.png";
import schilderij16Img from "../../../public/images/Pasteltekeningen/schilderij16.jpg";

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

// -- doeken --
import doek1Img from "../../../public/images/Doeken/doek1.png";
import doek2Img from "../../../public/images/Doeken/doek2.jpg";
import doek3Img from "../../../public/images/Doeken/doek3.png";
import doek4Img from "../../../public/images/Doeken/doek4.png";



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
    inStock: false,
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
    inStock: true,
    category: 'sculpturen'
  },
   {
    id: 4,
    title: 'Lentelicht',
    price: 275,
    images: [boomPaars1, boomPaars2, boomPaars3, inDoos],
    season: 'lente',
    dimensions: {
      height: '220 cm',
      diameter: '70 cm',
    },
    inStock: true,
    category: 'sculpturen'
  },
  {
    id: 5,
    title: 'Krullen',
    price: 275,
    images: [boomKrul1, boomKrul2, boomKrul3],
    season: 'zomer',
    dimensions: {
      height: '170 cm',
      diameter: '60 cm',
    },
    inStock: true,
    category: 'sculpturen'
  },
    {
    id: 6,
    title: 'Strepen',
    price: 275,
    images: [boomStreep1, boomStreep2, boomStreep3, boomStreep4, boomStreep5],
    season: 'alle-seizoenen',
    dimensions: {
      height: '170 cm',
      diameter: '60 cm',
    },
    inStock: true,
    category: 'sculpturen'
  },
  {
    id: 7,
    title: 'Vlakken',
    price: 310,
    images: [schilderij11Img],
    season: 'winter',
    dimensions: {
      height: '52 cm',
      width: '73 cm',
    },
    inStock: true,
    category: 'schilderijen'
  },
   {
    id: 8,
    title: 'Paarse slinger',
    price: 310,
    images: [schilderij12Img],
    season: 'winter',
    dimensions: {
      zonderLijst: {
        height: '65 cm',
        width: '95 cm',
      },
      metLijst: {
        height: '80 cm',
        width: '115 cm',
      },
    },
    inStock: true,
    category: 'schilderijen'
  },
    {
    id: 9,
    title: 'Blauwe lente',
    price: 200,
    images: [schilderij13Img],
    season: 'zomer',
    dimensions: {
      height: '50 cm',
      width: '70 cm',
    },
    inStock: true,
    category: 'schilderijen'
  }, 
  {
    id: 10,
    title: 'Pastel',
    price: 200,
    images: [schilderij15Img],
    season: 'zomer',
    dimensions: {
      height: '50 cm',
      width: '70 cm',
    },
    inStock: true,
    category: 'schilderijen'
  }, 
  {
    id: 11,
    title: 'Krijtjes',
    price: 150,
    images: [schilderij1Img],
    season: 'zomer',
    dimensions: {
      height: '50 cm',
      width: '70 cm',
    },
    inStock: true,
    category: 'schilderijen'
  }, 
  {
    id: 12,
    title: 'Anders blauw',
    price: 275,
    images: [schilderij2Img],
    season: 'lente',
    dimensions: {
      height: '58 cm',
      width: '50 cm',
    },
    inStock: true,
    category: 'schilderijen'
  },
  {
    id: 13,
    title: 'Harmonie',
    price: 325,
    images: [schilderij3Img],
    season: 'herfst',
    dimensions: {
      height: '50 cm',
      width: '70 cm',
    },
    inStock: true,
    category: 'schilderijen'
  },
  {
    id: 14,
    title: 'Dansen',
    price: 250,
    images: [schilderij4Img],
    season: 'lente',
    dimensions: {
      height: '50 cm',
      width: '70 cm',
    },
    inStock: true,
    category: 'schilderijen'
  },
  {
    id: 15,
    title: 'Hink stap sprong',
    price: 295,
    images: [schilderij5Img],
    season: 'herfst',
    dimensions: {
      height: '70 cm',
      width: '80 cm',
    },
    inStock: true,
    category: 'schilderijen'
  },
    {
    id: 16,
    title: 'Krijtjes',
    price: 295,
    images: [schilderij16Img],
    season: 'herfst',
    dimensions: {
      height: '70 cm',
      width: '80 cm',
    },
    inStock: true,
    category: 'schilderijen'
  }, 
  {
    id: 17,
    title: 'Bloemen',  
    price: 280,
    images: [schilderij9Img],
    season: 'zomer',
    dimensions: {
      height: '40 cm',
      width: '50 cm',
    },
    inStock: true,
    category: 'schilderijen'
  },
  {
    id: 18,
    title: 'Wensboom',
    price: 310,
    images: [schilderij10Img],
    season: 'winter',
    dimensions: {
      height: '50 cm',
      width: '50 cm',
    },
    inStock: false,
    category: 'schilderijen'
  },
   {
    id: 19,
    title: 'Kippen',
    price: 220,
    images: [schilderij7Img],
    season: 'zomer',
    dimensions: {
      height: '40 cm',
      width: '30 cm',
    },
    inStock: true,
    category: 'schilderijen'
  },
  {
    id: 20,
    title: 'Krullen',
    price: 240,
    images: [doek1Img],
    season: 'lente',
    dimensions: {
      height: '73 cm',
      width: '52 cm',
    },
  inStock: true,
  category: 'doek-aan-de-muur',
  },
  {
    id: 21,
    title: 'Vliegen',
    price: 260,
    images: [doek2Img, doek3Img],
    season: 'zomer',
    dimensions: {
      height: '118 cm',
      width: '82 cm',
    },
  inStock: true,
  category: 'doek-aan-de-muur',
  },
  {
    id: 22,
    title: 'Groen', 
    price: 240,
    images: [doek4Img],
    season: 'lente',
    dimensions: {
      height: '78 cm',
      width: '52 cm',
    },
  inStock: true,
  category: 'doek-aan-de-muur',
  },
];

export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === Number(id));
};
