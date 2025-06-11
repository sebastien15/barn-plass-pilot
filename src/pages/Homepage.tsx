import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Clock, Award, Users, Truck } from "lucide-react";

export default function Homepage() {
  const products = [
    {
      name: "Pulled Pork",
      description: "Il nostro prodotto di punta: spalla di maiale cotta a bassa temperatura per 16 ore",
      image: "/placeholder.svg"
    },
    {
      name: "Pulled Beef",
      description: "Petto di manzo affumicato lentamente fino alla perfetta tenerezza",
      image: "/placeholder.svg"
    },
    {
      name: "Pulled Chicken",
      description: "Cosce di pollo disossate, marinate e cotte con la tecnica low & slow",
      image: "/placeholder.svg"
    },
    {
      name: "Costine BBQ",
      description: "Costine di maiale glassate con la nostra salsa BBQ speciale",
      image: "/placeholder.svg"
    },
    {
      name: "Turkey Pastrami",
      description: "Petto di tacchino speziato e affumicato secondo la ricetta tradizionale",
      image: "/placeholder.svg"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[#1C1C1C] via-[#8B2E2E] to-[#1C1C1C] text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-light mb-6">
            Il maiale sfilacciato che si scioglie in bocca
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 font-light">
            Lenta cottura, gusto intenso, pronto per conquistarti
          </p>
          <p className="text-lg mb-12 text-gray-300 font-light">
            Soluzioni professionali per ristoranti, pub e food truck in tutta Italia
          </p>
          
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
            <Link to="/catalogo-b2b">
              <Button size="lg" className="bg-[#8B2E2E] hover:bg-[#A73939] text-white px-8 py-4 text-lg font-light">
                Esplora i nostri tagli
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/shop">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-[#8B2E2E] px-8 py-4 text-lg font-light">
                Acquista dal nostro shop
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Product Showcase */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-light text-[#1C1C1C] mb-4">
              I Nostri Prodotti Artigianali
            </h2>
            <p className="text-xl text-gray-600 font-light">
              Ogni prodotto è realizzato con la tecnica "low & slow" per garantire sapore e tenerezza unici
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {products.map((product, index) => (
              <Card key={index} className="border-2 border-[#8B2E2E] hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-full h-48 bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                  <h3 className="text-xl font-medium text-[#8B2E2E] mb-2">{product.name}</h3>
                  <p className="text-gray-700 mb-4 font-light">{product.description}</p>
                  <Button className="w-full bg-[#8B2E2E] hover:bg-[#A73939] text-white font-light">
                    Richiedi Informazioni
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Link to="/catalogo-b2b">
              <Button size="lg" className="bg-[#8B2E2E] hover:bg-[#A73939] text-white font-light">
                Visualizza Catalogo Completo B2B
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* L'Arte del BBQ Affumicato */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-light text-[#1C1C1C] mb-4">
              L'Arte del BBQ Affumicato
            </h2>
            <p className="text-xl text-gray-600 font-light">
              Dal 2021 portiamo la tradizione americana in Italia con passione e dedizione
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#8B2E2E] rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-medium text-[#1C1C1C] mb-2">Low & Slow</h3>
              <p className="text-gray-600 font-light">Cottura lenta a bassa temperatura per 12-16 ore</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-[#8B2E2E] rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-medium text-[#1C1C1C] mb-2">CE Certified</h3>
              <p className="text-gray-600 font-light">Certificazione europea dal 2022 per massima qualità</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-[#8B2E2E] rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-medium text-[#1C1C1C] mb-2">200+ Clienti</h3>
              <p className="text-gray-600 font-light">Ristoranti e pub serviti in tutta Italia</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-[#8B2E2E] rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-medium text-[#1C1C1C] mb-2">70 Giorni</h3>
              <p className="text-gray-600 font-light">Durata di conservazione con sottovuoto</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#8B2E2E] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-light mb-6">
            Pronto a portare il vero BBQ nel tuo locale?
          </h2>
          <p className="text-xl mb-8 font-light">
            Contatta il nostro team commerciale per una consulenza personalizzata
          </p>
          
          <div className="flex flex-col md:flex-row gap-6 justify-center">
            <Link to="/contatti">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-[#8B2E2E] px-8 py-4 font-light">
                Richiedi Preventivo
              </Button>
            </Link>
            <Link to="/il-team">
              <Button size="lg" className="bg-white text-[#8B2E2E] hover:bg-gray-100 px-8 py-4 font-light">
                Conosci il Team
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
