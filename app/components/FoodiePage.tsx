"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Navbar from "./Navbar";
import Footer from "./Footer";
// import LocationPopup from "./LocationPopup";

const FoodiePage = () => {
  const router = useRouter();
  // const [showLocationPopup, setShowLocationPopup] = useState(false);

  const handleOrderNow = () => {
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
    if (isLoggedIn) {
      router.push("/order");
    } else {
      router.push("/login");
    }
  };

  return (
    <div className="min-h-screen bg-[#E59A01] dark:bg-gray-950 font-sans text-gray-800 dark:text-gray-100 pt-6 transition-colors duration-500">
      {/* Navbar */}
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <header className="relative px-8 py-12 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 space-y-6 z-10">
          <div className="inline-block px-4 py-1 bg-white/15 backdrop-blur-2xl border border-white/30 text-white rounded-full shadow-xl text-sm font-semibold mb-2">
            More than Faster
          </div>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight text-[#2B2B2B] dark:text-white">
            Desire{" "}
            <span className="relative inline-block">
              <span className="relative z-10 text-white bg-white/15 backdrop-blur-2xl border border-white/30 px-4 py-1 rounded-full shadow-xl transform -rotate-2 inline-block">
                Food
              </span>
            </span>{" "}
            <br />
            for Your Taste
          </h1>
          <p className="text-lg text-[#2B2B2B] dark:text-gray-300 max-w-md">
            Bringing delicious meals from Bemetara's best restaurants straight
            to your door.
          </p>
          <div className="flex items-center gap-4 pt-4">
            <button
              onClick={handleOrderNow}
              className="h-14 px-8 bg-white/15 backdrop-blur-2xl border border-white/30 text-[#2B2B2B] dark:text-white rounded-full font-bold shadow-xl hover:bg-white/25 transition transform hover:scale-105 flex items-center justify-center"
            >
              Order Now
            </button>
          </div>
        </div>
        <div className="flex-1 relative">
          <div className="relative w-full h-[500px] md:h-[600px]">
            {/* Yellow Background Blob */}
            <div className="absolute top-0 right-0 w-[90%] h-[90%] bg-yellow-400 rounded-tl-[100px] rounded-bl-[50px] rounded-br-[50px] rounded-tr-[50px] -z-10 transform rotate-3"></div>

            <Image
              src="/img/hero_image.png"
              alt="Happy customer with pizza"
              fill
              className="object-contain z-10"
              priority
            />

            {/* Floating Badges */}
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section className="px-8 py-20 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              title: "Quality Food",
              icon: "🥗",
              desc: "Freshly prepared meals from trusted restaurants, delivered with care.",
            },
            {
              title: "Fast Delivery",
              icon: "🚀",
              desc: "Follow the quickest routes in Bemetara to deliver your order in time.",
            },
            {
              title: "Easy Payment",
              icon: "💳",
              desc: "Seamless and secure payment process with multiple payment options.",
            },
            {
              title: "10k+ Orders Delivered",
              icon: "📦",
              desc: "10k orders delivered successfully with care.",
            },
          ].map((feature, idx) => (
            <div
              key={idx}
              className="bg-white/15 backdrop-blur-2xl border border-white/30 p-8 rounded-3xl shadow-xl hover:shadow-2xl transition duration-300 flex flex-col items-center text-center group"
            >
              <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center text-3xl mb-6 group-hover:bg-[#D92E2E] group-hover:text-white transition">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-[#2B2B2B] dark:text-white">
                {feature.title}
              </h3>
              <p className="text-[#2B2B2B] dark:text-gray-300 text-sm leading-relaxed mb-4">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Best Sellers */}
      <section className="px-8 py-20 max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Popular Restaurants
        </h2>
        <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto mb-12">
          Explore the best restaurants in your area, offering a wide variety of
          cuisines and dining experiences.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
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
            },
            {
              name: "Hotel Sapphire Restaurant",
              rating: "3.8",
              reviews: "(204)",
              price: "",
              type: "Restaurant",
              address: "Professor Colony, Raipur road",
              status: '"Currently Best restaurants in bemetara."',
              statusColor: "text-blue-600 italic",
              features: "",
              image: "/img/restaurant-img/Hotel Sapphire Restaurant.webp",
            },
            {
              name: "Maa bhawani restaurant",
              rating: "3.8",
              reviews: "(49)",
              price: "",
              type: "Vegetarian",
              address: "PG8M+PQJ Old Bus Stand, Chowk, beside Hanum...",
              status: "Closes soon · 11 pm",
              statusColor: "text-orange-500",
              features: "Dine-in · Takeaway",
              image: "/img/restaurant-img/Maa bhawani restaurant.webp",
            },
          ].map((restaurant, idx) => (
            <div
              key={idx}
              className="bg-white/15 backdrop-blur-2xl border border-white/30 p-6 rounded-3xl shadow-xl hover:shadow-2xl transition duration-300 text-left flex flex-col h-full"
            >
              <div className="h-48 bg-gray-100 rounded-2xl mb-4 relative overflow-hidden">
                <Image
                  src={restaurant.image}
                  alt={restaurant.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col gap-1 flex-grow">
                <h3 className="text-xl font-bold text-[#2B2B2B] dark:text-white">
                  {restaurant.name}
                </h3>
                <div className="flex items-center gap-1 text-sm text-gray-700 dark:text-gray-300 flex-wrap">
                  <span className="bg-green-600 text-white px-1 rounded text-xs font-bold">
                    {restaurant.rating} ★
                  </span>
                  <span className="text-gray-500">{restaurant.reviews}</span>
                  {restaurant.price && <span>· {restaurant.price}</span>}
                  <span>· {restaurant.type}</span>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-2">
                  {restaurant.address}
                </p>
                <p className={`text-sm font-medium ${restaurant.statusColor}`}>
                  {restaurant.status}
                </p>
                {restaurant.features && (
                  <p className="text-gray-500 text-xs mt-1">
                    {restaurant.features}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="px-8 py-20 max-w-7xl mx-auto my-12">
        <div className="flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1 relative h-[400px] w-full">
            <div className="absolute inset-0 flex items-center justify-center">
              <Image
                src="/img/three_phones_orange_bg.png"
                alt="Deligro App Interface on Multiple Devices"
                fill
                className="object-contain"
              />
            </div>
          </div>
          <div className="flex-1 space-y-8">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
              Why People Choose us?
            </h2>
            <div className="space-y-6">
              {[
                {
                  title: "Bemetara’s Only Trusted Delivery Service",
                  icon: "🏙️",
                  desc: "Exclusive, local, and built just for the people of Bemetara — no competitors, no delays, no confusion.",
                },
                {
                  title: "Fast & Reliable Delivery Every Time",
                  icon: "⚡",
                  desc: "Our riders know every street and shortcut, ensuring quick, safe, and consistently on-time deliveries.",
                },
                {
                  title: "All Your Favorites Delivered to Your Doorstep",
                  icon: "🛍️",
                  desc: "From top local restaurants to daily essentials, Deligro brings the widest range of choices in one app.",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="flex gap-6 items-start p-6 rounded-3xl transition-all duration-300 border border-transparent hover:bg-white/15 hover:backdrop-blur-2xl hover:border-white/30 hover:shadow-xl group"
                >
                  <div className="text-5xl flex-shrink-0 drop-shadow-lg filter">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-[#2B2B2B] dark:text-white">
                      {item.title}
                    </h3>
                    <p className="text-[#2B2B2B] dark:text-gray-300 text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Customer Feedback */}
      <section className="px-8 py-20 max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-[#2B2B2B] dark:text-white mb-4">
          Loved by Families{" "}
          <span className="text-[#D92E2E]">Across Bemetara</span>
        </h2>
        <p className="text-[#2B2B2B] dark:text-gray-300 mb-12">
          Real experience from people who trust Deligro Delivery every day.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              name: " Shantanu Goswami",
              location: "Bemetara",
              text: "Deligro has been a staple in our kitchen for over 10 years. The authentic taste and purity is unmatched.",
              icon: "👩",
            },
            {
              name: "Deepak Yadav",
              location: "Bemetara",
              text: "The quality speaks for itself. My family trusts Deligro for all our cooking needs. Highly recommended!",
              icon: "👨",
            },
            {
              name: "Mukesh Goswami",
              location: "Bemetara",
              text: "Pure, natural, and healthy - exactly what every family needs. Thank you Deligro for maintaining such high standards.",
              icon: "👩",
            },
          ].map((review, idx) => (
            <div
              key={idx}
              className="bg-white/15 backdrop-blur-2xl border border-white/30 p-8 rounded-3xl shadow-xl hover:shadow-2xl transition duration-300 flex flex-col items-center text-center"
            >
              <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center text-4xl mb-4 shadow-inner">
                {review.icon}
              </div>
              <h3 className="text-xl font-bold text-[#2B2B2B] dark:text-white mb-1">
                {review.name}
              </h3>
              <p className="text-gray-500 text-sm mb-6">{review.location}</p>
              <p className="text-[#2B2B2B] dark:text-gray-300 italic leading-relaxed">
                &quot;{review.text}&quot;
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      {/* Footer */}
      <Footer />

      {/* Under Construction Sticky Note */}
      <div className="fixed bottom-6 right-6 z-50 bg-red-600 text-white px-4 py-2 rounded-lg shadow-2xl transform rotate-3 border border-red-400 font-bold text-sm animate-bounce">
        🚧 Site Under Construction
      </div>
      {/* Location Popup */}
      {/* {showLocationPopup && (
        <LocationPopup onClose={() => setShowLocationPopup(false)} />
      )} */}
    </div>
  );
};

export default FoodiePage;
