"use client";
import React, { useState } from "react";
import ImageUpload from "./ImageUpload";

interface AddMenuItemModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAdd: (menuItem: any) => void;
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
  const [formData, setFormData] = useState({
    // Basic Info
    name: "",
    restaurant: "",
    category: "",
    description: "",
    image: "🍽️",
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newMenuItem = {
      id: Date.now(),
      ...formData,
      price: `₹${formData.price}`,
      discountedPrice: formData.discountedPrice
        ? `₹${formData.discountedPrice}`
        : null,
      rating: 4.0,
      orders: 0,
      available: formData.isAvailable,
      addedDate: new Date().toLocaleDateString("en-US", {
        month: "short",
        year: "numeric",
      }),
    };

    onAdd(newMenuItem);
    resetForm();
    onClose();
  };

  const resetForm = () => {
    setCurrentStep(1);
    setUploadedImage(null);
    setFormData({
      name: "",
      restaurant: "",
      category: "",
      description: "",
      image: "🍽️",
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
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-orange-300/30 to-red-500/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tl from-yellow-300/30 to-orange-400/30 rounded-full blur-3xl"></div>

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
                        name="restaurant"
                        value={formData.restaurant}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3.5 bg-white/20 border-2 border-white/30 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-white/60 cursor-pointer backdrop-blur-sm font-medium [&>option]:text-gray-800 [&>option]:bg-white"
                      >
                        <option value="">Select Restaurant</option>
                        {restaurants.map((restaurant) => (
                          <option key={restaurant.id} value={restaurant.name}>
                            {restaurant.image} {restaurant.name}
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

                  {/* Image Upload */}
                  <ImageUpload
                    currentImage={uploadedImage || undefined}
                    onImageChange={(imageData) => {
                      setUploadedImage(imageData);
                      setFormData({
                        ...formData,
                        uploadedImageData: imageData,
                      });
                    }}
                    label="Dish Image (Optional)"
                    aspectRatio="landscape"
                    maxSizeMB={5}
                  />

                  {/* Divider */}
                  <div className="flex items-center gap-4 my-6">
                    <div className="flex-1 h-px bg-white/20"></div>
                    <span className="text-white/60 text-sm font-medium">
                      OR
                    </span>
                    <div className="flex-1 h-px bg-white/20"></div>
                  </div>

                  {/* Icon Selector */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border-2 border-white/20">
                    <p className="text-white/80 text-sm mb-4 font-medium">
                      Select a dish icon
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
                            setFormData({ ...formData, image: emoji })
                          }
                          className={`aspect-square p-3 text-2xl rounded-xl transition-all duration-200 ${
                            formData.image === emoji
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

                    <div>
                      <label className="block text-white font-semibold mb-2 text-sm">
                        Preparation Time (mins){" "}
                        <span className="text-red-300">*</span>
                      </label>
                      <input
                        type="number"
                        name="preparationTime"
                        value={formData.preparationTime}
                        onChange={handleChange}
                        required
                        min="1"
                        placeholder="20"
                        className="w-full px-4 py-3.5 bg-white/20 border-2 border-white/30 rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/60 backdrop-blur-sm font-medium"
                      />
                    </div>

                    <div>
                      <label className="block text-white font-semibold mb-2 text-sm">
                        Serving Size <span className="text-red-300">*</span>
                      </label>
                      <input
                        type="text"
                        name="servingSize"
                        value={formData.servingSize}
                        onChange={handleChange}
                        required
                        placeholder="Serves 2"
                        className="w-full px-4 py-3.5 bg-white/20 border-2 border-white/30 rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/60 backdrop-blur-sm font-medium"
                      />
                    </div>
                  </div>

                  {formData.discountedPrice &&
                    parseFloat(formData.discountedPrice) <
                      parseFloat(formData.price) && (
                      <div className="bg-green-400/20 border-2 border-green-400/40 rounded-xl p-4">
                        <p className="text-green-200 font-semibold text-sm">
                          💰{" "}
                          {Math.round(
                            ((parseFloat(formData.price) -
                              parseFloat(formData.discountedPrice)) /
                              parseFloat(formData.price)) *
                              100
                          )}
                          % OFF - Great deal!
                        </p>
                      </div>
                    )}
                </div>
              )}

              {/* Step 3: Dietary & Tags */}
              {currentStep === 3 && (
                <div className="space-y-6 animate-in fade-in slide-in-from-right-5 duration-300">
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border-2 border-white/20">
                    <p className="text-white font-semibold mb-4">
                      Dietary Information
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                      <label className="flex items-center gap-3 cursor-pointer group">
                        <input
                          type="checkbox"
                          name="isVeg"
                          checked={formData.isVeg}
                          onChange={handleChange}
                          className="w-5 h-5 rounded border-2 border-white/30 bg-white/20 checked:bg-green-500 checked:border-green-500 cursor-pointer"
                        />
                        <span className="text-white font-medium group-hover:text-green-200 transition">
                          🥬 Vegetarian
                        </span>
                      </label>

                      <label className="flex items-center gap-3 cursor-pointer group">
                        <input
                          type="checkbox"
                          name="isVegan"
                          checked={formData.isVegan}
                          onChange={handleChange}
                          className="w-5 h-5 rounded border-2 border-white/30 bg-white/20 checked:bg-green-500 checked:border-green-500 cursor-pointer"
                        />
                        <span className="text-white font-medium group-hover:text-green-200 transition">
                          🌱 Vegan
                        </span>
                      </label>

                      <label className="flex items-center gap-3 cursor-pointer group">
                        <input
                          type="checkbox"
                          name="isGlutenFree"
                          checked={formData.isGlutenFree}
                          onChange={handleChange}
                          className="w-5 h-5 rounded border-2 border-white/30 bg-white/20 checked:bg-green-500 checked:border-green-500 cursor-pointer"
                        />
                        <span className="text-white font-medium group-hover:text-green-200 transition">
                          🌾 Gluten-Free
                        </span>
                      </label>

                      <label className="flex items-center gap-3 cursor-pointer group">
                        <input
                          type="checkbox"
                          name="isSpicy"
                          checked={formData.isSpicy}
                          onChange={handleChange}
                          className="w-5 h-5 rounded border-2 border-white/30 bg-white/20 checked:bg-red-500 checked:border-red-500 cursor-pointer"
                        />
                        <span className="text-white font-medium group-hover:text-red-200 transition">
                          🌶️ Spicy
                        </span>
                      </label>
                    </div>

                    {formData.isSpicy && (
                      <div className="mt-4">
                        <label className="block text-white font-semibold mb-2 text-sm">
                          Spice Level
                        </label>
                        <div className="flex gap-2">
                          {["1", "2", "3"].map((level) => (
                            <button
                              key={level}
                              type="button"
                              onClick={() =>
                                setFormData({ ...formData, spicyLevel: level })
                              }
                              className={`flex-1 py-2 rounded-lg font-semibold transition ${
                                formData.spicyLevel === level
                                  ? "bg-red-500 text-white"
                                  : "bg-white/20 text-white/70 hover:bg-white/30"
                              }`}
                            >
                              {"🌶️".repeat(parseInt(level))}{" "}
                              {level === "1"
                                ? "Mild"
                                : level === "2"
                                ? "Medium"
                                : "Hot"}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border-2 border-white/20">
                    <p className="text-white font-semibold mb-4">
                      Popular Tags
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "Bestseller",
                        "Chef's Special",
                        "Healthy",
                        "Comfort Food",
                        "Street Food",
                        "Traditional",
                        "Fusion",
                        "Low Calorie",
                      ].map((tag) => (
                        <button
                          key={tag}
                          type="button"
                          onClick={() => toggleTag(tag)}
                          className={`px-4 py-2 rounded-full font-medium transition ${
                            formData.tags.includes(tag)
                              ? "bg-white text-[#E59A01]"
                              : "bg-white/20 text-white hover:bg-white/30"
                          }`}
                        >
                          {tag}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Step 4: Customizations */}
              {currentStep === 4 && (
                <div className="space-y-6 animate-in fade-in slide-in-from-right-5 duration-300">
                  <div className="flex items-center justify-between">
                    <p className="text-white font-semibold">
                      Add-ons & Customizations
                    </p>
                    <button
                      type="button"
                      onClick={addCustomization}
                      className="px-4 py-2 bg-white text-[#E59A01] rounded-lg font-semibold hover:bg-white/90 transition"
                    >
                      + Add Customization
                    </button>
                  </div>

                  {formData.customizations.length === 0 ? (
                    <div className="text-center py-12 bg-white/10 rounded-2xl border-2 border-dashed border-white/30">
                      <p className="text-white/60 mb-2">
                        No customizations added yet
                      </p>
                      <p className="text-white/40 text-sm">
                        Add options like "Extra Cheese", "Spice Level", etc.
                      </p>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {formData.customizations.map((customization, index) => (
                        <div
                          key={index}
                          className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border-2 border-white/20"
                        >
                          <div className="flex items-start justify-between mb-4">
                            <input
                              type="text"
                              placeholder="Customization name (e.g., Add-ons)"
                              value={customization.name}
                              onChange={(e) =>
                                updateCustomization(
                                  index,
                                  "name",
                                  e.target.value
                                )
                              }
                              className="flex-1 px-4 py-2 bg-white/20 border-2 border-white/30 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/60 font-medium"
                            />
                            <button
                              type="button"
                              onClick={() => removeCustomization(index)}
                              className="ml-2 p-2 bg-red-400/20 text-red-200 rounded-lg hover:bg-red-400/30 transition"
                            >
                              🗑️
                            </button>
                          </div>

                          <div className="flex gap-4 mb-4">
                            <label className="flex items-center gap-2 cursor-pointer">
                              <input
                                type="checkbox"
                                checked={customization.required}
                                onChange={(e) =>
                                  updateCustomization(
                                    index,
                                    "required",
                                    e.target.checked
                                  )
                                }
                                className="w-4 h-4 rounded border-2 border-white/30 bg-white/20 checked:bg-blue-500 checked:border-blue-500 cursor-pointer"
                              />
                              <span className="text-white text-sm font-medium">
                                Required
                              </span>
                            </label>
                            <label className="flex items-center gap-2 cursor-pointer">
                              <input
                                type="checkbox"
                                checked={customization.multiSelect}
                                onChange={(e) =>
                                  updateCustomization(
                                    index,
                                    "multiSelect",
                                    e.target.checked
                                  )
                                }
                                className="w-4 h-4 rounded border-2 border-white/30 bg-white/20 checked:bg-blue-500 checked:border-blue-500 cursor-pointer"
                              />
                              <span className="text-white text-sm font-medium">
                                Multi-select
                              </span>
                            </label>
                          </div>

                          <div className="space-y-2">
                            {customization.options.map(
                              (option, optionIndex) => (
                                <div key={optionIndex} className="flex gap-2">
                                  <input
                                    type="text"
                                    placeholder="Option name"
                                    value={option.name}
                                    onChange={(e) =>
                                      updateCustomizationOption(
                                        index,
                                        optionIndex,
                                        "name",
                                        e.target.value
                                      )
                                    }
                                    className="flex-1 px-3 py-2 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/60 text-sm font-medium"
                                  />
                                  <input
                                    type="number"
                                    placeholder="Price"
                                    value={option.price}
                                    onChange={(e) =>
                                      updateCustomizationOption(
                                        index,
                                        optionIndex,
                                        "price",
                                        e.target.value
                                      )
                                    }
                                    className="w-24 px-3 py-2 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/60 text-sm font-medium"
                                  />
                                </div>
                              )
                            )}
                            <button
                              type="button"
                              onClick={() => addCustomizationOption(index)}
                              className="text-white/70 hover:text-white text-sm font-medium transition"
                            >
                              + Add option
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {/* Step 5: Availability */}
              {currentStep === 5 && (
                <div className="space-y-6 animate-in fade-in slide-in-from-right-5 duration-300">
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border-2 border-white/20">
                    <label className="flex items-center gap-3 cursor-pointer mb-6">
                      <input
                        type="checkbox"
                        name="isAvailable"
                        checked={formData.isAvailable}
                        onChange={handleChange}
                        className="w-6 h-6 rounded border-2 border-white/30 bg-white/20 checked:bg-green-500 checked:border-green-500 cursor-pointer"
                      />
                      <span className="text-white font-semibold text-lg">
                        Item is currently available
                      </span>
                    </label>

                    <p className="text-white font-semibold mb-3">
                      Available Days
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map(
                        (day) => (
                          <button
                            key={day}
                            type="button"
                            onClick={() => toggleDay(day)}
                            className={`px-4 py-2 rounded-lg font-semibold transition ${
                              formData.availableDays.includes(day)
                                ? "bg-white text-[#E59A01]"
                                : "bg-white/20 text-white/70 hover:bg-white/30"
                            }`}
                          >
                            {day}
                          </button>
                        )
                      )}
                    </div>

                    <p className="text-white font-semibold mb-3">
                      Available Time
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-white/80 text-sm mb-2">
                          From
                        </label>
                        <input
                          type="time"
                          name="availableTimeStart"
                          value={formData.availableTimeStart}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-white/20 border-2 border-white/30 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-white/60 backdrop-blur-sm font-medium"
                        />
                      </div>
                      <div>
                        <label className="block text-white/80 text-sm mb-2">
                          To
                        </label>
                        <input
                          type="time"
                          name="availableTimeEnd"
                          value={formData.availableTimeEnd}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-white/20 border-2 border-white/30 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-white/60 backdrop-blur-sm font-medium"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </form>

            {/* Footer Navigation */}
            <div className="sticky bottom-0 z-10 bg-white/10 backdrop-blur-xl border-t border-white/20 px-8 py-6">
              <div className="flex gap-4">
                {currentStep > 1 && (
                  <button
                    type="button"
                    onClick={() => setCurrentStep(currentStep - 1)}
                    className="px-6 py-3.5 bg-white/10 border-2 border-white/30 text-white rounded-xl font-bold hover:bg-white/20 transition-all duration-200"
                  >
                    ← Previous
                  </button>
                )}

                {currentStep < 5 ? (
                  <button
                    type="button"
                    onClick={() => setCurrentStep(currentStep + 1)}
                    className="flex-1 py-3.5 bg-white text-[#E59A01] rounded-xl font-bold shadow-xl hover:shadow-2xl transition-all duration-200 transform hover:scale-[1.02]"
                  >
                    Next Step →
                  </button>
                ) : (
                  <button
                    type="submit"
                    onClick={handleSubmit}
                    className="flex-1 py-3.5 bg-white text-[#E59A01] rounded-xl font-bold shadow-xl hover:shadow-2xl transition-all duration-200 transform hover:scale-[1.02]"
                  >
                    ✓ Add Menu Item
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
