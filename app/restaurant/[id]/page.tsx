"use client";
import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import MenuItemCard from "../../components/MenuItemCard";
import CartSummary from "../../components/CartSummary";
import FloatingCartButton from "../../components/FloatingCartButton";
import { restaurantsData } from "../../data/restaurants";
import {
  getMenuItemsByRestaurant,
  //   getRestaurantCategories,
  getMenuItemsByCategory,
  menuItemsData,
} from "../../data/menuItems";
import Image from "next/image";
import { supabase } from "../../lib/supabaseClient";

const RestaurantMenuPage = () => {
  const params = useParams();
  const restaurantId = params.id as string;

  // State for dynamic data
  const [restaurant, setRestaurant] = useState<any>(null);
  const [menuItems, setMenuItems] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Fetch Data from Supabase
  useEffect(() => {
    const fetchData = async () => {
      if (!restaurantId) return;

      setLoading(true);
      try {
        // 1. Fetch Restaurant Details
        const { data: restaurantData, error: restaurantError } = await supabase
          .from("restaurants")
          .select("*")
          .eq("id", restaurantId)
          .single();

        if (restaurantError || !restaurantData) {
          console.log(
            "Supabase restaurant not found/error, checking static data..."
          );
          // Fallback to static data
          const staticRestaurant = restaurantsData.find(
            (r) => r.id === restaurantId
          );
          if (staticRestaurant) {
            setRestaurant(staticRestaurant);
            // Load static menu items too
            setMenuItems(getMenuItemsByRestaurant(restaurantId));
          }
        } else {
          // Transform Supabase Data to match UI
          const transformedRestaurant = {
            id: restaurantData.id,
            name: restaurantData.name,
            rating: restaurantData.rating || "New",
            reviews: restaurantData.review_count || "(0)",
            price: restaurantData.price_range,
            type: restaurantData.type,
            address: restaurantData.address,
            status: restaurantData.status || "Open Now",
            statusColor:
              restaurantData.status === "Open"
                ? "text-green-600"
                : "text-red-500",
            image:
              restaurantData.image_url ||
              "/img/restaurant-img/Rasoi Restaurant.webp",
            trending: restaurantData.is_trending,
            deliveryTime: restaurantData.delivery_time,
            minOrder: restaurantData.min_order,
            category: restaurantData.type ? [restaurantData.type] : [],
            gradient: restaurantData.is_trending
              ? "from-orange-400 to-red-500"
              : "from-blue-400 to-indigo-600",
          };
          setRestaurant(transformedRestaurant);

          // 2. Fetch Menu Items for this restaurant
          const { data: menuData, error: menuError } = await supabase
            .from("menu_items")
            .select("*")
            .eq("restaurant_id", restaurantId);

          if (menuData && menuData.length > 0) {
            const transformedMenu = menuData.map((item) => ({
              id: item.id,
              name: item.name,
              description: item.description,
              price: item.price,
              image:
                item.image_url || "/img/restaurant-img/Rasoi Restaurant.webp", // Fallback
              category: item.category,
              isVeg: item.is_veg,
              rating: 4.5, // Default/Mock for now
              reviews: 10, // Default/Mock
              badge: item.is_bestseller ? "Bestseller" : null,
              restaurantId: item.restaurant_id,
            }));
            setMenuItems(transformedMenu);
          } else {
            // If restaurant exists in Supabase but no items, maybe fallback to formatted static items if IDs match?
            // Unlikely IDs match if created separately. Just showing empty or static fallback if needed.
            // For now we assume if restaurant came from Supabase, items should too, or it's empty.
            // BUT for hybrid (checking static based on ID):
            const staticItems = getMenuItemsByRestaurant(restaurantId);
            if (staticItems.length > 0) {
              setMenuItems(staticItems);
            }
          }
        }
      } catch (err) {
        console.error("Error fetching restaurant details:", err);
        // Final fallback
        const staticRestaurant = restaurantsData.find(
          (r) => r.id === restaurantId
        );
        if (staticRestaurant) {
          setRestaurant(staticRestaurant);
          setMenuItems(getMenuItemsByRestaurant(restaurantId));
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [restaurantId]);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#E59A01] flex items-center justify-center">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-white"></div>
      </div>
    );
  }

  if (!restaurant) {
    return (
      <div className="min-h-screen bg-[#E59A01] font-sans text-gray-800">
        <div className="absolute top-0 left-0 right-0 z-50 pt-6">
          <Navbar />
        </div>
        <main className="px-8 py-10 max-w-7xl mx-auto pt-32">
          <div className="bg-white/15 backdrop-blur-2xl border border-white/30 p-12 rounded-3xl shadow-xl text-center">
            <h1 className="text-4xl font-bold text-white mb-4">
              Restaurant Not Found
            </h1>
            <p className="text-white/80">
              The restaurant you're looking for doesn't exist.
            </p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  // Derive categories from the actual menu items currently in state
  const uniqueCategories = Array.from(
    new Set(menuItems.map((item) => item.category))
  ).filter(Boolean);
  const categories = ["All", ...uniqueCategories];

  const displayItems =
    selectedCategory === "All"
      ? menuItems
      : menuItems.filter((item) => item.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#E59A01] via-[#F5A623] to-[#E59A01] font-sans text-gray-800 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#FF6B6B]/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#D92E2E]/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-white/5 rounded-full blur-2xl animate-float"></div>
      </div>

      {/* Navbar - Absolutely positioned on top of hero */}
      <div className="absolute top-0 left-0 right-0 z-50 pt-6">
        <Navbar />
      </div>

      {/* Restaurant Hero Header - Full Width with Enhanced Visuals */}
      <div className="relative h-[75vh] md:h-[85vh] bg-gray-900 overflow-hidden">
        {/* Parallax Image */}
        <div className="absolute inset-0 scale-110">
          <Image
            src={restaurant.image}
            alt={restaurant.name}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Multi-layer Gradient Overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-black via-black/50 to-transparent"></div>
        <div className="absolute inset-0 bg-linear-to-r from-black/30 via-transparent to-black/30"></div>

        {/* Animated Shine Effect */}
        <div className="absolute inset-0 bg-linear-to-br from-transparent via-white/5 to-transparent animate-pulse"></div>

        {/* Restaurant Info Overlay with Animations */}
        <div
          className={`absolute bottom-0 left-0 right-0 p-6 md:p-12 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="max-w-[1600px] mx-auto">
            {/* Restaurant Name with Glow Effect */}
            <div className="mb-6">
              <h1 className="text-5xl md:text-7xl font-black text-white mb-2 drop-shadow-2xl tracking-tight">
                {restaurant.name}
              </h1>
              <div className="h-1.5 w-32 bg-gradient-to-r from-[#D92E2E] via-[#FF6B6B] to-transparent rounded-full"></div>
            </div>

            {/* Enhanced Badges Row */}
            <div className="flex items-center gap-3 flex-wrap mb-6">
              {/* Rating Badge with Glow */}
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full blur-lg opacity-50 group-hover:opacity-75 transition-opacity"></div>
                <div className="relative flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300">
                  <span className="text-2xl font-black bg-gradient-to-r from-yellow-500 to-orange-600 bg-clip-text text-transparent">
                    {restaurant.rating}
                  </span>
                  <span className="text-xl">⭐</span>
                  <span className="text-sm font-semibold text-gray-600">
                    {restaurant.reviews}
                  </span>
                </div>
              </div>

              {/* Type Badge */}
              <div className="px-6 py-3 bg-white/10 backdrop-blur-md rounded-full text-base font-bold text-white border-2 border-white/20 shadow-xl hover:bg-white/20 transition-all duration-300 hover:scale-105">
                🍽️ {restaurant.type}
              </div>

              {/* Price Badge */}
              {restaurant.price && (
                <div className="px-6 py-3 bg-gradient-to-r from-green-500/20 to-emerald-500/20 backdrop-blur-md rounded-full text-base font-bold text-white border-2 border-green-400/30 shadow-xl hover:scale-105 transition-all duration-300">
                  💰 {restaurant.price}
                </div>
              )}

              {/* Trending Badge if applicable */}
              {restaurant.trending && (
                <div className="px-6 py-3 bg-gradient-to-r from-[#D92E2E] to-[#FF6B6B] rounded-full text-base font-bold text-white shadow-xl animate-pulse">
                  🔥 Trending
                </div>
              )}
            </div>

            {/* Info Pills with Icons */}
            <div className="flex items-center gap-3 text-white flex-wrap">
              {restaurant.deliveryTime && (
                <div className="group flex items-center gap-2 bg-white/10 backdrop-blur-md px-5 py-2.5 rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2.5}
                    stroke="currentColor"
                    className="w-5 h-5 text-yellow-400"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span className="font-semibold">
                    {restaurant.deliveryTime}
                  </span>
                </div>
              )}

              {restaurant.minOrder && (
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-5 py-2.5 rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                  <span className="text-green-400 font-bold">₹</span>
                  <span className="font-semibold">
                    Min: {restaurant.minOrder}
                  </span>
                </div>
              )}

              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-5 py-2.5 rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                <span className="text-red-400">📍</span>
                <span className="font-semibold">{restaurant.address}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Fade Effect */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#E59A01] to-transparent"></div>
      </div>

      <main className="px-4 md:px-8 pb-10 max-w-[1600px] mx-auto relative z-10">
        {/* Category Filter with Modern Design */}
        <div className="-mt-24 mb-12 relative z-20">
          <div className="bg-white/20 backdrop-blur-2xl border-2 border-white/40 rounded-3xl shadow-2xl p-2 hover:shadow-[0_20px_60px_rgba(217,46,46,0.3)] transition-all duration-500">
            <div className="flex items-center gap-2 overflow-x-auto no-scrollbar p-2">
              {categories.map((category, index) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  style={{ animationDelay: `${index * 50}ms` }}
                  className={`px-8 py-4 rounded-2xl font-bold whitespace-nowrap transition-all duration-500 transform hover:scale-105 ${
                    selectedCategory === category
                      ? "bg-gradient-to-r from-[#D92E2E] to-[#FF6B6B] text-white shadow-[0_10px_30px_rgba(217,46,46,0.5)] scale-105"
                      : "bg-white/30 text-gray-800 dark:text-white hover:bg-white/50 shadow-lg"
                  } ${isVisible ? "animate-slide-in" : "opacity-0"}`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Menu Items Grid */}
        <div className="max-w-6xl mx-auto">
          {/* Section Header with Gradient */}
          <div className="mb-8 relative">
            <div className="absolute -left-4 top-0 bottom-0 w-1.5 bg-linear-to-b from-[#D92E2E] to-[#FF6B6B] rounded-full"></div>
            <h2 className="text-4xl md:text-5xl font-black text-white drop-shadow-lg">
              {selectedCategory === "All" ? "All Items" : selectedCategory}
            </h2>
            <p className="text-lg text-white/80 mt-2 font-medium">
              {displayItems.length} delicious{" "}
              {displayItems.length === 1 ? "item" : "items"} available
            </p>
          </div>

          {displayItems.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {displayItems.map((item, index) => (
                <div
                  key={item.id}
                  style={{ animationDelay: `${index * 100}ms` }}
                  className={`${isVisible ? "animate-slide-in" : "opacity-0"}`}
                >
                  <MenuItemCard item={item} />
                </div>
              ))}
            </div>
          ) : (
            <div className="bg-white/15 backdrop-blur-xl border-2 border-white/30 rounded-3xl p-16 text-center transform hover:scale-105 transition-all duration-500">
              <div className="text-8xl mb-6 animate-bounce">🍽️</div>
              <h3 className="text-3xl font-bold text-white mb-3">
                No items in this category
              </h3>
              <p className="text-white/80 text-lg">
                Try selecting a different category to explore more dishes
              </p>
            </div>
          )}
        </div>
      </main>

      {/* Floating Cart Button */}
      <FloatingCartButton />

      <Footer />
    </div>
  );
};

export default RestaurantMenuPage;
