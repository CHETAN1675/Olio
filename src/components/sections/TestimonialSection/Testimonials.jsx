import { useState } from "react";
import { TestimonialCard } from "./TestimonialCard";

const testimonials = [
  {
    company: "Interlock",
    text: "They understand industrial buyers better than anyone we've worked with. We are consistently getting qualified leads and our sales team’s output has consequently improved.",
    name: "Alex Rivera",
    role: "CEO, TechFlow Systems",
  },
  {
    company: "Boltshift",
    text: "For the first time in our company's history, we have a pipeline we can actually predict.",
    name: "Alex Rivera",
    role: "CEO, TechFlow Systems",
  },
  {
    company: "FeatherDev",
    text: "Finally, a marketing partner who gets it. We are getting measurable results in form of 240% growth in monthly enquiries.",
    name: "Alex Rivera",
    role: "CEO, TechFlow Systems",
  },
];

export default function TestimonialCarousel() {
  const [index, setIndex] = useState(1);

  const prev = () => {
    setIndex((p) => (p === 0 ? testimonials.length - 1 : p - 1));
  };

  const next = () => {
    setIndex((p) => (p === testimonials.length - 1 ? 0 : p + 1));
  };

  return (
    <section className="relative py-14 md:py-24 px-4 md:px-6 lg:px-20 overflow-hidden">

      {/* Heading */}
      <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold">
          Trusted By{" "}
          <span className="relative inline-block">
            <span className="absolute inset-0 bg-[#135BEC] -rotate-[-0.9]"></span>
            <span className="relative text-white px-2">
              Industry Leaders
            </span>
          </span>
        </h2>

        <p className="mt-4 text-sm md:text-base text-gray-500">
          Discover how teams around the world are scaling their operations and improving efficiency.
        </p>
      </div>

      {/* Slider */}
      <div className="relative max-w-6xl mx-auto flex items-center justify-center">

        {/* LEFT FADE */}
        <div className="pointer-events-none absolute left-0 top-0 h-full w-16 md:w-24 bg-gradient-to-r from-white to-transparent z-10" />

        {/* RIGHT FADE */}
        <div className="pointer-events-none absolute right-0 top-0 h-full w-16 md:w-24 bg-gradient-to-l from-white to-transparent z-10" />

        {/* Left Button */}
        <button
          onClick={prev}
          className="absolute left-2 md:left-0 z-20 bg-yellow-400 w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center shadow"
        >
          {"<"}
        </button>

        {/* Cards (UNCHANGED) */}
        <div className="flex gap-4 md:gap-6 items-center justify-center overflow-x-auto px-6 md:px-0">
          {testimonials.map((item, i) => (
            <TestimonialCard
              key={i}
              data={item}
              active={i === index}
            />
          ))}
        </div>

        {/* Right Button */}
        <button
          onClick={next}
          className="absolute right-2 md:right-0 z-20 bg-yellow-400 w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center shadow"
        >
          {">"}
        </button>

      </div>

      {/* Indicators */}
      <div className="flex justify-center gap-2 mt-6 md:mt-8">
        {testimonials.map((_, i) => (
          <div
            key={i}
            className={`h-2 rounded-full transition-all ${
              i === index ? "w-8 bg-blue-900" : "w-2 bg-gray-300"
            }`}
          />
        ))}
      </div>

    </section>
  );
}