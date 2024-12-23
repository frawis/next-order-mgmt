import { type InferInsertModel, type InferSelectModel, sql } from 'drizzle-orm';

import {
  bigint,
  date,
  decimal,
  pgEnum,
  pgTable,
  text,
  timestamp,
  varchar,
} from 'drizzle-orm/pg-core';
import { authenticatedRole, authUid, crudPolicy } from 'drizzle-orm/neon';
import { platforms } from './platforms';

export const userOrdersStateEnum = pgEnum('user_orders_state', [
  'pending',
  'processing',
  'shipped',
  'out_for_delivery',
  'delivered',
  'cancelled',
  'returned',
  'failed_delivery',
  'awaiting_payment',
  'refunded',
]);

export const userOrders = pgTable(
  'user_orders',
  {
    id: bigint('id', { mode: 'bigint' })
      .primaryKey()
      .generatedByDefaultAsIdentity(),
    userId: text('user_id')
      .notNull()
      .default(sql`(auth.user_id())`),
    productName: text('product_name').notNull(),
    dealer: bigint('dealer', { mode: 'bigint' })
      .notNull()
      .references(() => platforms.id),
    buyDate: date('buy_date').notNull(),
    price: decimal('price', { precision: 10, scale: 2 }).notNull(),
    state: userOrdersStateEnum('state').notNull().default('pending'),
    orderNumber: varchar('order_number', { length: 255 }),
    insertedAt: timestamp('inserted_at', { withTimezone: true })
      .defaultNow()
      .notNull(),
    updatedAt: timestamp('updated_at', { withTimezone: true })
      .defaultNow()
      .notNull(),
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
export type OrderStatus = (typeof userOrdersStateEnum)['enumValues'][number];
export const orderStatusValues = userOrdersStateEnum.enumValues;
