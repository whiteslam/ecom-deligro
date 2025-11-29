"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

// Icons (Using SVGs for no dependencies)
const Icons = {
  Dashboard: () => (
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
      <rect x="3" y="3" width="7" height="7"></rect>
      <rect x="14" y="3" width="7" height="7"></rect>
      <rect x="14" y="14" width="7" height="7"></rect>
      <rect x="3" y="14" width="7" height="7"></rect>
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
  Menu: () => (
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
      <path d="M3 6h18"></path>
      <path d="M3 12h18"></path>
      <path d="M3 18h18"></path>
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
  Users: () => (
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
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
      <circle cx="9" cy="7" r="4"></circle>
      <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
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
  Bell: () => (
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
      <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
      <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
    </svg>
  ),
  Search: () => (
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
      <circle cx="11" cy="11" r="8"></circle>
      <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
    </svg>
  ),
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
};

const AdminPage = () => {
  const [activeTab, setActiveTab] = useState("Dashboard");

  const sidebarItems = [
    { name: "Dashboard", icon: Icons.Dashboard },
    { name: "Restaurants", icon: Icons.Restaurants },
    { name: "Riders", icon: Icons.Riders },
    { name: "Orders", icon: Icons.Orders },
    { name: "Menu Items", icon: Icons.Menu },
    { name: "Payments", icon: Icons.Payments },
    { name: "Users", icon: Icons.Users },
    { name: "Settings", icon: Icons.Settings },
  ];

  const stats = [
    {
      title: "Total Orders",
      value: "1,284",
      change: "+12%",
      trend: "up",
      icon: Icons.Orders,
    },
    {
      title: "Total Revenue",
      value: "₹4,25,000",
      change: "+8%",
      trend: "up",
      icon: Icons.Payments,
    },
    {
      title: "Active Riders",
      value: "45",
      change: "-2%",
      trend: "down",
      icon: Icons.Riders,
    },
    {
      title: "Active Restaurants",
      value: "128",
      change: "+5%",
      trend: "up",
      icon: Icons.Restaurants,
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
    <div className="min-h-screen bg-[#E59A01] flex font-sans text-white selection:bg-white/30">
      {/* Sidebar */}
      <aside className="w-64 bg-white/10 backdrop-blur-xl border-r border-white/20 fixed h-full z-20 hidden md:flex flex-col shadow-2xl">
        <div className="p-8 flex items-center gap-3">
          {/* Logo */}
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#E59A01] font-bold text-xl shadow-lg">
            D
          </div>
          <span className="text-2xl font-bold tracking-tight text-white">
            Deligro<span className="text-white/50">.</span>
          </span>
        </div>

        <nav className="flex-1 px-4 space-y-2 mt-4">
          {sidebarItems.map((item) => (
            <button
              key={item.name}
              onClick={() => setActiveTab(item.name)}
              className={`w-full flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-200 group ${
                activeTab === item.name
                  ? "bg-white text-[#E59A01] shadow-lg font-bold"
                  : "text-white/70 hover:bg-white/10 hover:text-white"
              }`}
            >
              <item.icon />
              <span className="font-medium">{item.name}</span>
            </button>
          ))}
        </nav>

        <div className="p-6 border-t border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-white/20 overflow-hidden relative border border-white/30">
              <Image
                src="https://ui-avatars.com/api/?name=Admin+User&background=ffffff&color=E59A01"
                alt="Admin"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <p className="text-sm font-bold text-white">Admin User</p>
              <p className="text-xs text-white/60">Super Admin</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 md:ml-64 p-8">
        {/* Header */}
        <header className="flex justify-between items-center mb-10">
          <div>
            <h1 className="text-3xl font-bold text-white drop-shadow-sm">
              Dashboard
            </h1>
            <p className="text-white/80 mt-1 font-medium">
              Welcome back, here's what's happening today.
            </p>
          </div>

          <div className="flex items-center gap-6">
            <div className="relative hidden md:block">
              <input
                type="text"
                placeholder="Search..."
                className="pl-10 pr-4 py-2.5 bg-white/10 border border-white/20 rounded-full text-sm text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/50 w-64 shadow-lg backdrop-blur-sm"
              />
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/60">
                <Icons.Search />
              </div>
            </div>

            <button className="relative p-2.5 bg-white/10 rounded-full border border-white/20 shadow-lg hover:bg-white/20 transition text-white backdrop-blur-sm">
              <Icons.Bell />
              <span className="absolute top-2 right-2.5 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
            </button>
          </div>
        </header>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="bg-white/10 backdrop-blur-md p-6 rounded-3xl shadow-xl border border-white/20 hover:bg-white/15 transition-all group"
            >
              <div className="flex justify-between items-start mb-4">
                <div
                  className={`p-3 rounded-2xl ${
                    idx === 1
                      ? "bg-green-400/20 text-green-300"
                      : "bg-white/20 text-white"
                  }`}
                >
                  <stat.icon />
                </div>
                <div
                  className={`flex items-center gap-1 text-xs font-bold px-2 py-1 rounded-full ${
                    stat.trend === "up"
                      ? "bg-green-400/20 text-green-300"
                      : "bg-red-400/20 text-red-300"
                  }`}
                >
                  {stat.trend === "up" ? (
                    <Icons.TrendUp />
                  ) : (
                    <Icons.TrendDown />
                  )}
                  {stat.change}
                </div>
              </div>
              <h3 className="text-white/70 text-sm font-medium mb-1">
                {stat.title}
              </h3>
              <p className="text-2xl font-bold text-white">{stat.value}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Revenue Graph Section */}
          <div className="lg:col-span-2 bg-white/10 backdrop-blur-md p-8 rounded-3xl shadow-xl border border-white/20">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-xl font-bold text-white">
                Revenue Analytics
              </h2>
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
                  className="w-full bg-white/10 rounded-t-xl relative group cursor-pointer transition-all hover:bg-white/20"
                  style={{ height: `${height}%` }}
                >
                  <div
                    className="absolute bottom-0 w-full bg-white rounded-t-xl transition-all duration-500 shadow-[0_0_15px_rgba(255,255,255,0.5)]"
                    style={{ height: `${height * 0.6}%`, opacity: 0.9 }}
                  ></div>
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

          {/* Notifications / Side Panel */}
          <div className="bg-white/10 backdrop-blur-md p-8 rounded-3xl shadow-xl border border-white/20">
            <h2 className="text-xl font-bold mb-6 text-white">Notifications</h2>
            <div className="space-y-6">
              {[
                {
                  title: "New Restaurant Request",
                  desc: "Spicy Tandoor wants to join.",
                  time: "10m ago",
                  icon: "🏪",
                  color: "bg-blue-400/20 text-blue-200",
                },
                {
                  title: "High Demand Alert",
                  desc: "Surge in orders in Sector 7.",
                  time: "32m ago",
                  icon: "🔥",
                  color: "bg-red-400/20 text-red-200",
                },
                {
                  title: "Rider Application",
                  desc: "Rahul Kumar applied for rider.",
                  time: "1h ago",
                  icon: "🛵",
                  color: "bg-green-400/20 text-green-200",
                },
                {
                  title: "System Update",
                  desc: "Maintenance scheduled at 2 AM.",
                  time: "4h ago",
                  icon: "⚙️",
                  color: "bg-white/20 text-white",
                },
              ].map((notif, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center text-lg shrink-0 ${notif.color} backdrop-blur-sm`}
                  >
                    {notif.icon}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">
                      {notif.title}
                    </h4>
                    <p className="text-xs text-white/70 mt-0.5">{notif.desc}</p>
                    <p className="text-[10px] text-white/40 mt-1 font-medium">
                      {notif.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <button className="w-full mt-8 py-3 rounded-xl border border-white/20 text-sm font-bold text-white hover:bg-white/10 transition">
              View All
            </button>
          </div>
        </div>

        {/* Recent Orders Table */}
        <div className="mt-8 bg-white/10 backdrop-blur-md p-8 rounded-3xl shadow-xl border border-white/20">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold text-white">Recent Orders</h2>
            <button className="text-white/80 text-sm font-bold hover:text-white hover:underline">
              View All Orders
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-left text-xs font-bold text-white/50 uppercase tracking-wider border-b border-white/10">
                  <th className="pb-4 pl-4">Order ID</th>
                  <th className="pb-4">Customer</th>
                  <th className="pb-4">Restaurant</th>
                  <th className="pb-4">Amount</th>
                  <th className="pb-4">Status</th>
                  <th className="pb-4">Time</th>
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
                    <td className="py-4 text-white/70">{order.restaurant}</td>
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
                    <td className="py-4 text-white/50 text-xs">{order.time}</td>
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
        </div>
      </main>
    </div>
  );
};

export default AdminPage;
