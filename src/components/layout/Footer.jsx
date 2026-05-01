import React from "react";
import logo from "../../assets/Vector.png";

const Footer = () => {
  return (
    <footer className="w-full bg-white border-t border-gray-200">
      
      <div className="max-w-[1440px] mx-auto px-4 md:px-[80px] py-[64px] flex flex-col gap-[64px]">

        {/* TOP SECTION */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[48px]">

          {/* Column 1 - Brand */}
          <div className="flex flex-col gap-5 max-w-[260px]">

            <img
              src={logo}
              alt="Olio Maximus"
              className="h-[19.27px] w-auto"
            />

            <p className="text-[#4B5563] text-sm leading-[150%]">
              Strategic growth consulting for mid-market industrial firms.
            </p>

            <div className="flex flex-col gap-2 text-[#4B5563] text-sm">
              <p>info@oliomaximus.com</p>
              <p>+1 (312) 555-0140</p>
            </div>

          </div>

          {/* Column 2 */}
          <div>
            <h4 className="text-[#171717] font-medium text-[16px] mb-4">
              Company
            </h4>

            <ul className="flex flex-col gap-3 text-[#4B5563] text-sm">
              {["About", "Team", "Careers", "Contact"].map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h4 className="text-[#171717] font-medium text-[16px] mb-4">
              Services
            </h4>

            <ul className="flex flex-col gap-3 text-[#4B5563] text-sm">
              {[
                "Revenue Consulting",
                "Demand Generation",
                "Sales Enablement",
                "Market Strategy",
              ].map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h4 className="text-[#171717] font-medium text-[16px] mb-4">
              Resources
            </h4>

            <ul className="flex flex-col gap-3 text-[#4B5563] text-sm">
              {["Case Studies", "Blog", "Guides", "Downloads"].map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

        </div>

        {/* BOTTOM SECTION */}
        <div className="border-t border-gray-200 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-[#6B7280] gap-4">

          <p>© 2026 Olio Maximus. All rights reserved.</p>

          <div className="flex gap-6">
            <p>Privacy Policy</p>
            <p>Terms of Service</p>
          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;