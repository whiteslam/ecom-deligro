"use client";
import React from "react";
import { useCart } from "../context/CartContext";
import { useRouter } from "next/navigation";

const FloatingCartButton = () => {
  const { getTotalItems, getTotalPrice } = useCart();
  const router = useRouter();
  const totalItems = getTotalItems();

  // Don't show if cart is empty
  if (totalItems === 0) return null;

  const handleViewCart = () => {
    router.push("/cart");
  };

  return (
    <>
      {/* Backdrop blur for better visibility on mobile */}
      <div className="fixed bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/20 to-transparent pointer-events-none z-40 lg:hidden"></div>

      {/* Floating Cart Button */}
      <div className="fixed bottom-6 left-0 right-0 z-50 px-4 lg:hidden">
        <button
          onClick={handleViewCart}
          className="w-full max-w-md mx-auto bg-gradient-to-r from-[#D92E2E] to-[#FF6B6B] text-white font-bold py-4 px-6 rounded-2xl shadow-[0_10px_40px_rgba(217,46,46,0.6)] hover:shadow-[0_15px_50px_rgba(217,46,46,0.8)] transform hover:scale-105 transition-all duration-300 flex items-center justify-between group animate-bounce-subtle"
        >
          {/* Left Side - Cart Icon and Item Count */}
          <div className="flex items-center gap-3">
            <div className="relative">
              {/* Cart Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2.5}
                stroke="currentColor"
                className="w-7 h-7"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                />
              </svg>

              {/* Item Count Badge */}
              <div className="absolute -top-2 -right-2 bg-white text-[#D92E2E] rounded-full w-6 h-6 flex items-center justify-center text-xs font-black shadow-lg">
                {totalItems}
              </div>
            </div>

            <div className="text-left">
              <div className="text-sm font-semibold opacity-90">
                {totalItems} {totalItems === 1 ? "item" : "items"}
              </div>
              <div className="text-xs opacity-75">in your cart</div>
            </div>
          </div>

          {/* Right Side - View Cart CTA */}
          <div className="flex items-center gap-2">
            <div className="text-right">
              <div className="text-lg font-black">₹{getTotalPrice()}</div>
              <div className="text-xs opacity-75">View Cart</div>
            </div>

            {/* Arrow Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={3}
              stroke="currentColor"
              className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </svg>
          </div>
        </button>
      </div>

      {/* Desktop Version - Bottom Right Corner */}
      <div className="hidden lg:block fixed bottom-8 right-8 z-50">
        <button
          onClick={handleViewCart}
          className="bg-gradient-to-r from-[#D92E2E] to-[#FF6B6B] text-white font-bold py-5 px-8 rounded-2xl shadow-[0_10px_40px_rgba(217,46,46,0.6)] hover:shadow-[0_15px_50px_rgba(217,46,46,0.8)] transform hover:scale-110 transition-all duration-300 flex items-center gap-4 group"
        >
          {/* Cart Icon with Badge */}
          <div className="relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
              />
            </svg>

            {/* Pulsing Badge */}
            <div className="absolute -top-2 -right-2 bg-white text-[#D92E2E] rounded-full w-7 h-7 flex items-center justify-center text-sm font-black shadow-lg animate-pulse">
              {totalItems}
            </div>
          </div>

          {/* Text Content */}
          <div className="text-left">
            <div className="text-xl font-black">View Cart</div>
            <div className="text-sm opacity-90">
              ₹{getTotalPrice()} • {totalItems}{" "}
              {totalItems === 1 ? "item" : "items"}
            </div>
          </div>

          {/* Arrow */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={3}
            stroke="currentColor"
            className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
            />
          </svg>
        </button>
      </div>
    </>
  );
};

export default FloatingCartButton;
