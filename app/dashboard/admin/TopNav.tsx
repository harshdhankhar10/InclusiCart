"use client"

import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"
import { Search, Bell, User, Settings, LogOut, Calendar, MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useSession , signOut} from "next-auth/react"
import Swal from "sweetalert2"


export default function TopNav() {


  const pathname = usePathname()
  const [searchQuery, setSearchQuery] = useState("")
  const { data: session } = useSession();
  const userInfo = session?.user
  
  const getPageTitle = () => {
    const path = pathname.split("/").filter(Boolean)
    if (path.length === 0) return "Dashboard"
    return path.map((segment) => 
      segment.split("-").map(word => 
        word.charAt(0).toUpperCase() + word.slice(1)
      ).join(" ")
    ).join(" / ")
  }

    const handleSignOut = async () => {
      Swal.fire({
        title: "Are you sure?",
        text: "You will be signed out from your account",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, sign out",
        cancelButtonText: "No, cancel",
      }).then(async (result) => {
        if (result.isConfirmed) {
          await signOut()
        }
        window.location.href = "/"
      })
    }
  
  

  return (
    <div className="bg-white border-b border-[#E2E8F0] px-6 py-4">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold text-[#1E293B]">{getPageTitle()}</h1>
        
        <div className="flex items-center space-x-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-[#64748B]" />
            <Input
              type="search"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 pr-4 py-2 w-[250px] border-[#E2E8F0] focus:border-[#4F46E5] focus:ring-[#4F46E5]/20"
            />
          </div>
          
          <Button variant="ghost" size="icon" className="relative hover:bg-[#F1F5F9]">
            <Calendar className="h-5 w-5 text-[#64748B]" />
          </Button>

          <Button variant="ghost" size="icon" className="relative hover:bg-[#F1F5F9]">
            <MessageSquare className="h-5 w-5 text-[#64748B]" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-[#4F46E5] rounded-full"></span>
          </Button>
          
          <Button variant="ghost" size="icon" className="relative hover:bg-[#F1F5F9]">
            <Bell className="h-5 w-5 text-[#64748B]" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-[#4F46E5] rounded-full"></span>
          </Button>
          
          <div className="h-6 w-px bg-[#E2E8F0]"></div>
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="flex items-center gap-2 hover:bg-[#F1F5F9]">
                <Avatar className="h-8 w-8">
                  <AvatarImage src={userInfo?.profilePicture || "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32"} />
                  <AvatarFallback>{userInfo?.fullName?.charAt(0)}</AvatarFallback>
                </Avatar>
                <span className="text-md font-medium text-[#1E293B]">{userInfo?.fullName}</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56 p-2 shadow-lg bg-white rounded-lg">
              <DropdownMenuItem className="flex items-center gap-2 p-2 cursor-pointer hover:bg-[#F1F5F9] rounded-lg">
                <User className="h-4 w-4 text-[#64748B]" />
                <span className="text-sm text-[#1E293B]">Profile</span>
              </DropdownMenuItem>
              <DropdownMenuItem className="flex items-center gap-2 p-2 cursor-pointer hover:bg-[#F1F5F9] rounded-lg">
                <Settings className="h-4 w-4 text-[#64748B]" />
                <span className="text-sm text-[#1E293B]">Settings</span>
              </DropdownMenuItem>
              <div className="h-px bg-[#E2E8F0] my-2"></div>
              <DropdownMenuItem onClick={handleSignOut}
               className="flex items-center gap-2 p-2 cursor-pointer hover:bg-[#F1F5F9] text-[#DC2626] rounded-lg">
                <LogOut className="h-4 w-4" />
                <span className="text-sm">Sign out</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  )
}
