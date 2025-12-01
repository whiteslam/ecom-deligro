"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import UserProfileMenu from "./UserProfileMenu";
import ServicesSection from "./ServicesSection";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [isServicesOpen, setIsServicesOpen] = React.useState(false);

  React.useEffect(() => {
    const checkLogin = () => {
      const loggedIn = localStorage.getItem("isLoggedIn") === "true";
      setIsLoggedIn(loggedIn);
    };

    checkLogin();
    window.addEventListener("storage", checkLogin);

    // Custom event for immediate updates within the same tab
    window.addEventListener("loginStateChange", checkLogin);

    return () => {
      window.removeEventListener("storage", checkLogin);
      window.removeEventListener("loginStateChange", checkLogin);
    };
  }, []);
  const timeoutRef = React.useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsServicesOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsServicesOpen(false);
    }, 200);
  };

  return (
    <nav className="relative w-[90%] max-w-5xl mx-auto flex items-center justify-between px-6 py-4 bg-white/15 backdrop-blur-2xl border border-white/30 shadow-xl rounded-full z-50">
      <div className="flex items-center gap-2">
        <Link href="/">
          <Image
            src="/img/logo.png"
            alt="Deligro Logo"
            width={100}
            height={30}
            className="object-contain cursor-pointer"
          />
        </Link>
      </div>
      <div className="flex items-center gap-4">
        <div className="hidden md:flex items-center gap-8 font-medium text-[#2B2B2B] dark:text-white mr-4">
          <Link href="/" className="hover:text-[#D92E2E] transition">
            Home
          </Link>
          <Link href="/order" className="hover:text-[#D92E2E] transition">
            Order
          </Link>
          <div
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <Link
              href="/service"
              className="hover:text-[#D92E2E] transition py-4"
            >
              Service
            </Link>
          </div>
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
        <UserProfileMenu isLoggedIn={isLoggedIn} />
      </div>

      {/* Mega Menu - Centered and Animated */}
      {isServicesOpen && (
        <div
          className="absolute top-full left-0 w-full pt-6 z-40 animate-in fade-in slide-in-from-top-5 duration-300"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="bg-white/90 backdrop-blur-3xl border border-white/40 rounded-3xl shadow-2xl overflow-hidden">
            <ServicesSection />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
