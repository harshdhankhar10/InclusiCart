import { Inter } from "next/font/google";
import { getServerSession } from "next-auth";
import Sidebar from "./sidebar";
import TopNav from "./TopNav";
import { redirect } from "next/navigation"; 
import { prisma } from "@/lib/prisma";
import { Metadata } from "next";
const inter = Inter({ subsets: ["latin"] });


export const metadata: Metadata = {
  title: "Admin Dashboard | InclusiCart",
  description: "Discover a wide variety of products at InclusiCart - from electronics to fashion, home goods to beauty products. Enjoy seamless shopping, secure payments, and fast delivery. Shop now and experience the convenience of a global e-commerce marketplace",
};


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
