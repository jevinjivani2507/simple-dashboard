import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Sidebar from "@/components/home/sidebar";
import ContactsSection from "@/components/home/contacts-section";
import Navbar from "@/components/home/navbar";

const inter = Inter({
  variable: "--font-inter-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "JusPay",
  description: "JusPay",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="hydrated">
      <body className={`${inter.variable} antialiased`}>
        <div className="bg-background flex h-screen">
          <Sidebar />

          <div className="flex flex-1 flex-col">
            <Navbar />
            {children}
          </div>

          <ContactsSection />
        </div>
      </body>
    </html>
  );
}
