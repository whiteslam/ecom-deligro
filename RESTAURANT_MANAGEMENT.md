# 🍽️ Deligro - Restaurant Management Guide

## 📋 Table of Contents

- [Adding New Restaurants](#adding-new-restaurants)
- [Restaurant Data Structure](#restaurant-data-structure)
- [Using the RestaurantCard Component](#using-the-restaurantcard-component)
- [Helper Functions](#helper-functions)
- [Examples](#examples)

## 🆕 Adding New Restaurants

### Method 1: Direct Addition to Data File

1. Open `/app/data/restaurants.ts`
2. Add your new restaurant to the `restaurantsData` array:

```typescript
{
  id: "your-restaurant-id", // Auto-generated if you use addRestaurant()
  name: "Your Restaurant Name",
  rating: "4.5",
  reviews: "(250)",
  price: "₹300–600",
  type: "Italian",
  address: "123 Main Street, Bemetara",
  status: "Open Now",
  statusColor: "text-green-600",
  features: "Dine-in · Takeaway · Delivery",
  image: "/img/restaurant-img/your-restaurant.webp",
  trending: true, // Set to true to show in trending section
  gradient: "from-purple-400 to-pink-600", // Choose your gradient colors
  category: ["Italian", "Fine Dining"],
  deliveryTime: "30-40 min",
  minOrder: "₹200",
}
```

### Method 2: Using the Helper Function

```typescript
import { addRestaurant, restaurantsData } from "../data/restaurants";

const newRestaurant = addRestaurant({
  name: "Pizza Paradise",
  rating: "4.7",
  reviews: "(180)",
  price: "₹250–500",
  type: "Italian",
  address: "Near City Center, Bemetara",
  status: "Open Now",
  statusColor: "text-green-600",
  features: "Dine-in · Delivery · Outdoor Seating",
  image: "/img/restaurant-img/pizza-paradise.webp",
  trending: true,
  gradient: "from-red-400 to-orange-600",
  category: ["Italian", "Pizza"],
  deliveryTime: "25-35 min",
  minOrder: "₹150",
});

// The ID will be auto-generated as "pizza-paradise"
```

## 📊 Restaurant Data Structure

### Required Fields

- `name`: Restaurant name (string)
- `rating`: Rating out of 5 (string, e.g., "4.5")
- `reviews`: Number of reviews (string, e.g., "(250)")
- `type`: Cuisine type (string)
- `address`: Full address (string)
- `status`: Current status (string)
- `statusColor`: Tailwind color class for status (string)
- `image`: Path to restaurant image (string)

### Optional Fields

- `id`: Unique identifier (auto-generated if using `addRestaurant()`)
- `price`: Price range (string, e.g., "₹200–400")
- `features`: Available features (string)
- `trending`: Show in trending section (boolean)
- `gradient`: Tailwind gradient classes (string)
- `category`: Array of categories (string[])
- `deliveryTime`: Estimated delivery time (string)
- `minOrder`: Minimum order amount (string)

### Gradient Color Options

Choose from these pre-designed gradients or create your own:

```typescript
"from-orange-400 to-red-500"; // Warm & Energetic
"from-blue-400 to-indigo-600"; // Cool & Professional
"from-green-400 to-emerald-600"; // Fresh & Natural
"from-purple-400 to-violet-600"; // Luxurious & Creative
"from-yellow-400 to-orange-500"; // Bright & Cheerful
"from-pink-400 to-rose-600"; // Sweet & Romantic
"from-teal-400 to-cyan-600"; // Modern & Tech
```

### Status Colors

```typescript
"text-green-600"; // Open Now
"text-red-500"; // Closed
"text-orange-500"; // Closes Soon
"text-blue-600"; // Special Status
```

## 🎨 Using the RestaurantCard Component

The `RestaurantCard` component is reusable across all pages:

```typescript
import RestaurantCard from "../components/RestaurantCard";
import { restaurantsData } from "../data/restaurants";

// Display all restaurants
{
  restaurantsData.map((restaurant) => (
    <RestaurantCard key={restaurant.id} restaurant={restaurant} />
  ));
}

// Display first 3 restaurants
{
  restaurantsData
    .slice(0, 3)
    .map((restaurant) => (
      <RestaurantCard key={restaurant.id} restaurant={restaurant} />
    ));
}

// With click handler
{
  restaurantsData.map((restaurant) => (
    <RestaurantCard
      key={restaurant.id}
      restaurant={restaurant}
      onClick={() => handleRestaurantClick(restaurant)}
    />
  ));
}
```

## 🔧 Helper Functions

### Get Trending Restaurants

```typescript
import { getTrendingRestaurants } from "../data/restaurants";

const trending = getTrendingRestaurants();
```

### Search Restaurants

```typescript
import { searchRestaurants } from "../data/restaurants";

const results = searchRestaurants("pizza");
// Returns restaurants matching "pizza" in name, type, or categories
```

### Get Restaurants by Category

```typescript
import { getRestaurantsByCategory } from "../data/restaurants";

const italianRestaurants = getRestaurantsByCategory("Italian");
```

## 📝 Examples

### Example 1: Adding a New Restaurant

```typescript
// In /app/data/restaurants.ts
{
  id: "taj-mahal-restaurant",
  name: "Taj Mahal Restaurant",
  rating: "4.6",
  reviews: "(320)",
  price: "₹400–800",
  type: "North Indian",
  address: "Gandhi Chowk, Bemetara",
  status: "Open Now",
  statusColor: "text-green-600",
  features: "Dine-in · Takeaway · Home Delivery · AC Available",
  image: "/img/restaurant-img/taj-mahal.webp",
  trending: true,
  gradient: "from-amber-400 to-orange-600",
  category: ["North Indian", "Mughlai", "Tandoor"],
  deliveryTime: "35-45 min",
  minOrder: "₹250",
}
```

### Example 2: Creating a Filtered Restaurant List

```typescript
"use client";
import { useState } from "react";
import RestaurantCard from "../components/RestaurantCard";
import { restaurantsData, searchRestaurants } from "../data/restaurants";

export default function RestaurantList() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredRestaurants = searchQuery
    ? searchRestaurants(searchQuery)
    : restaurantsData;

  return (
    <div>
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search restaurants..."
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {filteredRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.id} restaurant={restaurant} />
        ))}
      </div>
    </div>
  );
}
```

### Example 3: Category-Based Display

```typescript
import RestaurantCard from "../components/RestaurantCard";
import { getRestaurantsByCategory } from "../data/restaurants";

export default function VegetarianRestaurants() {
  const vegRestaurants = getRestaurantsByCategory("Vegetarian");

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {vegRestaurants.map((restaurant) => (
        <RestaurantCard key={restaurant.id} restaurant={restaurant} />
      ))}
    </div>
  );
}
```

## 🖼️ Image Guidelines

### Image Requirements

- **Format**: WebP (recommended), JPG, or PNG
- **Size**: 800x600px (4:3 aspect ratio)
- **Max File Size**: 200KB
- **Location**: `/public/img/restaurant-img/`

### Image Naming Convention

```
restaurant-name.webp
```

Example: `pizza-paradise.webp`

## 🎯 Best Practices

1. **Always use unique IDs** - Either auto-generate or create manually
2. **Keep images optimized** - Use WebP format for better performance
3. **Use consistent gradients** - Choose from the predefined options
4. **Update trending status** - Mark popular restaurants as trending
5. **Add delivery info** - Include delivery time and minimum order
6. **Categorize properly** - Add relevant categories for better filtering
7. **Test responsiveness** - Ensure cards look good on all screen sizes

## 🚀 Quick Start Checklist

- [ ] Add restaurant image to `/public/img/restaurant-img/`
- [ ] Add restaurant data to `/app/data/restaurants.ts`
- [ ] Choose appropriate gradient and status color
- [ ] Add relevant categories
- [ ] Set trending status if applicable
- [ ] Test on home page and order page
- [ ] Verify search functionality works

## 📞 Need Help?

If you encounter any issues:

1. Check the TypeScript interface in `/app/data/restaurants.ts`
2. Verify all required fields are present
3. Ensure image paths are correct
4. Check console for any errors

---

**Happy Restaurant Adding! 🎉**
