import { BentoGrid } from '@/components/base/bento-grid';
import { Cta } from '@/components/base/cta';
import { Features } from '@/components/base/features';
import { Hero } from '@/components/base/hero';
import { Testimonials } from '@/components/base/testimonials';

export default function Home() {
  return (
    <main>
      <Hero />
      <Features />
      <BentoGrid />
      <Testimonials />
      <Cta />
    </main>
  );
}
