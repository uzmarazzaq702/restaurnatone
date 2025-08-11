import React from "react";
import { ShoppingBag } from "lucide-react";

const Menu01 = () => {
  return (
    <div
      className="relative py-16 sm:py-20 md:py-25 px-4 sm:px-6 md:px-8 overflow-hidden"
      style={{
        backgroundImage:
          "url('https://www.radiustheme.com/demo/wordpress/themes/foodymat/wp-content/uploads/2024/12/bread_banner-scaled.jpg')",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundAttachment: "scroll",
      }}
    >
      <div className="max-w-7xl mx-auto">
        <div
          className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
        >
          {/* Left Section */}
          <div className="flex-1">
            <h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4"
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              Menu 01
            </h1>

            <div
              className="flex flex-wrap items-center gap-2 text-sm sm:text-base mb-6 sm:mb-8"
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-duration="2000"
            >
              <span className="text-black text-[16px] sm:text-[18px]">foodymat</span>
              <span className="text-gray-900">/</span>
              <span className="text-[#E9004B] font-medium text-[16px] sm:text-[18px]">
                Menu 01
              </span>
            </div>
          </div>

          {/* Right Section */}
          <div
            className="flex-shrink-0"
            data-aos="fade-left"
            data-aos-delay="500"
            data-aos-duration="2000"
          >
            <ShoppingBag className="w-10 h-10 sm:w-12 sm:h-12 text-[#E9004B]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu01;
