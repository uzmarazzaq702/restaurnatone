import React from "react";
import { ShoppingBag } from "lucide-react";

const Shoppage = () => {
  return (
    <div
      className="relative py-24 px-6 overflow-hidden"
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
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <h1 className="text-6xl font-bold text-gray-900 mb-4">
              Shop Page
            </h1>

            <div className="flex items-center gap-2 text-sm mb-8">
              <span className="text-black text-[18px]">foodymat</span>
              <span className="text-gray-900">/</span>
              <span className="text-[#E9004B] font-medium text-[18px]">
                Page
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shoppage;
