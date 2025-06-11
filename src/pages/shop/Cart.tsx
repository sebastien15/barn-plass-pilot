
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Minus, Plus, X, ShoppingBag, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export default function Cart() {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Pulled Pork Classico",
      price: 12.50,
      originalPrice: 15.00,
      quantity: 2,
      image: "/placeholder.svg",
      weight: "500g"
    },
    {
      id: 2,
      name: "Costine BBQ",
      price: 18.90,
      quantity: 1,
      image: "/placeholder.svg",
      weight: "800g"
    },
    {
      id: 3,
      name: "Pulled Beef",
      price: 16.20,
      quantity: 1,
      image: "/placeholder.svg",
      weight: "500g"
    }
  ]);

  const [promoCode, setPromoCode] = useState("");
  const [appliedPromo, setAppliedPromo] = useState<string | null>(null);

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity === 0) {
      removeItem(id);
      return;
    }
    setCartItems(cartItems.map(item => 
      item.id === id ? { ...item, quantity: newQuantity } : item
    ));
  };

  const removeItem = (id: number) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const applyPromoCode = () => {
    if (promoCode === "WELCOME10") {
      setAppliedPromo("WELCOME10");
    } else {
      alert("Codice promozionale non valido");
    }
  };

  const subtotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  const savings = cartItems.reduce((total, item) => {
    const saving = item.originalPrice ? (item.originalPrice - item.price) * item.quantity : 0;
    return total + saving;
  }, 0);
  const promoDiscount = appliedPromo === "WELCOME10" ? subtotal * 0.1 : 0;
  const shipping = subtotal >= 50 ? 0 : 6.90;
  const total = subtotal - promoDiscount + shipping;

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-2xl mx-auto text-center">
            <ShoppingBag className="h-24 w-24 text-gray-400 mx-auto mb-6" />
            <h1 className="text-3xl font-bold text-[#1C1C1C] mb-4">Il tuo carrello è vuoto</h1>
            <p className="text-gray-600 mb-8">
              Sembra che tu non abbia ancora aggiunto nessun prodotto al carrello.
            </p>
            <Link to="/shop/prodotti">
              <Button size="lg" className="bg-[#228B22] hover:bg-[#32CD32] text-white">
                Continua lo Shopping
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <Link to="/shop/prodotti" className="flex items-center text-[#228B22] hover:underline mb-4">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Continua lo Shopping
          </Link>
          <h1 className="text-3xl font-bold text-[#1C1C1C]">Il Tuo Carrello</h1>
          <p className="text-gray-600">{cartItems.length} prodotti nel carrello</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <Card>
              <CardContent className="p-6">
                <div className="space-y-6">
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex items-center gap-4 pb-6 border-b last:border-b-0 last:pb-0">
                      <div className="w-20 h-20 bg-gray-200 rounded-lg flex-shrink-0">
                        <img 
                          src={item.image} 
                          alt={item.name}
                          className="w-full h-full object-cover rounded-lg"
                        />
                      </div>
                      
                      <div className="flex-1">
                        <h3 className="font-bold text-[#1C1C1C] mb-1">{item.name}</h3>
                        <p className="text-sm text-gray-600 mb-2">{item.weight}</p>
                        
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-[#228B22]">€{item.price.toFixed(2)}</span>
                          {item.originalPrice && (
                            <>
                              <span className="text-gray-500 line-through text-sm">€{item.originalPrice.toFixed(2)}</span>
                              <Badge className="bg-red-500 text-xs">
                                -{Math.round((1 - item.price / item.originalPrice) * 100)}%
                              </Badge>
                            </>
                          )}
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-3">
                        <div className="flex items-center border rounded-lg">
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="h-8 w-8 p-0"
                          >
                            <Minus className="h-4 w-4" />
                          </Button>
                          <span className="px-3 py-1 text-center min-w-[3rem]">{item.quantity}</span>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="h-8 w-8 p-0"
                          >
                            <Plus className="h-4 w-4" />
                          </Button>
                        </div>
                        
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => removeItem(item.id)}
                          className="text-red-500 hover:text-red-700 h-8 w-8 p-0"
                        >
                          <X className="h-4 w-4" />
                        </Button>
                      </div>
                      
                      <div className="text-right min-w-[80px]">
                        <p className="font-bold text-[#1C1C1C]">
                          €{(item.price * item.quantity).toFixed(2)}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Promo Code */}
            <Card className="mt-6">
              <CardContent className="p-6">
                <h3 className="font-bold text-[#1C1C1C] mb-4">Codice Promozionale</h3>
                <div className="flex gap-4">
                  <Input
                    placeholder="Inserisci codice promozionale"
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                    className="border-[#228B22]"
                  />
                  <Button 
                    onClick={applyPromoCode}
                    className="bg-[#228B22] hover:bg-[#32CD32] text-white"
                  >
                    Applica
                  </Button>
                </div>
                {appliedPromo && (
                  <div className="mt-4 p-3 bg-green-50 border border-green-200 rounded-lg">
                    <p className="text-green-800 font-medium">
                      ✓ Codice "{appliedPromo}" applicato - Sconto 10%
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <Card className="sticky top-8">
              <CardContent className="p-6">
                <h3 className="font-bold text-[#1C1C1C] text-xl mb-6">Riepilogo Ordine</h3>
                
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Subtotale</span>
                    <span className="font-medium">€{subtotal.toFixed(2)}</span>
                  </div>
                  
                  {savings > 0 && (
                    <div className="flex justify-between text-green-600">
                      <span>Risparmi</span>
                      <span>-€{savings.toFixed(2)}</span>
                    </div>
                  )}
                  
                  {promoDiscount > 0 && (
                    <div className="flex justify-between text-green-600">
                      <span>Sconto promozionale</span>
                      <span>-€{promoDiscount.toFixed(2)}</span>
                    </div>
                  )}
                  
                  <div className="flex justify-between">
                    <span className="text-gray-600">Spedizione</span>
                    <span className={`font-medium ${shipping === 0 ? 'text-green-600' : ''}`}>
                      {shipping === 0 ? 'Gratuita' : `€${shipping.toFixed(2)}`}
                    </span>
                  </div>
                  
                  {subtotal < 50 && (
                    <div className="text-sm text-gray-600 bg-yellow-50 p-3 rounded-lg">
                      Aggiungi €{(50 - subtotal).toFixed(2)} per la spedizione gratuita!
                    </div>
                  )}
                  
                  <Separator />
                  
                  <div className="flex justify-between text-xl font-bold">
                    <span>Totale</span>
                    <span className="text-[#228B22]">€{total.toFixed(2)}</span>
                  </div>
                </div>
                
                <div className="mt-6 space-y-3">
                  <Link to="/shop/checkout">
                    <Button size="lg" className="w-full bg-[#228B22] hover:bg-[#32CD32] text-white">
                      Procedi al Checkout
                    </Button>
                  </Link>
                  
                  <Link to="/shop/prodotti">
                    <Button size="lg" variant="outline" className="w-full border-[#228B22] text-[#228B22]">
                      Continua lo Shopping
                    </Button>
                  </Link>
                </div>
                
                <div className="mt-6 text-center">
                  <div className="flex items-center justify-center gap-2 text-sm text-gray-600">
                    <span>🔒</span>
                    <span>Pagamento sicuro con PayPal</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
