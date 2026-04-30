export default function Card({ title, items, icon }) {
  return (
    <div className="bg-white rounded-xl p-6 md:p-8 text-left border border-[#E2E8F0] hover:shadow-md transition-shadow">

      {/* Icon */}
      <img
        src={icon}
        alt={title}
        className="w-10 h-10 md:w-12 md:h-12 mb-5 md:mb-6 object-contain"
      />

      {/* Title */}
      <h3 className="text-base md:text-lg font-semibold mb-4 text-gray-900">
        {title}
      </h3>

      {/* List */}
      <ul className="space-y-2">
        {items.map((item, i) => (
          <li
            key={i}
            className="flex items-start gap-2 text-gray-600 text-sm leading-relaxed"
          >
            <span className="w-1.5 h-1.5 bg-gray-500 mt-2 rounded-sm shrink-0"></span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}