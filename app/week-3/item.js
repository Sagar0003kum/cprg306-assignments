
export default function Item({ name, quantity, category }) {
  return (
    <li className="p-3 border rounded-lg shadow-sm bg-white hover:bg-gray-50 flex justify-between items-center">
      <div>
        <p className="font-semibold text-black">{name}</p>
        <p className="text-sm text-gray-500">Category: {category}</p>
      </div>
      <span className="text-gray-700">Qty: {quantity}</span>
    </li>
  );
};
