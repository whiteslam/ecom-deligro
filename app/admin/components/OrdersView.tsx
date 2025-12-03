"use client";
import React, { useState } from "react";

const OrdersView: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");

  const orders = [
    {
      id: "#ORD-7782",
      customer: "Priya Sharma",
      restaurant: "Rasoi Restaurant",
      items: ["Butter Chicken", "Naan", "Dal Makhani"],
      amount: "₹450",
      status: "Delivered",
      time: "2 mins ago",
      rider: "Rahul Kumar",
      address: "Sector 7, Bemetara",
      paymentMethod: "Online",
    },
    {
      id: "#ORD-7781",
      customer: "Rahul Verma",
      restaurant: "Burger King",
      items: ["Whopper Burger", "Fries", "Coke"],
      amount: "₹280",
      status: "Cooking",
      time: "15 mins ago",
      rider: "Amit Singh",
      address: "Sector 12, Bemetara",
      paymentMethod: "COD",
    },
    {
      id: "#ORD-7780",
      customer: "Amit Patel",
      restaurant: "Pizza Hut",
      items: ["Margherita Pizza", "Garlic Bread", "Pepsi"],
      amount: "₹890",
      status: "On the way",
      time: "25 mins ago",
      rider: "Vikram Patel",
      address: "Sector 5, Bemetara",
      paymentMethod: "Online",
    },
    {
      id: "#ORD-7779",
      customer: "Sneha Gupta",
      restaurant: "Subway",
      items: ["Veggie Delight Sub", "Cookies"],
      amount: "₹320",
      status: "Cancelled",
      time: "1 hour ago",
      rider: "-",
      address: "Sector 9, Bemetara",
      paymentMethod: "Online",
    },
    {
      id: "#ORD-7778",
      customer: "Vikram Singh",
      restaurant: "Starbucks",
      items: ["Cappuccino", "Blueberry Muffin"],
      amount: "₹550",
      status: "Delivered",
      time: "2 hours ago",
      rider: "Deepak Sharma",
      address: "Sector 3, Bemetara",
      paymentMethod: "COD",
    },
    {
      id: "#ORD-7777",
      customer: "Anjali Desai",
      restaurant: "Tandoor House",
      items: ["Paneer Tikka", "Roti", "Raita"],
      amount: "₹420",
      status: "Preparing",
      time: "30 mins ago",
      rider: "Manoj Verma",
      address: "Sector 15, Bemetara",
      paymentMethod: "Online",
    },
  ];

  const filteredOrders = orders.filter((order) => {
    const matchesSearch =
      order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.customer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter =
      filterStatus === "all" || order.status.toLowerCase() === filterStatus;
    return matchesSearch && matchesFilter;
  });

  const statusCounts = {
    all: orders.length,
    delivered: orders.filter((o) => o.status === "Delivered").length,
    cooking: orders.filter((o) => o.status === "Cooking").length,
    onTheWay: orders.filter((o) => o.status === "On the way").length,
    preparing: orders.filter((o) => o.status === "Preparing").length,
    cancelled: orders.filter((o) => o.status === "Cancelled").length,
  };

  return (
    <div className="relative">
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-orange-400/20 to-red-600/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tl from-yellow-400/20 to-orange-400/20 rounded-full blur-3xl animate-pulse [animation-delay:1s]"></div>

      {/* Header */}
      <div className="relative z-10 mb-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
          <div>
            <h2 className="text-3xl font-bold text-white mb-2">Orders</h2>
            <p className="text-white/70">
              Track and manage all customer orders in real-time
            </p>
          </div>
          <button className="px-6 py-3 bg-white text-[#E59A01] rounded-xl font-bold shadow-xl hover:bg-white/90 transition-all duration-300 transform hover:scale-105">
            📊 Export Data
          </button>
        </div>

        {/* Status Overview */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-4 mb-6">
          <div className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/20">
            <p className="text-white/70 text-xs font-medium mb-1">Total</p>
            <p className="text-white text-2xl font-bold">{statusCounts.all}</p>
          </div>
          <div className="bg-green-400/10 backdrop-blur-md p-4 rounded-2xl border border-green-400/20">
            <p className="text-green-200 text-xs font-medium mb-1">Delivered</p>
            <p className="text-white text-2xl font-bold">
              {statusCounts.delivered}
            </p>
          </div>
          <div className="bg-orange-400/10 backdrop-blur-md p-4 rounded-2xl border border-orange-400/20">
            <p className="text-orange-200 text-xs font-medium mb-1">Cooking</p>
            <p className="text-white text-2xl font-bold">
              {statusCounts.cooking}
            </p>
          </div>
          <div className="bg-blue-400/10 backdrop-blur-md p-4 rounded-2xl border border-blue-400/20">
            <p className="text-blue-200 text-xs font-medium mb-1">On the way</p>
            <p className="text-white text-2xl font-bold">
              {statusCounts.onTheWay}
            </p>
          </div>
          <div className="bg-purple-400/10 backdrop-blur-md p-4 rounded-2xl border border-purple-400/20">
            <p className="text-purple-200 text-xs font-medium mb-1">
              Preparing
            </p>
            <p className="text-white text-2xl font-bold">
              {statusCounts.preparing}
            </p>
          </div>
          <div className="bg-red-400/10 backdrop-blur-md p-4 rounded-2xl border border-red-400/20">
            <p className="text-red-200 text-xs font-medium mb-1">Cancelled</p>
            <p className="text-white text-2xl font-bold">
              {statusCounts.cancelled}
            </p>
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <input
              type="text"
              placeholder="Search by order ID or customer name..."
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
            <option value="all">All Orders</option>
            <option value="delivered">Delivered</option>
            <option value="cooking">Cooking</option>
            <option value="on the way">On the way</option>
            <option value="preparing">Preparing</option>
            <option value="cancelled">Cancelled</option>
          </select>
        </div>
      </div>

      {/* Orders List */}
      <div className="space-y-4 relative z-10">
        {filteredOrders.map((order) => (
          <div
            key={order.id}
            className="group bg-white/10 backdrop-blur-md p-6 rounded-3xl shadow-xl border border-white/20 hover:bg-white/15 transition-all duration-300"
          >
            <div className="flex flex-col lg:flex-row gap-6">
              {/* Order Info */}
              <div className="flex-1">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">
                      {order.id}
                    </h3>
                    <p className="text-white/70 text-sm">{order.time}</p>
                  </div>
                  <span
                    className={`px-4 py-2 rounded-full text-xs font-bold backdrop-blur-sm ${
                      order.status === "Delivered"
                        ? "bg-green-400/20 text-green-200"
                        : order.status === "Cooking" ||
                          order.status === "Preparing"
                        ? "bg-orange-400/20 text-orange-200"
                        : order.status === "On the way"
                        ? "bg-blue-400/20 text-blue-200"
                        : "bg-red-400/20 text-red-200"
                    }`}
                  >
                    {order.status}
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <p className="text-white/50 text-xs mb-1">Customer</p>
                    <p className="text-white font-bold">{order.customer}</p>
                  </div>
                  <div>
                    <p className="text-white/50 text-xs mb-1">Restaurant</p>
                    <p className="text-white font-bold">{order.restaurant}</p>
                  </div>
                  <div>
                    <p className="text-white/50 text-xs mb-1">Rider</p>
                    <p className="text-white font-bold">{order.rider}</p>
                  </div>
                  <div>
                    <p className="text-white/50 text-xs mb-1">Payment</p>
                    <p className="text-white font-bold">
                      {order.paymentMethod}
                    </p>
                  </div>
                </div>

                <div className="mb-4">
                  <p className="text-white/50 text-xs mb-2">Items Ordered</p>
                  <div className="flex flex-wrap gap-2">
                    {order.items.map((item, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-white/10 rounded-full text-xs font-medium text-white"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-white/50 text-xs mb-1">Delivery Address</p>
                  <p className="text-white text-sm">📍 {order.address}</p>
                </div>
              </div>

              {/* Amount & Actions */}
              <div className="flex flex-col justify-between items-end">
                <div className="bg-gradient-to-r from-green-400/10 to-emerald-600/10 rounded-2xl p-4 mb-4">
                  <p className="text-white/50 text-xs mb-1">Total Amount</p>
                  <p className="text-white text-3xl font-bold">
                    {order.amount}
                  </p>
                </div>

                <div className="flex gap-2">
                  <button className="px-4 py-2 bg-white/10 border border-white/20 rounded-xl text-sm font-bold text-white hover:bg-white/20 transition">
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
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {filteredOrders.length === 0 && (
        <div className="text-center py-20 relative z-10">
          <div className="text-6xl mb-4">📦</div>
          <h3 className="text-2xl font-bold text-white mb-2">
            No orders found
          </h3>
          <p className="text-white/70">
            Try adjusting your search or filter criteria
          </p>
        </div>
      )}
    </div>
  );
};

export default OrdersView;
