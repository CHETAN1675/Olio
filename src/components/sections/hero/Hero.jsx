import RightScrollingCards from "./RightScrollingCards" 
export default function Hero() {
  return (
    <section className="relative text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 py-24 flex gap-16">
        
        {/* LEFT */}
        <div className="w-1/2 space-y-6">
          <span className="text-xs tracking-widest uppercase bg-blue-500/10 text-blue-400 px-3 py-1 rounded-md">
            B2B Revenue Growth
          </span>

          <h1 className="mt-5 text-5xl font-semibold leading-tight text-[#011F5B]">
            <span className="inline-block bg-[#0242C1] text-white px-3 py-1 rotate-[-2deg]">
              3X Your Pipeline
            </span>{" "}
            with <br />
            Sales-Ready Demand
          </h1>

          <p className="text-[#595959] text-lg max-w-xl">
            Give your lead pipeline a 340% boost with high-value buyers who don’t
            need discounting to convert, with significantly shorter sales cycles.
          </p>

          <button className="bg-yellow-400 text-black px-6 py-3 rounded-lg font-medium flex items-center gap-2">
            Book A Free Call <span>{">"}</span>
          </button>
        </div>

        {/* RIGHT */}
       <RightScrollingCards/>
      </div>
    </section>
  );
}