
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Clock, Shield, Users } from "lucide-react";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#1C1C1C] to-[#8B2E2E] text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-light mb-6">Chi Siamo</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto font-light">
            Dal 2021 portiamo la tradizione del BBQ americano in Italia con passione, 
            qualità e rispetto per l'arte dell'affumicatura
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-light text-[#1C1C1C] mb-6">La Nostra Storia</h2>
              <p className="text-gray-700 text-lg mb-6 font-light">
                House of Pulled nasce nel 2021 dalla passione per il BBQ americano e la volontà 
                di portare in Italia i veri sapori della tradizione "low & slow".
              </p>
              <p className="text-gray-700 text-lg mb-6 font-light">
                Nel 2022 abbiamo ottenuto la certificazione CE, diventando un punto di riferimento 
                per ristoranti, pub e food truck che vogliono offrire ai propri clienti 
                prodotti BBQ di altissima qualità.
              </p>
              <p className="text-gray-700 text-lg font-light">
                Oggi serviamo oltre 200 locali in tutta Italia, mantenendo sempre 
                la nostra filosofia: qualità artigianale, zero conservanti, 
                massimo rispetto per la materia prima.
              </p>
            </div>
            <div className="bg-gray-100 rounded-lg p-8">
              <img 
                src="/placeholder.svg" 
                alt="House of Pulled laboratorio"
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-light text-[#1C1C1C] mb-4">Visione e Missione</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-2 border-[#8B2E2E]">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-medium text-[#8B2E2E] mb-4">La Nostra Visione</h3>
                <p className="text-gray-700 text-lg font-light">
                  Diventare il punto di riferimento europeo per il BBQ artigianale, 
                  portando l'autentica tradizione americana nelle cucine professionali italiane.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-2 border-[#8B2E2E]">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-medium text-[#8B2E2E] mb-4">La Nostra Missione</h3>
                <p className="text-gray-700 text-lg font-light">
                  Offrire prodotti BBQ di qualità superiore, realizzati con tecniche 
                  artigianali e ingredienti selezionati, per elevare l'esperienza culinaria.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-light text-[#1C1C1C] mb-4">I Nostri Valori</h2>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#8B2E2E] rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-medium text-[#1C1C1C] mb-2">Qualità</h3>
              <p className="text-gray-600 font-light">
                Ingredienti selezionati e processi artigianali per risultati eccellenti
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-[#8B2E2E] rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-medium text-[#1C1C1C] mb-2">Tradizione</h3>
              <p className="text-gray-600 font-light">
                Rispetto per le tecniche tradizionali del BBQ americano
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-[#8B2E2E] rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-medium text-[#1C1C1C] mb-2">Sicurezza</h3>
              <p className="text-gray-600 font-light">
                Certificazioni CE e HACCP per garantire massima sicurezza alimentare
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-[#8B2E2E] rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-medium text-[#1C1C1C] mb-2">Partnership</h3>
              <p className="text-gray-600 font-light">
                Collaborazione stretta con ristoratori per soluzioni personalizzate
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#8B2E2E] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-light mb-6">
            Vuoi scoprire di più sui nostri prodotti?
          </h2>
          <p className="text-xl mb-8 font-light">
            Contatta il nostro team per una consulenza personalizzata
          </p>
          
          <div className="flex flex-col md:flex-row gap-6 justify-center">
            <Link to="/contatti">
              <Button size="lg" className="bg-white text-[#8B2E2E] hover:bg-gray-100 px-8 py-4 font-light">
                Contattaci
              </Button>
            </Link>
            <Link to="/catalogo-b2b">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-[#8B2E2E] px-8 py-4 font-light">
                Sfoglia il Catalogo
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
