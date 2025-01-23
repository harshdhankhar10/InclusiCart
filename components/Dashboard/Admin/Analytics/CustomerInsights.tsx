"use client";

import { Users, Search, Filter, ArrowUpRight, ArrowDownRight, Activity, Target, UserCheck } from "lucide-react";
import Link from "next/link";

// Sample customer insights data
const customerSegments = [
  { name: "Loyal Customers", count: 856, growth: 12.5, revenue: 45600 },
  { name: "New Customers", count: 234, growth: 8.3, revenue: 12300 },
  { name: "At-Risk Customers", count: 123, growth: -2.4, revenue: 5600 },
  { name: "Lost Customers", count: 78, growth: 3.2, revenue: 0 },
];

const customerBehavior = [
  { metric: "Average Order Value", value: "$128.45", change: "+5.2%" },
  { metric: "Purchase Frequency", value: "2.3 orders/month", change: "+1.8%" },
  { metric: "Customer Lifetime Value", value: "$1,234", change: "+7.5%" },
  { metric: "Churn Rate", value: "2.4%", change: "-0.5%" },
];

export default function CustomerInsightsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="h-12 w-12 bg-purple-600 rounded-xl flex items-center justify-center">
                <Users className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Customer Insights</h1>
                <p className="text-sm text-gray-500">Analyze customer behavior and trends</p>
              </div>
            </div>
            <div className="flex space-x-3">
              <Link href="/analytics" className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-lg text-gray-700 bg-white hover:bg-gray-50">
                Dashboard
              </Link>
              <button className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-lg text-white bg-purple-600 hover:bg-purple-700">
                <Filter className="h-4 w-4 mr-2" />
                Filter Data
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Customer Segments */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Customer Segments</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {customerSegments.map((segment, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500">{segment.name}</p>
                  <p className="text-2xl font-bold text-gray-900">{segment.count}</p>
                  <p className={`text-sm flex items-center mt-1 ${
                    segment.growth >= 0 ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {segment.growth >= 0 ? (
                      <ArrowUpRight className="h-4 w-4 mr-1" />
                    ) : (
                      <ArrowDownRight className="h-4 w-4 mr-1" />
                    )}
                    {Math.abs(segment.growth)}% from last month
                  </p>
                </div>
                <div className="h-12 w-12 bg-purple-100 rounded-lg flex items-center justify-center">
                  <Users className="h-6 w-6 text-purple-600" />
                </div>
              </div>
              <div className="mt-4 pt-4 border-t">
                <p className="text-sm text-gray-500">Revenue</p>
                <p className="text-lg font-semibold text-gray-900">${segment.revenue}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Customer Behavior Metrics */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Customer Behavior</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {customerBehavior.map((metric, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex items-center justify-between mb-4">
                <p className="text-sm text-gray-500">{metric.metric}</p>
                <div className="h-8 w-8 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Activity className="h-4 w-4 text-blue-600" />
                </div>
              </div>
              <p className="text-2xl font-bold text-gray-900">{metric.value}</p>
              <p className={`text-sm flex items-center mt-1 ${
                metric.change.startsWith('+') ? 'text-green-600' : 'text-red-600'
              }`}>
                {metric.change.startsWith('+') ? (
                  <ArrowUpRight className="h-4 w-4 mr-1" />
                ) : (
                  <ArrowDownRight className="h-4 w-4 mr-1" />
                )}
                {metric.change} from last month
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Customer Journey Analysis */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Acquisition Channels */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Acquisition Channels</h3>
            <div className="space-y-4">
              <div className="relative pt-1">
                <div className="flex mb-2 items-center justify-between">
                  <div>
                    <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-purple-600 bg-purple-200">
                      Social Media
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-semibold inline-block text-purple-600">
                      40%
                    </span>
                  </div>
                </div>
                <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-purple-200">
                  <div style={{ width: "40%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-purple-500"></div>
                </div>

                <div className="flex mb-2 items-center justify-between">
                  <div>
                    <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-600 bg-blue-200">
                      Direct Traffic
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-semibold inline-block text-blue-600">
                      35%
                    </span>
                  </div>
                </div>
                <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-blue-200">
                  <div style={{ width: "35%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"></div>
                </div>

                <div className="flex mb-2 items-center justify-between">
                  <div>
                    <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-green-600 bg-green-200">
                      Search
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-semibold inline-block text-green-600">
                      25%
                    </span>
                  </div>
                </div>
                <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-green-200">
                  <div style={{ width: "25%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-500"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Customer Satisfaction */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Customer Satisfaction</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-500">NPS Score</span>
                  <div className="h-8 w-8 bg-green-100 rounded-lg flex items-center justify-center">
                    <Target className="h-4 w-4 text-green-600" />
                  </div>
                </div>
                <p className="text-2xl font-bold text-gray-900">8.7/10</p>
                <p className="text-sm text-green-600">+0.3 points</p>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-500">Satisfaction Rate</span>
                  <div className="h-8 w-8 bg-blue-100 rounded-lg flex items-center justify-center">
                    <UserCheck className="h-4 w-4 text-blue-600" />
                  </div>
                </div>
                <p className="text-2xl font-bold text-gray-900">94%</p>
                <p className="text-sm text-green-600">+2% increase</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Customer Activity */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900">Recent Customer Activity</h3>
          </div>
          <div className="divide-y divide-gray-200">
            {[1, 2, 3, 4, 5].map((_, index) => (
              <div key={index} className="px-6 py-4">
                <div className="flex items-center space-x-4">
                  <div className="h-10 w-10 bg-gray-100 rounded-full flex items-center justify-center">
                    <Users className="h-5 w-5 text-gray-600" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900">Customer #{1000 + index}</p>
                    <p className="text-sm text-gray-500">Made a purchase of $129.99</p>
                  </div>
                  <span className="text-sm text-gray-500">{5 - index}m ago</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}