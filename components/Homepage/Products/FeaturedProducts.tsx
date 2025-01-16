'use client';

import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Card,
  CardContent,
} from '@/components/ui/card';
import { Heart, ShoppingCart, Star, ArrowRight, Plus } from 'lucide-react';

const featuredProducts = [
  {
    id: 1,
    name: 'Premium Noise-Canceling Headphones',
    price: 349.99,
    originalPrice: 449.99,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80',
    rating: 4.9,
    reviews: 1248,
    discount: 22,
    tag: 'Best Seller'
  },
  {
    id: 2,
    name: 'Smart Watch Series X',
    price: 299.99,
    originalPrice: 399.99,
    image: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=800&q=80',
    rating: 4.8,
    reviews: 856,
    discount: 25,
    tag: 'New'
  },
  {
    id: 3,
    name: 'Professional Camera Kit',
    price: 1299.99,
    originalPrice: 1599.99,
    image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800&q=80',
    rating: 4.9,
    reviews: 534,
    discount: 19,
    tag: 'Premium'
  },
  {
    id: 4,
    name: 'Wireless Earbuds Pro',
    price: 199.99,
    originalPrice: 249.99,
    image: 'https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=800&q=80',
    rating: 4.7,
    reviews: 923,
    discount: 20,
    tag: 'Popular'
  }
];

export default function FeaturedProducts() {
  return (
    <section className="py-12 bg-gradient-to-b from-background to-secondary/10">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-end mb-8">
          <div>
            <h2 className="text-3xl font-bold mb-2">Featured Products</h2>
            <p className="text-muted-foreground">Handpicked premium items for you</p>
          </div>
          <Button variant="ghost" className="hidden md:flex items-center gap-2 text-sm">
            Browse All <ArrowRight className="h-3.5 w-3.5" />
          </Button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {featuredProducts.map((product) => (
            <Card 
              key={product.id} 
              className="group relative border hover:border-primary transition-colors duration-300 overflow-hidden"
            >
              <CardContent className="p-0">
                <div className="relative aspect-square overflow-hidden bg-secondary/5">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-2 left-2 flex flex-col gap-1">
                    <Badge variant="secondary" className="text-xs bg-black/70 text-white">
                      {product.tag}
                    </Badge>
                    {product.discount > 0 && (
                      <Badge variant="destructive" className="text-xs">
                        -{product.discount}%
                      </Badge>
                    )}
                  </div>
                  <div 
                    className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2"
                  >
                    <Button size="icon" variant="secondary" className="h-8 w-8 rounded-full">
                      <Heart className="h-3.5 w-3.5" />
                    </Button>
                    <Button size="icon" variant="secondary" className="h-8 w-8 rounded-full">
                      <Plus className="h-3.5 w-3.5" />
                    </Button>
                  </div>
                </div>

                <div className="p-3 md:p-4">
                  <div className="flex items-center gap-1 mb-1.5">
                    <Star className="h-3.5 w-3.5 text-yellow-500 fill-current" />
                    <span className="text-sm font-medium">{product.rating}</span>
                    <span className="text-xs text-muted-foreground">({product.reviews})</span>
                  </div>

                  <h3 className="font-medium text-sm mb-2 line-clamp-1">{product.name}</h3>

                  <div className="flex items-center gap-2">
                    <span className="font-semibold">${product.price}</span>
                    {product.originalPrice && (
                      <span className="text-xs text-muted-foreground line-through">${product.originalPrice}</span>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Button variant="ghost" className="w-full mt-6 md:hidden text-sm">
          Browse All Products <ArrowRight className="h-3.5 w-3.5 ml-2" />
        </Button>
      </div>
    </section>
  );
}