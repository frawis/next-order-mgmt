import { SignedIn, SignOutButton } from "@clerk/nextjs";
import Link from "next/link";

export default function InternalLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <header>
        <SignedIn>
          <div className="flex justify-between items-center">
            <Link href="/bestellungen">
            Lieferblick
            </Link>
            <div>
              <SignOutButton />
            </div>
          </div>
        </SignedIn>
      </header>
        {children}
      
    </>
  )
}
