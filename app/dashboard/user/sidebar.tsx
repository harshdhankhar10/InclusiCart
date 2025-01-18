"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import {
  LayoutDashboard,
  Briefcase,
  CheckSquare,
  Users,
  BarChart,
  Calendar,
  FolderOpen,
  Settings,
  ChevronDown,
  Menu,
} from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import Image from "next/image"
import { useSession } from "next-auth/react"

const menuItems = [
    {
      title: "Dashboard",
      icon: LayoutDashboard,
      path: "/dashboard",
      submenu: ["Overview", "Order History", "Wishlist"],
    },
    {
      title: "Shop",
      icon: Briefcase,
      path: "/shop",
      submenu: ["Categories", "All Products", "Top Picks", "Sale Items"],
    },
    {
      title: "Orders",
      icon: CheckSquare,
      path: "/orders",
      submenu: ["My Orders", "Track Order", "Returns", "Refunds"],
    },
    {
      title: "Account",
      icon: Users,
      path: "/account",
      submenu: ["Profile", "Address Book", "Payment Methods", "Settings"],
    },
    {
      title: "Support",
      icon: BarChart,
      path: "/support",
      submenu: ["Help Center", "Contact Us", "FAQs"],
    },
    {
      title: "Notifications",
      icon: Calendar,
      path: "/notifications",
      submenu: ["All Notifications", "Promotions", "Order Updates"],
    },
    {
      title: "Wishlist",
      icon: FolderOpen,
      path: "/wishlist",
      submenu: ["Saved Items", "Share Wishlist"],
    },
    {
      title: "Settings",
      icon: Settings,
      path: "/settings",
      submenu: ["Account Settings", "Privacy", "Security"],
    },
  ]
  
export default function Sidebar() {
  const [expanded, setExpanded] = useState<string | null>(null)
  const [isCollapsed, setIsCollapsed] = useState(false)
  const pathname = usePathname()
    const { data: session } = useSession();
    const userInfo = session?.user
  

  return (
    <motion.aside
      initial={{ width: 280 }}
      animate={{ width: isCollapsed ? 80 : 280 }}
      className={cn(
        "bg-white border-r border-[#E2E8F0] h-screen relative flex flex-col",
        isCollapsed ? "items-center" : ""
      )}
    >
      <div className={cn(
        "p-6 flex items-center",
        isCollapsed ? "justify-center" : "justify-between"
      )}>
        {!isCollapsed && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex items-center gap-2"
          >
            <div className="w-48  h-8 rounded-lg flex items-center justify-center relative -left-6">
              <img  src="/web-logo.png" alt="Logo" />
            </div>
            <h1 className="text-xl font-bold text-[#1E293B]">
              
            </h1>
          </motion.div>
        )}
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="hover:bg-[#F1F5F9]"
        >
          <Menu className="h-5 w-5 text-[#64748B]" />
        </Button>
      </div>

      <div className={cn(
        "px-4 py-2",
        isCollapsed ? "w-full flex justify-center" : ""
      )}>
        <div className={cn(
          "flex items-center gap-3 p-2 rounded-lg bg-[#F8FAFC]",
          isCollapsed ? "justify-center" : ""
        )}>
          <Avatar className="h-10 w-10 border-2 border-[#4F46E5]/20">
            <AvatarImage src={userInfo?.profilePicture} alt={userInfo?.fullName} />
            <AvatarFallback>{userInfo?.fullName.slice(0, 2).toLocaleUpperCase()}</AvatarFallback>
          </Avatar>
          {!isCollapsed && (
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-[#1E293B] truncate">{userInfo?.fullName}</p>
              <p className="text-xs text-[#64748B] truncate">{userInfo?.email}</p>
            </div>
          )}
        </div>
      </div>

      <ScrollArea className="flex-1 w-full px-4">
        <nav className="space-y-2 py-4">
          {menuItems.map((item) => (
            <div key={item.title}>
              <button
                onClick={() => setExpanded(expanded === item.title ? null : item.title)}
                className={cn(
                  "flex items-center w-full p-3 rounded-lg text-sm font-medium transition-all duration-200",
                  pathname.startsWith(item.path)
                    ? "bg-[#4F46E5] text-white shadow-lg shadow-[#4F46E5]/20"
                    : "hover:bg-[#F1F5F9] text-[#64748B] hover:text-[#1E293B]",
                  isCollapsed ? "justify-center" : ""
                )}
              >
                <item.icon className={cn("h-5 w-5", isCollapsed ? "" : "mr-3")} />
                {!isCollapsed && (
                  <>
                    <span className="flex-1">{item.title}</span>
                    <ChevronDown
                      className={cn(
                        "h-4 w-4 transition-transform",
                        expanded === item.title && "transform rotate-180"
                      )}
                    />
                  </>
                )}
              </button>
              {expanded === item.title && !isCollapsed && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="overflow-hidden"
                >
                  <div className="pl-11 pr-3 py-2 space-y-1">
                    {item.submenu.map((subItem) => (
                      <Link
                        key={subItem}
                        href={`/dashboard/manager${item.path}/${subItem.toLowerCase().replace(/ /g, "-")}`}
                        className={cn(
                          "block py-2 px-3 rounded-lg text-sm transition-colors",
                          pathname === `${item.path}/${subItem.toLowerCase().replace(/ /g, "-")}`
                            ? "text-[#4F46E5] bg-[#4F46E5]/5 font-medium"
                            : "text-[#64748B] hover:text-[#1E293B] hover:bg-[#F1F5F9]"
                        )}
                      >
                        {subItem}
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </div>
          ))}
        </nav>
      </ScrollArea>

      {!isCollapsed && (
        <div className="p-4 mt-auto">
          <div className="rounded-lg bg-[#F8FAFC] p-4">
            <h5 className="text-sm font-medium text-[#1E293B] mb-2">Need Help?</h5>
            <p className="text-xs text-[#64748B] mb-3">
              Our team is here to help. If need assistance, feel free to reach out to us.
            </p>
            <Button size="sm" className="w-full bg-[#4F46E5] hover:bg-[#4338CA] text-white">
                Contact Support
            </Button>
          </div>
        </div>
      )}
    </motion.aside>
  )
}