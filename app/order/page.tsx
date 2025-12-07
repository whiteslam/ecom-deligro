"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";
import RestaurantCard from "../components/RestaurantCard";
import HeroSlider from "../components/HeroSlider";
import FloatingCartButton from "../components/FloatingCartButton";
import {
  restaurantsData,
  getTrendingRestaurants,
  searchRestaurants,
} from "../data/restaurants";
import { supabase } from "../lib/supabaseClient";

const OrderPage = () => {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const [locationName, setLocationName] = useState("Detecting...");
  const [addressLine, setAddressLine] = useState("Fetching address...");
  const [isLocating, setIsLocating] = useState(true);
  const [activeCategory, setActiveCategory] = useState("All");
  const [isCategoryExpanded, setIsCategoryExpanded] = useState(false);

  // Supabase State
  const [restaurants, setRestaurants] = useState<any[]>([]);
  const [loadingRestaurants, setLoadingRestaurants] = useState(true);

  // Fetch Restaurants from Supabase
  React.useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const { data, error } = await supabase.from("restaurants").select("*");
        if (error) {
          console.error("Error fetching restaurants:", error);
          // Fallback to static data on error if wanted, or just set empty
          setRestaurants(restaurantsData); // Using static data as fallback for now
        } else if (data && data.length > 0) {
          // Transform Supabase data to match component expectation
          const transformed = data.map((r) => ({
            id: r.id,
            name: r.name,
            rating: r.rating || "New",
            reviews: r.review_count || "(0)",
            price: r.price_range,
            type: r.type,
            address: r.address,
            status: r.status || "Open Now",
            statusColor:
              r.status === "Open" ? "text-green-600" : "text-red-500",
            image: r.image_url || "/img/restaurant-img/Rasoi Restaurant.webp", // Fallback image
            trending: r.is_trending,
            deliveryTime: r.delivery_time,
            minOrder: r.min_order,
            category: r.type ? [r.type] : [], // Simple category mapping
            gradient: r.is_trending
              ? "from-orange-400 to-red-500"
              : "from-blue-400 to-indigo-600",
          }));
          setRestaurants(transformed);
        } else {
          // If no data in Supabase yet, show static data
          setRestaurants(restaurantsData);
        }
      } catch (err) {
        console.error("Unexpected error:", err);
        setRestaurants(restaurantsData);
      } finally {
        setLoadingRestaurants(false);
      }
    };

    fetchRestaurants();
  }, []);

  // Automatically detect location on page load
  React.useEffect(() => {
    if (!navigator.geolocation) {
      setLocationName("Bemetara");
      setAddressLine("Bemetara, Chhattisgarh");
      setIsLocating(false);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;

        try {
          const response = await fetch(
            `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
          );
          const data = await response.json();
          const city =
            data.address.city ||
            data.address.town ||
            data.address.village ||
            "Unknown Location";
          setLocationName(city);
          setAddressLine(data.display_name.split(",").slice(0, 3).join(", "));
        } catch (error) {
          console.error("Error fetching address:", error);
          setLocationName("Bemetara");
          setAddressLine(`${latitude.toFixed(4)}, ${longitude.toFixed(4)}`);
        } finally {
          setIsLocating(false);
        }
      },
      (error) => {
        console.error("Error getting location:", error);
        setLocationName("Bemetara");
        setAddressLine("Bemetara, Chhattisgarh");
        setIsLocating(false);
      }
    );
  }, []);

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

  // Logic to filter and show data
  const dataToShow = loadingRestaurants ? [] : restaurants; // Or handle loading visually

  const filteredRestaurants = searchQuery
    ? dataToShow.filter(
        (r) =>
          r.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          r.type?.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : activeCategory !== "All"
    ? dataToShow.filter((r) => r.category?.includes(activeCategory)) // Might need better category logic if strict array
    : dataToShow;

  const trendingRestaurants = dataToShow.filter((r) => r.trending);

  return (
    <div className="min-h-screen bg-[#E59A01] dark:bg-gray-950 font-sans text-gray-800 dark:text-gray-100 pb-24 transition-colors duration-500 overflow-x-hidden">
      {/* ==================== MOBILE LAYOUT (md:hidden) ==================== */}
      <div className="md:hidden relative">
        <Navbar />
        {/* Animated Background Orbs */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-linear-to-br from-[#D92E2E]/20 to-orange-400/20 rounded-full blur-3xl animate-pulse pointer-events-none"></div>
        <div className="absolute bottom-20 right-10 w-60 h-60 bg-linear-to-tl from-yellow-400/20 to-[#D92E2E]/20 rounded-full blur-3xl animate-pulse [animation-delay:1s] pointer-events-none"></div>

        {/* Mobile Header - Sticky & Glassmorphic */}
        <header className="hidden sticky top-0 z-30 bg-[#E59A01]/90 backdrop-blur-lg shadow-lg px-4 pt-4 pb-3 transition-all duration-300 border-b border-white/10">
          <div className="flex justify-between items-start mb-4">
            {/* Search Bar & Toggle */}
            <div className="flex items-center gap-3 mt-1">
              <div className="flex-1 relative group">
                <input
                  type="text"
                  placeholder="Search 'Biryani'..."
                  className="w-full pl-12 pr-4 py-4 bg-white/15 backdrop-blur-xl border border-white/25 rounded-2xl text-lg font-semibold focus:ring-2 focus:ring-white/40 focus:bg-white/20 placeholder-white/70 text-white transition-all shadow-inner"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-white/90 group-focus-within:scale-110 transition-transform"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              {/* Veg/Non-Veg Toggle */}
            </div>
          </div>
        </header>

        <main className="px-4 py-6 space-y-8 relative z-10">
          {/* Categories - Horizontal Scroll */}
          <section>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-extrabold text-white drop-shadow-md">
                Category
              </h2>
              <span
                className="text-xs text-white font-bold bg-white/20 px-2 py-1 rounded-full backdrop-blur-sm cursor-pointer hover:bg-white/30 transition"
                onClick={() => setIsCategoryExpanded(!isCategoryExpanded)}
              >
                {isCategoryExpanded ? "Show Less" : "See All"}
              </span>
            </div>
            <div
              className={`flex gap-4 ${
                isCategoryExpanded
                  ? "flex-wrap justify-between"
                  : "overflow-x-auto pb-2 hide-scrollbar"
              }`}
            >
              {categories.map((cat, idx) => (
                <div
                  key={idx}
                  onClick={() => setActiveCategory(cat.name)}
                  className={`flex flex-col items-center gap-2 ${
                    isCategoryExpanded ? "w-[22%]" : "min-w-[70px]"
                  } cursor-pointer transition-all ${
                    activeCategory === cat.name
                      ? "opacity-100 scale-105"
                      : "opacity-80"
                  }`}
                >
                  <div
                    className={`relative w-16 h-16 rounded-full p-1 border-2 transition-all ${
                      activeCategory === cat.name
                        ? "border-white bg-white/20"
                        : "border-transparent bg-white/10"
                    }`}
                  >
                    <div className="w-full h-full rounded-full overflow-hidden bg-white/90 relative">
                      {cat.image && (
                        <Image
                          src={cat.image}
                          alt={cat.name}
                          fill
                          className="object-cover"
                        />
                      )}
                    </div>
                  </div>
                  <span
                    className={`text-xs font-medium ${
                      isCategoryExpanded
                        ? "text-center leading-tight"
                        : "whitespace-nowrap"
                    } ${
                      activeCategory === cat.name
                        ? "text-white font-bold"
                        : "text-white/80"
                    }`}
                  >
                    {cat.name}
                  </span>
                </div>
              ))}
            </div>
          </section>

          {/* Recommended For You */}
          <section>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-extrabold text-white drop-shadow-md">
                Trending{" "}
                <span className="text-transparent bg-clip-text bg-linear-to-r from-white to-orange-200">
                  Restaurants !
                </span>
              </h2>
              <span
                className="text-xs text-white font-bold bg-white/20 px-2 py-1 rounded-full backdrop-blur-sm cursor-pointer hover:bg-white/30 transition"
                onClick={() => router.push("/restaurants")}
              >
                See All
              </span>
            </div>
            {/* Horizontal Scrollable Container */}
            <div className="flex overflow-x-auto gap-4 pb-4 hide-scrollbar snap-x snap-mandatory">
              {trendingRestaurants.map((restaurant) => (
                <div
                  key={restaurant.id}
                  className="min-w-[220px] w-[220px] shrink-0 snap-center transform transition duration-300 hover:-translate-y-1"
                >
                  <RestaurantCard restaurant={restaurant} />
                </div>
              ))}
            </div>
          </section>

          {/* All Restaurants */}
          <section>
            <h2 className="text-xl font-semibold text-white/90 mb-4 tracking-tight">
              All restaurants to explore
            </h2>
            {filteredRestaurants.length > 0 ? (
              <div className="flex flex-col gap-4">
                {filteredRestaurants.map((restaurant) => (
                  <div
                    key={restaurant.id}
                    className="flex gap-4 p-3 rounded-[1.5rem] transition-all duration-300 cursor-pointer bg-white/10 backdrop-blur-md border border-white/20 shadow-lg"
                    onClick={() => router.push(`/restaurant/${restaurant.id}`)}
                  >
                    {/* Left: Image Card */}
                    <div className="relative w-28 h-32 shrink-0 rounded-[1.25rem] overflow-hidden shadow-md border border-white/20">
                      <Image
                        src={restaurant.image}
                        alt={restaurant.name}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent"></div>
                    </div>

                    {/* Right: Info */}
                    <div className="flex flex-col flex-1 justify-center gap-1.5 h-32">
                      {/* Category Badge */}
                      {restaurant.type === "Veg" && (
                        <div className="flex items-start">
                          <span className="text-[10px] font-bold text-green-600 bg-green-50 dark:bg-green-900/30 dark:text-green-400 px-2 py-0.5 rounded-md flex items-center gap-1">
                            🌿 Pure Veg
                          </span>
                        </div>
                      )}

                      {/* Name */}
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white leading-tight line-clamp-1">
                        {restaurant.name}
                      </h3>

                      {/* Rating + Delivery Row */}
                      <div className="flex items-center gap-2">
                        <div className="flex items-center gap-0.5 bg-green-100 dark:bg-green-900/30 px-1.5 py-0.5 rounded-md border border-green-200 dark:border-green-800">
                          <span className="text-xs font-bold text-green-700 dark:text-green-400">
                            {restaurant.rating}
                          </span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="w-2.5 h-2.5 text-green-700 dark:text-green-400"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                        <span className="text-[10px] text-gray-500 dark:text-gray-400 font-medium">
                          {restaurant.reviews}
                        </span>
                        <span className="text-[10px] text-gray-300">•</span>
                        <span className="text-[10px] text-gray-500 dark:text-gray-400 font-medium">
                          {restaurant.deliveryTime || "20-25 mins"}
                        </span>
                      </div>

                      {/* Cuisine & Location */}
                      <div>
                        <p className="text-[11px] text-gray-500 dark:text-gray-400 truncate leading-tight">
                          {restaurant.category?.slice(0, 3).join(", ")}
                        </p>
                        <p className="text-[11px] text-gray-400 dark:text-gray-500 truncate leading-tight mt-0.5">
                          {restaurant.address?.split(",")[0] || "Bemetara"} •
                          3.5 km
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-10">
                <div className="text-4xl mb-2">🔍</div>
                <h3 className="text-lg font-bold text-white">
                  No restaurants found
                </h3>
              </div>
            )}
          </section>
        </main>
      </div>

      {/* ==================== DESKTOP LAYOUT (hidden md:block) ==================== */}
      <div className="hidden md:block">
        {/* Navbar */}
        <Navbar />

        {/* Hero Slider Section */}
        <section className="px-8 py-6 max-w-7xl mx-auto">
          <HeroSlider />
        </section>

        <main className="px-8 py-10 max-w-7xl mx-auto relative">
          {/* Animated Background Orbs */}
          <div className="absolute top-20 left-10 w-96 h-96 bg-linear-to-br from-[#D92E2E]/10 to-orange-400/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-linear-to-tl from-yellow-400/10 to-[#D92E2E]/10 rounded-full blur-3xl animate-pulse [animation-delay:1s]"></div>

          {/* Search and Filter Section (Original) */}
          <div className="mb-12 space-y-6 relative z-10">
            <div className="flex flex-col items-center gap-6">
              <div className="w-full max-w-2xl relative flex items-center gap-4">
                {/* Location Display */}
                <div className="relative">
                  <button
                    onClick={() => router.push("/location")}
                    className="h-14 px-6 bg-white/20 backdrop-blur-xl border border-white/40 text-white rounded-full font-medium shadow-2xl hover:bg-white/30 transition-all duration-300 flex items-center gap-2"
                  >
                    {isLocating ? (
                      <>
                        <svg
                          className="animate-spin h-5 w-5"
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
                        <span className="max-w-[100px] truncate">
                          Detecting...
                        </span>
                      </>
                    ) : (
                      <>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                          <circle cx="12" cy="10" r="3" />
                        </svg>
                        <span className="max-w-[150px] truncate">
                          {locationName}
                        </span>
                        {/* Edit Icon */}
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
                          className="ml-1"
                        >
                          <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
                          <path d="m15 5 4 4" />
                        </svg>
                      </>
                    )}
                  </button>
                </div>

                <div className="relative flex-1">
                  <input
                    type="text"
                    placeholder="Search for food, restaurants, or items..."
                    className="w-full px-6 py-4 bg-white/20 backdrop-blur-xl border border-white/40 rounded-full shadow-2xl focus:outline-none focus:ring-2 focus:ring-white/50 text-lg text-white placeholder-white/70"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  <button className="absolute right-2 top-1/2 transform -translate-y-1/2 px-6 py-2 bg-[#D92E2E] text-white rounded-full font-medium shadow-xl hover:bg-[#b91c1c] transition">
                    Search
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Categories Section (Original) */}
          <section className="mb-16 relative z-10">
            <h2 className="text-5xl font-extrabold text-white mb-8 drop-shadow-md">
              What are you{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-[#D92E2E] to-orange-500">
                craving?
              </span>
            </h2>
            <div className="relative group px-8">
              <button
                className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 flex items-center justify-center bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-white/30 hover:scale-110 transition duration-300 shadow-lg"
                onClick={() => {
                  const container = document.getElementById(
                    "categories-container-desktop"
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
                id="categories-container-desktop"
                className="flex gap-8 overflow-x-auto pb-4 no-scrollbar scroll-smooth px-4"
              >
                {categories.map((cat, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col items-center gap-3 min-w-[100px] cursor-pointer group/item"
                  >
                    <div className="relative w-24 h-24 rounded-full flex items-center justify-center text-5xl group-hover/item:scale-110 transition duration-300 drop-shadow-md overflow-hidden bg-white/20 backdrop-blur-sm border border-white/30 shadow-xl">
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
                className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 flex items-center justify-center bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-white/30 hover:scale-110 transition duration-300 shadow-lg"
                onClick={() => {
                  const container = document.getElementById(
                    "categories-container-desktop"
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

          {/* Trending Restaurants (Original) */}
          <section className="mb-16 relative z-10">
            <h2 className="text-5xl font-extrabold text-white mb-8 drop-shadow-md">
              Trending{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-[#D92E2E] to-orange-500">
                Restaurants
              </span>
            </h2>
            <div className="grid grid-cols-3 gap-8">
              {trendingRestaurants.map((restaurant) => (
                <RestaurantCard key={restaurant.id} restaurant={restaurant} />
              ))}
            </div>
          </section>

          {/* All Restaurants (Original) */}
          <section className="relative z-10">
            <h2 className="text-5xl font-extrabold text-white mb-8 drop-shadow-md">
              {searchQuery ? "Search Results" : "All Restaurants"}
            </h2>
            {filteredRestaurants.length > 0 ? (
              <div className="grid grid-cols-3 gap-8">
                {filteredRestaurants.map((restaurant) => (
                  <RestaurantCard key={restaurant.id} restaurant={restaurant} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  No restaurants found
                </h3>
                <p className="text-white/70">
                  Try searching for something else
                </p>
              </div>
            )}
          </section>
        </main>
      </div>

      {/* Floating Cart Button (Available in both Mobile and Desktop) */}
      <FloatingCartButton />

      <Footer />
    </div>
  );
};

export default OrderPage;
