import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, MapPin, Calendar } from "lucide-react";
import { Button } from "../components/ui/button";

const exhibitions = [
  {
    title: "Zomerlicht",
    subtitle: "Selectie lichtsculpturen",
    location: "Atelier Nijmegen",
    date: "Juni 2025",
    image: "/images/BoomBruin/BoomBruin1.jpg",
  },
  {
    title: "Kleur & Stilte",
    subtitle: "Pasteltekeningen en doeken",
    location: "Galerie De Lindenberg",
    date: "November 2024",
    image: "/images/schilderij3.jpg",
  },
  {
    title: "Lentegloed",
    subtitle: "Lichtsculpturen in ruimte",
    location: "Kunsthuis Amersfoort",
    date: "April 2024",
    image: "/images/BoomPaars/BoomPaars1.jpg",
  },
  {
    title: "Textuur & Licht",
    subtitle: "Doeken en mixed media",
    location: "Studio Expositie",
    date: "September 2023",
    image: "/images/Doeken/doek2.jpg",
  },
];

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
              {exhibitions.slice(0, 2).map((exhibition) => (
                <div
                  key={exhibition.title}
                  className="rounded-2xl overflow-hidden shadow-soft border border-white/20 bg-white/30 backdrop-blur-sm"
                >
                  <Image
                    src={exhibition.image}
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {exhibitions.map((exhibition) => (
            <article
              key={exhibition.title}
              className="bg-white/60 backdrop-blur-sm rounded-2xl overflow-hidden shadow-soft border border-white/40"
            >
              <div className="relative h-64 sm:h-72">
                <Image
                  src={exhibition.image}
                  alt={exhibition.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 sm:p-7">
                <h2 className="font-playful text-2xl sm:text-3xl mb-2 text-foreground">
                  {exhibition.title}
                </h2>
                <p className="text-sm text-accent font-business mb-4">
                  {exhibition.subtitle}
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
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Timeline;
