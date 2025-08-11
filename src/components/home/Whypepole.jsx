import React from 'react';
import why from "../../assets/why.png";

const features = [
  { number: 1, text: '140+ Foods Items' },
  { number: 2, text: 'Easy Ordering by Phone' },
  { number: 3, text: 'Free Mobile Application' },
  { number: 4, text: '100% positive feedbacks' },
  { number: 5, text: 'Free Mobile Application' },
  { number: 6, text: 'Fast Guaranteed' },
];

const Whypepole = () => {
  return (
    <div
      className="relative py-16 px-10 md:px-20 bg-pink-50 bg-opacity-90 bg-cover bg-center overflow-hidden"
      style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/white-wall-3.png')" }}
    >
      {/* Header */}
      <div
        className="text-center md:text-left mb-12 max-w-2xl mx-auto md:mx-0"
        data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Why People Choose Us
        </h2>
        <p className="text-gray-600 mt-2 text-[18px]">
          dolor sit amet consectetur. Massa a of est sit commodo convallis auctor aliquet ready works any more sem.
        </p>
      </div>

      {/* Content */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-16">
        {/* Left - Features */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-12 flex-1">
          {features.map((feature) => (
            <div
              key={feature.number}
              className="flex items-start gap-6 group"
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
            >
              <div className="min-w-[60px] min-h-[60px] flex items-center justify-center border-2 border-[#EA1056] text-[#EA1056] rounded-full font-bold text-xl transition-all duration-300 group-hover:bg-[#EA1056] group-hover:text-white">
                {feature.number}
              </div>
              <p className="text-gray-800 font-medium text-[16px]">{feature.text}</p>
            </div>
          ))}
        </div>

        {/* Right - Image */}
        <div
          className="flex-1"
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
        >
          <img
            src={why}
            alt="Chefs"
            className="w-full max-w-lg mx-auto md:mx-0 mt-[-40px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Whypepole;
