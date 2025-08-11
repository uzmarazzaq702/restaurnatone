import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Lunch = ({ cart, setCart }) => {
  useEffect(() => {
    AOS.init();
  }, []);

  const menuItems = [
    {
      id: 1,
      name: "Chocolate Cream",
      originalPrice: 19.0,
      currentPrice: 17.0,
      category: "Burger Chinese Lunch",
      image:
        "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=300&fit=crop",
    },
    {
      id: 2,
      name: "Baked Pastries and Egg",
      originalPrice: 19.0,
      currentPrice: 18.0,
      category: "Burger Chinese Lunch",
      image:
        "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400&h=300&fit=crop",
    },
    {
      id: 3,
      name: "Breakfast with Toasts",
      originalPrice: 20.0,
      currentPrice: 15.0,
      category: "Burger Chinese Lunch",
      image:
        "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?w=400&h=300&fit=crop",
    },
    {
      id: 4,
      name: "Grilled Chicken Burger",
      originalPrice: 22.0,
      currentPrice: 19.0,
      category: "Burger Chinese Lunch",
      image:
        "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop",
    },
    {
      id: 5,
      name: "Spicy Noodle Bowl",
      originalPrice: 16.0,
      currentPrice: 14.0,
      category: "Burger Chinese Lunch",
      image:
        "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400&h=300&fit=crop",
    },
    {
      id: 6,
      name: "Fresh Garden Salad",
      originalPrice: 15.0,
      currentPrice: 12.0,
      category: "Burger Chinese Lunch",
      image:
        "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop",
    },
  ];

  const handleAddToCart = (item) => {
    const existingItem = cart.find((cartItem) => cartItem.id === item.id);
    if (existingItem) {
      setCart(
        cart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      );
    } else {
      setCart([
        ...cart,
        { ...item, salePrice: item.currentPrice, quantity: 1 },
      ]);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <h1
          className="text-5xl font-bold text-center text-gray-800 mb-16"
          data-aos="fade-down"
          data-aos-duration="1500"
        >
          Lunch
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuItems.map((item, index) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl hover:border hover:border-[#E9004B]"
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
              data-aos-delay={index * 150} // each card animates after the previous
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
                        ${item.currentPrice.toFixed(2)}
                      </span>
                      {item.originalPrice !== item.currentPrice && (
                        <span className="text-sm text-gray-500 line-through ml-2">
                          ${item.originalPrice.toFixed(2)}
                        </span>
                      )}
                    </div>

                    <button
                      onClick={() => handleAddToCart(item)}
                      className="py-2 px-4 border-2 border-[#E9004B] text-[#E9004B] rounded-full font-medium hover:bg-[#E9004B] hover:text-white transition-all duration-300 text-sm"
                    >
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

export default Lunch;
