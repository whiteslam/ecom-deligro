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
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden transition-opacity duration-300 ${
          isMobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={closeMobileMenu}
      ></div>

      <nav className="relative w-[95%] md:w-[90%] max-w-5xl mx-auto flex items-center justify-between px-4 md:px-6 py-3 md:py-4 bg-white/15 backdrop-blur-2xl border border-white/30 shadow-xl rounded-full z-50">
        {/* Mobile: Hamburger Button (Left) */}
        <button
          onClick={() => setIsMobileMenuOpen(true)}
          className="md:hidden w-10 h-10 bg-white/15 backdrop-blur-2xl border border-white/30 rounded-full flex items-center justify-center text-[#D92E2E] shadow-xl hover:bg-white/30 transition"
        >
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
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>

        {/* Logo (Center on mobile, Left on desktop) */}
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
            <Link
              href="/order"
              className="hover:text-[#D92E2E] transition relative group"
            >
              OrderFOOD
              <span className="absolute -top-3 -right-8 bg-red-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">
                Now!!
              </span>
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

        {/* Mobile: User Profile (Right) */}
        <div className="md:hidden">
          <UserProfileMenu isLoggedIn={isLoggedIn} />
        </div>
      </nav>

      {/* Mobile Menu Slide-in (Left Side) */}
      <div
        className={`fixed top-0 left-0 h-full w-[300px] bg-white/90 dark:bg-gray-900/95 backdrop-blur-2xl shadow-2xl z-50 transform transition-transform duration-300 ease-out md:hidden border-r border-white/20 ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full relative overflow-hidden">
          {/* Decorative Background Blobs */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-orange-400/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-red-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

          {/* Mobile Menu Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200/50 dark:border-gray-700/50 relative z-10">
            <Image
              src="/img/logo.png"
              alt="Deligro Logo"
              width={100}
              height={30}
              className="object-contain"
            />
            <button
              onClick={closeMobileMenu}
              className="p-2 bg-gray-100/50 dark:bg-gray-800/50 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition backdrop-blur-sm"
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
          <nav className="flex-1 overflow-y-auto p-6 relative z-10">
            <div className="space-y-3">
              {[
                { href: "/", label: "Home", icon: "🏠" },
                {
                  href: "/order",
                  label: "Order Food",
                  icon: "🍽️",
                  badge: "Now!!",
                },
                { href: "/service", label: "Services", icon: "🛎️" },
                { href: "/about", label: "About Us", icon: "ℹ️" },
                { href: "/contact", label: "Contact", icon: "📞" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={closeMobileMenu}
                  className="flex items-center justify-between px-4 py-3.5 text-[#2B2B2B] dark:text-white font-medium rounded-2xl hover:bg-black/5 dark:hover:bg-white/10 transition group"
                >
                  <span className="flex items-center gap-3">
                    <span className="text-xl group-hover:scale-110 transition-transform duration-200">
                      {link.icon}
                    </span>
                    {link.label}
                  </span>
                  {link.badge ? (
                    <span className="bg-red-500 text-white text-[10px] font-bold px-2 py-1 rounded-full shadow-sm">
                      {link.badge}
                    </span>
                  ) : (
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="text-gray-400 group-hover:text-[#D92E2E] transition-colors"
                    >
                      <polyline points="9 18 15 12 9 6"></polyline>
                    </svg>
                  )}
                </Link>
              ))}
            </div>

            {/* Mobile Download Button */}
            <div className="mt-8">
              <div className="p-4 bg-linear-to-br from-orange-50 to-red-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl border border-orange-100 dark:border-gray-700">
                <h4 className="font-bold text-[#2B2B2B] dark:text-white mb-1">
                  Get the App
                </h4>
                <p className="text-xs text-gray-500 dark:text-gray-400 mb-4">
                  Order faster & get exclusive deals!
                </p>
                <a
                  href="https://play.google.com/store/apps/details?id=com.deligrow.user&hl=en_IN"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeMobileMenu}
                  className="block w-full px-6 py-3 bg-[#D92E2E] text-white text-center rounded-xl shadow-lg hover:bg-[#B91C1C] transition font-bold text-sm"
                >
                  Download Now
                </a>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;
