"use client";
import React, { useState } from "react";
import AddMenuItemModal from "./AddMenuItemModal";

const MenuItemsView: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterCategory, setFilterCategory] = useState("all");
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Mock restaurants data for the modal
  const mockRestaurants = [
    { id: 1, name: "Rasoi Restaurant", image: "🍛" },
    { id: 2, name: "Pizza Paradise", image: "🍕" },
    { id: 3, name: "Burger King", image: "🍔" },
  ];

  const [menuItems, setMenuItems] = useState([
    {
      id: 1,
      name: "Butter Chicken",
      restaurant: "Rasoi Restaurant",
      category: "Main Course",
      price: "₹350",
      image: "🍛",
      available: true,
      rating: 4.7,
      orders: 245,
    },
    {
      id: 2,
      name: "Margherita Pizza",
      restaurant: "Pizza Paradise",
      category: "Pizza",
      price: "₹450",
      image: "🍕",
      available: true,
      rating: 4.8,
      orders: 320,
    },
    {
      id: 3,
      name: "Veggie Burger",
      restaurant: "Burger King",
      category: "Burgers",
      price: "₹180",
      image: "🍔",
      available: true,
      rating: 4.5,
      orders: 198,
    },
    {
      id: 4,
      name: "Sushi Platter",
      restaurant: "Sushi Express",
      category: "Japanese",
      price: "₹650",
      image: "🍱",
      available: false,
      rating: 4.9,
      orders: 87,
    },
    {
      id: 5,
      name: "Paneer Tikka",
      restaurant: "Tandoor House",
      category: "Starters",
      price: "₹280",
      image: "🥘",
      available: true,
      rating: 4.6,
      orders: 156,
    },
    {
      id: 6,
      name: "Cappuccino",
      restaurant: "Cafe Mocha",
      category: "Beverages",
      price: "₹150",
      image: "☕",
      available: true,
      rating: 4.4,
      orders: 412,
    },
  ]);

  const handleAddMenuItem = (newMenuItem: any) => {
    setMenuItems([newMenuItem, ...menuItems]);
  };

  const filteredItems = menuItems.filter((item) => {
    const matchesSearch = item.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesFilter =
      filterCategory === "all" ||
      item.category.toLowerCase() === filterCategory;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="relative">
      {/* Add Menu Item Modal */}
      <AddMenuItemModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAdd={handleAddMenuItem}
        restaurants={mockRestaurants}
      />

      {/* Decorative Background */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-yellow-400/20 to-orange-600/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tl from-red-400/20 to-pink-600/20 rounded-full blur-3xl animate-pulse [animation-delay:1s]"></div>

      {/* Header */}
      <div className="relative z-10 mb-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
          <div>
            <h2 className="text-3xl font-bold text-white mb-2">Menu Items</h2>
            <p className="text-white/70">
              Manage all menu items across restaurants
            </p>
          </div>
          <button
            onClick={() => setIsModalOpen(true)}
            className="px-6 py-3 bg-white text-[#E59A01] rounded-xl font-bold shadow-xl hover:bg-white/90 transition-all duration-300 transform hover:scale-105"
          >
            + Add Menu Item
          </button>
        </div>

        {/* Filters */}
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <input
              type="text"
              placeholder="Search menu items..."
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
            value={filterCategory}
            onChange={(e) => setFilterCategory(e.target.value)}
            className="px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-white/50 cursor-pointer backdrop-blur-sm [&>option]:text-gray-800"
          >
            <option value="all">All Categories</option>
            <option value="main course">Main Course</option>
            <option value="pizza">Pizza</option>
            <option value="burgers">Burgers</option>
            <option value="japanese">Japanese</option>
            <option value="starters">Starters</option>
            <option value="beverages">Beverages</option>
          </select>
        </div>
      </div>

      {/* Menu Items Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            className="group relative bg-white/10 backdrop-blur-md p-6 rounded-3xl shadow-xl border border-white/20 hover:bg-white/15 transition-all duration-500 hover:-translate-y-2"
          >
            {/* Availability Badge */}
            <div className="absolute top-4 right-4">
              <span
                className={`px-3 py-1 rounded-full text-xs font-bold backdrop-blur-sm ${
                  item.available
                    ? "bg-green-400/20 text-green-200"
                    : "bg-red-400/20 text-red-200"
                }`}
              >
                {item.available ? "Available" : "Out of Stock"}
              </span>
            </div>

            {/* Item Image */}
            <div className="mb-4">
              <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center text-5xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                {item.image}
              </div>
            </div>

            {/* Item Info */}
            <h3 className="text-xl font-bold text-white mb-1 group-hover:text-[#D92E2E] transition-colors">
              {item.name}
            </h3>
            <p className="text-white/70 text-sm mb-1">{item.category}</p>
            <p className="text-white/50 text-xs mb-4">{item.restaurant}</p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="bg-white/5 rounded-xl p-3">
                <p className="text-white/50 text-xs mb-1">Rating</p>
                <p className="text-white font-bold flex items-center gap-1">
                  ⭐ {item.rating}
                </p>
              </div>
              <div className="bg-white/5 rounded-xl p-3">
                <p className="text-white/50 text-xs mb-1">Orders</p>
                <p className="text-white font-bold">{item.orders}</p>
              </div>
            </div>

            {/* Price */}
            <div className="bg-gradient-to-r from-green-400/10 to-emerald-600/10 rounded-xl p-3 mb-4">
              <p className="text-white/50 text-xs mb-1">Price</p>
              <p className="text-white font-bold text-lg">{item.price}</p>
            </div>

            {/* Actions */}
            <div className="flex gap-2">
              <button className="flex-1 py-2 bg-white/10 border border-white/20 rounded-xl text-sm font-bold text-white hover:bg-white/20 transition">
                Edit
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
      {filteredItems.length === 0 && (
        <div className="text-center py-20 relative z-10">
          <div className="text-6xl mb-4">🔍</div>
          <h3 className="text-2xl font-bold text-white mb-2">
            No menu items found
          </h3>
          <p className="text-white/70">
            Try adjusting your search or filter criteria
          </p>
        </div>
      )}
    </div>
  );
};

export default MenuItemsView;
