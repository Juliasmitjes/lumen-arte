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
  price: number;
  images: StaticImageData[];
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

export interface Doek extends BaseProduct {
  category: 'doek-aan-de-muur';
  dimensions: PaintingDimensions;
}

export type Product = Sculpture | Painting | Doek;
