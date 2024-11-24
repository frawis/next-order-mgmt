import { Footer } from '@/components/base/footer';
import { PublicNavbar } from '@/components/layout/public-navbar';

export default function PublicPageLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="min-h-dvh flex flex-col">
      <header className="sticky top-0 inset-x-0 bg-background/90 backdrop-blur-md z-40">
        <div className="px-4">
          <PublicNavbar />
        </div>
      </header>
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
