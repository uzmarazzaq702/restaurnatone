import React, { useState } from 'react';
import { FaLink } from 'react-icons/fa';

import product7 from '../../assets/product-7.jpg';
import product8 from '../../assets/product-8.jpg';
import product9 from '../../assets/product-9.jpg';
import product3 from '../../assets/product-3.jpg';
import product22 from '../../assets/product-22.jpg';
import product4 from '../../assets/product-4.jpg';
import breakfast from '../../assets/breakfast.png';
import burger from '../../assets/burger.png';

const categories = ['All', 'Pizza', 'Rice', 'Chinese', 'Burger'];

const foodItems = [
  {
    title: 'Vegetable Salad',
    subtitle: 'Dinner, Lunch, Rice',
    description: 'Lorem ipsum dolor sit amet consectetur. Habitasse metus urna risus nunc proin quis any',
    oldPrice: 15,
    newPrice: 14,
    img: product7,
  },
  {
    title: 'Mushroom Soup',
    subtitle: 'Dinner, Rice',
    description: 'Lorem ipsum dolor sit amet consectetur. Habitasse metus urna risus nunc proin quis any',
    oldPrice: 25,
    newPrice: 21,
    img: product8,
  },
  {
    title: 'Beyti Kebab',
    subtitle: 'Dinner, Pizza',
    description: 'Lorem ipsum dolor sit amet consectetur. Habitasse metus urna risus nunc proin quis any',
    oldPrice: 16,
    newPrice: 15,
    img: product9,
  },
  {
    title: 'Burger with Meat',
    subtitle: 'Burger, Chinese, Lunch',
    description: 'Lorem ipsum dolor sit amet consectetur. Habitasse metus urna risus nunc proin quis any',
    oldPrice: 22,
    newPrice: 16,
    img: burger,
  },
  {
    title: 'Stewed Beef Meat',
    subtitle: 'Dinner, Lunch, Rice',
    description: 'Lorem ipsum dolor sit amet consectetur. Habitasse metus urna risus nunc proin quis any',
    oldPrice: 15,
    newPrice: 14,
    img: product3,
  },
  {
    title: 'Rice with Sausage',
    subtitle: 'Dinner, Rice',
    description: 'Lorem ipsum dolor sit amet consectetur. Habitasse metus urna risus nunc proin quis any',
    oldPrice: 25,
    newPrice: 21,
    img: product22,
  },
  {
    title: 'Fried Rice served',
    subtitle: 'Dinner, Pizza',
    description: 'Lorem ipsum dolor sit amet consectetur. Habitasse metus urna risus nunc proin quis any',
    oldPrice: 16,
    newPrice: 15,
    img: breakfast,
  },
  {
    title: 'Lula Kebab Adjika',
    subtitle: 'Burger, Chinese, Lunch',
    description: 'Lorem ipsum dolor sit amet consectetur. Habitasse metus urna risus nunc proin quis any',
    oldPrice: 22,
    newPrice: 16,
    img: product4,
  },
];

const All = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredItems =
    selectedCategory === 'All'
      ? foodItems
      : foodItems.filter(item =>
          item.subtitle
            .toLowerCase()
            .split(',')
            .map(cat => cat.trim())
            .includes(selectedCategory.toLowerCase())
        );

  return (
    <div className="p-6 md:p-12 bg-gray-50 min-h-screen overflow-x-hidden max-w-7xl mx-auto">
      {/* Buttons */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-black">Our New Dishes</h2>
        <p className="text-gray-500 mt-2 mx-auto text-[16px] leading-relaxed max-w-2xl text-center">
          Dolor Sit Amet Consectetur. Massa A Of Est Sit Commodo Convallis Auctor Aliquet Ready Works Any More Sem.
        </p>

        <div className="flex flex-wrap gap-4 justify-center mt-8">
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full border-2 transition duration-300 ${
                selectedCategory === category
                  ? 'bg-[#FD204B] text-white border-[#FD204B]'
                  : 'border-[#FD204B] text-[#FD204B] hover:bg-[#FD204B] hover:text-white'
              } whitespace-nowrap`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Grid of Filtered Items */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredItems.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-lg p-4 shadow-md flex flex-col sm:flex-row gap-6 hover:shadow-xl transition"
          >
            <div className="relative w-full sm:w-40 h-40 sm:h-auto overflow-hidden rounded-md group flex-shrink-0">
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-full object-cover transform group-hover:scale-110 transition duration-500"
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                <div className="bg-[#EA1056] p-3 rounded-full text-white text-xl transform scale-90 group-hover:scale-110 transition duration-300 cursor-pointer">
                  <FaLink />
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-between flex-1 min-w-0">
              <div>
                <h2 className="text-2xl font-semibold truncate">{item.title}</h2>
                <p className="text-[18px] text-gray-500 truncate">{item.subtitle}</p>
                <p className="text-[18px] text-gray-600 mt-1 leading-snug line-clamp-3">
                  {item.description}
                </p>
              </div>

              <div className="flex items-center justify-between mt-3 flex-wrap gap-4">
                <div>
                  <span className="line-through text-gray-400 text-sm">
                    ${item.oldPrice.toFixed(2)}
                  </span>{' '}
                  <span className="text-lg font-bold text-black">
                    ${item.newPrice.toFixed(2)}
                  </span>
                </div>
                <button className="px-4 py-1 border-2 border-[#EA1056] text-[#EA1056] rounded-full hover:bg-[#EA1056] hover:text-white transition whitespace-nowrap">
                  Order Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default All;
