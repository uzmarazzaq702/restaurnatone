import React from 'react';

const Button = () => {
  const categories = ['All', 'Pizza', 'Rice', 'Chinese', 'Burger'];

  return (
    <div className="text-center py-16 relative bg-white">
      {/* Heading */}
      <h2 className="text-4xl font-bold text-black">Our New Dishes</h2>
      <p className="text-gray-500 mt-2 mx-auto text-[16px] leading-relaxed max-w-2xl text-center">
        Dolor Sit Amet Consectetur. Massa A Of Est Sit Commodo Convallis Auctor Aliquet Ready Works Any More Sem.
      </p>

      {/* Buttons */}
      <div className="flex flex-wrap gap-4 justify-center mt-8">
        {categories.map((category, index) => (
          <button
            key={index}
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            className={`px-6 py-2 rounded-full border-2 transition duration-300
              ${
                category === 'All'
                  ? 'bg-[#FD204B] text-white border-[#FD204B]'
                  : 'border-[#FD204B] text-[#FD204B] hover:bg-[#FD204B] hover:text-white'
              }
            `}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Button;
