"use client";

import Image from "next/image";
import kaasdoekTexture from "../../public/images/kaasdoekTexture.jpg";
import { Lightbulb, Leaf, Heart, Recycle } from "lucide-react";

const Story = () => {

    const coreValues = [
    {
      icon: Leaf,
      title: "Duurzaam",
      description:
        "Bewust materiaalgebruik met maximaal effect. Geen verspilling, wel impact.",
    },
    {
      icon: Lightbulb,
      title: "Vernieuwend",
      description:
        "Creatieve oplossingen voor moderne uitdagingen. Kunst die meebeweegt met de tijd.",
    },
    {
      icon: Heart,
      title: "Handgemaakt",
      description:
        "Elk stuk is uniek en met liefde gemaakt. Persoonlijke aandacht voor details.",
    },
    {
      icon: Recycle,
      title: "Herbruikbaar",
      description:
        "Sculpturen die meegroeien met de seizoenen. Van winter naar lente, altijd mooi.",
    },
  ];


  return (
    <section id="verhaal">
       <div className="min-h-screen gradient-white relative">
       {/* achtergrondafbeelding */}
        <div className="absolute inset-0 opacity-20">
          <Image
            src={kaasdoekTexture}
            alt="kaasdoek"
            fill
            className="object-cover object-center"
          />
        </div>

      {/* content */}
      <main className="relative z-10 px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-warm">
            <div className="space-y-8 text-lg font-business leading-relaxed">
              <h2 className="text-2xl mb-4">Van groene joekel tot verdord skelet</h2>
              <div>
                <p>
                  Kerst het feest van licht, goud en glitters én van kerstbomen. Bij ons thuis altijd twee stuks, 
                  Nordmannen, een kleintje in de voorkamer en een grote joekel in de achterkamer. Bos in huis, 
                  dennengeur, het groen, zo fijn, maar ook het trieste vooruitzicht: over een paar weken de bomen 
                  afgedankt bij het vuil als verdorde skeletten.
                </p>
              </div>

              <div className="border-l-4 border-accent pl-6">
                <h2 className="text-xl mb-4">&quot;Zullen we eens zonder boom?&quot;</h2>
                <p>
                  &apos;Zullen we eens zonder boom?&apos;, probeerde ik. Protest bij man en kinderen. &apos;Er zijn alternatieven, 
                  zoals een kunstboom.&apos; &apos;Nee mam, hartstikke kitsch en zo&apos;n nepboom is ook niet duurzaam&apos;. Daarmee 
                  was ik het met ze eens. &apos;Een constructie van steigerhout dan?&apos; &apos;Lelijk, mam.&apos; &apos;Of een moderne minimalistische variant?&apos; &apos;Zo&apos;n kaal ding, dan kunnen we beter helemaal niets doen.&apos; En ook daarin gaf ik ze gelijk. En toch liet het me niet los.
                </p>
              </div>
              <div>
                <h2 className="text-2xl mb-4">De uitdaging</h2>
                <p>
                  Ik dacht aan de glinsterende kiezels in mijn jeugd. Er is zoveel schoonheid. Het moet mogelijk 
                  zijn om een beter alternatief te bedenken. Ik ga het proberen! Ik zei tegen man en kinderen, 
                  ik ga de uitdaging aan. Ik bedenk een feestelijke lichtbron als alternatief voor een boom: 
                  eenvoudig, minimaal materiaalgebruik (duurzaam) én met een wow-effect. Het beeld tekende zich 
                  in mijn hoofd af, maar de weg ernaartoe was een tocht met hobbels over constructies ontdekkingen 
                  over fournituren, lijmen, papiersoorten en stoffen...
                </p>
              </div>

              <div className="bg-secondary/50 rounded-xl p-6">
                <h2 className="text-2xl mb-4">Uiteindelijk is het gelukt!</h2>
                <p>
                  Een feestelijke lichtbron, duurzaam en met een wow-effect. Zo simpel kan schoonheid zijn.
                </p>
              </div>
            </div>
          </div>

          
          {/* waarden */}
          <div className="grid font-business lg:grid-cols-2 gap-8 mb-24 my-10">
            {coreValues.map((value, index) => (
              <div
                key={index}
                className="flex items-start gap-5 p-6 bg-card/80 rounded-2xl shadow-soft hover:shadow-warm active:scale-110 transition-all duration-300 group"
              >
                <div className="flex-shrink-0 w-14 h-14 bg-primary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-foreground mb-1">
                    {value.title}
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div> 

        </div>
      </main>
    </div>
  </section>
   
  );
};

export default Story;