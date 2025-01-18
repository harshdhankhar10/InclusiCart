"use client";

import { Inter } from "next/font/google";
import AuthProvider from "@/components/providers/auth-provider";

import Sidebar from "./sidebar";
import TopNav from "./TopNav";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head >
      </head>

      <body className={`${inter.className} bg-[#f8fafc]`}>
       <AuthProvider>
       <div className="flex h-screen overflow-hidden">
          <Sidebar />
          <div className="flex-1 flex flex-col overflow-hidden">
            <TopNav />
            <main className="flex-1 overflow-y-auto">{children}</main>
          </div>
        </div>
        </AuthProvider>
      </body>
    </html>
  );
}

