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
          <p className="text-[#2B2B2B] text-sm">
            Delivering happiness to your doorstep.
          </p>
        </div>
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
  );
};

export default Footer;
