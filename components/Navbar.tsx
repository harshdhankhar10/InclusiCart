"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  ShoppingCart,
  Heart,
  User,
  Search,
  Menu,
  X,
  ChevronDown,
  Gift,
  Tag,
  Bell,
  ShoppingBag
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative">
      {/* Announcement Bar */}
      <div className="bg-gray-900 text-white py-2">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center space-x-4 text-sm">
          <p className="text-center text-sm md:text-base font-medium">
            🎉 Flash Sale! Up to 50% off on selected items. Limited time only!
            <span className="hidden md:inline"> Use code: FLASH50</span>
          </p>
          </div>
          <div className="flex items-center space-x-4 text-sm">
            <a href="#" className="hover:text-gray-300">Track Order</a>
            <span>|</span>
            <a href="#" className="hover:text-gray-300">Help</a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <header 
        className={`bg-white ${
          isScrolled ? 'shadow-lg' : ''
        } transition-shadow duration-300 sticky top-0 z-50`}
      >
        <nav className="container mx-auto px-4 border-b border-gray-200">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Image src="/web-logo.png" alt="Logo" width={260} height={48} className="h-16 w-auto" />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navLinks.map((link, index) =>
                link.submenu ? (
                  <MegaMenu key={index} label={link.label} submenu={link.submenu} />
                ) : (
                  <motion.a
                    key={index}
                    href={link.href}
                    className="flex items-center gap-2 text-gray-700 hover:text-gray-900 text-sm font-medium transition-colors duration-200"
                    whileHover={{ scale: 1.05 }}
                  >
                    {link.icon}
                    {link.label}
                  </motion.a>
                )
              )}
            </div>

            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center space-x-6">
              <div className="relative">
                <Button
                  variant="ghost"
                  size="sm"
                  className="p-2"
                  onClick={() => setSearchOpen(!searchOpen)}
                >
                  <Search className="w-5 h-5" />
                </Button>
                <AnimatePresence>
                  {searchOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute right-0 mt-2 w-72 bg-white shadow-xl rounded-lg p-4"
                    >
                      <Input
                        type="text"
                        placeholder="Search products..."
                        className="w-full"
                        autoFocus
                      />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              <Button variant="ghost" size="sm" className="p-2">
                <Heart className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="sm" className="p-2">
                <User className="w-5 h-5" />
              </Button>
             <Link href="/shopping-cart">
             <Button variant="default" size="sm" className="flex items-center gap-2">
                <ShoppingBag className="w-5 h-5" />
                <span className="font-medium">Cart (0)</span>
              </Button>
             </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </Button>
            </div>
          </div>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden border-t border-gray-200"
            >
              <div className="container mx-auto px-4 py-4 space-y-4">
                <Input
                  type="text"
                  placeholder="Search products..."
                  className="w-full mb-4"
                />
                {navLinks.map((link, index) =>
                  link.submenu ? (
                    <MobileDropdown key={index} label={link.label} submenu={link.submenu} />
                  ) : (
                    <a
                      key={index}
                      href={link.href}
                      className="flex items-center gap-2 py-2 text-gray-700 hover:text-gray-900 text-sm font-medium"
                    >
                      {link.icon}
                      {link.label}
                    </a>
                  )
              )}
                <div className="pt-4 border-t border-gray-200">
                  <Button variant="default" className="w-full">
                    Sign In
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </div>
  );
};

const MegaMenu: React.FC<{
  label: string;
  submenu: { label: string; href: string; subItems?: { label: string; href: string }[] }[];
}> = ({ label, submenu }) => (
  <div className="relative group">
    <button className="flex items-center gap-1 text-gray-700 hover:text-gray-900 text-sm font-medium transition-colors duration-200">
      {label}
      <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
    </button>
    <div className="absolute left-0 mt-2 w-[500px] bg-white shadow-xl rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
      <div className="grid grid-cols-2 gap-8 p-6">
        {submenu.map((item, index) => (
          <div key={index} className="space-y-4">
            <a
              href={item.href}
              className="text-gray-900 font-semibold hover:text-blue-600 transition-colors duration-200"
            >
              {item.label}
            </a>
            {item.subItems && (
              <ul className="space-y-2">
                {item.subItems.map((subItem, subIndex) => (
                  <li key={subIndex}>
                    <a
                      href={subItem.href}
                      className="text-sm text-gray-600 hover:text-blue-600 transition-colors duration-200"
                    >
                      {subItem.label}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  </div>
);

const MobileDropdown: React.FC<{
  label: string;
  submenu: { label: string; href: string; subItems?: { label: string; href: string }[] }[];
}> = ({ label, submenu }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 last:border-0">
      <button
        className="flex items-center justify-between w-full py-2 text-gray-700 hover:text-gray-900 text-sm font-medium"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{label}</span>
        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="py-2 pl-4 space-y-2">
              {submenu.map((item, index) => (
                <div key={index} className="space-y-2">
                  <a
                    href={item.href}
                    className="block text-sm font-medium text-gray-900 hover:text-blue-600"
                  >
                    {item.label}
                  </a>
                  {item.subItems && (
                    <div className="pl-4 space-y-2">
                      {item.subItems.map((subItem, subIndex) => (
                        <a
                          key={subIndex}
                          href={subItem.href}
                          className="block text-sm text-gray-600 hover:text-blue-600"
                        >
                          {subItem.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const navLinks = [
  { label: "Home", href: "/", icon: <Gift className="w-4 h-4" /> },
  {
    label: "Shop",
    submenu: [
      {
        label: "Men's Collection",
        href: "/shop/men",
        subItems: [
          { label: "New Arrivals", href: "/shop/men/new" },
          { label: "Trending", href: "/shop/men/trending" },
          { label: "Shirts", href: "/shop/men/shirts" },
          { label: "Pants", href: "/shop/men/pants" },
          { label: "Accessories", href: "/shop/men/accessories" }
        ],
      },
      {
        label: "Women's Collection",
        href: "/shop/women",
        subItems: [
          { label: "New Arrivals", href: "/shop/women/new" },
          { label: "Trending", href: "/shop/women/trending" },
          { label: "Dresses", href: "/shop/women/dresses" },
          { label: "Skirts", href: "/shop/women/skirts" },
          { label: "Accessories", href: "/shop/women/accessories" }
        ],
      },
    ],
  },
  { label: "Deals", href: "/deals", icon: <Tag className="w-4 h-4" /> },
  { label: "Contact", href: "/contact", icon: <User className="w-4 h-4" /> },
];

export default Navbar;