"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const HeroSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  interface Slide {
    title: string;
    subtitle: string;
    description: string;
    image: string;
    buttonText: string;
  }
  
  

  const slides: Slide[] = [
    {
      title: "Elevate Your Style",
      subtitle: "New Season Arrivals",
      description: "Discover our latest collection of premium fashion essentials. Get up to 40% off on selected items.",
      image: "https://t4.ftcdn.net/jpg/09/21/66/55/360_F_921665590_1gMP6zuhbZmmGIjCqyfqJBCDBU1eAxwm.jpg",
      buttonText: "Shop Collection"
    },
    {
      title: "Summer Essentials",
      subtitle: "Limited Time Offer",
      description: "Fresh drops and exclusive deals on summer must-haves. Free shipping on orders over ₹500.",
      image: "https://media.istockphoto.com/id/1318872737/vector/summer-beach-concept-summer-holidays-design-template-for-promo-poster-web-banner-social.jpg?s=612x612&w=0&k=20&c=hEeJ2ilT1CK4PQhlaVfgW_znH7zZPwzyelN4Ks_bKzM=",
      buttonText: "Explore Now"
    },
    {
      title: "Trending Fashion",
      subtitle: "Special Edition",
      description: "Be the first to shop our newest arrivals. Extra 10% off on your first purchase.",
      image: "https://img.freepik.com/free-photo/happy-redhead-man-stretch-out-hands-with-shopping-bags-give-you-gifts-standing-pink-background_1258-153269.jpg",
      buttonText: "Discover More"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-[80vh] overflow-hidden bg-gray-100 ">

      <motion.div
        key={currentSlide}
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.7 }}
        className="absolute inset-0"
      >
        <Image
          src={slides[currentSlide].image}
          alt="Hero background"
          className="w-full h-full object-cover"
          fill
        />
      </motion.div>

      <div className="relative z-20 h-full">
        <div className="container mx-auto px-4 h-full">
          <div className="flex items-center h-full max-w-2xl">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <span className="inline-block bg-white/10 backdrop-blur-sm text-white text-sm font-medium px-6 py-2 rounded-full">
                {slides[currentSlide].subtitle}
              </span>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
                {slides[currentSlide].title}
              </h1>
              
              <p className="text-lg md:text-xl text-white/90 max-w-xl">
                {slides[currentSlide].description}
              </p>
              
              <div className="flex gap-4 pt-4">
                <Button
                  size="lg"
                  className="bg-white text-black hover:bg-white/90 px-8 rounded-full"
                >
                  {slides[currentSlide].buttonText}
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              currentSlide === index ? "w-8 bg-white" : "w-2 bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSection;