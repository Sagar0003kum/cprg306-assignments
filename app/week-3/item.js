import React from "react";

const Item = ({ name, quantity, category }) => {
  return (
    <li className="bg-blue-400 p-5 mb-5 rounded-md shadow-sm hover:shadow-md transition-shadow duration-300 flex items-center space-x-4">
      <div className="font-sans">
        <p className="text-lg font-bold text-white">{name}</p>
        <p className="text-sm text-white">Quantity: {quantity}</p>
        <p className="text-sm text-white">Category: {category}</p>
      </div>
    </li>
  );
};

export default Item;