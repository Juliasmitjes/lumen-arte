"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  Calendar,
  ChevronLeft,
  ChevronRight,
  MapPin,
  X,
} from "lucide-react";
import { Button } from "../components/ui/button";

const exhibition = {
  title: "Glow Up Festival",
  subtitle: "Selectie lichtsculpturen",
  location: "Marienburg Nijmegen",
  date: "November 2025",
  images: [
    "/images/Exposities/GlowUp/expo1.jpg",
    "/images/Exposities/GlowUp/expo2.jpg",
    "/images/Exposities/GlowUp/expo3.jpg",
    "/images/Exposities/GlowUp/expo4.jpeg",
    "/images/Exposities/GlowUp/expo5.jpeg",
    "/images/Exposities/GlowUp/expo6.jpeg",
    "/images/Exposities/GlowUp/expo7.jpeg",
    "/images/Exposities/GlowUp/expo8.jpeg",
  ],
};

const Timeline = () => {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const openLightbox = (startIndex = 0) => {
    setActiveImageIndex(startIndex);
    setIsLightboxOpen(true);
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
  };

  const showPreviousImage = () => {
    setActiveImageIndex((current) =>
      current === 0 ? exhibition.images.length - 1 : current - 1,
    );
  };

  const showNextImage = () => {
    setActiveImageIndex((current) =>
      current === exhibition.images.length - 1 ? 0 : current + 1,
    );
  };

  useEffect(() => {
    if (!isLightboxOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeLightbox();
      if (event.key === "ArrowLeft") showPreviousImage();
      if (event.key === "ArrowRight") showNextImage();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isLightboxOpen]);

  return (
    <div className="min-h-screen gradient-earth text-foreground">
      <section className="relative">
        <div className="container mx-auto px-6 pb-16 pt-16 lg:pt-25">
          <div className="mb-10">
            <Button asChild variant="secondary" className="hidden lg:inline-flex">
              <Link href="/">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Home
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 items-end gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="mb-4 text-xs uppercase tracking-[0.35em] text-accent font-business">
                Exposities
              </p>
              <h1 className="font-playful text-4xl leading-tight sm:text-5xl lg:text-6xl">
                Recente tentoonstellingen
              </h1>
              <p className="mt-6 max-w-xl text-base text-muted-foreground font-business sm:text-lg">
                Mijn werk staat regelmatig in de spotlight tijdens tentoonstellingen en
                exposities. Hier deel ik mijn nieuwste creaties met kunstliefhebbers en
                verzamelaars. Kom gerust eens langs!
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {[1, 2]
                .map((index) => exhibition.images[index])
                .filter(Boolean)
                .map((image, imageListIndex) => (
                  <button
                    key={image}
                    type="button"
                    onClick={() => openLightbox(imageListIndex + 1)}
                    className="overflow-hidden rounded-2xl border border-white/20 bg-white/30 shadow-soft backdrop-blur-sm"
                    aria-label={`Open foto ${imageListIndex + 2}`}
                  >
                    <Image
                      src={image}
                      alt={exhibition.title}
                      width={900}
                      height={700}
                      className="h-56 w-full object-cover"
                    />
                  </button>
                ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-6 pb-20 pt-10">
        <article className="overflow-hidden rounded-2xl border border-white/40 bg-white/60 shadow-soft backdrop-blur-sm">
          <div className="grid grid-cols-1 gap-8 p-6 sm:p-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="grid grid-cols-2 gap-4">
              <button
                type="button"
                onClick={() => openLightbox(0)}
                className="col-span-2 overflow-hidden rounded-xl"
                aria-label="Open foto 1"
              >
                <Image
                  src={exhibition.images[0]}
                  alt={`${exhibition.title} beeld 1`}
                  width={1200}
                  height={800}
                  className="h-64 w-full object-cover sm:h-72"
                />
              </button>
              <button
                type="button"
                onClick={() => openLightbox(7)}
                className="overflow-hidden rounded-xl"
                aria-label="Open foto 8"
              >
                <Image
                  src={exhibition.images[7]}
                  alt={`${exhibition.title} beeld 2`}
                  width={600}
                  height={600}
                  className="h-48 w-full object-cover sm:h-52"
                />
              </button>
              <button
                type="button"
                onClick={() => openLightbox(3)}
                className="overflow-hidden rounded-xl"
                aria-label="Open foto 4"
              >
                <Image
                  src={exhibition.images[3]}
                  alt={`${exhibition.title} beeld 3`}
                  width={600}
                  height={600}
                  className="h-48 w-full object-cover sm:h-52"
                />
              </button>
              <button
                type="button"
                onClick={() => openLightbox(6)}
                className="col-span-2 overflow-hidden rounded-xl"
                aria-label="Open foto 7"
              >
                <Image
                  src={exhibition.images[6]}
                  alt={`${exhibition.title} beeld 4`}
                  width={1200}
                  height={700}
                  className="h-52 w-full object-cover sm:h-56"
                />
              </button>
            </div>

            <div className="flex flex-col justify-between">
              <div>
                <h2 className="mb-2 text-3xl text-foreground font-playful sm:text-4xl">
                  {exhibition.title}
                </h2>
                <p className="mb-4 text-sm text-accent font-business">{exhibition.subtitle}</p>
                <p className="mb-6 text-base text-muted-foreground font-business">
                  In de donkere wintermaanden zorgde het Glow Up Festival in Bibliotheek
                  Marienburg voor een lichtpuntje onder jongeren. Mijn lichtsculpturen droegen
                  bij aan de magische sfeer.
                </p>
                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground font-business">
                  <span className="inline-flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    {exhibition.location}
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    {exhibition.date}
                  </span>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <Button variant="default" onClick={() => openLightbox(0)}>
                  Bekijk meer foto&apos;s
                </Button>
                <Button variant="secondary">Vraag details</Button>
              </div>
            </div>
          </div>
        </article>
      </section>

      {isLightboxOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4 backdrop-blur-md"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
          aria-label="Fotogalerij"
        >
          <button
            type="button"
            onClick={closeLightbox}
            className="absolute right-4 top-4 z-50 cursor-pointer rounded-full bg-white/20 p-2 text-white transition-colors hover:bg-white/30"
            aria-label="Sluit galerij"
          >
            <X className="h-5 w-5" />
          </button>

          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              showPreviousImage();
            }}
            className="absolute left-2 z-50 cursor-pointer rounded-full bg-white/20 p-2 text-white transition-colors hover:bg-white/30 sm:left-4"
            aria-label="Vorige foto"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <div
            className="relative w-full max-w-5xl"
            onClick={(event) => event.stopPropagation()}
          >
            <Image
              src={exhibition.images[activeImageIndex]}
              alt={`${exhibition.title} foto ${activeImageIndex + 1}`}
              width={1800}
              height={1200}
              className="max-h-[80vh] w-full rounded-xl object-contain"
            />
            <p className="mt-3 text-center text-sm text-white/90 font-business">
              {activeImageIndex + 1} / {exhibition.images.length}
            </p>
          </div>

          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              showNextImage();
            }}
            className="absolute right-2 z-50 cursor-pointer rounded-full bg-white/20 p-2 text-white transition-colors hover:bg-white/30 sm:right-4"
            aria-label="Volgende foto"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      )}
    </div>
  );
};

export default Timeline;
