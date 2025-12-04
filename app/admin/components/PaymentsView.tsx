"use client";
import React, { useState } from "react";

const PaymentsView: React.FC = () => {
  const [filterType, setFilterType] = useState("all");

  const payments = [
    {
      id: "PAY-7782",
      orderId: "#ORD-7782",
      customer: "Priya Sharma",
      amount: "₹450",
      method: "UPI",
      status: "Completed",
      time: "2 mins ago",
      transactionId: "TXN123456789",
    },
    {
      id: "PAY-7781",
      orderId: "#ORD-7781",
      customer: "Rahul Verma",
      amount: "₹280",
      method: "Cash on Delivery",
      status: "Pending",
      time: "15 mins ago",
      transactionId: "-",
    },
    {
      id: "PAY-7780",
      orderId: "#ORD-7780",
      customer: "Amit Patel",
      amount: "₹890",
      method: "Credit Card",
      status: "Completed",
      time: "25 mins ago",
      transactionId: "TXN987654321",
    },
    {
      id: "PAY-7779",
      orderId: "#ORD-7779",
      customer: "Sneha Gupta",
      amount: "₹320",
      method: "UPI",
      status: "Refunded",
      time: "1 hour ago",
      transactionId: "TXN456789123",
    },
    {
      id: "PAY-7778",
      orderId: "#ORD-7778",
      customer: "Vikram Singh",
      amount: "₹550",
      method: "Cash on Delivery",
      status: "Completed",
      time: "2 hours ago",
      transactionId: "-",
    },
    {
      id: "PAY-7777",
      orderId: "#ORD-7777",
      customer: "Anjali Desai",
      amount: "₹420",
      method: "Debit Card",
      status: "Completed",
      time: "3 hours ago",
      transactionId: "TXN789123456",
    },
  ];

  const filteredPayments = payments.filter((payment) => {
    if (filterType === "all") return true;
    return payment.status.toLowerCase() === filterType;
  });

  const stats = {
    total: payments.reduce(
      (sum, p) => sum + parseInt(p.amount.replace(/[₹,]/g, "")),
      0
    ),
    completed: payments.filter((p) => p.status === "Completed").length,
    pending: payments.filter((p) => p.status === "Pending").length,
    refunded: payments.filter((p) => p.status === "Refunded").length,
  };

  return (
    <div className="relative">
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-green-400/20 to-emerald-600/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tl from-blue-400/20 to-indigo-600/20 rounded-full blur-3xl animate-pulse [animation-delay:1s]"></div>

      {/* Header */}
      <div className="relative z-10 mb-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
          <div>
            <h2 className="text-3xl font-bold text-white mb-2">Payments</h2>
            <p className="text-white/70">
              Track and manage all payment transactions
            </p>
          </div>
          <button className="px-6 py-3 bg-white text-[#E59A01] rounded-xl font-bold shadow-xl hover:bg-white/90 transition-all duration-300 transform hover:scale-105">
            📊 Export Report
          </button>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-gradient-to-r from-green-400/10 to-emerald-600/10 backdrop-blur-md p-4 md:p-6 rounded-2xl border border-green-400/20">
            <p className="text-green-200 text-xs md:text-sm font-medium mb-1 truncate">
              Total Revenue
            </p>
            <p className="text-white text-xl md:text-3xl font-bold truncate">
              ₹{stats.total.toLocaleString()}
            </p>
          </div>
          <div className="bg-green-400/10 backdrop-blur-md p-4 md:p-6 rounded-2xl border border-green-400/20">
            <p className="text-green-200 text-xs md:text-sm font-medium mb-1 truncate">
              Completed
            </p>
            <p className="text-white text-xl md:text-3xl font-bold truncate">
              {stats.completed}
            </p>
          </div>
          <div className="bg-yellow-400/10 backdrop-blur-md p-4 md:p-6 rounded-2xl border border-yellow-400/20">
            <p className="text-yellow-200 text-xs md:text-sm font-medium mb-1 truncate">
              Pending
            </p>
            <p className="text-white text-xl md:text-3xl font-bold truncate">
              {stats.pending}
            </p>
          </div>
          <div className="bg-red-400/10 backdrop-blur-md p-4 md:p-6 rounded-2xl border border-red-400/20">
            <p className="text-red-200 text-xs md:text-sm font-medium mb-1 truncate">
              Refunded
            </p>
            <p className="text-white text-xl md:text-3xl font-bold truncate">
              {stats.refunded}
            </p>
          </div>
        </div>

        {/* Filter */}
        <div className="flex gap-4">
          <select
            value={filterType}
            onChange={(e) => setFilterType(e.target.value)}
            className="px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-white/50 cursor-pointer backdrop-blur-sm [&>option]:text-gray-800"
          >
            <option value="all">All Payments</option>
            <option value="completed">Completed</option>
            <option value="pending">Pending</option>
            <option value="refunded">Refunded</option>
          </select>
        </div>
      </div>

      {/* Payments Table */}
      <div className="bg-white/10 backdrop-blur-md rounded-3xl shadow-xl border border-white/20 overflow-hidden relative z-10">
        {/* Desktop Table View */}
        <div className="hidden md:block overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-left text-xs font-bold text-white/50 uppercase tracking-wider border-b border-white/10 bg-white/5">
                <th className="p-4">Payment ID</th>
                <th className="p-4">Order ID</th>
                <th className="p-4">Customer</th>
                <th className="p-4">Amount</th>
                <th className="p-4">Method</th>
                <th className="p-4">Transaction ID</th>
                <th className="p-4">Status</th>
                <th className="p-4">Time</th>
                <th className="p-4">Actions</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              {filteredPayments.map((payment) => (
                <tr
                  key={payment.id}
                  className="hover:bg-white/5 transition-colors border-b border-white/5 last:border-0"
                >
                  <td className="p-4 font-medium text-white">{payment.id}</td>
                  <td className="p-4 text-white/70">{payment.orderId}</td>
                  <td className="p-4 text-white/90">{payment.customer}</td>
                  <td className="p-4 font-bold text-green-300">
                    {payment.amount}
                  </td>
                  <td className="p-4">
                    <span className="px-3 py-1 bg-white/10 rounded-full text-xs font-medium text-white">
                      {payment.method === "UPI" && "📱"}
                      {payment.method === "Credit Card" && "💳"}
                      {payment.method === "Debit Card" && "💳"}
                      {payment.method === "Cash on Delivery" && "💵"}{" "}
                      {payment.method}
                    </span>
                  </td>
                  <td className="p-4 text-white/70 text-xs font-mono">
                    {payment.transactionId}
                  </td>
                  <td className="p-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-bold backdrop-blur-sm ${
                        payment.status === "Completed"
                          ? "bg-green-400/20 text-green-200"
                          : payment.status === "Pending"
                          ? "bg-yellow-400/20 text-yellow-200"
                          : "bg-red-400/20 text-red-200"
                      }`}
                    >
                      {payment.status}
                    </span>
                  </td>
                  <td className="p-4 text-white/50 text-xs">{payment.time}</td>
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
                          <polyline points="6 9 6 2 18 2 18 9"></polyline>
                          <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path>
                          <rect x="6" y="14" width="12" height="8"></rect>
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
          {filteredPayments.map((payment) => (
            <div
              key={payment.id}
              className="bg-white/5 p-4 rounded-xl border border-white/10 space-y-3"
            >
              <div className="flex justify-between items-start">
                <div>
                  <p className="font-bold text-white">{payment.id}</p>
                  <p className="text-xs text-white/50">{payment.time}</p>
                </div>
                <span
                  className={`px-3 py-1 rounded-full text-xs font-bold backdrop-blur-sm ${
                    payment.status === "Completed"
                      ? "bg-green-400/20 text-green-200"
                      : payment.status === "Pending"
                      ? "bg-yellow-400/20 text-yellow-200"
                      : "bg-red-400/20 text-red-200"
                  }`}
                >
                  {payment.status}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-3 text-sm">
                <div>
                  <p className="text-xs text-white/50">Amount</p>
                  <p className="font-bold text-green-300">{payment.amount}</p>
                </div>
                <div>
                  <p className="text-xs text-white/50">Method</p>
                  <p className="text-white flex items-center gap-1">
                    {payment.method === "UPI" && "📱"}
                    {payment.method === "Credit Card" && "💳"}
                    {payment.method === "Debit Card" && "💳"}
                    {payment.method === "Cash on Delivery" && "💵"}
                    {payment.method}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-white/50">Customer</p>
                  <p className="text-white">{payment.customer}</p>
                </div>
                <div>
                  <p className="text-xs text-white/50">Order ID</p>
                  <p className="text-white/70">{payment.orderId}</p>
                </div>
                <div className="col-span-2">
                  <p className="text-xs text-white/50">Transaction ID</p>
                  <p className="text-white/70 font-mono text-xs">
                    {payment.transactionId}
                  </p>
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
                    <polyline points="6 9 6 2 18 2 18 9"></polyline>
                    <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path>
                    <rect x="6" y="14" width="12" height="8"></rect>
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Empty State */}
      {filteredPayments.length === 0 && (
        <div className="text-center py-20 relative z-10">
          <div className="text-6xl mb-4">💳</div>
          <h3 className="text-2xl font-bold text-white mb-2">
            No payments found
          </h3>
          <p className="text-white/70">Try adjusting your filter criteria</p>
        </div>
      )}
    </div>
  );
};

export default PaymentsView;
