"use client";

import { Button } from "./ui/button";
import Image from "next/image";
import kaasdoekImg from "../../public/images/kaasdoek.jpg";

type HeroProps = {
  activeCategory: "sculpturen" | "schilderijen";
  setActiveCategory: (value: "sculpturen" | "schilderijen") => void;
};

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center gradient-earth overflow-hidden"
    >
      {/* background image */}
      <div className="absolute inset-0">
        <Image
          src={kaasdoekImg}
          alt="kaasdoek"
          className="w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 gradient-warm opacity-40"></div>
        <div className="absolute inset-0 bg-background/60"></div>
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

          <p className="hidden sm:block lg:text-xl text-muted-foreground font-semibold font-business mb-8 max-w-2xl leading-relaxed">
            Ontdek mijn lichtsculpturen en pasteltekeningen. Duurzaam en gemaakt met liefde.
          </p>

          {/* ===== Alleen navigatie knoppen ===== */}
          <div
            className="
              flex flex-col sm:flex-row
              gap-4 sm:gap-3
              w-full sm:w-auto
              justify-center lg:justify-start mt-10
            "
          >
            <Button
              asChild
              size="lg"
              variant="default"
              className="rounded-full px-6 font-medium w-full sm:w-auto text-base text-primary-foreground"
            >
              <a href="#galerij">Bekijk mijn werk</a>
            </Button>

            <Button
              asChild
              size="lg"
              variant="hero"
              className="rounded-full px-6 font-medium w-full sm:w-auto text-base text-accent-foreground"
            >
              <a href="#over-mij">Leer mij kennen</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
