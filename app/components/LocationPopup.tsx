"use client";
import React, { useState } from "react";
import Link from "next/link";

interface LocationPopupProps {
  onClose: () => void;
}

const LocationPopup: React.FC<LocationPopupProps> = ({ onClose }) => {
  const [addressType, setAddressType] = useState<"Home" | "Office" | "Other">(
    "Home"
  );

  return (
    <div className="fixed inset-0 z-100 flex items-center justify-center p-[1%] bg-black/60 backdrop-blur-sm transition-opacity duration-300">
      <div className="relative w-full max-w-4xl bg-white/70 backdrop-blur-[80px] border border-white/40 rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row h-[85vh] md:h-[600px] animate-in fade-in zoom-in duration-200">
        {/* Close Button (Mobile) */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 md:hidden w-8 h-8 flex items-center justify-center bg-white/50 backdrop-blur-md rounded-full shadow-md text-[#2B2B2B]"
        >
          ✕
        </button>

        {/* Left Side: Map */}
        <div className="w-full md:w-1/2 h-1/3 md:h-full relative bg-gray-100/50">
          <iframe
            width="100%"
            height="100%"
            frameBorder="0"
            scrolling="no"
            marginHeight={0}
            marginWidth={0}
            src="https://www.openstreetmap.org/export/embed.html?bbox=81.5,21.6,81.7,21.8&layer=mapnik"
            className="filter grayscale-0 contrast-[1.1] w-full h-full opacity-90 hover:opacity-100 transition-opacity duration-300"
          ></iframe>

          {/* Center Pin */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center -mt-8 pointer-events-none">
            <div className="bg-[#2B2B2B] text-white text-xs py-1 px-2 rounded mb-1 shadow-lg whitespace-nowrap backdrop-blur-sm bg-opacity-90">
              Move Pin To Adjust
            </div>
            <div className="relative">
              <div className="w-4 h-4 bg-black/20 rounded-full absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 blur-[2px]"></div>
              <svg
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="drop-shadow-xl"
              >
                <path
                  d="M12 0C7.58 0 4 3.58 4 8C4 13.5 12 24 12 24C12 24 20 13.5 20 8C20 3.58 16.42 0 12 0ZM12 11C10.34 11 9 9.66 9 8C9 6.34 10.34 5 12 5C13.66 5 15 6.34 15 8C15 9.66 13.66 11 12 11Z"
                  fill="#D92E2E"
                />
                <path
                  d="M12 11C10.34 11 9 9.66 9 8C9 6.34 10.34 5 12 5C13.66 5 15 6.34 15 8C15 9.66 13.66 11 12 11Z"
                  fill="white"
                  fillOpacity="0.3"
                />
              </svg>
            </div>
          </div>

          {/* Map Controls Overlay */}
          <div className="absolute top-4 left-4 bg-white/80 backdrop-blur-md p-2 rounded-xl shadow-md cursor-pointer hover:bg-white transition border border-white/40">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-[#2B2B2B]"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="12" y1="8" x2="12" y2="16"></line>
              <line x1="8" y1="12" x2="16" y2="12"></line>
            </svg>
          </div>
        </div>

        {/* Right Side: Address Details */}
        <div className="w-full md:w-1/2 h-2/3 md:h-full flex flex-col bg-white/30 backdrop-blur-md">
          {/* Header */}
          <div className="p-6 border-b border-white/20 flex justify-between items-center">
            <h2 className="text-xl font-bold text-[#2B2B2B]">
              Select Location
            </h2>
            <button
              onClick={onClose}
              className="hidden md:block text-gray-500 hover:text-[#D92E2E] transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Scrollable Content */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            {/* Your Location */}
            <div className="space-y-1">
              <div className="flex justify-between items-end">
                <label className="text-xs font-bold text-gray-600 uppercase tracking-wider">
                  Your Location
                </label>
                <button className="text-[#D92E2E] text-sm font-semibold hover:underline">
                  EDIT
                </button>
              </div>
              <div className="flex items-start gap-2 bg-white/40 p-3 rounded-2xl border border-white/30">
                <div className="mt-1 text-[#D92E2E]">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                  </svg>
                </div>
                <p className="text-[#2B2B2B] font-medium leading-tight">
                  Bemetara, Chhattisgarh
                  <span className="block text-sm text-gray-600 font-normal mt-0.5">
                    India
                  </span>
                </p>
              </div>
            </div>

            {/* Complete Address */}
            <div className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-[#2B2B2B]">
                  Complete Address
                </label>
                <textarea
                  placeholder="House No. / Flat No. / Floor / Building Name"
                  className="w-full p-3 bg-white/40 border border-white/30 rounded-2xl text-sm text-[#2B2B2B] placeholder-gray-500 focus:ring-2 focus:ring-[#D92E2E] focus:border-transparent outline-none transition resize-none h-24 backdrop-blur-sm"
                ></textarea>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-[#2B2B2B]">
                  Landmark
                </label>
                <input
                  type="text"
                  placeholder="Any nearby landmark (Optional)"
                  className="w-full p-3 bg-white/40 border border-white/30 rounded-2xl text-sm text-[#2B2B2B] placeholder-gray-500 focus:ring-2 focus:ring-[#D92E2E] focus:border-transparent outline-none transition backdrop-blur-sm"
                />
              </div>
            </div>

            {/* Save Address As */}
            <div className="space-y-3">
              <label className="text-sm font-semibold text-[#2B2B2B]">
                Save Address as
              </label>
              <div className="flex gap-3">
                {(["Home", "Office", "Other"] as const).map((type) => (
                  <button
                    key={type}
                    onClick={() => setAddressType(type)}
                    className={`flex-1 py-2 px-4 rounded-xl text-sm font-medium transition border ${
                      addressType === type
                        ? "bg-[#D92E2E]/10 border-[#D92E2E] text-[#D92E2E]"
                        : "bg-white/40 border-white/30 text-gray-600 hover:bg-white/60"
                    }`}
                  >
                    <span className="mr-2">
                      {type === "Home" ? "🏠" : type === "Office" ? "🏢" : "📍"}
                    </span>
                    {type}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Footer Action */}
          <div className="p-6 border-t border-white/20 bg-white/20 backdrop-blur-md">
            <Link href="/order" className="block w-full">
              <button className="w-full py-3.5 bg-[#D92E2E] hover:bg-[#b92525] text-white rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl transition transform hover:scale-[1.01] active:scale-[0.99] border border-transparent">
                Save Address
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationPopup;
