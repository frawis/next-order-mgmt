import { OrdersList } from '@/features/orders/OrdersList';
import { auth } from '@clerk/nextjs/server';

export default async function OrdersPage() {
  const { getToken } = await auth();
  const authToken = await getToken();

  let content = null;
  if (authToken) {
    content = (
      <main>
        <div>
          <OrdersList />
        </div>
      </main>
    );
  }

  return (
    <>
      <div>
        <h1>Bestellungen</h1>
        {content}
      </div>
    </>
  );
}
