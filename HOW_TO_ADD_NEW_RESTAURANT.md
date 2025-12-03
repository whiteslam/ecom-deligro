# How to Add New Restaurants - Complete Guide

## 🎯 Overview

The restaurant menu page is **100% reusable** and automatically works for any new restaurant you add. The page uses **dynamic routing** with the restaurant ID, so you only need to add data - no code changes required!

---

## 📋 **Quick Start - Adding a New Restaurant**

### **Step 1: Add Restaurant Data**

Open `/app/data/restaurants.ts` and add your new restaurant to the `restaurantsData` array:

```typescript
{
  id: "your-restaurant-id",           // Unique ID (lowercase, use hyphens)
  name: "Your Restaurant Name",        // Display name
  rating: "4.5",                       // Rating out of 5
  reviews: "(250)",                    // Number of reviews
  price: "₹200–400",                   // Price range (optional)
  type: "Fast Food",                   // Restaurant type
  address: "123 Main Street, City",    // Full address
  status: "Open Now",                  // Current status
  statusColor: "text-green-600",       // Status color class
  features: "Dine-in · Delivery",      // Features (optional)
  image: "/img/restaurant-img/your-restaurant.webp",  // Image path
  trending: true,                      // Is trending? (optional)
  gradient: "from-blue-400 to-indigo-600",  // Gradient colors (optional)
  category: ["Italian", "Pizza"],      // Categories array (optional)
  deliveryTime: "25-35 min",          // Delivery time (optional)
  minOrder: "₹150",                   // Minimum order (optional)
}
```

### **Step 2: Add Menu Items**

Open `/app/data/menuItems.ts` and add menu items for your restaurant:

```typescript
{
  id: "your-restaurant-item-1",        // Unique item ID
  name: "Margherita Pizza",            // Item name
  description: "Classic pizza with fresh mozzarella and basil",  // Description
  price: 280,                          // Price in rupees
  image: "/img/restaurant-img/your-restaurant.webp",  // Item image
  category: "Pizza",                   // Category
  isVeg: true,                         // Vegetarian?
  rating: 4.5,                         // Rating (optional)
  reviews: 120,                        // Review count (optional)
  discount: 10,                        // Discount % (optional)
  badge: "Bestseller",                 // Badge text (optional)
  restaurantId: "your-restaurant-id",  // MUST match restaurant ID
}
```

### **Step 3: Add Restaurant Image**

Place your restaurant image in `/public/img/restaurant-img/` directory.

**That's it!** Your restaurant is now live and accessible at:

```
http://localhost:3000/restaurant/your-restaurant-id
```

---

## 🔄 **How the Reusability Works**

### **Dynamic Routing**

The page uses Next.js dynamic routing with `[id]` parameter:

- Route: `/app/restaurant/[id]/page.tsx`
- URL: `/restaurant/rasoi-restaurant`
- URL: `/restaurant/hotel-sapphire`
- URL: `/restaurant/your-restaurant-id`

### **Automatic Data Fetching**

```typescript
const params = useParams();
const restaurantId = params.id as string;
const restaurant = restaurantsData.find((r) => r.id === restaurantId);
```

The page automatically:

1. Gets the restaurant ID from the URL
2. Finds the matching restaurant in the data
3. Loads all menu items for that restaurant
4. Displays everything with the modern design

### **Dynamic Menu Items**

```typescript
const allMenuItems = getMenuItemsByRestaurant(restaurantId);
const categories = ["All", ...getRestaurantCategories(restaurantId)];
```

The page automatically:

1. Filters menu items by restaurant ID
2. Extracts unique categories
3. Creates category filter buttons
4. Handles category filtering

---

## 📝 **Complete Example - Adding "Pizza Palace"**

### **1. Add to restaurants.ts**

