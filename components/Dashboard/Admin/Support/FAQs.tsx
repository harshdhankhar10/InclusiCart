"use client";

import { HelpCircle, Search, Plus, Edit, Trash2 } from "lucide-react";
import Link from "next/link";

// Sample FAQ categories and questions
const faqCategories = [
  {
    id: 1,
    name: "General",
    questions: [
      {
        id: 1,
        question: "How do I track my order?",
        answer: "You can track your order by logging into your account and visiting the order history section. Click on the specific order to view its current status and tracking information.",
        views: 1234,
        helpful: 89,
      },
      {
        id: 2,
        question: "What payment methods do you accept?",
        answer: "We accept various payment methods including credit/debit cards (Visa, MasterCard, American Express), PayPal, and bank transfers.",
        views: 987,
        helpful: 76,
      },
    ],
  },
  {
    id: 2,
    name: "Returns & Refunds",
    questions: [
      {
        id: 3,
        question: "What is your return policy?",
        answer: "Our return policy allows returns within 30 days of purchase. Items must be unused and in original packaging.",
        views: 2345,
        helpful: 156,
      },
    ],
  },
];

export default function FAQsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="h-12 w-12 bg-purple-600 rounded-xl flex items-center justify-center">
                <HelpCircle className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">FAQs</h1>
                <p className="text-sm text-gray-500">Manage frequently asked questions</p>
              </div>
            </div>
            <div className="flex space-x-3">
              <Link href="/support" className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-lg text-gray-700 bg-white hover:bg-gray-50">
                Support Tickets
              </Link>
              <button className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-lg text-white bg-purple-600 hover:bg-purple-700">
                <Plus className="h-4 w-4 mr-2" />
                Add FAQ
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Overview */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Total FAQs</p>
                <p className="text-2xl font-bold text-gray-900">48</p>
                <p className="text-sm text-gray-600">Across all categories</p>
              </div>
              <div className="h-12 w-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <HelpCircle className="h-6 w-6 text-purple-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Categories</p>
                <p className="text-2xl font-bold text-blue-600">8</p>
                <p className="text-sm text-blue-600">FAQ categories</p>
              </div>
              <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <HelpCircle className="h-6 w-6 text-blue-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Total Views</p>
                <p className="text-2xl font-bold text-green-600">12.5K</p>
                <p className="text-sm text-green-600">Last 30 days</p>
              </div>
              <div className="h-12 w-12 bg-green-100 rounded-lg flex items-center justify-center">
                <HelpCircle className="h-6 w-6 text-green-600" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Search */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search FAQs..."
            className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500"
          />
        </div>
      </div>

      {/* FAQ Categories and Questions */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="space-y-6">
          {faqCategories.map((category) => (
            <div key={category.id} className="bg-white rounded-xl shadow-sm overflow-hidden">
              <div className="px-6 py-4 border-b border-gray-200 bg-gray-50">
                <div className="flex items-center justify-between">
                  <h2 className="text-lg font-semibold text-gray-900">{category.name}</h2>
                  <button className="text-purple-600 hover:text-purple-700 text-sm font-medium">
                    Edit Category
                  </button>
                </div>
              </div>
              <div className="divide-y divide-gray-200">
                {category.questions.map((faq) => (
                  <div key={faq.id} className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h3 className="text-lg font-medium text-gray-900 mb-2">
                          {faq.question}
                        </h3>
                        <p className="text-gray-500">{faq.answer}</p>
                        <div className="mt-4 flex items-center space-x-4 text-sm text-gray-500">
                          <span>{faq.views} views</span>
                          <span>•</span>
                          <span>{faq.helpful} found helpful</span>
                        </div>
                      </div>
                      <div className="ml-4 flex-shrink-0 flex space-x-2">
                        <button className="text-gray-400 hover:text-gray-500">
                          <Edit className="h-5 w-5" />
                        </button>
                        <button className="text-gray-400 hover:text-red-500">
                          <Trash2 className="h-5 w-5" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}