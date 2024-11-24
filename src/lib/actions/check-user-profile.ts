'use server';

import { eq, sql } from 'drizzle-orm';
import { fetchWithDrizzle } from '../db/drizzle';
import { userProfiles } from '../db/schema';

export async function checkUserProfile(): Promise<boolean> {
  return fetchWithDrizzle(async (db) => {
    const profile = await db
      .select()
      .from(userProfiles)
      .where(eq(userProfiles.userId, sql`auth.user_id()`))
      .limit(1);
    return profile.length > 0;
  });
}
