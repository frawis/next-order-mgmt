import { Button } from '@/components/ui/button';
import { Heading, Subheading } from '@/components/ui/heading';
import { Select } from '@/components/ui/select';
import { OrdersList } from '@/features/orders/OrdersList';
import { OrderStatistic } from '@/features/orders/OrderStatistic';
import { auth } from '@clerk/nextjs/server';
import { Metadata } from 'next';
import { Suspense } from 'react';

export const metadata: Metadata = {
  title: 'Bestellungen',
  description: 'Verwalte deine Bestellungen',
};

export default async function OrdersPage() {
  const { getToken } = await auth();
  const authToken = await getToken();

  let content = null;
  if (authToken) {
    content = (
      <main>
        <div>
          <Suspense fallback={<div>Lade...</div>}>
            <OrdersList />
          </Suspense>
        </div>
      </main>
    );
  }

  return (
    <>
      <div className="flex items-end justify-between gap-4">
        <Heading>Bestellungen</Heading>
        <Button className="-my-0.5" href="/bestellungen/neu">
          Neue Bestellung
        </Button>
      </div>
      <div className="mt-8 flex items-end justify-between">
        <Subheading>Übersicht</Subheading>
        <div>
          <Select name="period">
            <option value="last_week">Letzte Woche</option>
            <option value="last_two">Letzten 2 Wochen</option>
            <option value="last_month">Letzter Monat</option>
            <option value="last_quarter">Letztes Quartal</option>
          </Select>
        </div>
      </div>
      <div className="mt-4 grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
        <OrderStatistic
          title="Bestellungen"
          value="12"
          change="+3"
          timeframe="Letzte Woche"
        />
        <OrderStatistic
          title="Umsatz"
          value="€ 1.200,00"
          change="+€ 200,00"
          timeframe="Letzte Woche"
        />
        <OrderStatistic
          title="Händler"
          value="3"
          change="+1"
          timeframe="Letzte Woche"
        />
        <OrderStatistic
          title="Produkte"
          value="5"
          change="+2"
          timeframe="Letzte Woche"
        />
      </div>
      {content}
    </>
  );
}
