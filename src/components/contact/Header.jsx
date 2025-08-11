import React, { useEffect } from "react";
import { ShoppingBag } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const Header = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div
      className="relative py-16 md:py-25 px-4 md:px-6 overflow-hidden"
      style={{
        backgroundImage:
          "url('https://www.radiustheme.com/demo/wordpress/themes/foodymat/wp-content/uploads/2024/12/bread_banner-scaled.jpg')",
        backgroundPosition: "55% 80%",
        backgroundRepeat: "no-repeat",
        backgroundSize: "160%",
        backgroundAttachment: "scroll",
      }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
          <div
            className="flex-1"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
              Contacts
            </h1>

            <div className="flex flex-wrap items-center gap-2 text-sm mb-8">
              <span className="text-black-600 text-[16px] md:text-[18px]">
                foodymat
              </span>
              <span className="text-gray-900">/</span>
              <span className="text-[#E9004B] font-medium text-[16px] md:text-[18px]">
                Contacts
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
