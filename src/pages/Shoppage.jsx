// src/pages/Shoppage.jsx
import React, { useState } from "react";
import Shoppageone from "../components/Shoppage/Shoppageone";
import AddCart from "../components/Shoppage/AddCart";
import ShoppingCart from "../components/Shoppage/ShoppingCart";

const Shoppage = () => {
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const handleAddToCart = (item) => {
    setCart((prevCart) => {
      const existing = prevCart.find((i) => i.id === item.id);
      if (existing) {
        return prevCart.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prevCart, { ...item, quantity: 1 }];
    });

    setShowCart(true); // Open sidebar
  };

  return (
    <div className="relative">
      <Shoppageone />
      <AddCart handleAddToCart={handleAddToCart} cart={cart} />

      {/* Sidebar for Shopping Cart */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-white shadow-lg z-50 transition-transform duration-300 ${
          showCart ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-xl font-bold">Shopping Cart</h2>
          <button
            onClick={() => setShowCart(false)}
            className="text-gray-600 hover:text-black text-2xl"
          >
            &times;
          </button>
        </div>
        <ShoppingCart cart={cart} setCart={setCart} />
      </div>
    </div>
  );
};

export default Shoppage;
