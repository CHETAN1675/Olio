import Card from "./Card";

const cards = [
  {
    title: "Market Insights",
    icon: "/component/img1.png",
    items: [
      "Segment & industry analysis",
      "Buyer & committee mapping",
      "Competitive positioning",
    ],
  },
  {
    title: "Demand Generation",
    icon: "/component/img2.png",
    items: [
      "Multi-channel demand programs",
      "Account-Based Marketing",
      "Thought leadership visibility",
    ],
  },
  {
    title: "Pipeline Creation",
    icon: "/component/img3.png",
    items: [
      "Target account engagement",
      "Lead qualification systems",
      "Sales-ready conversations",
    ],
  },
  {
    title: "Sales Enablement",
    icon: "/component/img4.png",
    items: [
      "Stakeholder-specific messaging",
      "Technical storytelling",
      "Case-led positioning",
    ],
  },
  {
    title: "Intelligence & Optimization",
    icon: "/component/img5.png",
    items: ["Funnel analytics", "AI insights", "Revenue attribution"],
  },
];

export default function ComponentsSection() {
  return (
    <section className="py-14 md:py-20 px-4 md:px-6 text-center">
      
      {/* Heading */}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-12 md:mb-16 text-[#011F5B]">
        The Components Of Maximus <br />

        <span className="relative inline-block mt-3">
          <span className="absolute -top-1 -bottom-1 left-0 right-0 bg-blue-600 rotate-[0.55deg] rounded-sm"></span>
          <span className="relative text-white px-3 md:px-4 py-1">
            Revenue Growth Engine
          </span>
        </span>
      </h2>

      {/* Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
        
        {cards.map((card, i) => (
          <Card key={i} {...card} />
        ))}

        {/* Final Card */}
        <div className="bg-[#011F5B] text-white rounded-xl p-6 md:p-8 flex flex-col justify-between min-h-[240px] md:min-h-[270px] hover:scale-[1.02] transition-transform">

          <img
            src="/component/img6.png"
            alt="final outcome"
            className="w-10 h-10 md:w-12 md:h-12 mb-5 md:mb-6 object-contain"
          />

          <div>
            <h3 className="text-base md:text-lg font-semibold mb-3">
              The Final Outcome
            </h3>

            <p className="text-sm text-gray-200 leading-relaxed">
              Your Team Gets Sales-Qualified Leads. Their Role? Closing the Deals.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}