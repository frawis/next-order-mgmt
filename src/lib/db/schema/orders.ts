import { InferInsertModel, InferSelectModel, sql } from 'drizzle-orm';

import { bigint, date, decimal, pgTable, text, timestamp, varchar } from 'drizzle-orm/pg-core';
import { authenticatedRole, authUid, crudPolicy } from "drizzle-orm/neon";

export const userOrders = pgTable('user_orders', {
  id: bigint('id', { mode: 'bigint' }).primaryKey().generatedByDefaultAsIdentity(),
  userId: text('user_id')
      .notNull()
      .default(sql`(auth.user_id())`),
  productName: text('product_name').notNull(),
  dealer: varchar('dealer', { length: 255 }).notNull(),
  buyDate: date('buy_date').notNull(),
  price: decimal('price', { precision: 10, scale: 2 }).notNull(),
  state: varchar('state', { length: 50 }).notNull(),
  orderNumber: varchar('order_number', { length: 255 }),
  insertedAt: timestamp('inserted_at', { withTimezone: true }).defaultNow().notNull(),
  updatedAt: timestamp('updated_at', { withTimezone: true }).defaultNow().notNull(),
}, 
// create policies for the table
(table) => [
    crudPolicy({
      role: authenticatedRole,
      read: authUid(table.userId),
      modify: authUid(table.userId),
    }),
  ],
);

export type UserOrder = InferSelectModel<typeof userOrders>;
export type NewUserOrder = InferInsertModel<typeof userOrders>;
