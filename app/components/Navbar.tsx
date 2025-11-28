"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import UserProfileMenu from "./UserProfileMenu";

const Navbar = () => {
  return (
    <nav className="relative w-[90%] max-w-5xl mx-auto flex items-center justify-between px-6 py-4 bg-white/15 backdrop-blur-2xl border border-white/30 shadow-xl rounded-full z-50">
      <div className="flex items-center gap-2">
        <Image
          src="/img/logo.png"
          alt="Deligro Logo"
          width={100}
          height={30}
          className="object-contain"
        />
      </div>
      <div className="flex items-center gap-4">
        <div className="hidden md:flex items-center gap-8 font-medium text-[#2B2B2B] mr-4">
          <Link href="/" className="hover:text-[#D92E2E] transition">
            Home
          </Link>
          <Link href="/order" className="hover:text-[#D92E2E] transition">
            Order
          </Link>
          <Link href="/service" className="hover:text-[#D92E2E] transition">
            Service
          </Link>
        </div>
        <a
          href="https://play.google.com/store/apps/details?id=com.deligrow.user&hl=en_IN"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-2 bg-white/15 backdrop-blur-2xl border border-white/30 text-[#D92E2E] rounded-full shadow-xl hover:bg-white/30 transition font-medium"
        >
          Download
        </a>

        {/* User Profile Menu */}
        <UserProfileMenu />
      </div>
    </nav>
  );
};

export default Navbar;
