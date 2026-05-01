import RightScrollingCards from "./RightScrollingCards";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6 pt-0 pb-16 md:pb-24 flex flex-col md:flex-row items-center gap-10 md:gap-16">
        
        {/* LEFT */}
        <div className="w-full md:w-1/2 space-y-6 text-center md:text-left">
          
          <span className=" text-xs tracking-widest uppercase bg-blue-500/10 text-[#135BEC] px-3 py-1 rounded-md">
            B2B Revenue Growth
          </span>

          <h1 className="mt-5 text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight text-[#011F5B]">
            <span className="inline-block bg-[#0242C1] text-white px-3 py-1 rotate-[-2deg]">
              3X Your Pipeline
            </span>{" "}
            with <br className="hidden sm:block" />
            Sales-Ready Demand
          </h1>

          <p className="text-[#595959] text-base md:text-lg max-w-xl mx-auto md:mx-0">
            Give your lead pipeline a 340% boost with high-value buyers who don’t
            need discounting to convert, with significantly shorter sales cycles.
          </p>

          <button className="bg-yellow-400 text-black px-6 py-3 rounded-lg font-medium flex items-center justify-center md:justify-start gap-2 mx-auto md:mx-0">
            Book A Free Call <span>{">"}</span>
          </button>
        </div>

        {/* RIGHT */}
        <div className="w-full md:w-1/2">
          <RightScrollingCards />
        </div>

      </div>
    </section>
  );
}