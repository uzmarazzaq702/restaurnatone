import React from 'react';
import phone from '../../assets/phone.png';
import appstore from '../../assets/app.png';
import playstore from '../../assets/play-store.png';
import { Check } from 'lucide-react';

const Download = () => {
  return (
    <div
      className="bg-[#E9004B] text-white w-screen h-screen overflow-hidden flex items-center px-6 md:px-16"
      data-aos="flip-left"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="2000"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 w-full">

        {/* Left - Phone Image */}
        <div
          className="flex items-center justify-center md:justify-start flex-shrink-0"
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
        >
          <img
            src={phone}
            alt="Phone"
            className="h-[300px] sm:h-[400px] md:h-[500px] rotate-[-10deg] object-contain"
          />
        </div>

        {/* Right - Text and Buttons */}
        <div className="text-center md:text-left max-w-xl">
          <p className="uppercase text-sm sm:text-base font-medium tracking-wide">
            Download Apps
          </p>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mt-2 mb-4 leading-snug">
            Download Our Free App!
          </h2>

          <ul className="space-y-3 mb-6">
            {[
              'Find the nearest restaurant',
              'Order food online',
              'Delivery food near me',
            ].map((text, idx) => (
              <li
                key={idx}
                className="flex items-center gap-3 text-sm sm:text-base md:text-lg group transition-colors duration-300"
              >
                <Check className="w-5 h-5 sm:w-6 sm:h-6 text-white flex-shrink-0" />
                <span className="group-hover:text-pink-200 transition-colors duration-300">
                  {text}
                </span>
              </li>
            ))}
          </ul>

          <div className="flex justify-center md:justify-start gap-3 mt-4">
            <img
              src={appstore}
              alt="App Store"
              className="w-[120px] sm:w-[140px] md:w-[160px] h-auto cursor-pointer"
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
            />
            <img
              src={playstore}
              alt="Google Play"
              className="w-[120px] sm:w-[140px] md:w-[160px] h-auto cursor-pointer"
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Download;
