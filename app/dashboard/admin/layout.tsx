import { Inter } from "next/font/google";
import { getServerSession } from "next-auth";
import Sidebar from "./sidebar";
import TopNav from "./TopNav";
import { redirect } from "next/navigation"; 
import { prisma } from "@/lib/prisma";

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

  if (!session || userInfo?.role !== "ADMIN" || !userInfo) {
    redirect("/login"); 
  }

  return (
    <html suppressHydrationWarning lang="en">
      <head>
        <title>Your App</title>
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
