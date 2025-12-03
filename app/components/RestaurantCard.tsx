"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Restaurant } from "../data/restaurants";

interface RestaurantCardProps {
  restaurant: Restaurant;
  onClick?: () => void;
}

const RestaurantCard: React.FC<RestaurantCardProps> = ({
  restaurant,
  onClick,
}) => {
  const router = useRouter();

  const handleClick = () => {
    if (onClick) {
      onClick();
    } else {
      router.push(`/restaurant/${restaurant.id}`);
    }
  };
  return (
    <div
      onClick={handleClick}
      className="group relative bg-white/15 backdrop-blur-xl border border-white/30 p-6 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 text-left flex flex-col h-full cursor-pointer hover:-translate-y-2"
    >
      {/* Gradient Background on Hover */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${
          restaurant.gradient || "from-orange-400 to-red-500"
        } opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-500`}
      ></div>

      {/* Image Container with Gradient Overlay */}
      <div className="relative h-48 bg-gray-100 rounded-2xl mb-4 overflow-hidden">
        <div
          className={`absolute inset-0 bg-gradient-to-t ${
            restaurant.gradient || "from-orange-400 to-red-500"
          } opacity-0 group-hover:opacity-20 transition-opacity duration-500 z-10`}
        ></div>
        <Image
          src={restaurant.image}
          alt={restaurant.name}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
        />

        {/* Rating Badge Overlay */}
        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full shadow-lg z-20">
          <span className="text-sm font-bold text-gray-900">
            {restaurant.rating} ⭐
          </span>
        </div>

        {/* Trending Badge */}
        {restaurant.trending && (
          <div className="absolute top-3 left-3 bg-[#D92E2E]/90 backdrop-blur-sm px-3 py-1 rounded-full shadow-lg z-20">
            <span className="text-xs font-bold text-white">🔥 Trending</span>
          </div>
        )}
      </div>

      <div className="relative flex flex-col gap-2 flex-grow">
        {/* Restaurant Name */}
        <h3 className="text-xl font-bold text-[#2B2B2B] dark:text-white group-hover:text-[#D92E2E] transition-colors">
          {restaurant.name}
        </h3>

        {/* Meta Info */}
        <div className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300 flex-wrap">
          <span className="text-gray-500">{restaurant.reviews}</span>
          {restaurant.price && <span>· {restaurant.price}</span>}
          <span className="px-2 py-0.5 bg-white/20 dark:bg-white/10 rounded-full text-xs font-medium border border-white/20">
            {restaurant.type}
          </span>
        </div>

        {/* Delivery Info */}
        {restaurant.deliveryTime && (
          <div className="flex items-center gap-3 text-xs text-gray-600 dark:text-gray-400">
            <span className="flex items-center gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              {restaurant.deliveryTime}
            </span>
            {restaurant.minOrder && (
              <span className="flex items-center gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z"
                  />
                </svg>
                Min {restaurant.minOrder}
              </span>
            )}
          </div>
        )}

        {/* Address */}
        <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-2 mb-2">
          {restaurant.address}
        </p>

        {/* Status */}
        <p className={`text-sm font-medium ${restaurant.statusColor} mb-2`}>
          {restaurant.status}
        </p>

        {/* Features */}
        {restaurant.features && (
          <p className="text-gray-500 text-xs mt-auto pt-2 border-t border-white/20">
            {restaurant.features}
          </p>
        )}

        {/* Categories Pills */}
        {restaurant.category && restaurant.category.length > 0 && (
          <div className="flex flex-wrap gap-1 mt-2">
            {restaurant.category.map((cat, idx) => (
              <span
                key={idx}
                className="px-2 py-0.5 bg-white/10 dark:bg-white/5 backdrop-blur-sm rounded-full text-xs font-medium text-gray-700 dark:text-gray-300 border border-white/10"
              >
                {cat}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Hover Effect Arrow */}
      <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2.5}
          stroke="currentColor"
          className="w-6 h-6 text-[#D92E2E]"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
          />
        </svg>
      </div>
    </div>
  );
};

export default RestaurantCard;
