
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";
import { CreditCard, Truck, MapPin, User } from "lucide-react";
import { Link } from "react-router-dom";

export default function Checkout() {
  const [step, setStep] = useState(1);
  const [paymentMethod, setPaymentMethod] = useState("paypal");

  // Mock cart data
  const cartItems = [
    { id: 1, name: "Pulled Pork Classico", price: 12.50, quantity: 2, weight: "500g" },
    { id: 2, name: "Costine BBQ", price: 18.90, quantity: 1, weight: "800g" },
    { id: 3, name: "Pulled Beef", price: 16.20, quantity: 1, weight: "500g" }
  ];

  const subtotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  const shipping = subtotal >= 50 ? 0 : 6.90;
  const total = subtotal + shipping;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-[#1C1C1C] mb-4">Checkout</h1>
          
          {/* Progress Steps */}
          <div className="flex items-center justify-center mb-8">
            <div className="flex items-center space-x-4">
              <div className={`flex items-center ${step >= 1 ? 'text-[#228B22]' : 'text-gray-400'}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 1 ? 'bg-[#228B22] text-white' : 'bg-gray-200'}`}>
                  1
                </div>
                <span className="ml-2 font-medium">Dati di Spedizione</span>
              </div>
              
              <div className="w-12 h-0.5 bg-gray-300"></div>
              
              <div className={`flex items-center ${step >= 2 ? 'text-[#228B22]' : 'text-gray-400'}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 2 ? 'bg-[#228B22] text-white' : 'bg-gray-200'}`}>
                  2
                </div>
                <span className="ml-2 font-medium">Pagamento</span>
              </div>
              
              <div className="w-12 h-0.5 bg-gray-300"></div>
              
              <div className={`flex items-center ${step >= 3 ? 'text-[#228B22]' : 'text-gray-400'}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= 3 ? 'bg-[#228B22] text-white' : 'bg-gray-200'}`}>
                  3
                </div>
                <span className="ml-2 font-medium">Conferma</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Step 1: Shipping Information */}
            {step === 1 && (
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center mb-6">
                    <User className="h-6 w-6 text-[#228B22] mr-3" />
                    <h2 className="text-2xl font-bold text-[#1C1C1C]">Dati di Spedizione</h2>
                  </div>
                  
                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="firstName">Nome *</Label>
                        <Input id="firstName" placeholder="Il tuo nome" className="border-[#228B22]" />
                      </div>
                      <div>
                        <Label htmlFor="lastName">Cognome *</Label>
                        <Input id="lastName" placeholder="Il tuo cognome" className="border-[#228B22]" />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="email">Email *</Label>
                        <Input id="email" type="email" placeholder="la-tua-email@esempio.it" className="border-[#228B22]" />
                      </div>
                      <div>
                        <Label htmlFor="phone">Telefono *</Label>
                        <Input id="phone" placeholder="+39 000 0000000" className="border-[#228B22]" />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="address">Indirizzo *</Label>
                      <Input id="address" placeholder="Via, numero civico" className="border-[#228B22]" />
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                      <div>
                        <Label htmlFor="city">Città *</Label>
                        <Input id="city" placeholder="Città" className="border-[#228B22]" />
                      </div>
                      <div>
                        <Label htmlFor="province">Provincia *</Label>
                        <Select>
                          <SelectTrigger className="border-[#228B22]">
                            <SelectValue placeholder="Seleziona..." />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="BG">Bergamo (BG)</SelectItem>
                            <SelectItem value="MI">Milano (MI)</SelectItem>
                            <SelectItem value="RM">Roma (RM)</SelectItem>
                            {/* Add more provinces as needed */}
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="zipCode">CAP *</Label>
                        <Input id="zipCode" placeholder="00000" className="border-[#228B22]" />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="notes">Note per la consegna (opzionale)</Label>
                      <Textarea 
                        id="notes" 
                        placeholder="Istruzioni speciali per il corriere..."
                        className="border-[#228B22]"
                        rows={3}
                      />
                    </div>

                    <div className="flex items-center space-x-2">
                      <Checkbox id="createAccount" />
                      <Label htmlFor="createAccount" className="text-sm">
                        Crea un account per tracciare i tuoi ordini
                      </Label>
                    </div>

                    <div className="flex justify-end">
                      <Button 
                        onClick={() => setStep(2)}
                        className="bg-[#228B22] hover:bg-[#32CD32] text-white px-8 py-3"
                      >
                        Continua al Pagamento
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            )}

            {/* Step 2: Payment */}
            {step === 2 && (
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center mb-6">
                    <CreditCard className="h-6 w-6 text-[#228B22] mr-3" />
                    <h2 className="text-2xl font-bold text-[#1C1C1C]">Metodo di Pagamento</h2>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3 p-4 border rounded-lg">
                      <input 
                        type="radio" 
                        id="paypal" 
                        name="payment" 
                        value="paypal"
                        checked={paymentMethod === "paypal"}
                        onChange={(e) => setPaymentMethod(e.target.value)}
                        className="text-[#228B22]"
                      />
                      <Label htmlFor="paypal" className="flex items-center cursor-pointer">
                        <img src="/placeholder.svg" alt="PayPal" className="w-16 h-8 mr-3" />
                        <div>
                          <p className="font-medium">PayPal</p>
                          <p className="text-sm text-gray-600">Paga in modo sicuro con il tuo account PayPal</p>
                        </div>
                      </Label>
                    </div>

                    <div className="flex items-center space-x-3 p-4 border rounded-lg opacity-50">
                      <input 
                        type="radio" 
                        id="card" 
                        name="payment" 
                        value="card"
                        disabled
                      />
                      <Label htmlFor="card" className="flex items-center cursor-not-allowed">
                        <div className="w-16 h-8 bg-gray-200 rounded mr-3 flex items-center justify-center">
                          <CreditCard className="h-4 w-4 text-gray-400" />
                        </div>
                        <div>
                          <p className="font-medium">Carta di Credito</p>
                          <p className="text-sm text-gray-600">Disponibile prossimamente</p>
                        </div>
                      </Label>
                    </div>

                    <div className="flex items-center space-x-3 p-4 border rounded-lg opacity-50">
                      <input 
                        type="radio" 
                        id="transfer" 
                        name="payment" 
                        value="transfer"
                        disabled
                      />
                      <Label htmlFor="transfer" className="flex items-center cursor-not-allowed">
                        <div className="w-16 h-8 bg-gray-200 rounded mr-3 flex items-center justify-center">
                          <span className="text-xs text-gray-400">IBAN</span>
                        </div>
                        <div>
                          <p className="font-medium">Bonifico Bancario</p>
                          <p className="text-sm text-gray-600">Disponibile prossimamente</p>
                        </div>
                      </Label>
                    </div>
                  </div>

                  <div className="mt-8 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                    <h4 className="font-medium text-blue-800 mb-2">Informazioni sulla Spedizione</h4>
                    <div className="space-y-2 text-sm text-blue-700">
                      <div className="flex items-center">
                        <Truck className="h-4 w-4 mr-2" />
                        <span>Spedizione refrigerata in 24-48 ore</span>
                      </div>
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-2" />
                        <span>Consegna in tutta Italia</span>
                      </div>
                      <p className="mt-2">
                        I prodotti verranno spediti in confezioni refrigerate per mantenere 
                        la catena del freddo fino alla consegna.
                      </p>
                    </div>
                  </div>

                  <div className="flex justify-between mt-8">
                    <Button 
                      variant="outline"
                      onClick={() => setStep(1)}
                      className="border-[#228B22] text-[#228B22] px-8 py-3"
                    >
                      Indietro
                    </Button>
                    <Button 
                      onClick={() => setStep(3)}
                      className="bg-[#228B22] hover:bg-[#32CD32] text-white px-8 py-3"
                    >
                      Rivedi Ordine
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Step 3: Order Confirmation */}
            {step === 3 && (
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold text-[#1C1C1C] mb-6">Conferma il Tuo Ordine</h2>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-bold text-lg mb-3">Dati di Spedizione</h3>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <p className="font-medium">Mario Rossi</p>
                        <p>mario.rossi@email.it</p>
                        <p>+39 123 456 7890</p>
                        <p>Via Roma 123, 20100 Milano (MI)</p>
                      </div>
                    </div>

                    <div>
                      <h3 className="font-bold text-lg mb-3">Metodo di Pagamento</h3>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <p>PayPal</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-2">
                      <Checkbox id="terms" />
                      <Label htmlFor="terms" className="text-sm">
                        Accetto i{" "}
                        <Link to="/termini" className="text-[#228B22] underline">
                          Termini e Condizioni
                        </Link>{" "}
                        e la{" "}
                        <Link to="/privacy" className="text-[#228B22] underline">
                          Privacy Policy
                        </Link>
                      </Label>
                    </div>
                  </div>

                  <div className="flex justify-between mt-8">
                    <Button 
                      variant="outline"
                      onClick={() => setStep(2)}
                      className="border-[#228B22] text-[#228B22] px-8 py-3"
                    >
                      Indietro
                    </Button>
                    <Link to="/shop/grazie">
                      <Button className="bg-[#228B22] hover:bg-[#32CD32] text-white px-8 py-3">
                        Completa Ordine
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <Card className="sticky top-8">
              <CardContent className="p-6">
                <h3 className="font-bold text-[#1C1C1C] text-xl mb-6">Riepilogo Ordine</h3>
                
                <div className="space-y-4 mb-6">
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex justify-between items-start">
                      <div className="flex-1">
                        <p className="font-medium text-sm">{item.name}</p>
                        <p className="text-xs text-gray-600">{item.weight} x {item.quantity}</p>
                      </div>
                      <p className="font-medium">€{(item.price * item.quantity).toFixed(2)}</p>
                    </div>
                  ))}
                </div>
                
                <Separator className="my-4" />
                
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Subtotale</span>
                    <span>€{subtotal.toFixed(2)}</span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span className="text-gray-600">Spedizione</span>
                    <span className={shipping === 0 ? 'text-green-600' : ''}>
                      {shipping === 0 ? 'Gratuita' : `€${shipping.toFixed(2)}`}
                    </span>
                  </div>
                  
                  <Separator className="my-2" />
                  
                  <div className="flex justify-between text-xl font-bold">
                    <span>Totale</span>
                    <span className="text-[#228B22]">€{total.toFixed(2)}</span>
                  </div>
                </div>
                
                <div className="mt-6 text-center">
                  <div className="flex items-center justify-center gap-2 text-xs text-gray-600">
                    <span>🔒</span>
                    <span>Pagamento sicuro SSL</span>
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
