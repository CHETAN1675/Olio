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
    <section className="w-full py-20 px-6 lg:px-20">
      <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row justify-between gap-16">

        {/* LEFT */}
        <div className="lg:w-[520px] flex flex-col gap-10 lg:sticky top-[100px] h-fit">

          {/* TEXT */}
          <div className="flex flex-col gap-4">
            <h2 className="text-[48px] lg:text-[56px] font-semibold leading-[110%] tracking-[-1.5px] text-[#011F5B] relative">

              How We{" "}
              <span className="relative inline-block">
                <span className="absolute inset-0 bg-[#135BEC] rounded rotate-[1deg] scale-x-110 scale-y-110"></span>
                <span className="relative text-white px-2">
                  Work?
                </span>
              </span>

            </h2>

            <p className="text-[18px] leading-[140%] text-[#595959] max-w-[410px]">
              A Step-by-Step Strategy Based on What Has Worked for Our Clients
            </p>
          </div>

          {/* BUTTON */}
          <button className="inline-flex items-center gap-3 bg-[#FFC40C] px-6 py-3 rounded-lg w-fit">
            See Our Complete Approach
            <span className="text-xl">›</span>
          </button>
        </div>

        {/* RIGHT */}
        <div className="lg:w-[600px] flex flex-col gap-20">
  {steps.map((step, i) => (
    <div key={i} className="flex flex-col gap-5">

      {/* STEP BADGE */}
      <div className="flex items-center gap-2">
        <div className="bg-gray-400/50 h-8 px-3 py-1.5 rounded-lg flex items-center justify-center">
          <span className="text-sm leading-5 tracking-[1px] uppercase font-medium">
            Step {i + 1}
          </span>
        </div>
      </div>

      {/* TEXT */}
          <div>
            <h3 className="text-[20px] font-semibold text-black">
              {step.title}
            </h3>
            <p className="text-[16px] text-[#595959]">
              {step.desc}
            </p>
          </div>

          {/* IMAGE */}
          <div className="w-full h-[260px] rounded-2xl overflow-hidden">
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