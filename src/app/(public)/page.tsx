import { BentoGrid } from '@/components/base/bento-grid';
import { Cta } from '@/components/base/cta';
import { Features } from '@/components/base/features';
import { Hero } from '@/components/base/hero';
import { Testimonials } from '@/components/base/testimonials';
import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <main>
      <Hero />
      <Features />

      {/* <section>
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
      </section> */}
      <BentoGrid />
      <Testimonials />
      <Cta />
    </main>
  );
}
