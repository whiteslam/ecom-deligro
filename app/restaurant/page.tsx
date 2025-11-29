"use client";
import React, { useState } from "react";
import Image from "next/image";

// Icons
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
  Earnings: () => (
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
      <line x1="12" y1="1" x2="12" y2="23"></line>
      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
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
  Plus: () => (
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
      <line x1="12" y1="5" x2="12" y2="19"></line>
      <line x1="5" y1="12" x2="19" y2="12"></line>
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
};

const RestaurantPage = () => {
  const [activeTab, setActiveTab] = useState("Dashboard");

  const sidebarItems = [
    { name: "Dashboard", icon: Icons.Dashboard },
    { name: "Orders", icon: Icons.Orders },
    { name: "Menu", icon: Icons.Menu },
    { name: "Earnings", icon: Icons.Earnings },
    { name: "Settings", icon: Icons.Settings },
  ];

  return (
    <div className="min-h-screen bg-[#E59A01] flex font-sans text-white selection:bg-white/30">
      {/* Sidebar */}
      <aside className="w-64 bg-white/10 backdrop-blur-xl border-r border-white/20 fixed h-full z-20 hidden md:flex flex-col shadow-2xl">
        <div className="p-8 flex items-center gap-3">
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#E59A01] font-bold text-xl shadow-lg">
            D
          </div>
          <span className="text-xl font-bold tracking-tight text-white">
            Deligro<span className="text-white/50"> Partner</span>
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
                src="https://ui-avatars.com/api/?name=Rasoi+Restaurant&background=ffffff&color=E59A01"
                alt="Restaurant"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <p className="text-sm font-bold text-white">Rasoi Restaurant</p>
              <p className="text-xs text-white/60">Bemetara</p>
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
              Manage your restaurant efficiently.
            </p>
          </div>

          <div className="flex items-center gap-6">
            <button className="flex items-center gap-2 bg-white text-[#E59A01] px-5 py-2.5 rounded-full font-bold shadow-lg hover:bg-gray-50 transition">
              <Icons.Plus />
              <span>Add Food Item</span>
            </button>

            <button className="relative p-2.5 bg-white/10 rounded-full border border-white/20 shadow-lg hover:bg-white/20 transition text-white backdrop-blur-sm">
              <Icons.Bell />
              <span className="absolute top-2 right-2.5 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
            </button>
          </div>
        </header>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {[
            { title: "Today's Orders", value: "24", sub: "4 Pending" },
            {
              title: "Total Revenue",
              value: "₹12,450",
              sub: "+15% from yesterday",
            },
            { title: "Menu Items", value: "48", sub: "Active" },
          ].map((stat, idx) => (
            <div
              key={idx}
              className="bg-white/10 backdrop-blur-md p-6 rounded-3xl shadow-xl border border-white/20 hover:bg-white/15 transition-all"
            >
              <h3 className="text-white/70 text-sm font-medium mb-1">
                {stat.title}
              </h3>
              <p className="text-3xl font-bold text-white mb-1">{stat.value}</p>
              <p className="text-xs text-white/50">{stat.sub}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Recent Orders */}
          <div className="lg:col-span-2 bg-white/10 backdrop-blur-md p-8 rounded-3xl shadow-xl border border-white/20">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold text-white">Live Orders</h2>
              <button className="text-white/80 text-sm font-bold hover:text-white hover:underline">
                View All
              </button>
            </div>

            <div className="space-y-4">
              {[
                {
                  id: "#9921",
                  items: "2x Paneer Tikka, 1x Naan",
                  amount: "₹450",
                  status: "Cooking",
                  time: "5m ago",
                },
                {
                  id: "#9920",
                  items: "1x Veg Biryani",
                  amount: "₹220",
                  status: "New",
                  time: "12m ago",
                },
                {
                  id: "#9919",
                  items: "3x Butter Chicken",
                  amount: "₹890",
                  status: "Ready",
                  time: "25m ago",
                },
              ].map((order, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between p-4 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition"
                >
                  <div>
                    <div className="flex items-center gap-3">
                      <span className="font-bold text-white">{order.id}</span>
                      <span
                        className={`px-2 py-0.5 rounded-full text-[10px] font-bold uppercase ${
                          order.status === "New"
                            ? "bg-blue-500 text-white"
                            : order.status === "Cooking"
                            ? "bg-orange-500 text-white"
                            : "bg-green-500 text-white"
                        }`}
                      >
                        {order.status}
                      </span>
                    </div>
                    <p className="text-sm text-white/80 mt-1">{order.items}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-white">{order.amount}</p>
                    <p className="text-xs text-white/50">{order.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Popular Items */}
          <div className="bg-white/10 backdrop-blur-md p-8 rounded-3xl shadow-xl border border-white/20">
            <h2 className="text-xl font-bold mb-6 text-white">Popular Items</h2>
            <div className="space-y-5">
              {[
                {
                  name: "Paneer Butter Masala",
                  orders: "120 orders",
                  price: "₹240",
                },
                { name: "Chicken Biryani", orders: "95 orders", price: "₹320" },
                { name: "Veg Thali", orders: "80 orders", price: "₹180" },
                { name: "Masala Dosa", orders: "65 orders", price: "₹120" },
              ].map((item, i) => (
                <div key={i} className="flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center text-lg">
                      🍛
                    </div>
                    <div>
                      <p className="text-sm font-bold text-white">
                        {item.name}
                      </p>
                      <p className="text-xs text-white/50">{item.orders}</p>
                    </div>
                  </div>
                  <span className="text-sm font-medium text-white">
                    {item.price}
                  </span>
                </div>
              ))}
            </div>
            <button className="w-full mt-8 py-3 rounded-xl border border-white/20 text-sm font-bold text-white hover:bg-white/10 transition">
              Manage Menu
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default RestaurantPage;
