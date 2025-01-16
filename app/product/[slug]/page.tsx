"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Star,
  Truck,
  RefreshCw,
  Shield,
  Heart,
  Share2,
  Minus,
  Plus,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import Navbar from "@/components/Navbar";

const product = {
  name: "Premium Leather Crossbody Bag",
  price: 299.99,
  rating: 4.8,
  reviews: 128,
  description:
    "Crafted from premium full-grain leather, this versatile crossbody bag features a sleek design with multiple compartments for optimal organization. Perfect for both daily use and special occasions.",
  colors: ["Vintage Brown", "Black", "Navy"],
  images: [
    "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1547949003-9792a18a2601?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&q=80&w=800",
  ],
  features: [
    "Full-grain Italian leather",
    "Adjustable shoulder strap",
    "Interior zip pocket",
    "Magnetic closure",
    "Custom brass hardware",
  ],
};

export default function ProductPage() {
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-background">
        <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-4">
              <div className="relative aspect-square overflow-hidden rounded-lg bg-gray-100">
                <Image
                  src={product.images[selectedImage]}
                  alt={product.name}
                  fill
                  className="object-cover object-center"
                  priority
                />
              </div>
              <div className="grid grid-cols-3 gap-4">
                {product.images.map((image, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImage(idx)}
                    className={`relative aspect-square overflow-hidden rounded-md ${
                      selectedImage === idx ? "ring-2 ring-primary" : ""
                    }`}
                  >
                    <Image
                      src={image}
                      alt={`${product.name} ${idx + 1}`}
                      fill
                      className="object-cover object-center"
                    />
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h1 className="text-3xl font-bold tracking-tight text-foreground">
                  {product.name}
                </h1>
                <div className="mt-4 flex items-center space-x-4">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${
                          i < Math.floor(product.rating)
                            ? "text-yellow-400 fill-current"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground">
                    {product.rating} ({product.reviews} reviews)
                  </span>
                </div>
              </div>

              <div className="text-3xl font-bold text-foreground">
                ${product.price.toFixed(2)}
              </div>

              <Separator />

              <div>
                <h3 className="text-sm font-medium text-foreground mb-4">
                  Color
                </h3>
                <RadioGroup
                  value={selectedColor}
                  onValueChange={setSelectedColor}
                  className="flex gap-4"
                >
                  {product.colors.map((color) => (
                    <div key={color} className="flex items-center space-x-2">
                      <RadioGroupItem value={color} id={color} />
                      <Label htmlFor={color}>{color}</Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>

              <div>
                <h3 className="text-sm font-medium text-foreground mb-4">
                  Quantity
                </h3>
                <div className="flex items-center space-x-4">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <span className="text-lg font-medium">{quantity}</span>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setQuantity(quantity + 1)}
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <div className="flex gap-4">
                <Button size="lg" className="flex-1">
                  Add to Cart
                </Button>
                <Button variant="outline" size="icon">
                  <Heart className="h-5 w-5" />
                </Button>
                <Button variant="outline" size="icon">
                  <Share2 className="h-5 w-5" />
                </Button>
              </div>

              {/* Features */}
              <div className="grid grid-cols-2 gap-4 py-6">
                <div className="flex items-center gap-2">
                  <Truck className="h-5 w-5 text-muted-foreground" />
                  <span className="text-sm">Free Shipping</span>
                </div>
                <div className="flex items-center gap-2">
                  <RefreshCw className="h-5 w-5 text-muted-foreground" />
                  <span className="text-sm">30-Day Returns</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-muted-foreground" />
                  <span className="text-sm">2-Year Warranty</span>
                </div>
              </div>

              <Tabs defaultValue="description" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="description">
                    Small Description
                  </TabsTrigger>
                  <TabsTrigger value="features">Features</TabsTrigger>
                  <TabsTrigger value="shipping">Shipping</TabsTrigger>
                </TabsList>
                <TabsContent value="description" className="mt-4">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {product.description}
                  </p>
                </TabsContent>
                <TabsContent value="features" className="mt-4">
                  <ul className="list-disc pl-4 space-y-2">
                    {product.features.map((feature, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground">
                        {feature}
                      </li>
                    ))}
                  </ul>
                </TabsContent>
                <TabsContent value="shipping" className="mt-4">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Free standard shipping on all orders. Express shipping
                    available at checkout. International shipping available to
                    select countries.
                  </p>
                </TabsContent>
              </Tabs>
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">
                Product Details
            </h2>
            <p>
            Product description Two main compartments. Two additional front
            pocket and two bottle pocket. Padded cushion back panel and easily
            adjustable padded shoulder straps with anti sweat fabric underneath.
            Grab handle and padded laptop sleeve with elastic tape. From the
            manufacturer Bag, Bags, Bagpack, backpack style, office, laptop,
            travel, lifestyle, casual bags, waterproof Bag, Bags, Bagpack,
            backpack style, office, laptop, travel, lifestyle, casual bags,
            waterproof Bag, Bags, Bagpack, backpack style, office, laptop,
            travel, lifestyle, casual bags, waterproof Bag, Bags, Bagpack,
            backpack style, office, laptop, travel, casual bags, waterproof
            </p>
            
            <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">
                Additional Information
            </h2>
            <p>
            Product description Two main compartments. Two additional front pocket
            and two bottle pocket. Padded cushion back panel and easily adjustable
            padded shoulder straps with anti sweat fabric underneath. Grab handle
            and padded laptop sleeve with elastic tape. From the manufacturer Bag,
            Bags, Bagpack, backpack style, office, laptop, travel, lifestyle, casual
            bags, waterproof Bag, Bags, Bagpack, backpack style, office, laptop,
            travel, lifestyle, casual bags, waterproof Bag, Bags, Bagpack, backpack
            style, office, laptop, travel, lifestyle, casual bags, waterproof Bag,
            Bags, Bagpack, backpack style, office, laptop, travel, casual bags,
            waterproof
            </p>


          </div>
        </div>
      </div>
    </>
  );
}
