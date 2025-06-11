
import { Card, CardContent } from "@/components/ui/card";

export default function Terms() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <Card>
            <CardContent className="p-8">
              <h1 className="text-4xl font-bold text-[#1C1C1C] mb-8 text-center">
                Termini e Condizioni
              </h1>
              
              <div className="prose max-w-none">
                <div className="mb-8">
                  <p className="text-gray-600 text-center">
                    Ultimo aggiornamento: {new Date().toLocaleDateString('it-IT')}
                  </p>
                </div>

                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-[#8B2E2E] mb-4">1. Informazioni Generali</h2>
                  <p className="text-gray-700 mb-4">
                    I presenti Termini e Condizioni disciplinano l'utilizzo del sito web e dei 
                    servizi offerti da House of Pulled, con sede in Via Giacomo Matteotti 17/C, 
                    24050 Grassobbio (BG), Italia.
                  </p>
                  <div className="bg-gray-100 p-4 rounded-lg">
                    <p className="text-gray-700">
                      <strong>Ragione Sociale:</strong> House of Pulled<br />
                      <strong>Indirizzo:</strong> Via Giacomo Matteotti 17/C, 24050 Grassobbio (BG)<br />
                      <strong>Email:</strong> info@houseofpulled.it<br />
                      <strong>Telefono:</strong> +39 035 7176614<br />
                      <strong>Sito Web:</strong> www.houseofpulled.it
                    </p>
                  </div>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-[#8B2E2E] mb-4">2. Definizioni</h2>
                  <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                    <li><strong>"Sito":</strong> il sito web www.houseofpulled.it</li>
                    <li><strong>"Servizi":</strong> tutti i servizi offerti tramite il Sito</li>
                    <li><strong>"Utente":</strong> chiunque acceda e utilizzi il Sito</li>
                    <li><strong>"Cliente":</strong> chi effettua acquisti o richieste tramite il Sito</li>
                    <li><strong>"Prodotti":</strong> i prodotti BBQ offerti da House of Pulled</li>
                    <li><strong>"B2B":</strong> servizi rivolti ad aziende e professionisti</li>
                    <li><strong>"B2C":</strong> servizi rivolti a consumatori privati</li>
                  </ul>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-[#8B2E2E] mb-4">3. Accettazione dei Termini</h2>
                  <p className="text-gray-700 mb-4">
                    L'utilizzo del Sito implica l'accettazione integrale di questi Termini e Condizioni. 
                    Se non accetti questi termini, non utilizzare il Sito.
                  </p>
                  <p className="text-gray-700">
                    L'accesso e l'uso continuato del Sito costituisce accettazione di eventuali 
                    modifiche ai presenti Termini.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-[#8B2E2E] mb-4">4. Descrizione dei Servizi</h2>
                  <h3 className="text-xl font-semibold text-[#1C1C1C] mb-3">4.1 Servizi B2B</h3>
                  <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                    <li>Vendita di prodotti BBQ a ristoranti, pub e food service</li>
                    <li>Consulenza culinaria e supporto tecnico</li>
                    <li>Sviluppo di ricette personalizzate</li>
                    <li>Formazione del personale di cucina</li>
                  </ul>

                  <h3 className="text-xl font-semibold text-[#1C1C1C] mb-3">4.2 Servizi B2C</h3>
                  <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                    <li>Vendita online di prodotti BBQ a consumatori finali</li>
                    <li>Spedizione a domicilio</li>
                    <li>Assistenza clienti per uso domestico</li>
                  </ul>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-[#8B2E2E] mb-4">5. Processo di Ordinazione</h2>
                  <h3 className="text-xl font-semibold text-[#1C1C1C] mb-3">5.1 Ordini B2C (Shop Online)</h3>
                  <ol className="list-decimal list-inside text-gray-700 mb-4 space-y-2">
                    <li>Selezione prodotti dal catalogo online</li>
                    <li>Aggiunta al carrello e revisione ordine</li>
                    <li>Inserimento dati di spedizione e fatturazione</li>
                    <li>Scelta metodo di pagamento</li>
                    <li>Conferma ordine e pagamento</li>
                    <li>Ricevimento email di conferma</li>
                  </ol>

                  <h3 className="text-xl font-semibold text-[#1C1C1C] mb-3">5.2 Ordini B2B</h3>
                  <ol className="list-decimal list-inside text-gray-700 mb-4 space-y-2">
                    <li>Richiesta informazioni tramite form contatti</li>
                    <li>Consultazione commerciale personalizzata</li>
                    <li>Invio preventivo dettagliato</li>
                    <li>Conferma ordine e condizioni commerciali</li>
                    <li>Fatturazione secondo termini concordati</li>
                  </ol>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-[#8B2E2E] mb-4">6. Prezzi e Pagamenti</h2>
                  <h3 className="text-xl font-semibold text-[#1C1C1C] mb-3">6.1 Prezzi B2C</h3>
                  <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                    <li>I prezzi sono espressi in Euro, IVA inclusa</li>
                    <li>I prezzi possono variare senza preavviso</li>
                    <li>Il prezzo applicato è quello vigente al momento dell'ordine</li>
                  </ul>

                  <h3 className="text-xl font-semibold text-[#1C1C1C] mb-3">6.2 Prezzi B2B</h3>
                  <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                    <li>Prezzi personalizzati in base a volumi e condizioni</li>
                    <li>Listini dedicati forniti su richiesta</li>
                    <li>Termini di pagamento concordati contrattualmente</li>
                  </ul>

                  <h3 className="text-xl font-semibold text-[#1C1C1C] mb-3">6.3 Metodi di Pagamento</h3>
                  <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                    <li><strong>B2C:</strong> PayPal, Carte di credito (prossimamente)</li>
                    <li><strong>B2B:</strong> Bonifico bancario, termini di pagamento personalizzati</li>
                  </ul>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-[#8B2E2E] mb-4">7. Spedizioni e Consegne</h2>
                  <h3 className="text-xl font-semibold text-[#1C1C1C] mb-3">7.1 Modalità di Spedizione</h3>
                  <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                    <li>Spedizione refrigerata per mantenere la catena del freddo</li>
                    <li>Corriere espresso specializzato in prodotti alimentari</li>
                    <li>Tracking fornito per seguire la spedizione</li>
                  </ul>

                  <h3 className="text-xl font-semibold text-[#1C1C1C] mb-3">7.2 Tempi di Consegna</h3>
                  <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                    <li><strong>B2C:</strong> 24-48 ore lavorative dall'ordine</li>
                    <li><strong>B2B:</strong> secondo accordi commerciali specifici</li>
                    <li>Possibili ritardi durante festività o condizioni meteorologiche avverse</li>
                  </ul>

                  <h3 className="text-xl font-semibold text-[#1C1C1C] mb-3">7.3 Costi di Spedizione</h3>
                  <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                    <li><strong>B2C:</strong> Gratuita per ordini superiori a €50, altrimenti €6.90</li>
                    <li><strong>B2B:</strong> Secondo accordi commerciali</li>
                  </ul>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-[#8B2E2E] mb-4">8. Diritto di Recesso</h2>
                  <p className="text-gray-700 mb-4">
                    <strong>Importante:</strong> I prodotti alimentari freschi e deperibili non sono 
                    soggetti al diritto di recesso secondo l'art. 59 del Codice del Consumo.
                  </p>
                  <p className="text-gray-700 mb-4">
                    Tuttavia, garantiamo:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                    <li>Rimborso completo in caso di prodotti danneggiati durante il trasporto</li>
                    <li>Sostituzione gratuita per difetti di qualità</li>
                    <li>Assistenza clienti per qualsiasi problema</li>
                  </ul>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-[#8B2E2E] mb-4">9. Garanzie sui Prodotti</h2>
                  <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                    <li>Certificazione CE per tutti i prodotti</li>
                    <li>Conformità agli standard HACCP</li>
                    <li>Durata di conservazione di 70 giorni sottovuoto</li>
                    <li>Tracciabilità completa delle materie prime</li>
                    <li>Controlli di qualità in ogni fase di produzione</li>
                  </ul>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-[#8B2E2E] mb-4">10. Responsabilità</h2>
                  <h3 className="text-xl font-semibold text-[#1C1C1C] mb-3">10.1 Limitazioni di Responsabilità</h3>
                  <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                    <li>La responsabilità è limitata al valore dell'ordine</li>
                    <li>Non ci assumiamo responsabilità per danni indiretti</li>
                    <li>Le informazioni sul sito sono fornite "così come sono"</li>
                  </ul>

                  <h3 className="text-xl font-semibold text-[#1C1C1C] mb-3">10.2 Conservazione e Utilizzo</h3>
                  <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                    <li>Il cliente è responsabile della corretta conservazione dei prodotti</li>
                    <li>Seguire le istruzioni di conservazione fornite</li>
                    <li>Verificare le date di scadenza prima del consumo</li>
                  </ul>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-[#8B2E2E] mb-4">11. Proprietà Intellettuale</h2>
                  <p className="text-gray-700 mb-4">
                    Tutti i contenuti del sito (testi, immagini, loghi, ricette, processi produttivi) 
                    sono protetti da diritti d'autore e proprietà intellettuale di House of Pulled.
                  </p>
                  <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                    <li>È vietata la riproduzione non autorizzata</li>
                    <li>È vietato l'uso commerciale senza consenso</li>
                    <li>Le ricette e i processi sono segreti commerciali</li>
                  </ul>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-[#8B2E2E] mb-4">12. Privacy e Dati Personali</h2>
                  <p className="text-gray-700 mb-4">
                    Il trattamento dei dati personali è disciplinato dalla nostra Privacy Policy, 
                    che forma parte integrante di questi Termini e Condizioni.
                  </p>
                  <p className="text-gray-700">
                    Utilizziamo i dati raccolti esclusivamente per fornire i servizi richiesti 
                    e in conformità al GDPR.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-[#8B2E2E] mb-4">13. Modifiche ai Termini</h2>
                  <p className="text-gray-700 mb-4">
                    Ci riserviamo il diritto di modificare questi Termini e Condizioni in qualsiasi 
                    momento. Le modifiche saranno pubblicate sul sito e entreranno in vigore 
                    immediatamente.
                  </p>
                  <p className="text-gray-700">
                    L'uso continuato del sito dopo le modifiche costituisce accettazione dei nuovi termini.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-[#8B2E2E] mb-4">14. Risoluzione delle Controversie</h2>
                  <p className="text-gray-700 mb-4">
                    Per qualsiasi controversia relativa all'interpretazione o esecuzione dei presenti 
                    Termini sarà competente il Foro di Bergamo.
                  </p>
                  <p className="text-gray-700 mb-4">
                    Prima di ricorrere alle vie legali, ci impegniamo a cercare una soluzione 
                    amichevole attraverso il nostro servizio clienti.
                  </p>
                  <h3 className="text-xl font-semibold text-[#1C1C1C] mb-3">14.1 Risoluzione Alternativa (ODR)</h3>
                  <p className="text-gray-700">
                    Per i consumatori UE è disponibile la piattaforma ODR della Commissione Europea 
                    per la risoluzione online delle controversie.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-[#8B2E2E] mb-4">15. Contatti e Assistenza</h2>
                  <p className="text-gray-700 mb-4">
                    Per qualsiasi domanda sui presenti Termini e Condizioni o per assistenza:
                  </p>
                  <div className="bg-gray-100 p-4 rounded-lg">
                    <p className="text-gray-700">
                      <strong>House of Pulled</strong><br />
                      Via Giacomo Matteotti 17/C<br />
                      24050 Grassobbio (BG), Italia<br />
                      Email: info@houseofpulled.it<br />
                      Tel: +39 035 7176614<br />
                      Orari: Lun-Ven 8:00-18:00, Sab 8:00-12:00
                    </p>
                  </div>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-[#8B2E2E] mb-4">16. Disposizioni Finali</h2>
                  <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                    <li>Se una clausola risulta invalida, le restanti rimangono valide</li>
                    <li>Questi Termini costituiscono l'accordo completo tra le parti</li>
                    <li>Il diritto applicabile è quello italiano</li>
                    <li>La lingua ufficiale è l'italiano</li>
                  </ul>
                </section>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
