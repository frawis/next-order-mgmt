import { type InferInsertModel, type InferSelectModel, sql } from 'drizzle-orm';
import { authenticatedRole, authUid, crudPolicy } from 'drizzle-orm/neon';
import { bigint, pgEnum, pgTable, text, timestamp } from 'drizzle-orm/pg-core';

export const entityTypeEnum = pgEnum('entity_type', ['order', 'sale']);

export const userActivities = pgTable(
  'user_activities',
  {
    id: bigint('id', { mode: 'bigint' })
      .primaryKey()
      .generatedByDefaultAsIdentity(),
    entityType: entityTypeEnum('entity_type').notNull(),
    entityId: bigint('entity_id', { mode: 'bigint' }).notNull(),
    userId: text('user_id')
      .notNull()
      .default(sql`(auth.user_id())`),
    action: text('action').notNull(),
    insertedAt: timestamp('inserted_at', { withTimezone: true })
      .defaultNow()
      .notNull(),
  },
  (table) => [
    crudPolicy({
      role: authenticatedRole,
      read: authUid(table.userId),
      modify: authUid(table.userId),
    }),
  ],
);

export type UserActivity = InferSelectModel<typeof userActivities>;
// export type NewUserActivity = Omit<UserActivity, 'id'>;
export type NewUserActivity = InferInsertModel<typeof userActivities>;
export type UserActivityType = (typeof entityTypeEnum)['enumValues'][number];
export const userActivityTypes = entityTypeEnum.enumValues;
