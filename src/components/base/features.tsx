import {
  Coins,
  Kanban,
  ListNumbers,
  Package,
} from '@phosphor-icons/react/dist/ssr';

const features = [
  {
    name: 'Bestellungen im Griff',
    description:
      'Vergiss das Chaos in E-Mails und Plattformen. Verwalte all Deine Einkäufe – egal ob Amazon, eBay oder andere Händler – an einem Ort.',
    icon: ListNumbers,
  },
  {
    name: 'Verkäufe verwalten',
    description:
      'Von Käuferinfos bis hin zu Versanddetails: Halte alles fest und spare wertvolle Zeit. Perfekt für private und gewerbliche Verkäufe.',
    icon: Kanban,
  },
  {
    name: 'Finanzen verstehen',
    description:
      'Mit klaren Analysen weißt Du genau, wo Dein Geld bleibt und wie Du Deine Einnahmen steigern kannst.',
    icon: Coins,
  },
  {
    name: 'Pakete verfolgen',
    description:
      'Verfolge Deine Lieferungen in Echtzeit. Füge Tracking-Nummern hinzu und informiere Dich und Deine Käufer über den aktuellen Status',
    icon: Package,
  },
];

export function Features() {
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-5">
          <h2 className="col-span-2 text-pretty text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
            Alles, was Du brauchst, an einem Ort.
          </h2>
          <dl className="col-span-3 grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2">
            {features.map((feature) => (
              <div key={feature.name}>
                <dt className="text-base/7 font-semibold text-foreground">
                  <div className="mb-6 flex size-10 items-center justify-center rounded-lg bg-primary">
                    <feature.icon
                      aria-hidden="true"
                      className="size-6 text-white"
                      weight="duotone"
                    />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-1 text-base/7 text-foreground/80">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
