import React from "react";
import { ShoppingCart } from "lucide-react";
import burgerone from "../../assets/burgerone.jpg";

const Burger = () => {
  return (
    <div className="overflow-x-hidden px-4 sm:px-6 lg:px-8 py-8">
      <div className="relative flex flex-col md:flex-row bg-pink-50 rounded-2xl overflow-hidden shadow-lg group max-w-7xl mx-auto">
        {/* LEFT SIDE - Image */}
        <div className="relative w-full md:w-1/2 overflow-hidden h-64 md:h-auto">
          <img
            src={burgerone}
            alt="American Pizza"
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
          />
        </div>

        {/* RIBBON - Top Right Slanted */}
        <div className="absolute top-12 right-[-60px] w-72 transform rotate-45 z-10 overflow-hidden border-y-2 border-black rounded-md pointer-events-none select-none">
          <div className="bg-[#EA1056] text-white text-[16px] font-bold text-center py-2 shadow-md">
            $15 OFF UPTO $100
          </div>
        </div>

        {/* RIGHT SIDE - Content */}
        <div className="w-full md:w-1/2 p-6 md:p-12 flex flex-col justify-center items-center text-center">
          {/* Categories */}
          <div className="flex gap-2 mb-3 flex-wrap justify-center">
            <span className="border border-gray-400 text-xs px-5 py-2 rounded-full hover:bg-[#EA1056] hover:text-white transition duration-300 cursor-pointer">
              Burger
            </span>
            <span className="border border-gray-400 text-xs px-5 py-2 rounded-full hover:bg-[#EA1056] hover:text-white transition duration-300 cursor-pointer">
              Fastfood
            </span>
          </div>

          {/* Rating */}
          <div className="flex items-center gap-1 text-yellow-500 text-sm mb-2">
            <span>⭐</span>
            <span>(2.5) Out Of 5</span>
          </div>

          {/* Title */}
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Crispy Fry Burger
          </h2>

          {/* Description */}
          <p className="text-gray-700 mb-6 text-base leading-relaxed max-w-xl text-[18px]">
            Lorem ipsum dolor sit amet consectetur. Habitasse metus urna risus
            nunc proin dignissim. Tellus fermentum diam the metus viverra netus
            amet. Turpis pulvinar suscipit vel. Feugiat the pellentesque
            pellentesque egestas the feugiat.
          </p>

          {/* Price & Button */}
          <div className="flex items-center gap-6 mt-4 flex-wrap justify-center">
            <div className="flex items-center gap-3">
              <span className="text-3xl font-bold text-gray-900">$9</span>
              <span className="text-3xl font-bold text-gray-900 line-through">$95</span>
            </div>

            <button className="flex items-center gap-2 border-2 border-[#EA1056] text-[#EA1056] font-semibold px-6 py-2 rounded-full hover:bg-gray-800 hover:text-white transition-all duration-300">
              <ShoppingCart className="w-5 h-5" />
              Order Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Burger;
