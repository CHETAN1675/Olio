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
    items: [
      "Funnel analytics",
      "AI insights",
      "Revenue attribution",
    ],
  },
];

export default function ComponentsSection() {
  return (
    <section className="py-20 px-6 text-center">
      {/* Heading */}
      <h2 className="text-4xl md:text-5xl font-semibold mb-16 text-[#011F5B] text-center">
        The Components Of Maximus <br />
        <span className="relative inline-block mt-3">
        <span className="absolute -top-1 -bottom-1 left-0 right-0 bg-blue-600 rotate-[0.55deg] rounded-sm"></span>
        <span className="relative text-white px-4 py-1">
          Revenue Growth Engine
        </span>
      </span>
      </h2>

            {/* Grid */}
            <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {cards.map((card, i) => (
            <Card key={i} {...card} />
          ))}

          {/* Final Card */}
          <div className="bg-[#011F5B] text-white rounded-xl p-8 flex flex-col justify-between min-h-[270px]">

            
            <img
              src="/component/img6.png"
              alt="final outcome"
              className="w-12 h-12 mb-6 object-contain"
            />

            <div>
              <h3 className="text-lg font-semibold mb-3">
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