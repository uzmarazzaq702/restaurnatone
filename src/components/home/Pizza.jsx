import React from "react";
import { ShoppingCart } from "lucide-react";
import home from "../../assets/home.jpg";

const PizzaCard = () => {
  return (
    <div className="relative bg-pink-50 rounded-2xl overflow-hidden shadow-md flex flex-col md:flex-row p-4 md:p-0 overflow-x-hidden max-w-7xl mx-auto">
      {/* Top-left Discount Ribbon */}
      <div className="absolute top-16 -left-12 w-72 transform -rotate-45 z-10 overflow-hidden border-y-2 border-black rounded-md">
        <div className="bg-[#EA1056] text-gray-200 text-[16px] font-bold text-center py-2 shadow-md">
          $15 OFF UPTO $100
        </div>
      </div>

      <div className="flex-1 p-6 md:p-12 flex flex-col justify-center items-center text-center">
        <div className="flex gap-2 mb-3 flex-wrap justify-center">
          <span className="border border-gray-400 text-xs px-5 py-3 rounded-full hover:bg-[#EA1056] hover:text-white transition duration-300 whitespace-nowrap">
            Chinese
          </span>
          <span className="border border-gray-400 text-xs px-5 py-3 rounded-full hover:bg-[#EA1056] hover:text-white transition duration-300 whitespace-nowrap">
            Pizza
          </span>
        </div>

        <div className="flex items-center gap-1 text-yellow-500 text-sm mb-2">
          <span>⭐</span>
          <span>(2.5) Out Of 5</span>
        </div>

        <h2 className="text-3xl font-bold text-gray-900 mb-4">American Pizza</h2>

        <p className="text-gray-700 mb-6 text-base leading-relaxed max-w-xl text-[18px]">
          Lorem ipsum dolor sit amet consectetur. Habitasse metus urna risus
          nunc proin dignissim. Tellus fermentum diam the metus viverra netus
          amet. Turpis pulvinar suscipit vel. Feugiat the pellentesque
          pellentesque egestas the feugiat.
        </p>

        <div className="flex items-center gap-6 mt-4 flex-wrap justify-center">
          <div className="flex items-center gap-3">
            <span className="text-3xl font-bold text-gray-900">$18</span>
            <span className="text-lg line-through text-gray-400">$20</span>
          </div>

          <button className="flex items-center gap-2 border-2 border-[#EA1056] text-[#EA1056] font-semibold px-6 py-2 rounded-full hover:bg-gray-800 hover:text-white transition-all duration-300 whitespace-nowrap">
            <ShoppingCart className="w-5 h-5" />
            Order Now
          </button>
        </div>
      </div>

      {/* Right Image */}
      <div className="md:w-1/2 w-full overflow-hidden rounded-b-2xl md:rounded-r-2xl md:rounded-b-none group max-h-[400px]">
        <img
          src={home}
          alt="American Pizza"
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
        />
      </div>
    </div>
  );
};

export default PizzaCard;
