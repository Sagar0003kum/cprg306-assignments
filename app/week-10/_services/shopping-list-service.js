import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, doc } from "firebase/firestore";
import { deleteDoc } from "firebase/firestore";

export async function getItems(userId) {
  const items = [];
  const itemsCollection = collection(db, "users", userId, "items");
  const snapshot = await getDocs(itemsCollection);
  snapshot.forEach((docSnap) => {
    items.push({ id: docSnap.id, ...docSnap.data() });
  });
  return items;
}

export async function addItem(userId, item) {
  const itemsCollection = collection(db, "users", userId, "items");
  const docRef = await addDoc(itemsCollection, item);
  return docRef.id;
}

export async function deleteItem(userId, itemId) {
  const itemRef = doc(db, "users", userId, "items", itemId);
  await deleteDoc(itemRef);
}
