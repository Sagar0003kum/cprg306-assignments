"use client";

import { useState } from "react";
import Item from "./item";
import itemsData from "./items.json";

export default function ItemList() {
  const [sortBy, setSortBy] = useState("name");

  const sortedItems = [...itemsData].sort((a, b) => {
    if (sortBy === "name") return a.name.localeCompare(b.name);
    if (sortBy === "category") return a.category.localeCompare(b.category);
    return 0;
  });

  const groupedItems = itemsData.reduce((acc, item) => {
    (acc[item.category] ||= []).push(item);
    return acc;
  }, {});

  return (
    <div className="p-4 bg-gray-50 rounded-lg shadow-md">
      <div className="flex flex-wrap gap-4 mb-6">
        <button
          onClick={() => setSortBy("name")}
          className={`px-4 py-2 rounded ${
            sortBy === "name"
              ? "bg-blue-500 text-white"
              : "bg-gray-200 hover:bg-gray-300"
          }`}
        >
          Sort by Name
        </button>

        <button
          onClick={() => setSortBy("category")}
          className={`px-4 py-2 rounded ${
            sortBy === "category"
              ? "bg-blue-500 text-white"
              : "bg-gray-200 hover:bg-gray-300"
          }`}
        >
          Sort by Category
        </button>

        <button
          onClick={() => setSortBy("group")}
          className={`px-4 py-2 rounded ${
            sortBy === "group"
              ? "bg-blue-500 text-white"
              : "bg-gray-200 hover:bg-gray-300"
          }`}
        >
          Group by Category
        </button>
      </div>

      {sortBy === "group" ? (
        <div className="space-y-6">
          {Object.keys(groupedItems)
            .sort()
            .map((cat) => (
              <div key={cat}>
                <h2 className="text-xl font-semibold capitalize mb-2 border-b-2 border-gray-300">
                  {cat}
                </h2>
                <ul className="space-y-1">
                  {groupedItems[cat]
                    .sort((a, b) => a.name.localeCompare(b.name))
                    .map((item) => (
                      <Item
                        key={item.id}
                        name={item.name}
                        quantity={item.quantity}
                        category={item.category}
                      />
                    ))}
                </ul>
              </div>
            ))}
        </div>
      ) : (
        <ul className="space-y-2">
          {sortedItems.map((item) => (
            <Item
              key={item.id}
              name={item.name}
              quantity={item.quantity}
              category={item.category}
            />
          ))}
        </ul>
      )}
    </div>
  );
}