```typescript
export const restaurantsData: Restaurant[] = [
  // ... existing restaurants ...

  {
    id: "pizza-palace",
    name: "Pizza Palace",
    rating: "4.7",
    reviews: "(450)",
    price: "₹250–500",
    type: "Italian",
    address: "456 Food Street, Downtown",
    status: "Open Now",
    statusColor: "text-green-600",
    features: "Dine-in · Takeaway · Delivery",
    image: "/img/restaurant-img/pizza-palace.webp",
    trending: true,
    gradient: "from-red-500 to-orange-500",
    category: ["Italian", "Pizza", "Pasta"],
    deliveryTime: "30-40 min",
    minOrder: "₹200",
  },
];
```

### **2. Add menu items to menuItems.ts**

```typescript
export const menuItemsData: MenuItem[] = [
  // ... existing items ...

  // Pizza Palace Items
  {
    id: "pizza-palace-margherita",
    name: "Margherita Pizza",
    description: "Fresh mozzarella, tomato sauce, and basil",
    price: 280,
    image: "/img/restaurant-img/pizza-palace.webp",
    category: "Pizza",
    isVeg: true,
    rating: 4.8,
    reviews: 200,
    badge: "Bestseller",
    restaurantId: "pizza-palace",
  },
  {
    id: "pizza-palace-pepperoni",
    name: "Pepperoni Pizza",
    description: "Classic pepperoni with extra cheese",
    price: 350,
    image: "/img/restaurant-img/pizza-palace.webp",
    category: "Pizza",
    isVeg: false,
    rating: 4.7,
    reviews: 180,
    badge: "Chef's Special",
    restaurantId: "pizza-palace",
  },
  {
    id: "pizza-palace-pasta",
    name: "Alfredo Pasta",
    description: "Creamy white sauce pasta with mushrooms",
    price: 220,
    image: "/img/restaurant-img/pizza-palace.webp",
    category: "Pasta",
    isVeg: true,
    rating: 4.5,
    reviews: 120,
    restaurantId: "pizza-palace",
  },
  {
    id: "pizza-palace-garlic-bread",
    name: "Garlic Bread",
    description: "Toasted bread with garlic butter and herbs",
    price: 80,
    image: "/img/restaurant-img/pizza-palace.webp",
    category: "Starters",
    isVeg: true,
    rating: 4.3,
    reviews: 90,
    restaurantId: "pizza-palace",
  },
];
```

### **3. Access the new restaurant**

Navigate to: `http://localhost:3000/restaurant/pizza-palace`

The page will automatically:

- ✅ Display "Pizza Palace" in the hero section
- ✅ Show all restaurant details (rating, address, etc.)
- ✅ Create category filters: "All", "Pizza", "Pasta", "Starters"
- ✅ Display all 4 menu items
- ✅ Enable cart functionality
- ✅ Apply all modern design enhancements

---

## 🎨 **Customization Options**

### **Restaurant-Specific Gradients**

Each restaurant can have its own color scheme:

```typescript
gradient: "from-blue-400 to-indigo-600",    // Blue theme
gradient: "from-red-500 to-orange-500",     // Red theme
gradient: "from-green-400 to-emerald-600",  // Green theme
gradient: "from-purple-400 to-pink-500",    // Purple theme
```

### **Badge Types**

Available badge options for menu items:

```typescript
badge: "Bestseller",      // Popular item
badge: "Chef's Special",  // Chef recommendation
badge: "New",            // New item
badge: "Limited Time",   // Limited availability
```

### **Item Categories**

Common categories (you can create your own):

- Starters / Appetizers
- Main Course
- Rice & Biryani
- Breads / Naan
- Desserts
- Beverages
- Pizza
- Pasta
- Salads
- Soups

---

## 🔗 **Linking to Restaurant Pages**

### **From Restaurant Cards**

The `RestaurantCard` component already links to the menu page:

```typescript
// Automatically navigates to /restaurant/{restaurant.id}
<RestaurantCard restaurant={restaurant} />
```

### **Manual Links**

You can create custom links:

