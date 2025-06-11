
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Briefcase, Users } from "lucide-react";
import { Link } from "react-router-dom";

export default function Team() {
  const teamMembers = [
    {
      name: "Alberto Miccoli",
      role: "CEO & Founder",
      email: "alberto.miccoli@houseofpulled.it",
      description: "Visionario e appassionato di BBQ, Alberto ha fondato House of Pulled nel 2021 con l'obiettivo di portare l'autentica tradizione americana in Italia.",
      image: "/placeholder.svg"
    },
    {
      name: "Andrea Maffeis",
      role: "Head of Production",
      email: "andrea.maffeis@houseofpulled.it",
      description: "Responsabile della produzione, Andrea garantisce che ogni prodotto rispetti i più alti standard di qualità e sicurezza alimentare.",
      image: "/placeholder.svg"
    },
    {
      name: "David De Waele",
      role: "Chef",
      email: "chef@houseofpulled.it",
      description: "Maestro dell'affumicatura, David porta anni di esperienza nel BBQ americano per creare ricette uniche e autentiche.",
      image: "/placeholder.svg"
    },
    {
      name: "Ignazio Locatelli",
      role: "Investor & Founder",
      email: "ignazio@houseofpulled.it",
      description: "Co-fondatore e investitore, Ignazio supporta la crescita strategica dell'azienda e lo sviluppo di nuovi mercati.",
      image: "/placeholder.svg"
    },
    {
      name: "Claudio Giovelli",
      role: "Senior Seller",
      email: "cla.gio.hop@gmail.com",
      description: "Esperto commerciale con anni di esperienza nel settore food service, Claudio gestisce le relazioni con i nostri partner B2B.",
      image: "/placeholder.svg"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#1C1C1C] to-[#8B2E2E] text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Il Nostro Team</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Un gruppo di professionisti appassionati che porta avanti la tradizione del BBQ 
            con competenza, dedizione e amore per la qualità
          </p>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="border-2 border-[#8B2E2E] hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-[#8B2E2E] mb-2">{member.name}</h3>
                  <p className="text-[#1C1C1C] font-semibold mb-3">{member.role}</p>
                  <p className="text-gray-700 text-sm mb-4 leading-relaxed">{member.description}</p>
                  <div className="flex items-center justify-center text-[#8B2E2E]">
                    <Mail className="h-4 w-4 mr-2" />
                    <a href={`mailto:${member.email}`} className="text-sm hover:underline">
                      {member.email}
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Recruitment Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#1C1C1C] mb-4">Unisciti al Nostro Team</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Siamo sempre alla ricerca di professionisti appassionati che vogliano 
              far parte della famiglia House of Pulled
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="text-center p-6">
              <div className="w-16 h-16 bg-[#8B2E2E] rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#1C1C1C] mb-3">Agenti di Vendita</h3>
              <p className="text-gray-600 mb-4">
                Cerchiamo agenti commerciali per espandere la nostra presenza in tutta Italia
              </p>
              <p className="text-sm text-[#8B2E2E] font-semibold">
                Zone disponibili: Nord, Centro e Sud Italia
              </p>
            </Card>

            <Card className="text-center p-6">
              <div className="w-16 h-16 bg-[#8B2E2E] rounded-full flex items-center justify-center mx-auto mb-4">
                <Briefcase className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#1C1C1C] mb-3">Consulenti Food Service</h3>
              <p className="text-gray-600 mb-4">
                Professionisti con esperienza nel settore Ho.Re.Ca per supportare i nostri clienti
              </p>
              <p className="text-sm text-[#8B2E2E] font-semibold">
                Esperienza richiesta: minimo 3 anni
              </p>
            </Card>

            <Card className="text-center p-6">
              <div className="w-16 h-16 bg-[#8B2E2E] rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#1C1C1C] mb-3">Altre Posizioni</h3>
              <p className="text-gray-600 mb-4">
                Invia il tuo CV per essere considerato per future opportunità
              </p>
              <p className="text-sm text-[#8B2E2E] font-semibold">
                Sempre interessati a nuovi talenti
              </p>
            </Card>
          </div>

          <div className="text-center">
            <h3 className="text-2xl font-bold text-[#1C1C1C] mb-4">Interessato a lavorare con noi?</h3>
            <p className="text-gray-600 mb-8">
              Invia il tuo CV e una lettera di presentazione. Ti contatteremo per valutare insieme le opportunità.
            </p>
            <Link to="/contatti">
              <Button size="lg" className="bg-[#8B2E2E] hover:bg-[#A73939] text-white px-8 py-4">
                Invia la tua Candidatura
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 bg-[#8B2E2E] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Vuoi parlare direttamente con il team?</h2>
          <p className="text-xl mb-8">
            I nostri esperti sono a tua disposizione per qualsiasi domanda sui nostri prodotti e servizi
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div>
              <h4 className="font-bold mb-2">Commerciale</h4>
              <p className="text-gray-200">Claudio Giovelli</p>
              <a href="mailto:cla.gio.hop@gmail.com" className="text-white hover:underline">
                cla.gio.hop@gmail.com
              </a>
            </div>
            <div>
              <h4 className="font-bold mb-2">Produzione</h4>
              <p className="text-gray-200">Andrea Maffeis</p>
              <a href="mailto:andrea.maffeis@houseofpulled.it" className="text-white hover:underline">
                andrea.maffeis@houseofpulled.it
              </a>
            </div>
            <div>
              <h4 className="font-bold mb-2">Direzione</h4>
              <p className="text-gray-200">Alberto Miccoli</p>
              <a href="mailto:alberto.miccoli@houseofpulled.it" className="text-white hover:underline">
                alberto.miccoli@houseofpulled.it
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
