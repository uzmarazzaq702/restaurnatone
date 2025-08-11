import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { ShoppingBag } from "lucide-react";

const ProductDetail = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div
      className="relative px-4 sm:px-6 py-16 sm:py-20 lg:py-24 overflow-hidden"
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
        <div className="flex flex-col items-start justify-center" data-aos="fade-up">
          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-gray-900 mb-4">
            Product Details
          </h1>

          <div className="flex flex-wrap items-center gap-2 text-sm sm:text-base mb-6">
            <span className="text-black-600 text-[16px] sm:text-[18px]">foodymat</span>
            <span className="text-gray-900">/</span>
            <span className="text-black-600 text-[16px] sm:text-[18px]">product</span>
            <span className="text-gray-900">/</span>
            <span className="text-[#E9004B] font-medium text-[16px] sm:text-[18px]">
              Grilled Bones
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
