import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Dinner = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const menuItems = [
    {
      id: 1,
      name: "Chocolate Cream",
      originalPrice: "$19.00",
      currentPrice: "$17.00",
      category: "Burger Chinese Lunch",
      image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=300&fit=crop"
    },
    {
      id: 2,
      name: "Baked Pastries and Egg",
      originalPrice: "$19.00",
      currentPrice: "$18.00",
      category: "Burger Chinese Lunch",
      image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400&h=300&fit=crop"
    },
    {
      id: 3,
      name: "Breakfast with Toasts",
      originalPrice: "$20.00",
      currentPrice: "$15.00",
      category: "Burger Chinese Lunch",
      image: "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?w=400&h=300&fit=crop"
    },
    {
      id: 4,
      name: "Grilled Chicken Burger",
      originalPrice: "$22.00",
      currentPrice: "$19.00",
      category: "Burger Chinese Lunch",
      image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop"
    },
    {
      id: 5,
      name: "Spicy Noodle Bowl",
      originalPrice: "$16.00",
      currentPrice: "$14.00",
      category: "Burger Chinese Lunch",
      image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400&h=300&fit=crop"
    },
    {
      id: 6,
      name: "Fresh Garden Salad",
      originalPrice: "$15.00",
      currentPrice: "$12.00",
      category: "Burger Chinese Lunch",
      image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <h1 
          className="text-5xl font-bold text-center text-gray-800 mb-16"
          data-aos="fade-down"
          data-aos-duration="1500"
        >
          Dinner
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuItems.map((item) => (
            <div 
              key={item.id} 
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl hover:border hover:border-[#E9004B] transition-all duration-300"
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
            >
              <div className="flex">
                <div className="w-1/3 p-3">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-28 object-cover rounded-lg transition-transform duration-300 hover:scale-110"
                  />
                </div>
                
                <div className="w-2/3 p-4 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">
                      {item.name}
                    </h3>
                    
                    <div className="mb-4">
                      <span className="text-2xl font-bold text-[#E9004B]">
                        {item.currentPrice}
                      </span>
                      {item.originalPrice !== item.currentPrice && (
                        <span className="text-sm text-gray-500 line-through ml-2">
                          {item.originalPrice}
                        </span>
                      )}
                    </div>
                    
                    <button className="py-2 px-4 border-2 border-[#E9004B] text-[#E9004B] rounded-full font-medium hover:bg-[#E9004B] hover:text-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#E9004B] focus:ring-offset-2 text-sm">
                      Order Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dinner;
