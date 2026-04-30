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
    <section className="w-full py-20">
      <div className="max-w-[1280px] mx-auto px-4 flex flex-col gap-16">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center gap-6 max-w-[628px] mx-auto">
          
         <h2 className="relative text-[48px] leading-[110%] font-semibold tracking-[-1.5px] text-[#011F5B]">
             We Excel With <br />

        <span className="relative inline-block text-white">
          <span className="relative z-10">
            Complex B2B Businesses
          </span>

          {/* Blue highlight only for this line */}
          <span className="absolute left-0 bottom-0 w-full h-[90%] bg-blue-600 rotate-[1deg] z-0"></span>
        </span>
      </h2>

          <p className="text-[18px] text-[#595959] leading-[140%]">
            If your products are technical, your sales cycles are long, and your buyers are sophisticated, we speak your language.
          </p>

          <button className="bg-yellow-400 hover:bg-yellow-300 text-black px-6 py-3 rounded-lg font-medium flex items-center gap-2">
            See How We Help Your Industry
            <span>→</span>
          </button>
        </div>

        {/* Cards */}
        <div className="flex gap-6 overflow-x-auto pb-4">
          {cards.map((card, i) => (
            <div
              key={i}
              className="min-w-[320px] md:min-w-[380px] h-[458px] rounded-2xl overflow-hidden relative flex-shrink-0"
            >
              {card.featured ? (
                <div className="bg-[#0B2A66] text-white h-full p-8 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-semibold mb-3">
                      {card.title}
                    </h3>
                    <p className="text-sm text-gray-300">
                      {card.desc}
                    </p>
                  </div>

                  {/* Decorative triangle */}
                  <div className="w-32 h-32 bg-gradient-to-tr from-blue-300 to-transparent rotate-45 self-end"></div>
                </div>
              ) : (
                <>
                  {/* Background Image */}
                  <img
                    src={card.image}
                    alt={card.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />

                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-transparent"></div>

                  {/* Title */}
                  <h3 className="absolute top-6 left-6 right-6 text-white text-lg font-semibold">
                    {card.title}
                  </h3>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}