import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-[#E59A01] font-sans text-gray-800 pt-6">
      <Navbar />
      <main className="px-8 py-20 max-w-7xl mx-auto text-center">
        <h1 className="text-5xl font-bold text-[#2B2B2B] mb-8">
          About <span className="text-[#D92E2E]">Us</span>
        </h1>
        <p className="text-xl text-[#2B2B2B] max-w-2xl mx-auto">
          Deligro is committed to bringing you the best food from your favorite
          local restaurants.
        </p>
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
