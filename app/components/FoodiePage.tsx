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

const FoodiePage = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  // const [showLocationPopup, setShowLocationPopup] = useState(false);

  useLayoutEffect(() => {
    // Check if splash screen has already been shown in this session
    const hasShownSplash = sessionStorage.getItem("hasShownSplash");
    if (hasShownSplash) {
      setIsLoading(false);
    }
  }, []);

  const handleSplashFinish = () => {
    setIsLoading(false);
    sessionStorage.setItem("hasShownSplash", "true");
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
      <header className="relative px-4 md:px-8 pt-2 pb-8 md:pb-12 max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-8 md:gap-12">
        {/* Animated Gradient Orbs */}
        <div className="absolute top-20 left-10 w-64 md:w-96 h-64 md:h-96 bg-gradient-to-br from-[#D92E2E]/20 to-orange-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-60 md:w-80 h-60 md:h-80 bg-gradient-to-tl from-yellow-400/20 to-[#D92E2E]/20 rounded-full blur-3xl animate-pulse [animation-delay:1s]"></div>
        <div className="flex-1 space-y-3 md:space-y-6 z-10 text-center md:text-left">
          <h1 className="text-3xl md:text-7xl font-extrabold leading-tight text-[#2B2B2B] dark:text-white">
            Desire{" "}
            <span className="relative inline-block">
              <span className="relative z-10 text-white bg-gradient-to-r from-[#D92E2E] to-orange-500 px-3 md:px-6 py-1 md:py-2 rounded-full shadow-2xl transform -rotate-2 inline-block hover:rotate-0 transition-transform duration-300 text-2xl md:text-6xl">
                Food
              </span>
            </span>{" "}
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2B2B2B] via-[#D92E2E] to-orange-500 dark:from-white dark:via-[#D92E2E] dark:to-orange-400">
              for Your Taste
            </span>
          </h1>
          <p className="text-sm md:text-xl text-[#2B2B2B] dark:text-gray-300 max-w-md mx-auto md:mx-0 leading-relaxed px-4 md:px-0">
            Bringing delicious meals from Bemetara's best restaurants straight
            to your door.{" "}
            <span className="font-bold text-[#D92E2E]">
              Fast, Fresh & Reliable.
            </span>
          </p>
        </div>
        {/* Right Column: Interactive Cards */}
        <div className="flex-1 w-full grid grid-cols-3 md:grid-cols-3 gap-2 sm:gap-4 md:gap-6 justify-center mt-2 sm:mt-8 md:mt-0">
          {/* Order Food Card */}
          <div
            onClick={() => router.push("/order")}
            className="group relative bg-white/30 md:bg-white/10 backdrop-blur-xl border border-white/40 md:border-white/20 p-3 sm:p-5 md:p-6 rounded-2xl sm:rounded-[2rem] shadow-xl shadow-orange-900/5 md:shadow-xl cursor-pointer hover:bg-white/40 transition-all duration-300 hover:-translate-y-1 sm:hover:-translate-y-2 hover:shadow-orange-500/20 min-h-[140px] sm:min-h-[180px] flex flex-col justify-between overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500"></div>

            {/* Mobile Arrow */}
            <div className="absolute top-5 right-5 md:hidden text-orange-500/50">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path
                  fillRule="evenodd"
                  d="M8.25 3.75H19.5a.75.75 0 01.75.75v11.25a.75.75 0 01-1.5 0V6.31L5.03 20.03a.75.75 0 01-1.06-1.06L17.69 5.25H8.25a.75.75 0 010-1.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>

            <div className="relative z-10">
              <h3 className="text-sm sm:text-base font-extrabold text-gray-800 md:text-white mb-1 leading-none tracking-tight uppercase">
                Order
                <br />
                Food
              </h3>
              <p className="text-gray-500 md:text-white/80 text-xs sm:text-xs font-medium leading-tight line-clamp-2 max-w-[90%]">
                <span className="md:hidden">Cravings? Solved.</span>
                <span className="hidden md:inline">Hot & fresh meals!</span>
              </p>
            </div>
            <div className="absolute -bottom-4 -right-4 md:static md:mt-2 md:flex md:items-center md:text-orange-400 md:font-bold md:text-xs md:group-hover:translate-x-1 md:transition-transform">
              <div className="relative w-16 h-16 md:w-10 md:h-10 transform rotate-[-10deg] md:rotate-0 transition-transform duration-300 group-hover:rotate-0 group-hover:scale-110">
                <Image
                  src="/img/categories/burger.png"
                  alt="Order Food"
                  fill
                  className="object-contain drop-shadow-xl"
                />
              </div>
              <span className="hidden md:inline ml-2">Order Now →</span>
            </div>
          </div>

          {/* Pick & Drop */}
          <div
            onClick={() => router.push("/service")}
            className="group relative bg-white/30 md:bg-white/10 backdrop-blur-xl border border-white/40 md:border-white/20 p-3 sm:p-5 md:p-6 rounded-2xl sm:rounded-[2rem] shadow-xl shadow-blue-900/5 md:shadow-xl cursor-pointer hover:bg-white/40 transition-all duration-300 hover:-translate-y-1 sm:hover:-translate-y-2 hover:shadow-blue-500/20 min-h-[140px] sm:min-h-[180px] flex flex-col justify-between overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500"></div>

            {/* Mobile Arrow */}
            <div className="absolute top-5 right-5 md:hidden text-blue-500/50">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path
                  fillRule="evenodd"
                  d="M8.25 3.75H19.5a.75.75 0 01.75.75v11.25a.75.75 0 01-1.5 0V6.31L5.03 20.03a.75.75 0 01-1.06-1.06L17.69 5.25H8.25a.75.75 0 010-1.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>

            <div className="relative z-10">
              <h3 className="text-sm sm:text-base font-extrabold text-gray-800 md:text-white mb-1 leading-none tracking-tight uppercase">
                Pick &<br />
                Drop
              </h3>
              <p className="text-gray-500 md:text-white/80 text-xs sm:text-xs font-medium leading-tight line-clamp-2 max-w-[90%]">
                <span className="md:hidden">Anything, Anywhere.</span>
                <span className="hidden md:inline">People & Parcels</span>
              </p>
            </div>
            <div className="absolute -bottom-4 -right-4 md:static md:mt-2 md:flex md:items-center md:text-blue-400 md:font-bold md:text-xs md:group-hover:translate-x-1 md:transition-transform">
              <div className="relative w-16 h-16 md:w-10 md:h-10 transform rotate-[-10deg] md:rotate-0 transition-transform duration-300 group-hover:rotate-0 group-hover:scale-110">
                <Image
                  src="/img/hero_rider_3d_v2.png"
                  alt="Pick & Drop"
                  fill
                  className="object-contain drop-shadow-xl"
                />
              </div>
              <span className="hidden md:inline ml-2">Book Now →</span>
            </div>
          </div>

          {/* Grocery */}
          <div
            onClick={() => router.push("/service")}
            className="group relative bg-white/30 md:bg-white/10 backdrop-blur-xl border border-white/40 md:border-white/20 p-3 sm:p-5 md:p-6 rounded-2xl sm:rounded-[2rem] shadow-xl shadow-green-900/5 md:shadow-xl cursor-pointer hover:bg-white/40 transition-all duration-300 hover:-translate-y-1 sm:hover:-translate-y-2 hover:shadow-green-500/20 min-h-[140px] sm:min-h-[180px] flex flex-col justify-between overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500"></div>

            {/* Mobile Arrow */}
            <div className="absolute top-5 right-5 md:hidden text-green-500/50">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path
                  fillRule="evenodd"
                  d="M8.25 3.75H19.5a.75.75 0 01.75.75v11.25a.75.75 0 01-1.5 0V6.31L5.03 20.03a.75.75 0 01-1.06-1.06L17.69 5.25H8.25a.75.75 0 010-1.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>

            <div className="relative z-10">
              <h3 className="text-sm sm:text-base font-extrabold text-gray-800 md:text-white mb-1 leading-none tracking-tight uppercase">
                Grocery
              </h3>
              <p className="text-gray-500 md:text-white/80 text-xs sm:text-xs font-medium leading-tight line-clamp-2 max-w-[90%]">
                <span className="md:hidden">Fresh & Fast.</span>
                <span className="hidden md:inline">Daily essentials</span>
              </p>
            </div>
            <div className="absolute -bottom-4 -right-4 md:static md:mt-2 md:flex md:items-center md:text-green-400 md:font-bold md:text-xs md:group-hover:translate-x-1 md:transition-transform">
              <div className="relative w-16 h-16 md:w-10 md:h-10 transform rotate-[-10deg] md:rotate-0 transition-transform duration-300 group-hover:rotate-0 group-hover:scale-110">
                <Image
                  src="/img/categories/broccoli.png"
                  alt="Grocery"
                  fill
                  className="object-contain drop-shadow-xl"
                />
              </div>
              <span className="hidden md:inline ml-2">Shop Now →</span>
            </div>
          </div>

          {/* Medicine */}
          <div
            onClick={() => router.push("/service")}
            className="group relative bg-white/30 md:bg-white/10 backdrop-blur-xl border border-white/40 md:border-white/20 p-3 sm:p-5 md:p-6 rounded-2xl sm:rounded-[2rem] shadow-xl shadow-red-900/5 md:shadow-xl cursor-pointer hover:bg-white/40 transition-all duration-300 hover:-translate-y-1 sm:hover:-translate-y-2 hover:shadow-red-500/20 min-h-[140px] sm:min-h-[180px] flex flex-col justify-between overflow-hidden"
          >
            {/* Emergency Tag */}
            <div className="hidden md:block absolute top-0 right-0 bg-red-600 text-white text-[10px] sm:text-[10px] font-bold px-3 py-1 rounded-bl-2xl rounded-tr-[2rem] z-20 animate-pulse shadow-md">
              EMERGENCY
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-transparent opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500"></div>

            {/* Mobile Arrow */}
            <div className="absolute top-5 right-5 md:hidden text-red-500/50">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path
                  fillRule="evenodd"
                  d="M8.25 3.75H19.5a.75.75 0 01.75.75v11.25a.75.75 0 01-1.5 0V6.31L5.03 20.03a.75.75 0 01-1.06-1.06L17.69 5.25H8.25a.75.75 0 010-1.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>

            <div className="relative z-10">
              <h3 className="text-sm sm:text-base font-extrabold text-gray-800 md:text-white mb-1 leading-none tracking-tight uppercase">
                Medicine
              </h3>
              <p className="text-gray-500 md:text-white/80 text-xs sm:text-xs font-medium leading-tight line-clamp-2 max-w-[90%]">
                <span className="md:hidden">Health First.</span>
                <span className="hidden md:inline">Fast delivery</span>
              </p>
            </div>
            <div className="absolute -bottom-4 -right-4 md:static md:mt-2 md:flex md:items-center md:text-red-400 md:font-bold md:text-xs md:group-hover:translate-x-1 md:transition-transform">
              <div className="relative w-16 h-16 md:w-10 md:h-10 transform rotate-[-10deg] md:rotate-0 transition-transform duration-300 group-hover:rotate-0 group-hover:scale-110 overflow-hidden rounded-full border-2 border-white/50">
                <Image
                  src="/img/categories/medicine.jpeg"
                  alt="Medicine"
                  fill
                  className="object-cover"
                />
              </div>
              <span className="hidden md:inline ml-2">Order Now →</span>
            </div>
          </div>

          {/* Book Hotels */}
          <div
            onClick={() => router.push("/service")}
            className="group relative bg-white/30 md:bg-white/10 backdrop-blur-xl border border-white/40 md:border-white/20 p-3 sm:p-5 md:p-6 rounded-2xl sm:rounded-[2rem] shadow-xl shadow-purple-900/5 md:shadow-xl cursor-pointer hover:bg-white/40 transition-all duration-300 hover:-translate-y-1 sm:hover:-translate-y-2 hover:shadow-purple-500/20 min-h-[140px] sm:min-h-[180px] flex flex-col justify-between overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500"></div>

            {/* Mobile Arrow */}
            <div className="absolute top-5 right-5 md:hidden text-purple-500/50">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path
                  fillRule="evenodd"
                  d="M8.25 3.75H19.5a.75.75 0 01.75.75v11.25a.75.75 0 01-1.5 0V6.31L5.03 20.03a.75.75 0 01-1.06-1.06L17.69 5.25H8.25a.75.75 0 010-1.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>

            <div className="relative z-10">
              <h3 className="text-sm sm:text-base font-extrabold text-gray-800 md:text-white mb-1 leading-none tracking-tight uppercase">
                Hotels
              </h3>
              <p className="text-gray-500 md:text-white/80 text-xs sm:text-xs font-medium leading-tight line-clamp-2 max-w-[90%]">
                <span className="md:hidden">Stay in Style.</span>
                <span className="hidden md:inline">Book stay</span>
              </p>
            </div>
            <div className="absolute -bottom-4 -right-4 md:static md:mt-2 md:flex md:items-center md:text-purple-400 md:font-bold md:text-xs md:group-hover:translate-x-1 md:transition-transform">
              <div className="text-[5rem] md:text-xl md:bg-purple-500 md:w-10 md:h-10 md:rounded-full md:flex md:items-center md:justify-center md:text-white md:shadow-lg filter drop-shadow-2xl transform rotate-[-10deg] md:rotate-0 transition-transform duration-300 group-hover:rotate-0 group-hover:scale-110">
                🏨
              </div>
              <span className="hidden md:inline ml-2">Book Now →</span>
            </div>
          </div>

          {/* Other Services */}
          <div
            onClick={() => router.push("/service")}
            className="group relative bg-white/30 md:bg-white/10 backdrop-blur-xl border border-white/40 md:border-white/20 p-3 sm:p-5 md:p-6 rounded-2xl sm:rounded-[2rem] shadow-xl shadow-gray-900/5 md:shadow-xl cursor-pointer hover:bg-white/40 transition-all duration-300 hover:-translate-y-1 sm:hover:-translate-y-2 hover:shadow-gray-500/20 min-h-[140px] sm:min-h-[180px] flex flex-col justify-between overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-gray-500/5 to-transparent opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500"></div>

            {/* Mobile Arrow */}
            <div className="absolute top-5 right-5 md:hidden text-gray-500/50">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path
                  fillRule="evenodd"
                  d="M8.25 3.75H19.5a.75.75 0 01.75.75v11.25a.75.75 0 01-1.5 0V6.31L5.03 20.03a.75.75 0 01-1.06-1.06L17.69 5.25H8.25a.75.75 0 010-1.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>

            <div className="relative z-10">
              <h3 className="text-sm sm:text-base font-extrabold text-gray-800 md:text-white mb-1 leading-none tracking-tight uppercase">
                More
              </h3>
              <p className="text-gray-500 md:text-white/80 text-xs sm:text-xs font-medium leading-tight line-clamp-2 max-w-[90%]">
                <span className="md:hidden">Discover All.</span>
                <span className="hidden md:inline">Explore all</span>
              </p>
            </div>
            <div className="absolute -bottom-4 -right-4 md:static md:mt-2 md:flex md:items-center md:text-gray-400 md:font-bold md:text-xs md:group-hover:translate-x-1 md:transition-transform">
              <div className="text-[5rem] md:text-xl md:bg-gray-500 md:w-10 md:h-10 md:rounded-full md:flex md:items-center md:justify-center md:text-white md:shadow-lg filter drop-shadow-2xl transform rotate-[-10deg] md:rotate-0 transition-transform duration-300 group-hover:rotate-0 group-hover:scale-110">
                ✨
              </div>
              <span className="hidden md:inline ml-2">View All →</span>
            </div>
          </div>
        </div>{" "}
      </header>

      {/* Features Section with Enhanced Cards */}
      <section className="hidden px-8 py-20 max-w-7xl mx-auto relative">
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

          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
            {[
              {
                title: "Quality Food",
                icon: "🥗",
                desc: "Freshly prepared meals from trusted restaurants.",
                gradient: "from-green-400 to-emerald-600",
              },
              {
                title: "Fast Delivery",
                icon: "🚀",
                desc: "Quickest routes to deliver your order in time.",
                gradient: "from-blue-400 to-indigo-600",
              },
              {
                title: "Easy Payment",
                icon: "💳",
                desc: "Seamless and secure payment process.",
                gradient: "from-purple-400 to-violet-600",
              },
              {
                title: "10k+ Orders",
                icon: "📦",
                desc: "10k orders delivered successfully.",
                gradient: "from-orange-400 to-red-600",
              },
            ].map((feature, idx) => (
              <div
                key={idx}
                className="group relative bg-white/15 backdrop-blur-xl border border-white/30 p-4 md:p-8 rounded-2xl md:rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 flex flex-col items-center text-center hover:-translate-y-2"
              >
                {/* Gradient Background on Hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 rounded-2xl md:rounded-3xl transition-opacity duration-500`}
                ></div>

                {/* Icon with Animated Background */}
                <div className="relative mb-3 md:mb-6">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} rounded-2xl blur-xl opacity-50 group-hover:opacity-100 transition-opacity duration-300`}
                  ></div>
                  <div className="relative w-12 h-12 md:w-20 md:h-20 bg-white dark:bg-gray-800 rounded-xl md:rounded-2xl flex items-center justify-center text-2xl md:text-4xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                </div>

                <h3 className="relative text-sm md:text-xl font-bold mb-1 md:mb-3 text-[#2B2B2B] dark:text-white group-hover:text-[#D92E2E] transition-colors">
                  {feature.title}
                </h3>
                <p className="relative text-[#2B2B2B] dark:text-gray-300 text-[10px] md:text-sm leading-relaxed mb-0 md:mb-4 line-clamp-3">
                  {feature.desc}
                </p>

                {/* Feature Badge */}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured For You Section (Carousel) */}
      <section className="px-4 md:px-8 pt-6 pb-4 max-w-7xl mx-auto relative">
        {/* Decorative Title */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="h-[1px] w-12 bg-gray-300 dark:bg-gray-700"></div>
          <h2 className="text-lg md:text-3xl font-medium tracking-[0.2em] text-gray-800 dark:text-white uppercase text-center">
            Featured for you
          </h2>
          <div className="h-[1px] w-12 bg-gray-300 dark:bg-gray-700"></div>
        </div>

        {/* Carousel Container */}
        <div className="relative w-full max-w-md mx-auto md:max-w-none">
          {/* Cards Wrapper (Horizontal Scroll) */}
          <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-4 hide-scrollbar md:grid md:grid-cols-3 md:overflow-visible md:gap-8">
            {restaurantsData.slice(0, 5).map((restaurant, index) => (
              <div
                key={restaurant.id}
                className="w-full flex-shrink-0 snap-center md:w-auto"
              >
                <RestaurantCard restaurant={restaurant} />
              </div>
            ))}
          </div>

          {/* Pagination Indicator (Mobile Only) */}
          <div className="flex md:hidden items-center justify-center gap-2 mt-2">
            <div className="w-2 h-2 rounded-full bg-gray-300 dark:bg-gray-700"></div>
            <div className="px-3 py-1 bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-xs font-bold rounded-full shadow-lg">
              2 / {Math.min(restaurantsData.length, 5)}
            </div>
            <div className="w-2 h-2 rounded-full bg-gray-300 dark:bg-gray-700"></div>
          </div>
        </div>
      </section>

      {/* Why Choose Us - Enhanced */}
      <section className="hidden px-4 md:px-8 py-12 md:py-20 max-w-7xl mx-auto my-6 md:my-12 relative">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[#D92E2E]/10 to-yellow-400/10 rounded-full blur-3xl"></div>

        <div className="relative flex flex-col md:flex-row items-center gap-8 md:gap-16">
          <div className="flex-1 relative h-[250px] md:h-[400px] w-full">
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
          <div className="flex-1 space-y-4 md:space-y-8">
            <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 dark:text-white">
              Why People{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D92E2E] to-orange-500">
                Choose us?
              </span>
            </h2>
            <div className="space-y-4 md:space-y-6">
              {[
                {
                  title: "Trusted Service",
                  icon: "🏙️",
                  desc: "Exclusive, local, and built just for the people of Bemetara.",
                  gradient: "from-blue-400 to-indigo-600",
                },
                {
                  title: "Fast Delivery",
                  icon: "⚡",
                  desc: "Our riders know every street ensuring quick deliveries.",
                  gradient: "from-yellow-400 to-orange-500",
                },
                {
                  title: "All Your Favorites",
                  icon: "🛍️",
                  desc: "From top local restaurants to daily essentials.",
                  gradient: "from-green-400 to-emerald-600",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="group relative flex gap-4 md:gap-6 items-start p-4 md:p-6 rounded-2xl md:rounded-3xl transition-all duration-500 border border-transparent hover:bg-white/15 hover:backdrop-blur-xl hover:border-white/30 hover:shadow-2xl hover:-translate-x-2"
                >
                  {/* Gradient Background on Hover */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${item.gradient} opacity-0 group-hover:opacity-5 rounded-2xl md:rounded-3xl transition-opacity duration-500`}
                  ></div>

                  {/* Icon with Gradient Background */}
                  <div className="relative flex-shrink-0">
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${item.gradient} rounded-xl md:rounded-2xl blur-lg opacity-0 group-hover:opacity-70 transition-opacity duration-300`}
                    ></div>
                    <div className="relative w-12 h-12 md:w-16 md:h-16 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl md:rounded-2xl flex items-center justify-center text-2xl md:text-4xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                      {item.icon}
                    </div>
                  </div>

                  <div className="relative">
                    <h3 className="text-lg md:text-xl font-bold mb-1 md:mb-2 text-[#2B2B2B] dark:text-white group-hover:text-[#D92E2E] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-[#2B2B2B] dark:text-gray-300 text-xs md:text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Customer Feedback - Enhanced Mobile Carousel */}
      <section className="px-4 md:px-8 pt-4 pb-4 md:py-20 max-w-7xl mx-auto text-center relative">
        {/* Background Decorative Elements */}
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-br from-orange-400/10 to-[#D92E2E]/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative z-10">
          <h2 className="text-2xl md:text-5xl font-extrabold text-[#2B2B2B] dark:text-white mb-2 md:mb-4">
            Loved by Families{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D92E2E] to-orange-500">
              Across Bemetara
            </span>
          </h2>
          <p className="hidden text-sm md:text-lg text-[#2B2B2B] dark:text-gray-300 mb-8 md:mb-12 max-w-2xl mx-auto px-4">
            Real experience from people who trust Deligro Delivery every day.
          </p>

          {/* Mobile: Horizontal Scroll | Desktop: Grid */}
          <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-6 hide-scrollbar md:grid md:grid-cols-3 md:gap-8 md:pb-0 px-2 md:px-0">
            {[
              {
                name: "Shantanu Goswami",
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
                className="min-w-[85vw] md:min-w-0 snap-center group relative bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 p-6 md:p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-500 flex flex-col items-start text-left hover:-translate-y-1"
              >
                {/* Large Decorative Quote Mark */}
                <div className="absolute top-4 right-6 text-6xl text-[#D92E2E]/10 font-serif leading-none select-none">
                  "
                </div>

                {/* Header: Avatar & Info */}
                <div className="flex items-center gap-4 mb-4 md:mb-6 w-full relative z-10">
                  <div className="relative w-12 h-12 md:w-16 md:h-16 shrink-0">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#D92E2E] to-orange-500 rounded-full blur opacity-20 group-hover:opacity-40 transition-opacity"></div>
                    <div className="relative w-full h-full bg-gray-200 rounded-full flex items-center justify-center text-xl md:text-2xl overflow-hidden ring-2 ring-white dark:ring-gray-800">
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
                  <div>
                    <h3 className="text-base md:text-lg font-bold text-[#2B2B2B] dark:text-white leading-tight">
                      {review.name}
                    </h3>
                    <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                      <span>{review.location}</span>
                      <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                      <span className="text-green-600 dark:text-green-400 font-medium flex items-center gap-0.5">
                        <svg
                          className="w-3 h-3"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        Verified
                      </span>
                    </div>
                  </div>
                </div>

                {/* Review Text */}
                <p className="relative text-sm md:text-base text-gray-600 dark:text-gray-300 italic leading-relaxed mb-4 line-clamp-4 md:line-clamp-none">
                  "{review.text}"
                </p>

                {/* Star Rating */}
                <div className="mt-auto flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-4 h-4 md:w-5 md:h-5 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Pagination Dots */}
          <div className="flex md:hidden items-center justify-center gap-2 mt-2">
            <div className="w-2 h-2 rounded-full bg-[#D92E2E]"></div>
            <div className="w-2 h-2 rounded-full bg-gray-300 dark:bg-gray-700"></div>
            <div className="w-2 h-2 rounded-full bg-gray-300 dark:bg-gray-700"></div>
          </div>
        </div>
      </section>

      {/* Footer */}
      {/* Footer */}
      <Footer />

      {/* Under Construction Sticky Note */}

      {/* Location Popup */}
      {/* {showLocationPopup && (
        <LocationPopup onClose={() => setShowLocationPopup(false)} />
      )} */}
    </div>
  );
};

export default FoodiePage;
