export default function Insignts() {
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
    <section className=" text-white px-20 py-24">
      {/* Header */}
      <div className="flex justify-between items-center mb-12">
        <div className="max-w-xl">
          <h2 className="text-[48px] leading-[110%] font-semibold tracking-[-1.5px] capitalize">
            <span className="inline-block bg-[#135BEC] text-white px-2 py-[2px] rotate-[-0.65deg]">
              Valuable Insights
            </span>
            <br />
            <span className="text-[#011F5B]">For Faster Growth</span>
          </h2>

          <p className="text-[#475569] mt-4 text-[16px] leading-[140%]">
            Discover experience-based insights on the challenges, solutions,
            trends, best practices, and more in our blog space.
          </p>
        </div>

        <button className="bg-yellow-400 text-black px-5 py-3 rounded-lg font-medium flex items-center gap-2 hover:bg-yellow-300 transition">
          See All Articles →
        </button>
      </div>

      {/* Cards */}
      <div className="flex gap-6">
        {cards.map((card) => (
          <div key={card.id} className="w-[411px]">
            {/* Image */}
            <div className="h-[240px] rounded-2xl overflow-hidden">
              <img
                src={card.image}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>

            {/* Tag  */}
            <div className="mt-4">
              <span className="bg-gray-200/80 text-black text-xs uppercase tracking-wider px-3 py-1 rounded-md inline-block">
                {card.tag}
              </span>
            </div>

            {/* Content */}
            <div className="mt-3 space-y-4">
              <h3 className="text-[20px] leading-[130%] font-semibold text-[#171717]">
                {card.title}
              </h3>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full overflow-hidden">
                  <img
                    src="/images1/avatar.jpg"
                    alt="author"
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="text-[#595959]">{card.author}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}