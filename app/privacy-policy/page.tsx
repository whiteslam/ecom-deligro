"use client";
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const PrivacyPolicyPage = () => {
  return (
    <div className="min-h-screen bg-[#E59A01] dark:bg-gray-950 font-sans text-gray-800 dark:text-gray-100 pt-6 transition-colors duration-500">
      <Navbar />
      <main className="px-8 py-20 max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-[#2B2B2B] dark:text-white mb-8 text-center">
          Privacy <span className="text-[#D92E2E]">Policy</span>
        </h1>
        <div className="bg-white/15 backdrop-blur-2xl border border-white/30 p-8 rounded-3xl shadow-xl">
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">
            Last Updated: [Date]
          </p>
          <p className="mb-6 text-[#2B2B2B] dark:text-gray-200">
            Your privacy is important to us. This Privacy Policy explains how
            DELIGRO collects, uses, and protects your data.
          </p>

          <div className="space-y-6">
            <section>
              <h2 className="text-xl font-bold text-[#2B2B2B] dark:text-white mb-2">
                1. Information We Collect
              </h2>
              <ul className="list-disc list-inside text-[#2B2B2B] dark:text-gray-300 space-y-1 ml-4">
                <li>
                  <span className="font-semibold">Personal details:</span> name,
                  email, phone number.
                </li>
                <li>
                  <span className="font-semibold">Delivery details:</span>{" "}
                  address, location (only with your permission).
                </li>
                <li>
                  <span className="font-semibold">Order history:</span> items
                  ordered, restaurants, delivery history.
                </li>
                <li>
                  <span className="font-semibold">Payment information:</span>{" "}
                  collected securely by our payment partners.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#2B2B2B] dark:text-white mb-2">
                2. How We Use Your Information
              </h2>
              <ul className="list-disc list-inside text-[#2B2B2B] dark:text-gray-300 space-y-1 ml-4">
                <li>To process orders and payments</li>
                <li>To personalize your app experience</li>
                <li>To improve our platform and services</li>
                <li>To provide customer support</li>
                <li>
                  To send promotions and notifications (only if you opt-in)
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#2B2B2B] dark:text-white mb-2">
                3. Location Access
              </h2>
              <p className="text-[#2B2B2B] dark:text-gray-300 mb-2">
                We use location only to:
              </p>
              <ul className="list-disc list-inside text-[#2B2B2B] dark:text-gray-300 space-y-1 ml-4">
                <li>show nearby restaurants</li>
                <li>calculate delivery charges</li>
                <li>improve delivery accuracy</li>
              </ul>
              <p className="text-[#2B2B2B] dark:text-gray-300 mt-2 italic">
                Your location is never shared publicly.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#2B2B2B] dark:text-white mb-2">
                4. Data Sharing
              </h2>
              <p className="text-[#2B2B2B] dark:text-gray-300 mb-2">
                We share data only with:
              </p>
              <ul className="list-disc list-inside text-[#2B2B2B] dark:text-gray-300 space-y-1 ml-4">
                <li>restaurants (for preparing your order)</li>
                <li>delivery partners</li>
                <li>payment processors</li>
                <li>legal authorities (if required)</li>
              </ul>
              <p className="text-[#2B2B2B] dark:text-gray-300 mt-2 font-medium">
                We do not sell your data.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#2B2B2B] dark:text-white mb-2">
                5. Security
              </h2>
              <p className="text-[#2B2B2B] dark:text-gray-300">
                We implement strong security measures to protect your data, but
                no system is 100% secure.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#2B2B2B] dark:text-white mb-2">
                6. Your Rights
              </h2>
              <p className="text-[#2B2B2B] dark:text-gray-300 mb-2">You can:</p>
              <ul className="list-disc list-inside text-[#2B2B2B] dark:text-gray-300 space-y-1 ml-4">
                <li>request your data</li>
                <li>update your information</li>
                <li>delete your account</li>
                <li>disable notifications or location access anytime</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#2B2B2B] dark:text-white mb-2">
                7. Updates
              </h2>
              <p className="text-[#2B2B2B] dark:text-gray-300">
                We may update this Privacy Policy occasionally.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicyPage;
