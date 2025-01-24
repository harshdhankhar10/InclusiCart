"use client";
import React, {useState} from "react";
import { Users, Search, Filter, Plus, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import Swal from "sweetalert2";
import axios from "axios";


type CustomerData  =  {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    createdAt: Date;
    status: string;
}

type CustomerProps = {
    userData: CustomerData[];
}

const  CustomersPage: React.FC<CustomerProps>  = ({userData}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [customers, setCustomers] = useState(userData);

  // New Customer States
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);



  const handleGeneratePassword = () => {

    const length = 8;
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let finalPassword = "";
    for (let i = 0; i < length; i++) {
      finalPassword += charset.charAt(Math.floor(Math.random() * charset.length));
    }    
    setPassword(finalPassword);

  }

    

  const handleAddCustomer =async (e:React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    if (!firstName || !lastName || !email || !password) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "All fields are required.",
      });
      setLoading(false);
      return;
    }
    try {
      const response = await axios.post("/api/admin/User/user-management", {
        firstName,
        lastName,
        email,
        password,
      });
      if (response.status === 201) {
        Swal.fire({
          icon: "success",
          title: "Success",
          text: response.data.message,
        }).then(() => {
          window.location.reload();
        });
        
        setIsOpen(false);
      } else {
        console.log(response.data);
        Swal.fire({
          icon: "error",
          title: "Error",
          text: response.data.error,
        });
      }
      setLoading(false);
    } catch (error: any) {  
      console.error("An error occurred:", error);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: error?.response?.data?.error || "An error occurred",
      });

      setLoading(false);
    }

  }

  const handleDeleteCustomer = (id: number) => async () => {
    try {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, cancel!",
        confirmButtonColor: "#d33",
        cancelButtonColor: "#3085d6",
      }).then(async (result) => {
        if (result.isConfirmed) {
          const response = await axios.delete(`/api/admin/User/user-management`, {
            data: { id },
          });
          if (response.status === 200) {
            Swal.fire("Deleted!", response.data.message, "success").then(() => {
              window.location.reload();
            });
          } else {
            Swal.fire("Error!", response.data.error, "error");
          }
        }
      });
    } catch (error: any) {
      console.error("An error occurred:", error);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: error?.response?.data?.error || "An error occurred",
      });
    }
  }


  return (
    <div className="min-h-screen bg-gray-50">

      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
            <div className="flex items-center space-x-4">
              <div className="h-12 w-12 bg-purple-600 rounded-xl flex items-center justify-center">
                <Users className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Customers</h1>
                <p className="text-sm text-gray-500">Manage your customer base</p>
              </div>
            </div>
            <div className="flex space-x-3">
              <button onClick={() => setIsOpen(true)}
               className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-lg text-gray-700 bg-white hover:bg-gray-50">
                <Plus className="h-4 w-4 mr-2" />
                Add Customer
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Total Customers</p>
                <p className="text-2xl font-bold text-gray-900">{customers.length}</p>
                <p className="text-sm text-green-600 flex items-center mt-1">
                  <ArrowUpRight className="h-4 w-4 mr-1" />
                  +12.5% this month
                </p>
              </div>
              <div className="h-12 w-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <Users className="h-6 w-6 text-purple-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Active Users</p>
                <p className="text-2xl font-bold text-green-600">{customers.filter((customer) => customer.status).length}</p>
                <p className="text-sm text-green-600">92.4% of total</p>
              </div>
              <div className="h-12 w-12 bg-green-100 rounded-lg flex items-center justify-center">
                <Users className="h-6 w-6 text-green-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">New Customers</p>
                <p className="text-2xl font-bold text-blue-600">{customers.filter((customer) => new Date(customer.createdAt).getMonth() === new Date().getMonth()).length}</p>
                <p className="text-sm text-blue-600">This month</p>
              </div>
              <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <Plus className="h-6 w-6 text-blue-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Avg. Spend</p>
                <p className="text-2xl font-bold text-gray-900">$258.32</p>
                <p className="text-sm text-green-600">Per customer</p>
              </div>
              <div className="h-12 w-12 bg-gray-100 rounded-lg flex items-center justify-center">
                <Users className="h-6 w-6 text-gray-600" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex space-x-4">
          <div className="flex-1 relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search customers..."
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500"
            />
          </div>
          <button className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-lg text-gray-700 bg-white hover:bg-gray-50">
            <Filter className="h-4 w-4 mr-2" />
            Filter
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Customer
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Email
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Join Date
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Orders
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Total Spent
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {customers.map((customer) => (
                  <tr key={customer.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">{customer.firstName} {customer.lastName}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500">{customer.email}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500">{customer.createdAt.toLocaleDateString()}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {/* <div className="text-sm text-gray-900">{customer?.orders || 0}</div> */}
                      <div className="text-sm text-gray-900">N/A</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {/* <div className="text-sm text-gray-900">${customer?.totalSpent || 0}</div> */}
                      <div className="text-sm text-gray-900">$N/A</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                        {customer.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <button className="text-purple-600 hover:text-purple-900 mr-4">View</button>
                      <button className="text-gray-600 hover:text-gray-900">Edit</button>
                      <button onClick={handleDeleteCustomer(customer.id)}
                       className="text-red-600 hover:text-red-900 ml-4">Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
            
      {/* Add Customer Modal */}
      <AnimatePresence initial={false}>
  {isOpen && (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
    >
      <div className="relative w-full max-w-md p-6 bg-white rounded-xl shadow-xl">
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">Add Customer</h1>

        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
            <input onChange={(e) => setFirstName(e.target.value)}
              type="text"
              placeholder="First Name"
              className="block w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
            <input
              onChange={(e) => setLastName(e.target.value)}
              required
              type="text"
              placeholder="Last Name"
              className="block w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
            onChange={(e) => setEmail(e.target.value)}
              required
              type="email"
              placeholder="Email"
              className="block w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500"
            />
          </div>

            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <div className="flex items-center space-x-2">
            <input onChange={(e) => setPassword(e.target.value)}
              required
              type="password"
              value={password}
              placeholder="Password"
              className="block w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500"
            />
             <button
             onClick={handleGeneratePassword}
            type="button"
            className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition"
          >
            Generate
          </button>
            </div>

         
          <button
            type="submit"
            onClick={handleAddCustomer}
            className="w-full px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition"
          >
            {loading ? "Loading..." : "Add Customer"}
          </button>
        </form>
      </div>
    </motion.div>
  )}
</AnimatePresence>



    </div>
  );
}

export default CustomersPage;