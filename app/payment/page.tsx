import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const PaymentPage = () => {
  return (
    <div className="min-h-screen bg-[#E59A01] font-sans text-gray-800 pt-6">
      <Navbar />
      <main className="px-8 py-10 max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-8 drop-shadow-md">
          Payment Settings 💳
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white/15 backdrop-blur-2xl border border-white/30 p-8 rounded-3xl shadow-xl">
            <h2 className="text-2xl font-bold text-white mb-6">Saved Cards</h2>
            <div className="space-y-4">
              <div className="bg-white/10 border border-white/20 p-4 rounded-2xl flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">💳</span>
                  <div className="text-white">
                    <p className="font-bold">Visa ending in 4242</p>
                    <p className="text-xs opacity-70">Expires 12/25</p>
                  </div>
                </div>
                <button className="text-red-200 hover:text-red-100">
                  Remove
                </button>
              </div>
              <button className="w-full py-3 border-2 border-dashed border-white/30 text-white rounded-2xl hover:bg-white/5 transition flex items-center justify-center gap-2">
                <span>+</span> Add New Card
              </button>
            </div>
          </div>

          <div className="bg-white/15 backdrop-blur-2xl border border-white/30 p-8 rounded-3xl shadow-xl">
            <h2 className="text-2xl font-bold text-white mb-6">
              UPI & Wallets
            </h2>
            <div className="space-y-4">
              <div className="bg-white/10 border border-white/20 p-4 rounded-2xl flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">📱</span>
                  <div className="text-white">
                    <p className="font-bold">Google Pay</p>
                    <p className="text-xs opacity-70">Linked</p>
                  </div>
                </div>
                <button className="text-red-200 hover:text-red-100">
                  Unlink
                </button>
              </div>
              <button className="w-full py-3 border-2 border-dashed border-white/30 text-white rounded-2xl hover:bg-white/5 transition flex items-center justify-center gap-2">
                <span>+</span> Add New UPI
              </button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PaymentPage;
