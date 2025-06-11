
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Clock, Shield, Truck, Award } from "lucide-react";
import { Link } from "react-router-dom";

export default function ProductsCatalog() {
  const products = [
    {
      name: "Pulled Pork",
      description: "Spalla di maiale cotta a bassa temperatura per 16 ore con rub di spezie americane",
      features: ["Cottura Low & Slow", "Senza conservanti", "70 giorni sottovuoto"],
      image: "/placeholder.svg",
      category: "Suino"
    },
    {
      name: "Pulled Beef",
      description: "Petto di manzo affumicato lentamente fino alla perfetta tenerezza",
      features: ["Affumicatura tradizionale", "Taglio premium", "Pronto all'uso"],
      image: "/placeholder.svg",
      category: "Bovino"
    },
    {
      name: "Pulled Chicken",
      description: "Cosce di pollo disossate, marinate e cotte con tecnica BBQ autentica",
      features: ["Pollo italiano", "Marinatura 24h", "Cottura uniforme"],
      image: "/placeholder.svg",
      category: "Pollame"
    },
    {
      name: "Costine BBQ",
      description: "Costine di maiale glassate con salsa BBQ speciale, cotte per 12 ore",
      features: ["Glassatura artigianale", "Carne che si stacca dall'osso", "Salsa signature"],
      image: "/placeholder.svg",
      category: "Suino"
    },
    {
      name: "Turkey Pastrami",
      description: "Petto di tacchino speziato e affumicato secondo ricetta tradizionale",
      features: ["Ricetta tradizionale", "Speziatura bilanciata", "Affumicatura a freddo"],
      image: "/placeholder.svg",
      category: "Pollame"
    },
    {
      name: "Beef Ribs",
      description: "Costine di manzo cotte lentamente con rub texano per sapore intenso",
      features: ["Taglio texano", "Rub di spezie", "16 ore di cottura"],
      image: "/placeholder.svg",
      category: "Bovino"
    },
    {
      name: "Pork Belly",
      description: "Pancetta di maiale affumicata e glassata, perfetta per panini gourmet",
      features: ["Glassatura caramellata", "Texture croccante", "Ideale per panini"],
      image: "/placeholder.svg",
      category: "Suino"
    },
    {
      name: "Pork Shank",
      description: "Stinco di maiale cotto a bassa temperatura con erbe mediterranee",
      features: ["Erbe mediterranee", "Cottura prolungata", "Presentazione scenografica"],
      image: "/placeholder.svg",
      category: "Suino"
    },
    {
      name: "Porchetta",
      description: "Porchetta tradizionale rivisitata con tecniche BBQ moderne",
      features: ["Tradizione italiana", "Tecniche BBQ", "Crosta croccante"],
      image: "/placeholder.svg",
      category: "Suino"
    },
    {
      name: "Rooster BBQ",
      description: "Gallo ruspante marinato e affumicato con legni pregiati",
      features: ["Gallo ruspante", "Legni pregiati", "Marinatura speciale"],
      image: "/placeholder.svg",
      category: "Pollame"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#1C1C1C] to-[#8B2E2E] text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Catalogo B2B</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">
            Scopri la nostra gamma completa di prodotti BBQ artigianali, 
            pensati specificamente per ristoranti, pub e food service professionali
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Link to="/contatti">
              <Button size="lg" className="bg-white text-[#8B2E2E] hover:bg-gray-100 px-8 py-4">
                Richiedi Listino Prezzi
              </Button>
            </Link>
            <Link to="/shop">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-[#8B2E2E] px-8 py-4">
                Shop per Privati
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#1C1C1C] mb-4">Perché Scegliere House of Pulled</h2>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#8B2E2E] rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#1C1C1C] mb-2">Cottura Low & Slow</h3>
              <p className="text-gray-600">12-16 ore di cottura lenta per massima tenerezza</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-[#8B2E2E] rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#1C1C1C] mb-2">CE Certified</h3>
              <p className="text-gray-600">Certificazione europea dal 2022 per massima qualità</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-[#8B2E2E] rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#1C1C1C] mb-2">Durata 70 Giorni</h3>
              <p className="text-gray-600">Conservazione sottovuoto per massima praticità</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-[#8B2E2E] rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#1C1C1C] mb-2">200+ Clienti</h3>
              <p className="text-gray-600">Ristoranti e pub serviti in tutta Italia</p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#1C1C1C] mb-4">I Nostri Prodotti</h2>
            <p className="text-xl text-gray-600">
              Ogni prodotto è realizzato con ingredienti selezionati e tecniche artigianali
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <Card key={index} className="border-2 border-[#8B2E2E] hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-full h-48 bg-gray-200 rounded-lg mb-4">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                  <span className="text-sm bg-[#8B2E2E] text-white px-3 py-1 rounded-full">
                    {product.category}
                  </span>
                  <h3 className="text-xl font-bold text-[#8B2E2E] mb-2 mt-3">{product.name}</h3>
                  <p className="text-gray-700 mb-4">{product.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-[#1C1C1C] mb-2">Caratteristiche:</h4>
                    <ul className="text-sm text-gray-600">
                      {product.features.map((feature, idx) => (
                        <li key={idx} className="mb-1">• {feature}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="space-y-2">
                    <p className="text-center text-[#8B2E2E] font-semibold">
                      Contattaci per prezzi commerciali
                    </p>
                    <Button className="w-full bg-[#8B2E2E] hover:bg-[#A73939] text-white">
                      Richiedi Informazioni
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Orders */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-[#1C1C1C] mb-6">Ordini Personalizzati</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Hai esigenze specifiche? Creiamo soluzioni BBQ su misura per il tuo locale. 
            Marinature personalizzate, formati speciali e ricette esclusive.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="p-6">
              <h4 className="font-bold text-[#8B2E2E] mb-3">Ricette Esclusive</h4>
              <p className="text-gray-600">Sviluppiamo ricette uniche per il tuo brand</p>
            </Card>
            <Card className="p-6">
              <h4 className="font-bold text-[#8B2E2E] mb-3">Formati Personalizzati</h4>
              <p className="text-gray-600">Porzioni e packaging studiati per le tue esigenze</p>
            </Card>
            <Card className="p-6">
              <h4 className="font-bold text-[#8B2E2E] mb-3">Consulenza Culinaria</h4>
              <p className="text-gray-600">Supporto del nostro chef per l'integrazione in menu</p>
            </Card>
          </div>
          
          <Link to="/contatti">
            <Button size="lg" className="bg-[#8B2E2E] hover:bg-[#A73939] text-white px-8 py-4">
              Richiedi Consulenza Personalizzata
            </Button>
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#8B2E2E] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Pronto a portare il BBQ nel tuo locale?</h2>
          <p className="text-xl mb-8">
            Contatta il nostro team commerciale per ricevere listino prezzi e campioni gratuiti
          </p>
          
          <div className="flex flex-col md:flex-row gap-6 justify-center">
            <Link to="/contatti">
              <Button size="lg" className="bg-white text-[#8B2E2E] hover:bg-gray-100 px-8 py-4">
                Richiedi Listino B2B
              </Button>
            </Link>
            <Link to="/il-team">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-[#8B2E2E] px-8 py-4">
                Parla con un Esperto
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
