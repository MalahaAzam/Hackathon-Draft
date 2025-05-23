import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./Components/Navbar";
import Topheader from "./Components/Topheader";
import Mobilenavbar from "./Components/Mobilenavbar";
import Footer from "./Components/Footer";
import { CartProvider } from "../context/cartcontext";
import React from "react";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div>
          <Topheader />
          <div className="hidden md:block lg:block">
            <Navbar />
          </div>

          <div className="md:hidden">
            <Mobilenavbar />
          </div>
        </div>

        {/* Wrap everything inside the CartProvider */}
        <CartProvider>
          {children}
        </CartProvider>

        <Footer />
      </body>
    </html>
  );
}
