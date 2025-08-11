import React from "react";
import { MapPin, Pizza, ClipboardList, Truck } from "lucide-react";

const steps = [
  { icon: MapPin, title: "Choose Your Location", iconPosition: "top" },
  { icon: Pizza, title: "Choose Your Product", iconPosition: "bottom" },
  { icon: ClipboardList, title: "Make Your Order", iconPosition: "top" },
  { icon: Truck, title: "Food Is On The Way", iconPosition: "bottom" },
];

const Show = () => {
  return (
    <section className="w-screen h-screen flex flex-col items-center justify-center bg-white overflow-hidden px-4">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-center">
        How To Order?
      </h2>
      <p className="text-gray-700 text-center max-w-xl mb-12 text-sm sm:text-base md:text-lg">
        Dolor sit amet consectetur. Massa a of est sit commodo convallis auctor
        aliquet ready works any more sem.
      </p>

      <div className="flex flex-wrap justify-center gap-8">
        {steps.map((step, index) => {
          const IconComponent = step.icon;
          return (
            <div
              key={index}
              className="relative w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 flex items-center justify-center bg-[#FFF5F7] rounded-full shadow-md group transition-transform duration-300 hover:scale-105"
            >
              <h3 className="text-center text-black font-semibold text-sm sm:text-base md:text-lg px-4 z-10">
                {step.title}
              </h3>

              <div
                className={`absolute ${
                  step.iconPosition === "top" ? "-top-6" : "-bottom-6"
                } left-1/2 transform -translate-x-1/2`}
              >
                <div
                  className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white flex items-center justify-center shadow-md group-hover:bg-[#EA1056] transition-all duration-300 border-[6px] border-white"
                >
                  <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-[#fcd9dc] flex items-center justify-center group-hover:bg-[#EA1056] transition-all duration-300">
                    <IconComponent className="w-6 h-6 sm:w-8 sm:h-8 text-[#EA1056] group-hover:text-white transition-all duration-300" />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Show;
