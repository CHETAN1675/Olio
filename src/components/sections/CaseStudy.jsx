import React, { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";

const data = [
  {
    image: "/CaseStudy/cs1.png",
    title: "$4.2M in New Pipeline Value",
    desc: "A specialty machinery company used multi-channel demand generation to reach engineering decision-makers effectively.",
    stats: [
      { label: "Cost of Labour", value: "-18%" },
      { label: "Forecast Accuracy", value: "98%" },
    ],
  },
  {
    image: "/CaseStudy/cs2.png",
    title: "$2.1M Revenue Growth",
    desc: "Optimized campaigns to boost conversions and revenue growth.",
    stats: [
      { label: "Conversion Rate", value: "+35%" },
      { label: "CAC", value: "-22%" },
    ],
  },
  {
    image: "/CaseStudy/cs3.png",
    title: "300% Lead Increase",
    desc: "Inbound strategy that scaled qualified leads dramatically.",
    stats: [
      { label: "Leads", value: "+300%" },
      { label: "ROI", value: "4x" },
    ],
  },
];

export default function CaseStudy() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);

  useEffect(() => {
    if (!emblaApi) return;

    setScrollSnaps(emblaApi.scrollSnapList());
    setSelectedIndex(emblaApi.selectedScrollSnap());

    emblaApi.on("select", () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    });
  }, [emblaApi]);

  return (
    <section className="px-4 md:px-10 lg:px-20 py-14 md:py-24">

      {/* HEADER */}
      <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row md:justify-between md:items-center gap-6 mb-10 md:mb-12">

        {/* TITLE */}
        <div className="relative w-fit">
          
          <div className="absolute bg-blue-600 w-full md:w-[270px] h-[50px] md:h-[60px] left-0 top-2 rotate-[-0.6deg] -z-10" />

          <h2 className="text-[#011F5B] text-3xl md:text-5xl font-semibold leading-tight">
            <span className="text-white">Real Results</span> From <br /> Real Clients
          </h2>

        </div>

        {/* BUTTON */}
        <button className="bg-yellow-400 px-5 py-3 rounded-lg font-medium flex items-center gap-2 w-fit">
          Read Case Studies {">"}
        </button>

      </div>

      {/* CAROUSEL */}
      <div className="max-w-[1280px] mx-auto">

        <div
          className="overflow-hidden cursor-grab active:cursor-grabbing"
          ref={emblaRef}
        >
          <div className="flex">

            {data.map((item, i) => (
              <div className="flex-[0_0_100%]" key={i}>

                <div className="relative h-[420px] md:h-[550px] rounded-2xl overflow-hidden shadow-lg">

                  {/* IMAGE */}
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />

                  {/* OVERLAY */}
                  <div className="absolute inset-0 bg-black/50" />

                  {/* CONTENT CARD */}
                  <div className="
                    absolute bottom-4 md:bottom-8 left-4 md:left-8
                    right-4 md:right-auto
                    md:w-[540px]
                    bg-white p-4 md:p-6 rounded-xl shadow-2xl border border-gray-100
                    flex flex-col gap-4 md:gap-6
                  ">

                    <h3 className="text-lg md:text-xl font-semibold text-blue-900">
                      {item.title}
                    </h3>

                    <p className="text-gray-600 text-sm leading-snug">
                      {item.desc}
                    </p>

                    {/* STATS */}
                    <div className="flex gap-4 md:gap-6 border-t pt-3 md:pt-4">

                      {item.stats.map((s, idx) => (
                        <div key={idx} className="flex flex-col">
                          <span className="text-[10px] md:text-xs text-gray-500">
                            {s.label}
                          </span>
                          <strong className="text-lg md:text-2xl font-semibold text-blue-900">
                            {s.value}
                          </strong>
                        </div>
                      ))}

                    </div>

                  </div>

                </div>

              </div>
            ))}

          </div>
        </div>

        {/* DOTS */}
        <div className="flex justify-center gap-2 mt-6">

          {scrollSnaps.map((_, i) => (
            <button
              key={i}
              onClick={() => emblaApi && emblaApi.scrollTo(i)}
              className={`h-2 rounded-full transition-all ${
                i === selectedIndex
                  ? "w-8 bg-blue-900"
                  : "w-2 bg-gray-300"
              }`}
            />
          ))}

        </div>

      </div>

    </section>
  );
}