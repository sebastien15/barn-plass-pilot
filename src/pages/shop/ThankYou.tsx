
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Download, Mail, Package, Clock } from "lucide-react";
import { Link } from "react-router-dom";

export default function ThankYou() {
  const orderNumber = "HOP-2024-001234";
  const orderDate = new Date().toLocaleDateString('it-IT');
  const estimatedDelivery = new Date(Date.now() + 2 * 24 * 60 * 60 * 1000).toLocaleDateString('it-IT');

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          {/* Success Header */}
          <div className="text-center mb-12">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="h-12 w-12 text-green-600" />
            </div>
            <h1 className="text-4xl font-bold text-[#1C1C1C] mb-4">
              Grazie per il tuo ordine!
            </h1>
            <p className="text-xl text-gray-600">
              Il tuo ordine è stato ricevuto e sarà processato a breve
            </p>
          </div>

          {/* Order Details */}
          <Card className="mb-8">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-[#1C1C1C] mb-6">Dettagli Ordine</h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-bold text-[#228B22] mb-3">Informazioni Ordine</h3>
                  <div className="space-y-2 text-gray-700">
                    <p><strong>Numero Ordine:</strong> {orderNumber}</p>
                    <p><strong>Data Ordine:</strong> {orderDate}</p>
                    <p><strong>Metodo di Pagamento:</strong> PayPal</p>
                    <p><strong>Totale:</strong> <span className="font-bold text-[#228B22]">€58.10</span></p>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-bold text-[#228B22] mb-3">Spedizione</h3>
                  <div className="space-y-2 text-gray-700">
                    <p><strong>Indirizzo:</strong><br />
                    Mario Rossi<br />
                    Via Roma 123<br />
                    20100 Milano (MI)</p>
                    <p><strong>Consegna Stimata:</strong> {estimatedDelivery}</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* What Happens Next */}
          <Card className="mb-8">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-[#1C1C1C] mb-6">Cosa Succede Ora?</h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#228B22] rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#1C1C1C] mb-2">1. Conferma via Email</h3>
                    <p className="text-gray-600">
                      Riceverai una email di conferma con tutti i dettagli del tuo ordine 
                      e le istruzioni per il tracking.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#228B22] rounded-full flex items-center justify-center flex-shrink-0">
                    <Package className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#1C1C1C] mb-2">2. Preparazione Ordine</h3>
                    <p className="text-gray-600">
                      Il nostro team preparerà i tuoi prodotti BBQ con la massima cura, 
                      confezionandoli in packaging refrigerato.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#228B22] rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#1C1C1C] mb-2">3. Spedizione e Consegna</h3>
                    <p className="text-gray-600">
                      Spediremo il tuo ordine entro 24 ore e lo riceverai in 24-48 ore 
                      mantenendo la catena del freddo.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Action Buttons */}
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Button className="bg-[#228B22] hover:bg-[#32CD32] text-white px-8 py-3">
              <Download className="h-4 w-4 mr-2" />
              Scarica Ricevuta
            </Button>
            
            <Link to="/shop/prodotti">
              <Button variant="outline" className="border-[#228B22] text-[#228B22] px-8 py-3">
                Continua lo Shopping
              </Button>
            </Link>
            
            <Link to="/">
              <Button variant="outline" className="border-[#8B2E2E] text-[#8B2E2E] px-8 py-3">
                Torna al Sito B2B
              </Button>
            </Link>
          </div>

          {/* Order Items Summary */}
          <Card className="mt-8">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-[#1C1C1C] mb-6">Prodotti Ordinati</h2>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center pb-4 border-b">
                  <div>
                    <p className="font-medium">Pulled Pork Classico</p>
                    <p className="text-sm text-gray-600">500g x 2</p>
                  </div>
                  <p className="font-bold">€25.00</p>
                </div>
                
                <div className="flex justify-between items-center pb-4 border-b">
                  <div>
                    <p className="font-medium">Costine BBQ</p>
                    <p className="text-sm text-gray-600">800g x 1</p>
                  </div>
                  <p className="font-bold">€18.90</p>
                </div>
                
                <div className="flex justify-between items-center pb-4 border-b">
                  <div>
                    <p className="font-medium">Pulled Beef</p>
                    <p className="text-sm text-gray-600">500g x 1</p>
                  </div>
                  <p className="font-bold">€16.20</p>
                </div>
                
                <div className="flex justify-between items-center pt-4">
                  <p className="text-xl font-bold">Totale (inclusa spedizione)</p>
                  <p className="text-xl font-bold text-[#228B22]">€58.10</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Support Info */}
          <div className="mt-12 text-center">
            <h3 className="font-bold text-[#1C1C1C] mb-4">Hai bisogno di aiuto?</h3>
            <div className="grid md:grid-cols-2 gap-6 max-w-lg mx-auto">
              <Card className="p-4">
                <h4 className="font-bold text-[#228B22] mb-2">Email</h4>
                <a href="mailto:info@houseofpulled.it" className="text-[#228B22] hover:underline">
                  info@houseofpulled.it
                </a>
              </Card>
              
              <Card className="p-4">
                <h4 className="font-bold text-[#228B22] mb-2">Telefono</h4>
                <a href="tel:+390357176614" className="text-[#228B22] hover:underline">
                  +39 035 7176614
                </a>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
