"use client";
import React from "react";

// Skeleton Card for Dashboard Stats
export const StatCardSkeleton = () => (
  <div className="group relative bg-white/10 backdrop-blur-md p-6 rounded-3xl shadow-xl border border-white/20 animate-pulse">
    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/10 rounded-3xl"></div>
    <div className="relative z-10">
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <div className="h-4 bg-white/20 rounded w-24 mb-3"></div>
          <div className="h-8 bg-white/30 rounded w-32"></div>
        </div>
        <div className="w-12 h-12 bg-white/20 rounded-full"></div>
      </div>
      <div className="h-3 bg-white/20 rounded w-20"></div>
    </div>
  </div>
);

// Skeleton for Restaurant/Rider/User Cards
export const CardSkeleton = () => (
  <div className="group relative bg-white/10 backdrop-blur-md p-6 rounded-3xl shadow-xl border border-white/20 animate-pulse">
    <div className="absolute top-4 right-4">
      <div className="w-16 h-6 bg-white/20 rounded-full"></div>
    </div>

    <div className="mb-4">
      <div className="w-20 h-20 bg-white/20 rounded-2xl"></div>
    </div>

    <div className="h-5 bg-white/30 rounded w-3/4 mb-2"></div>
    <div className="h-4 bg-white/20 rounded w-1/2 mb-1"></div>
    <div className="h-3 bg-white/20 rounded w-2/3 mb-4"></div>

    <div className="grid grid-cols-2 gap-4 mb-4">
      <div className="bg-white/5 rounded-xl p-3">
        <div className="h-3 bg-white/20 rounded w-12 mb-2"></div>
        <div className="h-4 bg-white/30 rounded w-16"></div>
      </div>
      <div className="bg-white/5 rounded-xl p-3">
        <div className="h-3 bg-white/20 rounded w-12 mb-2"></div>
        <div className="h-4 bg-white/30 rounded w-16"></div>
      </div>
    </div>

    <div className="flex gap-2">
      <div className="flex-1 h-10 bg-white/10 rounded-xl"></div>
      <div className="w-10 h-10 bg-white/10 rounded-xl"></div>
    </div>
  </div>
);

// Skeleton for Table Rows
export const TableRowSkeleton = () => (
  <tr className="border-b border-white/5 animate-pulse">
    <td className="p-4">
      <div className="h-4 bg-white/20 rounded w-24"></div>
    </td>
    <td className="p-4">
      <div className="h-4 bg-white/20 rounded w-32"></div>
    </td>
    <td className="p-4">
      <div className="h-4 bg-white/20 rounded w-20"></div>
    </td>
    <td className="p-4">
      <div className="h-4 bg-white/20 rounded w-28"></div>
    </td>
    <td className="p-4">
      <div className="w-16 h-6 bg-white/20 rounded-full"></div>
    </td>
    <td className="p-4">
      <div className="h-4 bg-white/20 rounded w-16"></div>
    </td>
    <td className="p-4">
      <div className="flex gap-2">
        <div className="w-8 h-8 bg-white/20 rounded-lg"></div>
        <div className="w-8 h-8 bg-white/20 rounded-lg"></div>
      </div>
    </td>
  </tr>
);

// Skeleton for Order Cards
export const OrderCardSkeleton = () => (
  <div className="group bg-white/10 backdrop-blur-md p-6 rounded-3xl shadow-xl border border-white/20 animate-pulse">
    <div className="flex flex-col lg:flex-row gap-6">
      <div className="flex-1">
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <div className="h-5 bg-white/30 rounded w-32 mb-2"></div>
            <div className="h-4 bg-white/20 rounded w-24"></div>
          </div>
          <div className="w-20 h-8 bg-white/20 rounded-full"></div>
        </div>

        <div className="space-y-3 mb-4">
          <div className="flex items-center gap-3">
            <div className="w-5 h-5 bg-white/20 rounded"></div>
            <div className="h-4 bg-white/20 rounded w-40"></div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-5 h-5 bg-white/20 rounded"></div>
            <div className="h-4 bg-white/20 rounded w-48"></div>
          </div>
        </div>

        <div className="bg-white/5 rounded-xl p-4">
          <div className="h-4 bg-white/20 rounded w-24 mb-3"></div>
          <div className="space-y-2">
            <div className="h-3 bg-white/20 rounded w-full"></div>
            <div className="h-3 bg-white/20 rounded w-3/4"></div>
          </div>
        </div>
      </div>

      <div className="lg:w-48 space-y-2">
        <div className="h-10 bg-white/10 rounded-xl"></div>
        <div className="h-10 bg-white/10 rounded-xl"></div>
      </div>
    </div>
  </div>
);

