import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, MapPin, Calendar } from "lucide-react";
import { Button } from "../components/ui/button";

const exhibition = {
  title: "Zomerlicht",
  subtitle: "Selectie lichtsculpturen en doeken",
  location: "Atelier Nijmegen",
  date: "Juni 2025",
  images: [
    "/images/BoomBruin/BoomBruin1.jpg",
    "/images/BoomPaars/BoomPaars1.jpg",
    "/images/BoomKrul/BoomKrul1.jpg",
    "/images/Doeken/doek2.jpg",
  ],
};

const Timeline = () => {
  return (
    <div className="min-h-screen gradient-earth text-foreground">
      <section className="relative">
        <div className="container mx-auto px-6 pb-16 pt-10 lg:pt-25">
          <div className="mb-10">
            <Button asChild variant="secondary" className="hidden lg:inline-flex">
              <Link href="/">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Home
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 items-end">
            <div>
              <p className="tracking-[0.35em] text-xs text-accent uppercase font-business mb-4">
                Exposities
              </p>
              <h1 className="font-playful text-4xl sm:text-5xl lg:text-6xl leading-tight">
                Recente tentoonstellingen
              </h1>
              <p className="mt-6 text-base sm:text-lg text-muted-foreground font-business max-w-xl">
                Mijn werk staat regelmatig in de spotlight tijdens tentoonstellingen en exposities. Hier deel ik mijn nieuwste creaties met kunstliefhebbers en verzamelaars. Kom gerust eens langs! 
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {exhibition.images.slice(0, 2).map((image) => (
                <div
                  key={image}
                  className="rounded-2xl overflow-hidden shadow-soft border border-white/20 bg-white/30 backdrop-blur-sm"
                >
                  <Image
                    src={image}
                    alt={exhibition.title}
                    width={900}
                    height={700}
                    className="h-56 w-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-6 pb-20 pt-10">
        <article className="bg-white/60 backdrop-blur-sm rounded-2xl overflow-hidden shadow-soft border border-white/40">
          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-8 p-6 sm:p-8">
            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-2 rounded-xl overflow-hidden">
                <Image
                  src={exhibition.images[0]}
                  alt={`${exhibition.title} beeld 1`}
                  width={1200}
                  height={800}
                  className="h-64 sm:h-72 w-full object-cover"
                />
              </div>
              <div className="rounded-xl overflow-hidden">
                <Image
                  src={exhibition.images[1]}
                  alt={`${exhibition.title} beeld 2`}
                  width={600}
                  height={600}
                  className="h-48 sm:h-52 w-full object-cover"
                />
              </div>
              <div className="rounded-xl overflow-hidden">
                <Image
                  src={exhibition.images[2]}
                  alt={`${exhibition.title} beeld 3`}
                  width={600}
                  height={600}
                  className="h-48 sm:h-52 w-full object-cover"
                />
              </div>
              <div className="col-span-2 rounded-xl overflow-hidden">
                <Image
                  src={exhibition.images[3]}
                  alt={`${exhibition.title} beeld 4`}
                  width={1200}
                  height={700}
                  className="h-52 sm:h-56 w-full object-cover"
                />
              </div>
            </div>

            <div className="flex flex-col justify-between">
              <div>
                <h2 className="font-playful text-3xl sm:text-4xl mb-2 text-foreground">
                  {exhibition.title}
                </h2>
                <p className="text-sm text-accent font-business mb-4">
                  {exhibition.subtitle}
                </p>
                <p className="text-base text-muted-foreground font-business mb-6">
                  Een intieme presentatie met meerdere installaties en doeken in
                  één ruimte. Sfeerbeelden tonen het samenspel tussen licht en
                  materiaal.
                </p>
                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground font-business">
                  <span className="inline-flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    {exhibition.location}
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {exhibition.date}
                  </span>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <Button variant="default">Bekijk meer foto’s</Button>
                <Button variant="secondary">Vraag details</Button>
              </div>
            </div>
          </div>
        </article>
      </section>
    </div>
  );
};

export default Timeline;
