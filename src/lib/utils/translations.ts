import { ReveivePeriode, ShippingStatus } from '@/lib/db/schema';

export const shippingStatusTranslations: Record<ShippingStatus, string> = {
  pending: 'Ausstehend',
  ready_to_ship: 'Versandbereit',
  shipped: 'Versendet',
  in_transit: 'In Zustellung',
  out_for_delivery: 'Wird zugestellt',
  delivered: 'Zugestellt',
  failed_delivery: 'Zustellung fehlgeschlagen',
  returned: 'Zurückgesendet',
};

export const receivePeriodeTranslations: Record<ReveivePeriode, string> = {
  daily: 'Täglich',
  weekly: 'Wöchentlich',
  monthly: 'Monatlich',
};
