export default function CTASection() {
  return (
    <section className="w-full bg-[#011F5B] py-14 md:py-24 px-4 md:px-6">

      <div className="max-w-6xl mx-auto">

        <div className="max-w-2xl flex flex-col gap-8 md:gap-10">

          {/* Heading */}
          <h2 className="text-white text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight tracking-[-1.5px]">

            <span className="relative inline-block">

              {/* highlight */}
              <span className="absolute left-0 bottom-1 w-full h-[85%] bg-[#135BEC] -rotate-1"></span>

              <span className="relative px-1">
                Let’s Have A Conversation
              </span>

            </span>

            <br />

            About Your Growth

          </h2>

          {/* Description */}
          <p className="text-gray-200 text-base md:text-lg leading-relaxed">
            Tell us about your challenges, and we'll share how we've helped similar industrial manufacturers build stronger pipelines.
          </p>

          {/* Button */}
          <button className="flex items-center justify-center gap-2 w-fit px-6 py-3 bg-[#FFC40C] rounded-lg text-black font-medium text-base hover:opacity-90 transition">

            Book A Free Call
            <span>{">"}</span>

          </button>

        </div>

      </div>

    </section>
  );
}