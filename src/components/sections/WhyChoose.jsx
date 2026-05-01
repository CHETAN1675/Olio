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
    <section className="relative bg-[#011F5B] text-white py-14 md:py-20 px-4 md:px-16 overflow-hidden">
      
      {/* Background shapes */}
      <div className="absolute left-[-120px] top-[-80px] w-[300px] md:w-[350px] h-[200px] md:h-[250px] bg-[#022871]/30 rotate-90 rounded-lg" />
      <div className="absolute right-[-180px] bottom-[-120px] w-[420px] md:w-[550px] h-[300px] md:h-[400px] bg-[#022871]/30 -rotate-90 rounded-lg" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/*   wrapper to position vertical lines */}
        <div className="relative">
          
          {/*  vertical divider lines */}
          <div className="hidden lg:block absolute top-0 bottom-0 left-1/4 w-px bg-white/20" />
          <div className="hidden lg:block absolute top-0 bottom-0 left-2/4 w-px bg-white/20" />
          <div className="hidden lg:block absolute top-0 bottom-0 left-3/4 w-px bg-white/20" />

          {/* Content Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
            
            {features.map((item, index) => (
              <div
                key={index}
                className="flex flex-col gap-5 p-5 md:p-6 rounded-xl transition hover:bg-white/5"
              >
                
                <img
                  src={item.icon}
                  alt={item.title}
                  className="w-10 h-10 md:w-12 md:h-12 object-contain"
                />

                <div className="flex flex-col gap-2">
                  <h3 className="text-base md:text-lg font-semibold leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs md:text-sm text-gray-200 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

              </div>
            ))}

          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;