"use client";
import React from "react";
import { useCart } from "../context/CartContext";
import { useRouter } from "next/navigation";

const CartSummary: React.FC = () => {
  const { cartItems, updateQuantity, getTotalItems, getTotalPrice } = useCart();
  const router = useRouter();

  if (cartItems.length === 0) {
    return null;
  }

  const deliveryFee = 40;
  const gst = getTotalPrice() * 0.05; // 5% GST
  const totalAmount = getTotalPrice() + deliveryFee + gst;

  const handleOrderNow = () => {
    router.push("/cart");
  };

  return (
    <div className="sticky top-24 bg-white/15 backdrop-blur-xl border border-white/30 rounded-3xl shadow-2xl overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#D92E2E] to-[#FF6B6B] p-6">
        <h2 className="text-2xl font-bold text-white flex items-center gap-2">
          <span>🛒</span>
          <span>Your Cart</span>
          <span className="ml-auto bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm">
            {getTotalItems()} items
          </span>
        </h2>
      </div>

      {/* Cart Items List */}
      <div className="max-h-[400px] overflow-y-auto no-scrollbar">
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="p-4 border-b border-white/20 hover:bg-white/5 transition-colors"
          >
            <div className="flex items-start gap-3">
              {/* Veg/Non-Veg Indicator */}
              <div
                className={`w-5 h-5 border-2 ${
                  item.isVeg ? "border-green-600" : "border-red-600"
                } flex items-center justify-center bg-white rounded-sm flex-shrink-0 mt-1`}
              >
                <div
                  className={`w-2.5 h-2.5 rounded-full ${
                    item.isVeg ? "bg-green-600" : "bg-red-600"
                  }`}
                ></div>
              </div>

              {/* Item Details */}
              <div className="flex-grow">
                <h4 className="font-semibold text-[#2B2B2B] dark:text-white text-sm">
                  {item.name}
                </h4>
                <p className="text-sm font-bold text-gray-700 dark:text-gray-300 mt-1">
                  ₹{item.price} × {item.quantity} = ₹
                  {item.price * item.quantity}
                </p>
              </div>

              {/* Quantity Controls */}
              <div className="flex items-center gap-2 bg-gradient-to-r from-[#D92E2E] to-[#FF6B6B] rounded-full px-1.5 py-1 shadow-md flex-shrink-0">
                <button
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  className="w-6 h-6 bg-white text-[#D92E2E] rounded-full font-bold hover:bg-gray-100 transition-all duration-200 flex items-center justify-center text-sm"
                >
                  −
                </button>
                <span className="text-white font-bold min-w-[20px] text-center text-sm">
                  {item.quantity}
                </span>
                <button
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  className="w-6 h-6 bg-white text-[#D92E2E] rounded-full font-bold hover:bg-gray-100 transition-all duration-200 flex items-center justify-center text-sm"
                >
                  +
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bill Details */}
      <div className="p-6 space-y-3 bg-white/5">
        <div className="flex justify-between text-sm text-gray-700 dark:text-gray-300">
          <span>Item Total</span>
          <span className="font-semibold">₹{getTotalPrice().toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-sm text-gray-700 dark:text-gray-300">
          <span>Delivery Fee</span>
          <span className="font-semibold">₹{deliveryFee.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-sm text-gray-700 dark:text-gray-300">
          <span>GST (5%)</span>
          <span className="font-semibold">₹{gst.toFixed(2)}</span>
        </div>
        <div className="h-px bg-white/20"></div>
        <div className="flex justify-between text-lg font-bold text-[#2B2B2B] dark:text-white">
          <span>Total Amount</span>
          <span>₹{totalAmount.toFixed(2)}</span>
        </div>
      </div>

      {/* Order Now Button */}
      <div className="p-6 pt-0">
        <button
          onClick={handleOrderNow}
          className="w-full py-4 bg-gradient-to-r from-[#D92E2E] to-[#FF6B6B] text-white font-bold rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 text-lg"
        >
          Order Now →
        </button>
      </div>
    </div>
  );
};

export default CartSummary;
