"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useCart } from "../context/CartContext";
import Image from "next/image";

const CartPage = () => {
  const router = useRouter();
  const {
    cartItems,
    updateQuantity,
    removeFromCart,
    getTotalPrice,
    getTotalItems,
  } = useCart();
  const [selectedPayment, setSelectedPayment] = useState<string>("cash");

  const deliveryFee = 40;
  const gstRate = 0.05;
  const itemTotal = getTotalPrice();
  const gstAmount = Math.round(itemTotal * gstRate * 100) / 100;
  const totalAmount = itemTotal + deliveryFee + gstAmount;

  const handleOrderNow = () => {
    // TODO: Implement order placement logic
    alert(
      `Order placed! Total: ₹${totalAmount.toFixed(
        2
      )}\nPayment Method: ${selectedPayment}`
    );
  };

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-[#E59A01]">
        <Navbar />

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pt-24">
          <div className="max-w-md mx-auto bg-white/15 backdrop-blur-2xl border border-white/30 rounded-3xl shadow-xl p-12 text-center">
            <div className="text-7xl mb-4">🛒</div>
            <h2 className="text-2xl font-bold text-[#2B2B2B] mb-2">
              Your cart is empty
            </h2>
            <p className="text-[#2B2B2B]/80 mb-6">
              Add items from a restaurant to start a new order
            </p>
            <button
              onClick={() => router.push("/order")}
              className="px-6 py-3 bg-[#D92E2E] text-white rounded-full font-semibold hover:bg-[#C02828] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Browse Restaurants
            </button>
          </div>
        </main>

        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#E59A01]">
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pt-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {/* Header */}
            <div className="bg-white/15 backdrop-blur-2xl border border-white/30 rounded-3xl shadow-xl p-6">
              <h1 className="text-2xl font-bold text-[#2B2B2B]">
                Cart ({getTotalItems()}{" "}
                {getTotalItems() === 1 ? "item" : "items"})
              </h1>
            </div>

            {/* Cart Items */}
            <div className="bg-white/15 backdrop-blur-2xl border border-white/30 rounded-3xl shadow-xl divide-y divide-white/20">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="p-6 hover:bg-white/10 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    {/* Veg/Non-veg Badge */}
                    <div className="shrink-0 mt-1">
                      <div
                        className={`w-5 h-5 border-2 flex items-center justify-center ${
                          item.isVeg ? "border-green-600" : "border-red-600"
                        }`}
                      >
                        <div
                          className={`w-2.5 h-2.5 rounded-full ${
                            item.isVeg ? "bg-green-600" : "bg-red-600"
                          }`}
                        ></div>
                      </div>
                    </div>

                    {/* Item Details */}
                    <div className="grow">
                      <h3 className="font-semibold text-[#2B2B2B] mb-1">
                        {item.name}
                      </h3>
                      <p className="text-sm text-[#2B2B2B]/70 mb-3">
                        {item.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="font-semibold text-[#2B2B2B]">
                          ₹{item.price * item.quantity}
                        </span>

                        {/* Quantity Controls */}
                        <div className="flex items-center gap-3">
                          <button
                            onClick={() => {
                              if (item.quantity === 1) {
                                removeFromCart(item.id);
                              } else {
                                updateQuantity(item.id, item.quantity - 1);
                              }
                            }}
                            className="w-8 h-8 flex items-center justify-center border-2 border-white/40 text-[#2B2B2B] font-bold rounded-lg hover:border-[#D92E2E] hover:text-[#D92E2E] hover:bg-white/20 transition-all duration-300"
                          >
                            −
                          </button>
                          <span className="w-8 text-center font-semibold text-[#2B2B2B]">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() =>
                              updateQuantity(item.id, item.quantity + 1)
                            }
                            className="w-8 h-8 flex items-center justify-center border-2 border-[#D92E2E] bg-[#D92E2E] text-white font-bold rounded-lg hover:bg-[#C02828] hover:border-[#C02828] hover:scale-110 transition-all duration-300 shadow-lg"
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Bill Summary & Payment */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-4">
              {/* Payment Methods */}
              <div className="bg-white/15 backdrop-blur-2xl border border-white/30 rounded-3xl shadow-xl p-6">
                <h2 className="text-lg font-bold text-[#2B2B2B] mb-4">
                  Payment Method
                </h2>
                <div className="space-y-3">
                  {/* Cash on Delivery */}
                  <label
                    className="flex items-center gap-3 p-4 border-2 rounded-2xl cursor-pointer hover:bg-white/10 transition-all duration-300"
                    style={{
                      borderColor:
                        selectedPayment === "cash" ? "#D92E2E" : "#E5E7EB",
                    }}
                  >
                    <input
                      type="radio"
                      name="payment"
                      value="cash"
                      checked={selectedPayment === "cash"}
                      onChange={(e) => setSelectedPayment(e.target.value)}
                      className="w-4 h-4 text-[#D92E2E] focus:ring-[#D92E2E]"
                    />
                    <div className="grow">
                      <div className="font-semibold text-[#2B2B2B]">
                        Cash on Delivery
                      </div>
                      <div className="text-sm text-[#2B2B2B]/70">
                        Pay when you receive
                      </div>
                    </div>
                    <span className="text-2xl">💵</span>
                  </label>

                  {/* UPI */}
                  <label
                    className="flex items-center gap-3 p-4 border-2 rounded-2xl cursor-pointer hover:bg-white/10 transition-all duration-300"
                    style={{
                      borderColor:
                        selectedPayment === "upi" ? "#D92E2E" : "#E5E7EB",
                    }}
                  >
                    <input
                      type="radio"
                      name="payment"
                      value="upi"
                      checked={selectedPayment === "upi"}
                      onChange={(e) => setSelectedPayment(e.target.value)}
                      className="w-4 h-4 text-[#D92E2E] focus:ring-[#D92E2E]"
                    />
                    <div className="grow">
                      <div className="font-semibold text-[#2B2B2B]">UPI</div>
                      <div className="text-sm text-[#2B2B2B]/70">
                        Google Pay, PhonePe, Paytm
                      </div>
                    </div>
                    <span className="text-2xl">📱</span>
                  </label>

                  {/* Card */}
                  <label
                    className="flex items-center gap-3 p-4 border-2 rounded-2xl cursor-pointer hover:bg-white/10 transition-all duration-300"
                    style={{
                      borderColor:
                        selectedPayment === "card" ? "#D92E2E" : "#E5E7EB",
                    }}
                  >
                    <input
                      type="radio"
                      name="payment"
                      value="card"
                      checked={selectedPayment === "card"}
                      onChange={(e) => setSelectedPayment(e.target.value)}
                      className="w-4 h-4 text-[#D92E2E] focus:ring-[#D92E2E]"
                    />
                    <div className="grow">
                      <div className="font-semibold text-[#2B2B2B]">Card</div>
                      <div className="text-sm text-[#2B2B2B]/70">
                        Credit or Debit card
                      </div>
                    </div>
                    <span className="text-2xl">💳</span>
                  </label>
                </div>
              </div>

              {/* Bill Details */}
              <div className="bg-white/15 backdrop-blur-2xl border border-white/30 rounded-3xl shadow-xl p-6">
                <h2 className="text-lg font-bold text-[#2B2B2B] mb-4">
                  Bill Details
                </h2>
                <div className="space-y-3">
                  <div className="flex justify-between text-[#2B2B2B]">
                    <span>Item Total</span>
                    <span>₹{itemTotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-[#2B2B2B]">
                    <span>Delivery Fee</span>
                    <span>₹{deliveryFee.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-[#2B2B2B]">
                    <span>GST (5%)</span>
                    <span>₹{gstAmount.toFixed(2)}</span>
                  </div>
                  <div className="border-t border-white/30 pt-3 mt-3">
                    <div className="flex justify-between text-lg font-bold text-[#2B2B2B]">
                      <span>To Pay</span>
                      <span>₹{totalAmount.toFixed(2)}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Order Button */}
              <button
                onClick={handleOrderNow}
                className="w-full bg-[#D92E2E] text-white font-bold py-4 rounded-full hover:bg-[#C02828] transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105"
              >
                Place Order
              </button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CartPage;
