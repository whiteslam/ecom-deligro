"use client";
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const CookiePolicyPage = () => {
  return (
    <div className="min-h-screen bg-[#E59A01] dark:bg-gray-950 font-sans text-gray-800 dark:text-gray-100 pt-6 transition-colors duration-500">
      <Navbar />
      <main className="px-8 py-20 max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-[#2B2B2B] dark:text-white mb-8 text-center">
          Cookie <span className="text-[#D92E2E]">Policy</span>
        </h1>
        <div className="bg-white/15 backdrop-blur-2xl border border-white/30 p-8 rounded-3xl shadow-xl">
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">
            Last Updated: [Date]
          </p>
          <p className="mb-6 text-[#2B2B2B] dark:text-gray-200">
            DELIGRO uses cookies to improve your browsing and app experience.
          </p>

          <div className="space-y-6">
            <section>
              <h2 className="text-xl font-bold text-[#2B2B2B] dark:text-white mb-2">
                1. What Are Cookies?
              </h2>
              <p className="text-[#2B2B2B] dark:text-gray-300">
                Small files stored on your device to remember your preferences.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#2B2B2B] dark:text-white mb-2">
                2. Types of Cookies We Use
              </h2>
              <ul className="list-disc list-inside text-[#2B2B2B] dark:text-gray-300 space-y-1 ml-4">
                <li>
                  <span className="font-semibold">Essential cookies:</span> for
                  login, checkout, and basic functions
                </li>
                <li>
                  <span className="font-semibold">Analytics cookies:</span> to
                  understand app performance
                </li>
                <li>
                  <span className="font-semibold">Preference cookies:</span>{" "}
                  dark mode, language, saved addresses
                </li>
                <li>
                  <span className="font-semibold">Marketing cookies:</span>{" "}
                  personalized offers
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#2B2B2B] dark:text-white mb-2">
                3. Why We Use Cookies
              </h2>
              <ul className="list-disc list-inside text-[#2B2B2B] dark:text-gray-300 space-y-1 ml-4">
                <li>Faster login</li>
                <li>Better restaurant recommendations</li>
                <li>Improved app performance</li>
                <li>Personalized experience and offers</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#2B2B2B] dark:text-white mb-2">
                4. Managing Cookies
              </h2>
              <p className="text-[#2B2B2B] dark:text-gray-300">
                You can disable cookies in your browser or app settings.
                <br />
                However, some features may not work properly without them.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CookiePolicyPage;
