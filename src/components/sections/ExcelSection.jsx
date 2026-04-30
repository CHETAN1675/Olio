export default function ExcelSection() {
  const cards = [
    {
      title: "Special Purpose Equipment Maker",
      image: "/industries/image1.png",
    },
    {
      title: "Engineering & Turnkey Solutions Providers",
      image: "/industries/image2.png",
    },
    {
      title: "Industrial Machinery Manufacturers",
      image: "/industries/image3.png",
    },
    {
      title: "OEM for Infrastructure & Manufacturing",
      image: "/industries/image4.png",
    },
    {
      title: "Niche Industrial Technology Providers",
      image: "/industries/image5.png",
    },
  ];

  return (
    <section className="w-full py-14 md:py-20 overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-4 flex flex-col gap-12 md:gap-16">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center gap-6 max-w-[700px] mx-auto">
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl leading-tight font-semibold tracking-[-1.5px] text-[#011F5B]">
            We Excel With <br />

            <span className="relative inline-block text-white">
              <span className="relative z-10">
                Complex B2B Businesses
              </span>

              <span className="absolute left-0 bottom-0 w-full h-[90%] bg-blue-600 rotate-[1deg] z-0"></span>
            </span>
          </h2>

          <p className="text-base md:text-lg text-[#595959] leading-relaxed">
            If your products are technical, your sales cycles are long, and your buyers are sophisticated, we speak your language.
          </p>

          <button className="bg-yellow-400 hover:bg-yellow-300 text-black px-6 py-3 rounded-lg font-medium flex items-center gap-2">
            See How We Help Your Industry <span>→</span>
          </button>
        </div>

        {/* Cards */}
        <div className="flex gap-4 md:gap-6 overflow-x-auto scrollbar-hide pb-4 snap-x snap-mandatory">
          
          {cards.map((card, i) => (
            <div
              key={i}
              className="min-w-[260px] sm:min-w-[300px] md:min-w-[360px] h-[420px] md:h-[458px] rounded-2xl overflow-hidden relative flex-shrink-0 snap-start"
            >
              {/* Image */}
              <img
                src={card.image}
                alt={card.title}
                className="absolute inset-0 w-full h-full object-cover"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/10" />

              {/* Title */}
              <h3 className="absolute top-5 left-5 right-5 text-white text-base md:text-lg font-semibold">
                {card.title}
              </h3>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}