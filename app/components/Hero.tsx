"use client";

import { Button } from "./ui/button";
import Image from "next/image";
import kaasdoekImg from "../../public/images/kaasdoek.jpg";

type HeroProps = {
  activeCategory: "sculpturen" | "schilderijen";
  setActiveCategory: (value: "sculpturen" | "schilderijen") => void;
};

const Hero = ({ activeCategory, setActiveCategory }: HeroProps) => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center gradient-earth overflow-hidden">

      {/* background image */}
      <div className="absolute inset-0">
        <Image
          src={kaasdoekImg}
          alt="kaasdoek"
          className="w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 gradient-warm opacity-20"></div>
        <div className="absolute inset-0 bg-background/20"></div>
      </div>

      {/* content */}
      <div className="relative container mx-auto px-6 py-20 text-center lg:text-left">
        <div className="max-w-3xl mx-auto lg:mx-0">

          <h1 className="text-5xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
            Licht en kleur
            <span className="block font-playful text-accent text-4xl lg:text-5xl mt-2">
              in alle seizoenen
            </span>
          </h1>

          <p className="text-lg lg:text-xl text-foreground font-business mb-8 max-w-2xl leading-relaxed">
            Ontdek mijn lichtsculpturen. Duurzaam en gemaakt met liefde.
          </p>

         {/* ===== FILTER BUTTONS ===== */}
            <div className="flex justify-center lg:justify-start mt-10">
              <div className="
                flex flex-col sm:flex-row 
                gap-3 sm:gap-3
                p-2
                rounded-4xl sm:rounded-full 
                bg-white/40 backdrop-blur-md shadow-soft
                w-full sm:w-auto
              ">
                {[
                  { key: "sculpturen", label: "Lichtsculpturen" },
                  { key: "schilderijen", label: "Pasteltekeningen" },
                ].map((filter) => (
                  <Button
                    key={filter.key}
                    variant={activeCategory === filter.key ? "default" : "ghost"}
                    size="lg"
                    onClick={() =>
                      setActiveCategory(filter.key as "sculpturen" | "schilderijen")
                    }
                    className="
                      rounded-full px-6 font-medium
                      w-full sm:w-auto
                      text-base
                    "
                  >
                    {filter.label}
                  </Button>
                ))}
              </div>
              <div className=" flex flex-col items-center sm:flex-row gap-3 sm:gap-3 ml-0 sm:ml-6 mt-4 sm:mt-0">
              {/* navigatie knoppen */}
              <Button
                asChild
                size="lg"
                className="rounded-full px-6 font-medium w-full sm:w-auto text-base"
              >
              <a href="#verhaal">Leer mij kennen</a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="secondary"
                className="rounded-full px-6 font-medium w-full sm:w-auto text-base"
              >
                <a href="#contact">Contact</a>
              </Button>
              </div>
            </div>


        </div>
      </div>
    </section>
  );
};

export default Hero;
