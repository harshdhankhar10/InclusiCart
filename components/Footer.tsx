import React from 'react';
import { 
  Mail, 
  Twitter, 
  Facebook, 
  Linkedin, 
  Github, 
  MapPin, 
  Phone 
} from 'lucide-react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-black to-[#141312] text-white py-16 px-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">

        <div className="space-y-6">
          <h3 className="text-3xl font-extrabold text-white tracking-wide">InclusiCart</h3>
          <p className="text-gray-300 leading-relaxed">
            Your global marketplace for diverse products. Shop seamlessly, discover uniquely, and experience convenience like never before.
          </p>
          <div className="flex space-x-5">
            {[
              { Icon: Twitter, color: 'hover:text-blue-400' },
              { Icon: Facebook, color: 'hover:text-blue-600' },
              { Icon: Linkedin, color: 'hover:text-blue-500' },
              { Icon: Github, color: 'hover:text-gray-200' }
            ].map(({ Icon, color }, index) => (
              <a 
                key={index} 
                href="#" 
                className={`transition duration-300 transform hover:scale-110 ${color}`}
              >
                <Icon size={24} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-xl font-semibold mb-6 border-b border-blue-700 pb-3">Quick Links</h4>
          <ul className="space-y-4">
           <li> <Link href="/">Home</Link></li>
           <li> <Link href="/products">Products</Link></li>
              <li> <Link href="/about">About</Link></li>
              <li> <Link href="/contact">Quick Deals</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xl font-semibold mb-6 border-b border-blue-700 pb-3">Policies </h4>
          <ul className="space-y-4">
           <li> <Link href="/privacy-policy">Privacy Policy</Link></li>
              <li> <Link href="/terms-of-service">Terms of Service</Link></li>
                <li> <Link href="/return-policy">Return Policy</Link></li>
                    <li> <Link href="/shipping-policy">Shipping Policy</Link></li>

          </ul>
        </div>
        <div>
          <h4 className="text-xl font-semibold mb-6 border-b border-blue-700 pb-3">Policies </h4>
          <ul className="space-y-4">
           <li> <Link href="/privacy-policy">Privacy Policy</Link></li>
              <li> <Link href="/terms-of-service">Terms of Service</Link></li>
                <li> <Link href="/return-policy">Return Policy</Link></li>
                    <li> <Link href="/shipping-policy">Shipping Policy</Link></li>

          </ul>
        </div>
            
      </div>

      <div className="border-t border-blue-800 mt-12 pt-6 text-center">
        <p className="text-gray-400 text-sm">
          © {new Date().getFullYear()} InclusiCart. All Rights Reserved. 
          <span className="ml-4 text-blue-300 hover:underline cursor-pointer">Privacy Policy</span>
          <span className="ml-4 text-blue-300 hover:underline cursor-pointer">Terms of Service</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;