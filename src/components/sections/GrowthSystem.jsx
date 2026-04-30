export default function GrowthSystem() {
  return (
    <section className="w-full py-14 md:py-20 px-4 md:px-6 lg:px-20 flex flex-col items-center gap-12 md:gap-14">
      
      {/* Heading */}
      <div className="relative text-center max-w-2xl">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-[#011F5B] leading-tight">
          Three Layer <br />

          <span className="relative inline-block text-white">
            <span className="absolute inset-0 bg-blue-600 -rotate-1"></span>
            <span className="relative z-10 px-2">
              Growth System
            </span>
          </span>
        </h2>
      </div>

      {/* Content */}
      <div className="flex flex-col lg:flex-row gap-10 md:gap-16 max-w-7xl w-full">
        
        {/* LEFT SIDE */}
        <div className="flex flex-col divide-y divide-gray-300 w-full lg:max-w-xl">
          
          {/* Item 1 */}
          <div className="flex gap-5 md:gap-6 py-8 md:py-10">
            <img src="icons/icon11.png" className="w-10 h-10 md:w-12 md:h-12 object-contain shrink-0" />
            <div>
              <h3 className="text-base md:text-lg font-semibold mb-2">
                Demand & Revenue Generation
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Pipeline filled with qualified opportunities that actually close.
                Multi-channel programs that bring decision-makers in, not the other way around.
              </p>
              <div className="w-28 md:w-40 h-1 bg-yellow-400 mt-4"></div>
            </div>
          </div>

          {/* Item 2 */}
          <div className="flex gap-5 md:gap-6 py-8 md:py-10">
            <img src="icons/icon12.png" className="w-10 h-10 md:w-12 md:h-12 object-contain shrink-0" />
            <div>
              <h3 className="text-base md:text-lg font-semibold mb-2">
                Integrated Marketing Execution
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                From brand positioning to ABM campaigns to thought leadership,
                execution is fully handled so leadership can focus on the business.
              </p>
            </div>
          </div>

          {/* Item 3 */}
          <div className="flex gap-5 md:gap-6 py-8 md:py-10">
            <img src="icons/icon13.png" className="w-10 h-10 md:w-12 md:h-12 object-contain shrink-0" />
            <div>
              <h3 className="text-base md:text-lg font-semibold mb-2">
                Strategy and Consulting
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Clear roadmaps that connect business goals to real market opportunities.
              </p>
            </div>
          </div>

        </div>

        {/* RIGHT SIDE (FUNNEL) */}
        <div className="bg-[#F0F5FF] rounded-2xl p-4 md:p-6 w-full flex justify-center">
          
          <div className="w-full max-w-[480px] flex flex-col gap-3 md:gap-4">

            {/* Layer 1 */}
            <div className="text-white text-center py-5 md:py-6 px-3 md:px-4 transition-transform hover:-translate-y-1"
              style={{
                background: "#0B2A66",
                clipPath: "polygon(0% 0%, 100% 0%, 95% 100%, 5% 100%)",
                boxShadow: "0px 10px 15px -3px rgba(0,0,0,0.1)",
              }}>
              <p className="text-[10px] uppercase opacity-70 mb-1">Leads</p>
              <p className="text-xs md:text-sm">
                Up to 18,000 prospects
              </p>
            </div>

            {/* Layer 2 */}
            <div className="text-white text-center py-5 md:py-6 px-3 md:px-4 transition-transform hover:-translate-y-1"
              style={{
                background: "#123A8C",
                clipPath: "polygon(5% 0%, 95% 0%, 90% 100%, 10% 100%)",
                boxShadow: "0px 10px 15px -3px rgba(0,0,0,0.1)",
              }}>
              <p className="text-[10px] uppercase opacity-70 mb-1">MQLs</p>
              <p className="text-xs md:text-sm">
                Up to 9,000 leads
              </p>
            </div>

            {/* Layer 3 */}
            <div className="text-white text-center py-5 md:py-6 px-3 md:px-4 transition-transform hover:-translate-y-1"
              style={{
                background: "#1A4FB0",
                clipPath: "polygon(10% 0%, 90% 0%, 85% 100%, 15% 100%)",
                boxShadow: "0px 10px 15px -3px rgba(0,0,0,0.1)",
              }}>
              <p className="text-[10px] uppercase opacity-70 mb-1">SQLs</p>
              <p className="text-xs md:text-sm">
                200 qualified meetings
              </p>
            </div>

            {/* Layer 4 */}
            <div className="text-white text-center py-5 md:py-6 px-3 md:px-4 transition-transform hover:-translate-y-1"
              style={{
                background: "#245FD1",
                clipPath: "polygon(15% 0%, 85% 0%, 80% 100%, 20% 100%)",
                boxShadow: "0px 10px 15px -3px rgba(0,0,0,0.1)",
              }}>
              <p className="text-[10px] uppercase opacity-70 mb-1">Opportunities</p>
              <p className="text-xs md:text-sm">
                10–30 closed deals
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}