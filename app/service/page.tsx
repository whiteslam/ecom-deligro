import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ServicesSection from "../components/ServicesSection";

const ServicePage = () => {
  return (
    <div className="min-h-screen bg-[#E59A01] dark:bg-gray-950 font-sans text-gray-800 dark:text-gray-100 pt-6 transition-colors duration-500">
      <Navbar />
      <main className="px-8 py-12 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-[#2B2B2B] dark:text-white mb-4">
            Our <span className="text-white">Services</span>
          </h1>
          <p className="text-xl text-[#2B2B2B] dark:text-gray-300 max-w-2xl mx-auto">
            Explore our wide range of delivery services designed for your
            convenience.
          </p>
        </div>

        <div className="bg-white/15 backdrop-blur-2xl border border-white/30 rounded-3xl shadow-xl overflow-hidden">
          <ServicesSection />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ServicePage;
