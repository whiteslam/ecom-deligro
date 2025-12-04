"use client";
import React, { useState } from "react";

const RidersView: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");

  const riders = [
    {
      id: 1,
      name: "Rahul Kumar",
      phone: "+91 98765 43210",
      vehicle: "Bike - MH12AB1234",
      rating: 4.8,
      deliveries: 450,
      earnings: "₹45,000",
      status: "Online",
      joinedDate: "Jan 2023",
      location: "Sector 7",
    },
    {
      id: 2,
      name: "Amit Singh",
      phone: "+91 98765 43211",
      vehicle: "Scooter - MH12CD5678",
      rating: 4.6,
      deliveries: 380,
      earnings: "₹38,000",
      status: "Online",
      joinedDate: "Feb 2023",
      location: "Sector 12",
    },
    {
      id: 3,
      name: "Vikram Patel",
      phone: "+91 98765 43212",
      vehicle: "Bike - MH12EF9012",
      rating: 4.9,
      deliveries: 520,
      earnings: "₹52,000",
      status: "Busy",
      joinedDate: "Dec 2022",
      location: "Sector 5",
    },
    {
      id: 4,
      name: "Suresh Yadav",
      phone: "+91 98765 43213",
      vehicle: "Bike - MH12GH3456",
      rating: 4.5,
      deliveries: 310,
      earnings: "₹31,000",
      status: "Offline",
      joinedDate: "Mar 2023",
      location: "Sector 9",
    },
    {
      id: 5,
      name: "Deepak Sharma",
      phone: "+91 98765 43214",
      vehicle: "Scooter - MH12IJ7890",
      rating: 4.7,
      deliveries: 420,
      earnings: "₹42,000",
      status: "Online",
      joinedDate: "Jan 2023",
      location: "Sector 3",
    },
    {
      id: 6,
      name: "Manoj Verma",
      phone: "+91 98765 43215",
      vehicle: "Bike - MH12KL2345",
      rating: 4.4,
      deliveries: 290,
      earnings: "₹29,000",
      status: "Busy",
      joinedDate: "Apr 2023",
      location: "Sector 15",
    },
  ];

  const filteredRiders = riders.filter((rider) => {
    const matchesSearch = rider.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesFilter =
      filterStatus === "all" || rider.status.toLowerCase() === filterStatus;
    return matchesSearch && matchesFilter;
  });

  const statusCounts = {
    online: riders.filter((r) => r.status === "Online").length,
    busy: riders.filter((r) => r.status === "Busy").length,
    offline: riders.filter((r) => r.status === "Offline").length,
  };

  return (
    <div className="relative">
      {/* Decorative Background */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-400/20 to-indigo-600/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tl from-purple-400/20 to-violet-600/20 rounded-full blur-3xl animate-pulse [animation-delay:1s]"></div>

      {/* Header */}
      <div className="relative z-10 mb-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
          <div>
            <h2 className="text-3xl font-bold text-white mb-2">Riders</h2>
            <p className="text-white/70">
              Manage delivery riders and track their performance
            </p>
          </div>
          <button className="px-6 py-3 bg-white text-[#E59A01] rounded-xl font-bold shadow-xl hover:bg-white/90 transition-all duration-300 transform hover:scale-105">
            + Add Rider
          </button>
        </div>

        {/* Status Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="bg-green-400/10 backdrop-blur-md p-4 rounded-2xl border border-green-400/20">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-green-200 text-sm font-medium mb-1">
                  Online
                </p>
                <p className="text-white text-2xl font-bold">
                  {statusCounts.online}
                </p>
              </div>
              <div className="w-12 h-12 bg-green-400/20 rounded-full flex items-center justify-center text-2xl">
                🟢
              </div>
            </div>
          </div>
          <div className="bg-yellow-400/10 backdrop-blur-md p-4 rounded-2xl border border-yellow-400/20">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-yellow-200 text-sm font-medium mb-1">Busy</p>
                <p className="text-white text-2xl font-bold">
                  {statusCounts.busy}
                </p>
              </div>
              <div className="w-12 h-12 bg-yellow-400/20 rounded-full flex items-center justify-center text-2xl">
                🟡
              </div>
            </div>
          </div>
          <div className="bg-red-400/10 backdrop-blur-md p-4 rounded-2xl border border-red-400/20">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-red-200 text-sm font-medium mb-1">Offline</p>
                <p className="text-white text-2xl font-bold">
                  {statusCounts.offline}
                </p>
              </div>
              <div className="w-12 h-12 bg-red-400/20 rounded-full flex items-center justify-center text-2xl">
                🔴
              </div>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <input
              type="text"
              placeholder="Search riders..."
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
            <option value="online">Online</option>
            <option value="busy">Busy</option>
            <option value="offline">Offline</option>
          </select>
        </div>
      </div>

      <div className="bg-white/10 backdrop-blur-md rounded-3xl shadow-xl border border-white/20 overflow-hidden relative z-10">
        {/* Desktop Table View */}
        <div className="hidden md:block overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-left text-xs font-bold text-white/50 uppercase tracking-wider border-b border-white/10 bg-white/5">
                <th className="p-4">Rider</th>
                <th className="p-4">Contact</th>
                <th className="p-4">Vehicle</th>
                <th className="p-4">Location</th>
                <th className="p-4">Rating</th>
                <th className="p-4">Deliveries</th>
                <th className="p-4">Earnings</th>
                <th className="p-4">Status</th>
                <th className="p-4">Actions</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              {filteredRiders.map((rider) => (
                <tr
                  key={rider.id}
                  className="hover:bg-white/5 transition-colors border-b border-white/5 last:border-0"
                >
                  <td className="p-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center text-xl">
                        🛵
                      </div>
                      <div>
                        <p className="font-bold text-white">{rider.name}</p>
                        <p className="text-white/50 text-xs">
                          Joined {rider.joinedDate}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="p-4 text-white/70">{rider.phone}</td>
                  <td className="p-4 text-white/70">{rider.vehicle}</td>
                  <td className="p-4">
                    <span className="px-3 py-1 bg-white/10 rounded-full text-xs font-medium text-white">
                      📍 {rider.location}
                    </span>
                  </td>
                  <td className="p-4">
                    <div className="flex items-center gap-1">
                      <span className="text-yellow-400">⭐</span>
                      <span className="font-bold text-white">
                        {rider.rating}
                      </span>
                    </div>
                  </td>
                  <td className="p-4 font-bold text-white">
                    {rider.deliveries}
                  </td>
                  <td className="p-4 font-bold text-green-300">
                    {rider.earnings}
                  </td>
                  <td className="p-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-bold backdrop-blur-sm ${
                        rider.status === "Online"
                          ? "bg-green-400/20 text-green-200"
                          : rider.status === "Busy"
                          ? "bg-yellow-400/20 text-yellow-200"
                          : "bg-red-400/20 text-red-200"
                      }`}
                    >
                      {rider.status}
                    </span>
                  </td>
                  <td className="p-4">
                    <div className="flex gap-2">
                      <button className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition text-white">
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                          <circle cx="12" cy="12" r="3"></circle>
                        </svg>
                      </button>
                      <button className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition text-white">
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
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Card View */}
        <div className="md:hidden p-4 space-y-4">
          {filteredRiders.map((rider) => (
            <div
              key={rider.id}
              className="bg-white/5 p-4 rounded-xl border border-white/10 space-y-3"
            >
              <div className="flex justify-between items-start">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center text-xl">
                    🛵
                  </div>
                  <div>
                    <p className="font-bold text-white">{rider.name}</p>
                    <p className="text-xs text-white/50">
                      Joined {rider.joinedDate}
                    </p>
                  </div>
                </div>
                <span
                  className={`px-3 py-1 rounded-full text-xs font-bold backdrop-blur-sm ${
                    rider.status === "Online"
                      ? "bg-green-400/20 text-green-200"
                      : rider.status === "Busy"
                      ? "bg-yellow-400/20 text-yellow-200"
                      : "bg-red-400/20 text-red-200"
                  }`}
                >
                  {rider.status}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-3 text-sm">
                <div>
                  <p className="text-xs text-white/50">Earnings</p>
                  <p className="font-bold text-green-300">{rider.earnings}</p>
                </div>
                <div>
                  <p className="text-xs text-white/50">Rating</p>
                  <p className="text-white flex items-center gap-1">
                    <span className="text-yellow-400">⭐</span> {rider.rating}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-white/50">Deliveries</p>
                  <p className="text-white font-bold">{rider.deliveries}</p>
                </div>
                <div>
                  <p className="text-xs text-white/50">Location</p>
                  <p className="text-white">📍 {rider.location}</p>
                </div>
                <div className="col-span-2">
                  <p className="text-xs text-white/50">Contact</p>
                  <p className="text-white/70">{rider.phone}</p>
                </div>
                <div className="col-span-2">
                  <p className="text-xs text-white/50">Vehicle</p>
                  <p className="text-white/70">{rider.vehicle}</p>
                </div>
              </div>

              <div className="pt-3 border-t border-white/10 flex justify-end gap-2">
                <button className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition text-white">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                    <circle cx="12" cy="12" r="3"></circle>
                  </svg>
                </button>
                <button className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition text-white">
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
      </div>

      {/* Empty State */}
      {filteredRiders.length === 0 && (
        <div className="text-center py-20 relative z-10">
          <div className="text-6xl mb-4">🔍</div>
          <h3 className="text-2xl font-bold text-white mb-2">
            No riders found
          </h3>
          <p className="text-white/70">
            Try adjusting your search or filter criteria
          </p>
        </div>
      )}
    </div>
  );
};

export default RidersView;
