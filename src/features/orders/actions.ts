'use server';

import { fetchWithDrizzle } from '@/lib/db/drizzle';
import { NewUserOrder, UserOrder, userOrders } from '@/lib/db/schema';
import { asc, eq, sql } from 'drizzle-orm';
import { revalidatePath } from 'next/cache';

export async function getOrders(): Promise<Array<UserOrder>> {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  return fetchWithDrizzle(async (db, { userId }) => {
    return db
      .select()
      .from(userOrders)
      .where(eq(userOrders.userId, sql`auth.user_id()`))
      .orderBy(asc(userOrders.buyDate));
  });
}

export async function insertOrder({ newOrder }: { newOrder: NewUserOrder }) {
  await fetchWithDrizzle(async (db) => {
    return db.insert(userOrders).values({
      productName: newOrder.productName,
      dealer: newOrder.dealer,
      buyDate: newOrder.buyDate,
      price: newOrder.price,
      state: newOrder.state,
      orderNumber: newOrder.orderNumber,
    });
  });

  revalidatePath('/bestellungen');
}
