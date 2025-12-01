"use client";
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const CareersPage = () => {
  return (
    <div className="min-h-screen bg-[#E59A01] dark:bg-gray-950 font-sans text-gray-800 dark:text-gray-100 pt-6 transition-colors duration-500">
      <Navbar />

      {/* Hero Section */}
      <section className="relative px-8 py-20 max-w-7xl mx-auto text-center">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-4xl bg-gradient-to-b from-white/10 to-transparent rounded-full blur-3xl -z-10 pointer-events-none"></div>
        <h1 className="text-5xl md:text-6xl font-bold text-[#2B2B2B] dark:text-white mb-6 leading-tight drop-shadow-lg">
          Work With <span className="text-[#D92E2E]">DELIGRO</span>
        </h1>
        <p className="text-xl md:text-2xl text-[#2B2B2B] dark:text-gray-200 font-medium mb-6">
          Bemetara’s own food delivery service. Built by locals, for locals.
        </p>
        <p className="text-lg text-[#2B2B2B] dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
          We are looking for passionate people from Bemetara who want to grow
          with us. If you love our city and want to be part of something big,
          join our team!
        </p>
      </section>

      {/* About Working at DELIGRO */}
      <section className="px-8 py-12 max-w-5xl mx-auto">
        <div className="bg-white/15 backdrop-blur-2xl border border-white/30 p-10 rounded-[3rem] shadow-xl text-center">
          <h2 className="text-3xl font-bold text-[#2B2B2B] dark:text-white mb-6">
            Why We Are Different
          </h2>
          <p className="text-lg text-[#2B2B2B] dark:text-gray-200 leading-relaxed max-w-3xl mx-auto">
            DELIGRO is proudly{" "}
            <span className="font-bold text-[#D92E2E]">Made in Bemetara</span>.
            We believe in community, respect, and growth. We don't just hire
            employees; we build a family that works together to serve our own
            people. Here, your hard work is valued, and your growth is our
            priority.
          </p>
        </div>
      </section>

      {/* Open Positions */}
      <section className="px-8 py-16 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-[#2B2B2B] dark:text-white mb-12">
          Open Positions 🚀
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Delivery Partner */}
          <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-8 rounded-3xl hover:bg-white/20 transition duration-300 flex flex-col">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-2xl font-bold text-[#2B2B2B] dark:text-white">
                Delivery Partner (Rider)
              </h3>
              <span className="bg-green-500/20 text-green-700 dark:text-green-300 px-3 py-1 rounded-full text-sm font-bold border border-green-500/30">
                Urgent
              </span>
            </div>
            <p className="text-[#2B2B2B] dark:text-gray-300 mb-4 text-sm">
              Be the face of Deligro. Deliver happiness to doorsteps across
              Bemetara.
            </p>
            <div className="space-y-4 mb-6 flex-grow">
              <div>
                <h4 className="font-bold text-[#D92E2E] text-sm uppercase mb-1">
                  Responsibilities
                </h4>
                <ul className="list-disc list-inside text-sm text-[#2B2B2B] dark:text-gray-300 ml-2">
                  <li>Pick up food from restaurants</li>
                  <li>Deliver safely to customers</li>
                  <li>Maintain hygiene and punctuality</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-[#D92E2E] text-sm uppercase mb-1">
                  Requirements
                </h4>
                <ul className="list-disc list-inside text-sm text-[#2B2B2B] dark:text-gray-300 ml-2">
                  <li>Own vehicle (Bike/Scooter)</li>
                  <li>Valid Driving License</li>
                  <li>Smartphone with internet</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-[#D92E2E] text-sm uppercase mb-1">
                  Benefits
                </h4>
                <ul className="list-disc list-inside text-sm text-[#2B2B2B] dark:text-gray-300 ml-2">
                  <li>Weekly Payouts</li>
                  <li>Flexible Hours</li>
                  <li>Performance Incentives</li>
                </ul>
              </div>
            </div>
            <button className="w-full py-3 bg-[#D92E2E] text-white rounded-xl font-bold shadow-lg hover:bg-[#b91c1c] transition">
              Apply Now
            </button>
          </div>

          {/* Restaurant Onboarding Executive */}
          <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-8 rounded-3xl hover:bg-white/20 transition duration-300 flex flex-col">
            <h3 className="text-2xl font-bold text-[#2B2B2B] dark:text-white mb-4">
              Restaurant Onboarding Executive
            </h3>
            <p className="text-[#2B2B2B] dark:text-gray-300 mb-4 text-sm">
              Help local restaurants grow their business by bringing them
              online.
            </p>
            <div className="space-y-4 mb-6 flex-grow">
              <div>
                <h4 className="font-bold text-[#D92E2E] text-sm uppercase mb-1">
                  Responsibilities
                </h4>
                <ul className="list-disc list-inside text-sm text-[#2B2B2B] dark:text-gray-300 ml-2">
                  <li>Identify potential restaurant partners</li>
                  <li>Explain Deligro benefits and onboard them</li>
                  <li>Manage restaurant relationships</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-[#D92E2E] text-sm uppercase mb-1">
                  Requirements
                </h4>
                <ul className="list-disc list-inside text-sm text-[#2B2B2B] dark:text-gray-300 ml-2">
                  <li>Good communication skills</li>
                  <li>Knowledge of Bemetara food market</li>
                  <li>Basic computer/app knowledge</li>
                </ul>
              </div>
            </div>
            <button className="w-full py-3 bg-[#D92E2E] text-white rounded-xl font-bold shadow-lg hover:bg-[#b91c1c] transition">
              Apply Now
            </button>
          </div>

          {/* Customer Support Executive */}
          <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-8 rounded-3xl hover:bg-white/20 transition duration-300 flex flex-col">
            <h3 className="text-2xl font-bold text-[#2B2B2B] dark:text-white mb-4">
              Customer Support Executive
            </h3>
            <p className="text-[#2B2B2B] dark:text-gray-300 mb-4 text-sm">
              Ensure every Deligro customer has a smooth and happy experience.
            </p>
            <div className="space-y-4 mb-6 flex-grow">
              <div>
                <h4 className="font-bold text-[#D92E2E] text-sm uppercase mb-1">
                  Responsibilities
                </h4>
                <ul className="list-disc list-inside text-sm text-[#2B2B2B] dark:text-gray-300 ml-2">
                  <li>Handle customer queries via chat/call</li>
                  <li>Resolve order issues promptly</li>
                  <li>Coordinate with riders and restaurants</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-[#D92E2E] text-sm uppercase mb-1">
                  Requirements
                </h4>
                <ul className="list-disc list-inside text-sm text-[#2B2B2B] dark:text-gray-300 ml-2">
                  <li>Polite and patient attitude</li>
                  <li>Fluent in Hindi & Chhattisgarhi (preferred)</li>
                  <li>Problem-solving mindset</li>
                </ul>
              </div>
            </div>
            <button className="w-full py-3 bg-[#D92E2E] text-white rounded-xl font-bold shadow-lg hover:bg-[#b91c1c] transition">
              Apply Now
            </button>
          </div>

          {/* Marketing Intern */}
          <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-8 rounded-3xl hover:bg-white/20 transition duration-300 flex flex-col">
            <h3 className="text-2xl font-bold text-[#2B2B2B] dark:text-white mb-4">
              Marketing & Promotions Intern
            </h3>
            <p className="text-[#2B2B2B] dark:text-gray-300 mb-4 text-sm">
              Spread the word about Deligro across Bemetara.
            </p>
            <div className="space-y-4 mb-6 flex-grow">
              <div>
                <h4 className="font-bold text-[#D92E2E] text-sm uppercase mb-1">
                  Responsibilities
                </h4>
                <ul className="list-disc list-inside text-sm text-[#2B2B2B] dark:text-gray-300 ml-2">
                  <li>Plan local promotional activities</li>
                  <li>Manage social media presence</li>
                  <li>Engage with the local community</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-[#D92E2E] text-sm uppercase mb-1">
                  Requirements
                </h4>
                <ul className="list-disc list-inside text-sm text-[#2B2B2B] dark:text-gray-300 ml-2">
                  <li>Creative thinking</li>
                  <li>Active on social media</li>
                  <li>Student or fresh graduate from Bemetara</li>
                </ul>
              </div>
            </div>
            <button className="w-full py-3 bg-[#D92E2E] text-white rounded-xl font-bold shadow-lg hover:bg-[#b91c1c] transition">
              Apply Now
            </button>
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="px-8 py-16 max-w-5xl mx-auto">
        <div className="bg-gradient-to-br from-[#D92E2E] to-[#b91c1c] p-10 rounded-[3rem] shadow-2xl text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-full h-full bg-[url('/img/pattern.png')] opacity-10"></div>
          <h2 className="text-3xl font-bold mb-8 text-center">
            Why Join DELIGRO?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            {[
              { icon: "🏙️", text: "Local Company" },
              { icon: "🤝", text: "Friendly Environment" },
              { icon: "📈", text: "Growth Opportunities" },
              { icon: "⏰", text: "Flexible Timings" },
              { icon: "💸", text: "Weekly Payments" },
              { icon: "❤️", text: "Supportive Team" },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white/10 backdrop-blur-sm p-4 rounded-2xl border border-white/10 hover:bg-white/20 transition"
              >
                <div className="text-3xl mb-2">{item.icon}</div>
                <div className="font-bold">{item.text}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Apply */}
      <section className="px-8 py-20 max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-[#2B2B2B] dark:text-white mb-6">
          Ready to Apply?
        </h2>
        <div className="bg-white/15 backdrop-blur-2xl border border-white/30 p-8 rounded-3xl shadow-xl">
          <p className="text-lg text-[#2B2B2B] dark:text-gray-200 mb-6">
            Send your Resume/CV or details to:
          </p>
          <a
            href="mailto:careers@deligro.com"
            className="text-2xl md:text-3xl font-bold text-[#D92E2E] hover:underline break-all"
          >
            careers@deligro.com
          </a>
          <p className="mt-6 text-sm text-gray-600 dark:text-gray-400">
            Or visit our office: <br />
            <span className="font-medium text-[#2B2B2B] dark:text-gray-200">
              DELIGRO HQ, Near Main Market, Bemetara
            </span>
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CareersPage;
