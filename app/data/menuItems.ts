// Menu Item Data Structure
export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  isVeg: boolean;
  rating?: number;
  reviews?: number;
  discount?: number;
  badge?: string; // "Bestseller", "Chef's Special", etc.
  restaurantId: string;
}

// Sample Menu Items for Restaurants
export const menuItemsData: MenuItem[] = [
  // Rasoi Restaurant Items
  {
    id: "rasoi-paneer-tikka",
    name: "Paneer Tikka",
    description: "Grilled cottage cheese marinated in aromatic spices",
    price: 180,
    image: "/img/restaurant-img/Rasoi Restaurant.webp",
    category: "Starters",
    isVeg: true,
    rating: 4.5,
    reviews: 120,
    badge: "Bestseller",
    restaurantId: "rasoi-restaurant",
  },
  {
    id: "rasoi-butter-chicken",
    name: "Butter Chicken",
    description: "Tender chicken in rich tomato and butter gravy",
    price: 280,
    image: "/img/restaurant-img/Rasoi Restaurant.webp",
    category: "Main Course",
    isVeg: false,
    rating: 4.7,
    reviews: 250,
    badge: "Chef's Special",
    restaurantId: "rasoi-restaurant",
  },
  {
    id: "rasoi-dal-makhani",
    name: "Dal Makhani",
    description: "Creamy black lentils slow-cooked to perfection",
    price: 160,
    image: "/img/restaurant-img/Rasoi Restaurant.webp",
    category: "Main Course",
    isVeg: true,
    rating: 4.3,
    reviews: 89,
    restaurantId: "rasoi-restaurant",
  },
  {
    id: "rasoi-veg-biryani",
    name: "Veg Biryani",
    description: "Fragrant basmati rice with mixed vegetables and spices",
    price: 220,
    image: "/img/restaurant-img/Rasoi Restaurant.webp",
    category: "Rice & Biryani",
    isVeg: true,
    rating: 4.4,
    reviews: 156,
    badge: "Bestseller",
    restaurantId: "rasoi-restaurant",
  },
  {
    id: "rasoi-chicken-biryani",
    name: "Chicken Biryani",
    description: "Aromatic basmati rice layered with succulent chicken",
    price: 260,
    image: "/img/restaurant-img/Rasoi Restaurant.webp",
    category: "Rice & Biryani",
    isVeg: false,
    rating: 4.6,
    reviews: 310,
    badge: "Bestseller",
    restaurantId: "rasoi-restaurant",
  },
  {
    id: "rasoi-naan",
    name: "Butter Naan",
    description: "Soft and fluffy Indian bread brushed with butter",
    price: 40,
    image: "/img/restaurant-img/Rasoi Restaurant.webp",
    category: "Breads",
    isVeg: true,
    rating: 4.2,
    reviews: 78,
    restaurantId: "rasoi-restaurant",
  },
  {
    id: "rasoi-gulab-jamun",
    name: "Gulab Jamun",
    description: "Sweet milk dumplings soaked in sugar syrup",
    price: 80,
    image: "/img/restaurant-img/Rasoi Restaurant.webp",
    category: "Desserts",
    isVeg: true,
    rating: 4.5,
    reviews: 92,
    restaurantId: "rasoi-restaurant",
  },
  {
    id: "rasoi-masala-chai",
    name: "Masala Chai",
    description: "Traditional Indian spiced tea",
    price: 30,
    image: "/img/restaurant-img/Rasoi Restaurant.webp",
    category: "Beverages",
    isVeg: true,
    rating: 4.1,
    reviews: 45,
    restaurantId: "rasoi-restaurant",
  },

  // Hotel Sapphire Items
  {
    id: "sapphire-tandoori-platter",
    name: "Tandoori Platter",
    description: "Assorted tandoori delicacies with mint chutney",
    price: 450,
    image: "/img/restaurant-img/Hotel Sapphire Restaurant.webp",
    category: "Starters",
    isVeg: false,
    rating: 4.8,
    reviews: 180,
    badge: "Chef's Special",
    restaurantId: "hotel-sapphire",
  },
  {
    id: "sapphire-paneer-butter-masala",
    name: "Paneer Butter Masala",
    description: "Cottage cheese cubes in creamy tomato gravy",
    price: 240,
    image: "/img/restaurant-img/Hotel Sapphire Restaurant.webp",
    category: "Main Course",
    isVeg: true,
    rating: 4.6,
    reviews: 145,
    badge: "Bestseller",
    restaurantId: "hotel-sapphire",
  },
  {
    id: "sapphire-fish-curry",
    name: "Fish Curry",
    description: "Fresh fish cooked in traditional coastal spices",
    price: 320,
    image: "/img/restaurant-img/Hotel Sapphire Restaurant.webp",
    category: "Main Course",
    isVeg: false,
    rating: 4.7,
    reviews: 98,
    restaurantId: "hotel-sapphire",
  },
  {
    id: "sapphire-mutton-biryani",
    name: "Mutton Biryani",
    description: "Premium basmati rice with tender mutton pieces",
    price: 380,
    image: "/img/restaurant-img/Hotel Sapphire Restaurant.webp",
    category: "Rice & Biryani",
    isVeg: false,
    rating: 4.9,
    reviews: 267,
    badge: "Bestseller",
    restaurantId: "hotel-sapphire",
  },

  // Maa Bhawani Items
  {
    id: "bhawani-aloo-paratha",
    name: "Aloo Paratha",
    description: "Stuffed potato flatbread with butter and curd",
    price: 60,
    image: "/img/restaurant-img/Maa bhawani restaurant.webp",
    category: "Breads",
    isVeg: true,
    rating: 4.4,
    reviews: 67,
    badge: "Bestseller",
    restaurantId: "maa-bhawani",
  },
  {
    id: "bhawani-chole-bhature",
    name: "Chole Bhature",
    description: "Spicy chickpeas with fluffy fried bread",
    price: 120,
    image: "/img/restaurant-img/Maa bhawani restaurant.webp",
    category: "Main Course",
    isVeg: true,
    rating: 4.5,
    reviews: 134,
    badge: "Bestseller",
    restaurantId: "maa-bhawani",
  },
  {
    id: "bhawani-rajma-chawal",
    name: "Rajma Chawal",
    description: "Red kidney beans curry with steamed rice",
    price: 140,
    image: "/img/restaurant-img/Maa bhawani restaurant.webp",
    category: "Main Course",
    isVeg: true,
    rating: 4.3,
    reviews: 89,
    restaurantId: "maa-bhawani",
  },

  // Pizza Paradise Items
  {
    id: "pizza-paradise-margherita",
    name: "Margherita Pizza",
    description: "Fresh mozzarella, tomato sauce, and basil on thin crust",
    price: 280,
    image: "/img/restaurant-img/Hotel Sapphire Restaurant.webp",
    category: "Pizza",
    isVeg: true,
    rating: 4.8,
    reviews: 200,
    badge: "Bestseller",
    restaurantId: "pizza-paradise",
  },
  {
    id: "pizza-paradise-pepperoni",
    name: "Pepperoni Pizza",
    description: "Classic pepperoni with extra cheese and Italian herbs",
    price: 350,
    image: "/img/restaurant-img/Hotel Sapphire Restaurant.webp",
    category: "Pizza",
    isVeg: false,
    rating: 4.7,
    reviews: 180,
    badge: "Chef's Special",
    restaurantId: "pizza-paradise",
  },
  {
    id: "pizza-paradise-veggie-supreme",
    name: "Veggie Supreme Pizza",
    description: "Loaded with bell peppers, olives, mushrooms, and onions",
    price: 320,
    image: "/img/restaurant-img/Hotel Sapphire Restaurant.webp",
    category: "Pizza",
    isVeg: true,
    rating: 4.6,
    reviews: 150,
    restaurantId: "pizza-paradise",
  },
  {
    id: "pizza-paradise-alfredo-pasta",
    name: "Alfredo Pasta",
    description: "Creamy white sauce pasta with mushrooms and parmesan",
    price: 220,
    image: "/img/restaurant-img/Hotel Sapphire Restaurant.webp",
    category: "Pasta",
    isVeg: true,
    rating: 4.5,
    reviews: 120,
    badge: "Bestseller",
    restaurantId: "pizza-paradise",
  },
  {
    id: "pizza-paradise-arrabiata",
    name: "Penne Arrabiata",
    description: "Spicy tomato sauce pasta with garlic and red chili",
    price: 200,
    image: "/img/restaurant-img/Hotel Sapphire Restaurant.webp",
    category: "Pasta",
    isVeg: true,
    rating: 4.4,
    reviews: 95,
    restaurantId: "pizza-paradise",
  },
  {
    id: "pizza-paradise-garlic-bread",
    name: "Garlic Bread",
    description: "Toasted bread with garlic butter and Italian herbs",
    price: 80,
    image: "/img/restaurant-img/Hotel Sapphire Restaurant.webp",
    category: "Starters",
    isVeg: true,
    rating: 4.3,
    reviews: 90,
    restaurantId: "pizza-paradise",
  },
  {
    id: "pizza-paradise-bruschetta",
    name: "Bruschetta",
    description: "Toasted bread topped with fresh tomatoes and basil",
    price: 120,
    image: "/img/restaurant-img/Hotel Sapphire Restaurant.webp",
    category: "Starters",
    isVeg: true,
    rating: 4.4,
    reviews: 75,
    restaurantId: "pizza-paradise",
  },
  {
    id: "pizza-paradise-tiramisu",
    name: "Tiramisu",
    description: "Classic Italian dessert with coffee and mascarpone",
    price: 150,
    image: "/img/restaurant-img/Hotel Sapphire Restaurant.webp",
    category: "Desserts",
    isVeg: true,
    rating: 4.7,
    reviews: 110,
    badge: "Chef's Special",
    restaurantId: "pizza-paradise",
  },
  {
    id: "pizza-paradise-lemonade",
    name: "Fresh Lemonade",
    description: "Refreshing homemade lemonade with mint",
    price: 60,
    image: "/img/restaurant-img/Hotel Sapphire Restaurant.webp",
    category: "Beverages",
    isVeg: true,
    rating: 4.2,
    reviews: 65,
    restaurantId: "pizza-paradise",
  },
];

// Helper function to get menu items by restaurant
export const getMenuItemsByRestaurant = (restaurantId: string): MenuItem[] => {
  return menuItemsData.filter((item) => item.restaurantId === restaurantId);
};

// Helper function to get menu items by category
export const getMenuItemsByCategory = (
  restaurantId: string,
  category: string
): MenuItem[] => {
  return menuItemsData.filter(
    (item) => item.restaurantId === restaurantId && item.category === category
  );
};

// Helper function to get all categories for a restaurant
export const getRestaurantCategories = (restaurantId: string): string[] => {
  const items = getMenuItemsByRestaurant(restaurantId);
  const categories = [...new Set(items.map((item) => item.category))];
  return categories;
};
