import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
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
        <Image
          src="/img/logo.png"
          alt="Deligro Logo"
          width={100}
          height={30}
          className="object-contain"
        />
      </div>
      <div className="hidden md:flex items-center gap-8 font-medium text-[#2B2B2B]">
        <Link href="/" className="hover:text-[#D92E2E] transition">
          Home
        </Link>
        <Link href="/order" className="hover:text-[#D92E2E] transition">
          Order
        </Link>
        <Link href="/service" className="hover:text-[#D92E2E] transition">
          Service
        </Link>
        <Link href="/about" className="hover:text-[#D92E2E] transition">
          About
        </Link>
        <Link href="/contact" className="hover:text-[#D92E2E] transition">
          Contact
        </Link>
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
        <Link href="/login">
          <button className="px-6 py-2 bg-white/15 backdrop-blur-2xl border border-white/30 text-[#D92E2E] rounded-full shadow-xl hover:bg-white/30 transition font-medium">
            Login
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
