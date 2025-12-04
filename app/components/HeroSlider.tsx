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

interface SliderSettings {
  slides: Slide[];
  interval: number;
  showContent: boolean;
  showButton: boolean;
}

const defaultSlides: Slide[] = [
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
  const [settings, setSettings] = useState<SliderSettings>({
    slides: defaultSlides,
    interval: 5,
    showContent: true,
    showButton: true,
  });

  // Load settings and listen for changes
  useEffect(() => {
    const loadSettings = () => {
      const savedSettings = localStorage.getItem("heroSliderSettings");
      if (savedSettings) {
        try {
          const parsed = JSON.parse(savedSettings);
          // Ensure we have valid slides, fallback to default if empty array (optional, but safer)
          if (!parsed.slides || parsed.slides.length === 0) {
            parsed.slides = defaultSlides;
          }
          setSettings(parsed);
        } catch (e) {
          console.error("Failed to parse slider settings", e);
        }
      }
    };

    loadSettings();

    const handleSettingsChange = () => loadSettings();
    window.addEventListener("sliderSettingsChanged", handleSettingsChange);

    return () => {
      window.removeEventListener("sliderSettingsChanged", handleSettingsChange);
    };
  }, []);

  // Auto-advance slides
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % settings.slides.length);
    }, settings.interval * 1000); // Use dynamic interval

    return () => clearInterval(timer);
  }, [settings.interval, settings.slides.length]);

  const goToSlide = (index: number) => {
    if (!isAnimating && index !== currentSlide) {
      setIsAnimating(true);
      setCurrentSlide(index);
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  return (
    <div className="relative w-full h-[180px] md:h-[350px] overflow-hidden rounded-2xl md:rounded-3xl bg-white/10 backdrop-blur-xl border border-white/30 shadow-2xl">
      {/* Slides */}
      <div className="relative w-full h-full">
        {settings.slides.map((slide, index) => (
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
            <div className="relative w-full h-full">
              {/* Background Image */}
              <div className="absolute inset-0">
                {slide.image.startsWith("/") && !slide.image.includes(".") ? (
                  // Fallback for emoji placeholders
                  <div className="w-full h-full bg-gradient-to-r from-orange-500 to-yellow-500 flex items-center justify-center">
                    <span className="text-9xl opacity-20">
                      {slide.id === 1 ? "🏍️" : slide.id === 2 ? "🍕" : "🎁"}
                    </span>
                  </div>
                ) : (
                  <Image
                    src={slide.image}
                    alt={slide.subtitle}
                    fill
                    className="object-cover"
                    priority={index === 0}
                  />
                )}
                {/* Gradient Overlay for Text Readability */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
              </div>

              {/* Content */}
              {settings.showContent && (
                <div className="relative z-10 h-full flex flex-col justify-center px-4 sm:px-10 md:px-16 max-w-3xl">
                  <div className="space-y-1 md:space-y-2 animate-fade-in-up">
                    <h3 className="text-[10px] sm:text-sm font-bold text-[#E59A01] uppercase tracking-widest">
                      {slide.title}
                    </h3>
                    <h2 className="text-xl sm:text-3xl md:text-5xl font-extrabold text-white leading-tight drop-shadow-lg">
                      {slide.subtitle}
                    </h2>
                    <p className="text-xs sm:text-base md:text-lg text-white/90 max-w-lg leading-relaxed drop-shadow-md line-clamp-2">
                      {slide.description}
                    </p>
                    {settings.showButton && (
                      <div className="pt-2">
                        <button className="px-4 py-2 md:px-6 md:py-3 bg-[#E59A01] text-white rounded-full font-bold text-xs sm:text-base hover:bg-[#d08b01] transition-all duration-300 shadow-lg hover:shadow-orange-500/30 hover:-translate-y-1">
                          {slide.buttonText}
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Dot Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-3 z-20">
        {settings.slides.map((_, index) => (
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
