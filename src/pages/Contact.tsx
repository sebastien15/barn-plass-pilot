
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Phone, Mail, Clock, Building2, User } from "lucide-react";

export default function Contact() {
  const [formType, setFormType] = useState<"b2b" | "general">("b2b");

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#1C1C1C] to-[#8B2E2E] text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contatti</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Siamo qui per aiutarti. Contatta il nostro team per informazioni commerciali, 
            supporto tecnico o qualsiasi domanda sui nostri prodotti BBQ
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <Card className="text-center p-6 border-2 border-[#8B2E2E]">
              <div className="w-16 h-16 bg-[#8B2E2E] rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-bold text-[#1C1C1C] mb-2">Sede</h3>
              <p className="text-gray-600 text-sm">
                Via Giacomo Matteotti 17/C<br />
                24050 Grassobbio (BG)<br />
                Italia
              </p>
            </Card>

            <Card className="text-center p-6 border-2 border-[#8B2E2E]">
              <div className="w-16 h-16 bg-[#8B2E2E] rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-bold text-[#1C1C1C] mb-2">Telefono</h3>
              <p className="text-gray-600">
                <a href="tel:+390357176614" className="hover:text-[#8B2E2E] transition-colors">
                  +39 035 7176614
                </a>
              </p>
            </Card>

            <Card className="text-center p-6 border-2 border-[#8B2E2E]">
              <div className="w-16 h-16 bg-[#8B2E2E] rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-bold text-[#1C1C1C] mb-2">Email</h3>
              <p className="text-gray-600 text-sm">
                <a href="mailto:info@houseofpulled.it" className="hover:text-[#8B2E2E] transition-colors">
                  info@houseofpulled.it
                </a>
              </p>
            </Card>

            <Card className="text-center p-6 border-2 border-[#8B2E2E]">
              <div className="w-16 h-16 bg-[#8B2E2E] rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-bold text-[#1C1C1C] mb-2">Orari</h3>
              <p className="text-gray-600 text-sm">
                Lun-Ven: 8:00-18:00<br />
                Sab: 8:00-12:00<br />
                Dom: Chiuso
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Forms */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Form Type Selector */}
            <div className="flex justify-center mb-8">
              <div className="bg-white rounded-lg p-2 border-2 border-[#8B2E2E]">
                <Button
                  variant={formType === "b2b" ? "default" : "ghost"}
                  className={`${formType === "b2b" ? "bg-[#8B2E2E] text-white" : "text-[#8B2E2E]"} mr-2`}
                  onClick={() => setFormType("b2b")}
                >
                  <Building2 className="h-4 w-4 mr-2" />
                  Richiesta B2B
                </Button>
                <Button
                  variant={formType === "general" ? "default" : "ghost"}
                  className={`${formType === "general" ? "bg-[#8B2E2E] text-white" : "text-[#8B2E2E]"}`}
                  onClick={() => setFormType("general")}
                >
                  <User className="h-4 w-4 mr-2" />
                  Informazioni Generali
                </Button>
              </div>
            </div>

            {/* B2B Form */}
            {formType === "b2b" && (
              <Card className="border-2 border-[#8B2E2E]">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-[#8B2E2E] mb-6 text-center">
                    Richiesta Commerciale B2B
                  </h2>
                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="company">Nome Azienda *</Label>
                        <Input id="company" placeholder="La tua azienda" className="border-[#8B2E2E]" />
                      </div>
                      <div>
                        <Label htmlFor="vat">Partita IVA</Label>
                        <Input id="vat" placeholder="IT00000000000" className="border-[#8B2E2E]" />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="contact-name">Nome Referente *</Label>
                        <Input id="contact-name" placeholder="Il tuo nome" className="border-[#8B2E2E]" />
                      </div>
                      <div>
                        <Label htmlFor="role">Ruolo</Label>
                        <Input id="role" placeholder="Titolare, Chef, Manager..." className="border-[#8B2E2E]" />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="email">Email Aziendale *</Label>
                        <Input id="email" type="email" placeholder="info@tuaazienda.it" className="border-[#8B2E2E]" />
                      </div>
                      <div>
                        <Label htmlFor="phone">Telefono *</Label>
                        <Input id="phone" placeholder="+39 000 0000000" className="border-[#8B2E2E]" />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="business-type">Tipo di Attività *</Label>
                        <Select>
                          <SelectTrigger className="border-[#8B2E2E]">
                            <SelectValue placeholder="Seleziona..." />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="restaurant">Ristorante</SelectItem>
                            <SelectItem value="pub">Pub/Birreria</SelectItem>
                            <SelectItem value="food-truck">Food Truck</SelectItem>
                            <SelectItem value="catering">Catering</SelectItem>
                            <SelectItem value="hotel">Hotel/Resort</SelectItem>
                            <SelectItem value="other">Altro</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="location">Zona di Consegna</Label>
                        <Input id="location" placeholder="Città/Regione" className="border-[#8B2E2E]" />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="monthly-volume">Volume Mensile Stimato</Label>
                        <Select>
                          <SelectTrigger className="border-[#8B2E2E]">
                            <SelectValue placeholder="Seleziona..." />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="small">Meno di 50 kg/mese</SelectItem>
                            <SelectItem value="medium">50-150 kg/mese</SelectItem>
                            <SelectItem value="large">150-500 kg/mese</SelectItem>
                            <SelectItem value="xl">Oltre 500 kg/mese</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="budget">Budget Indicativo Mensile</Label>
                        <Select>
                          <SelectTrigger className="border-[#8B2E2E]">
                            <SelectValue placeholder="Seleziona..." />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="small">Fino a €500</SelectItem>
                            <SelectItem value="medium">€500 - €1.500</SelectItem>
                            <SelectItem value="large">€1.500 - €3.000</SelectItem>
                            <SelectItem value="xl">Oltre €3.000</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="products">Prodotti di Interesse</Label>
                      <Textarea 
                        id="products" 
                        placeholder="Specifica i prodotti che ti interessano e quantità indicative..."
                        className="border-[#8B2E2E]"
                        rows={3}
                      />
                    </div>

                    <div>
                      <Label htmlFor="message">Messaggio / Richieste Specifiche</Label>
                      <Textarea 
                        id="message" 
                        placeholder="Descrivi le tue esigenze, tempi di consegna preferiti, o qualsiasi altra informazione utile..."
                        className="border-[#8B2E2E]"
                        rows={4}
                      />
                    </div>

                    <div className="text-center">
                      <Button size="lg" className="bg-[#8B2E2E] hover:bg-[#A73939] text-white px-12 py-3">
                        Invia Richiesta B2B
                      </Button>
                      <p className="text-sm text-gray-600 mt-4">
                        Ti contatteremo entro 24 ore con listino prezzi e informazioni dettagliate
                      </p>
                    </div>
                  </form>
                </CardContent>
              </Card>
            )}

            {/* General Inquiry Form */}
            {formType === "general" && (
              <Card className="border-2 border-[#8B2E2E]">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-[#8B2E2E] mb-6 text-center">
                    Informazioni Generali
                  </h2>
                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="name">Nome *</Label>
                        <Input id="name" placeholder="Il tuo nome" className="border-[#8B2E2E]" />
                      </div>
                      <div>
                        <Label htmlFor="surname">Cognome *</Label>
                        <Input id="surname" placeholder="Il tuo cognome" className="border-[#8B2E2E]" />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="email-general">Email *</Label>
                        <Input id="email-general" type="email" placeholder="la-tua-email@esempio.it" className="border-[#8B2E2E]" />
                      </div>
                      <div>
                        <Label htmlFor="phone-general">Telefono</Label>
                        <Input id="phone-general" placeholder="+39 000 0000000" className="border-[#8B2E2E]" />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="subject">Oggetto</Label>
                      <Select>
                        <SelectTrigger className="border-[#8B2E2E]">
                          <SelectValue placeholder="Seleziona l'argomento..." />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="info">Informazioni sui prodotti</SelectItem>
                          <SelectItem value="collaboration">Collaborazioni</SelectItem>
                          <SelectItem value="careers">Opportunità di lavoro</SelectItem>
                          <SelectItem value="press">Richieste stampa</SelectItem>
                          <SelectItem value="other">Altro</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="message-general">Messaggio *</Label>
                      <Textarea 
                        id="message-general" 
                        placeholder="Scrivi il tuo messaggio..."
                        className="border-[#8B2E2E]"
                        rows={6}
                      />
                    </div>

                    <div className="text-center">
                      <Button size="lg" className="bg-[#8B2E2E] hover:bg-[#A73939] text-white px-12 py-3">
                        Invia Messaggio
                      </Button>
                      <p className="text-sm text-gray-600 mt-4">
                        Ti risponderemo il prima possibile
                      </p>
                    </div>
                  </form>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </section>

      {/* Team Contacts */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#1C1C1C] mb-4">Contatti Diretti</h2>
            <p className="text-xl text-gray-600">
              Per esigenze specifiche, puoi contattare direttamente i membri del nostro team
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="text-center p-6 border-2 border-[#8B2E2E]">
              <h3 className="font-bold text-[#8B2E2E] text-lg mb-2">Commerciale B2B</h3>
              <p className="text-[#1C1C1C] font-semibold mb-1">Claudio Giovelli</p>
              <p className="text-gray-600 text-sm mb-3">Senior Seller</p>
              <a 
                href="mailto:cla.gio.hop@gmail.com" 
                className="text-[#8B2E2E] hover:underline text-sm"
              >
                cla.gio.hop@gmail.com
              </a>
            </Card>

            <Card className="text-center p-6 border-2 border-[#8B2E2E]">
              <h3 className="font-bold text-[#8B2E2E] text-lg mb-2">Produzione</h3>
              <p className="text-[#1C1C1C] font-semibold mb-1">Andrea Maffeis</p>
              <p className="text-gray-600 text-sm mb-3">Head of Production</p>
              <a 
                href="mailto:andrea.maffeis@houseofpulled.it" 
                className="text-[#8B2E2E] hover:underline text-sm"
              >
                andrea.maffeis@houseofpulled.it
              </a>
            </Card>

            <Card className="text-center p-6 border-2 border-[#8B2E2E]">
              <h3 className="font-bold text-[#8B2E2E] text-lg mb-2">Direzione</h3>
              <p className="text-[#1C1C1C] font-semibold mb-1">Alberto Miccoli</p>
              <p className="text-gray-600 text-sm mb-3">CEO & Founder</p>
              <a 
                href="mailto:alberto.miccoli@houseofpulled.it" 
                className="text-[#8B2E2E] hover:underline text-sm"
              >
                alberto.miccoli@houseofpulled.it
              </a>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
