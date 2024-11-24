'use server';

import { fetchWithDrizzle } from '@/lib/db/drizzle';
import { UserProfiles, userProfiles } from '@/lib/db/schema';
import { eq } from 'drizzle-orm';
import { revalidatePath } from 'next/cache';

export async function insertUserProfile({
  newProfile,
}: {
  newProfile: UserProfiles;
}) {
  await fetchWithDrizzle(async (db) => {
    return db.insert(userProfiles).values({
      userId: newProfile.userId,
      name: newProfile.name,
      email: newProfile.email,
      street: newProfile.street,
      zip: newProfile.zip,
      city: newProfile.city,
      region: newProfile.region,
      country: newProfile.country,
      currency: newProfile.currency,
      sendNewsletter: newProfile.sendNewsletter,
      receiveNotifications: newProfile.receiveNotifications,
      reveivePeriode: newProfile.reveivePeriode,
    });
  });

  revalidatePath('/einstellungen');
}

export async function updateUserProfile({
  profile,
}: {
  profile: UserProfiles;
}) {
  await fetchWithDrizzle(async (db) => {
    return db
      .update(userProfiles)
      .set({
        name: profile.name,
        email: profile.email,
        street: profile.street,
        city: profile.city,
        region: profile.region,
        zip: profile.zip,
        country: profile.country,
        currency: profile.currency,
        sendNewsletter: profile.sendNewsletter,
        receiveNotifications: profile.receiveNotifications,
        reveivePeriode: profile.reveivePeriode,
      })
      .where(eq(userProfiles.userId, profile.userId));
  });

  revalidatePath('/einstellungen');
}

export async function getUserProfile(): Promise<UserProfiles> {
  return fetchWithDrizzle(async (db, { userId }) => {
    const profile = await db
      .select()
      .from(userProfiles)
      .where(eq(userProfiles.userId, userId))
      .limit(1);
    return profile[0];
  });
}
