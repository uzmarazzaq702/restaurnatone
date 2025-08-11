import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import aboutImg1 from "../../assets/about-img1.png";

const Company = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="bg-gray-50 py-16 px-4 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <div
            className="relative flex justify-center items-center bg-transparent"
            data-aos="fade-right"
          >
            <img
              src={aboutImg1}
              alt="About Our Company"
              className="rounded-lg shadow-lg object-contain h-[400px] sm:h-[500px] w-full"
            />
          </div>

          {/* Text Section */}
          <div className="space-y-8" data-aos="fade-left">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                About Our Company
              </h2>

              <div className="space-y-6 text-gray-600 leading-relaxed text-base sm:text-[18px]">
                <p>
                  Massa a of est sit commodo convallis auctor as aliquet ready to ready work
                  any more sem. Massa a of est sit commodo any convallis. to ready works at
                  any more sem of est sit commodo any convallis.
                </p>

                <p>
                  Massa a of est sit commodo convallis auctor as aliquet ready to ready work
                  more sem. Massa a of est sit commodo any convallis.
                </p>
              </div>

              <div className="mt-8">
                <button
                  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                  className="border-2 border-[#E9004B] text-[#E9004B] px-8 py-3 rounded-full font-medium hover:bg-[#E9004B] hover:text-white transition-colors duration-300 text-base sm:text-[18px]"
                >
                  See All Cities
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <div className="fixed bottom-8 right-8" data-aos="zoom-in">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="bg-[#E9004B] text-white p-3 rounded-full shadow-lg hover:bg-[#E9004B] transition-colors duration-300"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 15l7-7 7 7"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Company;
