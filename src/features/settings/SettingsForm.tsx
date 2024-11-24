'use client';

import { Button } from '@/components/ui/button';
import { Checkbox, CheckboxField } from '@/components/ui/checkbox';
import { Divider } from '@/components/ui/divider';
import { Label } from '@/components/ui/fieldset';
import { Heading, Subheading } from '@/components/ui/heading';
import { Input } from '@/components/ui/input';
import { Listbox, ListboxLabel, ListboxOption } from '@/components/ui/listbox';
import { Select } from '@/components/ui/select';
import { Text } from '@/components/ui/text';
import {
  receivePeriodeValues,
  ReveivePeriode,
  UserProfiles,
} from '@/lib/db/schema';
import { getCountries } from '@/lib/utils/data';
import { receivePeriodeTranslations } from '@/lib/utils/translations';
import { useUser } from '@clerk/nextjs';
import Image from 'next/image';
import { useState } from 'react';
import { insertUserProfile, updateUserProfile } from './actions';

export function SettingsForm({ profile }: { profile?: UserProfiles }) {
  const { isLoaded, isSignedIn, user } = useUser();
  const countries = getCountries();
  const [country, setCountry] = useState(
    profile?.country
      ? countries.filter((c) => c.code === profile?.country)[0]
      : countries[0],
  );
  const handleSubmit = async (formData: FormData) => {
    const profileData = {
      userId: formData.get('userId') as string,
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      street: formData.get('street') as string,
      city: formData.get('city') as string,
      region: formData.get('region') as string,
      zip: formData.get('zip') as string,
      country: country.code,
      currency: formData.get('currency') as string,
      receiveNotifications: formData.get('receive_notifications')
        ? true
        : false,
      reveivePeriode: formData.get('receive_period') as ReveivePeriode,
      sendNewsletter: formData.get('send_newsletter') ? true : false,
    };
    console.log(profileData);
    if (profile) {
      // update profile
      await updateUserProfile({ profile: profileData });
    } else {
      // insert profile
      await insertUserProfile({ newProfile: profileData });
    }
  };
  if (!isLoaded || !isSignedIn) {
    return null;
  }

  return (
    <form action={handleSubmit}>
      <input type="hidden" name="userId" defaultValue={user.id} />
      <Heading>Einstellungen</Heading>
      <Divider className="my-10 mt-6" />
      <section className="grid gap-x-8 gap-y-6 sm:grid-cols-2">
        <div className="space-y-1">
          <Subheading>Name</Subheading>
          <Text>Dein Name in unserem System</Text>
        </div>
        <div>
          <Input
            aria-label="Name"
            name="name"
            defaultValue={profile?.name ? profile.name : user.fullName!}
          />
        </div>
      </section>
      <Divider className="my-10" soft />
      <section className="grid gap-x-8 gap-y-6 sm:grid-cols-2">
        <div className="space-y-1">
          <Subheading>Email</Subheading>
          <Text>Deine Emailadresse</Text>
        </div>
        <div className="space-y-4">
          <Input
            type="email"
            aria-label="Benutzer Email"
            name="email"
            defaultValue={
              profile?.email ?? user.primaryEmailAddress?.emailAddress
            }
            readOnly
          />
        </div>
      </section>
      <Divider className="my-10" soft />
      <section className="grid gap-x-8 gap-y-6 sm:grid-cols-2">
        <div className="space-y-1">
          <Subheading>Addresse</Subheading>
          <Text>Deine Adresse, die kannst du verwenden.</Text>
        </div>
        <div className="grid grid-cols-2 gap-6">
          <Input
            aria-label="Straße"
            name="street"
            placeholder="Straße"
            className="col-span-2"
            defaultValue={profile?.street ?? ''}
          />
          <Input
            aria-label="Stadt"
            name="city"
            placeholder="Stadt"
            className="col-span-2"
            defaultValue={profile?.city ?? ''}
          />
          <Listbox
            aria-label="Region"
            name="region"
            placeholder="Region"
            defaultValue={profile?.region ?? ''}
          >
            {country.regions.map((region) => (
              <ListboxOption key={region} value={region}>
                <ListboxLabel>{region}</ListboxLabel>
              </ListboxOption>
            ))}
          </Listbox>
          <Input
            aria-label="Postleitzahl"
            name="zip"
            placeholder="PLZ"
            defaultValue={profile?.zip ?? ''}
          />
          <Listbox
            aria-label="Country"
            name="country"
            placeholder="Country"
            by="code"
            value={country}
            onChange={(country) => setCountry(country)}
            className="col-span-2"
          >
            {countries.map((country) => (
              <ListboxOption key={country.code} value={country}>
                <div className="size-5 sm:size-4 relative">
                  <Image src={country.flagUrl} alt="" fill />
                </div>
                <ListboxLabel>{country.name}</ListboxLabel>
              </ListboxOption>
            ))}
          </Listbox>
        </div>
      </section>
      <Divider className="my-10" soft />
      <section className="grid gap-x-8 gap-y-6 sm:grid-cols-2">
        <div className="space-y-1">
          <Subheading>Währung</Subheading>
          <Text>Stelle die Währung für das System ein.</Text>
        </div>
        <div>
          <Select
            aria-label="Währung"
            name="currency"
            defaultValue={profile?.currency ?? 'eur'}
          >
            <option value="eur">EUR - Euro</option>
            <option value="chf">CHF - Schweizer Franken</option>
          </Select>
        </div>
      </section>
      <Divider className="my-10" soft />
      <section className="grid gap-x-8 gap-y-6 sm:grid-cols-2">
        <div className="space-y-1">
          <Subheading>Benachrichtigungen</Subheading>
          <Text>Benachrichtigungen vom System erhalten.</Text>
        </div>
        <div className="space-y-4">
          <CheckboxField>
            <Checkbox
              name="receive_notifications"
              defaultChecked={profile?.receiveNotifications}
            />
            <Label>Emails erhalten?</Label>
          </CheckboxField>
          <Select
            aria-label="Benachrichtigungsperiode"
            name="receive_period"
            defaultValue={profile?.reveivePeriode ?? ''}
          >
            <option>Zeitraum auswählen</option>
            {receivePeriodeValues.map((period) => (
              <option key={period} value={period}>
                {receivePeriodeTranslations[period] ||
                  period.charAt(0).toUpperCase() +
                    period.slice(1).replace('_', ' ')}
              </option>
            ))}
          </Select>
        </div>
      </section>

      <Divider className="my-10" soft />
      <section className="grid gap-x-8 gap-y-6 sm:grid-cols-2">
        <div className="space-y-1">
          <Subheading>Newsletter</Subheading>
          <Text>Moechtest du unseren Newsletter abonnieren?</Text>
        </div>
        <div className="space-y-4">
          <CheckboxField>
            <Checkbox
              name="send_newsletter"
              defaultChecked={profile?.sendNewsletter}
            />
            <Label>Newsletter abonnieren</Label>
          </CheckboxField>
        </div>
      </section>
      <Divider className="my-10" soft />
      <div className="flex justify-end gap-4">
        <Button type="reset" plain>
          Abbrechen
        </Button>
        <Button type="submit">Speichern</Button>
      </div>
    </form>
  );
}
