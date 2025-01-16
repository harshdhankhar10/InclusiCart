"use client";

import React from "react";
import { Minus, Plus, Trash2, ShoppingBag, ArrowRight } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Navbar from "@/components/Navbar";

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
  description?: string;
}

const ShoppingCart = () => {
  const [items, setItems] = React.useState<CartItem[]>([
    {
      id: '1',
      name: 'Wireless Headphones',
      price: 199.99,
      quantity: 1,
      description: 'High-quality wireless headphones with noise cancellation',
      image: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQnkfa7D0MpH_uqRv0a6jSfIJV_b3Wh4xBhgvfuiB3WoEX9HEbLbAZgxduceK7GNz3HEpJjIonGce0OLcdTXrVBMwUwHR2f586IGChuH2myCsYNoQWhQAAf',
    },
    {
      id: '2',
      name: 'Smart Watch',
      price: 299.99,
      quantity: 2,
      description: 'Latest generation smartwatch with health tracking',
      image: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSYGp1sI89xPmSEBb7CfTavgD89pds46xDWD-bS7wFUbNg0ZMlRv5O_3du6N-n6qH_mRrLwyPhQ64a3YZu_o4IeCO8Pg_IaCRNwU0IDSrkpRr6cz0LnN2mUTQ&usqp=CAE',
    },
    {
      id: '3',
      name: 'Wireless Mouse',
      price: 49.99,
      quantity: 1,
      description: 'Ergonomic wireless mouse with precision tracking',
      image: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQaxcyrGirlfTbLinvKCk5NekNYX4BVjoA1NaQn3w2CbPnaLZp8W9qpwNtDFhZrztG2rmgEcGOacscvcm7gi0SzgaXNG_tOJie1cFUpL63uxz_jEuj737Ns_w&usqp=CAE',
    },
  ]);

  const updateQuantity = (id: string, change: number) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + change) }
          : item
      )
    );
  };

  const removeItem = (id: string) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const subtotal = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const shipping = 15.99;
  const tax = subtotal * 0.1;
  const total = subtotal + shipping + tax;

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200 p-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-center gap-3 mb-8">
            <ShoppingBag className="h-8 w-8 text-blue-600" />
            <h1 className="text-4xl font-extrabold text-gray-800 tracking-tight">
              Your Cart
            </h1>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            <div className="lg:col-span-2 space-y-6">
              <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
                <CardHeader className="border-b border-gray-100 pb-6">
                  <CardTitle className="text-xl font-bold text-gray-800">
                    Cart Items ({items.length})
                  </CardTitle>
                  <CardDescription className="text-sm text-gray-600">
                    Review and modify your selected items
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6 pt-6">
                  {items.map((item) => (
                    <div
                      key={item.id}
                      className="group flex items-center gap-6 rounded-xl border border-gray-200 bg-white p-4 shadow-sm 
                      transition-all duration-200 hover:border-blue-100 hover:shadow-md hover:shadow-blue-50"
                    >
                      <div className="relative h-24 w-24 overflow-hidden rounded-lg">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="h-full w-full object-cover transition-transform duration-200 group-hover:scale-105"
                        />
                      </div>
                      
                      <div className="flex-1 space-y-2">
                        <h3 className="font-semibold text-gray-800 text-lg">{item.name}</h3>
                        <p className="text-sm text-gray-500">{item.description}</p>
                        <p className="font-medium text-blue-600">
                          ${item.price.toFixed(2)}
                        </p>
                      </div>

                      <div className="flex items-center gap-3">
                        <div className="flex items-center rounded-lg border border-gray-200 bg-gray-50 p-1">
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => updateQuantity(item.id, -1)}
                            className="h-8 w-8 text-gray-600 hover:bg-white hover:text-blue-600"
                          >
                            <Minus className="h-4 w-4" />
                          </Button>
                          <span className="w-8 text-center font-medium text-gray-800">
                            {item.quantity}
                          </span>
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => updateQuantity(item.id, 1)}
                            className="h-8 w-8 text-gray-600 hover:bg-white hover:text-blue-600"
                          >
                            <Plus className="h-4 w-4" />
                          </Button>
                        </div>
                        
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => removeItem(item.id)}
                          className="h-8 w-8 text-gray-400 hover:bg-red-50 hover:text-red-600 transition-colors"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>

            <div className="lg:sticky lg:top-8 h-fit">
              <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
                <CardHeader className="border-b border-gray-100 pb-6">
                  <CardTitle className="text-xl font-bold text-gray-800">
                    Order Summary
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 pt-6">
                  <div className="space-y-3">
                    <div className="flex justify-between text-gray-600">
                      <span>Subtotal</span>
                      <span className="font-medium">${subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-gray-600">
                      <span>Shipping</span>
                      <span className="font-medium">${shipping.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-gray-600">
                      <span>Estimated Tax</span>
                      <span className="font-medium">${tax.toFixed(2)}</span>
                    </div>
                  </div>
                  
                  <Separator className="my-4" />
                  
                  <div className="flex justify-between text-lg font-semibold text-gray-900">
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                </CardContent>
                <CardFooter className="pt-6">
                  <Button className="w-full bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-200 h-12 text-base font-semibold gap-2">
                    Proceed to Checkout
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShoppingCart;