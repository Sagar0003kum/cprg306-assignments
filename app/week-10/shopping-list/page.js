"use client";

import { useEffect, useState } from "react";
// 1. Corrected: Added '../' to go up to week-10 folder
import { useUserAuth } from "../_utils/auth-context"; 
// 2. Corrected: Removed 'shopping-list/' because new-item is a sibling file
import NewItem from "./new-item"; 
// 3. Corrected: Removed 'shopping-list/' because item-list is a sibling file
import ItemList from "./item-list"; 
// 4. Corrected: Added '../' to go up to week-10 folder
import { getItems, addItem } from "../_services/shopping-list-service";

export default function Page() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();
  const [items, setItems] = useState([]);
  const [showList, setShowList] = useState(false);

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

  if (!user) {
    return (
      <main className="bg-slate-950 min-h-screen flex flex-col items-center justify-center text-white">
        <h1 className="text-4xl font-bold text-indigo-400 mb-4">
          Week 10 – Cloud Firestore App
        </h1>
        <p className="text-gray-300 mb-6">Please sign in with GitHub to continue.</p>
        <button
          onClick={gitHubSignIn}
          className="bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-lg font-semibold"
        >
          Sign in with GitHub
        </button>
      </main>
    );
  }

  if (user && !showList) {
    return (
      <main className="bg-slate-950 min-h-screen flex flex-col items-center justify-center text-white">
        <h1 className="text-4xl font-bold text-indigo-400 mb-4">
          Welcome, {user.displayName || user.email.split("@")[0]}
        </h1>
        <img
          src={user.photoURL}
          alt="Profile"
          className="w-28 h-28 rounded-full border-4 border-indigo-400 mb-4"
        />
        <p className="text-gray-300 mb-4">{user.email}</p>
        <button
          onClick={() => setShowList(true)}
          className="text-indigo-400 underline mb-6"
        >
          Go to Shopping List
        </button>
        <button
          onClick={firebaseSignOut}
          className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded-lg font-semibold"
        >
          Log Out
        </button>
      </main>
    );
  }

  return (
    <main className="bg-slate-900 min-h-screen p-6 text-white">
      <h1 className="text-3xl font-bold text-indigo-400 mb-6">
        Shopping List – {user.displayName || user.email}
      </h1>
      <NewItem onAddItem={handleAddItem} />
      <ItemList items={items} />
    </main>
  );
}
