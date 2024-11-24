import Link from 'next/link';

export function Cta() {
  return (
    <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
          Bereit, smarter zu organisieren?
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-pretty text-lg/8 text-foreground/60">
          Hol Dir die volle Kontrolle über Deine Bestellungen und Verkäufe –
          einfacher, schneller, besser. Starte jetzt und mach den Unterschied.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link
            href="/registrieren"
            className="rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            Jetzt starten
          </Link>
          <Link
            href="/features"
            className="text-sm/6 font-semibold text-foreground/60 hover:text-foreground/80"
          >
            Mehr erfahren <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
