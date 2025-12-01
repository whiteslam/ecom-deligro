import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";

const ProfilePage = () => {
  return (
    <div className="min-h-screen bg-[#E59A01] dark:bg-gray-950 font-sans text-gray-800 dark:text-gray-100 pt-6 transition-colors duration-500">
      <Navbar />
      <main className="px-8 py-10 max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-8 drop-shadow-md">
          My Profile 👤
        </h1>

        <div className="bg-white/15 backdrop-blur-2xl border border-white/30 p-8 rounded-3xl shadow-xl max-w-3xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
            <div className="w-32 h-32 relative rounded-full overflow-hidden border-4 border-white shadow-lg">
              <Image
                src="https://ui-avatars.com/api/?name=Gaurav+Mirjha&background=D92E2E&color=fff&size=256"
                alt="Profile"
                fill
                className="object-cover"
              />
            </div>
            <div className="text-center md:text-left">
              <h2 className="text-3xl font-bold text-white mb-2">
                Gaurav Mirjha
              </h2>
              <p className="text-white/80 text-lg">+91 98765 43210</p>
              <p className="text-white/60">Customer ID: 883920</p>
            </div>
            <button className="md:ml-auto px-6 py-2 bg-white/20 border border-white/30 text-white rounded-full hover:bg-white/30 transition">
              Edit Profile
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white/10 p-6 rounded-2xl border border-white/20">
              <label className="block text-white/60 text-sm mb-1">
                Email Address
              </label>
              <p className="text-white font-medium text-lg">
                gaurav.mirjha@example.com
              </p>
            </div>
            <div className="bg-white/10 p-6 rounded-2xl border border-white/20">
              <label className="block text-white/60 text-sm mb-1">
                Location
              </label>
              <p className="text-white font-medium text-lg">
                Bemetara, Chhattisgarh
              </p>
            </div>
            <div className="bg-white/10 p-6 rounded-2xl border border-white/20">
              <label className="block text-white/60 text-sm mb-1">
                Date of Birth
              </label>
              <p className="text-white font-medium text-lg">01 Jan 1995</p>
            </div>
            <div className="bg-white/10 p-6 rounded-2xl border border-white/20">
              <label className="block text-white/60 text-sm mb-1">Gender</label>
              <p className="text-white font-medium text-lg">Male</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProfilePage;
