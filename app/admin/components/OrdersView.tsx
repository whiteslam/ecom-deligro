"use client";
import React, { useState, useEffect, useCallback } from "react";
import { supabase } from "../../lib/supabaseClient";

const OrdersView: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");
  const [orders, setOrders] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchOrders = useCallback(async () => {
    setLoading(true);
    try {
      const { data, error } = await supabase
        .from("orders")
        .select(
          `
          id,
          created_at,
          total_amount,
          status,
          delivery_address,
          restaurants (name),
          profiles (full_name),
          order_items (
            quantity,
            menu_items (name)
          )
        `
        )
        .order("created_at", { ascending: false });

      if (error) {
        console.error("Error fetching orders:", error);
      } else if (data) {
        const mappedOrders = data.map((order: any) => ({
          id: "#" + order.id.slice(0, 8).toUpperCase(), // Shorten UUID
          customer: order.profiles?.full_name || "Guest User",
          restaurant: order.restaurants?.name || "Unknown Restaurant",
          items:
            order.order_items?.map(
              (oi: any) => oi.menu_items?.name || "Unknown Item"
            ) || [],
          amount: "₹" + order.total_amount,
          status: capitalize(order.status),
          time: new Date(order.created_at).toLocaleString(), // Simple format
          rider: "-", // No rider table yet
          address: order.delivery_address || "No address",
          paymentMethod: "Online", // value not in table yet, default
        }));
        setOrders(mappedOrders);
      }
    } catch (err) {
      console.error("Unexpected error:", err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchOrders();
  }, [fetchOrders]);

  const capitalize = (s: string) => {
    if (!s) return "";
    return s.charAt(0).toUpperCase() + s.slice(1);
  };

  const filteredOrders = orders.filter((order) => {
    const matchesSearch =
      order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.customer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter =
      filterStatus === "all" ||
      order.status.toLowerCase() === filterStatus.toLowerCase();
    return matchesSearch && matchesFilter;
  });

  const statusCounts = {
    all: orders.length,
    delivered: orders.filter((o) => o.status === "Delivered").length,
    cooking: orders.filter((o) => o.status === "Cooking").length, // 'preparing' in DB usually
    onTheWay: orders.filter(
      (o) => o.status === "Out_for_delivery" || o.status === "On the way"
    ).length,
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

      {loading ? (
        <div className="flex justify-center py-20">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-white"></div>
        </div>
      ) : (
        /* Orders List */
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
                          : order.status === "On the way" ||
                            order.status === "Out_for_delivery"
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
                      {order.items.map((item: string, idx: number) => (
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
                    <p className="text-white/50 text-xs mb-1">
                      Delivery Address
                    </p>
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
      )}

      {/* Empty State */}
      {!loading && filteredOrders.length === 0 && (
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
