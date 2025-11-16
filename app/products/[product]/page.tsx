"use client";

import { use, useState } from "react"; 
import { useRouter } from "next/navigation";
import Request from "../../components/Request";
import { ArrowLeft, X, Clock, Award, Leaf, Package } from "lucide-react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from '../../components/ui/card';
import { Badge } from '../../components/ui/badge';
import { getProductById } from '../../components/data/Products';
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import Image from "next/image";

type ProductPageProps = {
  params: Promise<{ product: string }>; 
};

export default function ProductDetail({ params }: ProductPageProps) {
  const { product: productId } = use(params); 
  const router = useRouter();
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [isZoomed, setIsZoomed] = useState(false);

  const product = getProductById(productId); 

 
  if (!product) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-business font-bold mb-4">
            Product niet gevonden
          </h1>
          <Button onClick={() => router.push("/")} variant="default">
            Terug naar overzicht
          </Button>
        </div>
      </div>
    );
  }

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
          {/* terug naar hoofdmenu knop */}
          <Button
            variant="secondary"
            onClick={() => router.push("/")}
            className="mb-6 hover:bg-secondary/50"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Terug naar home
          </Button>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12">
            {/* afbeeldingen */}
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

              {/* Hover overlay */}
              <div
                className="
                  absolute inset-0 
                  bg-black/40 
                  opacity-0 
                  group-hover:opacity-100 
                  transition-opacity 
                  duration-300 
                  flex 
                  items-center 
                  justify-center
                "
              >
                <span className="text-white text-lg font-business tracking-wide">
                  Klik voor inzoomen
                </span>
              </div>
            </div>              

              {isZoomed && (
                <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
                  <X
                    onClick={() => setIsZoomed(false)}
                    className="absolute top-10 right-10 w-10 h-10 text-white bg-black/50 hover:bg-black/70 rounded-full p-2 z-50 cursor-pointer"
                  />
                  <div className="w-full h-full flex items-center justify-center">
                    <TransformWrapper>
                      <TransformComponent>
                        <Image
                          src={product.images[selectedImageIndex]}
                          alt={product.title}
                          className="max-w-full max-h-[90vh] object-contain cursor-zoom-in"
                          style={{ transformOrigin: "center center" }}
                        />
                      </TransformComponent>
                    </TransformWrapper>
                  </div>
                </div>
              )}

              {product.images.length > 1 && (
                <div className="flex gap-3 mt-3">
                  {product.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImageIndex(index)}
                      className={`w-20 h-20 rounded-lg overflow-hidden transition-all ${
                        selectedImageIndex === index
                          ? 'ring-2 ring-primary shadow-lg'
                          : 'opacity-70 cursor-pointer hover:opacity-100'
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

            {/* productinformatie */}
            <div className="space-y-6 ">
              <div>
                <div className="flex items-start justify-between mb-4">
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
                    <h1 className="text-3xl font-bold text-foreground mb-2">{product.title}</h1>
                    <p className="text-lg font-business text-muted-foreground">{product.description}</p>
                  </div>
                </div>

                <div className="sm:text-3xl text-2xl font-bold mb-6 text-primary">
                  Prijs op aanvraag
                </div>
              </div>

              {/* CTA */}
              <Card className="border-2 border-primary/10 bg-primary/20">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Clock className="w-5 h-5 mr-2 text-green-600" />
                    <span className="text-green-600 font-business">
                      Op voorraad - Handgemaakt op bestelling
                    </span>
                  </div>

                  <div className="flex items-center gap-4 mb-6">
                    {/* <label htmlFor="quantity" className="font-business">Aantal:</label>
                    <select
                      id="quantity"
                      value={quantity}
                      onChange={(e) => setQuantity(Number(e.target.value))}
                      className="border border-border rounded-md px-3 py-2 bg-background font-business "
                    >
                      {[1,2,3].map(num => (
                        <option key={num} value={num}>{num}</option>
                      ))}
                    </select> */}
                    <Request quantity={quantity} />
                  </div>
                  <p className="text-xs text-muted-foreground mt-4">
                    Gratis verzending binnen Nederland • 30 dagen bedenktijd
                  </p>
                </CardContent>
              </Card>

              {/* eigenschappen */}
              <Card className="border-2 border-secondary/10 bg-secondary-light rounded-md">
                <CardContent className="p-6">
                  <h3 className="font-business mb-4 flex items-center">
                    <Award className="w-5 h-5 mr-2 text-primary" />
                    Eigenschappen
                  </h3>
                  <div className="grid grid-cols-2 gap-3">
                    {product.features.map((feature, index) => (
                      <div key={index} className="flex font-business items-center text-sm">
                        <div className="w-2 h-2 bg-primary rounded-full mr-2" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* materialen */}
              <Card className="border border-secondary-warm/20 bg-secondary/50 rounded-md">
                <CardContent className="p-6">
                  <h3 className="font-business mb-4 flex items-center">
                    <Leaf className="w-5 h-5 mr-2 text-primary" />
                    Natuurlijke materialen
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {product.materials.map((material, index) => (
                      <Badge key={index} variant="default">{material}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* afmetingen */}
              <Card className="border border-secondary-warm/10 bg-secondary/20 rounded-md">
                <CardContent className="p-6">
                  <h3 className="font-business mb-4 flex items-center">
                    <Package className="w-5 h-5 mr-2 text-primary" />
                    Afmetingen
                  </h3>
                  <div className="grid grid-cols-3 gap-4 text-sm">
                    <div>
                      <span className="font-bold font-business text-muted-foreground">Hoogte:</span>
                      <div className="font-business">{product.dimensions.height}</div>
                    </div>
                    <div>
                      <span className="font-bold font-business text-muted-foreground">Breedte:</span>
                      <div className="font-business">{product.dimensions.width}</div>
                    </div>
                    <div>
                      <span className="font-bold font-business text-muted-foreground">Diepte:</span>
                      <div className="font-business">{product.dimensions.depth}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* beschrijving */}
              <Card className="border-2 border-white/20 bg-secondary-light rounded-md">
                <CardContent className="p-6">
                  <h3 className="font-business mb-4">Over dit kunstwerk</h3>
                  <p className="text-muted-foreground font-business leading-relaxed">
                    {product.longDescription}
                  </p>
                </CardContent>
              </Card>

            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
