"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useSession } from "next-auth/react"
import { redirect } from "next/navigation";



import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  AreaChart,
  Area,
} from "recharts"
import {
  TrendingUp,
  Users,
  CheckCircle,
  Clock,
  ArrowRight,
  Bell,
  Search,
  Filter,
  BarChart2,
  Calendar,
  Briefcase,
} from "lucide-react"
import { NEXT_AUTH } from "@/lib/auth"

const performanceData = [
  { name: "Jan", value: 65, tasks: 45 },
  { name: "Feb", value: 72, tasks: 52 },
  { name: "Mar", value: 68, tasks: 48 },
  { name: "Apr", value: 85, tasks: 65 },
  { name: "May", value: 78, tasks: 58 },
  { name: "Jun", value: 90, tasks: 70 },
]

const taskCompletionData = [
  { name: "Completed", value: 75, color: "#4F46E5" },
  { name: "In Progress", value: 15, color: "#818CF8" },
  { name: "Pending", value: 10, color: "#C7D2FE" },
]

const upcomingDeadlines = [
  {
    project: "Website Redesign",
    deadline: "2 days left",
    progress: 85,
    team: ["Sarah K.", "Mike R.", "Anna M."],
  },
  {
    project: "Mobile App Development",
    deadline: "1 week left",
    progress: 60,
    team: ["John D.", "Lisa P."],
  },
  {
    project: "Marketing Campaign",
    deadline: "2 weeks left",
    progress: 35,
    team: ["Tom H.", "Emma S.", "Chris B."],
  },
]

const recentActivities = [
  {
    user: "Sarah K.",
    action: "completed task",
    target: "Homepage Redesign",
    time: "2 hours ago",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100",
  },
  {
    user: "Mike R.",
    action: "commented on",
    target: "Mobile App Development",
    time: "4 hours ago",
    avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=100",
  },
  {
    user: "Anna M.",
    action: "started",
    target: "User Research Phase",
    time: "5 hours ago",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100",
  },
]


