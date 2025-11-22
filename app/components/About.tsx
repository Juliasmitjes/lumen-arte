"use client";

import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import Kunstenaar from "../../public/images/kunstenaar.jpg";


const About = () => {
  const router = useRouter();

  return (
 <section id="over-mij" className="min-h-screen flex items-center gradient-earth overflow-hidden">
  <div className="container mx-auto px-6 z-10">
    <div className="max-w-6xl mx-auto">
      <div className="grid lg:grid-cols-2 lg:gap-8 items-center">
        
        {/* content */}
        <div>
          <h2 className="font-playful text-4xl lg:text-5xl text-accent mb-4 mt-10 lg:mt-0">Veelzijdig en bevlogen</h2>
          <div className="prose prose-lg text-muted-foreground font-semibold font-business text-xl mb-8">
            <p className="mb-4"> Ik ben gek op het leven en vind ook veel leuk: getallen, taal, kinderen, kunst. Soms is het lastig kiezen. Gelukkig hoeft niet alles tegelijk. Mijn leven is een avontuurlijke reis van accountant, moeder én kunstenaar. Hoe heerlijk! Vorm kleur en creativiteit. Met hart en handen en altijd met passie. 
            </p>
            <p className="mb-8">Ik maak pasteltekeningen en lichtsculpturen.</p>
          </div>
          {/* buttons visible on large screens inside the same content box */}
          <div className="hidden lg:flex gap-4 justify-start">
            <Button variant="heroref" size="lg" onClick={() => router.push("/#contact")}>
              Neem contact op
            </Button>
          </div>
        </div>

        {/* afbeelding */}
        <div className="w-full h-full pb-8 lg:mb-0">
          <Image
            src={Kunstenaar}
            alt="schilderen"
            className="w-full h-auto object-cover rounded-xl"
          />
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10 lg:mb-0 lg:hidden">
          <Button variant="heroref" size="lg" onClick={() => router.push("/#contact")}>
            Neem contact op
          </Button>
        </div>
     </div>
    </div>
  </div>
</section>
  );
};

export default About;