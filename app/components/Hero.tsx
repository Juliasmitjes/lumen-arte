"use client";

import { Button } from "./ui/button";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import kaasdoekImg from "../../public/images/kaasdoek.jpg";
import Link from "next/link";

const Hero = () => {

  return (
    <section id="hero" className="relative min-h-screen flex items-center gradient-earth overflow-hidden">
      {/* afbeelding bovenaan */}
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
          
          {/* titel */}
          <h1 className="text-5xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
            Licht en warmte
            <span className="block font-playful text-accent text-4xl lg:text-5xl mt-2">
              in alle seizoenen
            </span>
          </h1>

          {/* beschrijving */}
          <p className="text-lg lg:text-xl text-foreground font-business mb-8 max-w-2xl leading-relaxed">
            Ontdek mijn lichtsculpturen. Gemaakt met liefde voor natuurlijke 
            materialen en duurzame kunst. Ieder stuk is uniek.
          </p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button asChild variant="hero" size="hero">
            <Link href="/#galerij">
              Bekijk mijn werk
              <ChevronDown className="w-5 h-5" />
            </Link>
          </Button>

          <Button asChild variant="outline" size="hero">
          <Link href="/#over-mij">
            Leer mij kennen
          </Link>
        </Button>
      </div>
    </div>
  </div>
</section>
  );
};

export default Hero;