export default function Home() {

  const session = useSession();
  const user = session.data?.user;

  if (session.status === "unauthenticated") {
    redirect("/login");
  }
  
  return (
    <div>

    </div>
    // <div className="p-8 max-w-[1600px] mx-auto">
    //   <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8">
    //     <div className="flex-1">
    //       <h1 className="text-3xl font-bold mb-2 text-[#1E293B]">Welcome back, Alex</h1>
    //       <p className="text-[#64748B]">Here's what's happening with your projects today.</p>
    //     </div>
        
    //     <div className="flex items-center gap-4">
    //       <div className="relative">
    //         <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-[#64748B]" />
    //         <input
    //           type="search"
    //           placeholder="Search projects..."
    //           className="pl-10 pr-4 py-2 rounded-lg border border-[#E2E8F0] bg-white focus:outline-none focus:ring-2 focus:ring-[#4F46E5]/20 w-[250px]"
    //         />
    //       </div>
    //       <Button className="bg-[#4F46E5] hover:bg-[#4338CA] text-white">
    //         <Filter className="h-4 w-4 mr-2" />
    //         Filter
    //       </Button>
    //     </div>
    //   </div>

    //   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
    //     <Card className="p-6 bg-white hover:shadow-lg transition-shadow duration-300">
    //       <div className="flex items-center gap-4">
    //         <div className="p-3 rounded-lg bg-[#4F46E5]/10">
    //           <Briefcase className="h-6 w-6 text-[#4F46E5]" />
    //         </div>
    //         <div>
    //           <p className="text-[#64748B] text-sm">Total Projects</p>
    //           <h3 className="text-2xl font-bold text-[#1E293B]">24</h3>
    //           <p className="text-[#22C55E] text-sm font-medium">+3 new</p>
    //         </div>
    //       </div>
    //     </Card>

    //     <Card className="p-6 bg-white hover:shadow-lg transition-shadow duration-300">
    //       <div className="flex items-center gap-4">
    //         <div className="p-3 rounded-lg bg-[#22C55E]/10">
    //           <CheckCircle className="h-6 w-6 text-[#22C55E]" />
    //         </div>
    //         <div>
    //           <p className="text-[#64748B] text-sm">Completed Tasks</p>
    //           <h3 className="text-2xl font-bold text-[#1E293B]">156</h3>
    //           <p className="text-[#22C55E] text-sm font-medium">85% rate</p>
    //         </div>
    //       </div>
    //     </Card>

    //     <Card className="p-6 bg-white hover:shadow-lg transition-shadow duration-300">
    //       <div className="flex items-center gap-4">
    //         <div className="p-3 rounded-lg bg-[#F59E0B]/10">
    //           <Clock className="h-6 w-6 text-[#F59E0B]" />
    //         </div>
    //         <div>
    //           <p className="text-[#64748B] text-sm">Hours Logged</p>
    //           <h3 className="text-2xl font-bold text-[#1E293B]">1,248</h3>
    //           <p className="text-[#22C55E] text-sm font-medium">+10% vs last week</p>
    //         </div>
    //       </div>
    //     </Card>

    //     <Card className="p-6 bg-white hover:shadow-lg transition-shadow duration-300">
    //       <div className="flex items-center gap-4">
    //         <div className="p-3 rounded-lg bg-[#6366F1]/10">
    //           <Users className="h-6 w-6 text-[#6366F1]" />
    //         </div>
    //         <div>
    //           <p className="text-[#64748B] text-sm">Team Members</p>
    //           <h3 className="text-2xl font-bold text-[#1E293B]">12</h3>
    //           <p className="text-[#22C55E] text-sm font-medium">+2 this month</p>
    //         </div>
    //       </div>
    //     </Card>
    //   </div>

    //   <div className="grid grid-cols-12 gap-6 mb-6">
    //     <div className="col-span-12 lg:col-span-8">
    //       <Card className="p-6 bg-white">
    //         <div className="flex items-center justify-between mb-6">
    //           <div>
    //             <h3 className="text-xl font-bold text-[#1E293B] mb-1">Performance Overview</h3>
    //             <p className="text-[#64748B] text-sm">Monthly progress and productivity metrics</p>
    //           </div>
    //           {/* <div className="flex gap-2">
    //             {["This Week", "This Month", "This Year"].map((period) => (
    //               <Button
    //                 key={period}
    //                 variant={selectedPeriod === period ? "default" : "outline"}
    //                 onClick={() => setSelectedPeriod(period)}
    //                 className={selectedPeriod === period ? "bg-[#4F46E5] text-white" : "text-[#64748B]"}
    //               >
    //                 {period}
    //               </Button>
    //             ))}
    //           </div> */}
    //         </div>
    //         <div className="h-[300px]">
    //           <ResponsiveContainer width="100%" height="100%">
    //             <AreaChart data={performanceData}>
    //               <defs>
    //                 <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
    //                   <stop offset="5%" stopColor="#4F46E5" stopOpacity={0.1}/>
    //                   <stop offset="95%" stopColor="#4F46E5" stopOpacity={0}/>
    //                 </linearGradient>
    //               </defs>
    //               <CartesianGrid strokeDasharray="3 3" className="opacity-20" />
    //               <XAxis dataKey="name" stroke="#64748B" />
    //               <YAxis stroke="#64748B" />
    //               <Tooltip
    //                 contentStyle={{
    //                   backgroundColor: "white",
    //                   border: "1px solid #E2E8F0",
    //                   borderRadius: "8px",
    //                   boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
    //                 }}
    //               />
    //               <Area
    //                 type="monotone"
    //                 dataKey="value"
    //                 stroke="#4F46E5"
    //                 fillOpacity={1}
    //                 fill="url(#colorValue)"
    //               />
    //             </AreaChart>
    //           </ResponsiveContainer>
    //         </div>
    //       </Card>
    //     </div>

    //     <div className="col-span-12 lg:col-span-4">
    //       <Card className="p-6 bg-white h-full">
    //         <h3 className="text-xl font-bold text-[#1E293B] mb-6">Task Distribution</h3>
    //         <div className="h-[300px]">
    //           <ResponsiveContainer width="100%" height="100%">
    //             <PieChart>
    //               <Pie
    //                 data={taskCompletionData}
    //                 cx="50%"
    //                 cy="50%"
    //                 innerRadius={60}
    //                 outerRadius={80}
    //                 paddingAngle={5}
    //                 dataKey="value"
    //               >
    //                 {taskCompletionData.map((entry, index) => (
    //                   <Cell key={`cell-${index}`} fill={entry.color} />
    //                 ))}
    //               </Pie>
    //               <Tooltip
    //                 contentStyle={{
    //                   backgroundColor: "white",
    //                   border: "1px solid #E2E8F0",
    //                   borderRadius: "8px",
    //                   boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
    //                 }}
    //               />
    //             </PieChart>
    //           </ResponsiveContainer>
    //         </div>
    //         <div className="space-y-2 mt-4">
    //           {taskCompletionData.map((item, index) => (
    //             <div key={index} className="flex items-center justify-between">
    //               <div className="flex items-center gap-2">
    //                 <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
    //                 <span className="text-sm text-[#64748B]">{item.name}</span>
    //               </div>
    //               <span className="font-medium text-[#1E293B]">{item.value}%</span>
    //             </div>
    //           ))}
    //         </div>
    //       </Card>
    //     </div>
    //   </div>

    //   <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
    //     <Card className="p-6 bg-white">
    //       <div className="flex items-center justify-between mb-6">
    //         <h3 className="text-xl font-bold text-[#1E293B]">Upcoming Deadlines</h3>
    //         <Button variant="ghost" className="text-[#4F46E5] hover:text-[#4338CA]">
    //           View All
    //           <ArrowRight className="w-4 h-4 ml-2" />
    //         </Button>
    //       </div>
    //       <div className="space-y-6">
    //         {upcomingDeadlines.map((project, index) => (
    //           <div key={index} className="p-4 rounded-lg border border-[#E2E8F0] hover:shadow-md transition-shadow">
    //             <div className="flex justify-between items-start mb-4">
    //               <div>
    //                 <h4 className="font-medium text-[#1E293B] mb-1">{project.project}</h4>
    //                 <span className="text-sm px-2 py-1 rounded-full bg-[#4F46E5]/10 text-[#4F46E5]">
    //                   {project.deadline}
    //                 </span>
    //               </div>
    //               <div className="flex -space-x-2">
    //                 {project.team.map((member, idx) => (
    //                   <Avatar key={idx} className="border-2 border-white w-8 h-8">
    //                     <AvatarImage src={`https://i.pravatar.cc/32?u=${member}`} />
    //                     <AvatarFallback>{member[0]}</AvatarFallback>
    //                   </Avatar>
    //                 ))}
    //               </div>
    //             </div>
    //             <div className="flex items-center gap-4">
    //               <Progress value={project.progress} className="h-2 flex-1" />
    //               <span className="text-sm font-medium text-[#1E293B]">{project.progress}%</span>
    //             </div>
    //           </div>
    //         ))}
    //       </div>
    //     </Card>

    //     <Card className="p-6 bg-white">
    //       <div className="flex items-center justify-between mb-6">
    //         <h3 className="text-xl font-bold text-[#1E293B]">Recent Activities</h3>
    //         <Button variant="ghost" className="text-[#4F46E5] hover:text-[#4338CA]">
    //           View All
    //           <ArrowRight className="w-4 h-4 ml-2" />
    //         </Button>
    //       </div>
    //       <div className="space-y-6">
    //         {recentActivities.map((activity, index) => (
    //           <div
    //             key={index}
    //             className="flex items-center gap-4 p-4 rounded-lg hover:bg-[#F8FAFC] transition-colors"
    //           >
    //             <Avatar className="h-10 w-10">
    //               <AvatarImage src={activity.avatar} />
    //               <AvatarFallback>{activity.user[0]}</AvatarFallback>
    //             </Avatar>
    //             <div className="flex-1 min-w-0">
    //               <p className="text-sm text-[#1E293B]">
    //                 <span className="font-medium">{activity.user}</span>{" "}
    //                 <span className="text-[#64748B]">{activity.action}</span>{" "}
    //                 <span className="font-medium">{activity.target}</span>
    //               </p>
    //               <p className="text-xs text-[#64748B]">{activity.time}</p>
    //             </div>
    //             <Button variant="ghost" size="sm" className="text-[#4F46E5]">
    //               View
    //             </Button>
    //           </div>
    //         ))}
    //       </div>
    //     </Card>
    //   </div>
    // </div>
  )
}