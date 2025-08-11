import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Unlimited = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left side: Text */}
        <div data-aos="fade-right">
          <p className="text-pink-600 text-[18px] font-semibold uppercase tracking-wide">
            Why Choose Our About
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold mt-2">
            Unlimited Better Foods,
          </h1>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-400">
            All In One Place.
          </h1>
        </div>

        {/* Right side: Paragraph */}
        <div data-aos="fade-left">
          <p className="text-gray-500 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur. Ut rutrum sed rhoncus amet
            phasellus lorem. Eget sodales urna arcu quis posuere egestas metus
            enim posuere mattis dignissim ullamcorper.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Unlimited;
