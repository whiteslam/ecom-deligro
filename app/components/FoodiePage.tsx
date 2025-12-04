"use client";
import React, { useState, useLayoutEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Navbar from "./Navbar";
import Footer from "./Footer";
import RestaurantCard from "./RestaurantCard";
import HeroSlider from "./HeroSlider";
import { restaurantsData } from "../data/restaurants";
import SplashScreen from "./SplashScreen";

// Global variable to track splash screen state across client-side navigations
let hasShownSplash = false;

const FoodiePage = () => {
  const router = useRouter();
  // Initialize loading state based on whether splash has been shown in this memory session
  const [isLoading, setIsLoading] = useState(!hasShownSplash);
  // const [showLocationPopup, setShowLocationPopup] = useState(false);

  const handleSplashFinish = () => {
    setIsLoading(false);
    hasShownSplash = true;
  };

  const handleOrderNow = () => {
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
    if (isLoggedIn) {
      router.push("/order");
    } else {
      router.push("/login");
    }
  };

  return (
    <div className="min-h-screen bg-[#E59A01] dark:bg-gray-950 font-sans text-gray-800 dark:text-gray-100 pt-6 transition-colors duration-500 overflow-hidden relative">
      {/* Splash Screen Overlay */}
      {isLoading && <SplashScreen onFinish={handleSplashFinish} />}

      {/* Navbar */}
      <Navbar />

      {/* Hero Slider Section */}
      <section className="px-4 md:px-8 pt-6 pb-2 max-w-7xl mx-auto">
        <HeroSlider />
      </section>

      {/* Hero Section with Animated Background */}
      <header className="relative px-4 md:px-8 pt-2 pb-8 md:pb-12 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-12">
        {/* Animated Gradient Orbs */}
        <div className="absolute top-20 left-10 w-64 md:w-96 h-64 md:h-96 bg-gradient-to-br from-[#D92E2E]/20 to-orange-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-60 md:w-80 h-60 md:h-80 bg-gradient-to-tl from-yellow-400/20 to-[#D92E2E]/20 rounded-full blur-3xl animate-pulse [animation-delay:1s]"></div>
        <div className="flex-1 space-y-4 md:space-y-6 z-10 text-center md:text-left">
          <h1 className="text-4xl md:text-7xl font-extrabold leading-tight text-[#2B2B2B] dark:text-white">
            Desire{" "}
            <span className="relative inline-block">
              <span className="relative z-10 text-white bg-gradient-to-r from-[#D92E2E] to-orange-500 px-4 md:px-6 py-1 md:py-2 rounded-full shadow-2xl transform -rotate-2 inline-block hover:rotate-0 transition-transform duration-300">
                Food
              </span>
            </span>{" "}
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2B2B2B] via-[#D92E2E] to-orange-500 dark:from-white dark:via-[#D92E2E] dark:to-orange-400">
              for Your Taste
            </span>
          </h1>
          <p className="text-base md:text-xl text-[#2B2B2B] dark:text-gray-300 max-w-md mx-auto md:mx-0 leading-relaxed">
            Bringing delicious meals from Bemetara's best restaurants straight
            to your door.{" "}
            <span className="font-bold text-[#D92E2E]">
              Fast, Fresh & Reliable.
            </span>
          </p>
        </div>
        {/* Right Column: Interactive Cards */}
        <div className="flex-1 w-full flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6 justify-center md:justify-center mt-6 sm:mt-8 md:mt-0">
          {/* Order Food Card */}
          <div
            onClick={() => router.push("/order")}
            className="group relative flex-1 bg-white/10 backdrop-blur-xl border border-white/20 p-4 sm:p-5 md:p-6 rounded-[1.5rem] sm:rounded-[2rem] shadow-2xl cursor-pointer hover:bg-white/20 transition-all duration-300 hover:-translate-y-1 sm:hover:-translate-y-2 hover:shadow-orange-500/20 min-h-[160px] sm:min-h-[200px] md:min-h-[260px] flex flex-col justify-between overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-orange-500 rounded-full flex items-center justify-center text-base sm:text-xl md:text-2xl mb-2 sm:mb-3 md:mb-4 shadow-lg group-hover:scale-110 transition-transform">
                🍔
              </div>
              <h3 className="text-base sm:text-lg md:text-xl font-bold text-white mb-1">
                Order Food
              </h3>
              <p className="text-white/80 text-xs sm:text-sm leading-tight sm:leading-normal">
                Hungry? Get hot & fresh meals delivered in minutes! 🚀
              </p>
            </div>
            <div className="relative z-10 mt-2 sm:mt-4 flex items-center text-orange-400 font-bold text-xs sm:text-sm group-hover:translate-x-2 transition-transform">
              Order Now <span className="ml-1 sm:ml-2">→</span>
            </div>
          </div>

          {/* Other Services Card */}
          <div
            onClick={() => router.push("/service")}
            className="group relative flex-1 bg-white/10 backdrop-blur-xl border border-white/20 p-4 sm:p-5 md:p-6 rounded-[1.5rem] sm:rounded-[2rem] shadow-2xl cursor-pointer hover:bg-white/20 transition-all duration-300 hover:-translate-y-1 sm:hover:-translate-y-2 hover:shadow-blue-500/20 min-h-[160px] sm:min-h-[200px] md:min-h-[260px] flex flex-col justify-between overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-blue-500 rounded-full flex items-center justify-center text-base sm:text-xl md:text-2xl mb-2 sm:mb-3 md:mb-4 shadow-lg group-hover:scale-110 transition-transform">
                📦
              </div>
              <h3 className="text-base sm:text-lg md:text-xl font-bold text-white mb-1">
                Other Services
              </h3>
              <p className="text-white/80 text-xs sm:text-sm leading-tight sm:leading-normal">
                Package delivery, laundry, pharmacy & more.
              </p>
            </div>
            <div className="relative z-10 mt-2 sm:mt-4 flex items-center text-blue-400 font-bold text-xs sm:text-sm group-hover:translate-x-2 transition-transform">
              Explore <span className="ml-1 sm:ml-2">→</span>
            </div>
          </div>
        </div>{" "}
      </header>

      {/* Features Section with Enhanced Cards */}
      <section className="px-8 py-20 max-w-7xl mx-auto relative">
        {/* Background Decorative Elements */}
        <div className="absolute top-1/2 left-0 w-72 h-72 bg-gradient-to-br from-orange-400/10 to-[#D92E2E]/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/4 right-0 w-64 h-64 bg-gradient-to-tl from-yellow-400/10 to-orange-400/10 rounded-full blur-3xl"></div>

        <div className="relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#2B2B2B] dark:text-white mb-4">
              Why Choose{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D92E2E] to-orange-500">
                DELIGRO
              </span>
            </h2>
            <p className="text-lg text-[#2B2B2B] dark:text-gray-300 max-w-2xl mx-auto">
              Experience the difference with our premium delivery service
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Quality Food",
                icon: "🥗",
                desc: "Freshly prepared meals from trusted restaurants, delivered with care.",
                gradient: "from-green-400 to-emerald-600",
              },
              {
                title: "Fast Delivery",
                icon: "🚀",
                desc: "Follow the quickest routes in Bemetara to deliver your order in time.",
                gradient: "from-blue-400 to-indigo-600",
              },
              {
                title: "Easy Payment",
                icon: "💳",
                desc: "Seamless and secure payment process with multiple payment options.",
                gradient: "from-purple-400 to-violet-600",
              },
              {
                title: "10k+ Orders Delivered",
                icon: "📦",
                desc: "10k orders delivered successfully with care.",
                gradient: "from-orange-400 to-red-600",
              },
            ].map((feature, idx) => (
              <div
                key={idx}
                className="group relative bg-white/15 backdrop-blur-xl border border-white/30 p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 flex flex-col items-center text-center hover:-translate-y-2"
              >
                {/* Gradient Background on Hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity duration-500`}
                ></div>

                {/* Icon with Animated Background */}
                <div className="relative mb-6">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} rounded-2xl blur-xl opacity-50 group-hover:opacity-100 transition-opacity duration-300`}
                  ></div>
                  <div className="relative w-20 h-20 bg-white dark:bg-gray-800 rounded-2xl flex items-center justify-center text-4xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                </div>

                <h3 className="relative text-xl font-bold mb-3 text-[#2B2B2B] dark:text-white group-hover:text-[#D92E2E] transition-colors">
                  {feature.title}
                </h3>
                <p className="relative text-[#2B2B2B] dark:text-gray-300 text-sm leading-relaxed mb-4">
                  {feature.desc}
                </p>

                {/* Feature Badge */}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Restaurants with Enhanced Cards */}
      <section className="px-8 py-20 max-w-7xl mx-auto text-center relative">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 left-1/4 w-80 h-80 bg-gradient-to-br from-[#D92E2E]/10 to-orange-400/10 rounded-full blur-3xl"></div>

        <div className="relative z-10">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-4">
            Popular{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D92E2E] to-orange-500">
              Restaurants
            </span>
          </h2>
          <p className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto mb-12">
            Explore the best restaurants in your area, offering a wide variety
            of cuisines and dining experiences.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {restaurantsData.slice(0, 3).map((restaurant) => (
              <RestaurantCard key={restaurant.id} restaurant={restaurant} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us - Enhanced */}
      <section className="px-8 py-20 max-w-7xl mx-auto my-12 relative">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[#D92E2E]/10 to-yellow-400/10 rounded-full blur-3xl"></div>

        <div className="relative flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1 relative h-[400px] w-full">
            <div className="absolute inset-0 flex items-center justify-center">
              {/* Decorative Gradient Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-400/20 to-[#D92E2E]/20 rounded-3xl blur-2xl"></div>
              <Image
                src="/img/three_phones_orange_bg.png"
                alt="Deligro App Interface on Multiple Devices"
                fill
                className="object-contain drop-shadow-2xl relative z-10"
              />
            </div>
          </div>
          <div className="flex-1 space-y-8">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white">
              Why People{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D92E2E] to-orange-500">
                Choose us?
              </span>
            </h2>
            <div className="space-y-6">
              {[
                {
                  title: "Bemetara's Only Trusted Delivery Service",
                  icon: "🏙️",
                  desc: "Exclusive, local, and built just for the people of Bemetara — no competitors, no delays, no confusion.",
                  gradient: "from-blue-400 to-indigo-600",
                },
                {
                  title: "Fast & Reliable Delivery Every Time",
                  icon: "⚡",
                  desc: "Our riders know every street and shortcut, ensuring quick, safe, and consistently on-time deliveries.",
                  gradient: "from-yellow-400 to-orange-500",
                },
                {
                  title: "All Your Favorites Delivered to Your Doorstep",
                  icon: "🛍️",
                  desc: "From top local restaurants to daily essentials, Deligro brings the widest range of choices in one app.",
                  gradient: "from-green-400 to-emerald-600",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="group relative flex gap-6 items-start p-6 rounded-3xl transition-all duration-500 border border-transparent hover:bg-white/15 hover:backdrop-blur-xl hover:border-white/30 hover:shadow-2xl hover:-translate-x-2"
                >
                  {/* Gradient Background on Hover */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${item.gradient} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-500`}
                  ></div>

                  {/* Icon with Gradient Background */}
                  <div className="relative flex-shrink-0">
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${item.gradient} rounded-2xl blur-lg opacity-0 group-hover:opacity-70 transition-opacity duration-300`}
                    ></div>
                    <div className="relative w-16 h-16 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl flex items-center justify-center text-4xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                      {item.icon}
                    </div>
                  </div>

                  <div className="relative">
                    <h3 className="text-xl font-bold mb-2 text-[#2B2B2B] dark:text-white group-hover:text-[#D92E2E] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-[#2B2B2B] dark:text-gray-300 text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Customer Feedback - Enhanced */}
      <section className="px-8 py-20 max-w-7xl mx-auto text-center relative">
        {/* Background Decorative Elements */}
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-br from-orange-400/10 to-[#D92E2E]/10 rounded-full blur-3xl"></div>

        <div className="relative z-10">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#2B2B2B] dark:text-white mb-4">
            Loved by Families{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D92E2E] to-orange-500">
              Across Bemetara
            </span>
          </h2>
          <p className="text-lg text-[#2B2B2B] dark:text-gray-300 mb-12 max-w-2xl mx-auto">
            Real experience from people who trust Deligro Delivery every day.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: " Shantanu Goswami",
                location: "Bemetara",
                text: "Deligro has been a staple in our kitchen for over 10 years. The authentic taste and purity is unmatched.",
                icon: "👩",
                image: "/img/reviews/shantanu_goswami.png",
                gradient: "from-purple-400 to-violet-600",
              },
              {
                name: "Deepak Yadav",
                location: "Bemetara",
                text: "The quality speaks for itself. My family trusts Deligro for all our cooking needs. Highly recommended!",
                icon: "👨",
                image: "/img/reviews/deepak_yadav.png",
                gradient: "from-blue-400 to-indigo-600",
              },
              {
                name: "Mukesh Goswami",
                location: "Bemetara",
                text: "Pure, natural, and healthy - exactly what every family needs. Thank you Deligro for maintaining such high standards.",
                icon: "👩",
                image: "/img/reviews/mukesh_goswami.jpg",
                gradient: "from-orange-400 to-red-600",
              },
            ].map((review, idx) => (
              <div
                key={idx}
                className="group relative bg-white/15 backdrop-blur-xl border border-white/30 p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 flex flex-col items-center text-center hover:-translate-y-2"
              >
                {/* Gradient Background on Hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${review.gradient} opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity duration-500`}
                ></div>

                {/* Avatar with Gradient Ring */}
                <div className="relative mb-4">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${review.gradient} rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 scale-110`}
                  ></div>
                  <div className="relative w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center text-4xl shadow-xl overflow-hidden ring-4 ring-white/20 group-hover:ring-white/40 transition-all">
                    {review.image ? (
                      <Image
                        src={review.image}
                        alt={review.name}
                        fill
                        className="object-cover"
                      />
                    ) : (
                      review.icon
                    )}
                  </div>
                </div>

                <h3 className="relative text-xl font-bold text-[#2B2B2B] dark:text-white mb-1 group-hover:text-[#D92E2E] transition-colors">
                  {review.name}
                </h3>
                <div className="relative flex items-center gap-1 mb-6">
                  <span className="text-gray-500 text-sm">
                    {review.location}
                  </span>
                  <span className="px-2 py-0.5 bg-white/20 dark:bg-white/10 rounded-full text-xs font-medium border border-white/20 ml-2">
                    Verified
                  </span>
                </div>

                {/* Quote Icon */}
                <div className="relative text-4xl text-[#D92E2E]/20 mb-2">
                  "
                </div>

                <p className="relative text-[#2B2B2B] dark:text-gray-300 italic leading-relaxed">
                  {review.text}
                </p>

                {/* Star Rating */}
                <div className="relative mt-6 flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-lg">
                      ⭐
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      {/* Footer */}
      <Footer />

      {/* Under Construction Sticky Note */}
      <div className="fixed bottom-6 right-6 z-50 bg-red-600 text-white px-4 py-2 rounded-lg shadow-2xl transform rotate-3 border border-red-400 font-bold text-sm animate-bounce">
        🚧 Site Under Construction
      </div>
      {/* Location Popup */}
      {/* {showLocationPopup && (
        <LocationPopup onClose={() => setShowLocationPopup(false)} />
      )} */}
    </div>
  );
};

export default FoodiePage;
