"use client";

import { Shield, Key, Lock, Save, AlertTriangle } from "lucide-react";
import Link from "next/link";

export default function SecuritySettingsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="h-12 w-12 bg-red-600 rounded-xl flex items-center justify-center">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Security Settings</h1>
                <p className="text-sm text-gray-500">Manage your store's security</p>
              </div>
            </div>
            <div className="flex space-x-3">
              <Link href="/settings" className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-lg text-gray-700 bg-white hover:bg-gray-50">
                General Settings
              </Link>
              <Link href="/settings/policies" className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-lg text-gray-700 bg-white hover:bg-gray-50">
                Store Policies
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Security Settings Form */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="bg-white rounded-xl shadow-sm">
          {/* Authentication Settings */}
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Authentication Settings</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-medium text-gray-900">Two-Factor Authentication</h3>
                  <p className="text-sm text-gray-500">Require 2FA for admin access</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" defaultChecked />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-red-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-red-600"></div>
                </label>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-medium text-gray-900">Session Timeout</h3>
                  <p className="text-sm text-gray-500">Automatically log out after inactivity</p>
                </div>
                <select className="w-48 px-3 py-2 border border-gray-300 rounded-lg focus:ring-red-500 focus:border-red-500">
                  <option>15 minutes</option>
                  <option>30 minutes</option>
                  <option>1 hour</option>
                  <option>4 hours</option>
                </select>
              </div>
            </div>
          </div>

          {/* Password Policy */}
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Password Policy</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-medium text-gray-900">Minimum Password Length</h3>
                  <p className="text-sm text-gray-500">Set minimum characters required</p>
                </div>
                <select className="w-48 px-3 py-2 border border-gray-300 rounded-lg focus:ring-red-500 focus:border-red-500">
                  <option>8 characters</option>
                  <option>10 characters</option>
                  <option>12 characters</option>
                  <option>14 characters</option>
                </select>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-medium text-gray-900">Require Special Characters</h3>
                  <p className="text-sm text-gray-500">Must include symbols</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" defaultChecked />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-red-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-red-600"></div>
                </label>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-medium text-gray-900">Password Expiration</h3>
                  <p className="text-sm text-gray-500">Force password change periodically</p>
                </div>
                <select className="w-48 px-3 py-2 border border-gray-300 rounded-lg focus:ring-red-500 focus:border-red-500">
                  <option>Never</option>
                  <option>30 days</option>
                  <option>60 days</option>
                  <option>90 days</option>
                </select>
              </div>
            </div>
          </div>

          {/* API Security */}
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">API Security</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-medium text-gray-900">API Access</h3>
                  <p className="text-sm text-gray-500">Enable API access for integrations</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" defaultChecked />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-red-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-red-600"></div>
                </label>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-medium text-gray-900">API Rate Limiting</h3>
                  <p className="text-sm text-gray-500">Maximum requests per minute</p>
                </div>
                <select className="w-48 px-3 py-2 border border-gray-300 rounded-lg focus:ring-red-500 focus:border-red-500">
                  <option>100 requests</option>
                  <option>500 requests</option>
                  <option>1000 requests</option>
                  <option>Unlimited</option>
                </select>
              </div>
            </div>
          </div>

          {/* SSL Settings */}
          <div className="p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">SSL Settings</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-medium text-gray-900">Force SSL</h3>
                  <p className="text-sm text-gray-500">Require HTTPS for all connections</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" defaultChecked />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-red-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-red-600"></div>
                </label>
              </div>
              <div>
                <div className="flex items-center space-x-2 mb-2">
                  <Lock className="h-5 w-5 text-green-600" />
                  <span className="text-sm font-medium text-green-600">SSL Certificate Status: Active</span>
                </div>
                <p className="text-sm text-gray-500">Certificate expires in 245 days</p>
              </div>
            </div>
          </div>
        </div>

        {/* Save Button */}
        <div className="mt-6 flex justify-end">
          <button className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-lg text-white bg-red-600 hover:bg-red-700">
            <Save className="h-4 w-4 mr-2" />
            Save Security Settings
          </button>
        </div>
      </div>
    </div>
  );
}