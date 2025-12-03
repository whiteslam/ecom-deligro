// Restaurant/Vendor Data Structure
export interface Restaurant {
  id: string;
  name: string;
  rating: string;
  reviews: string;
  price?: string;
  type: string;
  address: string;
  status: string;
  statusColor: string;
  features?: string;
  image: string;
  trending?: boolean;
  gradient?: string;
  category?: string[];
  deliveryTime?: string;
  minOrder?: string;
}

// Centralized Restaurant Data
export const restaurantsData: Restaurant[] = [
  {
    id: "rasoi-restaurant",
    name: "Rasoi Restaurant",
    rating: "3.8",
    reviews: "(775)",
    price: "₹200–400",
    type: "Fast Food",
    address: "Infront of Pt, JLN College, Kobiya",
    status: "Closed · Opens 9 am Sat",
    statusColor: "text-red-500",
    features: "Dine-in · Drive-through · No-contact delivery",
    image: "/img/restaurant-img/Rasoi Restaurant.webp",
    trending: true,
    gradient: "from-orange-400 to-red-500",
    category: ["Fast Food", "Indian"],
    deliveryTime: "30-40 min",
    minOrder: "₹100",
  },
  {
    id: "hotel-sapphire",
    name: "Hotel Sapphire Restaurant",
    rating: "3.8",
    reviews: "(204)",
    price: "₹300–500",
    type: "Restaurant",
    address: "Professor Colony, Raipur road",
    status: "Open Now",
    statusColor: "text-green-600",
    features: "Dine-in · Takeaway",
    image: "/img/restaurant-img/Hotel Sapphire Restaurant.webp",
    trending: true,
    gradient: "from-blue-400 to-indigo-600",
    category: ["Multi-Cuisine", "Fine Dining"],
    deliveryTime: "25-35 min",
    minOrder: "₹150",
  },
  {
    id: "maa-bhawani",
    name: "Maa bhawani restaurant",
    rating: "3.8",
    reviews: "(49)",
    price: "₹100–300",
    type: "Vegetarian",
    address: "PG8M+PQJ Old Bus Stand, Chowk, beside Hanum...",
    status: "Closes soon · 11 pm",
    statusColor: "text-orange-500",
    features: "Dine-in · Takeaway",
    image: "/img/restaurant-img/Maa bhawani restaurant.webp",
    trending: false,
    gradient: "from-green-400 to-emerald-600",
    category: ["Vegetarian", "Indian"],
    deliveryTime: "20-30 min",
    minOrder: "₹80",
  },
  {
    id: "spicy-bites",
    name: "Spicy Bites",
    rating: "4.2",
    reviews: "(120)",
    price: "₹150–350",
    type: "Fast Food",
    address: "Main Market, Bemetara",
    status: "Open Now",
    statusColor: "text-green-600",
    features: "Dine-in · Delivery",
    image: "/img/restaurant-img/Rasoi Restaurant.webp",
    trending: false,
    gradient: "from-yellow-400 to-orange-500",
    category: ["Fast Food", "Chinese"],
    deliveryTime: "25-35 min",
    minOrder: "₹120",
  },
  {
    id: "pizza-paradise",
    name: "Pizza Paradise",
    rating: "4.6",
    reviews: "(320)",
    price: "₹250–500",
    type: "Italian",
    address: "123 Food Street, Downtown Area",
    status: "Open Now",
    statusColor: "text-green-600",
    features: "Dine-in · Takeaway · Delivery",
    image: "/img/restaurant-img/Hotel Sapphire Restaurant.webp",
    trending: true,
    gradient: "from-red-500 to-orange-500",
    category: ["Italian", "Pizza", "Pasta"],
    deliveryTime: "30-40 min",
    minOrder: "₹200",
  },
];

// Helper function to add new restaurant
export const addRestaurant = (restaurant: Omit<Restaurant, "id">): Restaurant => {
  const id = restaurant.name.toLowerCase().replace(/\s+/g, "-");
  return {
    id,
    ...restaurant,
  };
};

// Helper function to get restaurants by category
export const getRestaurantsByCategory = (category: string): Restaurant[] => {
  return restaurantsData.filter((r) =>
    r.category?.includes(category)
  );
};

// Helper function to get trending restaurants
export const getTrendingRestaurants = (): Restaurant[] => {
  return restaurantsData.filter((r) => r.trending);
};

// Helper function to search restaurants
export const searchRestaurants = (query: string): Restaurant[] => {
  const lowercaseQuery = query.toLowerCase();
  return restaurantsData.filter(
    (r) =>
      r.name.toLowerCase().includes(lowercaseQuery) ||
      r.type.toLowerCase().includes(lowercaseQuery) ||
      r.category?.some((c) => c.toLowerCase().includes(lowercaseQuery))
  );
};
