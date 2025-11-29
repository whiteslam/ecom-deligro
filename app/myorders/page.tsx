import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const OrdersPage = () => {
  return (
    <div className="min-h-screen bg-[#E59A01] font-sans text-gray-800 pt-6">
      <Navbar />
      <main className="px-8 py-10 max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-8 drop-shadow-md">
          Your Orders 📦
        </h1>
        <div className="space-y-6">
          {[1, 2, 3].map((order) => (
            <div
              key={order}
              className="bg-white/15 backdrop-blur-2xl border border-white/30 p-6 rounded-3xl shadow-xl flex flex-col md:flex-row justify-between items-center gap-4"
            >
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center text-3xl">
                  🍕
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">
                    Order #{883920 + order}
                  </h3>
                  <p className="text-white/70 text-sm">
                    Rasoi Restaurant • 2 Items
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className="px-4 py-1 bg-green-500/20 text-green-100 border border-green-500/30 rounded-full text-sm font-medium">
                  Delivered
                </span>
                <button className="px-6 py-2 bg-white/10 border border-white/30 text-white rounded-full hover:bg-white/20 transition text-sm font-medium">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default OrdersPage;
