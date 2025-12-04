"use client";
import React from "react";
import Image from "next/image";

// Icons
const Icons = {
  TrendUp: () => (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-green-500"
    >
      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
      <polyline points="17 6 23 6 23 12"></polyline>
    </svg>
  ),
  TrendDown: () => (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-red-500"
    >
      <polyline points="23 18 13.5 8.5 8.5 13.5 1 6"></polyline>
      <polyline points="17 18 23 18 23 12"></polyline>
    </svg>
  ),
  Orders: () => (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="9" cy="21" r="1"></circle>
      <circle cx="20" cy="21" r="1"></circle>
      <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
    </svg>
  ),
  Payments: () => (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect>
      <line x1="1" y1="10" x2="23" y2="10"></line>
    </svg>
  ),
  Riders: () => (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
      <circle cx="8.5" cy="7" r="4"></circle>
      <line x1="20" y1="8" x2="20" y2="14"></line>
      <line x1="23" y1="11" x2="17" y2="11"></line>
    </svg>
  ),
  Restaurants: () => (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 21h18v-8a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2z"></path>
      <path d="M12 3L2 11h20L12 3z"></path>
    </svg>
  ),
  Settings: () => (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="3"></circle>
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
    </svg>
  ),
};

interface DashboardViewProps {}

