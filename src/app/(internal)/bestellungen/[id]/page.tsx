import { getSingleOrder } from '@/features/orders/actions';
import { Metadata } from 'next';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const order = await getSingleOrder({ id: id });

  return {
    title: order && `Bestellung #${order[0].id.toString()}`,
  };
}

export default async function SingleOrderPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const order = await getSingleOrder({ id });

  return (
    <div>
      <h1>Bestellung # {order[0].id}</h1>
      <p>Produkt: {order[0].productName}</p>
      <p>Händler: {order[0].dealer}</p>
      <p>Preis: {order[0].price}</p>
      <p>Status: {order[0].state}</p>
    </div>
  );
}
