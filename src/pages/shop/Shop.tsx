
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ShoppingCart, Star, Truck, Shield } from "lucide-react";
import { Link } from "react-router-dom";

export default function Shop() {
  const featuredProducts = [
    {
      id: 1,
      name: "Pulled Pork Classico",
      price: "€12.50",
      originalPrice: "€15.00",
      description: "Il nostro bestseller: spalla di maiale cotta 16 ore",
      image: "/placeholder.svg",
      rating: 4.8,
      reviews: 127
    },
    {
      id: 2,
      name: "Costine BBQ",
      price: "€18.90",
      description: "Costine glassate con salsa BBQ signature",
      image: "/placeholder.svg",
      rating: 4.9,
      reviews: 89
    },
    {
      id: 3,
      name: "Pulled Beef",
      price: "€16.20",
      description: "Petto di manzo affumicato a lenta cottura",
      image: "/placeholder.svg",
      rating: 4.7,
      reviews: 156
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#8B2E2E] to-[#A73939] text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-light mb-6">Shop House of Pulled</h1>
          <p className="text-xl text-gray-100 max-w-3xl mx-auto mb-8 font-light">
            Porta a casa il vero BBQ americano. Prodotti artigianali pronti da gustare, 
            consegnati direttamente alla tua porta
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Link to="/shop/prodotti">
              <Button size="lg" className="bg-white text-[#8B2E2E] hover:bg-gray-100 px-8 py-4 font-light">
                <ShoppingCart className="h-5 w-5 mr-2" />
                Scopri i Prodotti
              </Button>
            </Link>
            <Link to="/">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-[#8B2E2E] px-8 py-4 font-light">
                Sei un'azienda? Scopri il B2B
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#8B2E2E] rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-medium text-[#1C1C1C] mb-2">Spedizione Gratuita</h3>
              <p className="text-gray-600 font-light">Ordini sopra €50 spediti gratis in tutta Italia</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-[#8B2E2E] rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-medium text-[#1C1C1C] mb-2">Freschezza Garantita</h3>
              <p className="text-gray-600 font-light">Catena del freddo mantenuta fino alla consegna</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-[#8B2E2E] rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-medium text-[#1C1C1C] mb-2">Qualità Artigianale</h3>
              <p className="text-gray-600 font-light">Stessi prodotti serviti ai migliori ristoranti</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-[#8B2E2E] rounded-full flex items-center justify-center mx-auto mb-4">
                <ShoppingCart className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-medium text-[#1C1C1C] mb-2">Facile e Veloce</h3>
              <p className="text-gray-600 font-light">Ordina online, ricevi a casa in 24-48h</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-light text-[#1C1C1C] mb-4">Prodotti in Evidenza</h2>
            <p className="text-xl text-gray-600 font-light">
              I nostri bestseller scelti dai clienti
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {featuredProducts.map((product) => (
              <Card key={product.id} className="border-2 border-[#8B2E2E] hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-full h-48 bg-gray-200 rounded-lg mb-4">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                  
                  <div className="flex items-center mb-2">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`h-4 w-4 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600 ml-2">
                      {product.rating} ({product.reviews} recensioni)
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-medium text-[#8B2E2E] mb-2">{product.name}</h3>
                  <p className="text-gray-700 mb-4 font-light">{product.description}</p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl font-medium text-[#1C1C1C]">{product.price}</span>
                      {product.originalPrice && (
                        <span className="text-lg text-gray-500 line-through">{product.originalPrice}</span>
                      )}
                    </div>
                    {product.originalPrice && (
                      <span className="bg-red-500 text-white px-2 py-1 rounded text-sm font-medium">
                        -17%
                      </span>
                    )}
                  </div>
                  
                  <Button className="w-full bg-[#8B2E2E] hover:bg-[#A73939] text-white font-light">
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    Aggiungi al Carrello
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Link to="/shop/prodotti">
              <Button size="lg" className="bg-[#8B2E2E] hover:bg-[#A73939] text-white font-light">
                Vedi Tutti i Prodotti
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-light text-[#1C1C1C] mb-4">Come Funziona</h2>
            <p className="text-xl text-gray-600 font-light">
              Semplice come 1, 2, 3
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-[#8B2E2E] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-medium text-2xl">1</span>
              </div>
              <h3 className="text-xl font-medium text-[#1C1C1C] mb-2">Scegli i Prodotti</h3>
              <p className="text-gray-600 font-light">
                Sfoglia il nostro catalogo e aggiungi i tuoi BBQ preferiti al carrello
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-[#8B2E2E] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-medium text-2xl">2</span>
              </div>
              <h3 className="text-xl font-medium text-[#1C1C1C] mb-2">Ordina Online</h3>
              <p className="text-gray-600 font-light">
                Completa l'ordine con pochi click e scegli modalità di pagamento e consegna
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-[#8B2E2E] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-medium text-2xl">3</span>
              </div>
              <h3 className="text-xl font-medium text-[#1C1C1C] mb-2">Ricevi e Gusta</h3>
              <p className="text-gray-600 font-light">
                Ricevi il tuo BBQ a casa in 24-48h e gustalo riscaldandolo semplicemente
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-[#8B2E2E] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-light mb-6">Resta Aggiornato</h2>
          <p className="text-xl mb-8 font-light">
            Iscriviti alla newsletter per ricevere offerte esclusive e novità sui prodotti
          </p>
          
          <div className="max-w-md mx-auto flex gap-4">
            <input 
              type="email" 
              placeholder="La tua email..."
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 border-0"
            />
            <Button className="bg-white text-[#8B2E2E] hover:bg-gray-100 px-6 py-3 font-light">
              Iscriviti
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
