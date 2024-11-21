'use client'

import { useRef } from "react"
import { insertOrder } from "./actions"
import { useRouter } from "next/navigation"

export function AddOrderForm() {
  const formRef = useRef<HTMLFormElement>(null)
  const router = useRouter()

  const onSubmit = async (formData: FormData) => {
    const newOrder = {
      productName: formData.get('productName') as string,
      dealer: formData.get('dealer') as string,
      buyDate: formData.get('buyDate') as string,
      price: formData.get('price') as string,
      state: formData.get('state') as string,
      orderNumber: formData.get('orderNumber') as string
    }


    await insertOrder({ newOrder: newOrder })
    formRef.current?.reset()
    router.push('/bestellungen')
  }

  return (
    <form ref={formRef} action={onSubmit}>
      <div>
        <label htmlFor="productName">Produkt</label>
        <input type="text" id="productName" name="productName" required placeholder="Welches Produkt..." />
      </div>
      <div>
        <label htmlFor="dealer">Händler</label>
        <input type="text" id="dealer" name="dealer" required placeholder="Von welchem Händler..." />
      </div>
      <div>
        <label htmlFor="buyDate">Kaufdatum</label>
        <input type="date" id="buyDate" name="buyDate" required />
      </div>
      <div>
        <label htmlFor="price">Preis</label>
        <input type="number" id="price" name="price" required placeholder="Preis in Euro..." />
      </div>
      <div>
        <label htmlFor="state">Status</label>
        <input type="text" id="state" name="state" required placeholder="Status der Bestellung..." />
      </div>
      <div>
        <label htmlFor="orderNumber">Bestellnummer</label>
        <input type="text" id="orderNumber" name="orderNumber" placeholder="Bestellnummer..." />
      </div>
      <div>
        <button type="submit">Bestellung hinzufügen</button>
      </div>
    </form>
  )
}