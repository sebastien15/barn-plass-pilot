
import { Card, CardContent } from "@/components/ui/card";

export default function Privacy() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <Card>
            <CardContent className="p-8">
              <h1 className="text-4xl font-bold text-[#1C1C1C] mb-8 text-center">
                Privacy Policy
              </h1>
              
              <div className="prose max-w-none">
                <div className="mb-8">
                  <p className="text-gray-600 text-center">
                    Ultimo aggiornamento: {new Date().toLocaleDateString('it-IT')}
                  </p>
                </div>

                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-[#8B2E2E] mb-4">1. Introduzione</h2>
                  <p className="text-gray-700 mb-4">
                    House of Pulled (di seguito "noi", "nostro" o "Società") rispetta la privacy 
                    dei nostri utenti e si impegna a proteggere le informazioni personali che ci 
                    vengono fornite. Questa Privacy Policy spiega come raccogliamo, utilizziamo, 
                    proteggiamo e condividiamo le informazioni quando utilizzate il nostro sito web 
                    e i nostri servizi.
                  </p>
                  <p className="text-gray-700">
                    <strong>Titolare del trattamento:</strong><br />
                    House of Pulled<br />
                    Via Giacomo Matteotti 17/C<br />
                    24050 Grassobbio (BG), Italia<br />
                    Email: info@houseofpulled.it<br />
                    Tel: +39 035 7176614
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-[#8B2E2E] mb-4">2. Informazioni che Raccogliamo</h2>
                  <h3 className="text-xl font-semibold text-[#1C1C1C] mb-3">2.1 Informazioni fornite volontariamente</h3>
                  <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                    <li>Nome e cognome</li>
                    <li>Indirizzo email</li>
                    <li>Numero di telefono</li>
                    <li>Indirizzo di spedizione e fatturazione</li>
                    <li>Ragione sociale e Partita IVA (per clienti B2B)</li>
                    <li>Informazioni sui pagamenti (gestite dai nostri partner di pagamento)</li>
                    <li>Preferenze e feedback sui prodotti</li>
                  </ul>

                  <h3 className="text-xl font-semibold text-[#1C1C1C] mb-3">2.2 Informazioni raccolte automaticamente</h3>
                  <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                    <li>Indirizzo IP e informazioni sul dispositivo</li>
                    <li>Tipo di browser e sistema operativo</li>
                    <li>Pagine visitate e tempo trascorso sul sito</li>
                    <li>Sorgente di traffico e pattern di navigazione</li>
                    <li>Cookie e tecnologie di tracciamento simili</li>
                  </ul>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-[#8B2E2E] mb-4">3. Come Utilizziamo le Informazioni</h2>
                  <p className="text-gray-700 mb-4">Utilizziamo le informazioni raccolte per:</p>
                  <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                    <li>Processare ed evadere gli ordini</li>
                    <li>Comunicare informazioni sui nostri prodotti e servizi</li>
                    <li>Fornire supporto clienti</li>
                    <li>Migliorare i nostri prodotti e servizi</li>
                    <li>Gestire programmi promozionali e marketing</li>
                    <li>Rispettare obblighi legali e normativi</li>
                    <li>Prevenire frodi e garantire la sicurezza</li>
                    <li>Analizzare le tendenze di utilizzo del sito web</li>
                  </ul>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-[#8B2E2E] mb-4">4. Base Giuridica per il Trattamento</h2>
                  <p className="text-gray-700 mb-4">
                    In conformità al GDPR, trattiamo i dati personali sulla base di:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                    <li><strong>Consenso:</strong> quando fornisci il consenso esplicito</li>
                    <li><strong>Esecuzione contrattuale:</strong> per processare ordini e fornire servizi</li>
                    <li><strong>Interesse legittimo:</strong> per migliorare servizi e comunicazioni di marketing</li>
                    <li><strong>Obbligo legale:</strong> per conformarci a normative fiscali e contabili</li>
                  </ul>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-[#8B2E2E] mb-4">5. Condivisione delle Informazioni</h2>
                  <p className="text-gray-700 mb-4">
                    Non vendiamo le tue informazioni personali. Possiamo condividere i dati con:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                    <li><strong>Fornitori di servizi:</strong> corrieri, payment processor, servizi IT</li>
                    <li><strong>Partner commerciali:</strong> solo per clienti B2B e con consenso</li>
                    <li><strong>Autorità legali:</strong> quando richiesto dalla legge</li>
                    <li><strong>Successori aziendali:</strong> in caso di fusione o acquisizione</li>
                  </ul>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-[#8B2E2E] mb-4">6. Cookie e Tecnologie di Tracciamento</h2>
                  <p className="text-gray-700 mb-4">
                    Utilizziamo i cookie per migliorare l'esperienza utente. I tipi di cookie utilizzati:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                    <li><strong>Cookie essenziali:</strong> necessari per il funzionamento del sito</li>
                    <li><strong>Cookie di prestazione:</strong> per analizzare l'utilizzo del sito</li>
                    <li><strong>Cookie di marketing:</strong> per personalizzare annunci e contenuti</li>
                    <li><strong>Cookie di preferenze:</strong> per ricordare le tue impostazioni</li>
                  </ul>
                  <p className="text-gray-700">
                    Puoi gestire le preferenze dei cookie attraverso le impostazioni del browser.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-[#8B2E2E] mb-4">7. I Tuoi Diritti</h2>
                  <p className="text-gray-700 mb-4">
                    In conformità al GDPR, hai i seguenti diritti:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                    <li><strong>Accesso:</strong> richiedere informazioni sui dati che trattiamo</li>
                    <li><strong>Rettifica:</strong> correggere dati inesatti o incompleti</li>
                    <li><strong>Cancellazione:</strong> richiedere la cancellazione dei tuoi dati</li>
                    <li><strong>Limitazione:</strong> limitare il trattamento in certe circostanze</li>
                    <li><strong>Portabilità:</strong> ricevere i dati in formato strutturato</li>
                    <li><strong>Opposizione:</strong> opporti al trattamento per marketing diretto</li>
                    <li><strong>Reclamo:</strong> presentare reclamo all'autorità di controllo</li>
                  </ul>
                  <p className="text-gray-700">
                    Per esercitare questi diritti, contattaci all'indirizzo: 
                    <a href="mailto:privacy@houseofpulled.it" className="text-[#8B2E2E] hover:underline">
                      privacy@houseofpulled.it
                    </a>
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-[#8B2E2E] mb-4">8. Sicurezza dei Dati</h2>
                  <p className="text-gray-700 mb-4">
                    Implementiamo misure di sicurezza appropriate per proteggere i tuoi dati:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                    <li>Crittografia SSL per tutte le trasmissioni di dati</li>
                    <li>Accesso limitato ai dati personali</li>
                    <li>Formazione del personale sulla privacy</li>
                    <li>Regolari audit di sicurezza</li>
                    <li>Backup sicuri e procedimenti di disaster recovery</li>
                  </ul>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-[#8B2E2E] mb-4">9. Conservazione dei Dati</h2>
                  <p className="text-gray-700 mb-4">
                    Conserviamo i dati personali per il tempo necessario a:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                    <li>Fornire i servizi richiesti</li>
                    <li>Rispettare obblighi legali (es. fatturazione: 10 anni)</li>
                    <li>Risolvere disputes legali</li>
                    <li>Mantenere registri per finalità commerciali legittime</li>
                  </ul>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-[#8B2E2E] mb-4">10. Trasferimenti Internazionali</h2>
                  <p className="text-gray-700 mb-4">
                    I dati possono essere trasferiti a fornitori di servizi nell'UE o in paesi 
                    con decisioni di adeguatezza. Per trasferimenti in paesi terzi, utilizziamo 
                    clausole contrattuali standard approvate dalla Commissione Europea.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-[#8B2E2E] mb-4">11. Minori</h2>
                  <p className="text-gray-700 mb-4">
                    I nostri servizi non sono destinati a persone sotto i 16 anni. Non raccogliamo 
                    consapevolmente informazioni personali da minori di 16 anni senza il consenso 
                    dei genitori.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-[#8B2E2E] mb-4">12. Modifiche alla Privacy Policy</h2>
                  <p className="text-gray-700 mb-4">
                    Possiamo aggiornare questa Privacy Policy per riflettere cambiamenti nelle nostre 
                    pratiche o per altri motivi operativi, legali o normativi. Ti informeremo di 
                    eventuali modifiche significative tramite email o avviso sul sito web.
                  </p>
                </section>

                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-[#8B2E2E] mb-4">13. Contatti</h2>
                  <p className="text-gray-700 mb-4">
                    Per domande su questa Privacy Policy o sulle nostre pratiche di privacy:
                  </p>
                  <div className="bg-gray-100 p-4 rounded-lg">
                    <p className="text-gray-700">
                      <strong>House of Pulled</strong><br />
                      Via Giacomo Matteotti 17/C<br />
                      24050 Grassobbio (BG), Italia<br />
                      Email: privacy@houseofpulled.it<br />
                      Tel: +39 035 7176614
                    </p>
                  </div>
                </section>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
