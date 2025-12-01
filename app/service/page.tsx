"use client";
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";

const ServicePage = () => {
  const services = [
    {
      title: "Tiffin Service Delivery",
      desc: "Daily and monthly home-made food subscriptions. Taste the warmth of home, delivered to your office or doorstep.",
      icon: "🍱",
      gradient: "from-orange-400 to-red-500",
      features: ["Daily Delivery", "Monthly Plans", "Home-made Quality"],
    },
    {
      title: "Parcel Pickup & Drop",
      desc: "Local courier for documents, small parcels, gifts, medicines, or even forgotten keys. Fast and secure.",
      icon: "📦",
      gradient: "from-blue-400 to-indigo-600",
      features: ["Same Day", "Secure", "Track Live"],
    },
    {
      title: "Grocery & Essentials",
      desc: "Fresh vegetables, dairy, fruits, snacks, and household items delivered in minutes.",
      icon: "🛒",
      gradient: "from-green-400 to-emerald-600",
      features: ["Fresh Daily", "Quick Delivery", "Best Prices"],
    },
    {
      title: "Bakery & Sweets",
      desc: "Cakes, pastries, sweets, juices, shakes, and ice creams for your cravings and celebrations.",
      icon: "🍰",
      gradient: "from-pink-400 to-rose-600",
      features: ["Fresh Baked", "Custom Orders", "Party Packs"],
    },
    {
      title: "Medicine Delivery",
      desc: "Over-the-counter (OTC) medicines delivered urgently when you need them the most.",
      icon: "💊",
      gradient: "from-red-400 to-pink-600",
      features: ["OTC Only", "Urgent Delivery", "Verified"],
    },
    {
      title: "Catering & Bulk Orders",
      desc: "Planning a birthday party, small function, or event? We handle the food so you can enjoy.",
      icon: "🎉",
      gradient: "from-purple-400 to-violet-600",
      features: ["Events", "Bulk Orders", "Custom Menu"],
    },
    {
      title: "Cake & Flower Surprise",
      desc: "Send love to your dear ones with our special gifting packages for birthdays and anniversaries.",
      icon: "🎁",
      gradient: "from-yellow-400 to-orange-500",
      features: ["Gift Packs", "Surprise Delivery", "Special Occasions"],
    },
    {
      title: "Home Chef Services",
      desc: "Supporting local talent! Order authentic dishes prepared by Bemetara's best home cooks.",
      icon: "👩‍🍳",
      gradient: "from-teal-400 to-cyan-600",
      features: ["Local Chefs", "Authentic Taste", "Support Local"],
    },
  ];

  return (
    <div className="min-h-screen bg-[#E59A01] dark:bg-gray-950 font-sans text-gray-800 dark:text-gray-100 pt-6 transition-colors duration-500 overflow-hidden">
      <Navbar />

      {/* Hero Section with Animated Background */}
      <section className="relative px-8 py-24 max-w-7xl mx-auto text-center">
        {/* Animated Gradient Orbs */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-[#D92E2E]/30 to-orange-400/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-tl from-yellow-400/30 to-[#D92E2E]/30 rounded-full blur-3xl animate-pulse delay-1000"></div>

        <div className="relative z-10">
          <div className="inline-block mb-6">
            <span className="px-6 py-2 bg-white/20 backdrop-blur-md border border-white/30 rounded-full text-sm font-bold text-[#2B2B2B] dark:text-white shadow-lg">
              ✨ 8+ Services Available
            </span>
          </div>

          <h1 className="text-6xl md:text-7xl font-extrabold text-[#2B2B2B] dark:text-white mb-6 leading-tight">
            Everything You Need,
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D92E2E] to-orange-500">
              One Platform
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-[#2B2B2B] dark:text-gray-200 font-medium mb-8 max-w-3xl mx-auto leading-relaxed">
            From daily tiffins to surprise gifts, from groceries to medicines—
            <span className="font-bold text-[#D92E2E]">
              {" "}
              DELIGRO delivers it all
            </span>{" "}
            across Bemetara.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <Link href="/order">
              <button className="px-8 py-4 bg-[#D92E2E] text-white rounded-full font-bold shadow-2xl hover:bg-[#b91c1c] transition transform hover:scale-105 hover:shadow-[#D92E2E]/50">
                Order Now →
              </button>
            </Link>
            <button className="px-8 py-4 bg-white/20 backdrop-blur-md border border-white/30 text-[#2B2B2B] dark:text-white rounded-full font-bold shadow-xl hover:bg-white/30 transition">
              How It Works
            </button>
          </div>
        </div>
      </section>

      {/* Services Grid with Creative Cards */}
      <section className="px-8 py-16 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#2B2B2B] dark:text-white mb-4">
            Our <span className="text-[#D92E2E]">Premium</span> Services
          </h2>
          <p className="text-lg text-[#2B2B2B] dark:text-gray-300 max-w-2xl mx-auto">
            Designed exclusively for Bemetara, powered by local love
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="group relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              {/* Gradient Background on Hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
              ></div>

              {/* Content */}
              <div className="relative p-6 flex flex-col h-full">
                {/* Icon with Animated Background */}
                <div className="relative mb-6">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${service.gradient} rounded-2xl blur-xl opacity-50 group-hover:opacity-100 transition-opacity`}
                  ></div>
                  <div className="relative w-16 h-16 bg-white/90 dark:bg-gray-800/90 rounded-2xl flex items-center justify-center text-4xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-[#2B2B2B] dark:text-white mb-3 group-hover:text-[#D92E2E] transition-colors">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-[#2B2B2B] dark:text-gray-300 leading-relaxed mb-4 flex-grow">
                  {service.desc}
                </p>

                {/* Features Pills */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {service.features.map((feature, fIdx) => (
                    <span
                      key={fIdx}
                      className="px-3 py-1 bg-white/20 dark:bg-white/10 backdrop-blur-sm rounded-full text-xs font-medium text-[#2B2B2B] dark:text-gray-200 border border-white/20"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <button className="w-full py-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl text-sm font-bold text-[#2B2B2B] dark:text-white transition group-hover:border-[#D92E2E] group-hover:text-[#D92E2E]">
                  Learn More →
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="px-8 py-20 max-w-6xl mx-auto">
        <div className="bg-gradient-to-br from-[#D92E2E] to-orange-600 rounded-[3rem] p-12 relative overflow-hidden shadow-2xl">
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-black/10 rounded-full blur-2xl"></div>

          <div className="relative z-10 text-white text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Why Bemetara Loves DELIGRO
            </h2>
            <p className="text-xl mb-12 max-w-2xl mx-auto opacity-90">
              We're not just a delivery service—we're your local partner in
              making life easier
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { icon: "⚡", label: "Fast Delivery", desc: "Within minutes" },
                { icon: "🏙️", label: "100% Local", desc: "Made in Bemetara" },
                { icon: "💰", label: "Best Prices", desc: "No hidden fees" },
                { icon: "❤️", label: "Trusted", desc: "10k+ orders" },
              ].map((item, idx) => (
                <div key={idx} className="text-center">
                  <div className="text-5xl mb-3">{item.icon}</div>
                  <div className="font-bold text-lg mb-1">{item.label}</div>
                  <div className="text-sm opacity-80">{item.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Closing CTA Section */}
      <section className="px-8 py-20 max-w-5xl mx-auto text-center">
        <div className="bg-white/15 backdrop-blur-2xl border border-white/30 p-12 rounded-[3rem] shadow-2xl relative overflow-hidden">
          {/* Animated Gradient Orbs */}
          <div className="absolute -left-20 -bottom-20 w-64 h-64 bg-gradient-to-br from-[#D92E2E]/30 to-yellow-400/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -right-20 -top-20 w-64 h-64 bg-gradient-to-tl from-orange-400/30 to-[#D92E2E]/30 rounded-full blur-3xl animate-pulse delay-1000"></div>

          <div className="relative z-10">
            <div className="text-6xl mb-6">🧡</div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#2B2B2B] dark:text-white mb-4">
              DELIGRO
            </h2>
            <p className="text-2xl md:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-[#D92E2E] to-orange-500 font-bold italic mb-8">
              "Making everyday life easier for Bemetara."
            </p>

            <p className="text-lg text-[#2B2B2B] dark:text-gray-200 mb-10 max-w-2xl mx-auto">
              Join thousands of happy customers who trust DELIGRO for their
              daily needs. From food to flowers, we deliver happiness!
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/order">
                <button className="px-10 py-4 bg-[#D92E2E] text-white rounded-full font-bold text-lg shadow-2xl hover:bg-[#b91c1c] transition transform hover:scale-105 hover:shadow-[#D92E2E]/50">
                  Start Ordering Now 🚀
                </button>
              </Link>
              <Link href="/about">
                <button className="px-10 py-4 bg-white/20 backdrop-blur-md border border-white/30 text-[#2B2B2B] dark:text-white rounded-full font-bold text-lg shadow-xl hover:bg-white/30 transition">
                  Our Story
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServicePage;
