import Link from "next/link";

export default function Home() {
  return (
    <main className="p-4">
      <h1 className="text-2xl font-bold mb-4">
        CPRG 306: Web Development 2 - Assignments
      </h1>
      <ul className="space-y-2">
        <li>
          <Link href="/week-2" className="text-blue-600 hover:underline">
            Week 2 Assignment
          </Link>
        </li>
        <li>
          <Link href="/week-3" className="text-blue-600 hover:underline">
            Week 3 Assignment
          </Link>
        </li>
        <li>
          <Link href="/week-4" className="text-blue-600 hover:underline">
            Week 4 Assignment
          </Link>
        </li>
        <li>
          <Link href="/week-5" className="text-blue-600 hover:underline">
            Week 5 Assignment
          </Link>
        </li>
                <li>
          <Link href="/week-6" className="text-blue-600 hover:underline">
            Week 6 Assignment
          </Link>
        </li>
      </ul>
    </main>
  );
}