```typescript
import Link from "next/link";

<Link href="/restaurant/pizza-palace">View Pizza Palace Menu</Link>;
```

### **Programmatic Navigation**

```typescript
import { useRouter } from "next/navigation";

const router = useRouter();
router.push("/restaurant/pizza-palace");
```

---

## 📊 **Data Structure Reference**

### **Restaurant Interface**

```typescript
interface Restaurant {
  id: string; // Required: Unique identifier
  name: string; // Required: Display name
  rating: string; // Required: Rating (e.g., "4.5")
  reviews: string; // Required: Review count (e.g., "(250)")
  price?: string; // Optional: Price range
  type: string; // Required: Restaurant type
  address: string; // Required: Full address
  status: string; // Required: Current status
  statusColor: string; // Required: Tailwind color class
  features?: string; // Optional: Features list
  image: string; // Required: Image path
  trending?: boolean; // Optional: Show trending badge
  gradient?: string; // Optional: Gradient colors
  category?: string[]; // Optional: Categories
  deliveryTime?: string; // Optional: Delivery time
  minOrder?: string; // Optional: Minimum order
}
```

### **MenuItem Interface**

```typescript
interface MenuItem {
  id: string; // Required: Unique identifier
  name: string; // Required: Item name
  description: string; // Required: Item description
  price: number; // Required: Price in rupees
  image: string; // Required: Image path
  category: string; // Required: Category name
  isVeg: boolean; // Required: Vegetarian flag
  rating?: number; // Optional: Rating (0-5)
  reviews?: number; // Optional: Review count
  discount?: number; // Optional: Discount percentage
  badge?: string; // Optional: Badge text
  restaurantId: string; // Required: MUST match restaurant ID
}
```

---

## ✅ **Checklist for Adding New Restaurant**

- [ ] Create unique restaurant ID (lowercase, hyphens)
- [ ] Add restaurant data to `restaurants.ts`
- [ ] Add restaurant image to `/public/img/restaurant-img/`
- [ ] Add menu items to `menuItems.ts`
- [ ] Ensure all menu items have matching `restaurantId`
- [ ] Add menu item images (or use restaurant image as placeholder)
- [ ] Test the page at `/restaurant/your-restaurant-id`
- [ ] Verify cart functionality works
- [ ] Check category filters work correctly
- [ ] Test on mobile and desktop

---

## 🚀 **Advanced Features**

### **Helper Functions Available**

```typescript
// Get all menu items for a restaurant
getMenuItemsByRestaurant(restaurantId);

// Get items by category
getMenuItemsByCategory(restaurantId, "Pizza");

// Get all categories for a restaurant
getRestaurantCategories(restaurantId);

// Get trending restaurants
getTrendingRestaurants();

// Search restaurants
searchRestaurants("pizza");

// Get restaurants by category
getRestaurantsByCategory("Italian");
```

### **Adding New Helper Functions**

You can add more helper functions in `restaurants.ts` or `menuItems.ts`:

```typescript
// Example: Get restaurants by price range
export const getRestaurantsByPriceRange = (
  minPrice: number,
  maxPrice: number
): Restaurant[] => {
  return restaurantsData.filter((r) => {
    // Your filtering logic
  });
};
```

---

## 🎯 **Summary**

The restaurant menu page is **fully reusable** because:

1. ✅ **Dynamic routing** - Works with any restaurant ID
2. ✅ **Automatic data loading** - Fetches restaurant and menu items
3. ✅ **Dynamic categories** - Generates filters from menu items
4. ✅ **Shared cart system** - Works across all restaurants
5. ✅ **Consistent design** - Same modern look for all restaurants
6. ✅ **No code changes needed** - Just add data!

**To add a new restaurant, you only need to:**

1. Add restaurant data to `restaurants.ts`
2. Add menu items to `menuItems.ts`
3. Add images to `/public/img/restaurant-img/`

That's it! The page handles everything else automatically. 🎉
