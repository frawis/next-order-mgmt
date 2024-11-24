'use client';

import { useRef } from 'react';
import { insertOrder } from './actions';
import { useRouter } from 'next/navigation';
import {
  Field,
  FieldGroup,
  Fieldset,
  Label,
  Legend,
} from '@/components/ui/fieldset';
import { Text } from '@/components/ui/text';
import { Input } from '@/components/ui/input';
import { Select } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { OrderStatus } from '@/lib/db/schema';

export function AddOrderForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const router = useRouter();

  const onSubmit = async (formData: FormData) => {
    const newOrder = {
      productName: formData.get('productName') as string,
      dealer: BigInt(formData.get('dealer') as string),
      buyDate: formData.get('buyDate') as string,
      price: formData.get('price') as string,
      state: formData.get('state') as OrderStatus,
      orderNumber: formData.get('orderNumber') as string,
    };

    await insertOrder({ newOrder: newOrder });
    formRef.current?.reset();
    router.push('/bestellungen');
  };

  return (
    <form ref={formRef} action={onSubmit}>
      <Fieldset>
        <Legend>Neue Bestellung</Legend>
        <Text>Erstelle eine neue Bestellung</Text>
        <FieldGroup>
          <Field>
            <Label htmlFor="productName">Produkt</Label>
            <Input
              type="text"
              id="productName"
              name="productName"
              required
              placeholder="Welches Produkt..."
            />
          </Field>
          <Field>
            <Label htmlFor="dealer">Händler</Label>
            <Input
              type="text"
              id="dealer"
              name="dealer"
              required
              placeholder="Von welchem Händler..."
            />
          </Field>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-4">
            <Field>
              <Label htmlFor="buyDate">Kaufdatum</Label>
              <Input type="date" id="buyDate" name="buyDate" required />
            </Field>
            <Field>
              <Label htmlFor="price">Preis</Label>
              <Input
                type="number"
                id="price"
                name="price"
                required
                placeholder="Preis in Euro..."
              />
            </Field>
          </div>
          <Field>
            <Label htmlFor="state">Status</Label>
            <Select id="state" name="state" required>
              <option value="">Status der Bestellung...</option>
              <option value="ordered">Bestellt</option>
              <option value="inProgress">In Bearbeitung</option>
              <option value="delivered">Geliefert</option>
            </Select>
          </Field>
          <Field>
            <Label htmlFor="orderNumber">Bestellnummer</Label>
            <Input
              type="text"
              id="orderNumber"
              name="orderNumber"
              placeholder="Bestellnummer..."
            />
          </Field>
          <div>
            <Button type="submit">Bestellung hinzufügen</Button>
          </div>
        </FieldGroup>
      </Fieldset>
    </form>
  );
}
