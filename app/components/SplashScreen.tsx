import React, { useEffect, useState } from "react";
import Image from "next/image";

const SplashScreen = ({ onFinish }: { onFinish?: () => void }) => {
  const [isExiting, setIsExiting] = useState(false);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Start entrance animation
    setTimeout(() => setShowContent(true), 100);

    // Start exit sequence
    const exitTimer = setTimeout(() => {
      setIsExiting(true);
    }, 2500); // Show splash for 2.5s

    // Call onFinish after exit animation
    const finishTimer = setTimeout(() => {
      if (onFinish) onFinish();
    }, 3200); // 2.5s + 0.7s exit animation

    return () => {
      clearTimeout(exitTimer);
      clearTimeout(finishTimer);
    };
  }, [onFinish]);

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-gradient-to-br from-[#E59A01] to-[#D92E2E] overflow-hidden transition-all duration-1000 ease-in-out lg:hidden ${
        isExiting
          ? "opacity-0 scale-110 pointer-events-none"
          : "opacity-100 scale-100"
      }`}
    >
      {/* Background Floating Orbs */}
      <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse [animation-delay:1s]"></div>

      {/* Content Container */}
      <div
        className={`relative z-10 flex flex-col items-center transition-all duration-1000 ease-out ${
          showContent ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <h1 className="text-white text-3xl md:text-5xl font-extrabold mb-6 tracking-tight drop-shadow-md">
          Welcome to
        </h1>

        <div className="relative w-48 h-48 md:w-64 md:h-64 animate-float">
          <div className="absolute inset-0 bg-white/20 rounded-full blur-2xl scale-90 animate-pulse"></div>
          <Image
            src="/img/logo.png"
            alt="Deligro Logo"
            fill
            className="object-contain drop-shadow-2xl"
            priority
          />
        </div>

        <div className="mt-10 flex flex-col items-center gap-4">
          {/* Modern Loading Ring */}
          <div className="w-12 h-12 border-4 border-white/30 border-t-white rounded-full animate-spin"></div>
          <p className="text-white/80 text-sm font-medium tracking-wider uppercase">
            Loading Deliciousness...
          </p>
        </div>
      </div>

      {/* Animation Styles */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-15px);
          }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default SplashScreen;
