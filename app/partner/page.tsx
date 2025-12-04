"use client";
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";
import Link from "next/link";

const PartnerPage = () => {
  return (
    <div className="min-h-screen bg-[#E59A01] dark:bg-gray-950 font-sans text-gray-800 dark:text-gray-100 pt-6 transition-colors duration-500 overflow-hidden relative">
      <Navbar />

      <main className="px-4 md:px-8 py-10 max-w-7xl mx-auto">
        {/* Hero Section with Form */}
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 mb-20 pt-6 md:pt-10">
          {/* Left Content */}
          <div className="flex-1 text-center md:text-left z-10">
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 drop-shadow-lg leading-tight">
              Partner with <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300">
                Deligro
              </span>
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed max-w-2xl mx-auto md:mx-0">
              Grow your business with Bemetara's most trusted delivery partner.
              Reach more customers, increase sales, and enjoy seamless delivery
              management.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 mb-10">
              {[
                { title: "Increase Revenue", icon: "💰" },
                { title: "Easy Management", icon: "📱" },
                { title: "Marketing Support", icon: "📢" },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-2xl text-center hover:bg-white/20 transition-colors"
                >
                  <div className="text-3xl mb-2">{item.icon}</div>
                  <h3 className="font-bold text-white text-sm">{item.title}</h3>
                </div>
              ))}
            </div>
          </div>

          {/* Right Form - Replaces Image */}
          <div className="flex-1 w-full max-w-md relative z-10">
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#E59A01]/30 to-[#D92E2E]/30 blur-3xl rounded-full transform scale-90 opacity-60"></div>

            {/* Gradient Border Wrapper */}
            <div className="p-[1px] rounded-3xl bg-gradient-to-r from-[#E59A01] to-[#D92E2E] shadow-2xl">
              <div className="bg-black rounded-3xl p-8 overflow-hidden h-full">
                <h2 className="text-3xl font-bold text-white mb-2 text-center">
                  Join Deligro
                </h2>
                <p className="text-gray-400 text-center mb-8 text-sm">
                  Start your journey with us today
                </p>

                <form className="space-y-5">
                  <div className="space-y-4">
                    <div className="relative group">
                      <input
                        type="text"
                        placeholder="Restaurant Name"
                        className="w-full px-5 py-4 rounded-xl bg-[#1A1A1A] border border-white/10 text-white placeholder-white/70 focus:outline-none focus:border-[#E59A01] focus:bg-[#252525] transition-all duration-300"
                      />
                    </div>
                    <div className="relative group">
                      <input
                        type="text"
                        placeholder="Owner Name"
                        className="w-full px-5 py-4 rounded-xl bg-[#1A1A1A] border border-white/10 text-white placeholder-white/70 focus:outline-none focus:border-[#E59A01] focus:bg-[#252525] transition-all duration-300"
                      />
                    </div>
                    <div className="relative group">
                      <input
                        type="email"
                        placeholder="Email Address"
                        className="w-full px-5 py-4 rounded-xl bg-[#1A1A1A] border border-white/10 text-white placeholder-white/70 focus:outline-none focus:border-[#E59A01] focus:bg-[#252525] transition-all duration-300"
                      />
                    </div>
                    <div className="relative group">
                      <input
                        type="tel"
                        placeholder="Phone Number"
                        className="w-full px-5 py-4 rounded-xl bg-[#1A1A1A] border border-white/10 text-white placeholder-white/70 focus:outline-none focus:border-[#E59A01] focus:bg-[#252525] transition-all duration-300"
                      />
                    </div>
                  </div>

                  <button className="w-full py-4 bg-gradient-to-r from-[#E59A01] to-[#D92E2E] text-white font-bold rounded-xl hover:shadow-lg hover:shadow-orange-500/20 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 mt-6 text-lg tracking-wide">
                    Submit Application
                  </button>

                  <div className="text-center mt-6 pt-6 border-t border-white/10">
                    <p className="text-sm text-gray-400">
                      Already a partner?{" "}
                      <Link
                        href="/login"
                        className="text-[#E59A01] font-bold hover:text-[#D92E2E] transition-colors"
                      >
                        Login here
                      </Link>
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* Background Elements */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl -z-0 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-black/5 rounded-full blur-3xl -z-0 pointer-events-none"></div>
      </main>

      <Footer />
    </div>
  );
};

export default PartnerPage;
