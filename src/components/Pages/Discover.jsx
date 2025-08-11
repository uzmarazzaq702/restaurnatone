import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import avout from "../../assets/avout.png";
import about from "../../assets/about.jpg";

const Discover = () => {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div
      className="relative min-h-screen bg-gray-900 bg-cover bg-center"
      style={{ backgroundImage: `url(${avout})` }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between min-h-screen px-4 lg:px-16 gap-10">
        
        {/* Left Text */}
        <div
          className="max-w-2xl text-left"
          data-aos="fade-right"
        >
          <div className="mb-6">
            <span className="text-gray-300 text-sm font-medium tracking-wider uppercase">
              Careers
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-4xl xl:text-5xl font-bold text-white leading-tight mb-8">
            Discover Our Company
            <br />
            <span className="text-pink-500">The</span> In You...
          </h1>

          <div className="mt-8">
            <button
              onClick={() => navigate("/contact")}
              className="bg-gray-900/90 backdrop-blur-sm border border-white/50 text-white px-8 py-2 rounded-full font-medium hover:bg-white hover:text-black transition-colors duration-300"
            >
              Apply Now
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div
          className="w-full lg:w-2/4 h-[300px] sm:h-[400px] lg:h-[80vh] overflow-hidden rounded-lg shadow-lg"
          data-aos="fade-left"
        >
          <img
            src={about}
            alt="Company culture"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Discover;
