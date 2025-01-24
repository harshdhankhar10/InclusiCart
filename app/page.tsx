import Footer from "@/components/Footer";
import CategoriesSection from "@/components/Homepage/CategoriesSection";
import HeroSection from "@/components/Homepage/HeroSection";
import FeaturedProducts from "@/components/Homepage/Products/FeaturedProducts";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
        <Navbar />
        <HeroSection />
        {/* <CategoriesSection /> */}
        <FeaturedProducts />
        <Footer />
    </>
  );
}
