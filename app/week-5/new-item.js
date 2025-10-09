"use client";

import { useState } from "react";

export default function NewItem() {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("produce");

  const increment = () => {
    if (quantity < 20) setQuantity(quantity + 1);
  };

  const decrement = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const item = { name, quantity, category };
    console.log(item);
    alert(
      `Added item:\nName: ${name}\nQuantity: ${quantity}\nCategory: ${category}`
    );
    setName("");
    setQuantity(1);
    setCategory("produce");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-black p-6 rounded-lg shadow-md w-full max-w-md space-y-4"
    >

      <div>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          placeholder="Item Name"
          className="w-full border rounded p-2"
        />
      </div>

      <div className="flex items-center justify-between">
        <span className="font-medium">Quantity:</span>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={decrement}
            disabled={quantity === 1}
            className={`px-3 py-1 rounded ${
              quantity === 1
                ? "bg-gray-300 cursor-not-allowed"
                : "bg-red-500 hover:bg-red-600 text-white"
            }`}
          >
            −
          </button>
          <span className="text-lg font-bold">{quantity}</span>
          <button
            type="button"
            onClick={increment}
            disabled={quantity === 20}
            className={`px-3 py-1 rounded ${
              quantity === 20
                ? "bg-gray-300 cursor-not-allowed"
                : "bg-green-500 hover:bg-green-600 text-white"
            }`}
          >
            +
          </button>
        </div>
      </div>

      <div>
        <label className="block mb-1 font-medium">Category:</label>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full border rounded p-2 bg-black text-white hover:bg-black -700 focus:outline-none focus:ring-2"
        >
          <option value="produce">Produce</option>
          <option value="dairy">Dairy</option>
          <option value="bakery">Bakery</option>
          <option value="meat">Meat</option>
          <option value="frozen foods">Frozen Foods</option>
          <option value="canned goods">Canned Goods</option>
          <option value="dry goods">Dry Goods</option>
          <option value="beverages">Beverages</option>
          <option value="snacks">Snacks</option>
          <option value="household">Household</option>
          <option value="other">Other</option>
        </select>
      </div>

      <button
        type="submit"
        className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded"
      >
        Add Item
      </button>
    </form>
  );
}
