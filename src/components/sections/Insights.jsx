export default function Insights() {
  const cards = [
    {
      id: 1,
      image: "/images1/1.png",
      tag: "Blog",
      title: "Lorem ipsum dolor sit amet consectetur. Volutpat fermentum eu.",
      author: "Jane Doe",
    },
    {
      id: 2,
      image: "/images1/2.png",
      tag: "Guides",
      title: "Lorem ipsum dolor sit amet consectetur. Volutpat fermentum eu.",
      author: "Jane Doe",
    },
    {
      id: 3,
      image: "/images1/3.png",
      tag: "Blog",
      title: "Lorem ipsum dolor sit amet consectetur. Volutpat fermentum eu.",
      author: "Jane Doe",
    },
  ];

  return (
    <section className="px-4 md:px-10 lg:px-20 py-14 md:py-24 bg-white">

      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-8 mb-12">

        <div className="max-w-2xl">

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight tracking-[-1.5px] capitalize text-[#011F5B]">

            <span className="inline-block bg-[#135BEC] text-white px-2 py-[2px] rotate-[-0.65deg]">
              Valuable Insights
            </span>

            <br />

            <span className="text-[#011F5B]">
              For Faster Growth
            </span>

          </h2>

          <p className="text-gray-600 mt-4 text-sm md:text-base leading-relaxed">
            Discover experience-based insights on challenges, solutions,
            trends, and best practices in our blog space.
          </p>

        </div>

        <button className="bg-yellow-400 text-black px-5 py-3 rounded-lg font-medium flex items-center gap-2 hover:bg-yellow-300 transition w-fit">
          See All Articles {">"}
        </button>

      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

        {cards.map((card) => (
          <div
            key={card.id}
            className="group cursor-pointer"
          >

            {/* Image */}
            <div className="h-[200px] md:h-[240px] rounded-2xl overflow-hidden">
              <img
                src={card.image}
                alt=""
                className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
              />
            </div>

            {/* Tag */}
            <div className="mt-4">
              <span className="bg-gray-200/80 text-black text-xs uppercase tracking-wider px-3 py-1 rounded-md inline-block">
                {card.tag}
              </span>
            </div>

            {/* Content */}
            <div className="mt-3 space-y-3">

              <h3 className="text-base md:text-lg font-semibold text-[#171717] leading-snug">
                {card.title}
              </h3>

              {/* Author */}
              <div className="flex items-center gap-3">

                <div className="w-9 h-9 md:w-10 md:h-10 rounded-full overflow-hidden bg-gray-200">
                  <img
                    src="/images1/avatar.jpg"
                    alt="author"
                    className="w-full h-full object-cover"
                  />
                </div>

                <span className="text-gray-600 text-sm">
                  {card.author}
                </span>

              </div>

            </div>

          </div>
        ))}

      </div>

    </section>
  );
}