const DashboardView: React.FC<DashboardViewProps> = () => {
  const stats = [
    {
      title: "Total Orders",
      value: "1,284",
      change: "+12%",
      trend: "up",
      icon: Icons.Orders,
      gradient: "from-blue-400 to-indigo-600",
    },
    {
      title: "Total Revenue",
      value: "₹4,25,000",
      change: "+8%",
      trend: "up",
      icon: Icons.Payments,
      gradient: "from-green-400 to-emerald-600",
    },
    {
      title: "Active Riders",
      value: "45",
      change: "-2%",
      trend: "down",
      icon: Icons.Riders,
      gradient: "from-purple-400 to-violet-600",
    },
    {
      title: "Active Restaurants",
      value: "128",
      change: "+5%",
      trend: "up",
      icon: Icons.Restaurants,
      gradient: "from-orange-400 to-red-600",
    },
  ];

  const recentOrders = [
    {
      id: "#ORD-7782",
      customer: "Priya Sharma",
      restaurant: "Rasoi Restaurant",
      amount: "₹450",
      status: "Delivered",
      time: "2 mins ago",
    },
    {
      id: "#ORD-7781",
      customer: "Rahul Verma",
      restaurant: "Burger King",
      amount: "₹280",
      status: "Cooking",
      time: "15 mins ago",
    },
    {
      id: "#ORD-7780",
      customer: "Amit Patel",
      restaurant: "Pizza Hut",
      amount: "₹890",
      status: "On the way",
      time: "25 mins ago",
    },
    {
      id: "#ORD-7779",
      customer: "Sneha Gupta",
      restaurant: "Subway",
      amount: "₹320",
      status: "Cancelled",
      time: "1 hour ago",
    },
    {
      id: "#ORD-7778",
      customer: "Vikram Singh",
      restaurant: "Starbucks",
      amount: "₹550",
      status: "Delivered",
      time: "2 hours ago",
    },
  ];

  return (
    <div>
      {/* Decorative Background Elements */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-[#D92E2E]/20 to-orange-400/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-tl from-yellow-400/20 to-[#D92E2E]/20 rounded-full blur-3xl animate-pulse [animation-delay:1s]"></div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10 relative z-10">
        {stats.map((stat, idx) => (
          <div
            key={idx}
            className="group relative bg-white/10 backdrop-blur-md p-4 md:p-6 rounded-3xl shadow-xl border border-white/20 hover:bg-white/15 transition-all duration-500 hover:-translate-y-2"
          >
            {/* Gradient Background on Hover */}
            <div
              className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity duration-500`}
            ></div>

            <div className="flex justify-between items-start mb-2 md:mb-4 relative">
              <div className="relative">
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} rounded-2xl blur-lg opacity-0 group-hover:opacity-70 transition-opacity duration-300`}
                ></div>
                <div className="relative p-2 md:p-3 rounded-2xl bg-white/20 text-white">
                  <stat.icon />
                </div>
              </div>
              <div
                className={`flex items-center gap-1 text-[10px] md:text-xs font-bold px-1.5 py-0.5 md:px-2 md:py-1 rounded-full ${
                  stat.trend === "up"
                    ? "bg-green-400/20 text-green-300"
                    : "bg-red-400/20 text-red-300"
                }`}
              >
                {stat.trend === "up" ? <Icons.TrendUp /> : <Icons.TrendDown />}
                {stat.change}
              </div>
            </div>
            <h3 className="text-white/70 text-xs md:text-sm font-medium mb-0.5 md:mb-1 relative truncate">
              {stat.title}
            </h3>
            <p className="text-lg md:text-2xl font-bold text-white relative truncate">
              {stat.value}
            </p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 relative z-10">
        {/* Revenue Graph Section */}
        <div className="bg-white/10 backdrop-blur-md p-8 rounded-3xl shadow-xl border border-white/20 h-full">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-xl font-bold text-white">Revenue Analytics</h2>
            <select className="bg-white/10 border border-white/20 text-sm font-medium text-white rounded-lg px-3 py-1 focus:ring-0 cursor-pointer hover:bg-white/20 [&>option]:text-gray-800">
              <option>This Week</option>
              <option>This Month</option>
              <option>This Year</option>
            </select>
          </div>

          {/* Mock Graph */}
          <div className="h-64 w-full relative flex items-end justify-between gap-2 px-2">
            {/* Background Grid Lines */}
            <div className="absolute inset-0 flex flex-col justify-between text-xs text-white/10 pointer-events-none">
              <div className="border-b border-white/10 w-full h-0"></div>
              <div className="border-b border-white/10 w-full h-0"></div>
              <div className="border-b border-white/10 w-full h-0"></div>
              <div className="border-b border-white/10 w-full h-0"></div>
              <div className="border-b border-white/10 w-full h-0"></div>
            </div>

            {/* Bars/Line Mockup */}
            {[40, 65, 45, 80, 55, 90, 70].map((height, i) => (
              <div
                key={i}
                className="w-full bg-white/10 rounded-t-xl relative group cursor-pointer transition-all hover:bg-white/20 flex items-end"
                style={{ height: `${height}%` }}
              >
                <div className="w-full bg-white rounded-t-xl transition-all duration-500 shadow-[0_0_15px_rgba(255,255,255,0.5)] opacity-90 h-full"></div>
                {/* Tooltip */}
                <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-white text-[#E59A01] text-xs font-bold py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10 shadow-lg">
                  ₹{height * 1000}
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-between mt-4 text-xs text-white/60 font-medium px-2">
            <span>Mon</span>
            <span>Tue</span>
            <span>Wed</span>
            <span>Thu</span>
            <span>Fri</span>
            <span>Sat</span>
            <span>Sun</span>
          </div>
        </div>

        {/* Recent Orders Section */}
        <div className="bg-white/10 backdrop-blur-md p-8 rounded-3xl shadow-xl border border-white/20 h-full flex flex-col">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold text-white">Recent Orders</h2>
            <button className="text-white/80 text-sm font-bold hover:text-white hover:underline">
              View All
            </button>
          </div>

          {/* Desktop Table View (Hidden on Mobile) */}
          <div className="hidden md:block overflow-x-auto flex-1">
            <table className="w-full">
              <thead>
                <tr className="text-left text-xs font-bold text-white/50 uppercase tracking-wider border-b border-white/10">
                  <th className="pb-4 pl-4">Order ID</th>
                  <th className="pb-4">Customer</th>
                  <th className="pb-4">Amount</th>
                  <th className="pb-4">Status</th>
                  <th className="pb-4">Action</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                {recentOrders.map((order, i) => (
                  <tr
                    key={i}
                    className="hover:bg-white/5 transition-colors group border-b border-white/5 last:border-0"
                  >
                    <td className="py-4 pl-4 font-medium text-white">
                      {order.id}
                    </td>
                    <td className="py-4 font-medium text-white/90">
                      {order.customer}
                    </td>
                    <td className="py-4 font-bold text-white">
                      {order.amount}
                    </td>
                    <td className="py-4">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-bold backdrop-blur-sm ${
                          order.status === "Delivered"
                            ? "bg-green-400/20 text-green-200"
                            : order.status === "Cooking"
                            ? "bg-orange-400/20 text-orange-200"
                            : order.status === "On the way"
                            ? "bg-blue-400/20 text-blue-200"
                            : "bg-red-400/20 text-red-200"
                        }`}
                      >
                        {order.status}
                      </span>
                    </td>
                    <td className="py-4">
                      <button className="text-white/50 hover:text-white transition">
                        <Icons.Settings />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Card View (Minimal Swiggy Style) */}
          <div className="md:hidden flex flex-col gap-[12px]">
            {recentOrders.map((order, i) => (
              <div
                key={i}
                className="bg-white/12 backdrop-blur-sm p-[14px] rounded-2xl shadow-sm border border-white/5 flex flex-col gap-3"
              >
                {/* Header: ID, Time, Amount */}
                <div className="flex justify-between items-start">
                  <div className="flex flex-col">
                    <span className="text-white font-bold text-sm tracking-wide">
                      {order.id}
                    </span>
                    <span className="text-white/50 text-[10px] font-medium mt-0.5">
                      {order.time}
                    </span>
                  </div>
                  <span className="text-white font-bold text-base">
                    {order.amount}
                  </span>
                </div>

                {/* Body: Restaurant & Customer */}
                <div className="flex flex-col gap-0.5">
                  <h4 className="text-white/90 text-sm font-medium leading-tight">
                    {order.restaurant}
                  </h4>
                  <p className="text-white/60 text-xs">{order.customer}</p>
                </div>

                {/* Footer: Status & Action */}
                <div className="flex justify-between items-center pt-2 border-t border-white/5">
                  <span
                    className={`px-2.5 py-1 rounded-lg text-[10px] font-bold tracking-wide ${
                      order.status === "Delivered"
                        ? "bg-green-500/20 text-green-100"
                        : order.status === "Cooking"
                        ? "bg-orange-500/20 text-orange-100"
                        : order.status === "On the way"
                        ? "bg-blue-500/20 text-blue-100"
                        : "bg-red-500/20 text-red-100"
                    }`}
                  >
                    {order.status.toUpperCase()}
                  </span>

                  <button className="text-white/70 hover:text-white transition p-1">
                    <Icons.Settings />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardView;
