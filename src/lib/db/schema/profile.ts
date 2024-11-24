import { InferInsertModel, InferSelectModel } from 'drizzle-orm';
import { boolean, pgEnum, pgTable, text, varchar } from 'drizzle-orm/pg-core';

export const reveivePeriodeEnum = pgEnum('reveive_periode', [
  'daily',
  'weekly',
  'monthly',
]);

export const userProfiles = pgTable('user_profiles', {
  userId: text('user_id').primaryKey().notNull(),
  name: varchar('name', { length: 255 }).notNull(),
  email: text('email').notNull(),
  street: varchar('street', { length: 255 }),
  city: varchar('city', { length: 255 }),
  zip: varchar('zip', { length: 20 }),
  region: varchar('region', { length: 255 }),
  country: varchar('country', { length: 255 }),
  // settings for the app
  currency: varchar('currency', { length: 10 }).notNull().default('EUR'),
  sendNewsletter: boolean('send_newsletter').notNull().default(false),
  receiveNotifications: boolean('receive_notifications')
    .notNull()
    .default(false),
  reveivePeriode: reveivePeriodeEnum('reveive_periode').default('daily'),
});

export type UserProfiles = InferSelectModel<typeof userProfiles>;
export type NewUserProfile = InferInsertModel<typeof userProfiles>;
export type ReveivePeriode = (typeof reveivePeriodeEnum)['enumValues'][number];
export const reveivePeriodeValues = reveivePeriodeEnum.enumValues;
