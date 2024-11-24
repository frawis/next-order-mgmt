import { CaretRight } from '@phosphor-icons/react/dist/ssr';
import { Logo } from './logo';

export function Hero() {
  return (
    <div className="relative isolate overflow-hidden bg-background">
      <svg
        aria-hidden="true"
        className="absolute inset-0 -z-10 size-full stroke-shade [mask-image:radial-gradient(100%_100%_at_top_right,black,transparent)] dark:stroke-white/10 dark:[mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
      >
        <defs>
          <pattern
            x="50%"
            y={-1}
            id="983e3e4c-de6d-4c3f-8d64-b9761d1534cc"
            width={200}
            height={200}
            patternUnits="userSpaceOnUse"
          >
            <path d="M.5 200V.5H200" fill="none" />
          </pattern>
        </defs>
        <svg
          x="50%"
          y={-1}
          className="overflow-visible fill-gray-200/30 dark:fill-gray-800/20"
        >
          <path
            d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
            strokeWidth={0}
          />
        </svg>
        <rect
          fill="url(#983e3e4c-de6d-4c3f-8d64-b9761d1534cc)"
          width="100%"
          height="100%"
          strokeWidth={0}
        />
      </svg>
      <div
        aria-hidden="true"
        className="absolute left-[calc(50%-4rem)] top-10 -z-10 transform-gpu blur-3xl sm:left-[calc(50%-18rem)] lg:left-48 lg:top-[calc(50%-30rem)] xl:left-[calc(50%-24rem)]"
      >
        <div
          style={{
            clipPath:
              'polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)',
          }}
          className="aspect-[1108/632] w-[69.25rem] bg-gradient-to-r from-[#80caff] to-[#4f46e5] opacity-35 dark:opacity-20"
        />
      </div>
      <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 lg:py-40">
        <div className="mx-auto max-w-2xl shrink-0 lg:mx-0 lg:pt-8">
          <Logo className="h-16 text-primary" />
          <div className="mt-24 sm:mt-32 lg:mt-16">
            <a href="#" className="inline-flex space-x-6">
              <span className="rounded-full bg-indigo-500/10 px-3 py-1 text-sm/6 font-semibold text-primary ring-1 ring-inset ring-indigo-500/20">
                What's new
              </span>
              <span className="inline-flex items-center space-x-2 text-sm/6 font-medium text-gray-300">
                <span>Just shipped v1.0</span>
                <CaretRight
                  aria-hidden="true"
                  className="size-5 text-primary-light"
                  weight="duotone"
                />
              </span>
            </a>
          </div>
          <h1 className="mt-10 text-pretty text-5xl font-semibold tracking-tight text-foreground sm:text-7xl">
            Verliere nie wieder den Überblick über Deine Bestellungen und
            Verkäufe.
          </h1>
          <p className="mt-8 text-pretty text-lg font-medium text-gray-400 sm:text-xl/8">
            Organisiere, analysiere und verfolge alle Deine Transaktionen –
            einfach und effizient. Alles an einem Ort.
          </p>
          <div className="mt-10 flex items-center gap-x-6">
            <a
              href="#"
              className="rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
            >
              Jetzt kostenlos starten
            </a>
            <a href="#" className="text-sm/6 font-semibold text-white">
              Mehr erfahren <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
        <div className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-0 lg:max-w-none lg:flex-none xl:ml-32">
          <div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
            <img
              alt="App screenshot"
              src="https://tailwindui.com/plus/img/component-images/dark-project-app-screenshot.png"
              width={2432}
              height={1442}
              className="w-[76rem] rounded-md bg-white/5 shadow-2xl ring-1 ring-white/10"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
