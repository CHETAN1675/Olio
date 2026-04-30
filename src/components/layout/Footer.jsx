import React from "react";
import logo from "../../assets/Vector.png"; 

const Footer = () => {
  return (
    <footer className="bg-white px-6 md:px-16 lg:px-[100px] py-16">
      <div className="max-w-[1240px] mx-auto flex flex-col gap-16">
        
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Column 1 - Brand */}
          <div className="flex flex-col gap-6">
            <img src={logo} alt="Olio Maximus" className="w-[142px]" />

            <p className="text-[#576175] text-sm leading-[130%]">
              Strategic growth consulting for mid-market industrial firms.
            </p>

            <div className="flex flex-col gap-2 text-[#576175] text-sm">
              <p>info@oliomaximus.com</p>
              <p>+1 (312) 555-0140</p>
            </div>
          </div>

          {/* Column 2 */}
          <div>
            <h4 className="text-[#10192E] font-medium mb-4">Company</h4>
            <ul className="flex flex-col gap-3 text-[#576175] text-sm">
              <li>About</li>
              <li>Team</li>
              <li>Careers</li>
              <li>Contact</li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h4 className="text-[#10192E] font-medium mb-4">Services</h4>
            <ul className="flex flex-col gap-3 text-[#576175] text-sm">
              <li>Revenue Consulting</li>
              <li>Demand Generation</li>
              <li>Sales Enablement</li>
              <li>Market Strategy</li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h4 className="text-[#10192E] font-medium mb-4">Resources</h4>
            <ul className="flex flex-col gap-3 text-[#576175] text-sm">
              <li>Case Studies</li>
              <li>Blog</li>
              <li>Guides</li>
              <li>Downloads</li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-[#576175]/30 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-[#576175]">
          <p>© 2026 Olio Maximus. All rights reserved.</p>

          <div className="flex gap-6">
            <p className="cursor-pointer">Privacy Policy</p>
            <p className="cursor-pointer">Terms of Service</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;