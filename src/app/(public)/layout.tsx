import { Logo } from '@/components/base/logo';
import { ThemeSwitcher } from '@/components/layout/theme-switcher';
import { SignedIn, SignedOut, SignInButton } from '@clerk/nextjs';
import Link from 'next/link';

export default function PublicPageLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <header className="border-b sticky top-0 inset-x-0 bg-background backdrop-blur-md">
        <div className="h-12 flex items-center px-2 gap-x-8">
          <Link href="/">
            <h1 className="inline-flex gap-x-1 items-center font-bold tracking-wide text-xl">
              <Logo className="size-10 text-primary" />
              Lieferblick
            </h1>
          </Link>
          <nav className="hidden md:flex md:gap-x-2">
            <Link href="/ueber-uns">Über uns</Link>
            <Link href="/kontakt">Kontakt</Link>
          </nav>
          <div className="ml-auto">
            <div className="flex items-center gap-x-4">
              <ThemeSwitcher />
              <SignedIn>
                <Link href="/dashboard">Dashboard</Link>
              </SignedIn>
              <SignedOut>
                <SignInButton>
                  <button>Jetzt ausprobieren</button>
                </SignInButton>
              </SignedOut>
            </div>
          </div>
        </div>
      </header>
      {children}
      <footer>
        <div>
          <Link href="/impressum">Impressum</Link>
          <Link href="/datenschutz">Datenschutz</Link>
        </div>
      </footer>
    </>
  );
}
