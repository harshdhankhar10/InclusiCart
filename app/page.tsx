import CategoriesSection from "@/components/Homepage/CategoriesSection";
import HeroSection from "@/components/Homepage/HeroSection";
import FeaturedProducts from "@/components/Homepage/Products/FeaturedProducts";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <>
        <Navbar />
        <HeroSection />
        {/* <CategoriesSection /> */}
        <FeaturedProducts />
    </>
  );
}
