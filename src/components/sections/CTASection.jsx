export default function CTASection() {
  return (
    <section className="w-full bg-[#011F5B] py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-xl flex flex-col gap-10">

          {/* Heading */}
          <h2 className="text-white text-4xl md:text-5xl font-semibold leading-[1.1] tracking-[-1.5px]">
            
            <span className="relative inline-block">
              {/* highlight */}
              <span className="absolute left-0 bottom-0  w-full h-13 bg-[#135BEC] -rotate-1"></span>
              
              <span className="relative px-1">
                Let’s Have A Conversation
              </span>
            </span>

            <br />
            About Your Growth
          </h2>

          {/* Description */}
          <p className="text-[#F2F2F2] text-lg leading-[1.5]">
            Tell us about your challenges, and we'll share how we've helped similar industrial manufacturers build stronger pipelines.
          </p>

        <button className="flex items-center justify-center gap-3 w-[184px] h-[48px] bg-[#FFC40C] rounded-lg text-black font-medium text-base leading-6 hover:opacity-90 transition">
          Book A Free Call
          <span className="text-base">{">"}</span>
        </button>

        </div>
      </div>
    </section>
  );
}