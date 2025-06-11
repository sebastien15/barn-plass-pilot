
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { X } from "lucide-react";

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryImages = [
    {
      src: "/placeholder.svg",
      alt: "Pulled Pork affumicato",
      category: "Prodotti",
      title: "Pulled Pork"
    },
    {
      src: "/placeholder.svg",
      alt: "Costine BBQ glassate",
      category: "Prodotti",
      title: "Costine BBQ"
    },
    {
      src: "/placeholder.svg",
      alt: "Beef Brisket affumicato",
      category: "Prodotti",
      title: "Beef Brisket"
    },
    {
      src: "/placeholder.svg",
      alt: "Laboratorio di produzione",
      category: "Processo",
      title: "Laboratorio"
    },
    {
      src: "/placeholder.svg",
      alt: "Smoker in azione",
      category: "Processo",
      title: "Affumicatura"
    },
    {
      src: "/placeholder.svg",
      alt: "Marinatura delle carni",
      category: "Processo",
      title: "Marinatura"
    },
    {
      src: "/placeholder.svg",
      alt: "Chef al lavoro",
      category: "Team",
      title: "Chef David"
    },
    {
      src: "/placeholder.svg",
      alt: "Team in produzione",
      category: "Team",
      title: "Il Team"
    },
    {
      src: "/placeholder.svg",
      alt: "Controllo qualità",
      category: "Team",
      title: "Quality Control"
    },
    {
      src: "/placeholder.svg",
      alt: "Turkey Pastrami",
      category: "Prodotti",
      title: "Turkey Pastrami"
    },
    {
      src: "/placeholder.svg",
      alt: "Pork Belly glassato",
      category: "Prodotti",
      title: "Pork Belly"
    },
    {
      src: "/placeholder.svg",
      alt: "Packaging sottovuoto",
      category: "Processo",
      title: "Confezionamento"
    }
  ];

  const categories = ["Tutti", "Prodotti", "Processo", "Team"];
  const [activeCategory, setActiveCategory] = useState("Tutti");

  const filteredImages = activeCategory === "Tutti" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#1C1C1C] to-[#8B2E2E] text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Galleria</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Scopri il mondo House of Pulled attraverso le immagini: 
            dai nostri prodotti artigianali al processo di lavorazione, 
            fino al team che rende tutto possibile
          </p>
        </div>
      </section>

      {/* Filter Buttons */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "outline"}
                className={`${
                  activeCategory === category 
                    ? "bg-[#8B2E2E] hover:bg-[#A73939] text-white" 
                    : "border-[#8B2E2E] text-[#8B2E2E] hover:bg-[#8B2E2E] hover:text-white"
                }`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredImages.map((image, index) => (
              <Card 
                key={index} 
                className="border-2 border-[#8B2E2E] hover:shadow-lg transition-all cursor-pointer group"
                onClick={() => setSelectedImage(image.src)}
              >
                <CardContent className="p-0">
                  <div className="relative overflow-hidden rounded-lg">
                    <img 
                      src={image.src} 
                      alt={image.alt}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                      <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
                        <h3 className="font-bold text-lg">{image.title}</h3>
                        <p className="text-sm">{image.category}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-full">
            <Button
              variant="outline"
              size="sm"
              className="absolute -top-12 right-0 text-white border-white hover:bg-white hover:text-black"
              onClick={() => setSelectedImage(null)}
            >
              <X className="h-4 w-4" />
            </Button>
            <img 
              src={selectedImage} 
              alt="Immagine ingrandita"
              className="max-w-full max-h-full object-contain rounded-lg"
            />
          </div>
        </div>
      )}

      {/* Behind the Scenes */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#1C1C1C] mb-4">Dietro le Quinte</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ogni prodotto House of Pulled nasce da un processo artigianale che rispetta 
              la tradizione americana del BBQ, unita alla qualità italiana
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-full h-64 bg-gray-200 rounded-lg mb-4">
                <img 
                  src="/placeholder.svg" 
                  alt="Selezione ingredienti"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <h3 className="text-xl font-bold text-[#8B2E2E] mb-2">Selezione Ingredienti</h3>
              <p className="text-gray-700">
                Scegliamo solo carni di prima qualità da fornitori certificati, 
                seguendo standard rigorosi di tracciabilità
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-full h-64 bg-gray-200 rounded-lg mb-4">
                <img 
                  src="/placeholder.svg" 
                  alt="Processo di affumicatura"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <h3 className="text-xl font-bold text-[#8B2E2E] mb-2">Affumicatura Artigianale</h3>
              <p className="text-gray-700">
                Utilizziamo smoker professionali e legni selezionati per 
                un'affumicatura lenta che dona sapore unico ai nostri prodotti
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-full h-64 bg-gray-200 rounded-lg mb-4">
                <img 
                  src="/placeholder.svg" 
                  alt="Confezionamento"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <h3 className="text-xl font-bold text-[#8B2E2E] mb-2">Confezionamento</h3>
              <p className="text-gray-700">
                Confezionamento sottovuoto in ambiente controllato per 
                garantire freschezza e durata fino a 70 giorni
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media CTA */}
      <section className="py-16 bg-[#8B2E2E] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Seguici su Instagram</h2>
          <p className="text-xl mb-8">
            Resta aggiornato sulle nostre ultime creazioni e scopri i segreti del BBQ artigianale
          </p>
          <div className="flex flex-col md:flex-row gap-6 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-[#8B2E2E] hover:bg-gray-100 px-8 py-4"
              onClick={() => window.open('https://instagram.com/houseofpulled', '_blank')}
            >
              @houseofpulled
            </Button>
            <p className="text-lg text-gray-200 flex items-center">
              #houseofpulled #pulledporn #bbqartigianale
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
