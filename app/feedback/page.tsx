import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const FeedbackPage = () => {
  return (
    <div className="min-h-screen bg-[#E59A01] font-sans text-gray-800 pt-6">
      <Navbar />
      <main className="px-8 py-10 max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-8 drop-shadow-md">
          Send Feedback 💬
        </h1>
        <div className="bg-white/15 backdrop-blur-2xl border border-white/30 p-8 rounded-3xl shadow-xl max-w-2xl mx-auto">
          <p className="text-white mb-6">
            We would love to hear your thoughts, suggestions, concerns or
            problems with anything so we can improve!
          </p>
          <form className="space-y-6">
            <div>
              <label className="block text-white font-medium mb-2">Topic</label>
              <select className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-white/50">
                <option className="text-black">General Feedback</option>
                <option className="text-black">Bug Report</option>
                <option className="text-black">Feature Request</option>
              </select>
            </div>
            <div>
              <label className="block text-white font-medium mb-2">
                Message
              </label>
              <textarea
                rows={5}
                className="w-full px-4 py-3 bg-white/10 border border-white/30 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/50"
                placeholder="Tell us what you think..."
              ></textarea>
            </div>
            <button className="w-full py-3 bg-white text-[#D92E2E] rounded-full font-bold shadow-lg hover:bg-gray-100 transition">
              Submit Feedback
            </button>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default FeedbackPage;
