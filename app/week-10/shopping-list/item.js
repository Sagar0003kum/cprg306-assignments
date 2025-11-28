export default function Item({ name, quantity, category }) {
  return (
    <li className="bg-slate-800 p-4 mb-3 rounded-xl hover:bg-slate-700 flex justify-between items-center">
      <div>
        <h3 className="text-lg font-bold text-white">{name}</h3>
        <p className="text-slate-400 text-sm">Category: {category}</p>
      </div>
      <span className="text-indigo-400 font-semibold">x{quantity}</span>
    </li>
  );
}
