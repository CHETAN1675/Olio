import { useState } from "react";
import Vector from "../../assets/Vector.png";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full flex items-center justify-between h-[73px] px-4 md:px-8 bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
      
      {/* Logo */}
      <div className="flex items-center">
        <img src={Vector} alt="Olio Maximus" className="h-6 w-auto" />
      </div>

      {/* Desktop Nav */}
      <nav className="hidden md:flex gap-8">
        <a href="/#services" className="text-[16px] font-medium text-[#171717] hover:opacity-70">
          Services
        </a>
        <a href="#case-studies" className="text-[16px] font-medium text-[#171717] hover:opacity-70">
          Case Studies
        </a>
        <a href="/#about" className="text-[16px] font-medium text-[#171717] hover:opacity-70">
          About Us
        </a>
        <a href="/#insights" className="text-[16px] font-medium text-[#171717] hover:opacity-70">
          Insights
        </a>
      </nav>

      {/* Desktop Button */}
      <button className="hidden md:block h-10 px-5 min-w-[120px] bg-black text-white rounded-[10px] text-sm font-medium hover:opacity-85">
        Get In Touch
      </button>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-black"
        onClick={() => setOpen(!open)}
      >
        ☰
      </button>

      {/* Mobile Menu */}
      {open && (
        <div className="absolute top-[73px] left-0 w-full bg-white border-b border-gray-200 flex flex-col items-center gap-4 py-6 md:hidden">
          <a href="/#services">Services</a>
          <a href="#case-studies">Case Studies</a>
          <a href="/#about">About Us</a>
          <a href="/#insights">Insights</a>
          <button className="mt-2 h-10 px-5 bg-black text-white rounded-[10px]">
            Get In Touch
          </button>
        </div>
      )}
    </header>
  );
}