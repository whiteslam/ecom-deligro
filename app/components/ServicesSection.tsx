import React from "react";
import Link from "next/link";

const ServicesSection = () => {
  const services = {
    "DAILY NEEDS": [
      {
        title: "Tiffin Service",
        desc: "Home-made food subscriptions.",
        icon: "🍱",
        href: "/service",
      },
      {
        title: "Grocery & Essentials",
        desc: "Daily needs delivered fast.",
        icon: "🛒",
        href: "/service",
      },
      {
        title: "Bakery & Sweets",
        desc: "Cakes, shakes & more.",
        icon: "🍰",
        href: "/service",
      },
      {
        title: "Medicine (OTC)",
        desc: "Urgent health essentials.",
        icon: "💊",
        href: "/service",
      },
    ],
    "SPECIAL SERVICES": [
      {
        title: "Parcel Pickup/Drop",
        desc: "Local courier service.",
        icon: "📦",
        href: "/service",
      },
      {
        title: "Catering & Bulk",
        desc: "For parties & events.",
        icon: "🎉",
        href: "/service",
      },
      {
        title: "Cake & Flower",
        desc: "Surprise gifting.",
        icon: "🎁",
        href: "/service",
      },
      {
        title: "Home Chef",
        desc: "Authentic local dishes.",
        icon: "👩‍🍳",
        href: "/service",
      },
    ],
  };

  return (
    <div className="flex flex-col lg:flex-row gap-8 p-8">
      {/* Services Grid */}
      <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-8">
        {Object.entries(services).map(([category, items]) => (
          <div key={category} className="space-y-6">
            <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider border-b border-gray-200 pb-2">
              {category}
            </h3>
            <div className="grid grid-cols-1 gap-4">
              {items.map((item, idx) => (
                <Link href={item.href} key={idx} className="group block">
                  <div className="flex items-start gap-4 p-3 rounded-xl hover:bg-black/5 dark:hover:bg-white/10 transition">
                    <div className="text-2xl group-hover:scale-110 transition duration-300">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-[#2B2B2B] dark:text-gray-800 group-hover:text-[#D92E2E] transition">
                        {item.title}
                      </h4>
                      <p className="text-xs text-gray-600 dark:text-gray-500">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Request Card */}
      <div className="lg:w-1/3 bg-[#D92E2E] text-white rounded-3xl p-8 flex flex-col justify-center relative overflow-hidden shadow-lg">
        {/* Decorative circle */}
        <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-3xl -mr-10 -mt-10"></div>
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-black/10 rounded-full blur-2xl -ml-10 -mb-10"></div>

        <h3 className="text-2xl font-bold mb-4 relative z-10">
          DELIGRO for Bemetara
        </h3>
        <p className="text-white/90 mb-8 relative z-10 text-sm leading-relaxed">
          Making everyday life easier. From food to parcels, we deliver it all
          with care.
        </p>
        <Link href="/service">
          <button className="w-full py-3 bg-white text-[#D92E2E] rounded-xl font-bold hover:bg-gray-100 transition shadow-md flex items-center justify-center gap-2">
            View All Services
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </svg>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ServicesSection;
