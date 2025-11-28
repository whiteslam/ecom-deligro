import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const SettingsPage = () => {
  return (
    <div className="min-h-screen bg-[#E59A01] font-sans text-gray-800 pt-6">
      <Navbar />
      <main className="px-8 py-10 max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-8 drop-shadow-md">
          Settings ⚙️
        </h1>
        <div className="bg-white/15 backdrop-blur-2xl border border-white/30 rounded-3xl shadow-xl overflow-hidden">
          {[
            {
              title: "Account Information",
              desc: "Update your name, phone, and email",
            },
            {
              title: "Notifications",
              desc: "Manage your push and email notifications",
            },
            { title: "Privacy", desc: "Manage your data and privacy settings" },
            { title: "Language", desc: "Change your preferred language" },
            { title: "About Deligro", desc: "Version 1.0.0" },
          ].map((item, idx) => (
            <div
              key={idx}
              className="p-6 border-b border-white/10 hover:bg-white/5 transition flex items-center justify-between cursor-pointer last:border-0"
            >
              <div>
                <h3 className="text-xl font-bold text-white">{item.title}</h3>
                <p className="text-white/70 text-sm">{item.desc}</p>
              </div>
              <div className="text-white/50">➜</div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SettingsPage;
