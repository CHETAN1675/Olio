import React from "react";

const features = [
  {
    title: "Getting Leads, But Low Quality",
    desc: "Volume without value drains resources. Your sales team is wasting time filtering noise instead of closing deals.",
    icon: "/icons/icon1.png",
  },
  {
    title: "The Best Clients Can’t Find You",
    desc: "Your marketing team is pushing content, but it’s not reaching the right decision-makers, be it CXOs, procurement heads, or engineering leads.",
    icon: "/icons/icon2.png",
  },
  {
    title: "Long Sales Cycles, Lower Conversions",
    desc: "With 6-12 months sales cycles, leads often grow cold. You need a structured nurturing system to stay top-of-mind with prospects.",
    icon: "/icons/icon3.png",
  },
  {
    title: "Wrong Positioning Underselling You",
    desc: "Despite having the technical capability, your brand still feels like a local supplier. Your brand should be perceived as a premium solution provider.",
    icon: "/icons/icon4.png",
  },
  {
    title: "You Are More Than a Cheaper Option",
    desc: "You’re being asked to discount your services to compete on price. You need a value-led positioning that attracts high-ticket clients.",
    icon: "/icons/icon5.png",
  },
  {
    title: "Absence of Digital Brand Authority",
    desc: "Your online presence lacks the authority needed to attract high-value leads. You need online credibility, built through the right content and leadership perception.",
    icon: "/icons/icon6.png",
  },
];

export default function WhyStuck() {
  return (
    <section className="bg-[#F2F6FF] py-14 md:py-20 px-4 md:px-6">
      
      <div className="max-w-6xl mx-auto text-center">
        
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-[#011F5B] leading-tight">
          Why Industrial B2B <br />
          <span className="bg-blue-600 text-white px-3 py-1 inline-block rotate-[-0.5deg]">
            Growth Feels Stuck
          </span>
        </h2>

        {/* Grid */}
        <div className="mt-12 md:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          
          {features.map((item, index) => (
            <div
              key={index}
              className="p-6 md:p-8 text-left border-b sm:border-r border-gray-200 last:border-b-0"
            >
              {/* ICON */}
              <img
                src={item.icon}
                alt={item.title}
                className="w-10 h-10 md:w-12 md:h-12 mb-4 object-contain"
              />

              <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-2">
                {item.title}
              </h3>

              <p className="text-sm text-gray-600 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}

        </div>

        {/* CTA */}
        <div className="mt-10 md:mt-12">
          <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-medium px-6 py-3 rounded-lg transition">
            Let’s Fix This {">"}
          </button>
        </div>

      </div>
    </section>
  );
}