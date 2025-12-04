"use client";
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import RestaurantCard from "../components/RestaurantCard";
import { restaurantsData } from "../data/restaurants";

const RestaurantsPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    "All",
    ...Array.from(new Set(restaurantsData.flatMap((r) => r.category || []))),
  ];

  const filteredRestaurants = restaurantsData.filter((restaurant) => {
    const matchesSearch =
      restaurant.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      restaurant.type.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" ||
      restaurant.category?.includes(selectedCategory);
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-[#E59A01] dark:bg-gray-950 font-sans text-gray-800 dark:text-gray-100 pt-6 transition-colors duration-500 overflow-hidden relative">
      <Navbar />

      <main className="px-4 md:px-8 py-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 drop-shadow-lg">
            Explore Restaurants
          </h1>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            Discover the best food in Bemetara. From fast food to fine dining,
            we have it all.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-12 flex flex-col md:flex-row gap-4 items-center justify-between bg-white/10 backdrop-blur-xl p-6 rounded-3xl border border-white/20 shadow-xl">
          {/* Search Bar */}
          <div className="relative w-full md:w-96">
            <input
              type="text"
              placeholder="Search for restaurants or cuisines..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-6 py-3 pl-12 rounded-full bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all"
            />
            <svg
              className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/70"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>

          {/* Category Filter */}
          <div className="flex gap-2 overflow-x-auto no-scrollbar w-full md:w-auto pb-2 md:pb-0">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-bold whitespace-nowrap transition-all ${
                  selectedCategory === category
                    ? "bg-white text-[#E59A01] shadow-lg scale-105"
                    : "bg-white/20 text-white hover:bg-white/30"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Restaurant Grid */}
        {filteredRestaurants.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredRestaurants.map((restaurant) => (
              <RestaurantCard key={restaurant.id} restaurant={restaurant} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-white mb-2">
              No restaurants found
            </h3>
            <p className="text-white/80">
              Try adjusting your search or filters.
            </p>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default RestaurantsPage;
