"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import { ExternalLink, Heart } from "lucide-react";
import { products } from './data/Products';
import Image from "next/image";
import Link from "next/link";

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState<"sculpturen" | "schilderijen">("sculpturen");
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);

  const filteredProducts =
    activeCategory === null
      ? products
      : products.filter((product) => product.category === activeCategory);

  return (
    <section id="galerij" className="py-20 gradient-earth">
      <div className="container mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-16">
          <h2 className="font-playful text-4xl lg:text-5xl text-accent mb-4">Mijn creaties</h2>
          <h3 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">Licht in alle seizoenen</h3>

          <p className="text-lg text-muted-foreground font-business max-w-2xl mx-auto">
            Kerstbomen passen niet in deze tijd van duurzaamheidsopgaven. We moeten bomen planten en niet kappen...
          </p>

          <p className="text-lg text-foreground font-business max-w-2xl mx-auto mt-10">
            Nieuwsgierig? Kijk hieronder
          </p>
        </div>

        {/* FILTER BUTTONS */}
        <div className="flex justify-center mb-12">
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-1 p-2 sm:p-1 w-full max-w-sm rounded-lg bg-card shadow-soft">
            {[
              { key: "sculpturen", label: "Lichtsculpturen" },
              { key: "schilderijen", label: "Pasteltekeningen" }
            ].map((filter) => (
              <Button
                key={filter.key}
                variant={activeCategory === filter.key ? "default" : "ghost"}
                size="sm"
                onClick={() =>
                  setActiveCategory(filter.key as "sculpturen" | "schilderijen")
                }
                className="flex-1 sm:w-auto"
              >
                {filter.label}
              </Button>
            ))}
          </div>
        </div>

        {/* GALERIJ */}
        <div
            className={
              activeCategory === "schilderijen"
                ? "grid grid-cols-1 md:grid-cols-2 gap-8" 
                : "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" 
            }
          >
          {filteredProducts.map((product) => {

            const isPainting = product.category === "schilderijen";
            const isSculpture = product.category === "sculpturen";

            return (
              <div
                key={product.id}
                className={`bg-card rounded-xl overflow-hidden shadow-soft transition-all duration-500 ${
                  isSculpture ? "group hover:shadow-warm hover:-translate-y-2" : ""
                }`}
                onMouseEnter={() => isSculpture && setHoveredItem(product.id)}
                onMouseLeave={() => isSculpture && setHoveredItem(null)}
              >

                {/* AFBEEELDING BLOK */}
                {isPainting ? (
                  /* ---- SCHILDERIJEN: GEEN LINK, GEEN HOVER ---- */
                  <div className="relative overflow-hidden aspect-[5/3]">
                    <Image
                      src={product.images[0]}
                      alt={product.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ) : (
                  /* ---- SCULPTUREN: ORIGINELE HOVER + LINK ---- */
                  <Link
                    href={`/products/${product.id}`}
                    className="relative overflow-hidden aspect-[4/5] block group"
                  >
                    <Image
                      src={product.images[0]}
                      alt={product.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />

                    {/* overlay */}
                    <div
                      className={`absolute inset-0 bg-primary opacity-0 group-hover:opacity-80 transition-opacity duration-500 flex items-center justify-center ${
                        hoveredItem === product.id ? "opacity-80 cursor-pointer" : ""
                      }`}
                    >
                      <div className="text-center p-6">
                        <Heart className="w-8 h-8 text-primary-foreground mx-auto mb-2" />
                        <p className="text-primary-foreground font-business font-bold">
                          Bekijk details
                        </p>
                      </div>
                    </div>
                  </Link>
                )}

                {/* CONTENT BLOK */}
                <div className="p-6">

                  {/* category tag */}
                  <span className="inline-block bg-secondary text-accent-foreground text-sm font-business font-bold px-3 py-1 rounded-full mb-3">
                    {isSculpture ? "Lichtsculptuur" : "Pasteltekening"}
                  </span>

                  <h4 className="text-xl font-semibold text-foreground mb-2">
                    {product.title}
                  </h4>

                  {/* Beschrijvingen */}
                  {isPainting ? (
                    <>
                      <p className="text-muted-foreground font-business mb-3">
                        {product.description}
                      </p>
                      <p className="text-sm text-accent-warm font-business">
                        Unieke pasteltekening op papier – handgemaakt.  
                        Geen doorlink, maar volledig te bekijken in deze galerij.
                      </p>
                    </>
                  ) : (
                    <>
                      <p className="text-muted-foreground font-business mb-3">
                        {product.description}
                      </p>

                      {product.materials && (
                        <p className="text-sm text-accent-warm font-business font-bold mb-4">
                          Materialen: {product.materials.join(", ")}
                        </p>
                      )}
                    </>
                  )}

                  {/* BUTTON (ALLEEN SCULPTUREN) */}
                  {isSculpture && (
                    <Button asChild variant="default" size="sm" className="w-full">
                      <Link href={`/products/${product.id}`}>
                        Meer informatie
                        <ExternalLink className="w-4 h-4" />
                      </Link>
                    </Button>
                  )}

                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
