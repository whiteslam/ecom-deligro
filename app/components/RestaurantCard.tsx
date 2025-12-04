"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

interface RestaurantCardProps {
  restaurant: any; // Ideally this should be a proper type imported from types
  onClick?: () => void;
}

const RestaurantCard: React.FC<RestaurantCardProps> = ({
  restaurant,
  onClick,
}) => {
  const CardContent = () => (
    <>
      {/* Mobile Layout (Large Featured Card - Red Brand Theme) */}
      <div className="md:hidden group relative bg-[#D92E2E] dark:bg-gray-900 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col overflow-hidden mb-4">
        {/* 1. Featured Dish Visual */}
        <div className="relative h-40 w-full">
          <Image
            src={restaurant.image}
            alt={restaurant.name}
            fill
            className="object-cover"
          />
          {/* Gradient Overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60"></div>

          {/* Top-Left Label: Dish Name + Price */}
          <div className="absolute top-3 left-3 bg-black/30 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/10 flex items-center gap-1.5 shadow-sm">
            <span className="text-white text-[9px] font-bold tracking-wide uppercase">
              {restaurant.category && restaurant.category[0]
                ? restaurant.category[0]
                : "Special"}
            </span>
            <span className="text-white/60 text-[8px]">•</span>
            <span className="text-white text-[9px] font-bold">
              {restaurant.price || "₹200"}
            </span>
          </div>

          {/* Top-Right Bookmark Icon */}
          <button className="absolute top-3 right-3 bg-white/20 backdrop-blur-md p-1.5 rounded-full text-white hover:bg-white/30 transition active:scale-95 shadow-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-3.5 h-3.5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
              />
            </svg>
          </button>

          {/* 2. Quick Service Tag (Overlapping Image Bottom) */}
          <div className="absolute bottom-3 left-3">
            <div className="inline-flex items-center gap-1 px-1.5 py-0.5 bg-[#E8F5E9] text-[#2E7D32] text-[9px] font-bold rounded-md shadow-sm backdrop-blur-sm bg-opacity-95">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-2.5 h-2.5"
              >
                <path
                  fillRule="evenodd"
                  d="M14.615 1.595a.75.75 0 01.359.852L12.982 9.75h7.268a.75.75 0 01.548 1.262l-10.5 11.25a.75.75 0 01-1.272-.71l1.992-7.302H3.75a.75.75 0 01-.548-1.262l10.5-11.25a.75.75 0 01.913-.143z"
                  clipRule="evenodd"
                />
              </svg>
              <span>NEAR & FAST</span>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-4 flex flex-col gap-2 relative text-left">
          {/* Row 1: Identity & Rating */}
          <div className="flex flex-col items-start w-full pr-14">
            {/* 3. Restaurant Identity */}
            <h3 className="text-base font-bold text-white leading-tight mb-0.5 text-left">
              {restaurant.name}
            </h3>
            <p className="text-[10px] text-white/80 line-clamp-1 text-left">
              {restaurant.address || "Bemetara, Chhattisgarh"}
            </p>
          </div>

          {/* 5. Rating Badge (Absolute Positioned) */}
          <div className="absolute right-4 top-4 flex flex-col items-end gap-0.5">
            <div className="flex items-center gap-1 px-1.5 py-0.5 bg-white text-[#D92E2E] rounded-md shadow-sm">
              <span className="text-[10px] font-bold">{restaurant.rating}</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-2.5 h-2.5"
              >
                <path
                  fillRule="evenodd"
                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <span className="text-[9px] text-white/80 font-medium">
              {restaurant.reviews || "1K+"} reviews
            </span>
          </div>

          {/* 4. Time & Distance Indicators */}
          <div className="flex items-center justify-start gap-3 text-[10px] font-medium text-white/90">
            <div className="flex items-center gap-1">
              <div className="p-0.5 bg-white/20 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-3 h-3 text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <span>{restaurant.deliveryTime || "25-30 mins"}</span>
            </div>
            <div className="w-0.5 h-0.5 bg-white/50 rounded-full"></div>
            <div className="flex items-center gap-1">
              <div className="p-0.5 bg-white/20 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-3 h-3 text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                  />
                </svg>
              </div>
              <span>2.5 km</span>
            </div>
          </div>

          {/* 6. Offer Highlight */}
          <div className="mt-1 pt-2 border-t border-dashed border-white/20 flex items-center gap-1.5">
            <div className="w-4 h-4 bg-white/20 rounded-full flex items-center justify-center shrink-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-2.5 h-2.5 text-white"
              >
                <path
                  fillRule="evenodd"
                  d="M5.25 2.25a3 3 0 00-3 3v4.318a3 3 0 00.879 2.121l9.58 9.581c.92.92 2.409.92 3.328 0l5.318-5.318a2.25 2.25 0 000-3.182l-9.58-9.58A3 3 0 0014.682 2.25H5.25zM11.25 7.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <span className="text-[10px] font-bold text-white truncate">
              Flat ₹120 OFF above ₹199
            </span>
          </div>
        </div>
      </div>

      {/* Desktop Layout (Existing) */}
      <div className="hidden md:flex group relative bg-white/15 backdrop-blur-xl border border-white/30 p-4 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 text-left flex-col h-full cursor-pointer hover:-translate-y-2">
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
    </>
  );

  if (onClick) {
    return (
      <div onClick={onClick}>
        <CardContent />
      </div>
    );
  }

  return (
    <Link href={`/restaurant/${restaurant.id}`}>
      <CardContent />
    </Link>
  );
};

export default RestaurantCard;
