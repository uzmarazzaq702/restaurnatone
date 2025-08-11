import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Resent = () => {
  useEffect(() => {
    AOS.init({ once: true }); // Trigger animation only once
  }, []);

  return (
    <div
      className="relative py-[100px] px-6 overflow-hidden"
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
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between">
          <div className="flex-1">
            <h1
              className="text-4xl sm:text-6xl font-bold text-gray-900 mb-4"
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
            >
              Our Recent Posts
            </h1>

            <div
              className="flex flex-wrap items-center gap-2 text-sm mb-8"
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
            >
              <span className="text-black text-[16px] sm:text-[18px]">foodymat</span>
              <span className="text-gray-900">/</span>
              <span className="text-black text-[16px] sm:text-[18px] hover:text-amber-600">
                Product
              </span>
              <span className="text-gray-900">/</span>
              <span className="text-[#E9004B] font-medium text-[16px] sm:text-[18px]">
                My account
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resent;
