import { InternalLayout } from '@/components/layout/internal-layout';

export default function InternalPageLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <InternalLayout>{children}</InternalLayout>
    </>
  );
}
