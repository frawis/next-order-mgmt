import type { Metadata } from 'next';
import { ClerkProvider } from '@clerk/nextjs';
import localFont from 'next/font/local';
import './globals.css';
import { ThemeProvider } from '@/components/layout/theme-provider';
import { TailwindIndicator } from '@/components/layout/tailwind-indicator';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: {
    template: '%s | Lieferblick',
    default: 'Lieferblick',
  },
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="de" suppressHydrationWarning>
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased font-sans`}
        >
          <ThemeProvider
            attribute="class"
            disableTransitionOnChange
            enableSystem
            defaultTheme="system"
            enableColorScheme
          >
            {children}
            <TailwindIndicator />
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
