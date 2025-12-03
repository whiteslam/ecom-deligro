"use client";
import React, { useState } from "react";

const SettingsView: React.FC = () => {
  const [activeSection, setActiveSection] = useState("general");

  return (
    <div className="relative">
      {/* Decorative Background */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-indigo-400/20 to-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tl from-pink-400/20 to-violet-600/20 rounded-full blur-3xl animate-pulse [animation-delay:1s]"></div>

      {/* Header */}
      <div className="relative z-10 mb-8">
        <h2 className="text-3xl font-bold text-white mb-2">Settings</h2>
        <p className="text-white/70">
          Manage your admin panel preferences and configurations
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 relative z-10">
        {/* Settings Navigation */}
        <div className="lg:col-span-1">
          <div className="bg-white/10 backdrop-blur-md rounded-3xl shadow-xl border border-white/20 p-4">
            <nav className="space-y-2">
              {[
                { id: "general", label: "General", icon: "⚙️" },
                { id: "notifications", label: "Notifications", icon: "🔔" },
                { id: "security", label: "Security", icon: "🔒" },
                { id: "billing", label: "Billing", icon: "💳" },
                { id: "team", label: "Team", icon: "👥" },
                { id: "api", label: "API Keys", icon: "🔑" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveSection(item.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                    activeSection === item.id
                      ? "bg-white text-[#E59A01] shadow-lg font-bold"
                      : "text-white/70 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  <span className="text-xl">{item.icon}</span>
                  <span className="font-medium">{item.label}</span>
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* Settings Content */}
        <div className="lg:col-span-3">
          <div className="bg-white/10 backdrop-blur-md rounded-3xl shadow-xl border border-white/20 p-8">
            {activeSection === "general" && (
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">
                  General Settings
                </h3>
                <div className="space-y-6">
                  <div>
                    <label className="block text-white font-medium mb-2">
                      Platform Name
                    </label>
                    <input
                      type="text"
                      defaultValue="Deligro"
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/50"
                    />
                  </div>
                  <div>
                    <label className="block text-white font-medium mb-2">
                      Support Email
                    </label>
                    <input
                      type="email"
                      defaultValue="support@deligro.com"
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/50"
                    />
                  </div>
                  <div>
                    <label className="block text-white font-medium mb-2">
                      Time Zone
                    </label>
                    <select className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-white/50 cursor-pointer [&>option]:text-gray-800">
                      <option>Asia/Kolkata (IST)</option>
                      <option>Asia/Dubai (GST)</option>
                      <option>America/New_York (EST)</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-white font-medium mb-2">
                      Language
                    </label>
                    <select className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-white/50 cursor-pointer [&>option]:text-gray-800">
                      <option>English</option>
                      <option>Hindi</option>
                      <option>Marathi</option>
                    </select>
                  </div>
                  <button className="px-6 py-3 bg-white text-[#E59A01] rounded-xl font-bold shadow-xl hover:bg-white/90 transition">
                    Save Changes
                  </button>
                </div>
              </div>
            )}

            {activeSection === "notifications" && (
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">
                  Notification Preferences
                </h3>
                <div className="space-y-4">
                  {[
                    {
                      label: "New Order Alerts",
                      desc: "Get notified when a new order is placed",
                    },
                    {
                      label: "Restaurant Requests",
                      desc: "Notifications for new restaurant applications",
                    },
                    {
                      label: "Rider Applications",
                      desc: "Alerts for new rider sign-ups",
                    },
                    {
                      label: "Payment Updates",
                      desc: "Notifications for payment transactions",
                    },
                    {
                      label: "System Alerts",
                      desc: "Important system and maintenance updates",
                    },
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-between p-4 bg-white/5 rounded-xl"
                    >
                      <div>
                        <p className="text-white font-medium">{item.label}</p>
                        <p className="text-white/50 text-sm">{item.desc}</p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          className="sr-only peer"
                          defaultChecked
                        />
                        <div className="w-11 h-6 bg-white/20 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-500"></div>
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeSection === "security" && (
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">
                  Security Settings
                </h3>
                <div className="space-y-6">
                  <div>
                    <label className="block text-white font-medium mb-2">
                      Current Password
                    </label>
                    <input
                      type="password"
                      placeholder="Enter current password"
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/50"
                    />
                  </div>
                  <div>
                    <label className="block text-white font-medium mb-2">
                      New Password
                    </label>
                    <input
                      type="password"
                      placeholder="Enter new password"
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/50"
                    />
                  </div>
                  <div>
                    <label className="block text-white font-medium mb-2">
                      Confirm New Password
                    </label>
                    <input
                      type="password"
                      placeholder="Confirm new password"
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/50"
                    />
                  </div>
                  <div className="p-4 bg-blue-400/10 border border-blue-400/20 rounded-xl">
                    <p className="text-blue-200 text-sm">
                      <strong>Two-Factor Authentication:</strong> Add an extra
                      layer of security to your account
                    </p>
                    <button className="mt-3 px-4 py-2 bg-blue-400/20 text-blue-200 rounded-lg font-medium hover:bg-blue-400/30 transition">
                      Enable 2FA
                    </button>
                  </div>
                  <button className="px-6 py-3 bg-white text-[#E59A01] rounded-xl font-bold shadow-xl hover:bg-white/90 transition">
                    Update Password
                  </button>
                </div>
              </div>
            )}

            {activeSection === "billing" && (
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">
                  Billing & Payments
                </h3>
                <div className="space-y-6">
                  <div className="bg-gradient-to-r from-green-400/10 to-emerald-600/10 rounded-2xl p-6 border border-green-400/20">
                    <p className="text-green-200 text-sm mb-2">Current Plan</p>
                    <h4 className="text-white text-3xl font-bold mb-1">
                      Premium
                    </h4>
                    <p className="text-white/70 text-sm">₹9,999/month</p>
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-4">
                      Payment Method
                    </h4>
                    <div className="p-4 bg-white/5 rounded-xl flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center text-2xl">
                          💳
                        </div>
                        <div>
                          <p className="text-white font-medium">
                            •••• •••• •••• 4242
                          </p>
                          <p className="text-white/50 text-sm">Expires 12/25</p>
                        </div>
                      </div>
                      <button className="text-white/70 hover:text-white text-sm font-medium">
                        Edit
                      </button>
                    </div>
                  </div>
                  <button className="px-6 py-3 bg-white/10 border border-white/20 text-white rounded-xl font-bold hover:bg-white/20 transition">
                    View Billing History
                  </button>
                </div>
              </div>
            )}

            {activeSection === "team" && (
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">
                  Team Members
                </h3>
                <div className="space-y-4">
                  {[
                    {
                      name: "Admin User",
                      email: "admin@deligro.com",
                      role: "Super Admin",
                      avatar: "👨‍💼",
                    },
                    {
                      name: "Manager User",
                      email: "manager@deligro.com",
                      role: "Manager",
                      avatar: "👩‍💼",
                    },
                    {
                      name: "Support User",
                      email: "support@deligro.com",
                      role: "Support",
                      avatar: "👨‍💻",
                    },
                  ].map((member, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-between p-4 bg-white/5 rounded-xl"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-2xl">
                          {member.avatar}
                        </div>
                        <div>
                          <p className="text-white font-medium">
                            {member.name}
                          </p>
                          <p className="text-white/50 text-sm">
                            {member.email}
                          </p>
                        </div>
                      </div>
                      <span className="px-3 py-1 bg-white/10 rounded-full text-xs font-medium text-white">
                        {member.role}
                      </span>
                    </div>
                  ))}
                  <button className="w-full py-3 bg-white/10 border border-white/20 text-white rounded-xl font-bold hover:bg-white/20 transition">
                    + Invite Team Member
                  </button>
                </div>
              </div>
            )}

            {activeSection === "api" && (
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">API Keys</h3>
                <div className="space-y-6">
                  <div className="p-4 bg-yellow-400/10 border border-yellow-400/20 rounded-xl">
                    <p className="text-yellow-200 text-sm">
                      ⚠️ Keep your API keys secure. Do not share them publicly.
                    </p>
                  </div>
                  <div>
                    <label className="block text-white font-medium mb-2">
                      Production API Key
                    </label>
                    <div className="flex gap-2">
                      <input
                        type="text"
                        value="sk_live_••••••••••••••••••••"
                        readOnly
                        className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white"
                      />
                      <button className="px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white hover:bg-white/20 transition">
                        Copy
                      </button>
                    </div>
                  </div>
                  <div>
                    <label className="block text-white font-medium mb-2">
                      Test API Key
                    </label>
                    <div className="flex gap-2">
                      <input
                        type="text"
                        value="sk_test_••••••••••••••••••••"
                        readOnly
                        className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white"
                      />
                      <button className="px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white hover:bg-white/20 transition">
                        Copy
                      </button>
                    </div>
                  </div>
                  <button className="px-6 py-3 bg-white text-[#E59A01] rounded-xl font-bold shadow-xl hover:bg-white/90 transition">
                    Regenerate Keys
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsView;
