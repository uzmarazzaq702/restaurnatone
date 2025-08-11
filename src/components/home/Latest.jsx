import React from 'react';

const Latest = () => {
  return (
    <div
      className="w-screen h-screen bg-white flex flex-col items-center justify-center text-center px-4 overflow-hidden"
      data-aos="flip-left"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="2000"
    >
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-4">
        Latest Blog Posts
      </h2>
      <p className="text-gray-800 max-w-xl mx-auto text-sm sm:text-base md:text-lg">
        Dolor Sit Amet Consectetur. Massa A Of Est Sit Commodo Convallis Auctor
        Aliquet Ready Works Any More Sem.
      </p>
    </div>
  );
};

export default Latest;
