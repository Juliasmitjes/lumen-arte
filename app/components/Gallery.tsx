"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import { ExternalLink, Heart } from "lucide-react";
import { products } from "./data/Products";
import Image from "next/image";
import Link from "next/link";

interface GalleryProps {
  activeCategory: "sculpturen" | "schilderijen";
  setActiveCategory: (
    value: "sculpturen" | "schilderijen"
  ) => void;
}

const Gallery = ({ activeCategory }: GalleryProps) => {
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);

  const filteredProducts = products.filter(
    (product) => product.category === activeCategory
  );

  return (
    <section id="galerij" className="lg:py-20 gradient-earth">
      <div className="container mx-auto px-6 pb-10 lg:pb-0">
        
        {/* HEADER sculpturen */}
          {activeCategory === "sculpturen" && (
            <div className="text-center mb-16">
              <h2 className="font-playful text-4xl lg:text-5xl text-accent mb-4 pt-10 lg:pt-0">
                Licht in alle seizoenen
              </h2>

              <p className="text-lg text-muted-foreground font-business max-w-2xl mx-auto">
                Kerstbomen passen niet in deze tijd van duurzaamheidsopgaven. We moeten bomen planten
                en niet kappen. Een kunstboom als alternatief? Dat is ook niet echt duurzaam. <br /><br />
                Ik ben de uitdaging aangegaan om met minimaal materiaal een maximaal effect te bereiken.
                Dat is gelukt! Mijn lichtsculpturen hebben een grootse uitstraling. En het materiaalgebruik
                is beperkt. Voordeel is dat je de sculptuur makkelijk opbergt. Eén doos, die stokken en de
                ringen met een haak aan de muur. Dat is alles. <br /><br />
                Maar je kunt de sculptuur ook laten staan. Met wat andere hangers, maak je er een Paas- of
                herfstcreatie van. Eigenlijk zijn de lichtsculpturen in alle seizoenen leuk.
              </p>

              <p className="text-lg text-foreground font-business max-w-2xl mx-auto mt-10">
                Nieuwsgierig? Kijk hieronder
              </p>
            </div>
          )}

        {/* HEADER schilderijen */}
          {activeCategory === "schilderijen" && (
            <div className="text-center mb-16">
              <h2 className="font-playful text-4xl lg:text-5xl text-accent mb-4 pt-10 lg:pt-0">
                Pasteltekeningen
              </h2>
            </div>
          )}


        {/* GALLERY GRID */}
        <div
          className={
            activeCategory === "schilderijen"
              ? "flex flex-col gap-10"
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
                } animate-fadeIn`}
                onMouseEnter={() => isSculpture && setHoveredItem(product.id)}
                onMouseLeave={() => isSculpture && setHoveredItem(null)}
              >
                {/* PASTELTEKENINGEN */}
                {isPainting ? (
                  <div className="flex flex-col md:flex-row gap-6 p-8 md:p-10 items-center md:items-start">

                    <div className="relative w-full md:w-[40%]">
                      <div className="rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
                        <Image
                          src={product.images[0]}
                          alt={product.title}
                          className="w-full h-auto object-cover"
                        />
                      </div>
                    </div>

                    <div className="w-full md:w-[55%] flex flex-col justify-center text-center md:text-left">
                      <h4 className="text-xl font-semibold text-foreground mb-3">
                        {product.title}
                      </h4>

                      <p className="text-sm text-accent-warm font-business">
                        Formaat: {product.dimensions.height} × {product.dimensions.width}
                      </p>
                    </div>

                  </div>
                ) : (
                  <>
                    {/* LICHTSCULPTUREN */}

                    
                    <Link
                      href={`/products/${product.id}`}
                      className="relative overflow-hidden aspect-[4/5] block group"
                    >
                      <Image
                        src={product.images[0]}
                        alt={product.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />

                      {/* Hover overlay */}
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

                    <div className="p-6">
                      <h4 className="text-xl font-semibold text-foreground mb-4">
                        {product.title}
                      </h4>

                      <Button asChild variant="default" size="sm" className="w-full">
                        <Link href={`/products/${product.id}`}>
                          Meer informatie
                          <ExternalLink className="w-4 h-4" />
                        </Link>
                      </Button>
                    </div>
                  </>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Gallery;
