import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart, Star } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

import product15 from "../../assets/product-15.jpg";
import product9 from "../../assets/product-9.jpg";
import product10 from "../../assets/product-10.jpg";
import product11 from "../../assets/product-11.jpg";
import product4 from "../../assets/product-4.jpg";
import product6 from "../../assets/product-6.jpg";
import product7 from "../../assets/product-7.jpg";
import product8 from "../../assets/product-8.jpg";

const Super = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const foodItems = [
    { id: 1, image: product15, title: "Combo Meal", category: "Fast Food", price: "$19", discount: "$15.00 OFF UPTO $100.00", rating: 4.2 },
    { id: 2, image: product9, title: "Grilled Bones", category: "Fast Food", price: "$30 - $38", discount: "$15.00 OFF UPTO $100.00", rating: 4.5 },
    { id: 3, image: product10, title: "Rice Fresh Chao", category: "Lunch", price: "$9 - $20", discount: "$15.00 OFF UPTO $100.00", rating: 3.8 },
    { id: 4, image: product11, title: "Vegetable Salad", category: "Dinner Lunch Rice", price: "$14", originalPrice: "$15 - $20", discount: "$15.00 OFF UPTO $100.00", rating: 3.0 },
    { id: 5, image: product4, title: "Chicken Burger", category: "Dinner Rice", price: "$12 - $18", discount: "$10.00 OFF UPTO $80.00", rating: 4.2 },
    { id: 6, image: product6, title: "Supreme Pizza", category: "Dinner Pizza", price: "$25 - $35", discount: "$20.00 OFF UPTO $120.00", rating: 4.5 },
    { id: 7, image: product7, title: "Sushi Platter", category: "Burger Chinese Lunch", price: "$28 - $45", discount: "$15.00 OFF UPTO $100.00", rating: 4.7 },
    { id: 8, image: product8, title: "Pasta Special", category: "Chinese Lunch Rice", price: "$16 - $24", originalPrice: "$28", discount: "$12.00 OFF UPTO $90.00", rating: 4.1 },
  ];

  return (
    <div className="min-h-screen bg-white p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center" data-aos="fade-up">
          Super Delicious Food Menu
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {foodItems.map((item, index) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group"
              data-aos="fade-up"
              data-aos-delay={index * 100} // staggered animation
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="p-4">
                {/* Discount & Rating */}
                <div className="mb-2 flex items-center justify-between">
                  <div
                    className="bg-[#E9004B] text-white px-3 py-2 mt-[-16px] ml-[-16px] text-xs font-bold inline-block"
                    style={{
                      clipPath:
                        "polygon(0 0, calc(100% - 10px) 0, 100% 100%, 0 100%)",
                    }}
                  >
                    {item.discount}
                  </div>
                  {item.rating && (
                    <div className="bg-[#E9A800] text-white px-2 mt-[-20px] py-1 rounded text-xs font-semibold flex items-center gap-1">
                      <Star className="w-3 h-3 fill-current" />({item.rating})
                    </div>
                  )}
                </div>

                {/* Title & Category */}
                <div className="mb-3 group">
                  <h3 className="text-xl font-bold text-gray-800 group-hover:text-[#E9004B] transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 text-sm">{item.category}</p>
                </div>

                {/* Price & Button */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-xl font-bold text-gray-800">
                      {item.price}
                    </span>
                    {item.originalPrice && (
                      <span className="text-gray-400 line-through text-sm">
                        {item.originalPrice}
                      </span>
                    )}
                  </div>

                  <Link to="/detailspage">
                    <button className="bg-white border-2 border-[#E9004B] text-[#E9004B] py-1 px-3 rounded-full font-semibold hover:bg-[#E9004B] hover:text-white transition-all duration-300 flex items-center justify-center gap-2">
                      <ShoppingCart className="w-4 h-4" />
                      View options
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Super;
