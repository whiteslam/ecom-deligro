import Image from "next/image";

const Footer = () => {
  return (
    <footer className="px-8 py-12 max-w-7xl mx-auto border-t border-gray-200 mt-12">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-12">
        <div className="col-span-1">
          <Image
            src="/img/logo.png"
            alt="Deligro Logo"
            width={120}
            height={40}
            className="mb-4 object-contain"
          />
          <p className="text-[#2B2B2B] dark:text-white text-sm">
            Delivering happiness to your doorstep.
          </p>
        </div>
        <div>
          <h4 className="font-bold text-[#2B2B2B] dark:text-white mb-4">
            Company
          </h4>
          <ul className="space-y-2 text-[#2B2B2B] dark:text-gray-300 text-sm">
            <li>
              <a href="/about" className="hover:text-[#D92E2E]">
                About Us
              </a>
            </li>
            <li>
              <a href="/careers" className="hover:text-[#D92E2E]">
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
          <h4 className="font-bold text-[#2B2B2B] dark:text-white mb-4">
            Contact
          </h4>
          <ul className="space-y-2 text-[#2B2B2B] dark:text-gray-300 text-sm">
            <li>
              <a
                href="https://wa.me/919109175556"
                className="hover:text-[#D92E2E]"
              >
                Help & Support
              </a>
            </li>
            <li>
              <a href="/admin" className="hover:text-[#D92E2E]">
                Partner with us
              </a>
            </li>
            <li>
              <a href="/rider" className="hover:text-[#D92E2E]">
                Ride with us
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-[#2B2B2B] dark:text-white mb-4">
            Legal
          </h4>
          <ul className="space-y-2 text-[#2B2B2B] dark:text-gray-300 text-sm">
            <li>
              <a href="/terms-conditions" className="hover:text-[#D92E2E]">
                Terms & Conditions
              </a>
            </li>
            <li>
              <a href="/privacy-policy" className="hover:text-[#D92E2E]">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="/cookie-policy" className="hover:text-[#D92E2E]">
                Cookie Policy
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-[#2B2B2B] dark:text-white mb-4">
            Follow Us
          </h4>
          <div className="flex gap-4 text-gray-400">
            <a
              href="https://www.instagram.com/deligrodelivery/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#D92E2E] transition hover:scale-110"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=com.deligrow.user&hl=en_IN"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#D92E2E] transition hover:scale-110"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-1.081.054A.996.996 0 0 1 2 21.29V2.71a.996.996 0 0 1 .529-.95.996.996 0 0 1 1.08.054z" />
                <path
                  fillOpacity=".5"
                  d="M16.29 14.5l-2.5-2.5 2.5-2.5 5.06 2.85a.996.996 0 0 1 0 1.8l-5.06 2.85z"
                />
                <path
                  fillOpacity=".5"
                  d="M14.5 16.29L4.32 26.47a.996.996 0 0 0 1.25.1l13.99-7.87-5.06-2.41z"
                  transform="translate(0 -4.47)"
                />
                <path
                  fillOpacity=".5"
                  d="M19.56 5.3L5.57-2.57a.996.996 0 0 0-1.25.1L14.5 7.71l5.06-2.41z"
                  transform="translate(0 4.47)"
                />
              </svg>
            </a>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#D92E2E] transition hover:scale-110"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-100 dark:border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-white text-sm">
          © 2026 Deligro(Phoxera Solutions Private Limited). All rights
          reserved.
        </p>
        <p className="text-xs text-white font-light tracking-widest uppercase opacity-70 hover:opacity-100 transition-all duration-300">
          <span className="cursor-default">
            Designed & Developed by{" "}
            <span className="font-medium text-white">Gaurav Mirjha</span>
          </span>
          <span className="mx-2 opacity-50">|</span>
          <a
            href="#"
            className="hover:text-white hover:underline transition-colors"
          >
            Contact Developer
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
