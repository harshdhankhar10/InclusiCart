"use client";

import React, { useState, useEffect, useRef, FormEvent, ChangeEvent } from "react";
import { Package2, ImagePlus, X, Loader2 } from "lucide-react";
import Quill from "quill";
import "quill/dist/quill.snow.css";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Card } from "@/components/ui/card";

interface FormData {
  name: string;
  price: string;
  stock: string;
  category: string;
  description: string;
}

interface FormErrors {
  name?: string;
  price?: string;
  stock?: string;
  category?: string;
  description?: string;
  images?: string;
  submit?: string;
}

export default function AddProductPage(): React.JSX.Element {
  const quillRef = useRef<HTMLDivElement | null>(null);
  const quillInstance = useRef<Quill | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    price: "",
    stock: "",
    category: "",
    description: ""
  });
  const [images, setImages] = useState<string[]>([]);
  const [errors, setErrors] = useState<FormErrors>({});

  useEffect(() => {
    if (quillRef.current && !quillInstance.current) {
      quillInstance.current = new Quill(quillRef.current, {
        theme: "snow",
        placeholder: "Describe your product...",
        modules: {
          toolbar: [
            [{ header: [1, 2, false] }],
            ["bold", "italic", "underline", "strike"],
            [{ list: "ordered" }, { list: "bullet" }],
            ["link", "image"],
            ["clean"],
          ],
        },
      });

      quillInstance.current.on('text-change', () => {
        if (quillInstance.current) {
          setFormData(prev => ({
            ...prev,
            description: quillInstance.current?.root.innerHTML || ""
          }));
        }
      });
    }
  }, []);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>): void => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
    if (errors[id as keyof FormErrors]) {
      setErrors(prev => ({
        ...prev,
        [id]: undefined
      }));
    }
  };

  const handleImageUpload = (e: ChangeEvent<HTMLInputElement>): void => {
    if (e.target.files) {
      const files = Array.from(e.target.files);
      const imageUrls = files.map(file => URL.createObjectURL(file));
      setImages(prev => [...prev, ...imageUrls]);
    }
  };

  const removeImage = (index: number): void => {
    setImages(prev => prev.filter((_, i) => i !== index));
  };

  const validateForm = (): FormErrors => {
    const newErrors: FormErrors = {};
    if (!formData.name.trim()) newErrors.name = "Product name is required";
    if (!formData.price || parseFloat(formData.price) <= 0) newErrors.price = "Valid price is required";
    if (!formData.stock || parseInt(formData.stock) < 0) newErrors.stock = "Valid stock quantity is required";
    if (!formData.category) newErrors.category = "Category is required";
    if (!formData.description.trim()) newErrors.description = "Description is required";
    if (images.length === 0) newErrors.images = "At least one image is required";
    return newErrors;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    const validationErrors = validateForm();
    
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setLoading(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setSuccess(true);
      setTimeout(() => setSuccess(false), 3000);
      setFormData({
        name: "",
        price: "",
        stock: "",
        category: "",
        description: ""
      });
      setImages([]);
      if (quillInstance.current) {
        quillInstance.current.setText("");
      }
    } catch (error) {
      setErrors({ submit: "Failed to add product. Please try again." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center space-x-4 mb-8">
          <div className="h-12 w-12 bg-blue-600 rounded-xl flex items-center justify-center">
            <Package2 className="h-6 w-6 text-white" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Add New Product</h1>
            <p className="text-sm text-gray-500">Fill in the details to add a new product to your store</p>
          </div>
        </div>

        {success && (
          <Alert className="mb-6 bg-green-50 border-green-200">
            <AlertDescription className="text-green-800">
              Product added successfully!
            </AlertDescription>
          </Alert>
        )}

        {errors.submit && (
          <Alert className="mb-6 bg-red-50 border-red-200">
            <AlertDescription className="text-red-800">
              {errors.submit}
            </AlertDescription>
          </Alert>
        )}

        <Card className="bg-white shadow-lg rounded-2xl p-8">
          <form className="space-y-8" onSubmit={handleSubmit}>
            <div className="space-y-6">
              <h2 className="text-lg font-semibold text-gray-900 border-b pb-2">Basic Information</h2>
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Product Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={`mt-1 block w-full rounded-lg border ${errors.name ? 'border-red-300' : 'border-gray-300'} px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500`}
                    placeholder="Enter product name"
                  />
                  {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
                </div>

                <div>
                  <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                    Description
                  </label>
                  <div
                    ref={quillRef}
                    className={`mt-1 block w-full rounded-lg border ${errors.description ? 'border-red-300' : 'border-gray-300'} shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500`}
                    style={{ minHeight: "150px" }}
                  />
                  {errors.description && <p className="mt-1 text-sm text-red-600">{errors.description}</p>}
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="text-lg font-semibold text-gray-900 border-b pb-2">Pricing & Inventory</h2>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="price" className="block text-sm font-medium text-gray-700">
                    Price
                  </label>
                  <div className="mt-1 relative rounded-lg shadow-sm">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <span className="text-gray-500 sm:text-sm">$</span>
                    </div>
                    <input
                      type="number"
                      id="price"
                      value={formData.price}
                      onChange={handleInputChange}
                      className={`block w-full pl-7 pr-3 py-2 rounded-lg border ${errors.price ? 'border-red-300' : 'border-gray-300'} focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500`}
                      placeholder="0.00"
                      step="0.01"
                    />
                  </div>
                  {errors.price && <p className="mt-1 text-sm text-red-600">{errors.price}</p>}
                </div>

                <div>
                  <label htmlFor="stock" className="block text-sm font-medium text-gray-700">
                    Stock
                  </label>
                  <input
                    type="number"
                    id="stock"
                    value={formData.stock}
                    onChange={handleInputChange}
                    className={`mt-1 block w-full rounded-lg border ${errors.stock ? 'border-red-300' : 'border-gray-300'} px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500`}
                    placeholder="Available quantity"
                  />
                  {errors.stock && <p className="mt-1 text-sm text-red-600">{errors.stock}</p>}
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="text-lg font-semibold text-gray-900 border-b pb-2">Category</h2>
              <div>
                <label htmlFor="category" className="block text-sm font-medium text-gray-700">
                  Product Category
                </label>
                <select
                  id="category"
                  value={formData.category}
                  onChange={handleInputChange}
                  className={`mt-1 block w-full rounded-lg border ${errors.category ? 'border-red-300' : 'border-gray-300'} px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500`}
                >
                  <option value="">Select a category</option>
                  <option value="1">Electronics</option>
                  <option value="2">Clothing</option>
                  <option value="3">Books</option>
                </select>
                {errors.category && <p className="mt-1 text-sm text-red-600">{errors.category}</p>}
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="text-lg font-semibold text-gray-900 border-b pb-2">Product Images</h2>
              <div className="space-y-4">
                <div className="flex items-center justify-center w-full">
                  <label
                    htmlFor="image-upload"
                    className={`flex flex-col items-center justify-center w-full h-64 border-2 border-dashed ${errors.images ? 'border-red-300' : 'border-gray-300'} rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 transition-colors`}
                  >
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                      <ImagePlus className="w-12 h-12 text-gray-400 mb-3" />
                      <p className="mb-2 text-sm text-gray-500">
                        <span className="font-semibold">Click to upload</span>
                      </p>
                      <p className="text-xs text-gray-500">PNG, JPG or GIF (MAX. 800x400px)</p>
                    </div>
                    <input
                      id="image-upload"
                      type="file"
                      className="hidden"
                      multiple
                      onChange={handleImageUpload}
                      accept="image/*"
                    />
                  </label>
                </div>
                {errors.images && <p className="mt-1 text-sm text-red-600">{errors.images}</p>}

                {images.length > 0 && (
                  <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
                    {images.map((image, index) => (
                      <div key={index} className="relative group">
                        <img
                          src={image}
                          alt={`Product ${index + 1}`}
                          className="h-24 w-24 object-cover rounded-lg"
                        />
                        <button
                          type="button"
                          onClick={() => removeImage(index)}
                          className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                          <X className="h-4 w-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <div className="pt-4">
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
              >
                {loading ? (
                  <>
                    <Loader2 className="animate-spin h-5 w-5 mr-2" />
                    Adding Product...
                  </>
                ) : (
                  "Add Product"
                )}
              </button>
            </div>
          </form>
        </Card>
      </div>
    </div>
  );
}