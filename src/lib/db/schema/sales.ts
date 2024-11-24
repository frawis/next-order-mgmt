import { InferInsertModel, InferSelectModel, sql } from 'drizzle-orm';
import { authenticatedRole, authUid, crudPolicy } from 'drizzle-orm/neon';
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
import { platforms } from './platforms';

export const shippingStatusEnum = pgEnum('shipping_status', [
  'pending',
  'ready_to_ship',
  'shipped',
  'in_transit',
  'out_for_delivery',
  'delivered',
  'failed_delivery',
  'returned',
]);

export const userSales = pgTable(
  'user_sales',
  {
    id: bigint('id', { mode: 'bigint' })
      .primaryKey()
      .generatedByDefaultAsIdentity(),
    userId: text('user_id')
      .notNull()
      .default(sql`(auth.user_id())`),
    productName: text('product_name').notNull(),
    platform: bigint('platform', { mode: 'bigint' })
      .notNull()
      .references(() => platforms.id),
    saleDate: date('sale_date').notNull(),
    price: decimal('price', { precision: 10, scale: 2 }).notNull(),
    shippingStatus: shippingStatusEnum('shipping_status').notNull(),
    buyerInfo: text('buyer_info'),
    trackingNumber: varchar('tracking_number', { length: 255 }),
    insertedAt: timestamp('inserted_at', { withTimezone: true })
      .defaultNow()
      .notNull(),
    updatedAt: timestamp('updated_at', { withTimezone: true })
      .defaultNow()
      .notNull(),
  }, // create policies for the table
  (table) => [
    crudPolicy({
      role: authenticatedRole,
      read: authUid(table.userId),
      modify: authUid(table.userId),
    }),
  ],
);

export type UserSale = InferSelectModel<typeof userSales>;
export type NewUserSale = InferInsertModel<typeof userSales>;
export type ShippingStatus = (typeof shippingStatusEnum)['enumValues'][number];
export const shippingStatusValues = shippingStatusEnum.enumValues;
