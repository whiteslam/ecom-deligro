"use client";
import React, { useState, useEffect } from "react";

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const isDarkMode =
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);
    setIsDark(isDarkMode);
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    const newIsDark = !isDark;
    setIsDark(newIsDark);
    if (newIsDark) {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className={`relative w-20 h-10 rounded-full p-1 transition-colors duration-500 ease-in-out focus:outline-none overflow-hidden shadow-inner border border-black/10 dark:border-white/10 ${
        isDark ? "bg-[#0f172a]" : "bg-[#60a5fa]"
      }`}
      aria-label="Toggle Dark Mode"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden rounded-full pointer-events-none">
        {/* Clouds for Light Mode */}
        <div
          className={`absolute top-1 left-2 transition-all duration-500 ${
            isDark ? "translate-y-10 opacity-0" : "translate-y-0 opacity-100"
          }`}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="white"
            className="opacity-80"
          >
            <path d="M17.5,19c-3.037,0-5.5-2.463-5.5-5.5c0-1.054,0.295-2.043,0.806-2.886C12.356,10.836,11.704,11,11,11 c-2.761,0-5-2.239-5-5c0-0.704,0.164-1.356,0.45-1.944C4.305,4.856,2.5,6.963,2.5,9.5c0,3.037,2.463,5.5,5.5,5.5 c0.233,0,0.462-0.019,0.684-0.052C9.489,17.477,12.213,19,15.5,19c0.688,0,1.355-0.088,1.986-0.252 C17.495,18.835,17.498,18.917,17.5,19z" />
          </svg>
        </div>
        <div
          className={`absolute top-4 left-8 transition-all duration-700 delay-100 ${
            isDark ? "translate-y-10 opacity-0" : "translate-y-0 opacity-100"
          }`}
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="white"
            className="opacity-60"
          >
            <path d="M17.5,19c-3.037,0-5.5-2.463-5.5-5.5c0-1.054,0.295-2.043,0.806-2.886C12.356,10.836,11.704,11,11,11 c-2.761,0-5-2.239-5-5c0-0.704,0.164-1.356,0.45-1.944C4.305,4.856,2.5,6.963,2.5,9.5c0,3.037,2.463,5.5,5.5,5.5 c0.233,0,0.462-0.019,0.684-0.052C9.489,17.477,12.213,19,15.5,19c0.688,0,1.355-0.088,1.986-0.252 C17.495,18.835,17.498,18.917,17.5,19z" />
          </svg>
        </div>

        {/* Stars for Dark Mode */}
        <div
          className={`absolute top-2 right-5 text-white text-[8px] transition-all duration-500 ${
            isDark ? "opacity-100 scale-100" : "opacity-0 scale-0"
          }`}
        >
          ★
        </div>
        <div
          className={`absolute top-5 right-2 text-white text-[6px] transition-all duration-500 delay-75 ${
            isDark ? "opacity-100 scale-100" : "opacity-0 scale-0"
          }`}
        >
          ★
        </div>
        <div
          className={`absolute bottom-2 right-6 text-white text-[5px] transition-all duration-500 delay-150 ${
            isDark ? "opacity-100 scale-100" : "opacity-0 scale-0"
          }`}
        >
          ★
        </div>
      </div>

      {/* The Knob */}
      <div
        className={`relative w-8 h-8 rounded-full shadow-md transform transition-transform duration-500 cubic-bezier(0.68, -0.55, 0.27, 1.55) flex items-center justify-center ${
          isDark ? "translate-x-10 bg-slate-200" : "translate-x-0 bg-yellow-400"
        }`}
      >
        {isDark ? (
          // Moon Craters
          <div className="relative w-full h-full rounded-full overflow-hidden bg-slate-200">
            <div className="absolute top-2 left-3 w-2 h-2 bg-slate-300 rounded-full opacity-50"></div>
            <div className="absolute bottom-2 right-2 w-3 h-3 bg-slate-300 rounded-full opacity-50"></div>
            <div className="absolute top-1 right-2 w-1 h-1 bg-slate-300 rounded-full opacity-50"></div>
          </div>
        ) : (
          // Sun Rays (Subtle)
          <div className="w-full h-full bg-yellow-400 rounded-full shadow-[0_0_10px_rgba(250,204,21,0.8)]"></div>
        )}
      </div>
    </button>
  );
};

export default ThemeToggle;
