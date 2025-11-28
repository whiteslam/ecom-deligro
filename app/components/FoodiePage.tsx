import React from "react";
import Image from "next/image";

const FoodiePage = () => {
  return (
    <div className="min-h-screen bg-[#E59A01] font-sans text-gray-800 pt-6">
      {/* Navbar */}
      <nav className="w-[90%] max-w-5xl mx-auto flex items-center justify-between px-6 py-4 bg-white/15 backdrop-blur-2xl border border-white/30 shadow-xl rounded-full z-50">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 flex items-center justify-center text-black font-bold">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </div>
          <span className="text-xl font-bold text-[#D92E2E]">Deligro</span>
        </div>
        <div className="hidden md:flex items-center gap-8 font-medium text-[#2B2B2B]">
          <a href="#" className="text-[#D92E2E]">
            Home
          </a>
          <a href="#" className="hover:text-[#D92E2E] transition">
            Service
          </a>
          <a href="#" className="hover:text-[#D92E2E] transition">
            About
          </a>
          <a href="#" className="hover:text-[#D92E2E] transition">
            Contact
          </a>
        </div>
        <div className="flex items-center gap-4">
          <a
            href="https://play.google.com/store/apps/details?id=com.deligrow.user&hl=en_IN"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 bg-white/15 backdrop-blur-2xl border border-white/30 text-[#D92E2E] rounded-full shadow-xl hover:bg-white/30 transition font-medium"
          >
            Download
          </a>
          <button className="px-6 py-2 bg-white/15 backdrop-blur-2xl border border-white/30 text-[#D92E2E] rounded-full shadow-xl hover:bg-white/30 transition font-medium">
            Login
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative px-8 py-12 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 space-y-6 z-10">
          <div className="inline-block px-4 py-1 bg-white/15 backdrop-blur-2xl border border-white/30 text-white rounded-full shadow-xl text-sm font-semibold mb-2">
            More than Faster
          </div>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight text-[#2B2B2B]">
            Desire{" "}
            <span className="relative inline-block">
              <span className="relative z-10 text-white bg-white/15 backdrop-blur-2xl border border-white/30 px-4 py-1 rounded-full shadow-xl transform -rotate-2 inline-block">
                Food
              </span>
            </span>{" "}
            <br />
            for Your Taste
          </h1>
          <p className="text-lg text-[#2B2B2B] max-w-md">
            Food is what we eat to stay alive and healthy. It comes in many
            different forms and flavors, from fruits and vegetables to meats and
            grains.
          </p>
          <div className="flex items-center gap-4 pt-4">
            <button className="h-14 px-8 bg-white/15 backdrop-blur-2xl border border-white/30 text-[#2B2B2B] rounded-full font-bold shadow-xl hover:bg-white/25 transition transform hover:scale-105 flex items-center justify-center">
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
              desc: "Contrary to popular belief, Lorem Ipsum is not simply random text.",
            },
            {
              title: "Fast Delivery",
              icon: "🚀",
              desc: "Contrary to popular belief, Lorem Ipsum is not simply random text.",
            },
            {
              title: "Easy Payment",
              icon: "💳",
              desc: "Contrary to popular belief, Lorem Ipsum is not simply random text.",
            },
            {
              title: "24/7 Service",
              icon: "🎧",
              desc: "Contrary to popular belief, Lorem Ipsum is not simply random text.",
            },
          ].map((feature, idx) => (
            <div
              key={idx}
              className="bg-white/15 backdrop-blur-2xl border border-white/30 p-8 rounded-3xl shadow-xl hover:shadow-2xl transition duration-300 flex flex-col items-center text-center group"
            >
              <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center text-3xl mb-6 group-hover:bg-[#D92E2E] group-hover:text-white transition">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-[#2B2B2B]">
                {feature.title}
              </h3>
              <p className="text-[#2B2B2B] text-sm leading-relaxed mb-4">
                {feature.desc}
              </p>
              <a
                href="#"
                className="text-[#D92E2E] font-semibold text-sm hover:underline"
              >
                Learn More
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="px-8 py-20 max-w-7xl mx-auto bg-white/15 backdrop-blur-2xl border border-white/30 shadow-xl rounded-[50px] my-12">
        <div className="flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1 relative h-[400px] w-full">
            <div className="absolute inset-0 bg-gray-100 rounded-3xl overflow-hidden">
              {/* Placeholder for food image */}
              <div className="w-full h-full flex items-center justify-center text-gray-300 text-6xl">
                🍽️
              </div>
            </div>
          </div>
          <div className="flex-1 space-y-8">
            <h2 className="text-4xl font-bold text-gray-900">
              Why People Choose us?
            </h2>
            <div className="space-y-6">
              {[
                {
                  title: "Convenient and Reliable",
                  icon: "🛵",
                  desc: "Whether you dine-in or order delivery, our service is convenient, fast, and reliable.",
                },
                {
                  title: "Variety of Options",
                  icon: "🍔",
                  desc: "From hearty meals to light snacks, we offer a wide range of options to suit every taste.",
                },
                {
                  title: "Eat Burger",
                  icon: "🥪",
                  desc: "Our burgers are grilled to perfection, with juicy patties and flavorful toppings.",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="flex gap-4 items-start p-4 rounded-2xl hover:bg-gray-50 transition border border-transparent hover:border-[#F5C261]"
                >
                  <div className="w-12 h-12 bg-white shadow-md rounded-full flex items-center justify-center text-2xl flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-[#2B2B2B]">
                      {item.title}
                    </h3>
                    <p className="text-[#2B2B2B] text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Best Sellers */}
      <section className="px-8 py-20 max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Our Best Seller Dishes 🔥
        </h2>
        <p className="text-gray-500 max-w-2xl mx-auto mb-12">
          Our fresh garden salad is a light and refreshing option. It features a
          mix of crisp lettuce, juicy tomatoes all tossed in your choice of
          dressing.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="bg-white/15 backdrop-blur-2xl border border-white/30 p-6 rounded-3xl shadow-xl hover:shadow-2xl transition duration-300 text-left"
            >
              <div className="h-48 bg-gray-100 rounded-2xl mb-6 flex items-center justify-center text-4xl">
                🥗
              </div>
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-xl font-bold text-[#2B2B2B]">
                  Breakfast Food
                </h3>
                <button className="px-4 py-1 bg-white/15 backdrop-blur-2xl border border-white/30 text-[#D92E2E] text-xs font-bold rounded-full shadow-xl hover:bg-white/25">
                  Buy Now
                </button>
              </div>
              <div className="flex items-center gap-1 text-[#D92E2E] text-sm mb-4">
                ★★★★★
              </div>
              <div className="flex justify-between items-center">
                <span className="text-2xl font-bold text-[#2B2B2B]">$230</span>
                <span className="text-gray-400 line-through text-sm">$300</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Customer Feedback */}
      <section className="px-8 py-20 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <h2 className="text-4xl font-bold text-[#2B2B2B]">
              Customer <span className="text-[#D92E2E]">Feedback</span>
            </h2>
            <p className="text-[#2B2B2B] leading-relaxed">
              &quot;I recently ordered sandwich from deligro and wanted to share
              my experience. The food was absolutely delicious, and I was
              impressed by the Delivery of the deligro. its fast and good.&quot;
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
              <div>
                <p className="font-bold text-[#2B2B2B]">Shantanu Goswami</p>
                <p className="text-xs text-[#2B2B2B]">Customer</p>
              </div>
            </div>
          </div>
          <div className="flex-1 relative h-[400px] w-full">
            <div className="absolute right-0 bottom-0 w-3/4 h-3/4 bg-yellow-400 rounded-tl-[100px] rounded-tr-[20px] -z-10"></div>
            {/* Placeholder for chef image */}
            <div className="w-full h-full flex items-end justify-center">
              <div className="w-64 h-80 bg-gray-200 rounded-t-full flex items-center justify-center text-4xl">
                👨‍🍳
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="px-8 py-20 max-w-7xl mx-auto">
        <div className="bg-white/15 backdrop-blur-2xl border border-white/30 rounded-3xl p-12 shadow-xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex-1">
            <h2 className="text-3xl font-bold text-[#2B2B2B] mb-2">
              Join Our <span className="text-[#D92E2E]">Newsletter</span>
            </h2>
            <p className="text-[#2B2B2B]">
              Receive exclusive offers and updates directly to your inbox.
            </p>
          </div>
          <div className="flex-1 w-full max-w-md flex gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 bg-gray-50 rounded-full border border-gray-200 focus:outline-none focus:border-[#D92E2E]"
            />
            <button className="px-8 py-4 bg-white/15 backdrop-blur-2xl border border-white/30 text-[#D92E2E] rounded-full font-bold shadow-xl hover:bg-white/25 transition">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-8 py-12 max-w-7xl mx-auto border-t border-gray-200 mt-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h4 className="font-bold text-[#2B2B2B] mb-4">Company</h4>
            <ul className="space-y-2 text-[#2B2B2B] text-sm">
              <li>
                <a href="#" className="hover:text-[#D92E2E]">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#D92E2E]">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#D92E2E]">
                  Blog
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-[#2B2B2B] mb-4">Contact</h4>
            <ul className="space-y-2 text-[#2B2B2B] text-sm">
              <li>
                <a href="#" className="hover:text-[#D92E2E]">
                  Help & Support
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#D92E2E]">
                  Partner with us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#D92E2E]">
                  Ride with us
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-[#2B2B2B] mb-4">Legal</h4>
            <ul className="space-y-2 text-[#2B2B2B] text-sm">
              <li>
                <a href="#" className="hover:text-[#D92E2E]">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#D92E2E]">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#D92E2E]">
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-[#2B2B2B] mb-4">Follow Us</h4>
            <div className="flex gap-4 text-gray-400">
              <a href="#" className="hover:text-[#D92E2E] text-xl">
                FB
              </a>
              <a href="#" className="hover:text-[#D92E2E] text-xl">
                IG
              </a>
              <a href="#" className="hover:text-[#D92E2E] text-xl">
                TW
              </a>
            </div>
          </div>
        </div>
        <div className="text-center text-gray-400 text-sm">
          © 2024 Deligro. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default FoodiePage;
