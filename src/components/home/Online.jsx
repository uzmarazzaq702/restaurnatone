import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { FaSearch } from "react-icons/fa";
import pizza from "../../assets/pizza.png";

const Online = () => {
  const [openDropdown, setOpenDropdown] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("Select Category");

  const categories = [
    "Pizza",
    "Burger",
    "Rice",
    "Showarma",
    "Sandwich",
    "Pasta",
    "Noodles",
    "Salad",
  ];

  const handleSelectCategory = (item) => {
    setSelectedCategory(item);
    setOpenDropdown(false);
  };

  return (
    <div
      className="h-screen w-full bg-cover bg-center relative overflow-hidden"
      style={{ backgroundImage: `url(${pizza})` }}
      data-aos="flip-left"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="2000"
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#000000bb] flex flex-col items-start justify-center gap-8 px-6 sm:px-10 max-w-7xl mx-auto">
        
        {/* Header Text */}
        <div
          className="text-white max-w-full sm:max-w-3xl"
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
        >
          <p className="text-medium font-bold uppercase mb-1">
            Easy way to order your food
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold whitespace-nowrap sm:whitespace-normal">
            Online Ordering System for Restaurants
          </h1>
        </div>

        {/* Search Bar */}
        <div
          className="w-full max-w-full sm:max-w-[80%] lg:max-w-[70%] flex items-center bg-white rounded-full shadow-lg border border-gray-200 relative z-10 overflow-hidden"
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
        >
          {/* Category dropdown */}
          <div className="relative min-w-[130px] flex-shrink-0">
            <button
              onClick={() => setOpenDropdown((prev) => !prev)}
              className="flex items-center gap-1 px-4 py-3 text-gray-600 hover:text-black rounded-l-full whitespace-nowrap"
            >
              {selectedCategory}
              <ChevronDown size={16} />
            </button>

            {openDropdown && (
              <div className="absolute z-30 bg-white shadow-md rounded top-full left-0 w-44 max-w-xs overflow-auto max-h-48">
                {categories.map((item, index) => (
                  <div
                    key={index}
                    onClick={() => handleSelectCategory(item)}
                    className={`px-4 py-2 cursor-pointer ${
                      selectedCategory === item
                        ? "bg-[#EA1056] text-white"
                        : "hover:bg-gray-100"
                    }`}
                  >
                    {item}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Input */}
          <input
            type="text"
            placeholder="Type Your Products ..."
            className="flex-grow min-w-0 px-4 py-3 outline-none text-gray-700"
          />

          {/* Search Button */}
          <button
            className="text-white px-6 py-3 font-semibold transition-all flex items-center gap-2 rounded-r-full min-w-[110px] shrink-0"
            style={{ backgroundColor: "#EA1056" }}
            onMouseOver={(e) =>
              (e.currentTarget.style.backgroundColor = "black")
            }
            onMouseOut={(e) =>
              (e.currentTarget.style.backgroundColor = "#EA1056")
            }
          >
            <FaSearch /> Find Food
          </button>
        </div>

        {/* Logos Bar */}
        <h2
          className="text-medium font-bold uppercase text-white"
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
        >
          Popular food rider
        </h2>
        <div className="flex flex-wrap gap-10 items-center">
          {Array(4)
            .fill(0)
            .map((_, index) => (
              <div key={index}>
                <img
                  src="https://www.radiustheme.com/demo/wordpress/themes/foodymat/wp-content/uploads/2024/12/brand-white-3.svg"
                  alt="Logo"
                  className="h-8 transition duration-300 filter invert brightness-0 hover:brightness-50"
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Online;
