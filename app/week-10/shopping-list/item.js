export default function Item({ name, quantity, category, onSelect }) {
  return (
    <li
      onClick={() => onSelect(name)}
      className="cursor-pointer bg-slate-800 p-4 mb-3 rounded-xl hover:bg-slate-700 flex justify-between items-center"
    >
      <div>
        <h3 className="text-xl font-semibold text-white">{name}</h3>
        <p className="text-sm text-slate-400">Category: {category}</p>
      </div>
      <span className="text-indigo-400 font-bold text-lg">x{quantity}</span>
    </li>
  );
}
