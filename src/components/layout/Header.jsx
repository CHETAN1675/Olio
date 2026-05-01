import Vector from "../../assets/Vector.png";

export default function Header() {
  return (
    <header className="w-full bg-white border-b border-gray-200">
      
      <div className="flex items-center justify-between h-[73px] px-4 md:px-[80px] max-w-[1440px] mx-auto">
        
        {/* Logo */}
        <div className="flex items-center">
          <img src={Vector} alt="Olio Maximus" className="h-[19.27px] w-auto" />
        </div>

        {/* Right Section */}
        <div className="flex items-center justify-end gap-8 flex-1">

          {/* Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="/#services" className="text-[16px] font-medium text-[#171717] leading-[130%]">
              Services
            </a>
            <a href="#case-studies" className="text-[16px] font-medium text-[#171717] leading-[130%]">
              Case Studies
            </a>
            <a href="/#about" className="text-[16px] font-medium text-[#171717] leading-[130%]">
              About Us
            </a>
            <a href="/#insights" className="text-[16px] font-medium text-[#171717] leading-[130%]">
              Insights
            </a>
          </nav>

          {/* Button */}
          <button className="hidden md:flex items-center justify-center h-10 px-5 min-w-[120px] bg-black text-white rounded-[10px] text-[14px] font-medium leading-[20px]">
            Get In Touch
          </button>
        </div>

      </div>
    </header>
  );
}