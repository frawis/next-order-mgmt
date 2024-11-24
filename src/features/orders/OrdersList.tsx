'use server';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { getOrders } from './actions';
import { formatCurrency, formatDate } from '@/lib/utils/helpers';
import { Badge } from '@/components/ui/badge';

export async function OrdersList() {
  const orders = await getOrders();

  if (orders === null) {
    return <div>Loading...</div>;
  }

  return (
    <Table className="mt-8 [--gutter:theme(spacing.6)] lg:[--gutter:theme(spacing.10)]">
      <TableHead>
        <TableRow>
          <TableHeader>Produkt</TableHeader>
          <TableHeader>Händler</TableHeader>
          <TableHeader>Kaufdatum</TableHeader>
          <TableHeader>Status</TableHeader>
          <TableHeader className="text-right">Preis</TableHeader>
        </TableRow>
      </TableHead>
      <TableBody>
        {orders.length > 0 ? (
          orders.map((order) => (
            <TableRow
              key={order.id}
              href={`/bestellungen/${order.id}`}
              title={`Bestellung #${order.id}`}
            >
              <TableCell>{order.productName}</TableCell>
              <TableCell>{order.dealer}</TableCell>
              <TableCell>{formatDate(order.buyDate)}</TableCell>
              <TableCell>
                <Badge color="emerald">{order.state}</Badge>
              </TableCell>
              <TableCell className="text-right">
                {formatCurrency(order.price)}
              </TableCell>
            </TableRow>
          ))
        ) : (
          <tr>
            <td colSpan={5}>Keine Bestellungen vorhanden</td>
          </tr>
        )}
      </TableBody>
    </Table>
  );
}
