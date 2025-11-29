"use client";
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";

const OrderPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isLocationOpen, setIsLocationOpen] = useState(true);
  const [locationName, setLocationName] = useState("Bemetara");
  const [coords, setCoords] = useState<{ lat: number; lng: number } | null>(
    null
  );
  const [isLocating, setIsLocating] = useState(false);

  const detectLocation = () => {
    if (!navigator.geolocation) {
      alert("Geolocation is not supported by your browser");
      return;
    }

    setIsLocating(true);

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;
        setCoords({ lat: latitude, lng: longitude });

        try {
          const response = await fetch(
            `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
          );
          const data = await response.json();
          const city =
            data.address.city ||
            data.address.town ||
            data.address.village ||
            data.address.county ||
            "Unknown Location";
          setLocationName(city);
        } catch (error) {
          console.error("Error fetching address:", error);
          setLocationName(`${latitude.toFixed(4)}, ${longitude.toFixed(4)}`);
        } finally {
          setIsLocating(false);
        }
      },
      (error) => {
        console.error("Error getting location:", error);
        alert("Unable to retrieve your location");
        setIsLocating(false);
      }
    );
  };

  const categories = [
    { name: "Foods", image: "/img/categories/foods.png" },
    { name: "Vegetables", image: "/img/categories/vegetables.avif" },
    { name: "Fruits", image: "/img/categories/fruits.jpeg" },
    { name: "Juice & Shakes", image: "/img/categories/shake.webp" },
    { name: "Bakery", image: "/img/categories/bakery.jpeg" },
    { name: "Daily Essentials", image: "/img/categories/daily-essential.jpeg" },
    { name: "Raw Meat", image: "/img/categories/rawmeat.jpg" },
    { name: "Dairy Products", image: "/img/categories/dairy.jpeg" },
    { name: "Mobile & Accessories", image: "/img/categories/mobile.jpeg" },
    { name: "Medicine", image: "/img/categories/medicine.jpeg" },
    { name: "Stationary", image: "/img/categories/stationery.jpeg" },
    { name: "Pooja Items", image: "/img/categories/pooja-items.webp" },
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
            <div className="w-full max-w-2xl relative flex items-center gap-4">
              {/* Location Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setIsLocationOpen(!isLocationOpen)}
                  className="h-14 px-6 bg-white/15 backdrop-blur-2xl border border-white/30 text-white rounded-full font-medium shadow-xl hover:bg-white/25 transition flex items-center gap-2"
                >
                  <span className="max-w-[100px] truncate">{locationName}</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={`transition-transform duration-300 ${
                      isLocationOpen ? "rotate-180" : ""
                    }`}
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </button>

                {isLocationOpen && (
                  <div className="absolute top-full left-0 mt-4 w-80 bg-white/80 backdrop-blur-2xl border border-white/40 shadow-2xl rounded-2xl p-4 flex flex-col gap-4 animate-in fade-in slide-in-from-top-2 duration-200 z-50">
                    <div
                      className="flex items-center gap-4 cursor-pointer bg-[#D92E2E]/10 border border-[#D92E2E] p-4 rounded-xl transition hover:bg-[#D92E2E]/20"
                      onClick={detectLocation}
                    >
                      <div className="text-[#D92E2E] shrink-0">
                        {isLocating ? (
                          <svg
                            className="animate-spin h-6 w-6"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                          </svg>
                        ) : (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <circle cx="12" cy="12" r="10" />
                            <line x1="12" y1="8" x2="12" y2="16" />
                            <line x1="8" y1="12" x2="16" y2="12" />
                          </svg>
                        )}
                      </div>
                      <div>
                        <p className="text-[#D92E2E] font-bold text-sm">
                          {isLocating
                            ? "Detecting..."
                            : "Detect current location"}
                        </p>
                        <p className="text-[#D92E2E]/70 text-xs font-medium">
                          Using GPS
                        </p>
                      </div>
                    </div>

                    {/* Map Preview */}
                    {coords && (
                      <div className="w-full h-32 rounded-xl overflow-hidden border border-white/50 shadow-inner relative">
                        <iframe
                          width="100%"
                          height="100%"
                          frameBorder="0"
                          scrolling="no"
                          marginHeight={0}
                          marginWidth={0}
                          src={`https://www.openstreetmap.org/export/embed.html?bbox=${
                            coords.lng - 0.01
                          },${coords.lat - 0.01},${coords.lng + 0.01},${
                            coords.lat + 0.01
                          }&layer=mapnik&marker=${coords.lat},${coords.lng}`}
                          className="w-full h-full"
                        ></iframe>
                      </div>
                    )}
                  </div>
                )}
              </div>

              <div className="relative flex-1">
                <input
                  type="text"
                  placeholder="Search for food, restaurants, or items..."
                  className="w-full px-6 py-4 bg-white/15 backdrop-blur-2xl border border-white/30 rounded-full shadow-xl focus:outline-none focus:ring-2 focus:ring-white/50 text-lg text-white placeholder-white/70"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button className="absolute right-2 top-1/2 transform -translate-y-1/2 px-6 py-2 bg-white/15 backdrop-blur-2xl border border-white/30 text-[#D92E2E] rounded-full font-medium shadow-xl hover:bg-white/30 transition">
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Categories Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 drop-shadow-md">
            Categories
          </h2>
          <div className="relative group px-8">
            <button
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center text-white hover:scale-125 transition duration-300"
              onClick={() => {
                const container = document.getElementById(
                  "categories-container"
                );
                if (container)
                  container.scrollBy({ left: -200, behavior: "smooth" });
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>
            </button>
            <div
              id="categories-container"
              className="flex gap-8 overflow-x-auto pb-4 no-scrollbar scroll-smooth px-4"
            >
              {categories.map((cat, idx) => (
                <div
                  key={idx}
                  className="flex flex-col items-center gap-3 min-w-[100px] cursor-pointer group/item animate-slide-in opacity-0"
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  <div className="w-24 h-24 rounded-full flex items-center justify-center text-5xl group-hover/item:scale-110 transition duration-300 drop-shadow-md relative overflow-hidden bg-white/20 backdrop-blur-sm">
                    {cat.image.startsWith("/") ? (
                      <Image
                        src={cat.image}
                        alt={cat.name}
                        fill
                        className="object-cover"
                      />
                    ) : (
                      cat.image
                    )}
                  </div>
                  <h3 className="font-medium text-white text-center text-sm">
                    {cat.name}
                  </h3>
                </div>
              ))}
            </div>
            <button
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center text-white hover:scale-125 transition duration-300"
              onClick={() => {
                const container = document.getElementById(
                  "categories-container"
                );
                if (container)
                  container.scrollBy({ left: 200, behavior: "smooth" });
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
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
