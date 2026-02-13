"use client";

import { useState, useEffect, use } from "react";
import { useRouter } from "next/navigation";
import Request from "../../components/Request";
import { ArrowLeft, X, Clock, Award, Package, ChevronLeft, ChevronRight, Expand } from "lucide-react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Badge } from "../../components/ui/badge";
import { getProductById } from "../../components/data/Products";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import Image from "next/image";

export default function ProductDetail({
  params,
}: {
  params: Promise<{ product: string }>;
}) {
  const { product: productId } = use(params);
  const router = useRouter();

  // ------------------------
  // ALL HOOKS MUST ALWAYS RUN
  // ------------------------

  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);

  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const product = getProductById(productId);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (!isZoomed || !product) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsZoomed(false);
      if (event.key === "ArrowLeft") {
        setSelectedImageIndex((prev) =>
          prev === 0 ? product.images.length - 1 : prev - 1
        );
      }
      if (event.key === "ArrowRight") {
        setSelectedImageIndex((prev) =>
          prev === product.images.length - 1 ? 0 : prev + 1
        );
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isZoomed, product]);

  if (!product) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Product niet gevonden</h1>
          <Button onClick={() => router.push("/")} variant="default">
            Terug naar overzicht
          </Button>
        </div>
      </div>
    );
  }

  // ------------------------
  // TOUCH HANDLERS
  // ------------------------

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart === null || touchEnd === null) return;

    const distance = touchStart - touchEnd;

    if (distance > 50) {
      // SWIPE LEFT
      setSelectedImageIndex((prev) =>
        prev === product.images.length - 1 ? 0 : prev + 1
      );
    }

    if (distance < -50) {
      // SWIPE RIGHT
      setSelectedImageIndex((prev) =>
        prev === 0 ? product.images.length - 1 : prev - 1
      );
    }

    setTouchStart(null);
    setTouchEnd(null);
  };

  // ------------------------
  // SEASON BADGE COLORS
  // ------------------------

  const seasonColors: Record<string, string> = {
    lente: "bg-green-100 text-green-800",
    zomer: "bg-yellow-100 text-yellow-800",
    herfst: "bg-orange-100 text-orange-800",
    winter: "bg-blue-100 text-blue-800",
    "alle-seizoenen": "bg-purple-100 text-purple-800",
  };

  const seasonIcons: Record<string, string> = {
    lente: "🌸",
    zomer: "☀️",
    herfst: "🍂",
    winter: "❄️",
    "alle-seizoenen": "🔄",
  };

  // ------------------------
  // PAGE RENDER
  // ------------------------

  return (
    <main>
      <div className="min-h-screen bg-background">
        <div className="container mx-auto mt-16 px-4 py-8">

          {/* BACK BUTTON */}
          <Button
            variant="secondary"
            onClick={() => router.push("/")}
            className="hidden lg:inline-flex mb-6 px-6 hover:bg-secondary/50"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Home
          </Button>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12">

            {/* IMAGES */}
            <div>
              <div
                className="group relative aspect-[4/3] rounded-2xl overflow-hidden bg-warm-sand shadow-lg cursor-pointer"
                onClick={() => setIsZoomed(true)}
              >
                <Image
                  src={product.images[selectedImageIndex]}
                  alt={product.title}
                  className="w-full h-full object-cover"
                />

                {!product.inStock && (
                  <div className="absolute top-3 left-3 z-10 rounded-full bg-red-600/90 px-3 py-1 text-xs font-semibold text-white">
                    Verkocht
                  </div>
                )}

                {/* MOBILE OVERLAY */}
                <div className="
                  absolute bottom-3 right-3 
                  bg-black/60 text-white px-2 py-1 
                  rounded-md text-xs font-medium 
                  flex items-center gap-1
                  sm:hidden
                  pointer-events-none
                ">
                  <Expand className="w-3 h-3" />
                  Tik om te vergroten
                </div>

                {/* DESKTOP OVERLAY */}
                <div className="
                  absolute inset-0 bg-black/40 opacity-0 
                  group-hover:opacity-100 transition-opacity 
                  duration-300 flex items-center justify-center
                ">
                  <span className="text-white text-lg">
                    Klik om te vergroten
                  </span>
                </div>
              </div>

              {/* ZOOM MODAL */}
              {isZoomed && (
                <div
                  className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4 backdrop-blur-md"
                  onClick={() => setIsZoomed(false)}
                  role="dialog"
                  aria-modal="true"
                  aria-label="Afbeelding vergroten"
                >
                  <button
                    type="button"
                    onClick={() => setIsZoomed(false)}
                    className="absolute right-4 top-4 z-50 cursor-pointer rounded-full bg-white/20 p-2 text-white transition-colors hover:bg-white/30"
                    aria-label="Sluit galerij"
                  >
                    <X className="h-5 w-5" />
                  </button>

                  <button
                    type="button"
                    className="absolute left-2 z-50 cursor-pointer rounded-full bg-white/20 p-2 text-white transition-colors hover:bg-white/30 sm:left-4"
                    onClick={(event) => {
                      event.stopPropagation();
                      setSelectedImageIndex((prev) =>
                        prev === 0 ? product.images.length - 1 : prev - 1
                      );
                    }}
                    aria-label="Vorige foto"
                  >
                    <ChevronLeft className="h-6 w-6" />
                  </button>

                  <div
                    className="relative w-full max-w-5xl"
                    onClick={(event) => event.stopPropagation()}
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={handleTouchEnd}
                  >
                    <TransformWrapper>
                      <TransformComponent
                        wrapperStyle={{
                          width: "100%",
                          display: "flex",
                          justifyContent: "center",
                        }}
                        contentStyle={{
                          width: "100%",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <Image
                          src={product.images[selectedImageIndex]}
                          alt={product.title}
                          className="max-h-[80vh] max-w-full w-auto rounded-xl object-contain"
                        />
                      </TransformComponent>
                    </TransformWrapper>
                    <p className="mt-3 text-center text-sm text-white/90 font-business">
                      {selectedImageIndex + 1} / {product.images.length}
                    </p>
                  </div>

                  <button
                    type="button"
                    className="absolute right-2 z-50 cursor-pointer rounded-full bg-white/20 p-2 text-white transition-colors hover:bg-white/30 sm:right-4"
                    onClick={(event) => {
                      event.stopPropagation();
                      setSelectedImageIndex((prev) =>
                        prev === product.images.length - 1 ? 0 : prev + 1
                      );
                    }}
                    aria-label="Volgende foto"
                  >
                    <ChevronRight className="h-6 w-6" />
                  </button>
                </div>
              )}

              {/* THUMBNAILS */}
              {product.images.length > 1 && (
                <div className="mt-3 flex gap-3 overflow-x-auto pb-1">
                  {product.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImageIndex(index)}
                      className={`
                        w-20 h-20 rounded-lg overflow-hidden transition-all
                        ${
                          selectedImageIndex === index
                            ? "ring-2 ring-primary shadow-lg"
                            : "opacity-70 hover:opacity-100"
                        }
                      `}
                    >
                      <Image
                        src={image}
                        alt={`${product.title} ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* PRODUCT INFO */}
            <div className="space-y-6">

              <div>
                <Badge
                  variant="season"
                  className={`mb-3 ${seasonColors[product.season]}`}
                >
                  {seasonIcons[product.season]}{" "}
                  {product.season === "alle-seizoenen"
                    ? "Alle seizoenen"
                    : product.season}
                </Badge>

                <h1 className="text-3xl font-bold">{product.title}</h1>
              </div>

              {/* PRICE / REQUEST */}
              <Card className="border-2 border-primary/10 bg-primary/20">
                <CardContent className="p-6">
                  {product.inStock ? (
                    <div className="flex items-center mb-4">
                      <Clock className="w-5 h-5 mr-2 text-green-600" />
                      <span className="text-green-600">
                        Op voorraad ? Handgemaakt op bestelling
                      </span>
                    </div>
                  ) : (
                    <div className="flex items-center mb-4">
                      <X className="w-5 h-5 mr-2 text-red-600" />
                      <span className="text-red-600">Verkocht</span>
                    </div>
                  )}

                  <Request productId={product.id.toString()} />

                  <p className="mt-4 text-sm text-muted-foreground">
                    Prijs op aanvraag. Neem contact op voor meer informatie.
                  </p>
                </CardContent>
              </Card>

              {/* FEATURES */}
              <Card className="border-2 border-secondary/10 bg-secondary-light">
                <CardContent className="p-6">
                  <h3 className="mb-4 flex items-center">
                    <Award className="w-5 h-5 mr-2 text-primary" />
                    Eigenschappen
                  </h3>

                  <div className="grid grid-cols-2 gap-3 text-sm">
                    {product.features.map((feature, i) => (
                      <div key={i} className="flex items-center">
                        <div className="w-2 h-2 bg-primary rounded-full mr-2" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* DIMENSIONS */}
              <Card className="border border-secondary-warm/10 bg-secondary/20">
                <CardContent className="p-6">
                  <h3 className="mb-4 flex items-center">
                    <Package className="w-5 h-5 mr-2 text-primary" />
                    Afmetingen
                  </h3>

                  <div className="grid grid-cols-3 gap-4 text-sm">

                    <div>
                      <span className="font-bold text-muted-foreground">
                        Hoogte:
                      </span>
                      <div>{product.dimensions.height}</div>
                    </div>

                    {product.category === "sculpturen" && (
                      <div>
                        <span className="font-bold text-muted-foreground">
                          Diameter:
                        </span>
                        <div>{product.dimensions.diameter}</div>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>

            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
