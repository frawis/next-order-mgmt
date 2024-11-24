import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Dashboard',
  description: 'Dein Dashboard',
};

export default async function DashboardPage() {
  return (
    <div>
      <div>
        <h2>Dashboard</h2>
      </div>
      <div>
        <Link href="/bestellungen">Deine Bestellungen</Link>
      </div>
    </div>
  );
}
