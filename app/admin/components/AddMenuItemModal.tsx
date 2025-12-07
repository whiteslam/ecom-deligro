"use client";
import React, { useState } from "react";
import ImageUpload from "./ImageUpload";
import { supabase } from "../../lib/supabaseClient";

interface AddMenuItemModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAdd: () => void;
  restaurants: any[];
}

const AddMenuItemModal: React.FC<AddMenuItemModalProps> = ({
  isOpen,
  onClose,
  onAdd,
  restaurants,
}) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    // Basic Info
    name: "",
    restaurantId: "", // Store ID instead of name
    category: "",
    description: "",
    image: "🍽️",
    customImage: "", // URL input
    uploadedImageData: null as string | null,

    // Pricing & Details
    price: "",
    discountedPrice: "",
    preparationTime: "",
    servingSize: "",

    // Dietary & Tags
    isVeg: true,
    isVegan: false,
    isGlutenFree: false,
    isSpicy: false,
    spicyLevel: "1",
    tags: [] as string[],

    // Availability
    isAvailable: true,
    availableDays: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    availableTimeStart: "09:00",
    availableTimeEnd: "22:00",

    // Customizations
    customizations: [] as Array<{
      name: string;
      options: Array<{ name: string; price: string }>;
      required: boolean;
      multiSelect: boolean;
    }>,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const finalImage = formData.customImage || formData.image;

    try {
      const { error } = await supabase.from("menu_items").insert([
        {
          restaurant_id: formData.restaurantId,
          name: formData.name,
          description: formData.description,
          price: parseFloat(formData.price),
          image_url: finalImage,
          category: formData.category,
          is_veg: formData.isVeg,
          is_bestseller: formData.tags.includes("Bestseller"),
        },
      ]);

      if (error) {
        console.error("Error adding menu item:", error);
        alert("Failed to add menu item. Please try again.");
      } else {
        onAdd();
        resetForm();
        onClose();
      }
    } catch (err) {
      console.error("Unexpected error:", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setCurrentStep(1);
    setUploadedImage(null);
    setFormData({
      name: "",
      restaurantId: "",
      category: "",
      description: "",
      image: "🍽️",
      customImage: "",
      uploadedImageData: null,
      price: "",
      discountedPrice: "",
      preparationTime: "",
      servingSize: "",
      isVeg: true,
      isVegan: false,
      isGlutenFree: false,
      isSpicy: false,
      spicyLevel: "1",
      tags: [],
      isAvailable: true,
      availableDays: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      availableTimeStart: "09:00",
      availableTimeEnd: "22:00",
      customizations: [],
    });
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value, type } = e.target;
    // Handle checkbox
    const checked = (e.target as HTMLInputElement).checked;

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const addCustomization = () => {
    setFormData({
      ...formData,
      customizations: [
        ...formData.customizations,
        {
          name: "",
          options: [{ name: "", price: "" }],
          required: false,
          multiSelect: false,
        },
      ],
    });
  };

  const removeCustomization = (index: number) => {
    const newCustomizations = formData.customizations.filter(
      (_, i) => i !== index
    );
    setFormData({ ...formData, customizations: newCustomizations });
  };

  const updateCustomization = (index: number, field: string, value: any) => {
    const newCustomizations = [...formData.customizations];
    newCustomizations[index] = { ...newCustomizations[index], [field]: value };
    setFormData({ ...formData, customizations: newCustomizations });
  };

  const addCustomizationOption = (customizationIndex: number) => {
    const newCustomizations = [...formData.customizations];
    newCustomizations[customizationIndex].options.push({ name: "", price: "" });
    setFormData({ ...formData, customizations: newCustomizations });
  };

  const updateCustomizationOption = (
    customizationIndex: number,
    optionIndex: number,
    field: string,
    value: string
  ) => {
    const newCustomizations = [...formData.customizations];
    newCustomizations[customizationIndex].options[optionIndex] = {
      ...newCustomizations[customizationIndex].options[optionIndex],
      [field]: value,
    };
    setFormData({ ...formData, customizations: newCustomizations });
  };

  const toggleDay = (day: string) => {
    const newDays = formData.availableDays.includes(day)
      ? formData.availableDays.filter((d) => d !== day)
      : [...formData.availableDays, day];
    setFormData({ ...formData, availableDays: newDays });
  };

  const toggleTag = (tag: string) => {
    const newTags = formData.tags.includes(tag)
      ? formData.tags.filter((t) => t !== tag)
      : [...formData.tags, tag];
    setFormData({ ...formData, tags: newTags });
  };

  if (!isOpen) return null;

  const steps = [
    { number: 1, title: "Basic Info", icon: "📝" },
    { number: 2, title: "Pricing & Details", icon: "💰" },
    { number: 3, title: "Dietary & Tags", icon: "🏷️" },
    { number: 4, title: "Customizations", icon: "⚙️" },
    { number: 5, title: "Availability", icon: "📅" },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl max-h-[95vh] overflow-hidden">
        <div className="relative bg-[#E59A01] rounded-3xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300">
          {/* Decorative Background */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-linear-to-br from-orange-300/30 to-red-500/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-linear-to-tl from-yellow-300/30 to-orange-400/30 rounded-full blur-3xl"></div>

          <div className="relative bg-white/15 backdrop-blur-2xl border border-white/30 rounded-3xl">
            {/* Header */}
            <div className="sticky top-0 z-10 bg-white/10 backdrop-blur-xl border-b border-white/20 px-8 py-6">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-3xl font-bold text-white mb-1">
                    Add Menu Item
                  </h2>
                  <p className="text-white/70 text-sm">
                    Create a new dish for your restaurant menu
                  </p>
                </div>
                <button
                  onClick={() => {
                    resetForm();
                    onClose();
                  }}
                  className="p-3 bg-white/10 hover:bg-white/20 rounded-full transition-all duration-200 text-white group"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    className="group-hover:rotate-90 transition-transform duration-200"
                  >
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                </button>
              </div>

              {/* Progress Steps */}
              <div className="flex items-center justify-between">
                {steps.map((step, index) => (
                  <React.Fragment key={step.number}>
                    <div className="flex flex-col items-center gap-2">
                      <div
                        className={`w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold transition-all duration-300 ${
                          currentStep === step.number
                            ? "bg-white text-[#E59A01] scale-110 shadow-lg"
                            : currentStep > step.number
                            ? "bg-green-400 text-white"
                            : "bg-white/20 text-white/60"
                        }`}
                      >
                        {currentStep > step.number ? "✓" : step.icon}
                      </div>
                      <span
                        className={`text-xs font-medium hidden md:block ${
                          currentStep === step.number
                            ? "text-white"
                            : "text-white/60"
                        }`}
                      >
                        {step.title}
                      </span>
                    </div>
                    {index < steps.length - 1 && (
                      <div
                        className={`flex-1 h-1 mx-2 rounded-full transition-all duration-300 ${
                          currentStep > step.number
                            ? "bg-green-400"
                            : "bg-white/20"
                        }`}
                      ></div>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>

            {/* Form Content */}
            <form
              onSubmit={handleSubmit}
              className="overflow-y-auto max-h-[calc(95vh-280px)] px-8 py-6"
            >
              {/* Step 1: Basic Info */}
              {currentStep === 1 && (
                <div className="space-y-6 animate-in fade-in slide-in-from-right-5 duration-300">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="md:col-span-2">
                      <label className="block text-white font-semibold mb-2 text-sm">
                        Dish Name <span className="text-red-300">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="e.g., Butter Chicken"
                        className="w-full px-4 py-3.5 bg-white/20 border-2 border-white/30 rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/60 focus:border-white/50 backdrop-blur-sm transition-all duration-200 font-medium"
                      />
                    </div>

                    <div>
                      <label className="block text-white font-semibold mb-2 text-sm">
                        Restaurant <span className="text-red-300">*</span>
                      </label>
                      <select
                        name="restaurantId"
                        value={formData.restaurantId}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3.5 bg-white/20 border-2 border-white/30 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-white/60 cursor-pointer backdrop-blur-sm font-medium [&>option]:text-gray-800 [&>option]:bg-white"
                      >
                        <option value="">Select Restaurant</option>
                        {restaurants.map((restaurant) => (
                          <option key={restaurant.id} value={restaurant.id}>
                            {restaurant.name}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-white font-semibold mb-2 text-sm">
                        Category <span className="text-red-300">*</span>
                      </label>
                      <select
                        name="category"
                        value={formData.category}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3.5 bg-white/20 border-2 border-white/30 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-white/60 cursor-pointer backdrop-blur-sm font-medium [&>option]:text-gray-800 [&>option]:bg-white"
                      >
                        <option value="">Select Category</option>
                        <option value="Starters">🥗 Starters</option>
                        <option value="Main Course">🍛 Main Course</option>
                        <option value="Breads">🥖 Breads</option>
                        <option value="Rice & Biryani">
                          🍚 Rice & Biryani
                        </option>
                        <option value="Desserts">🍰 Desserts</option>
                        <option value="Beverages">🥤 Beverages</option>
                        <option value="Snacks">🍟 Snacks</option>
                      </select>
                    </div>

                    <div className="md:col-span-2">
                      <label className="block text-white font-semibold mb-2 text-sm">
                        Image URL (Optional)
                      </label>
                      <input
                        type="text"
                        name="customImage"
                        value={formData.customImage}
                        onChange={handleChange}
                        placeholder="https://example.com/item.jpg"
                        className="w-full px-4 py-3.5 bg-white/20 border-2 border-white/30 rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/60 focus:border-white/50 backdrop-blur-sm transition-all duration-200 font-medium mb-4"
                      />
                    </div>

                    <div className="md:col-span-2">
                      <label className="block text-white font-semibold mb-2 text-sm">
                        Description <span className="text-red-300">*</span>
                      </label>
                      <textarea
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        required
                        rows={3}
                        placeholder="Describe the dish, ingredients, and what makes it special..."
                        className="w-full px-4 py-3.5 bg-white/20 border-2 border-white/30 rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/60 backdrop-blur-sm resize-none font-medium"
                      />
                    </div>
                  </div>

                  {/* Icon Selector */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border-2 border-white/20">
                    <p className="text-white/80 text-sm mb-4 font-medium">
                      Select or Use URL above
                    </p>
                    <div className="grid grid-cols-8 md:grid-cols-12 gap-3">
                      {[
                        "🍽️",
                        "🍛",
                        "🍕",
                        "🍔",
                        "🍱",
                        "🥘",
                        "🍜",
                        "🥗",
                        "🍝",
                        "🌮",
                        "🍰",
                        "🥤",
                        "🍟",
                        "🥖",
                        "🍚",
                        "🍖",
                      ].map((emoji) => (
                        <button
                          key={emoji}
                          type="button"
                          onClick={() =>
                            setFormData({
                              ...formData,
                              image: emoji,
                              customImage: "",
                            })
                          }
                          className={`aspect-square p-3 text-2xl rounded-xl transition-all duration-200 ${
                            formData.image === emoji && !formData.customImage
                              ? "bg-white text-[#E59A01] scale-110 shadow-xl ring-2 ring-white/50"
                              : "bg-white/20 hover:bg-white/30 hover:scale-105"
                          }`}
                        >
                          {emoji}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Step 2: Pricing & Details */}
              {currentStep === 2 && (
                <div className="space-y-6 animate-in fade-in slide-in-from-right-5 duration-300">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-white font-semibold mb-2 text-sm">
                        Price (₹) <span className="text-red-300">*</span>
                      </label>
                      <input
                        type="number"
                        name="price"
                        value={formData.price}
                        onChange={handleChange}
                        required
                        min="0"
                        step="1"
                        placeholder="299"
                        className="w-full px-4 py-3.5 bg-white/20 border-2 border-white/30 rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/60 backdrop-blur-sm font-medium"
                      />
                    </div>

                    <div>
                      <label className="block text-white font-semibold mb-2 text-sm">
                        Discounted Price (₹){" "}
                        <span className="text-white/60 text-xs">
                          (Optional)
                        </span>
                      </label>
                      <input
                        type="number"
                        name="discountedPrice"
                        value={formData.discountedPrice}
                        onChange={handleChange}
                        min="0"
                        step="1"
                        placeholder="249"
                        className="w-full px-4 py-3.5 bg-white/20 border-2 border-white/30 rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/60 backdrop-blur-sm font-medium"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Other steps logic ... (Simulated by simple navigation for now to keep this minimal for Supabase integration, but keeping the navigation buttons below) */}

              {/* Step 3: Dietary - Simplified viewing for now as these don't map to DB columns instantly in this strict schema without JSON B, but mapped is_veg */}
              {currentStep === 3 && (
                <div className="space-y-6 animate-in fade-in slide-in-from-right-5 duration-300">
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <input
                      type="checkbox"
                      name="isVeg"
                      checked={formData.isVeg}
                      onChange={handleChange}
                      className="w-5 h-5 rounded border-2 border-white/30 bg-white/20 checked:bg-green-500 checked:border-green-500 cursor-pointer"
                    />
                    <span className="text-white font-medium">Vegetarian</span>
                  </label>
                  {/* Other tags can be added here if schema supports them */}
                </div>
              )}

              {/* Skipping complex steps 4 & 5 customization for DB mvp */}
            </form>

            {/* Footer - Fixed */}
            <div className="sticky bottom-0 z-10 bg-white/10 backdrop-blur-xl border-t border-white/20 px-8 py-6">
              <div className="flex gap-4 justify-between">
                {currentStep > 1 ? (
                  <button
                    type="button"
                    onClick={() => setCurrentStep((prev) => prev - 1)}
                    className="px-6 py-3.5 bg-white/10 border-2 border-white/30 text-white rounded-xl font-bold hover:bg-white/20 transition-all duration-200"
                  >
                    Back
                  </button>
                ) : (
                  <div></div>
                )}

                {currentStep < 5 ? (
                  <button
                    type="button"
                    onClick={() => setCurrentStep((prev) => prev + 1)}
                    className="px-6 py-3.5 bg-white text-[#E59A01] rounded-xl font-bold shadow-xl hover:shadow-2xl transition-all duration-200"
                  >
                    Next
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                    className="px-6 py-3.5 bg-green-500 text-white rounded-xl font-bold shadow-xl hover:shadow-2xl transition-all duration-200 disabled:opacity-50"
                  >
                    {isSubmitting ? "Saving..." : "Save Item"}
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddMenuItemModal;
