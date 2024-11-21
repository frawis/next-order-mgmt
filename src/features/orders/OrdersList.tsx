'use server';

import { getOrders } from './actions';

export async function OrdersList() {
  const orders = await getOrders();

  if (orders === null) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Bestellungen</h2>
      <table>
        <thead>
          <tr>
            <th>Produkt</th>
            <th>Händler</th>
            <th>Kaufdatum</th>
            <th>Preis</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.length > 0 ? (
            orders.map((order) => (
              <tr key={order.id}>
                <td>{order.productName}</td>
                <td>{order.dealer}</td>
                <td>{order.buyDate}</td>
                <td>{order.price}</td>
                <td>{order.state}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={5}>Keine Bestellungen vorhanden</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
