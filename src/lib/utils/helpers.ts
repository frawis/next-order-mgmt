import { format } from 'date-fns';
import { toZonedTime } from 'date-fns-tz';
import { de } from 'date-fns/locale';
import type { OrderStatus, ShippingStatus } from '@/lib/db/schema';

// format currency
export const formatCurrency = (value: number | string) => {
  return new Intl.NumberFormat('de-DE', {
    style: 'currency',
    currency: 'EUR',
  }).format(Number(value));
};

// format date with date-fns und date-fns-tz to Europe/Berlin timezone
export const formatDate = (date: string | Date) => {
  return format(toZonedTime(new Date(date), 'Europe/Berlin'), 'dd.MM.yyyy', {
    locale: de,
  });
};

const validTransitions: Record<OrderStatus, OrderStatus[]> = {
  pending: ['pending', 'cancelled'],
  processing: ['shipped', 'cancelled'],
  shipped: ['out_for_delivery', 'returned'],
  out_for_delivery: ['delivered', 'failed_delivery'],
  delivered: [],
  cancelled: [],
  returned: ['refunded'],
  failed_delivery: ['returned', 'refunded'],
  awaiting_payment: ['pending', 'cancelled'],
  refunded: [],
};

export function canTransition(
  currentStatus: OrderStatus,
  newStatus: OrderStatus,
): boolean {
  return validTransitions[currentStatus]?.includes(newStatus);
}

const validShippingTransitions: Record<ShippingStatus, ShippingStatus[]> = {
  pending: ['ready_to_ship'],
  ready_to_ship: ['shipped'],
  shipped: ['in_transit', 'returned'],
  in_transit: ['out_for_delivery', 'failed_delivery', 'returned'],
  out_for_delivery: ['delivered', 'failed_delivery'],
  delivered: [], // Keine weiteren Änderungen möglich
  failed_delivery: ['returned'],
  returned: [], // Keine weiteren Änderungen möglich
};

export function canChangeShippingStatus(
  currentStatus: ShippingStatus,
  newStatus: ShippingStatus,
): boolean {
  return validShippingTransitions[currentStatus]?.includes(newStatus) || false;
}
