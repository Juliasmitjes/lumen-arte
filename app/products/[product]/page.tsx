"use client";

import { useState, useEffect, use } from "react";
import { useRouter } from "next/navigation";
import Request from "../../components/Request";
import { ArrowLeft, X, Clock, Award, Package, ChevronLeft, ChevronRight } from "lucide-react";
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
  

  // Load product FIRST
  const product = getProductById(productId);

  // Early return → prevents TS error "possibly undefined"
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

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);

  // --- MOBILE SWIPE SUPPORT ---
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart === null || touchEnd === null) return;

    const distance = touchStart - touchEnd;

    // SWIPE LEFT → NEXT
    if (distance > 50) {
      setSelectedImageIndex((prev) =>
        prev === product.images.length - 1 ? 0 : prev + 1
      );
    }

    // SWIPE RIGHT → PREVIOUS
    if (distance < -50) {
      setSelectedImageIndex((prev) =>
        prev === 0 ? product.images.length - 1 : prev - 1
      );
    }

    setTouchStart(null);
    setTouchEnd(null);
  };

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

  return (
    <main>
      <div className="min-h-screen bg-background">
        <div className="container mx-auto mt-16 px-4 py-8">
          {/* Back button */}
          <Button
            variant="secondary"
            onClick={() => router.push("/")}
            className="mb-6 hover:bg-secondary/50"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Terug naar home
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

                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white text-lg">Klik om te vergroten</span>
                </div>
              </div>

              {/* ZOOM MODAL */}
              {isZoomed && (
                <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
                  <X
                    onClick={() => setIsZoomed(false)}
                    className="absolute top-10 right-10 w-10 h-10 text-white bg-black/50 hover:bg-black/70 rounded-full p-2 cursor-pointer z-50"
                  />

                  {/* LEFT ARROW */}
                  <button
                    className="
                      absolute left-5 top-1/2 -translate-y-1/2
                      w-10 h-10 sm:w-14 sm:h-14 flex items-center justify-center
                      bg-black/50 hover:bg-black/70
                      rounded-full z-50 cursor-pointer
                    "
                    onClick={() =>
                      setSelectedImageIndex((prev) =>
                        prev === 0 ? product.images.length - 1 : prev - 1
                      )
                    }
                  >
                    <ChevronLeft className="sm:w-8 sm:h-8 text-white" />
                  </button>

                  {/* RIGHT ARROW */}
                 <button
                    className="
                      absolute right-5 top-1/2 -translate-y-1/2
                      w-10 h-10 sm:w-14 sm:h-14 flex items-center justify-center
                      bg-black/50 hover:bg-black/70
                      rounded-full z-50 cursor-pointer
                    "
                    onClick={() =>
                      setSelectedImageIndex((prev) =>
                        prev === product.images.length - 1 ? 0 : prev + 1
                      )
                    }
                  >
                    <ChevronRight className="sm:w-8 sm:h-8 text-white" />
                  </button>

                  <div
                    className="w-full h-full flex items-center justify-center"
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={handleTouchEnd}
                  >
                    <TransformWrapper>
                      <TransformComponent>
                        <Image
                          src={product.images[selectedImageIndex]}
                          alt={product.title}
                          className="max-w-full max-h-[90vh] object-contain"
                        />
                      </TransformComponent>
                    </TransformWrapper>
                  </div>
                </div>
              )}

              {/* THUMBNAILS */}
              {product.images.length > 1 && (
                <div className="flex gap-3 mt-3">
                  {product.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImageIndex(index)}
                      className={`w-20 h-20 rounded-lg overflow-hidden transition-all ${
                        selectedImageIndex === index
                          ? "ring-2 ring-primary shadow-lg"
                          : "opacity-70 hover:opacity-100"
                      }`}
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

              <Card className="border-2 border-primary/10 bg-primary/20">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Clock className="w-5 h-5 mr-2 text-green-600" />
                    <span className="text-green-600">
                      Op voorraad – Handgemaakt op bestelling
                    </span>
                  </div>

                  <Request productId={product.id.toString()} />

                  <p className="mt-4 text-sm text-muted-foreground">
                    Prijs op aanvraag. Neem contact op voor meer informatie.
                  </p>
                </CardContent>
              </Card>

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
