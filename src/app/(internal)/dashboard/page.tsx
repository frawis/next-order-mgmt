import { checkUserProfile } from '@/lib/actions/check-user-profile';
import { Metadata } from 'next';
import Link from 'next/link';
import { redirect } from 'next/navigation';

export const metadata: Metadata = {
  title: 'Dashboard',
  description: 'Dein Dashboard',
};

export default async function DashboardPage() {
  const hasProfile = await checkUserProfile();
  if (!hasProfile) {
    redirect('/einstellungen');
  }
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
