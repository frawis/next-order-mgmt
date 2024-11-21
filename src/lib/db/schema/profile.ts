import { InferSelectModel } from "drizzle-orm";
import { pgTable, text, varchar } from "drizzle-orm/pg-core";

export const userProfiles = pgTable('user_profiles', {
  user_id: text('user_id').primaryKey().notNull(),
  name: varchar('name', { length: 255 }).notNull(),
})


export type UserProfiles = InferSelectModel<typeof userProfiles>;