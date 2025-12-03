"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

interface Slide {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  buttonText: string;
  buttonLink: string;
}

const slides: Slide[] = [
  {
    id: 1,
    title: "Fast Delivery",
    subtitle: "Get Your Food in 30 Minutes",
    description:
      "Order from your favorite restaurants and get it delivered to your doorstep in no time!",
    image: "/delivery-bike.png",
    buttonText: "Order Now",
    buttonLink: "/order",
  },
  {
    id: 2,
    title: "Fresh & Quality",
    subtitle: "100% Fresh Ingredients",
    description:
      "We ensure the highest quality ingredients in every meal we deliver to you.",
    image: "/fresh-food.png",
    buttonText: "Explore Menu",
    buttonLink: "/order",
  },
  {
    id: 3,
    title: "Best Offers",
    subtitle: "Save More on Every Order",
    description:
      "Enjoy exclusive deals and discounts on your favorite meals every day!",
    image: "/offers.png",
    buttonText: "View Offers",
    buttonLink: "/order",
  },
];

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // Auto-advance slides every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []); // Remove currentSlide dependency to ensure consistent timing

  const handleNext = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentSlide((prev) => (prev + 1) % slides.length);
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  const handlePrev = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  const goToSlide = (index: number) => {
    if (!isAnimating && index !== currentSlide) {
      setIsAnimating(true);
      setCurrentSlide(index);
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  return (
    <div className="relative w-full h-[250px] md:h-[320px] overflow-hidden rounded-3xl bg-white/10 backdrop-blur-xl border border-white/30 shadow-2xl">
      {/* Slides */}
      <div className="relative w-full h-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-all duration-700 ease-in-out ${
              index === currentSlide
                ? "opacity-100 translate-x-0 scale-100"
                : index < currentSlide
                ? "opacity-0 -translate-x-full scale-95"
                : "opacity-0 translate-x-full scale-95"
            }`}
          >
            <div className="flex flex-col md:flex-row items-center justify-between h-full p-4 md:p-6">
              {/* Content */}
              <div className="flex-1 space-y-2 text-center md:text-left z-10">
                <div className="space-y-1">
                  <h3 className="text-xs md:text-sm font-semibold text-white/80 uppercase tracking-wider">
                    {slide.title}
                  </h3>
                  <h2 className="text-xl md:text-2xl font-bold text-white leading-tight">
                    {slide.subtitle}
                  </h2>
                </div>
                <p className="text-sm md:text-base text-white/90 max-w-md line-clamp-2">
                  {slide.description}
                </p>
                <button className="px-4 py-2 bg-white text-[#E59A01] rounded-full font-bold text-sm hover:bg-white/90 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
                  {slide.buttonText}
                </button>
              </div>

              {/* Image */}
              <div className="flex-1 flex items-center justify-center mt-4 md:mt-0">
                <div className="relative w-32 h-32 md:w-40 md:h-40 animate-float">
                  <div className="absolute inset-0 bg-white/20 rounded-full blur-2xl"></div>
                  <div className="relative w-full h-full flex items-center justify-center text-5xl md:text-6xl">
                    {slide.id === 1 ? "🏍️" : slide.id === 2 ? "🍕" : "🎁"}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={handlePrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-xl border border-white/30 rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300 z-20 group"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="group-hover:-translate-x-1 transition-transform"
        >
          <path d="m15 18-6-6 6-6" />
        </svg>
      </button>

      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-xl border border-white/30 rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300 z-20 group"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="group-hover:translate-x-1 transition-transform"
        >
          <path d="m9 18 6-6-6-6" />
        </svg>
      </button>

      {/* Dot Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-300 rounded-full ${
              index === currentSlide
                ? "w-12 h-3 bg-white"
                : "w-3 h-3 bg-white/40 hover:bg-white/60"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Floating Animation Keyframes */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
