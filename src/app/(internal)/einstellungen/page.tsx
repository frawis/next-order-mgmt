import { getUserProfile } from '@/features/settings/actions';
import { SettingsForm } from '@/features/settings/SettingsForm';

export default async function SettingsPage() {
  const userProfile = await getUserProfile();
  return (
    <div>
      <SettingsForm profile={userProfile} />
    </div>
  );
}
