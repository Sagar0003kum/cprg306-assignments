import ItemList from "./item-list";

export default function Page() {
  return (
    <main className="p-6 bg-gradient-to-b from-blue-50 to-indigo-100 min-h-screen">
      <h1 className="text-4xl font-bold text-center text-indigo-700 mb-8">
        Shopping List
      </h1>
      <div className="max-w-md mx-auto">
        <ItemList />
      </div>
    </main>
  );
}
