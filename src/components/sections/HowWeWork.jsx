const steps = [
  {
    title: "Discovery & Alignment",
    desc: "Market, buyer, and competitor analysis to identify growth opportunities.",
    img: "/growth/img1.png",
  },
  {
    title: "Strategy & Planning",
    desc: "Custom roadmap with messaging, channels, and metrics.",
    img: "/growth/img2.png",
  },
  {
    title: "Execution & Optimization",
    desc: "Integrated campaigns with continuous testing and optimization.",
    img: "/growth/img3.png",
  },
  {
    title: "Reporting & Growth Scaling",
    desc: "Pipeline impact reporting + analysis, and scaling what works.",
    img: "/growth/img4.png",
  },
  {
    title: "Continuous Intelligence",
    desc: "AI and analytics for predictable, optimized revenue engines.",
    img: "/growth/img5.png",
  },
];

export default function HowWeWork() {
  return (
    <section className="w-full py-14 md:py-20 px-4 md:px-6 lg:px-20">
      
      <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row gap-12 lg:gap-16">

        {/* LEFT */}
        <div className="lg:w-1/2 flex flex-col gap-8 lg:gap-10 lg:sticky lg:top-[100px] h-fit">

          {/* TEXT */}
          <div className="flex flex-col gap-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-semibold leading-tight tracking-[-1.5px] text-[#011F5B]">
              How We{" "}
              <span className="relative inline-block">
                <span className="absolute inset-0 bg-[#135BEC] rotate-[1deg] scale-x-110 scale-y-110"></span>
                <span className="relative text-white px-2">
                  Work?
                </span>
              </span>
            </h2>

            <p className="text-base md:text-lg leading-relaxed text-[#595959] max-w-[420px]">
              A Step-by-Step Strategy Based on What Has Worked for Our Clients
            </p>
          </div>

          {/* BUTTON */}
          <button className="inline-flex items-center gap-3 bg-[#FFC40C] px-5 md:px-6 py-3 rounded-lg w-fit">
            See Our Complete Approach
            <span className="text-xl">›</span>
          </button>

        </div>

        {/* RIGHT */}
        <div className="lg:w-1/2 flex flex-col gap-12 md:gap-16">

          {steps.map((step, i) => (
            <div key={i} className="flex flex-col gap-4 md:gap-5">

              {/* STEP BADGE */}
              <div className="bg-gray-200/60 w-fit px-3 py-1.5 rounded-lg">
                <span className="text-xs md:text-sm uppercase tracking-wider font-medium">
                  Step {i + 1}
                </span>
              </div>

              {/* TEXT */}
              <div>
                <h3 className="text-lg md:text-xl font-semibold text-black mb-1">
                  {step.title}
                </h3>
                <p className="text-sm md:text-base text-[#595959] leading-relaxed">
                  {step.desc}
                </p>
              </div>

              {/* IMAGE */}
              <div className="w-full h-[180px] sm:h-[220px] md:h-[260px] rounded-2xl overflow-hidden">
                <img
                  src={step.img}
                  alt={step.title}
                  className="w-full h-full object-cover"
                />
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}