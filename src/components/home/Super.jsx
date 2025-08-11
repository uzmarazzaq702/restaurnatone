import React from 'react';
import { ShoppingCart } from 'lucide-react';

const Super = () => {
  return (
    <div 
      className="w-screen h-screen bg-[#FFFFFF] flex items-center justify-center overflow-hidden" 
    >
      <div 
        className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between w-full px-4 sm:px-6 md:px-8"
        data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
      >
        {/* Main Content */}
        <div className="flex-1 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Super Delicious Deal
          </h2>
          <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            dolor sit amet consectetur. Massa a of est sit commodo ready more convallis auctor 
            aliquet ready works any more sem.
          </p>
        </div>

        {/* Empty space for balance */}
        <div 
          className="flex-shrink-0 w-20 h-20"
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
        ></div>
      </div>
    </div>
  );
};

export default Super;
