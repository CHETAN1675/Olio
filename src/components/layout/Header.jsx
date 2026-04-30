import Vector from "../../assets/Vector.png"
export default function Header() {
  return (
    <header className="w-full flex items-center justify-between h-[73px] bg-white border-b border-gray-200">
      
      {/* Logo */}
      <div className="flex items-center">
        <img src={Vector} alt="Olio Maximus" className="h-6 w-auto" />
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-8">
        
        {/* Nav */}
        <nav className="flex gap-8">
          <a href="#" className="text-[16px] font-medium text-[#171717] hover:opacity-70">
            Services
          </a>
          <a href="#" className="text-[16px] font-medium text-[#171717] hover:opacity-70">
            Case Studies
          </a>
          <a href="#" className="text-[16px] font-medium text-[#171717] hover:opacity-70">
            About Us
          </a>
          <a href="#" className="text-[16px] font-medium text-[#171717] hover:opacity-70">
            Insights
          </a>
        </nav>

        {/* Button */}
        <button className="h-10 px-5 min-w-[120px] bg-black text-white rounded-[10px] text-sm font-medium hover:opacity-85">
          Get In Touch 
        </button>
      </div>
    </header>
  );
}