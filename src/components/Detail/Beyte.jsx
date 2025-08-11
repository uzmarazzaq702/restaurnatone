import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import productImage from "../../assets/product-4.jpg";
import thumb1 from "../../assets/product-4.jpg";
import thumb2 from "../../assets/product-4.jpg";
import thumb3 from "../../assets/product-4.jpg";

const BeutiKebab = () => {
  const [quantity, setQuantity] = useState(1);
  const [flavour, setFlavour] = useState("");

  const basePrice = 30.0;
  const maxPrice = 38.0;

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const handleAddToCart = () => {
    alert(
      `Added to cart: Beuti Kebab (${flavour || "No flavour"}) x${quantity}`
    );
  };

  return (
    <div
      className="max-w-7xl mx-auto p-6 font-sans grid grid-cols-1 md:grid-cols-2 gap-10 overflow-x-hidden"
      data-aos="fade-up"
    >
      {/* LEFT SIDE - IMAGE */}
      <div data-aos="zoom-in">
        <div className="overflow-hidden rounded-lg shadow-lg">
          <img
            src={productImage}
            alt="Beuti Kebab"
            className="w-full h-auto transform transition-transform duration-500 hover:scale-110"
          />
        </div>
        <div className="flex flex-wrap gap-3 mt-4">
          {[thumb1, thumb2, thumb3].map((thumb, index) => (
            <img
              key={index}
              src={thumb}
              alt={`Thumbnail ${index + 1}`}
              className="w-20 sm:w-28 md:w-40 aspect-square object-cover rounded-lg border cursor-pointer transform transition-transform duration-300 hover:scale-110"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            />
          ))}
        </div>
      </div>

      {/* RIGHT SIDE - DETAILS */}
      <div data-aos="fade-left">
        {/* Title */}
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          Grilled Bones
        </h1>

        {/* Price */}
        <p className="text-xl font-semibold text-gray-800 mb-4">
          ${basePrice.toFixed(2)} – ${maxPrice.toFixed(2)}
        </p>

        {/* Description */}
        <p className="text-gray-700 mb-6 border-b pb-4">
          Lorem ipsum dolor sit amet consectetur. Habitasse metus urna risus
          nunc proin quis any dignissim. Tellus fermentum diam the metus viverra
          netus amet. Turpis pulvinar suscipit vel. Feugiat the pellentesque
          pellentesque egestas.
        </p>

        {/* Flavour Dropdown */}
        <div className="mb-4" data-aos="fade-up">
          <label className="block font-semibold mb-1">Flavour</label>
          <select
            value={flavour}
            onChange={(e) => setFlavour(e.target.value)}
            className="w-full max-w-xs border border-gray-300 rounded-lg px-3 py-2"
          >
            <option value="">Choose an option</option>
            <option value="spicy">Spicy</option>
            <option value="mild">Mild</option>
            <option value="bbq">BBQ</option>
          </select>
        </div>

        {/* Quantity + Add to Cart */}
        <div className="flex flex-wrap items-center gap-4 mb-6" data-aos="fade-up">
          <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
            <button
              className="px-4 py-2 bg-gray-100 hover:bg-gray-200"
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
            >
              -
            </button>
            <span className="px-4 py-2">{quantity}</span>
            <button
              className="px-4 py-2 bg-gray-100 hover:bg-gray-200"
              onClick={() => setQuantity(quantity + 1)}
            >
              +
            </button>
          </div>
          <button
            onClick={handleAddToCart}
            className="px-6 py-3 bg-[#E9004B] hover:bg-white hover:text-[#E9004B] border border-[#E9004B] text-white font-medium rounded-lg transition-all duration-300"
          >
            Add to cart
          </button>
        </div>

        {/* SKU & Category */}
        <div className="mb-4" data-aos="fade-up">
          <p>
            <span className="font-semibold">SKU:</span> N/A
          </p>
          <p>
            <span className="font-semibold">Category:</span> Fast Food
          </p>
        </div>

        {/* Share Icons */}
        <div className="flex flex-wrap items-center gap-3" data-aos="fade-up">
          <span className="font-semibold">Share:</span>

          {["f", "X", "in", "p"].map((icon, index) => (
            <button
              key={index}
              className="w-12 h-12 flex items-center justify-center rounded-full border-2 
                 border-transparent bg-gradient-to-r from-pink-500 to-red-500 p-[2px] 
                 transition-all duration-300 transform hover:scale-110"
              data-aos="zoom-in"
              data-aos-delay={index * 100}
            >
              <div
                className="w-full h-full flex items-center justify-center rounded-full 
                      bg-white text-lg font-bold text-gray-800 
                      transition-all duration-300 hover:bg-[#E9004B] hover:text-white"
              >
                {icon}
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BeutiKebab;
