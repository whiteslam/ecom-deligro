"use client";
import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import AddRestaurantModal from "./AddRestaurantModal";
import { supabase } from "../../lib/supabaseClient";

const RestaurantsView: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [restaurants, setRestaurants] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchRestaurants = useCallback(async () => {
    setLoading(true);
    try {
      const { data, error } = await supabase
        .from("restaurants")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) {
        console.error("Error fetching restaurants:", error);
      } else {
        const mappedData = data.map((r) => ({
          id: r.id,
          name: r.name,
          owner: "Admin Owner", // Placeholder as table doesn't have owner yet
          cuisine: r.type,
          rating: r.rating,
          orders: r.review_count || 0, // Mocking orders count with review count for now
          revenue:
            "₹" + (Math.floor(Math.random() * 100000) + 50000).toLocaleString(), // Mock revenue
          status: r.status === "Open" ? "Active" : "Inactive", // Simple mapping
          image: r.image_url || "🍽️",
          joinedDate: new Date(r.created_at).toLocaleDateString("en-US", {
            month: "short",
            year: "numeric",
          }),
        }));
        setRestaurants(mappedData);
      }
    } catch (err) {
      console.error("Unexpected error:", err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchRestaurants();
  }, [fetchRestaurants]);

  const handleAddRestaurant = async () => {
    // Refresh list after adding
    await fetchRestaurants();
    setIsModalOpen(false);
  };

  const filteredRestaurants = restaurants.filter((restaurant) => {
    const matchesSearch = restaurant.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesFilter =
      filterStatus === "all" ||
      restaurant.status.toLowerCase() === filterStatus;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="relative">
      {/* Add Restaurant Modal */}
      <AddRestaurantModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAdd={handleAddRestaurant}
      />

      {/* Decorative Background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-green-400/20 to-emerald-600/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tl from-orange-400/20 to-red-600/20 rounded-full blur-3xl animate-pulse [animation-delay:1s]"></div>

      {/* Header */}
      <div className="relative z-10 mb-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
          <div>
            <h2 className="text-3xl font-bold text-white mb-2">Restaurants</h2>
            <p className="text-white/70">
              Manage all restaurant partners and their details
            </p>
          </div>
          <button
            onClick={() => setIsModalOpen(true)}
            className="px-6 py-3 bg-white text-[#E59A01] rounded-xl font-bold shadow-xl hover:bg-white/90 transition-all duration-300 transform hover:scale-105"
          >
            + Add Restaurant
          </button>
        </div>

        {/* Filters */}
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <input
              type="text"
              placeholder="Search restaurants..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/50 backdrop-blur-sm"
            />
            <svg
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/60"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </div>
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-white/50 cursor-pointer backdrop-blur-sm [&>option]:text-gray-800"
          >
            <option value="all">All Status</option>
            <option value="active">Active</option>
            <option value="pending">Pending</option>
            <option value="inactive">Inactive</option>
          </select>
        </div>
      </div>

      {/* Loading State */}
      {loading ? (
        <div className="flex justify-center py-20">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-white"></div>
        </div>
      ) : (
        <>
          {/* Restaurant Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
            {filteredRestaurants.map((restaurant) => (
              <div
                key={restaurant.id}
                className="group relative bg-white/10 backdrop-blur-md p-6 rounded-3xl shadow-xl border border-white/20 hover:bg-white/15 transition-all duration-500 hover:-translate-y-2"
              >
                {/* Status Badge */}
                <div className="absolute top-4 right-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-bold backdrop-blur-sm ${
                      restaurant.status === "Active"
                        ? "bg-green-400/20 text-green-200"
                        : restaurant.status === "Pending"
                        ? "bg-yellow-400/20 text-yellow-200"
                        : "bg-red-400/20 text-red-200"
                    }`}
                  >
                    {restaurant.status}
                  </span>
                </div>

                {/* Restaurant Icon/Image */}
                <div className="mb-4">
                  <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center text-5xl shadow-lg group-hover:scale-110 transition-transform duration-300 overflow-hidden relative">
                    {restaurant.image && restaurant.image.startsWith("/") ? (
                      <Image
                        src={restaurant.image}
                        alt={restaurant.name}
                        fill
                        className="object-cover"
                      />
                    ) : (
                      restaurant.image
                    )}
                  </div>
                </div>

                {/* Restaurant Info */}
                <h3 className="text-xl font-bold text-white mb-1 group-hover:text-[#D92E2E] transition-colors">
                  {restaurant.name}
                </h3>
                <p className="text-white/70 text-sm mb-1">
                  {restaurant.cuisine}
                </p>
                <p className="text-white/50 text-xs mb-4">
                  Owner: {restaurant.owner}
                </p>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="bg-white/5 rounded-xl p-3">
                    <p className="text-white/50 text-xs mb-1">Rating</p>
                    <p className="text-white font-bold flex items-center gap-1">
                      ⭐ {restaurant.rating}
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-xl p-3">
                    <p className="text-white/50 text-xs mb-1">Orders</p>
                    <p className="text-white font-bold">{restaurant.orders}</p>
                  </div>
                </div>

                {/* Revenue */}
                <div className="bg-gradient-to-r from-green-400/10 to-emerald-600/10 rounded-xl p-3 mb-4">
                  <p className="text-white/50 text-xs mb-1">Total Revenue</p>
                  <p className="text-white font-bold text-lg">
                    {restaurant.revenue}
                  </p>
                </div>

                {/* Joined Date */}
                <p className="text-white/40 text-xs mb-4">
                  Joined: {restaurant.joinedDate}
                </p>

                {/* Actions */}
                <div className="flex gap-2">
                  <button className="flex-1 py-2 bg-white/10 border border-white/20 rounded-xl text-sm font-bold text-white hover:bg-white/20 transition">
                    View Details
                  </button>
                  <button className="px-4 py-2 bg-white/10 border border-white/20 rounded-xl text-white hover:bg-white/20 transition">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <circle cx="12" cy="12" r="1"></circle>
                      <circle cx="12" cy="5" r="1"></circle>
                      <circle cx="12" cy="19" r="1"></circle>
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {filteredRestaurants.length === 0 && (
            <div className="text-center py-20 relative z-10">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-white mb-2">
                No restaurants found
              </h3>
              <p className="text-white/70">
                Try adjusting your search or filter criteria
              </p>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default RestaurantsView;
