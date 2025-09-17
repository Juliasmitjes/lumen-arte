"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import { ExternalLink, Heart } from "lucide-react";
import { products } from './data/Products';
import Image from "next/image";
import Link from "next/link";

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState<"alle" | "sculpturen" | "schilderijen">("alle");
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);
  

  const filteredProducts = activeCategory === "alle" 
    ? products 
    : products.filter(product => product.category === activeCategory);

  return (
    <section id="galerij" className="py-20 gradient-earth">
      <div className="container mx-auto px-6">
        {/* header */}
        <div className="text-center mb-16">
          <h2 className="font-playful text-4xl lg:text-5xl text-accent mb-4">
            Mijn creaties
          </h2>
          <h3 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
            Licht in alle seizoenen
          </h3>
          <p className="text-lg text-muted-foreground font-business max-w-2xl mx-auto">
            Kerstbomen passen niet in deze tijd van duurzaamheidsopgaven. We moeten bomen planten en niet kappen. Een kunstboom als alternatief? Dat is ook niet echt duurzaam. 
            <br />
            <br />
            Ik ben de uitdaging aangegaan om met minimaal materiaal een maximaal effect te bereiken. Dat is gelukt! Mijn lichtsculpturen hebben een grootse uitstraling. En het materiaalgebruik is beperkt: drie stokken, wat ijzeren ringen, een lichtsnoer en wat stof en vilt. Voordeel is ook dat je de sculptuur na Kerst makkelijk opbergt. Eén doos, die stokken en de ringen met een haak aan de muur. Dat is alles. 
            <br />
            <br />
            Maar je kunt de sculptuur ook laten staan. Met wat andere hangers, maak je er een Paas- of herfstcreatie van. Eigenlijk zijn de lichtsculpturen in alle seizoenen leuk.
          </p>
          <p className="text-lg text-foreground font-business max-w-2xl mx-auto mt-10">
          Nieuwsgierig? Kijk hieronder
          </p>
        </div>
       

        {/* filter buttons */}
          <div className="flex justify-center mb-12">
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-1 p-2 sm:p-1 w-full max-w-sm rounded-lg bg-card shadow-soft">
              {[
                { key: "alle", label: "Alle werken" },
                { key: "sculpturen", label: "Lichtsculpturen" },
                { key: "schilderijen", label: "Schilderijen" }
              ].map((filter) => (
                <Button
                  key={filter.key}
                  variant={activeCategory === filter.key ? "default" : "ghost"}
                  size="sm"
                  onClick={() =>
                    setActiveCategory(filter.key as "alle" | "sculpturen" | "schilderijen")
                  }
                  className="w-full sm:w-auto"
                >
                  {filter.label}
                </Button>
              ))}
            </div>
          </div>

        {/* galerij */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product, index) => (
            <div
              key={product.id}
              className={`group relative bg-card rounded-xl overflow-hidden shadow-soft hover:shadow-warm transition-all duration-500 hover:-translate-y-2 ${
                index % 2 === 0 ? 'lg:translate-y-4' : ''
              }`}
              onMouseEnter={() => setHoveredItem(product.id)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              {/* afbeeldingen */}
              <Link href={`/products/${product.id}`} className="relative overflow-hidden aspect-[4/5] block group">
                <Image
                  src={product.images[0]}
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />

                {/* overlay */}
                <div
                  className={`absolute inset-0 bg-primary opacity-0 group-hover:opacity-80 transition-opacity duration-500 flex items-center justify-center ${
                    hoveredItem === product.id ? 'opacity-80 cursor-pointer' : ''
                  }`}
                >
                  <div className="text-center p-6">
                    <Heart className="w-8 h-8 text-primary-foreground mx-auto mb-2" />
                    <p className="text-primary-foreground font-business font-bold">Bekijk details</p>
                  </div>
                </div>
              </Link>

              {/* content */}
              <div className="p-6">
                <span className="inline-block bg-secondary text-accent-foreground text-sm font-business font-bold px-3 py-1 rounded-full mb-3">
                  {product.category === "sculpturen" ? "Lichtsculptuur" : "Schilderij"}
                </span>
                
                <h4 className="text-xl font-semibold text-foreground mb-2">
                  {product.title}
                </h4>
                
                <p className="text-muted-foreground font-business mb-3">
                  {product.description}
                </p>
                
                {product.materials && (
                  <p className="text-sm text-accent-warm font-business font-bold mb-4">
                    Materialen: {product.materials.join(', ')}
                  </p>
                )}

                <Button asChild variant="default" size="sm" className="w-full">
                  <Link href={`/products/${product.id}`}>
                    Meer informatie
                    <ExternalLink className="w-4 h-4" />
                  </Link>
              </Button>
              </div>
            </div>
          ))}
        </div>       
      </div>
    </section>
  );
};

export default Gallery;