// Loading Spinner Component
export const LoadingSpinner = ({
  size = "md",
}: {
  size?: "sm" | "md" | "lg";
}) => {
  const sizeClasses = {
    sm: "w-4 h-4 border-2",
    md: "w-8 h-8 border-3",
    lg: "w-12 h-12 border-4",
  };

  return (
    <div
      className={`${sizeClasses[size]} border-white/30 border-t-white rounded-full animate-spin`}
    ></div>
  );
};

// Full Page Loading
export const PageLoading = ({
  message = "Loading...",
}: {
  message?: string;
}) => (
  <div className="flex flex-col items-center justify-center py-20">
    <LoadingSpinner size="lg" />
    <p className="text-white font-semibold mt-4">{message}</p>
    <p className="text-white/60 text-sm mt-2">Please wait...</p>
  </div>
);

// Empty State Component
export const EmptyState = ({
  icon,
  title,
  description,
  actionLabel,
  onAction,
}: {
  icon: string;
  title: string;
  description: string;
  actionLabel?: string;
  onAction?: () => void;
}) => (
  <div className="text-center py-20 relative z-10">
    <div className="text-6xl mb-4">{icon}</div>
    <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
    <p className="text-white/70 mb-6">{description}</p>
    {actionLabel && onAction && (
      <button
        onClick={onAction}
        className="px-6 py-3 bg-white text-[#E59A01] rounded-xl font-bold shadow-xl hover:bg-white/90 transition-all duration-300 transform hover:scale-105"
      >
        {actionLabel}
      </button>
    )}
  </div>
);

// Error State Component
export const ErrorState = ({
  message = "Something went wrong",
  onRetry,
}: {
  message?: string;
  onRetry?: () => void;
}) => (
  <div className="text-center py-20 relative z-10">
    <div className="text-6xl mb-4">⚠️</div>
    <h3 className="text-2xl font-bold text-white mb-2">Oops!</h3>
    <p className="text-white/70 mb-6">{message}</p>
    {onRetry && (
      <button
        onClick={onRetry}
        className="px-6 py-3 bg-white text-[#E59A01] rounded-xl font-bold shadow-xl hover:bg-white/90 transition-all duration-300 transform hover:scale-105"
      >
        Try Again
      </button>
    )}
  </div>
);

// Success Toast Component
export const SuccessToast = ({
  message,
  onClose,
}: {
  message: string;
  onClose: () => void;
}) => (
  <div className="fixed top-4 right-4 z-50 animate-in slide-in-from-top-5 duration-300">
    <div className="bg-green-500 text-white px-6 py-4 rounded-xl shadow-2xl flex items-center gap-3 min-w-[300px]">
      <div className="text-2xl">✓</div>
      <div className="flex-1">
        <p className="font-semibold">{message}</p>
      </div>
      <button
        onClick={onClose}
        className="text-white/80 hover:text-white transition"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </button>
    </div>
  </div>
);

// Error Toast Component
export const ErrorToast = ({
  message,
  onClose,
}: {
  message: string;
  onClose: () => void;
}) => (
  <div className="fixed top-4 right-4 z-50 animate-in slide-in-from-top-5 duration-300">
    <div className="bg-red-500 text-white px-6 py-4 rounded-xl shadow-2xl flex items-center gap-3 min-w-[300px]">
      <div className="text-2xl">✕</div>
      <div className="flex-1">
        <p className="font-semibold">{message}</p>
      </div>
      <button
        onClick={onClose}
        className="text-white/80 hover:text-white transition"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </button>
    </div>
  </div>
);
