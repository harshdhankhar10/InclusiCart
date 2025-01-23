"use client";

import { Megaphone, Search, Filter, Calendar, Users, Target, TrendingUp } from "lucide-react";
import Link from "next/link";

// Sample promotions data
const promotions = [
  {
    id: 1,
    title: "Holiday Season Sale",
    description: "30% off on all electronics this holiday season",
    startDate: "2023-12-01",
    endDate: "2023-12-31",
    status: "active",
    audience: "All Customers",
    engagement: "High",
  },
  {
    id: 2,
    title: "Black Friday Special",
    description: "Up to 50% off on selected items",
    startDate: "2023-11-24",
    endDate: "2023-11-26",
    status: "scheduled",
    audience: "Premium Members",
    engagement: "Medium",
  },
  {
    id: 3,
    title: "New User Discount",
    description: "Get 15% off on your first purchase",
    startDate: "2023-11-01",
    endDate: "2023-12-31",
    status: "active",
    audience: "New Users",
    engagement: "High",
  },
];

export default function PromotionsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="h-12 w-12 bg-purple-600 rounded-xl flex items-center justify-center">
                <Megaphone className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Promotions</h1>
                <p className="text-sm text-gray-500">Manage marketing campaigns and offers</p>
              </div>
            </div>
            <div className="flex space-x-3">
              <Link href="/notifications" className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-lg text-gray-700 bg-white hover:bg-gray-50">
                All Notifications
              </Link>
              <button className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-lg text-white bg-purple-600 hover:bg-purple-700">
                Create Promotion
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Promotion Stats */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Active Promotions</p>
                <p className="text-2xl font-bold text-purple-600">8</p>
                <p className="text-sm text-purple-600">Currently running</p>
              </div>
              <div className="h-12 w-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <Megaphone className="h-6 w-6 text-purple-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Scheduled</p>
                <p className="text-2xl font-bold text-blue-600">5</p>
                <p className="text-sm text-blue-600">Upcoming</p>
              </div>
              <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <Calendar className="h-6 w-6 text-blue-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Total Reach</p>
                <p className="text-2xl font-bold text-green-600">25.4K</p>
                <p className="text-sm text-green-600">Customers</p>
              </div>
              <div className="h-12 w-12 bg-green-100 rounded-lg flex items-center justify-center">
                <Users className="h-6 w-6 text-green-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Conversion Rate</p>
                <p className="text-2xl font-bold text-orange-600">12.5%</p>
                <p className="text-sm text-orange-600">Average</p>
              </div>
              <div className="h-12 w-12 bg-orange-100 rounded-lg flex items-center justify-center">
                <Target className="h-6 w-6 text-orange-600" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Search and Filter */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex space-x-4">
          <div className="flex-1 relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search promotions..."
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500"
            />
          </div>
          <button className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-lg text-gray-700 bg-white hover:bg-gray-50">
            <Filter className="h-4 w-4 mr-2" />
            Filter
          </button>
        </div>
      </div>

      {/* Promotions List */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="divide-y divide-gray-200">
            {promotions.map((promotion) => (
              <div key={promotion.id} className="p-6 hover:bg-gray-50">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 h-12 w-12 bg-purple-100 rounded-lg flex items-center justify-center">
                    <Megaphone className="h-6 w-6 text-purple-600" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <p className="text-lg font-medium text-gray-900">{promotion.title}</p>
                      <div className="flex items-center space-x-2">
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          promotion.status === "active"
                            ? "bg-green-100 text-green-800"
                            : "bg-blue-100 text-blue-800"
                        }`}>
                          {promotion.status.charAt(0).toUpperCase() + promotion.status.slice(1)}
                        </span>
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          promotion.engagement === "High"
                            ? "bg-green-100 text-green-800"
                            : "bg-yellow-100 text-yellow-800"
                        }`}>
                          {promotion.engagement} Engagement
                        </span>
                      </div>
                    </div>
                    <p className="mt-1 text-sm text-gray-500">{promotion.description}</p>
                    <div className="mt-2 flex flex-wrap items-center gap-4 text-sm text-gray-500">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {promotion.startDate} - {promotion.endDate}
                      </div>
                      <div className="flex items-center">
                        <Users className="h-4 w-4 mr-1" />
                        {promotion.audience}
                      </div>
                      <div className="flex items-center">
                        <TrendingUp className="h-4 w-4 mr-1" />
                        {promotion.engagement} Performance
                      </div>
                    </div>
                  </div>
                  <div className="flex-shrink-0">
                    <button className="text-purple-600 hover:text-purple-900 font-medium text-sm">
                      Edit
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}