"use client";
import React, { useState } from "react";

interface AddRestaurantModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAdd: (restaurant: any) => void;
}

const AddRestaurantModal: React.FC<AddRestaurantModalProps> = ({
  isOpen,
  onClose,
  onAdd,
}) => {
  const [formData, setFormData] = useState({
    name: "",
    owner: "",
    cuisine: "",
    phone: "",
    email: "",
    address: "",
    image: "🍽️",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Create new restaurant object
    const newRestaurant = {
      id: Date.now(),
      name: formData.name,
      owner: formData.owner,
      cuisine: formData.cuisine,
      rating: 4.0,
      orders: 0,
      revenue: "₹0",
      status: "Pending",
      image: formData.image,
      joinedDate: new Date().toLocaleDateString("en-US", {
        month: "short",
        year: "numeric",
      }),
      phone: formData.phone,
      email: formData.email,
      address: formData.address,
    };

    onAdd(newRestaurant);

    // Reset form
    setFormData({
      name: "",
      owner: "",
      cuisine: "",
      phone: "",
      email: "",
      address: "",
      image: "🍽️",
    });

    onClose();
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl max-h-[95vh] overflow-hidden">
        {/* Modal Container */}
        <div className="relative bg-[#E59A01] rounded-3xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300">
          {/* Decorative Background Elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-orange-300/30 to-red-500/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tl from-yellow-300/30 to-orange-400/30 rounded-full blur-3xl"></div>

          {/* Content Wrapper */}
          <div className="relative bg-white/15 backdrop-blur-2xl border border-white/30 rounded-3xl">
            {/* Header - Fixed */}
            <div className="sticky top-0 z-10 bg-white/10 backdrop-blur-xl border-b border-white/20 px-8 py-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-3xl font-bold text-white mb-1">
                    Add New Restaurant
                  </h2>
                  <p className="text-white/70 text-sm">
                    Fill in the details to onboard a new restaurant partner
                  </p>
                </div>
                <button
                  onClick={onClose}
                  className="p-3 bg-white/10 hover:bg-white/20 rounded-full transition-all duration-200 text-white group"
                  aria-label="Close modal"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    className="group-hover:rotate-90 transition-transform duration-200"
                  >
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                </button>
              </div>
            </div>

            {/* Form - Scrollable */}
            <form
              onSubmit={handleSubmit}
              className="overflow-y-auto max-h-[calc(95vh-180px)] px-8 py-6"
            >
              <div className="space-y-8">
                {/* Section 1: Basic Information */}
                <div className="space-y-5">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-1 h-6 bg-white rounded-full"></div>
                    <h3 className="text-lg font-bold text-white">
                      Basic Information
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {/* Restaurant Name */}
                    <div className="md:col-span-2">
                      <label className="block text-white font-semibold mb-2 text-sm">
                        Restaurant Name <span className="text-red-300">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="e.g., Rasoi Restaurant"
                        className="w-full px-4 py-3.5 bg-white/20 border-2 border-white/30 rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/60 focus:border-white/50 backdrop-blur-sm transition-all duration-200 font-medium"
                      />
                    </div>

                    {/* Owner Name */}
                    <div>
                      <label className="block text-white font-semibold mb-2 text-sm">
                        Owner Name <span className="text-red-300">*</span>
                      </label>
                      <input
                        type="text"
                        name="owner"
                        value={formData.owner}
                        onChange={handleChange}
                        required
                        placeholder="e.g., Rajesh Kumar"
                        className="w-full px-4 py-3.5 bg-white/20 border-2 border-white/30 rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/60 focus:border-white/50 backdrop-blur-sm transition-all duration-200 font-medium"
                      />
                    </div>

                    {/* Cuisine Type */}
                    <div>
                      <label className="block text-white font-semibold mb-2 text-sm">
                        Cuisine Type <span className="text-red-300">*</span>
                      </label>
                      <select
                        name="cuisine"
                        value={formData.cuisine}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3.5 bg-white/20 border-2 border-white/30 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-white/60 focus:border-white/50 cursor-pointer backdrop-blur-sm transition-all duration-200 font-medium [&>option]:text-gray-800 [&>option]:bg-white"
                      >
                        <option value="">Select Cuisine</option>
                        <option value="North Indian">🍛 North Indian</option>
                        <option value="South Indian">🥘 South Indian</option>
                        <option value="Chinese">🥢 Chinese</option>
                        <option value="Italian">🍝 Italian</option>
                        <option value="Fast Food">🍔 Fast Food</option>
                        <option value="Mughlai">🍖 Mughlai</option>
                        <option value="Continental">🍽️ Continental</option>
                        <option value="Cafe">☕ Cafe</option>
                        <option value="Bakery">🥐 Bakery</option>
                        <option value="Desserts">🍰 Desserts</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Section 2: Contact Details */}
                <div className="space-y-5">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-1 h-6 bg-white rounded-full"></div>
                    <h3 className="text-lg font-bold text-white">
                      Contact Details
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {/* Phone Number */}
                    <div>
                      <label className="block text-white font-semibold mb-2 text-sm">
                        Phone Number <span className="text-red-300">*</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        placeholder="+91 98765 43210"
                        className="w-full px-4 py-3.5 bg-white/20 border-2 border-white/30 rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/60 focus:border-white/50 backdrop-blur-sm transition-all duration-200 font-medium"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-white font-semibold mb-2 text-sm">
                        Email Address <span className="text-red-300">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="restaurant@example.com"
                        className="w-full px-4 py-3.5 bg-white/20 border-2 border-white/30 rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/60 focus:border-white/50 backdrop-blur-sm transition-all duration-200 font-medium"
                      />
                    </div>
                  </div>

                  {/* Address */}
                  <div>
                    <label className="block text-white font-semibold mb-2 text-sm">
                      Full Address <span className="text-red-300">*</span>
                    </label>
                    <textarea
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      required
                      rows={3}
                      placeholder="Enter complete address with landmarks"
                      className="w-full px-4 py-3.5 bg-white/20 border-2 border-white/30 rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/60 focus:border-white/50 backdrop-blur-sm resize-none transition-all duration-200 font-medium"
                    />
                  </div>
                </div>

                {/* Section 3: Restaurant Icon */}
                <div className="space-y-5">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-1 h-6 bg-white rounded-full"></div>
                    <h3 className="text-lg font-bold text-white">
                      Restaurant Icon
                    </h3>
                  </div>

                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border-2 border-white/20">
                    <p className="text-white/80 text-sm mb-4 font-medium">
                      Select an icon to represent this restaurant
                    </p>
                    <div className="grid grid-cols-6 sm:grid-cols-8 md:grid-cols-12 gap-3">
                      {[
                        "🍽️",
                        "🍛",
                        "🍕",
                        "🍔",
                        "🍱",
                        "🥘",
                        "☕",
                        "🍰",
                        "🍜",
                        "🥗",
                        "🍝",
                        "🌮",
                      ].map((emoji) => (
                        <button
                          key={emoji}
                          type="button"
                          onClick={() =>
                            setFormData({ ...formData, image: emoji })
                          }
                          className={`aspect-square p-3 text-3xl rounded-xl transition-all duration-200 ${
                            formData.image === emoji
                              ? "bg-white text-[#E59A01] scale-110 shadow-xl ring-2 ring-white/50"
                              : "bg-white/20 hover:bg-white/30 hover:scale-105"
                          }`}
                        >
                          {emoji}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </form>

            {/* Footer - Fixed */}
            <div className="sticky bottom-0 z-10 bg-white/10 backdrop-blur-xl border-t border-white/20 px-8 py-6">
              <div className="flex gap-4">
                <button
                  type="button"
                  onClick={onClose}
                  className="flex-1 py-3.5 bg-white/10 border-2 border-white/30 text-white rounded-xl font-bold hover:bg-white/20 transition-all duration-200 hover:scale-[1.02]"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  onClick={handleSubmit}
                  className="flex-1 py-3.5 bg-white text-[#E59A01] rounded-xl font-bold shadow-xl hover:shadow-2xl transition-all duration-200 transform hover:scale-[1.02] hover:bg-white/95"
                >
                  Add Restaurant
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddRestaurantModal;
