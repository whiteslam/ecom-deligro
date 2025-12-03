"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import UserProfileMenu from "./UserProfileMenu";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  React.useEffect(() => {
    const checkLogin = () => {
      const loggedIn = localStorage.getItem("isLoggedIn") === "true";
      setIsLoggedIn(loggedIn);
    };

    checkLogin();
    window.addEventListener("storage", checkLogin);
    window.addEventListener("loginStateChange", checkLogin);

    return () => {
      window.removeEventListener("storage", checkLogin);
      window.removeEventListener("loginStateChange", checkLogin);
    };
  }, []);

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Mobile Menu Backdrop */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
          onClick={closeMobileMenu}
        ></div>
      )}

      <nav className="relative w-[95%] md:w-[90%] max-w-5xl mx-auto flex items-center justify-between px-4 md:px-6 py-3 md:py-4 bg-white/15 backdrop-blur-2xl border border-white/30 shadow-xl rounded-full z-50">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Link href="/">
            <Image
              src="/img/logo.png"
              alt="Deligro Logo"
              width={80}
              height={24}
              className="object-contain cursor-pointer md:w-[100px] md:h-[30px]"
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-4">
          <div className="flex items-center gap-8 font-medium text-[#2B2B2B] dark:text-white mr-4">
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

          <UserProfileMenu isLoggedIn={isLoggedIn} />
        </div>

        {/* Mobile Menu Button & Actions */}
        <div className="flex md:hidden items-center gap-2">
          <UserProfileMenu isLoggedIn={isLoggedIn} />

          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="p-2 bg-white/15 backdrop-blur-2xl border border-white/30 rounded-full shadow-lg hover:bg-white/30 transition"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="text-[#2B2B2B] dark:text-white"
            >
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Slide-in */}
      <div
        className={`fixed top-0 right-0 h-full w-[280px] bg-white dark:bg-gray-900 shadow-2xl z-50 transform transition-transform duration-300 ease-in-out md:hidden ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Mobile Menu Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
            <h2 className="text-xl font-bold text-[#2B2B2B] dark:text-white">
              Menu
            </h2>
            <button
              onClick={closeMobileMenu}
              className="p-2 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="text-[#2B2B2B] dark:text-white"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>

          {/* Mobile Menu Links */}
          <nav className="flex-1 overflow-y-auto p-6">
            <div className="space-y-2">
              <Link
                href="/"
                onClick={closeMobileMenu}
                className="block px-4 py-3 text-[#2B2B2B] dark:text-white font-medium rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition"
              >
                🏠 Home
              </Link>
              <Link
                href="/order"
                onClick={closeMobileMenu}
                className="block px-4 py-3 text-[#2B2B2B] dark:text-white font-medium rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition"
              >
                🍽️ Order
              </Link>
              <Link
                href="/service"
                onClick={closeMobileMenu}
                className="block px-4 py-3 text-[#2B2B2B] dark:text-white font-medium rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition"
              >
                🛎️ Service
              </Link>
              <Link
                href="/about"
                onClick={closeMobileMenu}
                className="block px-4 py-3 text-[#2B2B2B] dark:text-white font-medium rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition"
              >
                ℹ️ About
              </Link>
              <Link
                href="/contact"
                onClick={closeMobileMenu}
                className="block px-4 py-3 text-[#2B2B2B] dark:text-white font-medium rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition"
              >
                📞 Contact
              </Link>
            </div>

            {/* Mobile Download Button */}
            <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
              <a
                href="https://play.google.com/store/apps/details?id=com.deligrow.user&hl=en_IN"
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMobileMenu}
                className="block w-full px-6 py-3 bg-[#D92E2E] text-white text-center rounded-full shadow-lg hover:bg-[#B91C1C] transition font-medium"
              >
                📱 Download App
              </a>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;
