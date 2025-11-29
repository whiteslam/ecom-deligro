"use client";
import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import { useRouter } from "next/navigation";

import { auth } from "../firebase";
import {
  RecaptchaVerifier,
  signInWithPhoneNumber,
  ConfirmationResult,
} from "firebase/auth";

declare global {
  interface Window {
    recaptchaVerifier: any;
  }
}

const LoginPage = () => {
  const router = useRouter();
  const [mobile, setMobile] = useState("");
  const [otp, setOtp] = useState("");
  const [showOtp, setShowOtp] = useState(false);
  const [timer, setTimer] = useState(15);
  const [canResend, setCanResend] = useState(false);
  const [confirmationResult, setConfirmationResult] =
    useState<ConfirmationResult | null>(null);

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

  const setupRecaptcha = () => {
    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(
        auth,
        "recaptcha-container",
        {
          size: "invisible",
          callback: () => {
            // reCAPTCHA solved, allow signInWithPhoneNumber.
          },
        }
      );
    }
  };

  const handleSendOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    if (mobile.length === 10) {
      try {
        setupRecaptcha();
        const appVerifier = window.recaptchaVerifier;
        const phoneNumber = "+91" + mobile; // Assuming India for now
        console.log("Attempting to send OTP to:", phoneNumber);
        const confirmation = await signInWithPhoneNumber(
          auth,
          phoneNumber,
          appVerifier
        );
        setConfirmationResult(confirmation);
        setShowOtp(true);
        setTimer(15);
        setCanResend(false);
      } catch (error: any) {
        console.error("Error sending OTP:", error);
        if (error.code === "auth/operation-not-allowed") {
          alert(
            "Phone authentication is not enabled in Firebase Console. Please enable it in Authentication > Sign-in method."
          );
        } else if (error.code === "auth/quota-exceeded") {
          alert(
            "SMS quota exceeded for this project. Please use a Test Phone Number (defined in Firebase Console) to continue testing."
          );
        } else if (error.code === "auth/unauthorized-domain") {
          alert(
            "This domain/IP is not authorized. Please add it to 'Authorized Domains' in Firebase Console > Authentication > Settings."
          );
        } else {
          alert(`Failed to send OTP. Error: ${error.code} - ${error.message}`);
        }
      }
    } else {
      alert("Please enter a valid 10-digit mobile number");
    }
  };

  const handleVerifyOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    if (otp.length === 6 && confirmationResult) {
      try {
        await confirmationResult.confirm(otp);
        localStorage.setItem("isLoggedIn", "true");
        window.dispatchEvent(new Event("loginStateChange"));
        router.push("/");
      } catch (error) {
        console.error("Error verifying OTP:", error);
        alert("Invalid OTP. Please try again.");
      }
    } else {
      alert("Please enter a valid 6-digit OTP");
    }
  };

  // Add type definition for window
  useEffect(() => {
    window.recaptchaVerifier = undefined;
  }, []);

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
          <div id="recaptcha-container"></div>

          {!showOtp ? (
            <form onSubmit={handleSendOtp} className="space-y-6">
              <div>
                <label
                  htmlFor="mobile"
                  className="block text-sm font-medium text-[#2B2B2B] mb-2"
                >
                  Mobile Number
                </label>
                <div className="relative">
                  <span className="absolute left-6 top-1/2 transform -translate-y-1/2 text-gray-500 font-medium">
                    +91
                  </span>
                  <input
                    type="tel"
                    id="mobile"
                    value={mobile}
                    onChange={(e) => {
                      const val = e.target.value.replace(/\D/g, "");
                      if (val.length <= 10) setMobile(val);
                    }}
                    className="w-full pl-16 pr-6 py-3 bg-white/50 border border-white/30 rounded-full focus:outline-none focus:border-[#D92E2E] focus:ring-1 focus:ring-[#D92E2E] transition"
                    placeholder="Enter 10-digit number"
                    pattern="[0-9]{10}"
                    required
                  />
                </div>
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
                  maxLength={6}
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
