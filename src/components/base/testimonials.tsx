const testimonials = [
  {
    body: 'Seit ich diese App benutze, habe ich endlich einen Überblick über meine Verkäufe. Einfach genial!',
    author: {
      name: 'Leslie Alexander',
      handle: 'lesliealexander',
      imageUrl:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  {
    body: 'Ich kann alles an einem Ort organisieren. Kein Chaos mehr mit zig Plattformen!',
    author: {
      name: 'Michael T.',
      handle: 'michaelt',
      imageUrl:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  {
    body: 'Die Analysefunktionen sind ein Gamechanger. Ich weiß genau, wo mein Geld bleibt.',
    author: {
      name: 'Julia K.',
      handle: 'julia_k',
      imageUrl:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  // More testimonials...
];

export function Testimonials() {
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base/7 font-semibold text-primary">
            Kundenstimmen
          </h2>
          <p className="mt-2 text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
            Das sagen unsere Nutzer
          </p>
        </div>
        <div className="mx-auto mt-16 flow-root max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none">
          <div className="-mt-8 sm:-mx-4 sm:columns-2 sm:text-[0] lg:columns-3">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.author.handle}
                className="pt-8 sm:inline-block sm:w-full sm:px-4"
              >
                <figure className="rounded-2xl bg-background-card p-8 text-sm/6">
                  <blockquote className="text-foreground">
                    <p>{`“${testimonial.body}”`}</p>
                  </blockquote>
                  <figcaption className="mt-6 flex items-center gap-x-4">
                    <img
                      alt=""
                      src={testimonial.author.imageUrl}
                      className="size-10 rounded-full bg-background-card"
                    />
                    <div>
                      <div className="font-semibold text-foreground/90">
                        {testimonial.author.name}
                      </div>
                      <div className="text-foreground/60">{`@${testimonial.author.handle}`}</div>
                    </div>
                  </figcaption>
                </figure>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
