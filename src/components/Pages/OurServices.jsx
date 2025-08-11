import React, { useEffect } from "react";
import { ShoppingBag, Coffee, Pizza, Utensils } from "lucide-react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const OurServices = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const services = [
    {
      id: 1,
      title: "Breakfast",
      icon: Coffee,
      description:
        "dolor sit amet consectetur. Massa of estify sit any orry convallis auctor aliquetit works any sem. dolory of that amet ready more consectetur.",
      buttonText: "SEE FOOD MENU",
    },
    {
      id: 2,
      title: "Lunch",
      icon: Pizza,
      description:
        "dolor sit amet consectetur. Massa of estify sit any orry convallis auctor aliquetit works any sem. dolory of that amet ready more consectetur.",
      buttonText: "SEE FOOD MENU",
    },
    {
      id: 3,
      title: "Dinner",
      icon: Utensils,
      description:
        "dolor sit amet consectetur. Massa of estify sit any orry convallis auctor aliquetit works any sem. dolory of that amet ready more consectetur.",
      buttonText: "SEE FOOD MENU",
    },
    {
      id: 4,
      title: "Custom",
      icon: ShoppingBag,
      description:
        "dolor sit amet consectetur. Massa of estify sit any orry convallis auctor aliquetit works any sem. dolory of that amet ready more consectetur.",
      buttonText: "SEE FOOD MENU",
    },
  ];

  return (
    <div className="bg-gray-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            dolor sit amet consectetur. Massa a of est sit commodo convallis
            auctor aliquet ready works any more sem.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={service.id}
                className="bg-white rounded-lg shadow-2xl p-8 flex flex-col sm:flex-row items-center sm:items-start"
                data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
              >
                {/* Left: Icon */}
                <div className="flex-shrink-0 mb-6 sm:mb-0 sm:mr-6">
                  <div
                    className="bg-[#EA0D54] rounded-full p-6 flex items-center justify-center"
                    style={{
                      animation: "subtle-pulse 2.4s ease-in-out infinite",
                    }}
                  >
                    <IconComponent className="w-10 h-10 text-white" />
                  </div>
                </div>

                {/* Right: Text */}
                <div className="flex-1 text-center sm:text-left">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-base mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <Link
                    to="/menu"
                    className="border-2 border-[#EA0D54] text-[#EA0D54] font-semibold py-2 px-6 rounded-full inline-block"
                  >
                    {service.buttonText}
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Keyframes for icon pulse */}
      <style jsx>{`
        @keyframes subtle-pulse {
          0% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.1);
          }
          100% {
            transform: scale(1);
          }
        }
      `}</style>
    </div>
  );
};

export default OurServices;
