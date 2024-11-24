import { InferInsertModel, InferSelectModel } from 'drizzle-orm';
import { anonymousRole, authenticatedRole, crudPolicy } from 'drizzle-orm/neon';
import {
  bigint,
  jsonb,
  pgEnum,
  pgTable,
  text,
  timestamp,
  varchar,
} from 'drizzle-orm/pg-core';

export const platformType = pgEnum('platform_type', ['order', 'sale', 'both']);

export const platforms = pgTable(
  'platforms',
  {
    id: bigint('id', { mode: 'bigint' })
      .primaryKey()
      .generatedByDefaultAsIdentity(),
    name: varchar('name', { length: 255 }).notNull(),
    type: platformType('type').notNull(),
    apiKey: text('api_key'),
    apiUser: text('api_user'),
    apiUrl: text('api_url'),
    webhookUrl: text('webhook_url'),
    config: jsonb('config'),
    logoUrl: text('logo_url'),
    insertedAt: timestamp('inserted_at', { withTimezone: true })
      .defaultNow()
      .notNull(),
    updatedAt: timestamp('updated_at', { withTimezone: true })
      .defaultNow()
      .notNull(),
  },
  () => [
    // anyone (anonymous) can read
    crudPolicy({
      role: anonymousRole,
      read: true,
      modify: false,
    }),
    crudPolicy({
      role: authenticatedRole,
      read: true,
      modify: true,
    }),
  ],
);

export type Platform = InferSelectModel<typeof platforms>;
export type NewPlatform = InferInsertModel<typeof platforms>;
export type PlatformType = (typeof platformType)['enumValues'][number];
export const platformTypes = platformType.enumValues;
