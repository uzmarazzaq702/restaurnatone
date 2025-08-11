import React, { useEffect } from "react";
import { ShoppingBag } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const Mycontact = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div
      className="relative py-25 px-6 overflow-hidden"
      style={{
        backgroundImage:
          "url('https://www.radiustheme.com/demo/wordpress/themes/foodymat/wp-content/uploads/2024/12/bread_banner-scaled.jpg')",
        backgroundPosition: "55% 80%",
        backgroundRepeat: "no-repeat",
        backgroundSize: "160%",
        backgroundAttachment: "scroll",
      }}
      data-aos="fade-up"
    >
      <div className="max-w-7xl mx-auto" data-aos="fade-down">
        <div className="flex items-center justify-between">
          <div className="flex-1" data-aos="zoom-in">
            <h1
              className="text-6xl font-bold text-gray-900 mb-4"
              data-aos="fade-right"
            >
              My account
            </h1>

            <div
              className="flex items-center gap-2 text-sm mb-8"
              data-aos="fade-up"
            >
              <span className="text-black-600 text-[18px]">foodymat</span>
              <span className="text-gray-900">/</span>
              <span className="text-[#E9004B] font-medium text-[18px]">
                My account
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mycontact;
