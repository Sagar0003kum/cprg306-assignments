"use client";
import { useState } from "react";
import Item from "./item";

export default function ItemList({ items, onItemSelect }) {
  const [sortBy, setSortBy] = useState("name");

  const sorted = [...items].sort((a, b) =>
    sortBy === "name"
      ? a.name.localeCompare(b.name)
      : a.category.localeCompare(b.category)
  );

  return (
    <div className="p-4 text-white w-full max-w-md">
      <div className="mb-4 space-x-3 text-black">
        <button
          onClick={() => setSortBy("name")}
          className={`px-4 py-2 rounded-lg ${
            sortBy === "name" ? "bg-blue-600 text-white" : "bg-gray-200"
          }`}
        >
          Sort by Name
        </button>
        <button
          onClick={() => setSortBy("category")}
          className={`px-4 py-2 rounded-lg ${
            sortBy === "category" ? "bg-blue-600 text-white" : "bg-gray-200"
          }`}
        >
          Sort by Category
        </button>
      </div>

      <ul className="space-y-2">
        {sorted.map((item) => (
          <Item key={item.id} {...item} onSelect={onItemSelect} />
        ))}
      </ul>
    </div>
  );
}
