import React from "react";

const ShoppingCart = ({ cart, setCart }) => {
  const increaseQuantity = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const removeItem = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const clearCart = () => {
    setCart([]);
  };

  const subtotal = cart.reduce(
    (acc, item) => acc + item.salePrice * item.quantity,
    0
  );

  const total = subtotal;

  return (
    <div className="w-full h-screen bg-white shadow rounded flex flex-col">
      {/* Header */}
      <div className="flex justify-between items-center p-4 border-b flex-shrink-0">
        <h2 className="text-xl font-bold">Shopping Cart</h2>
        <button
          onClick={clearCart}
          className="text-red-500 hover:underline text-sm"
        >
          Clear All
        </button>
      </div>

      {/* Cart Items - Flexible space, no scroll */}
      <div className="flex-1 p-4 grid gap-4 content-start">
        {cart.length === 0 ? (
          <p className="text-gray-500">Your cart is empty</p>
        ) : (
          cart.map((item) => (
            <div key={item.id} className="flex items-center">
              <img
                src={item.image}
                alt={item.name}
                className="w-16 h-16 object-cover rounded mr-4"
              />
              <div className="flex-1">
                <h3 className="font-semibold">{item.name}</h3>
                <p className="text-red-500">${item.salePrice}</p>
                <div className="flex items-center mt-2">
                  <button
                    onClick={() => decreaseQuantity(item.id)}
                    className="px-2 py-1 bg-gray-200 rounded"
                  >
                    -
                  </button>
                  <span className="px-4">{item.quantity}</span>
                  <button
                    onClick={() => increaseQuantity(item.id)}
                    className="px-2 py-1 bg-gray-200 rounded"
                  >
                    +
                  </button>
                </div>
              </div>
              <button
                onClick={() => removeItem(item.id)}
                className="text-red-500 ml-4"
              >
                Remove
              </button>
            </div>
          ))
        )}
      </div>

      {/* Checkout Section - Stays at bottom */}
      <div className="border-t p-4 bg-white flex-shrink-0">
        <div className="flex justify-between mb-2">
          <span className="font-semibold">Subtotal</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between font-bold text-lg mb-4">
          <span>Total</span>
          <span>${total.toFixed(2)}</span>
        </div>
        <button className="w-full bg-[#E9004B] text-white py-2 rounded hover:bg-[#d10944]">
          Checkout & Pay
        </button>
      </div>
    </div>
  );
};

export default ShoppingCart;
