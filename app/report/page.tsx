import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const ReportPage = () => {
  return (
    <div className="min-h-screen bg-[#E59A01] font-sans text-gray-800 pt-6">
      <Navbar />
      <main className="px-8 py-10 max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-8 drop-shadow-md">
          Report & Safety 🛡️
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white/15 backdrop-blur-2xl border border-white/30 p-8 rounded-3xl shadow-xl hover:bg-white/20 transition cursor-pointer">
            <div className="text-4xl mb-4">🚨</div>
            <h2 className="text-2xl font-bold text-white mb-2">
              Emergency Support
            </h2>
            <p className="text-white/80">
              Get immediate assistance for safety concerns during an active
              order.
            </p>
          </div>
          <div className="bg-white/15 backdrop-blur-2xl border border-white/30 p-8 rounded-3xl shadow-xl hover:bg-white/20 transition cursor-pointer">
            <div className="text-4xl mb-4">⚠️</div>
            <h2 className="text-2xl font-bold text-white mb-2">
              Report an Issue
            </h2>
            <p className="text-white/80">
              Report unprofessional behavior, hygiene issues, or safety
              violations.
            </p>
          </div>
          <div className="bg-white/15 backdrop-blur-2xl border border-white/30 p-8 rounded-3xl shadow-xl hover:bg-white/20 transition cursor-pointer">
            <div className="text-4xl mb-4">📜</div>
            <h2 className="text-2xl font-bold text-white mb-2">
              Safety Policy
            </h2>
            <p className="text-white/80">
              Read about our community guidelines and safety standards.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ReportPage;
