"use client";
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";

const OrderPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

  const filters = [
    "Sort",
    "Rating 4.0+",
    "Pure Veg",
    "Non-Veg",
    "Fast Delivery",
  ];

  const toggleFilter = (f: string) => {
    if (selectedFilters.includes(f)) {
      setSelectedFilters((prev) => prev.filter((item) => item !== f));
    } else {
      setSelectedFilters((prev) => [...prev, f]);
    }
  };

  const categories = [
    { name: "Foods", image: "🍔" },
    { name: "Vegetables", image: "🥦" },
    { name: "Fruits", image: "🍎" },
    { name: "Juice & Shakes", image: "🥤" },
    { name: "Bakery", image: "🥐" },
    { name: "Daily Essentials", image: "🧼" },
    { name: "Raw Meat", image: "🥩" },
    { name: "Dairy Products", image: "🥛" },
    { name: "Mobile & Accessories", image: "📱" },
    { name: "Medicine", image: "💊" },
    { name: "Stationary", image: "✏️" },
    { name: "Pooja Items", image: "🙏" },
  ];

  const restaurants = [
    {
      name: "Rasoi Restaurant",
      rating: "3.8",
      reviews: "(775)",
      price: "₹200–400",
      type: "Fast Food",
      address: "Infront of Pt, JLN College, Kobiya",
      status: "Closed · Opens 9 am Sat",
      statusColor: "text-red-500",
      features: "Dine-in · Drive-through · No-contact delivery",
      image: "/img/restaurant-img/Rasoi Restaurant.webp",
      trending: true,
    },
    {
      name: "Hotel Sapphire Restaurant",
      rating: "3.8",
      reviews: "(204)",
      price: "₹300–500",
      type: "Restaurant",
      address: "Professor Colony, Raipur road",
      status: "Open Now",
      statusColor: "text-green-600",
      features: "Dine-in · Takeaway",
      image: "/img/restaurant-img/Hotel Sapphire Restaurant.webp",
      trending: true,
    },
    {
      name: "Maa bhawani restaurant",
      rating: "3.8",
      reviews: "(49)",
      price: "₹100–300",
      type: "Vegetarian",
      address: "PG8M+PQJ Old Bus Stand, Chowk",
      status: "Closes soon · 11 pm",
      statusColor: "text-orange-500",
      features: "Dine-in · Takeaway",
      image: "/img/restaurant-img/Maa bhawani restaurant.webp",
      trending: false,
    },
    // Duplicate for demo
    {
      name: "Spicy Bites",
      rating: "4.2",
      reviews: "(120)",
      price: "₹150–350",
      type: "Fast Food",
      address: "Main Market, Bemetara",
      status: "Open Now",
      statusColor: "text-green-600",
      features: "Dine-in · Delivery",
      image: "/img/restaurant-img/Rasoi Restaurant.webp",
      trending: false,
    },
  ];

  return (
    <div className="min-h-screen bg-[#E59A01] font-sans text-gray-800 pt-6">
      <Navbar />

      <main className="px-8 py-10 max-w-7xl mx-auto">
        {/* Search and Filter Section */}
        <div className="mb-12 space-y-6">
          <div className="flex flex-col items-center gap-6">
            <div className="w-full max-w-2xl relative">
              <input
                type="text"
                placeholder="Search for food, restaurants, or items..."
                className="w-full px-6 py-4 bg-white/90 backdrop-blur-md border border-white/30 rounded-full shadow-lg focus:outline-none focus:ring-2 focus:ring-[#D92E2E] text-lg"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button className="absolute right-2 top-1/2 transform -translate-y-1/2 px-6 py-2 bg-[#D92E2E] text-white rounded-full font-bold shadow-md hover:bg-[#b91c1c] transition">
                Search
              </button>
            </div>
          </div>
        </div>

        {/* Categories Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 drop-shadow-md">
            Categories
          </h2>

          {/* Filters Section */}
          <div className="mb-8 flex gap-3 flex-wrap justify-start">
            {filters.map((f) => {
              const isSelected = selectedFilters.includes(f);
              return (
                <button
                  key={f}
                  onClick={() => toggleFilter(f)}
                  className={`px-6 py-2 rounded-full font-medium transition whitespace-nowrap flex items-center gap-2 ${
                    isSelected
                      ? "bg-[#D92E2E] text-white border border-[#D92E2E] shadow-lg"
                      : "bg-white/20 backdrop-blur-md border border-white/30 text-white hover:bg-white/30"
                  }`}
                >
                  {f}
                  {isSelected && (
                    <span className="ml-2 text-lg font-bold leading-none">
                      &times;
                    </span>
                  )}
                </button>
              );
            })}
          </div>
          <div className="relative group">
            <button
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center text-[#D92E2E] hover:bg-gray-50 transition opacity-0 group-hover:opacity-100"
              onClick={() => {
                const container = document.getElementById(
                  "categories-container"
                );
                if (container)
                  container.scrollBy({ left: -200, behavior: "smooth" });
              }}
            >
              &lt;
            </button>
            <div
              id="categories-container"
              className="flex gap-8 overflow-x-auto pb-4 no-scrollbar scroll-smooth px-4"
            >
              {categories.map((cat, idx) => (
                <div
                  key={idx}
                  className="flex flex-col items-center gap-3 min-w-[100px] cursor-pointer group/item"
                >
                  <div className="w-24 h-24 bg-white rounded-full shadow-md flex items-center justify-center text-4xl group-hover/item:scale-110 transition duration-300">
                    {cat.image}
                  </div>
                  <h3 className="font-medium text-white text-center text-sm">
                    {cat.name}
                  </h3>
                </div>
              ))}
            </div>
            <button
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center text-[#D92E2E] hover:bg-gray-50 transition opacity-0 group-hover:opacity-100"
              onClick={() => {
                const container = document.getElementById(
                  "categories-container"
                );
                if (container)
                  container.scrollBy({ left: 200, behavior: "smooth" });
              }}
            >
              &gt;
            </button>
          </div>
        </section>

        {/* Trending Restaurants */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 drop-shadow-md">
            Trending Restaurants 🔥
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {restaurants
              .filter((r) => r.trending)
              .map((restaurant, idx) => (
                <RestaurantCard key={idx} restaurant={restaurant} />
              ))}
          </div>
        </section>

        {/* All Restaurants */}
        <section>
          <h2 className="text-3xl font-bold text-white mb-8 drop-shadow-md">
            All Restaurants 🍽️
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {restaurants.map((restaurant, idx) => (
              <RestaurantCard key={idx} restaurant={restaurant} />
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

const RestaurantCard = ({ restaurant }: { restaurant: any }) => (
  <div className="bg-white/15 backdrop-blur-2xl border border-white/30 p-6 rounded-3xl shadow-xl hover:shadow-2xl transition duration-300 text-left flex flex-col h-full cursor-pointer group">
    <div className="h-48 bg-gray-100 rounded-2xl mb-4 relative overflow-hidden">
      <Image
        src={restaurant.image}
        alt={restaurant.name}
        fill
        className="object-cover group-hover:scale-105 transition duration-500"
      />
    </div>
    <div className="flex flex-col gap-1 flex-grow">
      <h3 className="text-xl font-bold text-[#2B2B2B]">{restaurant.name}</h3>
      <div className="flex items-center gap-1 text-sm text-gray-800 flex-wrap">
        <span className="bg-green-600 text-white px-1 rounded text-xs font-bold">
          {restaurant.rating} ★
        </span>
        <span className="text-gray-700 font-medium">{restaurant.reviews}</span>
        {restaurant.price && <span>· {restaurant.price}</span>}
        <span>· {restaurant.type}</span>
      </div>
      <p className="text-gray-700 text-sm line-clamp-2">{restaurant.address}</p>
      <p className={`text-sm font-medium ${restaurant.statusColor}`}>
        {restaurant.status}
      </p>
      {restaurant.features && (
        <p className="text-gray-600 text-xs mt-1">{restaurant.features}</p>
      )}
    </div>
  </div>
);

export default OrderPage;
