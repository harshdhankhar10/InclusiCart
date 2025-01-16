"use client"

import React from "react";
import { Home, Search, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";

const NotFoundPage = () => {
  const router = useRouter();

  return (
        <>
        <Navbar />
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 p-4">
      <Card className="max-w-2xl w-full border-0 shadow-lg bg-white/80 backdrop-blur-sm">
        <CardContent className="p-8">
          <div className="text-center space-y-6">
            {/* Animated 404 Text */}
            <div className="relative">
              <h1 className="text-[150px] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 leading-none animate-pulse">
                404
              </h1>
              <div className="absolute inset-0 flex items-center justify-center opacity-5">
                <span className="text-[200px] font-bold">404</span>
              </div>
            </div>

            {/* Error Message */}
            <div className="space-y-3 mb-8">
              <h2 className="text-2xl font-bold text-gray-800">
                Oops! Page Not Found
              </h2>
              <p className="text-gray-600 max-w-md mx-auto">
                The page you are looking for might have been removed, had its name
                changed, or is temporarily unavailable.
              </p>
            </div>
            <div className="flex items-center justify-center space-x-4">
                <Button  size="lg"  onClick={() => router.push("/")} >
                    Go to Home Page
                </Button>
                <Button  size="lg"  onClick={() => router.back()} >
                    <ArrowLeft className="h-6 w-6 -ml-1" />
                    Go back to Previous Page
                </Button>
            </div>
           

           
          </div>
        </CardContent>
        
        <CardFooter className="p-6 border-t border-gray-100 bg-gray-50/50">
          <div className="w-full text-center text-sm text-gray-500">
            Need assistance? <a href="/contact" className="text-blue-600 hover:underline">Contact Support</a>
          </div>
        </CardFooter>
      </Card>
    </div>
        </>
  );
};

export default NotFoundPage;