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
      desc: "We build systems that convert strategy into real sales outcomes.",
      image: "/icons1/4.png",
    },
  ];

  return (
    <section className="bg-[#011F5B] text-white py-14 md:py-20 px-4 md:px-6 lg:px-16">
      
      {/* Heading */}
     <div className="text-center mb-12 md:mb-16">
  <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight">
    
    <span className="relative inline-block px-3 z-10">
      <span className="absolute -left-0 -right-3 top-[10%] h-[100%] bg-[#135BEC] -z-10 rotate-1"></span>
      Why
    </span>{" "}
    
    Choose Us?
    
  </h2>
</div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto border-white/10">

        {items.map((item, i) => (
          <div
            key={i}
            className="flex flex-col gap-4 p-6 md:p-8 border-b sm:border-b-0 lg:border-r border-white/10 last:border-r-0 hover:bg-white/5 transition"
          >

            {/* Icon */}
            <img
              src={item.image}
              alt={item.title}
              className="w-10 h-10 md:w-12 md:h-12 object-contain"
            />

            {/* Text */}
            <h3 className="text-base md:text-lg font-semibold leading-snug">
              {item.title}
            </h3>

            <p className="text-sm text-gray-300 leading-relaxed">
              {item.desc}
            </p>

          </div>
        ))}

      </div>
    </section>
  );
}