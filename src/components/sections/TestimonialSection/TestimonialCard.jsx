export function TestimonialCard({ data, active }) {
  return (
    <div
      className={`
        relative w-full sm:w-[360px] md:w-[410px]
        h-auto min-h-[260px]
        rounded-xl border p-5 md:p-6 flex flex-col justify-between
        transition-all duration-300
        ${active
          ? "bg-white shadow-xl scale-100 opacity-100"
          : "bg-gray-50 opacity-60 scale-95"}
      `}
    >

      {/* background shape */}
      {active && (
        <div className="absolute right-4 top-4 w-[120px] md:w-[180px] h-[120px] md:h-[180px] bg-blue-900/5 rounded-lg pointer-events-none" />
      )}

      {/* Content */}
      <div className="space-y-4 relative z-10">

        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 md:w-6 md:h-6 bg-blue-600 rounded-full" />
          <span className="font-medium text-sm md:text-base text-gray-900">
            {data.company}
          </span>
        </div>

        {/* Text */}
        <p
          className={`text-sm leading-relaxed ${
            active ? "text-gray-900" : "text-gray-500"
          }`}
        >
          “{data.text}”
        </p>

      </div>

      {/* Author */}
      <div className="flex items-center gap-3 relative z-10 mt-6">

        <div className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-gray-300" />

        <div>
          <p className="font-semibold text-sm text-gray-900">
            {data.name}
          </p>
          <p className="text-xs text-gray-500">
            {data.role}
          </p>
        </div>

      </div>

    </div>
  );
}