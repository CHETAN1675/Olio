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
    setIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const next = () => {
    setIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <section className="relative py-24 px-6 lg:px-20  overflow-hidden">
      {/* Heading */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-4xl lg:text-5xl font-semibold">
          Trusted By{" "}
          <span className="relative inline-block">
            <span className="absolute inset-0 bg-blue-600 -rotate-1 rounded"></span>
            <span className="relative text-white px-2">
              Industry Leaders
            </span>
          </span>
        </h2>

        <p className="mt-4 text-gray-500">
          Discover how teams around the world are scaling their operations and improving efficiency.
        </p>
      </div>

      {/* Slider */}
      <div className="relative max-w-6xl mx-auto flex items-center justify-center">
        
        {/* Left Button */}
        <button
          onClick={prev}
          className="absolute left-0 z-20 bg-yellow-400 w-12 h-12 rounded-xl flex items-center justify-center shadow"
        >
          ←
        </button>

        {/* Cards Row */}
        <div className="flex gap-6 items-center justify-center">
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
          className="absolute right-0 z-20 bg-yellow-400 w-12 h-12 rounded-xl flex items-center justify-center shadow"
        >
          →
        </button>
      </div>

      {/* Indicators */}
      <div className="flex justify-center gap-2 mt-8">
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