"use client";

import { useState } from "react";
import NewItem from "./new-item";
import ItemList from "./item-list";
import MealIdeas from "./meal-ideas";
import itemsData from "./items.json";

export default function Page() {
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState("");

  function handleAddItem(newItem) {
    setItems((prev) => [...prev, newItem]);
  }

  function handleItemSelect(name) {
    const cleaned = name
      .split(",")[0]
      .replace(/[^\p{L}\p{N}\s]/gu, "") // remove emojis/punctuation
      .trim()
      .toLowerCase();
    setSelectedItemName(cleaned);
  }

  return (
    <main className="bg-slate-950 min-h-screen p-8 flex flex-col items-center">
      <h1 className="text-4xl font-bold text-indigo-400 mb-8">
        Week 8 – Meal Ideas App
      </h1>

      <div className="flex flex-col md:flex-row gap-10 w-full justify-center">
        <div className="flex flex-col items-center">
          <NewItem onAddItem={handleAddItem} />
          <ItemList items={items} onItemSelect={handleItemSelect} />
        </div>

        <MealIdeas ingredient={selectedItemName} />
      </div>
    </main>
  );
}
