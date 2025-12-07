"use client";
import React, { useState, useEffect, useCallback } from "react";
import { supabase } from "../../lib/supabaseClient";

const UsersView: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState("all");
  const [users, setUsers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchUsers = useCallback(async () => {
    setLoading(true);
    try {
      const { data, error } = await supabase
        .from("profiles")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) {
        console.error("Error fetching profiles:", error);
      } else if (data) {
        const mappedUsers = data.map((profile: any) => ({
          id: profile.id,
          name: profile.full_name || "Unknown",
          email: "user@example.com", // Cannot fetch email from client side easily without duplicate
          phone: profile.phone_number || "-",
          type: "Customer", // Default
          orders: Math.floor(Math.random() * 50), // Mock stats
          totalSpent:
            "₹" + (Math.floor(Math.random() * 10000) + 1000).toLocaleString(), // Mock stats
          joinedDate: new Date(profile.created_at).toLocaleDateString("en-US", {
            month: "short",
            year: "numeric",
          }),
          status: "Active",
          avatar: profile.avatar_url || "👤",
        }));
        setUsers(mappedUsers);
      }
    } catch (err) {
      console.error("Unexpected error:", err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  const filteredUsers = users.filter((user) => {
    const matchesSearch =
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter =
      filterType === "all" ||
      user.status.toLowerCase() === filterType.toLowerCase();
    return matchesSearch && matchesFilter;
  });

  const stats = {
    total: users.length,
    active: users.filter((u) => u.status === "Active").length,
    inactive: users.filter((u) => u.status === "Inactive").length,
    totalOrders: users.reduce((sum, u) => sum + u.orders, 0),
  };

  return (
    <div className="relative">
      {/* Decorative Background */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-purple-400/20 to-violet-600/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tl from-pink-400/20 to-rose-600/20 rounded-full blur-3xl animate-pulse [animation-delay:1s]"></div>

      {/* Header */}
      <div className="relative z-10 mb-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
          <div>
            <h2 className="text-3xl font-bold text-white mb-2">Users</h2>
            <p className="text-white/70">
              Manage all platform users and their activities
            </p>
          </div>
          <button className="px-6 py-3 bg-white text-[#E59A01] rounded-xl font-bold shadow-xl hover:bg-white/90 transition-all duration-300 transform hover:scale-105">
            + Add User
          </button>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-white/10 backdrop-blur-md p-4 md:p-6 rounded-2xl border border-white/20">
            <p className="text-white/70 text-xs md:text-sm font-medium mb-1 truncate">
              Total Users
            </p>
            <p className="text-white text-xl md:text-3xl font-bold truncate">
              {stats.total}
            </p>
          </div>
          <div className="bg-green-400/10 backdrop-blur-md p-4 md:p-6 rounded-2xl border border-green-400/20">
            <p className="text-green-200 text-xs md:text-sm font-medium mb-1 truncate">
              Active Users
            </p>
            <p className="text-white text-xl md:text-3xl font-bold truncate">
              {stats.active}
            </p>
          </div>
          <div className="bg-red-400/10 backdrop-blur-md p-4 md:p-6 rounded-2xl border border-red-400/20">
            <p className="text-red-200 text-xs md:text-sm font-medium mb-1 truncate">
              Inactive Users
            </p>
            <p className="text-white text-xl md:text-3xl font-bold truncate">
              {stats.inactive}
            </p>
          </div>
          <div className="bg-blue-400/10 backdrop-blur-md p-4 md:p-6 rounded-2xl border border-blue-400/20">
            <p className="text-blue-200 text-xs md:text-sm font-medium mb-1 truncate">
              Total Orders
            </p>
            <p className="text-white text-xl md:text-3xl font-bold truncate">
              {stats.totalOrders}
            </p>
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <input
              type="text"
              placeholder="Search users by name or email..."
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
            value={filterType}
            onChange={(e) => setFilterType(e.target.value)}
            className="px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-white/50 cursor-pointer backdrop-blur-sm [&>option]:text-gray-800"
          >
            <option value="all">All Users</option>
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>
        </div>
      </div>

      {loading ? (
        <div className="flex justify-center py-20">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-white"></div>
        </div>
      ) : (
        /* Users Grid */
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
          {filteredUsers.map((user) => (
            <div
              key={user.id}
              className="group relative bg-white/10 backdrop-blur-md p-6 rounded-3xl shadow-xl border border-white/20 hover:bg-white/15 transition-all duration-500 hover:-translate-y-2"
            >
              {/* Status Badge */}
              <div className="absolute top-4 right-4">
                <span
                  className={`px-3 py-1 rounded-full text-xs font-bold backdrop-blur-sm ${
                    user.status === "Active"
                      ? "bg-green-400/20 text-green-200"
                      : "bg-red-400/20 text-red-200"
                  }`}
                >
                  {user.status}
                </span>
              </div>

              {/* User Avatar */}
              <div className="mb-4">
                <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center text-5xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                  {user.avatar}
                </div>
              </div>

              {/* User Info */}
              <h3 className="text-xl font-bold text-white mb-1 group-hover:text-[#D92E2E] transition-colors">
                {user.name}
              </h3>
              <p className="text-white/70 text-sm mb-1">{user.email}</p>
              <p className="text-white/50 text-xs mb-4">{user.phone}</p>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="bg-white/5 rounded-xl p-3">
                  <p className="text-white/50 text-xs mb-1">Orders</p>
                  <p className="text-white font-bold">{user.orders}</p>
                </div>
                <div className="bg-white/5 rounded-xl p-3">
                  <p className="text-white/50 text-xs mb-1">Total Spent</p>
                  <p className="text-white font-bold text-sm">
                    {user.totalSpent}
                  </p>
                </div>
              </div>

              {/* User Type */}
              <div className="bg-gradient-to-r from-blue-400/10 to-indigo-600/10 rounded-xl p-3 mb-4">
                <p className="text-white/50 text-xs mb-1">User Type</p>
                <p className="text-white font-bold">{user.type}</p>
              </div>

              {/* Joined Date */}
              <p className="text-white/40 text-xs mb-4">
                Joined: {user.joinedDate}
              </p>

              {/* Actions */}
              <div className="flex gap-2">
                <button className="flex-1 py-2 bg-white/10 border border-white/20 rounded-xl text-sm font-bold text-white hover:bg-white/20 transition">
                  View Profile
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
      )}

      {/* Empty State */}
      {!loading && filteredUsers.length === 0 && (
        <div className="text-center py-20 relative z-10">
          <div className="text-6xl mb-4">🔍</div>
          <h3 className="text-2xl font-bold text-white mb-2">No users found</h3>
          <p className="text-white/70">
            Try adjusting your search or filter criteria
          </p>
        </div>
      )}
    </div>
  );
};

export default UsersView;
