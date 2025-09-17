import { StaticImageData } from "next/image";


export interface Product {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  price: number;
  images: StaticImageData[]; 
  materials: string[];
  season: 'lente' | 'zomer' | 'herfst' | 'winter' | 'alle-seizoenen';
  dimensions: {
    height: string;
    width: string;
    depth: string;
  };
  features: string[];
  inStock: boolean;
  category: 'sculpturen' | 'schilderijen';
}