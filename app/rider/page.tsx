"use client";
import React, { useState } from "react";
import Image from "next/image";

// Simple SVG Icons
const Icons = {
  Bike: () => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="18.5" cy="17.5" r="3.5" />
      <circle cx="5.5" cy="17.5" r="3.5" />
      <circle cx="15" cy="5" r="1" />
      <path d="M12 17.5V14l-3-3 4-3 2 3h2" />
    </svg>
  ),
  MapPin: () => (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  ),
  Clock: () => (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  ),
  Rupee: () => (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 3h12" />
      <path d="M6 8h12" />
      <path d="M6 13h12" />
      <path d="M6 13l5.5 5.5M11.5 18.5L6 13" />
      <path d="M10 3v10" />
    </svg>
  ),
  CheckCircle: () => (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  ),
  Navigation: () => (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="3 11 22 2 13 21 11 13 3 11" />
    </svg>
  ),
};

const RiderPage = () => {
  const [isOnline, setIsOnline] = useState(true);

  return (
    <div className="min-h-screen bg-[#E59A01] font-sans text-white p-6 pb-24 md:p-8">
      {/* Header */}
      <header className="flex justify-between items-center mb-8">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-[#E59A01] shadow-lg">
            <Icons.Bike />
          </div>
          <div>
            <h1 className="text-xl font-bold leading-none">Hello, Rider</h1>
            <p className="text-white/70 text-sm">Ready to deliver?</p>
          </div>
        </div>

        {/* Toggle Switch */}
        <button
          onClick={() => setIsOnline(!isOnline)}
          className={`relative w-16 h-8 rounded-full transition-colors duration-300 shadow-inner ${
            isOnline ? "bg-green-500" : "bg-white/20"
          }`}
        >
          <div
            className={`absolute top-1 w-6 h-6 bg-white rounded-full shadow-md transition-transform duration-300 ${
              isOnline ? "left-9" : "left-1"
            }`}
          ></div>
        </button>
      </header>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="bg-white/10 backdrop-blur-md border border-white/20 p-5 rounded-3xl shadow-lg">
          <div className="flex items-center gap-2 mb-2 text-white/70">
            <Icons.CheckCircle />
            <span className="text-xs font-bold uppercase tracking-wider">
              Orders
            </span>
          </div>
          <p className="text-3xl font-bold">12</p>
          <p className="text-xs text-white/50 mt-1">Today</p>
        </div>
        <div className="bg-white/10 backdrop-blur-md border border-white/20 p-5 rounded-3xl shadow-lg">
          <div className="flex items-center gap-2 mb-2 text-white/70">
            <Icons.Rupee />
            <span className="text-xs font-bold uppercase tracking-wider">
              Earnings
            </span>
          </div>
          <p className="text-3xl font-bold">₹850</p>
          <p className="text-xs text-white/50 mt-1">Today</p>
        </div>
      </div>

      {/* Map Preview */}
      <div className="bg-white/10 backdrop-blur-md border border-white/20 p-1 rounded-3xl shadow-lg mb-8 h-48 relative overflow-hidden group">
        <iframe
          width="100%"
          height="100%"
          frameBorder="0"
          scrolling="no"
          marginHeight={0}
          marginWidth={0}
          src="https://www.openstreetmap.org/export/embed.html?bbox=81.5,21.6,81.7,21.8&layer=mapnik"
          className="w-full h-full rounded-[20px] opacity-80 group-hover:opacity-100 transition-opacity filter grayscale-[20%] contrast-[1.1]"
        ></iframe>
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="bg-[#E59A01] text-white p-3 rounded-full shadow-xl animate-bounce">
            <Icons.Navigation />
          </div>
        </div>
        <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur text-[#2B2B2B] text-xs font-bold px-3 py-1.5 rounded-full shadow-sm">
          You are in Bemetara
        </div>
      </div>

      {/* New Orders Section */}
      <div>
        <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
          New Orders{" "}
          <span className="bg-white text-[#E59A01] text-xs px-2 py-0.5 rounded-full">
            2
          </span>
        </h2>

        <div className="space-y-4">
          {/* Order Card 1 */}
          <div className="bg-white rounded-3xl p-5 shadow-xl text-[#2B2B2B]">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="font-bold text-lg">#ORD-9921</h3>
                <p className="text-sm text-gray-500">
                  Rasoi Restaurant • 2 items
                </p>
              </div>
              <span className="bg-orange-100 text-[#E59A01] text-xs font-bold px-3 py-1 rounded-full">
                ₹320
              </span>
            </div>

            <div className="flex items-center gap-3 mb-4">
              <div className="flex flex-col items-center gap-1">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <div className="w-0.5 h-8 bg-gray-200"></div>
                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              </div>
              <div className="flex-1 space-y-3 text-sm">
                <div>
                  <p className="font-medium">Pick up</p>
                  <p className="text-gray-500 text-xs">Civil Lines, Bemetara</p>
                </div>
                <div>
                  <p className="font-medium">Drop off</p>
                  <p className="text-gray-500 text-xs">
                    Housing Board Colony, Bemetara
                  </p>
                </div>
              </div>
            </div>

            <div className="flex gap-3">
              <button className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold py-3 rounded-xl transition">
                Ignore
              </button>
              <button className="flex-1 bg-[#E59A01] hover:bg-[#c98801] text-white font-bold py-3 rounded-xl shadow-lg shadow-orange-200 transition">
                Accept
              </button>
            </div>
          </div>

          {/* Order Card 2 */}
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-5 shadow-lg text-[#2B2B2B] opacity-90">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="font-bold text-lg">#ORD-9920</h3>
                <p className="text-sm text-gray-500">Burger King • 1 item</p>
              </div>
              <span className="bg-gray-100 text-gray-600 text-xs font-bold px-3 py-1 rounded-full">
                ₹150
              </span>
            </div>
            <div className="mt-3 pt-3 border-t border-gray-100 flex justify-between items-center">
              <div className="flex items-center gap-2 text-xs text-gray-500">
                <Icons.Clock />
                <span>5 mins ago</span>
              </div>
              <button className="text-[#E59A01] text-sm font-bold">
                View Details
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RiderPage;
