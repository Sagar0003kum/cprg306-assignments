export default function Item({ name, quantity, category }) {
  return (
    <li className="border rounded p-2 bg-white shadow-sm flex justify-between">
      <span className="font-medium capitalize">{name}</span>
      <span className="text-gray-600">Qty: {quantity}</span>
      <span className="italic text-sm text-gray-500">{category}</span>
    </li>
  );
}
