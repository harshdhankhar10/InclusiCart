"use client";

import { FolderTree, Search, Plus, Box, Smartphone, Book, Laptop, ShoppingBag, Shirt, Coffee } from "lucide-react";
import Link from "next/link";

// Sample category data with icons
const categories = [
  { id: 1, name: "Electronics", count: 245, icon: Laptop, color: "bg-blue-500" },
  { id: 2, name: "Clothing", count: 189, icon: Shirt, color: "bg-pink-500" },
  { id: 3, name: "Books", count: 156, icon: Book, color: "bg-yellow-500" },
  { id: 4, name: "Mobile Phones", count: 132, icon: Smartphone, color: "bg-purple-500" },
  { id: 5, name: "Accessories", count: 98, icon: ShoppingBag, color: "bg-green-500" },
  { id: 6, name: "Food & Beverages", count: 87, icon: Coffee, color: "bg-red-500" },
];

export default function CategoriesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
            <div className="flex items-center space-x-4">
              <div className="h-12 w-12 bg-indigo-600 rounded-xl flex items-center justify-center">
                <FolderTree className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Categories</h1>
                <p className="text-sm text-gray-500">Manage your product categories</p>
              </div>
            </div>
            <Link
              href="/categories/add"
              className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-lg text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <Plus className="h-5 w-5 mr-2" />
              Add Category
            </Link>
          </div>
        </div>
      </div>

      {/* Search Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search categories..."
            className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
      </div>

      {/* Categories Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <div
                key={category.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className={`${category.color} h-12 w-12 rounded-xl flex items-center justify-center`}>
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900">{category.name}</h3>
                      <p className="text-sm text-gray-500">{category.count} products</p>
                    </div>
                  </div>
                  <div className="mt-6 grid grid-cols-2 gap-4 text-center text-sm">
                    <div className="px-3 py-2 bg-gray-50 rounded-lg">
                      <span className="block font-medium text-gray-900">{category.count}</span>
                      <span className="block text-gray-500">Products</span>
                    </div>
                    <div className="px-3 py-2 bg-gray-50 rounded-lg">
                      <span className="block font-medium text-gray-900">Active</span>
                      <span className="block text-green-500">Status</span>
                    </div>
                  </div>
                </div>
                <div className="px-6 py-4 bg-gray-50 border-t border-gray-100">
                  <div className="flex space-x-3">
                    <button className="flex-1 text-sm px-4 py-2 border border-gray-300 rounded-lg text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                      Edit
                    </button>
                    <button className="flex-1 text-sm px-4 py-2 border border-transparent rounded-lg text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                      View Products
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Stats Summary */}
        <div className="mt-8 bg-white rounded-2xl shadow-lg p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Category Statistics</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="bg-gray-50 rounded-xl p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500">Total Categories</p>
                  <p className="text-2xl font-bold text-gray-900">6</p>
                </div>
                <div className="h-10 w-10 bg-indigo-100 rounded-lg flex items-center justify-center">
                  <FolderTree className="h-5 w-5 text-indigo-600" />
                </div>
              </div>
            </div>
            <div className="bg-gray-50 rounded-xl p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500">Total Products</p>
                  <p className="text-2xl font-bold text-gray-900">907</p>
                </div>
                <div className="h-10 w-10 bg-green-100 rounded-lg flex items-center justify-center">
                  <Box className="h-5 w-5 text-green-600" />
                </div>
              </div>
            </div>
            <div className="bg-gray-50 rounded-xl p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500">Active Categories</p>
                  <p className="text-2xl font-bold text-gray-900">6</p>
                </div>
                <div className="h-10 w-10 bg-yellow-100 rounded-lg flex items-center justify-center">
                  <FolderTree className="h-5 w-5 text-yellow-600" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}