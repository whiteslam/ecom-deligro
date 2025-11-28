import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const CartPage = () => {
  return (
    <div className="min-h-screen bg-[#E59A01] font-sans text-gray-800 pt-6">
      <Navbar />
      <main className="px-8 py-10 max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-8 drop-shadow-md">
          My Cart 🛒
        </h1>
        <div className="bg-white/15 backdrop-blur-2xl border border-white/30 p-12 rounded-3xl shadow-xl text-center">
          <div className="text-6xl mb-4">🛒</div>
          <h2 className="text-2xl font-bold text-white mb-2">
            Your cart is empty
          </h2>
          <p className="text-white/80 mb-6">
            Looks like you haven't added anything to your cart yet.
          </p>
          <button className="px-8 py-3 bg-white text-[#D92E2E] rounded-full font-bold shadow-lg hover:bg-gray-100 transition">
            Start Shopping
          </button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CartPage;
