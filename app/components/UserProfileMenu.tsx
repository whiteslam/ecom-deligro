"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import LiquidDarkModeToggle from "./LiquidDarkModeToggle";

const UserProfileMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="w-10 h-10 bg-white/15 backdrop-blur-2xl border border-white/30 rounded-full flex items-center justify-center text-[#D92E2E] shadow-xl hover:bg-white/30 transition"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
          />
        </svg>
      </button>

      {/* Dropdown Menu */}
      {isMenuOpen && (
        <div className="absolute right-0 top-14 w-72 bg-white/70 backdrop-blur-[80px] border border-white/40 rounded-3xl shadow-2xl p-6 z-50 animate-in fade-in zoom-in duration-200">
          {/* Close Button */}
          <button
            onClick={() => setIsMenuOpen(false)}
            className="absolute top-4 right-4 text-gray-500 hover:text-[#D92E2E] transition"
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

          {/* User Info */}
          <div className="flex items-center gap-4 mb-4 pb-4 border-b border-gray-200/30">
            <div className="w-14 h-14 relative rounded-full overflow-hidden border-2 border-white/50 shadow-md">
              <Image
                src="https://ui-avatars.com/api/?name=Gaurav+Mirjha&background=D92E2E&color=fff"
                alt="Profile"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#2B2B2B] leading-tight">
                Gaurav Mirjha
              </h3>
              <p className="text-sm text-gray-700 font-medium">
                +91 98765 43210
              </p>
              <p className="text-xs text-gray-600">Customer ID: 883920</p>
            </div>
          </div>

          {/* Menu Items */}
          <ul className="space-y-2">
            <li className="flex items-center justify-between px-2 py-2 rounded-lg hover:bg-white/20 transition">
              <span className="text-[#2B2B2B] font-medium">Dark Mode</span>
              <LiquidDarkModeToggle />
            </li>
            {[
              { name: "Profile", href: "/profile" },
              { name: "My Cart", href: "/cart" },
              { name: "Your Orders", href: "/orders" },
              { name: "Add Payment Setting", href: "/payment" },
              { name: "About", href: "/about" },
              { name: "Contact", href: "/contact" },
              { name: "Send Feedback", href: "/feedback" },
              { name: "Report & Safety", href: "/report" },
              { name: "Settings", href: "/settings" },
            ].map((item, idx) => (
              <li key={idx}>
                <Link href={item.href}>
                  <button className="w-full text-left text-[#2B2B2B] font-medium hover:text-[#D92E2E] transition py-2 px-2 rounded-lg hover:bg-white/20">
                    {item.name}
                  </button>
                </Link>
              </li>
            ))}
            <li className="pt-2 border-t border-gray-200">
              <button className="w-full text-left text-[#D92E2E] font-bold hover:text-red-700 transition py-1">
                Log Out
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default UserProfileMenu;
