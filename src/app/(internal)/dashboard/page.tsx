import Link from "next/link";

export default async function DashboardPage(){

  return (
    <div>
      <div>
        <h2>Dashboard</h2>
      </div>
      <div>
        <Link href="/bestellungen">
        Deine Bestellungen
        </Link>
      </div>
    </div>
  )
}