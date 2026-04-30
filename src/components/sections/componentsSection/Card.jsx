export default function Card({ title, items, icon }) {
  return (
      <div className="bg-white rounded-xl p-8 text-left border border-[#E2E8F0]">
      
      {/* Icon */}
      <img
        src={icon}
        alt={title}
        className="w-12 h-12 mb-6 object-contain"
      />

      {/* Title */}
      <h3 className="text-lg font-semibold mb-4 text-gray-900">
        {title}
      </h3>

      {/* List */}
      <ul className="space-y-2">
        {items.map((item, i) => (
          <li key={i} className="flex items-start gap-2 text-gray-600 text-sm">
            <span className="w-1 h-1 bg-gray-500 mt-2 rounded-sm"></span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}