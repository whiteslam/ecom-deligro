"use client";
import React from "react";
import Image from "next/image";
import { MenuItem } from "../data/menuItems";
import { useCart } from "../context/CartContext";

interface MenuItemCardProps {
  item: MenuItem;
}

const MenuItemCard: React.FC<MenuItemCardProps> = ({ item }) => {
  const { cartItems, addToCart, updateQuantity } = useCart();
  const cartItem = cartItems.find((i) => i.id === item.id);
  const quantity = cartItem?.quantity || 0;

  const handleAdd = () => {
    addToCart(item);
  };

  const handleIncrement = () => {
    updateQuantity(item.id, quantity + 1);
  };

  const handleDecrement = () => {
    updateQuantity(item.id, quantity - 1);
  };

  return (
    <div className="group relative bg-white/15 backdrop-blur-xl border border-white/30 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
      {/* Image Container */}
      <div className="relative h-48 bg-gray-100 overflow-hidden">
        <Image
          src={item.image}
          alt={item.name}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
        />

        {/* Veg/Non-Veg Badge */}
        <div className="absolute top-3 left-3 z-10">
          <div
            className={`w-6 h-6 border-2 ${
              item.isVeg ? "border-green-600" : "border-red-600"
            } flex items-center justify-center bg-white rounded-sm`}
          >
            <div
              className={`w-3 h-3 rounded-full ${
                item.isVeg ? "bg-green-600" : "bg-red-600"
              }`}
            ></div>
          </div>
        </div>

        {/* Badge (Bestseller, Chef's Special, etc.) */}
        {item.badge && (
          <div className="absolute top-3 right-3 bg-[#D92E2E]/90 backdrop-blur-sm px-3 py-1 rounded-full shadow-lg z-10">
            <span className="text-xs font-bold text-white">
              ⭐ {item.badge}
            </span>
          </div>
        )}

        {/* Discount Badge */}
        {item.discount && (
          <div className="absolute bottom-3 left-3 bg-green-600/90 backdrop-blur-sm px-3 py-1 rounded-full shadow-lg z-10">
            <span className="text-xs font-bold text-white">
              {item.discount}% OFF
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Name and Rating */}
        <div className="mb-2">
          <h3 className="text-lg font-bold text-[#2B2B2B] dark:text-white group-hover:text-[#D92E2E] transition-colors line-clamp-1">
            {item.name}
          </h3>
          {item.rating && (
            <div className="flex items-center gap-2 mt-1">
              <div className="flex items-center gap-1">
                <span className="text-yellow-500">⭐</span>
                <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                  {item.rating}
                </span>
              </div>
              {item.reviews && (
                <span className="text-xs text-gray-500 dark:text-gray-400">
                  ({item.reviews} reviews)
                </span>
              )}
            </div>
          )}
        </div>

        {/* Description */}
        <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2 mb-3">
          {item.description}
        </p>

        {/* Price and Add Button */}
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-2xl font-bold text-[#2B2B2B] dark:text-white">
              ₹{item.price}
            </span>
          </div>

          {/* Add to Cart / Quantity Controls */}
          {quantity === 0 ? (
            <button
              onClick={handleAdd}
              className="px-6 py-2.5 bg-gradient-to-r from-[#D92E2E] to-[#FF6B6B] text-white font-bold rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              Add
            </button>
          ) : (
            <div className="flex items-center gap-3 bg-gradient-to-r from-[#D92E2E] to-[#FF6B6B] rounded-full px-2 py-1.5 shadow-lg">
              <button
                onClick={handleDecrement}
                className="w-8 h-8 bg-white text-[#D92E2E] rounded-full font-bold hover:bg-gray-100 transition-all duration-200 flex items-center justify-center shadow-md hover:scale-110"
              >
                −
              </button>
              <span className="text-white font-bold min-w-[24px] text-center">
                {quantity}
              </span>
              <button
                onClick={handleIncrement}
                className="w-8 h-8 bg-white text-[#D92E2E] rounded-full font-bold hover:bg-gray-100 transition-all duration-200 flex items-center justify-center shadow-md hover:scale-110"
              >
                +
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MenuItemCard;
