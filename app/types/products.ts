import { StaticImageData } from "next/image";

export interface SculptureDimensions {
  height: string;
  diameter: string;
}

export interface PaintingDimensions {
  height: string;
  width: string;
}

export interface BaseProduct {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  price: number;
  images: StaticImageData[];
  materials: string[];
  season: 'lente' | 'zomer' | 'herfst' | 'winter' | 'alle-seizoenen';
  features: string[];
  inStock: boolean;
}

export interface Sculpture extends BaseProduct {
  category: 'sculpturen';
  dimensions: SculptureDimensions;
}

export interface Painting extends BaseProduct {
  category: 'schilderijen';
  dimensions: PaintingDimensions;
}

export type Product = Sculpture | Painting;
