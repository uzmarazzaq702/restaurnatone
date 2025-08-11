import React from "react";

import breakfast from "../../assets/breakfast.png";
import burger from "../../assets/burger.png";
import chinese from "../../assets/chinese.png";
import lunch from "../../assets/lunch.png";
import pasta from "../../assets/pasta.png";
import pizza from "../../assets/pizza.png";
import rice from "../../assets/rice.png";

const FoodCategories = () => {
  const categories = [
    { id: 1, name: "Breakfast", count: 3, image: breakfast },
    { id: 2, name: "Pizza", count: 4, image: pizza },
    { id: 3, name: "Burger", count: 6, image: burger },
    { id: 4, name: "Lunch", count: 6, image: lunch },
    { id: 5, name: "Chinese", count: 5, image: chinese },
    { id: 6, name: "Pasta", count: 4, image: pasta },
    { id: 7, name: "Rice", count: 3, image: rice },
  ];

  return (
    <div className="min-h-screen bg-[#FFF3F3] p-6 max-w-3xl mx-auto">
      {/* Header */}
      <div className="mb-8 text-center">
        <div className="text-[18px] font-medium text-[#EA1056] mb-2">
          MORE THAN <span className="font-bold">1200+</span> DISHES
        </div>
        <h2 className="text-4xl font-bold text-gray-900">Our Categories</h2>
      </div>

      {/* All cards styled like Breakfast, stacked vertically */}
      <div className="flex flex-col items-center gap-8">
        {categories.map((category) => (
          <div
            key={category.id}
            className="w-full max-w-md bg-white rounded-3xl p-6 shadow-md hover:shadow-xl transform transition-all duration-300 hover:-translate-y-2 border border-transparent hover:border-[#EA1056]"
          >
            <div className="w-full h-60 rounded-2xl overflow-hidden flex items-center justify-center mb-6">
              <img
                src={category.image}
                alt={category.name}
                className="max-w-full max-h-full object-contain"
              />
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-800">
                {category.name}
              </h3>
              <p className="text-base text-gray-500 mt-2">
                ({category.count} items)
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FoodCategories;
