import React from "react";
import logo from "../../assets/Vector.png";

const Footer = () => {
  return (
    <footer className="bg-white px-4 md:px-10 lg:px-20 py-14 md:py-16">

      <div className="max-w-7xl mx-auto flex flex-col gap-12 md:gap-16">

        {/* TOP SECTION */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12">

          {/* Column 1 - Brand */}
          <div className="flex flex-col gap-5">

            <img
              src={logo}
              alt="Olio Maximus"
              className="w-[130px] md:w-[142px]"
            />

            <p className="text-gray-600 text-sm leading-relaxed">
              Strategic growth consulting for mid-market industrial firms.
            </p>

            <div className="flex flex-col gap-2 text-gray-600 text-sm">
              <p className="hover:text-[#011F5B] transition">info@oliomaximus.com</p>
              <p className="hover:text-[#011F5B] transition">+1 (312) 555-0140</p>
            </div>

          </div>

          {/* Column 2 */}
          <div>
            <h4 className="text-[#10192E] font-medium mb-4">Company</h4>

            <ul className="flex flex-col gap-3 text-gray-600 text-sm">

              {["About", "Team", "Careers", "Contact"].map((item) => (
                <li
                  key={item}
                  className="cursor-pointer hover:text-[#011F5B] transition"
                >
                  {item}
                </li>
              ))}

            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h4 className="text-[#10192E] font-medium mb-4">Services</h4>

            <ul className="flex flex-col gap-3 text-gray-600 text-sm">

              {[
                "Revenue Consulting",
                "Demand Generation",
                "Sales Enablement",
                "Market Strategy",
              ].map((item) => (
                <li
                  key={item}
                  className="cursor-pointer hover:text-[#011F5B] transition"
                >
                  {item}
                </li>
              ))}

            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h4 className="text-[#10192E] font-medium mb-4">Resources</h4>

            <ul className="flex flex-col gap-3 text-gray-600 text-sm">

              {["Case Studies", "Blog", "Guides", "Downloads"].map(
                (item) => (
                  <li
                    key={item}
                    className="cursor-pointer hover:text-[#011F5B] transition"
                  >
                    {item}
                  </li>
                )
              )}

            </ul>
          </div>

        </div>

        {/* BOTTOM SECTION */}
        <div className="border-t border-gray-200 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">

          <p>© 2026 Olio Maximus. All rights reserved.</p>

          <div className="flex gap-6">

            <p className="cursor-pointer hover:text-[#011F5B] transition">
              Privacy Policy
            </p>

            <p className="cursor-pointer hover:text-[#011F5B] transition">
              Terms of Service
            </p>

          </div>

        </div>

      </div>

    </footer>
  );
};

export default Footer;