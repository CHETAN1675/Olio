import React from "react";

const features = [
  {
    title: "Official Meta & Google Partners",
    desc: "Only 10% of all marketing agencies globally are Google Partners",
    icon: "/icons/icon7.png",
  },
  {
    title: "Industry Focused",
    desc: "All solutions under one roof",
    icon: "/icons/icon8.png",
  },
  {
    title: "10+ Years in Business",
    desc: "Proven growth systems for industrial and B2B companies.",
    icon: "/icons/icon9.png",
  },
  {
    title: "50+ Cr Revenue Generated",
    desc: "Approx for our clients",
    icon: "/icons/icon10.png",
  },
];

const WhyChoose = () => {
  return (
    <section className="relative bg-[#011F5B] text-white py-20 px-6 md:px-16 overflow-hidden">
      
      {/* Background shapes */}
      <div className="absolute left-[-150px] top-[-50px] w-[350px] h-[250px] bg-[#022871]/30 rotate-90 rounded-lg"></div>
      <div className="absolute right-[-200px] bottom-[-100px] w-[550px] h-[400px] bg-[#022871]/30 -rotate-90 rounded-lg"></div>

      {/* Content */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {features.map((item, index) => (
            <div
              key={index}
              className="flex flex-col gap-6 p-6"
            >
              {/* Icon */}
               <img
                src={item.icon}
                alt={item.title}
                className="w-12 h-12 object-contain"
              />

              {/* Text */}
              <div className="flex flex-col gap-3">
                <h3 className="text-lg font-semibold leading-snug">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-200 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;