"use client";
import React, { useState, useRef } from "react";
import Image from "next/image";

interface ImageUploadProps {
  currentImage?: string;
  onImageChange: (imageData: string | null) => void;
  label?: string;
  aspectRatio?: "square" | "landscape" | "portrait" | "free";
  maxSizeMB?: number;
  acceptedFormats?: string[];
}

const ImageUpload: React.FC<ImageUploadProps> = ({
  currentImage,
  onImageChange,
  label = "Upload Image",
  aspectRatio = "square",
  maxSizeMB = 5,
  acceptedFormats = ["image/jpeg", "image/png", "image/webp", "image/jpg"],
}) => {
  const [preview, setPreview] = useState<string | null>(currentImage || null);
  const [isDragging, setIsDragging] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const aspectRatioClasses = {
    square: "aspect-square",
    landscape: "aspect-video",
    portrait: "aspect-[3/4]",
    free: "min-h-[200px]",
  };

  const validateFile = (file: File): string | null => {
    // Check file type
    if (!acceptedFormats.includes(file.type)) {
      return `Please upload a valid image file (${acceptedFormats
        .map((f) => f.split("/")[1])
        .join(", ")})`;
    }

    // Check file size
    const fileSizeMB = file.size / (1024 * 1024);
    if (fileSizeMB > maxSizeMB) {
      return `File size must be less than ${maxSizeMB}MB`;
    }

    return null;
  };

  const handleFileChange = async (file: File) => {
    setError(null);
    setIsUploading(true);

    // Validate file
    const validationError = validateFile(file);
    if (validationError) {
      setError(validationError);
      setIsUploading(false);
      return;
    }

    try {
      // Create preview
      const reader = new FileReader();
      reader.onloadend = () => {
        const result = reader.result as string;
        setPreview(result);
        onImageChange(result);
        setIsUploading(false);
      };
      reader.onerror = () => {
        setError("Failed to read file");
        setIsUploading(false);
      };
      reader.readAsDataURL(file);
    } catch (err) {
      setError("Failed to process image");
      setIsUploading(false);
    }
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);

    const files = e.dataTransfer.files;
    if (files && files[0]) {
      handleFileChange(files[0]);
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files[0]) {
      handleFileChange(files[0]);
    }
  };

  const handleRemove = () => {
    setPreview(null);
    onImageChange(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="w-full">
      <label className="block text-white font-semibold mb-3 text-sm">
        {label}
      </label>

      <div
        className={`relative ${
          aspectRatioClasses[aspectRatio]
        } w-full rounded-2xl overflow-hidden border-2 transition-all duration-300 ${
          isDragging
            ? "border-white bg-white/20 scale-[1.02]"
            : preview
            ? "border-white/30 bg-white/5"
            : "border-dashed border-white/40 bg-white/10 hover:bg-white/15 hover:border-white/60"
        }`}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
      >
        {/* Hidden File Input */}
        <input
          ref={fileInputRef}
          type="file"
          accept={acceptedFormats.join(",")}
          onChange={handleInputChange}
          className="hidden"
        />

        {/* Preview or Upload Area */}
        {preview ? (
          <div className="relative w-full h-full group">
            {/* Image Preview */}
            <div className="relative w-full h-full">
              <Image
                src={preview}
                alt="Preview"
                fill
                className="object-cover"
              />
            </div>

            {/* Overlay with Actions */}
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
              <button
                type="button"
                onClick={handleClick}
                className="px-4 py-2 bg-white text-[#E59A01] rounded-lg font-semibold hover:bg-white/90 transition flex items-center gap-2"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="17 8 12 3 7 8"></polyline>
                  <line x1="12" y1="3" x2="12" y2="15"></line>
                </svg>
                Change
              </button>
              <button
                type="button"
                onClick={handleRemove}
                className="px-4 py-2 bg-red-500 text-white rounded-lg font-semibold hover:bg-red-600 transition flex items-center gap-2"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <polyline points="3 6 5 6 21 6"></polyline>
                  <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                </svg>
                Remove
              </button>
            </div>

            {/* Loading Overlay */}
            {isUploading && (
              <div className="absolute inset-0 bg-black/80 flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="w-12 h-12 border-4 border-white/30 border-t-white rounded-full animate-spin mx-auto mb-3"></div>
                  <p className="font-semibold">Uploading...</p>
                </div>
              </div>
            )}
          </div>
        ) : (
          <div
            onClick={handleClick}
            className="w-full h-full flex flex-col items-center justify-center cursor-pointer p-8 text-center"
          >
            {isUploading ? (
              <div className="text-white">
                <div className="w-16 h-16 border-4 border-white/30 border-t-white rounded-full animate-spin mx-auto mb-4"></div>
                <p className="font-semibold">Processing...</p>
              </div>
            ) : (
              <>
                {/* Upload Icon */}
                <div className="mb-4">
                  <svg
                    width="48"
                    height="48"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="text-white/60 mx-auto"
                  >
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                    <polyline points="17 8 12 3 7 8"></polyline>
                    <line x1="12" y1="3" x2="12" y2="15"></line>
                  </svg>
                </div>

                {/* Text */}
                <p className="text-white font-semibold mb-2">
                  {isDragging
                    ? "Drop image here"
                    : "Click to upload or drag and drop"}
                </p>
                <p className="text-white/60 text-sm mb-1">
                  {acceptedFormats
                    .map((f) => f.split("/")[1].toUpperCase())
                    .join(", ")}
                </p>
                <p className="text-white/50 text-xs">Max size: {maxSizeMB}MB</p>
              </>
            )}
          </div>
        )}
      </div>

      {/* Error Message */}
      {error && (
        <div className="mt-3 p-3 bg-red-400/20 border border-red-400/40 rounded-lg">
          <p className="text-red-200 text-sm font-medium flex items-center gap-2">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="12" y1="8" x2="12" y2="12"></line>
              <line x1="12" y1="16" x2="12.01" y2="16"></line>
            </svg>
            {error}
          </p>
        </div>
      )}

      {/* Helper Text */}
      {!error && !preview && (
        <p className="mt-3 text-white/50 text-xs">
          💡 Recommended: High-quality images for best results
        </p>
      )}
    </div>
  );
};

export default ImageUpload;
