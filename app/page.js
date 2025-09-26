import Link from "next/link";

export default function Home() {
  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">
        CPRG 306: Web Development 2 - Assignments
      </h1>
      <p className="space-x-6">
        <Link href="/week-2" className="text-blue-600 hover:underline">
          Week 2 assignments
        </Link>
        <Link href="/week-3" className="text-blue-600 hover:underline">
          Week 3 assignments
        </Link>
      </p>
    </main>
  );
}