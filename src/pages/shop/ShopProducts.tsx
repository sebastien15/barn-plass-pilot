
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Star, Search, Filter } from "lucide-react";

export default function ShopProducts() {
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [sortBy, setSortBy] = useState("featured");

  const products = [
    {
      id: 1,
      name: "Pulled Pork Classico",
      price: 12.50,
      originalPrice: 15.00,
      description: "Spalla di maiale cotta 16 ore con rub di spezie americane",
      image: "/placeholder.svg",
      category: "suino",
      rating: 4.8,
      reviews: 127,
      featured: true,
      inStock: true
    },
    {
      id: 2,
      name: "Costine BBQ",
      price: 18.90,
      description: "Costine di maiale glassate con salsa BBQ signature",
      image: "/placeholder.svg",
      category: "suino",
      rating: 4.9,
      reviews: 89,
      featured: true,
      inStock: true
    },
    {
      id: 3,
      name: "Pulled Beef",
      price: 16.20,
      description: "Petto di manzo affumicato a lenta cottura",
      image: "/placeholder.svg",
      category: "bovino",
      rating: 4.7,
      reviews: 156,
      featured: false,
      inStock: true
    },
    {
      id: 4,
      name: "Pulled Chicken",
      price: 10.80,
      description: "Cosce di pollo disossate, marinate e cotte BBQ",
      image: "/placeholder.svg",
      category: "pollame",
      rating: 4.6,
      reviews: 203,
      featured: false,
      inStock: true
    },
    {
      id: 5,
      name: "Turkey Pastrami",
      price: 14.30,
      description: "Petto di tacchino speziato e affumicato",
      image: "/placeholder.svg",
      category: "pollame",
      rating: 4.5,
      reviews: 78,
      featured: false,
      inStock: false
    },
    {
      id: 6,
      name: "Beef Ribs",
      price: 22.50,
      description: "Costine di manzo cotte lentamente con rub texano",
      image: "/placeholder.svg",
      category: "bovino",
      rating: 4.8,
      reviews: 45,
      featured: false,
      inStock: true
    }
  ];

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = categoryFilter === "all" || product.category === categoryFilter;
    return matchesSearch && matchesCategory;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case "price-low":
        return a.price - b.price;
      case "price-high":
        return b.price - a.price;
      case "rating":
        return b.rating - a.rating;
      case "name":
        return a.name.localeCompare(b.name);
      default:
        return b.featured ? 1 : -1;
    }
  });

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-r from-[#8B2E2E] to-[#A73939] text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-light mb-4">Tutti i Prodotti</h1>
          <p className="text-xl text-gray-100 font-light">
            Scopri la nostra gamma completa di BBQ artigianali
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input
                placeholder="Cerca prodotti..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 border-[#8B2E2E]"
              />
            </div>
            
            <div className="flex gap-4">
              <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                <SelectTrigger className="w-[180px] border-[#8B2E2E]">
                  <Filter className="h-4 w-4 mr-2" />
                  <SelectValue placeholder="Categoria" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Tutte le categorie</SelectItem>
                  <SelectItem value="suino">Suino</SelectItem>
                  <SelectItem value="bovino">Bovino</SelectItem>
                  <SelectItem value="pollame">Pollame</SelectItem>
                </SelectContent>
              </Select>

              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-[180px] border-[#8B2E2E]">
                  <SelectValue placeholder="Ordina per" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="featured">In evidenza</SelectItem>
                  <SelectItem value="name">Nome A-Z</SelectItem>
                  <SelectItem value="price-low">Prezzo crescente</SelectItem>
                  <SelectItem value="price-high">Prezzo decrescente</SelectItem>
                  <SelectItem value="rating">Valutazione</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <p className="text-gray-600">
              Mostrando {sortedProducts.length} di {products.length} prodotti
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sortedProducts.map((product) => (
              <Card key={product.id} className="border-2 border-[#8B2E2E] hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="relative w-full h-48 bg-gray-200 rounded-lg mb-4">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-cover rounded-lg"
                    />
                    {product.featured && (
                      <Badge className="absolute top-2 left-2 bg-[#8B2E2E]">
                        In Evidenza
                      </Badge>
                    )}
                    {!product.inStock && (
                      <Badge className="absolute top-2 right-2 bg-red-500">
                        Esaurito
                      </Badge>
                    )}
                    {product.originalPrice && (
                      <Badge className="absolute top-2 right-2 bg-red-500">
                        -{Math.round((1 - product.price / product.originalPrice) * 100)}%
                      </Badge>
                    )}
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
                      {product.rating} ({product.reviews})
                    </span>
                  </div>
                  
                  <Badge variant="outline" className="text-[#228B22] border-[#228B22] mb-2">
                    {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
                  </Badge>
                  
                  <h3 className="text-xl font-bold text-[#228B22] mb-2">{product.name}</h3>
                  <p className="text-gray-700 mb-4 text-sm">{product.description}</p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl font-bold text-[#1C1C1C]">€{product.price.toFixed(2)}</span>
                      {product.originalPrice && (
                        <span className="text-lg text-gray-500 line-through">€{product.originalPrice.toFixed(2)}</span>
                      )}
                    </div>
                  </div>
                  
                  <Button 
                    className={`w-full ${
                      product.inStock 
                        ? "bg-[#8B2E2E] hover:bg-[#A73939] text-white" 
                        : "bg-gray-300 text-gray-500 cursor-not-allowed"
                    } font-light`}
                    disabled={!product.inStock}
                  >
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    {product.inStock ? "Aggiungi al Carrello" : "Non Disponibile"}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {sortedProducts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">Nessun prodotto trovato con i filtri selezionati.</p>
              <Button 
                onClick={() => {
                  setSearchTerm("");
                  setCategoryFilter("all");
                }}
                className="mt-4 bg-[#8B2E2E] hover:bg-[#A73939] text-white font-light"
              >
                Rimuovi Filtri
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-[#8B2E2E] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-light mb-6">Non perdere le novità!</h2>
          <p className="text-xl mb-8 font-light">
            Iscriviti per ricevere offerte esclusive e aggiornamenti sui nuovi prodotti
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
