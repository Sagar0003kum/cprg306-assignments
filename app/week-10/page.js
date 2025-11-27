"use client";

import { useEffect, useState } from "react";
import { useUserAuth } from "./_utils/auth-context";
import NewItem from "./shopping-list/new-item";
import ItemList from "./shopping-list/item-list";
import { getItems, addItem } from "./_services/shopping-list-service";

export default function Page() {
  const { user } = useUserAuth();
  const [items, setItems] = useState([]);

  async function loadItems() {
    if (user) {
      const userItems = await getItems(user.uid);
      setItems(userItems);
    }
  }

  useEffect(() => {
    loadItems();
  }, [user]);

  async function handleAddItem(newItem) {
    if (user) {
      const id = await addItem(user.uid, newItem);
      setItems([...items, { id, ...newItem }]);
    }
  }

  return (
    <main className="bg-slate-900 min-h-screen p-6">
      <h1 className="text-4xl font-bold text-center text-indigo-400 mb-6">
        Week 10 — Firestore Shopping List
      </h1>

      {user ? (
        <>
          <NewItem onAddItem={handleAddItem} />
          <ItemList items={items} />
        </>
      ) : (
        <p className="text-center text-gray-400">
          Please log in to view your shopping list.
        </p>
      )}
    </main>
  );
}
