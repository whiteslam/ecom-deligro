"use client";
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const TermsConditionsPage = () => {
  return (
    <div className="min-h-screen bg-[#E59A01] dark:bg-gray-950 font-sans text-gray-800 dark:text-gray-100 pt-6 transition-colors duration-500">
      <Navbar />
      <main className="px-8 py-20 max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-[#2B2B2B] dark:text-white mb-8 text-center">
          Terms & <span className="text-[#D92E2E]">Conditions</span>
        </h1>
        <div className="bg-white/15 backdrop-blur-2xl border border-white/30 p-8 rounded-3xl shadow-xl">
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">
            Last Updated: [Date]
          </p>
          <p className="mb-6 text-[#2B2B2B] dark:text-gray-200">
            Welcome to DELIGRO. By accessing or using our website, mobile app,
            or services, you confirm that you agree to these Terms & Conditions.
            If you do not agree, please stop using DELIGRO immediately.
          </p>

          <div className="space-y-6">
            <section>
              <h2 className="text-xl font-bold text-[#2B2B2B] dark:text-white mb-2">
                1. Use of Our Platform
              </h2>
              <ul className="list-disc list-inside text-[#2B2B2B] dark:text-gray-300 space-y-1 ml-4">
                <li>You must be at least 16 years old to use DELIGRO.</li>
                <li>You agree to use our services only for lawful purposes.</li>
                <li>
                  We may suspend or terminate accounts that break our rules or
                  misuse the platform.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#2B2B2B] dark:text-white mb-2">
                2. Ordering Food
              </h2>
              <ul className="list-disc list-inside text-[#2B2B2B] dark:text-gray-300 space-y-1 ml-4">
                <li>
                  Restaurants listed on DELIGRO provide their own menu, pricing,
                  and availability.
                </li>
                <li>
                  After you place an order, the restaurant must accept it for it
                  to be confirmed.
                </li>
                <li>
                  You are responsible for providing correct delivery details.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#2B2B2B] dark:text-white mb-2">
                3. Payments
              </h2>
              <ul className="list-disc list-inside text-[#2B2B2B] dark:text-gray-300 space-y-1 ml-4">
                <li>
                  All orders must be paid through the supported payment methods
                  in the app.
                </li>
                <li>
                  Payments are processed securely by our payment partners.
                </li>
                <li>
                  Prices, taxes, delivery fees, and offers are shown before
                  checkout.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#2B2B2B] dark:text-white mb-2">
                4. Delivery
              </h2>
              <p className="text-[#2B2B2B] dark:text-gray-300 mb-2">
                Delivery time displayed is an estimate, not a guarantee.
              </p>
              <p className="text-[#2B2B2B] dark:text-gray-300 mb-2">
                Delays may happen due to:
              </p>
              <ul className="list-disc list-inside text-[#2B2B2B] dark:text-gray-300 space-y-1 ml-4">
                <li>traffic</li>
                <li>weather</li>
                <li>restaurant preparation time</li>
                <li>high-order volume</li>
              </ul>
              <p className="text-[#2B2B2B] dark:text-gray-300 mt-2">
                Delivery fees may vary depending on distance or surge
                conditions.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#2B2B2B] dark:text-white mb-2">
                5. Cancellations & Refunds
              </h2>
              <p className="text-[#2B2B2B] dark:text-gray-300 mb-2">
                You may request:
              </p>
              <ul className="list-disc list-inside text-[#2B2B2B] dark:text-gray-300 space-y-1 ml-4">
                <li>
                  Cancellation only before a restaurant accepts the order.
                </li>
                <li>
                  Refund in cases like:
                  <ul className="list-circle list-inside ml-6 mt-1">
                    <li>wrong or missing items</li>
                    <li>undelivered orders</li>
                    <li>payment failure</li>
                    <li>unacceptable food quality (with proof)</li>
                  </ul>
                </li>
              </ul>
              <p className="text-[#2B2B2B] dark:text-gray-300 mt-2">
                Refund decisions depend on restaurant verification and DELIGRO
                policy.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#2B2B2B] dark:text-white mb-2">
                6. Restaurant Responsibility
              </h2>
              <p className="text-[#2B2B2B] dark:text-gray-300 mb-2">
                Restaurants are fully responsible for:
              </p>
              <ul className="list-disc list-inside text-[#2B2B2B] dark:text-gray-300 space-y-1 ml-4">
                <li>food preparation</li>
                <li>hygiene & safety</li>
                <li>packaging quality</li>
                <li>correct order items</li>
                <li>setting delivery time and price</li>
              </ul>
              <p className="text-[#2B2B2B] dark:text-gray-300 mt-2 font-medium">
                DELIGRO is only a platform connecting customers, restaurants,
                and delivery partners.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#2B2B2B] dark:text-white mb-2">
                7. User Account
              </h2>
              <p className="text-[#2B2B2B] dark:text-gray-300 mb-2">
                You agree to:
              </p>
              <ul className="list-disc list-inside text-[#2B2B2B] dark:text-gray-300 space-y-1 ml-4">
                <li>provide accurate information</li>
                <li>not share your login credentials</li>
                <li>be responsible for activities under your account</li>
              </ul>
              <p className="text-[#2B2B2B] dark:text-gray-300 mt-2">
                If you suspect unauthorized activity, contact us immediately.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#2B2B2B] dark:text-white mb-2">
                8. Prohibited Activities
              </h2>
              <p className="text-[#2B2B2B] dark:text-gray-300 mb-2">
                You must not:
              </p>
              <ul className="list-disc list-inside text-[#2B2B2B] dark:text-gray-300 space-y-1 ml-4">
                <li>misuse promotions or referral codes</li>
                <li>perform fraudulent chargebacks</li>
                <li>abuse delivery partners</li>
                <li>
                  attempt to hack, disrupt, or reverse-engineer the platform
                </li>
              </ul>
              <p className="text-[#2B2B2B] dark:text-gray-300 mt-2 font-bold text-red-600">
                Failure to follow rules can lead to permanent suspension.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#2B2B2B] dark:text-white mb-2">
                9. Liability
              </h2>
              <p className="text-[#2B2B2B] dark:text-gray-300 mb-2">
                DELIGRO is not responsible for:
              </p>
              <ul className="list-disc list-inside text-[#2B2B2B] dark:text-gray-300 space-y-1 ml-4">
                <li>food-related health issues</li>
                <li>delays caused by external factors</li>
                <li>incorrect menu information provided by restaurants</li>
                <li>damages caused by third-party service providers</li>
              </ul>
              <p className="text-[#2B2B2B] dark:text-gray-300 mt-2">
                Our liability is limited to the maximum extent permitted by law.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#2B2B2B] dark:text-white mb-2">
                10. Changes to the Terms
              </h2>
              <p className="text-[#2B2B2B] dark:text-gray-300">
                We may update these Terms & Conditions anytime.
                <br />
                Continued use of DELIGRO means you accept the updated terms.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#2B2B2B] dark:text-white mb-2">
                11. Contact Us
              </h2>
              <p className="text-[#2B2B2B] dark:text-gray-300 mb-2">
                For any questions or complaints:
              </p>
              <div className="text-[#2B2B2B] dark:text-gray-300 ml-4">
                <p>📩 support@deligro.com</p>
                <p>📍 DELIGRO Customer Support</p>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TermsConditionsPage;
