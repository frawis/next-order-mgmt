import { BentoGrid } from '@/components/base/bento-grid';
import { Hero } from '@/components/base/hero';
import { Testimonials } from '@/components/base/testimonials';
import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <main>
      <Hero />

      <section>
        <div>
          <div>Icon</div>
          <h2>Bestellverwaltung</h2>
          <p>
            Füge Deine Einkäufe hinzu, tracke den Status und behalte den
            Überblick – egal ob von Amazon, eBay oder anderen Plattformen.
          </p>
        </div>
        <div>
          <div>Icon</div>
          <p>Verkaufsmanagement:</p>
          <p>
            Verfolge Deine Verkäufe, optimiere Deine Prozesse und speichere
            wichtige Daten wie Käuferinformationen und Versanddetails.
          </p>
        </div>
        <div>
          <div>Icon</div>
          <p>Analyse & Statistiken</p>
          <p>
            Verstehe Deine Ausgaben und Einnahmen mit übersichtlichen Grafiken
            und Berichten.
          </p>
        </div>
        <div>
          <div>Icon</div>
          <p>Versandtracking</p>
          <p>
            Verlinke Versandinformationen, verfolge den Status und informiere
            Deine Käufer über den Versand.
          </p>
        </div>
      </section>
      <section>
        <h2>Alles, was Du brauchst – auf einen Blick.</h2>
        <p>
          Mit unserem benutzerfreundlichen Interface findest Du alle
          Informationen an einem Ort. Flexibel, übersichtlich und schnell
          zugänglich.
        </p>
        <div>
          <div>
            <h3>Einheitliche Übersicht</h3>
            <p>
              Verwalte Bestellungen und Verkäufe in einer einheitlichen
              Oberfläche.
            </p>
          </div>
          <div>
            <h3>Individuelle Anpassung</h3>
            <p>
              Passe die Plattform an Deine Bedürfnisse an – ob privat oder
              geschäftlich.
            </p>
          </div>
          <div>
            <h3>Sichere Datenhaltung</h3>
            <p>Deine Daten sind geschützt und jederzeit zugänglich.</p>
          </div>
          <div>
            <h3>Multiplattform-Integration</h3>
            <p>Egal ob Amazon, eBay oder Vinted – alles in einer App.</p>
          </div>
        </div>
      </section>
      <BentoGrid />
      <Testimonials />
      <section>
        <h2>Bist Du bereit für mehr Übersicht?</h2>
        <p>Registriere Dich kostenlos und starte noch heute.</p>
        <Button href="/registrieren">Jetzt starten</Button>
      </section>
    </main>
  );
}
