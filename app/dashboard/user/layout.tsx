
import { Inter } from "next/font/google";

import Sidebar from "./sidebar";
import TopNav from "./TopNav";
import { getServerSession } from "next-auth";
import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession();
  const userInfo = await prisma.user.findUnique({
    where: {
      email: session?.user?.email!,
    },
  });

  if (!session || userInfo?.role !== "USER") {
    redirect("/login"); 
  }



  return (
    <html suppressHydrationWarning lang="en">
      <head >
      </head>

      <body className={`${inter.className} bg-[#f8fafc]`}>
       <div className="flex h-screen overflow-hidden">
          <Sidebar />
          <div className="flex-1 flex flex-col overflow-hidden">
            <TopNav />
            <main className="flex-1 overflow-y-auto">{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}

