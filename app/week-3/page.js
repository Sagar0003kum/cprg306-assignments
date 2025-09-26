import ItemList from "./item-list.js";

export default function Page() {
  return (
    <main>
      <div className="w-full flex justify-center items-start py-2">
        <h1 className="text-5xl">Shopping List</h1>
      </div>
      <ItemList />
    </main>
  );
}
