export function TestimonialCard({ data, active }) {
  return (
    <div
      className={`relative w-[410px] h-[300px] rounded-xl border p-6 flex flex-col justify-between transition-all duration-300
      ${
        active
          ? "bg-white shadow-[0px_69px_27px_rgba(0,0,0,0.01),0px_39px_23px_rgba(0,0,0,0.03),0px_17px_17px_rgba(0,0,0,0.04),0px_4px_9px_rgba(0,0,0,0.05)] scale-100"
          : "bg-gray-50 opacity-50 scale-95"
      }`}
    >
      {/* subtle background shape (only for active) */}
      {active && (
        <div className="absolute right-6 top-6 w-[180px] h-[180px] bg-blue-900/5 rounded-lg pointer-events-none" />
      )}

      {/* Content */}
      <div className="space-y-4 relative z-10">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-blue-600 rounded-full" />
          <span className="font-medium text-gray-900">
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
      <div className="flex items-center gap-3 relative z-10">
        <div className="w-10 h-10 rounded-full bg-gray-300" />

        <div>
          <p className="font-semibold text-sm text-gray-900">
            {data.name}
          </p>
          <p className="text-xs text-gray-500">{data.role}</p>
        </div>
      </div>
    </div>
  );
}