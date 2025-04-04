import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import AuthProvider from "@/components/providers/auth-provider";
import { Analytics } from "@vercel/analytics/react"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "InclusiCart",
  description: "Discover a wide variety of products at InclusiCart - from electronics to fashion, home goods to beauty products. Enjoy seamless shopping, secure payments, and fast delivery. Shop now and experience the convenience of a global e-commerce marketplace",
  manifest : "./manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
       <AuthProvider>
        {children}
        <Analytics />
        </AuthProvider>
      </body>
    </html>
  );
}

export const viewport: Viewport = {
  themeColor: "#FFFFFF",
};
