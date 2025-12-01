"use client";
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-[#E59A01] dark:bg-gray-950 font-sans text-gray-800 dark:text-gray-100 pt-6 transition-colors duration-500">
      <Navbar />

      {/* Hero Section */}
      <section className="relative px-8 py-20 max-w-7xl mx-auto text-center">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-4xl bg-gradient-to-b from-white/10 to-transparent rounded-full blur-3xl -z-10 pointer-events-none"></div>
        <h1 className="text-5xl md:text-7xl font-bold text-[#2B2B2B] dark:text-white mb-6 leading-tight drop-shadow-lg">
          Made in <span className="text-[#D92E2E]">Bemetara</span>, <br />
          for the people of <span className="text-[#D92E2E]">Bemetara</span>.
        </h1>
        <p className="text-xl md:text-2xl text-[#2B2B2B] dark:text-gray-300 max-w-3xl mx-auto leading-relaxed font-medium">
          DELIGRO is not just a food delivery service. <br />
          It is Bemetara’s own local food delivery platform, built with love,
          pride, and dedication by the people of our city for our own community.
        </p>
        <div className="mt-8 inline-block px-6 py-2 bg-white/20 backdrop-blur-md border border-white/30 rounded-full text-sm font-semibold text-[#2B2B2B] dark:text-white shadow-lg">
          We understand Bemetara’s tastes, lifestyle, and emotions better than
          anyone—because we belong here.
        </div>
      </section>

      {/* Our Story */}
      <section className="px-8 py-16 max-w-5xl mx-auto">
        <div className="bg-white/15 backdrop-blur-2xl border border-white/30 p-10 rounded-[3rem] shadow-2xl relative overflow-hidden group hover:shadow-orange-500/20 transition duration-500">
          <div className="absolute -right-20 -top-20 w-64 h-64 bg-[#D92E2E]/20 rounded-full blur-3xl group-hover:bg-[#D92E2E]/30 transition duration-500"></div>
          <h2 className="text-3xl font-bold text-[#2B2B2B] dark:text-white mb-6 flex items-center gap-3">
            <span className="text-4xl">⭐</span> Our Story
          </h2>
          <p className="text-lg text-[#2B2B2B] dark:text-gray-200 mb-6 leading-relaxed">
            DELIGRO was born from a simple idea:
          </p>
          <blockquote className="text-2xl font-bold text-[#D92E2E] italic mb-8 border-l-4 border-[#D92E2E] pl-6 py-2 bg-white/10 rounded-r-xl">
            “Why should Bemetara wait for big apps when we can create our own?”
          </blockquote>
          <p className="text-lg text-[#2B2B2B] dark:text-gray-200 leading-relaxed">
            Big food delivery apps often ignore small cities. So we decided to
            build something better—faster, more personal, and fully dedicated to
            our local restaurants and customers.
            <br />
            <br />
            From concept to code, from design to delivery—
            <span className="font-bold text-[#D92E2E]">
              DELIGRO is proudly built by Bemetara’s youth.
            </span>
          </p>
        </div>
      </section>

      {/* What We Offer */}
      <section className="px-8 py-16 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-[#2B2B2B] dark:text-white mb-12">
          ⭐ What We Offer{" "}
          <span className="text-lg font-normal block mt-2 text-gray-600 dark:text-gray-400">
            (Exclusively for Bemetara)
          </span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              title: "Local Restaurants at One Place",
              desc: "Discover the real taste of Bemetara—from street food to popular family restaurants.",
              icon: "🏙️",
            },
            {
              title: "Fast Local Delivery",
              desc: "Our delivery partners know the routes, shortcuts, and local areas perfectly.",
              icon: "🚀",
            },
            {
              title: "Affordable Delivery Charges",
              desc: "Because we don’t want food delivery to feel expensive for local people.",
              icon: "💰",
            },
            {
              title: "Easy to Use",
              desc: "Simple, clean interface designed for all age groups.",
              icon: "📱",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-white/10 backdrop-blur-xl border border-white/20 p-8 rounded-3xl hover:bg-white/20 transition duration-300 flex items-start gap-6 group"
            >
              <div className="text-5xl group-hover:scale-110 transition duration-300">
                {item.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#2B2B2B] dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-[#2B2B2B] dark:text-gray-300 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose DELIGRO */}
      <section className="px-8 py-16 max-w-5xl mx-auto">
        <div className="bg-gradient-to-br from-[#D92E2E] to-[#b91c1c] p-10 rounded-[3rem] shadow-2xl text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-full h-full bg-[url('/img/pattern.png')] opacity-10"></div>
          <h2 className="text-3xl font-bold mb-8 text-center">
            ⭐ Why Choose DELIGRO?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-12 max-w-3xl mx-auto">
            {[
              "Bemetara’s Own Startup",
              "Supporting Local Restaurants & Local Riders",
              "Faster Delivery Within City Limits",
              "Affordable Pricing",
              "Friendly, local customer support",
              "Designed for local needs, not generic features",
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center text-[#D92E2E] font-bold text-xs shrink-0">
                  ✔
                </div>
                <span className="font-medium text-lg">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="px-8 py-16 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white/15 backdrop-blur-2xl border border-white/30 p-10 rounded-3xl shadow-xl flex flex-col h-full">
          <h2 className="text-3xl font-bold text-[#2B2B2B] dark:text-white mb-6">
            ⭐ Our Vision
          </h2>
          <p className="text-lg text-[#2B2B2B] dark:text-gray-200 leading-relaxed flex-grow">
            To become Bemetara’s most trusted and loved food delivery partner,
            and expand step-by-step to nearby towns—only when Bemetara itself is
            fully satisfied.
          </p>
        </div>
        <div className="bg-white/15 backdrop-blur-2xl border border-white/30 p-10 rounded-3xl shadow-xl flex flex-col h-full">
          <h2 className="text-3xl font-bold text-[#2B2B2B] dark:text-white mb-6">
            ⭐ Our Mission
          </h2>
          <p className="text-lg text-[#2B2B2B] dark:text-gray-200 mb-4">
            To empower:
          </p>
          <ul className="list-disc list-inside text-[#2B2B2B] dark:text-gray-200 space-y-2 mb-6 ml-4">
            <li>Local Restaurants</li>
            <li>Local Delivery Partners</li>
            <li>Local Customers</li>
          </ul>
          <p className="text-lg text-[#2B2B2B] dark:text-gray-200 font-medium">
            And build a digital ecosystem that keeps Bemetara growing.
          </p>
        </div>
      </section>

      {/* Our Promise */}
      <section className="px-8 py-16 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-[#2B2B2B] dark:text-white mb-8">
          ⭐ Our Promise
        </h2>
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {["Local", "Honest", "Affordable", "Fast", "Community-first"].map(
            (word, idx) => (
              <span
                key={idx}
                className="px-6 py-2 bg-white/20 backdrop-blur-md border border-white/30 rounded-full text-[#2B2B2B] dark:text-white font-bold shadow-md"
              >
                {word}
              </span>
            )
          )}
        </div>
        <p className="text-xl text-[#2B2B2B] dark:text-gray-300 italic">
          Because DELIGRO is not just a brand — it’s Bemetara’s initiative.
        </p>
      </section>

      {/* Footer Note */}
      <section className="px-8 pb-20 pt-10 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#D92E2E] mb-4 drop-shadow-sm">
          🧡 DELIGRO
        </h2>
        <p className="text-2xl font-bold text-[#2B2B2B] dark:text-white mb-8">
          From Bemetara, For Bemetara.
        </p>
        <button className="px-10 py-4 bg-[#D92E2E] text-white rounded-full font-bold text-lg shadow-xl hover:bg-[#b91c1c] transition transform hover:scale-105 hover:shadow-2xl">
          Let’s grow our city together. 🚀
        </button>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;
