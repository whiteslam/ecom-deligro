"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

interface SavedAddress {
  id: string;
  name: string;
  type: "home" | "work" | "custom";
  address: string;
  distance: string;
  isSelected: boolean;
}

interface RecentSearch {
  id: string;
  name: string;
  address: string;
  distance: string;
}

const LocationPage = () => {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const [isLocating, setIsLocating] = useState(false);
  const [showAddressForm, setShowAddressForm] = useState(false);
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [isSearching, setIsSearching] = useState(false);

  // Form states
  const [newAddressName, setNewAddressName] = useState("");
  const [newAddressType, setNewAddressType] = useState<
    "home" | "work" | "custom"
  >("custom");
  const [newAddressLine, setNewAddressLine] = useState("");

  // Edit states
  const [editingAddressId, setEditingAddressId] = useState<string | null>(null);

  const [savedAddresses, setSavedAddresses] = useState<SavedAddress[]>([
    {
      id: "1",
      name: "For Me",
      type: "custom",
      address: "Durg, Chhattisgarh, India",
      distance: "0 km",
      isSelected: true,
    },
    {
      id: "2",
      name: "Home",
      type: "home",
      address: "Bemetara, Chhattisgarh, India",
      distance: "45.2 km",
      isSelected: false,
    },
  ]);

  const [recentSearches] = useState<RecentSearch[]>([
    {
      id: "1",
      name: "Itarsi Railway Station",
      address: "Itarsi, Madhya Pradesh, India",
      distance: "120 km",
    },
  ]);

  const handleUseCurrentLocation = () => {
    setIsLocating(true);
    if (!navigator.geolocation) {
      alert("Geolocation is not supported by your browser");
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
          const address = data.display_name || "Current Location";

          // Add as new saved address
          const newAddress: SavedAddress = {
            id: Date.now().toString(),
            name: "Current Location",
            type: "custom",
            address: address,
            distance: "0 km",
            isSelected: true,
          };

          setSavedAddresses((prev) => [
            newAddress,
            ...prev.map((addr) => ({ ...addr, isSelected: false })),
          ]);

          setIsLocating(false);
          router.push("/order");
        } catch (error) {
          console.error("Error fetching address:", error);
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

  const handleSelectAddress = (id: string) => {
    setSavedAddresses((prev) =>
      prev.map((addr) => ({ ...addr, isSelected: addr.id === id }))
    );
    setTimeout(() => router.push("/order"), 300);
  };

  const handleAddAddress = () => {
    if (!newAddressName.trim() || !newAddressLine.trim()) {
      alert("Please fill in all fields");
      return;
    }

    const newAddress: SavedAddress = {
      id: Date.now().toString(),
      name: newAddressName,
      type: newAddressType,
      address: newAddressLine,
      distance: "0 km", // You can calculate actual distance if needed
      isSelected: false,
    };

    setSavedAddresses((prev) => [newAddress, ...prev]);

    // Reset form
    setNewAddressName("");
    setNewAddressType("custom");
    setNewAddressLine("");
    setShowAddressForm(false);

    alert("Address added successfully!");
  };

  // Search using Mapbox Geocoding API
  const handleSearch = async (query: string) => {
    setSearchQuery(query);

    if (query.trim().length < 3) {
      setSearchResults([]);
      return;
    }

    setIsSearching(true);
    try {
      // Using Mapbox Geocoding API (you'll need to add your access token)
      const MAPBOX_TOKEN =
        "pk.eyJ1IjoiZGVsaWdybyIsImEiOiJjbTRsMDNrZGMwNzBrMmpzOWFvdWJzNTlhIn0.example"; // Replace with your token
      const response = await fetch(
        `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
          query
        )}.json?access_token=${MAPBOX_TOKEN}&country=IN&limit=5`
      );
      const data = await response.json();
      setSearchResults(data.features || []);
    } catch (error) {
      console.error("Search error:", error);
      setSearchResults([]);
    } finally {
      setIsSearching(false);
    }
  };

  const handleEditAddress = (id: string) => {
    const address = savedAddresses.find((addr) => addr.id === id);
    if (address) {
      setEditingAddressId(id);
      setNewAddressName(address.name);
      setNewAddressType(address.type);
      setNewAddressLine(address.address);
      setShowAddressForm(true);
    }
  };

  const handleUpdateAddress = () => {
    if (!editingAddressId || !newAddressName.trim() || !newAddressLine.trim()) {
      alert("Please fill in all fields");
      return;
    }

    setSavedAddresses((prev) =>
      prev.map((addr) =>
        addr.id === editingAddressId
          ? {
              ...addr,
              name: newAddressName,
              type: newAddressType,
              address: newAddressLine,
            }
          : addr
      )
    );

    // Reset form
    setNewAddressName("");
    setNewAddressType("custom");
    setNewAddressLine("");
    setShowAddressForm(false);
    setEditingAddressId(null);

    alert("Address updated successfully!");
  };

  const handleDeleteAddress = (id: string) => {
    if (confirm("Are you sure you want to delete this address?")) {
      setSavedAddresses((prev) => prev.filter((addr) => addr.id !== id));
      alert("Address deleted successfully!");
    }
  };

  const getAddressIcon = (type: string) => {
    switch (type) {
      case "home":
        return "🏠";
      case "work":
        return "💼";
      default:
        return "📍";
    }
  };

  return (
    <div className="min-h-screen bg-[#E59A01]">
      {/* Header - Glassmorphism style like home page */}
      <div className="sticky top-0 z-50 pt-6 pb-4">
        <div className="w-[95%] md:w-[90%] max-w-5xl mx-auto">
          <div className="bg-white/15 backdrop-blur-2xl border border-white/30 shadow-xl rounded-full px-4 md:px-6 py-3 md:py-4">
            <div className="flex items-center justify-between">
              <button
                onClick={() => router.back()}
                className="p-2 hover:bg-white/20 rounded-full transition"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m15 18-6-6 6-6" />
                </svg>
              </button>
              <h1 className="text-xl font-bold text-white">
                Select your location
              </h1>
              <div className="w-10"></div> {/* Spacer for centering */}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-2xl mx-auto px-4 py-6 space-y-6">
        {/* Quick Action Modules - 2 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Use Current Location */}
          <button
            onClick={handleUseCurrentLocation}
            disabled={isLocating}
            className="bg-white/15 backdrop-blur-2xl rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col items-center gap-3 border border-white/30"
          >
            {isLocating ? (
              <svg
                className="animate-spin h-8 w-8 text-[#FF6B35]"
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
              <div className="w-12 h-12 bg-[#FF6B35]/10 rounded-full flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#FF6B35"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
            )}
            <span className="font-semibold text-gray-900 text-sm">
              {isLocating ? "Detecting..." : "Use Current Location"}
            </span>
          </button>

          {/* Add New Address */}
          <button
            onClick={() => setShowAddressForm(true)}
            className="bg-white/15 backdrop-blur-2xl rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col items-center gap-3 border border-white/30"
          >
            <div className="w-12 h-12 bg-blue-500/10 rounded-full flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#3B82F6"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 5v14M5 12h14" />
              </svg>
            </div>
            <span className="font-semibold text-gray-900 text-sm">
              Add New Address
            </span>
          </button>
        </div>

        {/* Saved Addresses Section */}
        <div className="bg-white/15 backdrop-blur-2xl rounded-3xl shadow-xl border border-white/30 overflow-hidden">
          <div className="px-6 py-4 border-b border-white/20 flex items-center justify-between">
            <h2 className="font-bold text-white">Saved Addresses</h2>
            <button className="text-white text-sm font-medium hover:underline">
              View all
            </button>
          </div>

          <div className="divide-y divide-white/10">
            {savedAddresses.map((address) => (
              <div
                key={address.id}
                onClick={() => handleSelectAddress(address.id)}
                className="px-6 py-4 hover:bg-white/10 cursor-pointer transition-colors flex items-start gap-4"
              >
                {/* Icon */}
                <div className="text-2xl shrink-0 mt-1">
                  {getAddressIcon(address.type)}
                </div>

                {/* Address Details */}
                <div className="grow">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-bold text-white">{address.name}</h3>
                    {address.isSelected && (
                      <span className="px-2 py-0.5 bg-green-100 text-green-700 text-xs font-bold rounded">
                        SELECTED
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-white/80 mb-1">
                    {address.address}
                  </p>
                  <span className="text-xs text-white/60">
                    {address.distance}
                  </span>
                </div>

                {/* Edit and Delete Buttons */}
                <div className="flex items-center gap-2 shrink-0">
                  {/* Edit Button */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleEditAddress(address.id);
                    }}
                    className="p-2 hover:bg-blue-50 rounded-full transition"
                    title="Edit address"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#3B82F6"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
                      <path d="m15 5 4 4" />
                    </svg>
                  </button>

                  {/* Delete Button */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDeleteAddress(address.id);
                    }}
                    className="p-2 hover:bg-red-50 rounded-full transition"
                    title="Delete address"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#EF4444"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M3 6h18" />
                      <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
                      <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recently Searched Section */}
        {recentSearches.length > 0 && (
          <div className="bg-white/15 backdrop-blur-2xl rounded-3xl shadow-xl border border-white/30 overflow-hidden">
            <div className="px-6 py-4 border-b border-white/20">
              <h2 className="font-bold text-white">Recently Searched</h2>
            </div>

            <div className="divide-y divide-white/10">
              {recentSearches.map((search) => (
                <div
                  key={search.id}
                  onClick={() => alert(`Navigate to ${search.name}`)}
                  className="px-6 py-4 hover:bg-white/10 cursor-pointer transition-colors flex items-start gap-4"
                >
                  {/* Clock Icon */}
                  <div className="shrink-0 mt-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                  </div>

                  {/* Search Details */}
                  <div className="grow">
                    <h3 className="font-semibold text-white mb-1">
                      {search.name}
                    </h3>
                    <p className="text-sm text-white/80 mb-1">
                      {search.address}
                    </p>
                    <span className="text-xs text-white/60">
                      {search.distance}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Add Address Form Modal */}
      {showAddressForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-100 p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-gray-900">
                {editingAddressId ? "Edit Address" : "Add New Address"}
              </h2>
              <button
                onClick={() => setShowAddressForm(false)}
                className="p-2 hover:bg-gray-100 rounded-full transition"
              >
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
                  <path d="M18 6 6 18M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="space-y-4">
              {/* Address Name */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Address Name
                </label>
                <input
                  type="text"
                  placeholder="e.g., Home, Office, etc."
                  value={newAddressName}
                  onChange={(e) => setNewAddressName(e.target.value)}
                  className="w-full px-4 py-3 bg-gray-100 rounded-xl border-none focus:outline-none focus:ring-2 focus:ring-[#D92E2E] text-gray-900"
                />
              </div>

              {/* Address Type */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Address Type
                </label>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    onClick={() => setNewAddressType("home")}
                    className={`px-4 py-3 rounded-xl font-medium transition ${
                      newAddressType === "home"
                        ? "bg-[#D92E2E] text-white"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    🏠 Home
                  </button>
                  <button
                    onClick={() => setNewAddressType("work")}
                    className={`px-4 py-3 rounded-xl font-medium transition ${
                      newAddressType === "work"
                        ? "bg-[#D92E2E] text-white"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    💼 Work
                  </button>
                  <button
                    onClick={() => setNewAddressType("custom")}
                    className={`px-4 py-3 rounded-xl font-medium transition ${
                      newAddressType === "custom"
                        ? "bg-[#D92E2E] text-white"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    📍 Other
                  </button>
                </div>
              </div>

              {/* Full Address */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Full Address
                </label>
                <textarea
                  placeholder="Enter complete address..."
                  value={newAddressLine}
                  onChange={(e) => setNewAddressLine(e.target.value)}
                  rows={3}
                  className="w-full px-4 py-3 bg-gray-100 rounded-xl border-none focus:outline-none focus:ring-2 focus:ring-[#D92E2E] text-gray-900 resize-none"
                />
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3 pt-4">
                <button
                  onClick={() => setShowAddressForm(false)}
                  className="grow px-6 py-3 bg-gray-200 text-gray-700 rounded-xl font-semibold hover:bg-gray-300 transition"
                >
                  Cancel
                </button>
                <button
                  onClick={
                    editingAddressId ? handleUpdateAddress : handleAddAddress
                  }
                  className="grow px-6 py-3 bg-[#D92E2E] text-white rounded-xl font-semibold hover:bg-[#C02828] transition"
                >
                  {editingAddressId ? "Update Address" : "Add Address"}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LocationPage;
