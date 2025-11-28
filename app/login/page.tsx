"use client";
import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const LoginPage = () => {
  const [mobile, setMobile] = useState("");
  const [otp, setOtp] = useState("");
  const [showOtp, setShowOtp] = useState(false);
  const [timer, setTimer] = useState(15);
  const [canResend, setCanResend] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (showOtp && timer > 0) {
      interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
    } else if (timer === 0) {
      setCanResend(true);
    }
    return () => clearInterval(interval);
  }, [showOtp, timer]);

  const handleSendOtp = (e: React.FormEvent) => {
    e.preventDefault();
    if (mobile.length === 10) {
      setShowOtp(true);
      setTimer(15);
      setCanResend(false);
    } else {
      alert("Please enter a valid 10-digit mobile number");
    }
  };

  const handleVerifyOtp = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Verifying OTP: ${otp} for Mobile: ${mobile}`);
    // Add verification logic here
  };

  const handleResendOtp = () => {
    setTimer(15);
    setCanResend(false);
    alert("OTP Resent!");
  };

  return (
    <div className="min-h-screen bg-[#E59A01] font-sans text-gray-800 pt-6">
      <Navbar />
      <main className="px-8 py-20 max-w-7xl mx-auto flex items-center justify-center min-h-[60vh]">
        <div className="bg-white/15 backdrop-blur-2xl border border-white/30 p-10 rounded-3xl shadow-xl w-full max-w-md">
          <h1 className="text-4xl font-bold text-[#2B2B2B] mb-8 text-center">
            Login to <span className="text-[#D92E2E]">Deligro</span>
          </h1>

          {!showOtp ? (
            <form onSubmit={handleSendOtp} className="space-y-6">
              <div>
                <label
                  htmlFor="mobile"
                  className="block text-sm font-medium text-[#2B2B2B] mb-2"
                >
                  Mobile Number
                </label>
                <input
                  type="tel"
                  id="mobile"
                  value={mobile}
                  onChange={(e) => {
                    const val = e.target.value.replace(/\D/g, "");
                    if (val.length <= 10) setMobile(val);
                  }}
                  className="w-full px-6 py-3 bg-white/50 border border-white/30 rounded-full focus:outline-none focus:border-[#D92E2E] focus:ring-1 focus:ring-[#D92E2E] transition"
                  placeholder="Enter 10-digit number"
                  pattern="[0-9]{10}"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 bg-[#D92E2E] text-white rounded-full font-bold shadow-lg hover:bg-[#b91c1c] transition transform hover:scale-[1.02]"
              >
                Get OTP
              </button>
            </form>
          ) : (
            <form onSubmit={handleVerifyOtp} className="space-y-6">
              <div>
                <label
                  htmlFor="otp"
                  className="block text-sm font-medium text-[#2B2B2B] mb-2"
                >
                  Enter OTP
                </label>
                <input
                  type="text"
                  id="otp"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  className="w-full px-6 py-3 bg-white/50 border border-white/30 rounded-full focus:outline-none focus:border-[#D92E2E] focus:ring-1 focus:ring-[#D92E2E] transition text-center tracking-widest text-xl"
                  placeholder="• • • •"
                  maxLength={4}
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 bg-[#D92E2E] text-white rounded-full font-bold shadow-lg hover:bg-[#b91c1c] transition transform hover:scale-[1.02]"
              >
                Verify OTP
              </button>

              <div className="text-center text-sm">
                {canResend ? (
                  <button
                    type="button"
                    onClick={handleResendOtp}
                    className="text-[#D92E2E] font-bold hover:underline"
                  >
                    Resend OTP
                  </button>
                ) : (
                  <p className="text-gray-600">
                    Resend OTP in <span className="font-bold">{timer}s</span>
                  </p>
                )}
              </div>

              <button
                type="button"
                onClick={() => {
                  setShowOtp(false);
                  setOtp("");
                  setTimer(15);
                }}
                className="w-full text-xs text-gray-500 hover:text-[#D92E2E] mt-4"
              >
                Change Mobile Number
              </button>
            </form>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default LoginPage;
