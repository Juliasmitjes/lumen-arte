"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import { ExternalLink, Heart } from "lucide-react";
import { products } from "./data/Products";
import Image from "next/image";
import Link from "next/link";
import {
  FramedPaintingDimensions,
  PaintingDimensions,
  Product,
  RectDimensions,
} from "../types/products";

type GalleryCategory = "sculpturen" | "schilderijen" | "doek-aan-de-muur";

interface GalleryProps {
  activeCategory: GalleryCategory;
  setActiveCategory: (value: GalleryCategory) => void;
}

const ABSTRACT_PAINTING_IDS = new Set([7, 8, 9, 10, 11, 12, 13, 14, 15, 16]);
const FIGURATIVE_PAINTING_IDS = new Set([17, 18, 19]);

const Gallery = ({ activeCategory, setActiveCategory }: GalleryProps) => {
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);

  const filteredProducts = products.filter(
    (product) => product.category === activeCategory
  );

  const hasFramedPaintingDimensions = (
    dimensions: PaintingDimensions
  ): dimensions is FramedPaintingDimensions => {
    return "zonderLijst" in dimensions && "metLijst" in dimensions;
  };

  const hasRectDimensions = (
    dimensions: PaintingDimensions
  ): dimensions is RectDimensions => {
    return "height" in dimensions && "width" in dimensions;
  };

  const getDisplayDimensions = (product: Product): RectDimensions | null => {
    if (product.category === "sculpturen") {
      return null;
    }

    if (
      product.category === "schilderijen" &&
      hasFramedPaintingDimensions(product.dimensions)
    ) {
      return product.dimensions.zonderLijst;
    }

    return hasRectDimensions(product.dimensions) ? product.dimensions : null;
  };

  const paintingSections =
    activeCategory === "schilderijen"
      ? [
          {
            key: "abstract",
            title: "abstract",
            products: filteredProducts.filter((product) =>
              ABSTRACT_PAINTING_IDS.has(product.id)
            ),
          },
          {
            key: "figuratief",
            title: "figuratief",
            products: filteredProducts.filter((product) =>
              FIGURATIVE_PAINTING_IDS.has(product.id)
            ),
          },
        ].filter((section) => section.products.length > 0)
      : [];

  const renderProductCard = (product: Product) => {
    const isPaintingLike =
      product.category === "schilderijen" ||
      product.category === "doek-aan-de-muur";
    const framedPaintingDimensions =
      product.category === "schilderijen" &&
      hasFramedPaintingDimensions(product.dimensions)
        ? product.dimensions
        : null;
    const displayDimensions = getDisplayDimensions(product);
    const isSculpture = product.category === "sculpturen";
    const paintingHeight = isPaintingLike
      ? parseInt(displayDimensions?.height ?? "0", 10)
      : 0;
    const paintingWidth = isPaintingLike
      ? parseInt(displayDimensions?.width ?? "0", 10)
      : 0;
    const isSmallPainting =
      isPaintingLike && Math.max(paintingHeight, paintingWidth) <= 50;
    const paintingPrice = isSmallPainting ? "200" : "300";

    return (
      <div
        key={product.id}
        className={`bg-card rounded-xl overflow-hidden shadow-soft transition-all duration-500 ${
          isSculpture ? "group hover:shadow-warm hover:-translate-y-2" : ""
        } animate-fadeIn`}
        onMouseEnter={() => isSculpture && setHoveredItem(product.id)}
        onMouseLeave={() => isSculpture && setHoveredItem(null)}
      >
        {isPaintingLike ? (
          <div className="flex flex-col items-center gap-6 p-8 md:flex-row md:items-start md:p-10">
            <div className="relative mx-auto w-[300px]">
              {!product.inStock && (
                <div className="absolute top-2 left-2 z-10 rounded-full bg-red-600/90 px-3 py-1 text-xs font-semibold text-white shadow-sm">
                  Verkocht
                </div>
              )}

              <div className="group rounded-lg overflow-hidden bg-muted/10 shadow-md transition-all duration-300 hover:scale-[1.07] hover:shadow-lg">
                {product.title === "Vliegen" && product.images[1] ? (
                  <div className="relative">
                    <Image
                      src={product.images[0]}
                      alt={product.title}
                      className="w-full h-auto object-contain transition-opacity duration-500 ease-in-out group-hover:opacity-0"
                    />
                    <Image
                      src={product.images[1]}
                      alt={product.title}
                      className="pointer-events-none absolute inset-0 w-full h-auto object-contain opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100"
                    />
                  </div>
                ) : (
                  <Image
                    src={product.images[0]}
                    alt={product.title}
                    className="w-full h-auto object-contain"
                  />
                )}
              </div>
            </div>

            <div className="flex w-full flex-col justify-center text-center md:w-[55%] md:text-left">
              <h4 className="mb-3 text-xl font-semibold text-foreground">
                {product.title}
              </h4>

              {framedPaintingDimensions ? (
                <>
                  <p className="font-business text-sm text-accent-warm">
                    Formaat zonder lijst:{" "}
                    {framedPaintingDimensions.zonderLijst.height} x{" "}
                    {framedPaintingDimensions.zonderLijst.width}
                  </p>
                  <p className="font-business text-sm text-accent-warm">
                    Formaat met lijst: {framedPaintingDimensions.metLijst.height}{" "}
                    x {framedPaintingDimensions.metLijst.width}
                  </p>
                </>
              ) : (
                <p className="font-business text-sm text-accent-warm">
                  Formaat: {displayDimensions?.height ?? "-"} x{" "}
                  {displayDimensions?.width ?? "-"}
                </p>
              )}

              <p className="mt-2 font-business text-sm text-muted-foreground">
                Prijs: {paintingPrice} met lijst
              </p>
            </div>
          </div>
        ) : (
          <>
            <Link
              href={`/products/${product.id}`}
              className="relative block aspect-[4/5] overflow-hidden group"
            >
              <Image
                src={product.images[0]}
                alt={product.title}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {!product.inStock && (
                <div className="absolute top-3 left-3 z-10 rounded-full bg-red-600/90 px-3 py-1 text-xs font-semibold text-white">
                  Verkocht
                </div>
              )}

              <div
                className={`absolute inset-0 flex items-center justify-center bg-primary opacity-0 transition-opacity duration-500 group-hover:opacity-80 ${
                  hoveredItem === product.id ? "cursor-pointer opacity-80" : ""
                }`}
              >
                <div className="p-6 text-center">
                  <Heart className="mx-auto mb-2 h-8 w-8 text-primary-foreground" />
                  <p className="font-business font-bold text-primary-foreground">
                    Bekijk details
                  </p>
                </div>
              </div>
            </Link>

            <div className="p-6">
              <h4 className="mb-4 text-xl font-semibold text-foreground">
                {product.title}
              </h4>

              <Button asChild variant="default" size="sm" className="w-full">
                <Link href={`/products/${product.id}`}>
                  Meer informatie
                  <ExternalLink className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </>
        )}
      </div>
    );
  };

  return (
    <section id="galerij" className="gradient-earth lg:py-20">
      <div className="container mx-auto px-6 pb-10 pt-16 lg:pb-0 lg:pt-0">
        <div
          className="
            flex flex-col sm:flex-row
            gap-4 sm:gap-3
            p-2
            rounded-4xl sm:rounded-full
            bg-white/40 backdrop-blur-md shadow-soft
            w-full sm:max-w-xl mx-auto mb-14
            items-center justify-center
          "
        >
          {[
            { key: "sculpturen", label: "Lichtsculpturen" },
            { key: "schilderijen", label: "Pasteltekeningen" },
            { key: "doek-aan-de-muur", label: "Doek aan de muur" },
          ].map((filter) => (
            <Button
              key={filter.key}
              asChild
              variant={activeCategory === filter.key ? "default" : "ghost"}
              size="lg"
              className="
                rounded-full px-6 font-medium
                w-full sm:w-auto
                text-base
              "
            >
              <a
                href="#galerij"
                onClick={() =>
                  setActiveCategory(filter.key as GalleryCategory)
                }
              >
                {filter.label}
              </a>
            </Button>
          ))}
        </div>

        {activeCategory === "sculpturen" && (
          <div className="mb-16 text-center">
            <h2 className="font-playful text-4xl text-accent mb-4 pt-10 sm:text-center lg:pt-0 lg:text-5xl">
              Licht in alle seizoenen
            </h2>

            <p className="mx-auto max-w-2xl font-business text-xl font-semibold text-muted-foreground">
              Kerstbomen passen niet in deze tijd van duurzaamheidsopgaven. We
              moeten bomen planten en niet kappen. Een kunstboom als
              alternatief? Dat is ook niet echt duurzaam. <br />
              <br /> Ik ben de uitdaging aangegaan om met minimaal materiaal een
              maximaal effect te bereiken. Dat is gelukt! Mijn lichtsculpturen
              hebben een grootse uitstraling. En het materiaalgebruik is
              beperkt. Voordeel is dat je de sculptuur makkelijk opbergt. Één
              doos, die stokken en de ringen met een haak aan de muur. Dat is
              alles. <br />
              <br /> Maar je kunt de sculptuur ook laten staan. Met wat andere
              hangers, maak je er een Paas- of herfstcreatie van. Eigenlijk zijn
              de lichtsculpturen in alle seizoenen leuk.
            </p>
          </div>
        )}

        {activeCategory === "schilderijen" && (
          <div className="mb-16 text-center">
            <h2 className="font-playful text-4xl text-accent mb-4 pt-10 lg:pt-0 lg:text-5xl">
              Pasteltekeningen
            </h2>
          </div>
        )}

        {activeCategory === "doek-aan-de-muur" && (
          <div className="mb-16 text-center">
            <h2 className="font-playful text-4xl text-accent mb-4 pt-10 lg:pt-0 lg:text-5xl">
              Doek aan de muur
            </h2>
          </div>
        )}

        {activeCategory === "schilderijen" ? (
          <div className="flex flex-col gap-14">
            {paintingSections.map((section) => (
              <div key={section.key} className="flex flex-col gap-8">
                <div className="flex items-center gap-4 px-2">
                  <div className="h-px flex-1 bg-accent/20" />
                  <h3 className="font-business text-2xl font-semibold lowercase tracking-[0.18em] text-accent">
                    {section.title}
                  </h3>
                  <div className="h-px flex-1 bg-accent/20" />
                </div>

                <div className="flex flex-col gap-10">
                  {section.products.map((product) => renderProductCard(product))}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div
            className={
              activeCategory === "doek-aan-de-muur"
                ? "flex flex-col gap-10"
                : "grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
            }
          >
            {filteredProducts.map((product) => renderProductCard(product))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
