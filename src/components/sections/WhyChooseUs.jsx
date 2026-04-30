export default function WhyChooseUs() {
  const items = [
    {
      title: "Long Sales Cycles Are Our Specialty",
      desc: "We understand multi-stakeholder decisions and technical evaluation processes.",
      image: "/icons1/1.png",
    },
    {
      title: "Industrial Expertise",
      desc: "Deep familiarity with manufacturing, engineering, and B2B industrial sectors.",
      image: "/icons1/2.png",
    },
    {
      title: "Obsessed with ROI",
      desc: "All activities tied to measurable pipeline and revenue outcomes.",
      image: "/icons1/3.png",
    },
    {
      title: "Strategy + Execution = Success",
      desc: "We stay with you, even after delivering the deliverables. We build systems and ensure strategies convert into sales.",
      image: "/icons1/4.png",
    },
  ];

    return (
    <section className="bg-[#011F5B] text-white py-20 px-6 md:px-16">
      
      {/* Heading */}
      <div className="text-center mb-16 relative">
        <span className="absolute left-1/2 -translate-x-1/2 top-2 w-28 h-14 bg-blue-600 rotate-1 -z-10"></span>
        <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">
          Why Choose Us?
        </h2>
      </div>

      {/* Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto">
        {items.map((item, i) => (
          <div
            key={i}
            className="
              flex flex-col gap-4 p-6
              border-white/10
              lg:border-r
              lg:last:border-r-0
            "
          >
            {/* Icon */}
            <div className="w-12 h-12 flex items-center justify-center">
              <img
                src={item.image}
                alt={item.title}
                className="max-w-full max-h-full"
              />
            </div>

            {/* Text */}
            <h3 className="text-lg font-semibold leading-snug">
              {item.title}
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}