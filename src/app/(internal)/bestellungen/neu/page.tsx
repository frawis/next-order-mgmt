import { AddOrderForm } from '@/features/orders/AddOrder';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Neue Bestellung',
  description: 'Erstelle eine neue Bestellung',
};

export default function NewOrderPage() {
  return (
    <div>
      <h2>Neue Bestellung</h2>
      <div>
        <AddOrderForm />
      </div>
    </div>
  );
}
