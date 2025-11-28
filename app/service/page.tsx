import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const ServicePage = () => {
  return (
    <div className="min-h-screen bg-[#E59A01] font-sans text-gray-800 pt-6">
      <Navbar />
      <main className="px-8 py-20 max-w-7xl mx-auto text-center">
        <h1 className="text-5xl font-bold text-[#2B2B2B] mb-8">
          Our <span className="text-[#D92E2E]">Services</span>
        </h1>
        <p className="text-xl text-[#2B2B2B] max-w-2xl mx-auto">
          We provide the best food delivery service in town. Fast, reliable, and
          delicious.
        </p>
      </main>
      <Footer />
    </div>
  );
};

export default ServicePage;
