'use client';

import { SignedIn, SignedOut, SignInButton } from '@clerk/nextjs';
import {
  Navbar,
  NavbarDivider,
  NavbarItem,
  NavbarSection,
  NavbarSpacer,
} from '../ui/navbar';
import { Logo } from '../base/logo';
import Link from 'next/link';
import { ThemeSwitcher } from './theme-switcher';

export function PublicNavbar() {
  return (
    <Navbar>
      <Link href="/">
        <h1 className="inline-flex gap-x-1 items-center font-bold tracking-wide text-xl">
          <Logo className="size-10 text-primary" />
          Lieferblick
        </h1>
      </Link>
      <NavbarSpacer />
      <NavbarSection className="max-lg:hidden">
        <NavbarItem href="/features">Features</NavbarItem>
        <NavbarItem href="/ueber-uns">Über uns</NavbarItem>
        <NavbarItem href="/blog">Blog</NavbarItem>
        <NavbarItem href="/hilfe">Hilfe</NavbarItem>
      </NavbarSection>
      <NavbarSpacer />
      <NavbarSection>
        <ThemeSwitcher />
        <NavbarDivider />

        <SignedIn>
          <Link href="/dashboard">Dashboard</Link>
        </SignedIn>
        <SignedOut>
          <SignInButton>
            <button>Jetzt ausprobieren</button>
          </SignInButton>
        </SignedOut>
      </NavbarSection>
    </Navbar>
  );
}
