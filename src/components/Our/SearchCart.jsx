// src/components/Our/SearchCart.jsx
import React, { useState, useEffect } from "react";
import { Search } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

// import search from "../../assets/search.png";
import burger from "../../assets/burger.png";
import pasta from "../../assets/pasta.png";
import burgerone from "../../assets/burgerone.jpg";

const SearchCart = () => {
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  const handleSearch = () => {
    console.log("Searching for:", searchTerm);
  };

  return (
    <div className="bg-white">
      {/* Header */}
      <div className="text-center pt-16" data-aos="fade-down">
        <h1 className="text-4xl font-bold text-gray-800">
          Discover Our Food Items
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          Find your favorite meals from our wide range of delicious offerings
        </p>
      </div>

      {/* Search Input */}
      <div className="relative max-w-xl mx-auto mt-8" data-aos="zoom-in">
        <input
          type="text"
          placeholder="Search your food"
          className="w-full border border-gray-300 rounded-full py-3 pl-6 pr-12 focus:outline-none focus:ring-2 focus:ring-pink-400"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button
          className="absolute right-3 top-2.5 bg-pink-400 hover:bg-pink-500 text-white rounded-full p-2"
          onClick={handleSearch}
        >
          <Search className="w-5 h-5" />
        </button>
      </div>

      {/* Search Image */}
      <div className="flex justify-center mt-12" data-aos="fade-up">
        <img src={burger} alt="Search illustration" className="w-96 h-auto" />
      </div>

      {/* Search Results Grid */}
      <div className="max-w-7xl mx-auto mt-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Card 1 */}
          <div
            className="bg-white shadow-md rounded-lg overflow-hidden"
            data-aos="fade-up"
          >
            <img
              src={pasta}
              alt="Pasta"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-800">
                Creamy Pasta
              </h2>
              <p className="mt-2 text-gray-600">
                Rich and creamy pasta with a blend of Italian herbs.
              </p>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-lg font-bold text-pink-500">20 QAR</span>
                <button className="bg-pink-400 hover:bg-pink-500 text-white px-4 py-2 rounded-full text-sm">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div
            className="bg-white shadow-md rounded-lg overflow-hidden"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <img
              src={burgerone}
              alt="Burger"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-800">
                Classic Burger
              </h2>
              <p className="mt-2 text-gray-600">
                Juicy grilled beef burger topped with fresh veggies.
              </p>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-lg font-bold text-pink-500">15 QAR</span>
                <button className="bg-pink-400 hover:bg-pink-500 text-white px-4 py-2 rounded-full text-sm">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div
            className="bg-white shadow-md rounded-lg overflow-hidden"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <img
              src={burgerone}
              alt="Burger"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-800">
                Classic Burger
              </h2>
              <p className="mt-2 text-gray-600">
                Juicy grilled beef burger topped with fresh veggies.
              </p>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-lg font-bold text-pink-500">15 QAR</span>
                <button className="bg-pink-400 hover:bg-pink-500 text-white px-4 py-2 rounded-full text-sm">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>

          {/* Placeholder */}
          <div
            className="text-center py-8 text-gray-500 col-span-1 sm:col-span-2 lg:col-span-3"
            data-aos="fade-in"
          >
            Results will be displayed here based on your search criteria.
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchCart;
