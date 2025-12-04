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

const SliderManagementView = () => {
  const [settings, setSettings] = useState<SliderSettings>({
    slides: defaultSlides,
    interval: 5,
    showContent: true,
    showButton: true,
  });

  const [editingSlide, setEditingSlide] = useState<Slide | null>(null);
  const [isFormOpen, setIsFormOpen] = useState(false);

  // Load settings from localStorage on mount
  useEffect(() => {
    const savedSettings = localStorage.getItem("heroSliderSettings");
    if (savedSettings) {
      try {
        setSettings(JSON.parse(savedSettings));
      } catch (e) {
        console.error("Failed to parse slider settings", e);
      }
    }
  }, []);

  // Save settings to localStorage whenever they change
  const saveSettings = (newSettings: SliderSettings) => {
    setSettings(newSettings);
    localStorage.setItem("heroSliderSettings", JSON.stringify(newSettings));
    // Dispatch a custom event so HeroSlider can update immediately if it's listening
    window.dispatchEvent(new Event("sliderSettingsChanged"));
  };

  const handleGlobalSettingChange = (key: keyof SliderSettings, value: any) => {
    saveSettings({ ...settings, [key]: value });
  };

  const handleAddSlide = () => {
    const newSlide: Slide = {
      id: Date.now(),
      title: "New Slide",
      subtitle: "Subtitle Here",
      description: "Description goes here...",
      image: "/placeholder.png", // You might want a better default or allow upload
      buttonText: "Click Me",
      buttonLink: "/",
    };
    setEditingSlide(newSlide);
    setIsFormOpen(true);
  };

  const handleEditSlide = (slide: Slide) => {
    setEditingSlide(slide);
    setIsFormOpen(true);
  };

  const handleDeleteSlide = (id: number) => {
    if (confirm("Are you sure you want to delete this slide?")) {
      const newSlides = settings.slides.filter((s) => s.id !== id);
      saveSettings({ ...settings, slides: newSlides });
    }
  };

  const handleSaveSlide = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingSlide) return;

    let newSlides = [...settings.slides];
    const index = newSlides.findIndex((s) => s.id === editingSlide.id);

    if (index >= 0) {
      newSlides[index] = editingSlide;
    } else {
      newSlides.push(editingSlide);
    }

    saveSettings({ ...settings, slides: newSlides });
    setIsFormOpen(false);
    setEditingSlide(null);
  };

  return (
    <div className="space-y-8 animate-fade-in-up">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold text-white">Slider Management</h2>
          <p className="text-white/60">
            Customize your home page hero slider content and settings.
          </p>
        </div>
        <button
          onClick={handleAddSlide}
          className="px-6 py-2 bg-white text-[#E59A01] rounded-xl font-bold hover:bg-white/90 transition shadow-lg flex items-center gap-2"
        >
          <span>+</span> Add New Slide
        </button>
      </div>

      {/* Global Settings Card */}
      <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-6 shadow-xl">
        <h3 className="text-xl font-bold text-white mb-6 border-b border-white/10 pb-4">
          Global Settings
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Interval Setting */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-white/80">
              Auto-Slide Interval (Seconds)
            </label>
            <input
              type="number"
              min="1"
              max="60"
              value={settings.interval}
              onChange={(e) =>
                handleGlobalSettingChange("interval", parseInt(e.target.value))
              }
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-white/30 transition"
            />
          </div>

          {/* Show Content Toggle */}
          <div className="flex items-center justify-between bg-white/5 p-4 rounded-xl border border-white/10">
            <div>
              <h4 className="font-bold text-white">Show Text Content</h4>
              <p className="text-xs text-white/60">
                Hide title, subtitle & description
              </p>
            </div>
            <button
              onClick={() =>
                handleGlobalSettingChange("showContent", !settings.showContent)
              }
              className={`w-12 h-6 rounded-full p-1 transition-colors duration-300 ${
                settings.showContent ? "bg-green-500" : "bg-white/20"
              }`}
            >
              <div
                className={`w-4 h-4 bg-white rounded-full shadow-md transform transition-transform duration-300 ${
                  settings.showContent ? "translate-x-6" : "translate-x-0"
                }`}
              />
            </button>
          </div>

          {/* Show Button Toggle */}
          <div className="flex items-center justify-between bg-white/5 p-4 rounded-xl border border-white/10">
            <div>
              <h4 className="font-bold text-white">Show Action Button</h4>
              <p className="text-xs text-white/60">
                Hide the call-to-action button
              </p>
            </div>
            <button
              onClick={() =>
                handleGlobalSettingChange("showButton", !settings.showButton)
              }
              className={`w-12 h-6 rounded-full p-1 transition-colors duration-300 ${
                settings.showButton ? "bg-green-500" : "bg-white/20"
              }`}
            >
              <div
                className={`w-4 h-4 bg-white rounded-full shadow-md transform transition-transform duration-300 ${
                  settings.showButton ? "translate-x-6" : "translate-x-0"
                }`}
              />
            </button>
          </div>
        </div>
      </div>

      {/* Slides List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {settings.slides.map((slide, index) => (
          <div
            key={slide.id}
            className="group relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
          >
            {/* Slide Preview */}
            <div className="relative h-48 bg-gray-800/50">
              {slide.image && (
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  className="object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                />
              )}
              <div className="absolute top-4 right-4 flex gap-2">
                <button
                  onClick={() => handleEditSlide(slide)}
                  className="p-2 bg-white/20 hover:bg-white/40 backdrop-blur-md rounded-full text-white transition"
                  title="Edit"
                >
                  ✏️
                </button>
                <button
                  onClick={() => handleDeleteSlide(slide.id)}
                  className="p-2 bg-red-500/80 hover:bg-red-500 backdrop-blur-md rounded-full text-white transition"
                  title="Delete"
                >
                  🗑️
                </button>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                <span className="text-xs font-bold text-[#E59A01] uppercase tracking-wider">
                  Slide {index + 1}
                </span>
                <h3 className="text-lg font-bold text-white truncate">
                  {slide.title}
                </h3>
              </div>
            </div>

            {/* Slide Details */}
            <div className="p-4 space-y-2">
              <p className="text-sm text-white/80 line-clamp-2">
                {slide.description}
              </p>
              <div className="flex items-center gap-2 text-xs text-white/50 pt-2 border-t border-white/10">
                <span className="bg-white/10 px-2 py-1 rounded">
                  Btn: {slide.buttonText}
                </span>
                <span className="bg-white/10 px-2 py-1 rounded truncate flex-1">
                  Link: {slide.buttonLink}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Edit/Add Slide Modal */}
      {isFormOpen && editingSlide && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-[#1a1a1a] border border-white/20 rounded-3xl w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl animate-scale-in">
            <div className="p-6 border-b border-white/10 flex justify-between items-center sticky top-0 bg-[#1a1a1a] z-10">
              <h3 className="text-xl font-bold text-white">
                {settings.slides.find((s) => s.id === editingSlide.id)
                  ? "Edit Slide"
                  : "Add New Slide"}
              </h3>
              <button
                onClick={() => setIsFormOpen(false)}
                className="text-white/60 hover:text-white transition"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleSaveSlide} className="p-6 space-y-6">
              {/* Image Upload */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-white/80">
                  Slide Image
                </label>
                <div className="flex items-start gap-4">
                  <div className="relative w-24 h-24 bg-white/5 border border-white/10 rounded-xl overflow-hidden flex-shrink-0">
                    {editingSlide.image ? (
                      <Image
                        src={editingSlide.image}
                        alt="Preview"
                        fill
                        className="object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-white/20 text-2xl">
                        🖼️
                      </div>
                    )}
                  </div>
                  <div className="flex-1 space-y-2">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) => {
                        const file = e.target.files?.[0];
                        if (file) {
                          if (file.size > 5000000) {
                            // 5MB limit check
                            alert(
                              "File is too large! Please choose an image under 5MB."
                            );
                            return;
                          }
                          const reader = new FileReader();
                          reader.onloadend = () => {
                            setEditingSlide({
                              ...editingSlide,
                              image: reader.result as string,
                            });
                          };
                          reader.readAsDataURL(file);
                        }
                      }}
                      className="block w-full text-sm text-white/60
                        file:mr-4 file:py-2 file:px-4
                        file:rounded-full file:border-0
                        file:text-sm file:font-semibold
                        file:bg-white/10 file:text-white
                        hover:file:bg-white/20
                        cursor-pointer"
                    />
                    <p className="text-xs text-white/40">
                      Upload an image (Max 5MB). It will be saved locally.
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Title */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white/80">
                    Title (Small Top Text)
                  </label>
                  <input
                    type="text"
                    value={editingSlide.title}
                    onChange={(e) =>
                      setEditingSlide({
                        ...editingSlide,
                        title: e.target.value,
                      })
                    }
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-[#E59A01] transition"
                  />
                </div>

                {/* Subtitle */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white/80">
                    Subtitle (Main Heading)
                  </label>
                  <input
                    type="text"
                    value={editingSlide.subtitle}
                    onChange={(e) =>
                      setEditingSlide({
                        ...editingSlide,
                        subtitle: e.target.value,
                      })
                    }
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-[#E59A01] transition"
                  />
                </div>
              </div>

              {/* Description */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-white/80">
                  Description
                </label>
                <textarea
                  value={editingSlide.description}
                  onChange={(e) =>
                    setEditingSlide({
                      ...editingSlide,
                      description: e.target.value,
                    })
                  }
                  rows={3}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-[#E59A01] transition resize-none"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Button Text */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white/80">
                    Button Text
                  </label>
                  <input
                    type="text"
                    value={editingSlide.buttonText}
                    onChange={(e) =>
                      setEditingSlide({
                        ...editingSlide,
                        buttonText: e.target.value,
                      })
                    }
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-[#E59A01] transition"
                  />
                </div>

                {/* Button Link */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white/80">
                    Button Link
                  </label>
                  <input
                    type="text"
                    value={editingSlide.buttonLink}
                    onChange={(e) =>
                      setEditingSlide({
                        ...editingSlide,
                        buttonLink: e.target.value,
                      })
                    }
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-[#E59A01] transition"
                    placeholder="/order"
                  />
                </div>
              </div>

              {/* Actions */}
              <div className="flex justify-end gap-4 pt-4 border-t border-white/10">
                <button
                  type="button"
                  onClick={() => setIsFormOpen(false)}
                  className="px-6 py-2 bg-white/5 hover:bg-white/10 text-white rounded-xl font-medium transition"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-8 py-2 bg-[#E59A01] hover:bg-[#d08b01] text-white rounded-xl font-bold shadow-lg transition"
                >
                  Save Slide
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default SliderManagementView;
