"use client";

import { useState } from "react";

export default function NewItem() {
  const [quantity, setQuantity] = useState(1);

  const increment = () => {
    if (quantity < 20) {
      setQuantity(quantity + 1);
    }
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="bg-black p-6 rounded-lg shadow-md w-full max-w-sm">
      <div className="flex items-center justify-center gap-4">
        <button
          onClick={decrement}
          disabled={quantity === 1}
          className={`px-4 py-2 rounded transition
            ${quantity === 1 ? "bg-gray-300 cursor-not-allowed" : "bg-red-500 hover:bg-red-600 text-white"}`}
        >
          −
        </button>

        <span className="text-2xl font-bold w-12 text-center">{quantity}</span>

        <button
          onClick={increment}
          disabled={quantity === 20}
          className={`px-4 py-2 rounded transition
            ${quantity === 20 ? "bg-gray-300 cursor-not-allowed" : "bg-green-500 hover:bg-green-600 text-white"}`}
        >
          +
        </button>
      </div>

      </div>
  );
}
